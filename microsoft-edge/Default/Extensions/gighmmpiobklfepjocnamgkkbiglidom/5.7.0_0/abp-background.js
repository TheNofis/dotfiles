/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6907:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./vendor/webext-sdk/dist/ewe-api.js
var ewe_api = __webpack_require__(3817);
;// CONCATENATED MODULE: ./node_modules/@eyeo/snippets/webext/ml.mjs
/*!
 * This file is part of eyeo's Anti-Circumvention Snippets module (@eyeo/snippets),
 * Copyright (C) 2006-present eyeo GmbH
 * 
 * @eyeo/snippets is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 * 
 * @eyeo/snippets is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with @eyeo/snippets.  If not, see <http://www.gnu.org/licenses/>.
 */

const callback = (environment, ...filters) => {
const t=Proxy,{apply:e,bind:i,call:s}=Function,o=s.bind(e),r=s.bind(i),u=s.bind(s),a={get:(t,e)=>r(s,t[e])},n=e=>new t(e,a),L={get:(t,e)=>r(t[e],t)},M=e=>new t(e,L),{assign:C,defineProperties:w,freeze:y,getOwnPropertyDescriptor:v,getOwnPropertyDescriptors:D,getPrototypeOf:g}=M(Object);n({});const{species:l}=Symbol,p={get(t,e){const i=t[e];class s extends i{}const o=D(i.prototype);delete o.constructor,y(w(s.prototype,o));const r=D(i);return delete r.length,delete r.prototype,r[l]={value:s},y(w(s,r))}},j=e=>new t(e,p),A="undefined"!=typeof environment?environment:{};"undefined"==typeof globalThis&&(window.globalThis=window);const{apply:c,ownKeys:I}=M(Reflect),m="world"in A,h=m&&"ISOLATED"===A.world,O=m&&"MAIN"===A.world,z="object"==typeof chrome&&!!chrome.runtime,x="object"==typeof browser&&!!browser.runtime,d=!O&&(h||z||x),K=t=>d?t:P(t,T(t)),{create:P,defineProperties:Y,defineProperty:Q,freeze:b,getOwnPropertyDescriptor:E,getOwnPropertyDescriptors:T}=M(Object),S=M(globalThis),f=d?globalThis:j(globalThis),{Map:q,RegExp:k,Set:G,WeakMap:N,WeakSet:B}=f,U=(t,e,i=null)=>{const s=I(e);for(const o of I(t)){if(s.includes(o))continue;const r=E(t,o);if(i&&"value"in r){const{value:t}=r;"function"==typeof t&&(r.value=i(t))}Q(e,o,r)}},J=t=>{const e=f[t];class i extends e{}const{toString:s,valueOf:o}=e.prototype;Y(i.prototype,{toString:{value:s},valueOf:{value:o}});const r=t.toLowerCase(),u=t=>function(){const e=c(t,this,arguments);return typeof e===r?new i(e):e};return U(e,i,u),U(e.prototype,i.prototype,u),i},W=b({frozen:new N,hidden:new B,iframePropertiesToAbort:{read:new G,write:new G},abortedIframes:new N}),F=new k("^[A-Z]");var R=new Proxy(new q([["chrome",d&&(z&&chrome||x&&browser)||void 0],["isExtensionContext",d],["variables",W],["console",K(console)],["document",globalThis.document],["performance",K(performance)],["JSON",K(JSON)],["Map",q],["Math",K(Math)],["Number",d?Number:J("Number")],["RegExp",k],["Set",G],["String",d?String:J("String")],["WeakMap",N],["WeakSet",B],["MouseEvent",MouseEvent]]),{get(t,e){if(t.has(e))return t.get(e);let i=globalThis[e];return"function"==typeof i&&(i=(F.test(e)?f:S)[e]),t.set(e,i),i},has:(t,e)=>t.has(e)});const H={WeakSet:WeakSet,WeakMap:WeakMap,WeakValue:class{has(){return!1}set(){}}},{apply:V}=Reflect;const{Map:Z,WeakMap:X,WeakSet:_,setTimeout:$}=R;let tt=!0,et=t=>{t.clear(),tt=!tt};var it=function(t){const{WeakSet:e,WeakMap:i,WeakValue:s}=this||H,o=new e,r=new i,u=new s;return function(e){if(o.has(e))return e;if(r.has(e))return r.get(e);if(u.has(e))return u.get(e);const i=V(t,this,arguments);return o.add(i),i!==e&&("object"==typeof e&&e?r:u).set(e,i),i}}.bind({WeakMap:X,WeakSet:_,WeakValue:class extends Z{set(t,e){return tt&&(tt=!tt,$(et,0,this)),super.set(t,e)}}});const{concat:st,includes:ot,join:rt,reduce:ut,unshift:at}=n([]),nt=j(globalThis),{Map:Lt,WeakMap:Mt}=nt,Ct=new Lt,wt=e=>{const i=(t=>{const e=[];let i=t;for(;i;){if(Ct.has(i))at(e,Ct.get(i));else{const t=D(i);Ct.set(i,t),at(e,t)}i=g(i)}return at(e,{}),o(C,null,e)})("function"==typeof e?e.prototype:e),s={get(t,e){if(e in i){const{value:s,get:o}=i[e];if(o)return u(o,t);if("function"==typeof s)return r(s,t)}return t[e]},set(t,e,s){if(e in i){const{set:o}=i[e];if(o)return u(o,t,s),!0}return t[e]=s,!0}};return e=>new t(e,s)},{isExtensionContext:yt,Array:vt,Number:Dt,String:gt,Object:lt}=R,{isArray:pt}=vt,{getOwnPropertyDescriptor:jt,setPrototypeOf:At}=lt,{toString:ct}=lt.prototype,{slice:It}=gt.prototype,{get:mt}=jt(Node.prototype,"nodeType"),ht=yt?{}:{Attr:wt(Attr),CanvasRenderingContext2D:wt(CanvasRenderingContext2D),CSSStyleDeclaration:wt(CSSStyleDeclaration),Document:wt(Document),Element:wt(Element),HTMLCanvasElement:wt(HTMLCanvasElement),HTMLElement:wt(HTMLElement),HTMLImageElement:wt(HTMLImageElement),HTMLScriptElement:wt(HTMLScriptElement),MutationRecord:wt(MutationRecord),Node:wt(Node),ShadowRoot:wt(ShadowRoot),get CSS2Properties(){return ht.CSSStyleDeclaration}},Ot=(t,e)=>{if("Element"!==e&&e in ht)return ht[e](t);if(pt(t))return At(t,vt.prototype);const i=(t=>u(It,u(ct,t),8,-1))(t);if(i in ht)return ht[i](t);if(i in R)return At(t,R[i].prototype);if("nodeType"in t)switch(u(mt,t)){case 1:if(!(e in ht))throw new Error("unknown hint "+e);return ht[e](t);case 2:return ht.Attr(t);case 3:return ht.Node(t);case 9:return ht.Document(t)}throw new Error("unknown brand "+i)};var zt=yt?t=>t===window||t===globalThis?R:t:it(((t,e="Element")=>{if(t===window||t===globalThis)return R;switch(typeof t){case"object":return t&&Ot(t,e);case"string":return new gt(t);case"number":return new Dt(t);default:throw new Error("unsupported value")}}));let{document:xt,getComputedStyle:dt,isExtensionContext:Kt,variables:Pt,Array:Yt,MutationObserver:Qt,Object:bt,XPathEvaluator:Et,XPathExpression:Tt,XPathResult:St}=zt(window),{querySelectorAll:ft}=xt,qt=ft&&r(ft,xt);const{assign:kt,setPrototypeOf:Gt}=bt;class Nt extends Tt{evaluate(...t){return Gt(o(super.evaluate,this,t),St.prototype)}}class Bt extends Et{createExpression(...t){return Gt(o(super.createExpression,this,t),Nt.prototype)}}function Ut(t){if(Pt.hidden.has(t))return;!function(t){Kt&&"function"==typeof checkElement&&checkElement(t)}(t),Pt.hidden.add(t);let{style:e}=zt(t),i=zt(e,"CSSStyleDeclaration"),s=zt([]),{debugCSSProperties:o}=A;for(let[t,e]of o||[["display","none"]])i.setProperty(t,e,"important"),s.push([t,i.getPropertyValue(t)]);new Qt((()=>{for(let[t,e]of s){let s=i.getPropertyValue(t),o=i.getPropertyPriority(t);s==e&&"important"==o||i.setProperty(t,e,"important")}})).observe(t,{attributes:!0,attributeFilter:["style"]})}function Jt(t){let e=t;if(e.startsWith("xpath(")&&e.endsWith(")")){let t=e.slice(6,-1),i=(new Bt).createExpression(t,null),s=St.ORDERED_NODE_SNAPSHOT_TYPE;return t=>{if(!t)return;let e=i.evaluate(xt,s,null),{snapshotLength:o}=e;for(let i=0;i<o;i++)t(e.snapshotItem(i))}}return e=>qt(t).forEach(e)}function Wt(t,e,i,s){let o;null==i&&(i=e);const r=()=>{for(const r of qt(i)){const i=zt(r).closest(e);i&&t(r,i)&&(o(),Ut(i),"function"==typeof s&&s(i))}};return kt(new Qt(r),{race(t){o=t,this.observe(xt,{childList:!0,characterData:!0,subtree:!0}),r()}})}function Ft(t,e,i){let s=zt(e,"CSSStyleDeclaration");if("none"==s.getPropertyValue("display"))return!1;let o=s.getPropertyValue("visibility");if("hidden"==o||"collapse"==o)return!1;if(!i||t==i)return!0;let r=zt(t).parentElement;return!r||Ft(r,dt(r),i)}function Rt(t){let e=dt(t),{cssText:i}=e;if(i)return i;for(let t of e)i+=`${t}: ${e[t]}; `;return zt(i).trim()}let{Math:Ht,RegExp:Vt}=zt(window);function Zt(t){let{length:e}=t;if(e>1&&"/"===t[0]){let i="/"===t[e-1];if(i||e>2&&zt(t).endsWith("/i")){let e=[zt(t).slice(1,i?-1:-2)];return i||e.push("i"),new Vt(...e)}}return new Vt(zt(t).replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"))}let Xt=!1;function _t(){return Xt}const{console:$t}=zt(window),te=()=>{};function ee(...t){_t()&&zt(t).unshift("%c DEBUG","font-weight: bold"),$t.log(...t)}function ie(t){return r(_t()?ee:te,null,t)}let{Array:se,Error:oe,Map:re,parseInt:ue}=zt(window),ae=null,ne=null;function Le(t,e){if(null===ae)return te;let i=ae,{participants:s}=i;return s.set(o,e),o;function o(){if(i.winners<1)return;if(ie("race")(`${t} won the race`),i===ae)ne.push(o);else if(s.delete(o),--i.winners<1){for(let t of s.values())t();s.clear()}}}let{MutationObserver:Me}=zt(window);let{clearTimeout:Ce,fetch:we,getComputedStyle:ye,setTimeout:ve,Map:De,MutationObserver:ge,Uint8Array:le}=zt(window);let pe=new De;function je(t,{as:e="arrayBuffer",cleanup:i=6e4}={}){let s=e+":"+t,o=pe.get(s)||{remove:()=>pe.delete(s),result:null,timer:0};return Ce(o.timer),o.timer=ve(o.remove,i),o.result||(o.result=we(t).then((t=>t[e]())).catch(o.remove),pe.set(s,o)),o.result}function Ae(t){return t.reduce(((t,e)=>t+function(t,e=2){let i=zt(t).toString(16);return i.length<e&&(i=zt("0").repeat(e-i.length)+i),i}(e)),"")}const{parseFloat:ce,Math:Ie,MutationObserver:me,WeakSet:he}=zt(window),{min:Oe}=Ie,ze=(t,e)=>{const i=t.length+1,s=e.length+1,o=[[0]];let r=0,u=0;for(;++r<s;)o[0][r]=r;for(r=0;++r<i;){const i=t[u];let a=0,n=0;for(o[r]=[r];++a<s;)o[r][a]=Oe(o[u][a]+1,o[r][n]+1,o[u][n]+(i!=e[n])),++n;++u}return o[i-1][s-1]};let{getComputedStyle:xe,Map:de,WeakSet:Ke,parseFloat:Pe}=zt(window);const{ELEMENT_NODE:Ye,TEXT_NODE:Qe}=Node;let{MutationObserver:be}=zt(window);let{getComputedStyle:Ee,MutationObserver:Te,WeakSet:Se}=zt(window);zt(window);const fe={mark(){},end(){},toString:()=>"{mark(){},end(){}}"};let{MutationObserver:qe,WeakSet:ke}=zt(window);const{ELEMENT_NODE:Ge}=Node;let{parseInt:Ne,setTimeout:Be,Error:Ue,MouseEvent:Je,MutationObserver:We,WeakSet:Fe}=zt(window);let{parseInt:Re,setTimeout:He,Error:Ve,MouseEvent:Ze,MutationObserver:Xe,WeakSet:_e}=zt(window);const $e={log:ee,race:function(t,e="1"){switch(t){case"start":ae={winners:ue(e,10)||1,participants:new re},ne=new se;break;case"end":case"finish":case"stop":ae=null;for(let t of ne)t();ne=null;break;default:throw new oe(`Invalid action: ${t}`)}},debug:function(){Xt=!0},"hide-if-matches-xpath":function(t,e){const{mark:i,end:s}=fe,o=ie("hide-if-matches-xpath"),r=e=>{const r=Jt(`xpath(${t})`),u=new ke,a=()=>{i(),r((e=>{if(u.has(e))return!1;u.add(e),L(),zt(e).nodeType===Ge?Ut(e):zt(e).textContent="",o("Matched: ",e," for selector: ",t)})),s()},n=new qe(a),L=Le("hide-if-matches-xpath",(()=>n.disconnect()));n.observe(e,{characterData:!0,childList:!0,subtree:!0}),a()};if(e){let t,i=0;const s=Jt(`xpath(${e})`),o=()=>{s((t=>{r(t),i++})),i>0&&t.disconnect()};t=new qe(o),t.observe(document,{characterData:!0,childList:!0,subtree:!0}),o()}else r(document)},"hide-if-contains":function(t,e="*",i=null){const s=ie("hide-if-contains");let o=Zt(t);const r=Wt((t=>o.test(zt(t).textContent)),e,i,(t=>{s("Matched: ",t," for selector: ",e,i)}));r.race(Le("hide-if-contains",(()=>{r.disconnect()})))},"hide-if-contains-similar-text":function(t,e,i=null,s=0,o=0){const r=new he,u=ie("hide-if-contains-similar-text"),a=zt(t),{length:n}=a,L=n+ce(s)||0,M=zt([...a]).sort(),C=ce(o)||1/0;null==i&&(i=e),u("Looking for similar text: "+a);const w=()=>{for(const t of qt(i)){if(r.has(t))continue;r.add(t);const{innerText:i}=zt(t),o=Oe(C,i.length-L+1);for(let r=0;r<o;r++){const o=zt(i).substr(r,L);if(ze(M,zt([...o]).sort())-s<=0){const i=zt(t).closest(e);if(u("Found similar text: "+a,i),i){v(),Ut(i);break}}}}};let y=new me(w),v=Le("hide-if-contains-similar-text",(()=>y.disconnect()));y.observe(document,{childList:!0,characterData:!0,subtree:!0}),w()},"hide-if-contains-visible-text":function(t,e,i=null,...s){let o=zt([]);const r=new de([["-snippet-box-margin","2"],["-disable-bg-color-check","false"],["-check-is-contained","false"]]);for(let t of s){t=zt(t);let e=t.indexOf(":");if(e<0)continue;let i=t.slice(0,e).trim().toString(),s=t.slice(e+1).trim().toString();i&&s&&(r.has(i)?r.set(i,s):o.push([i,s]))}let u=zt([["opacity","0"],["font-size","0px"],["color","rgba(0, 0, 0, 0)"]]),a=new de(u.concat(o));function n(t,e,{bgColorCheck:i=!0}={}){e||(e=xe(t)),e=zt(e);for(const[t,i]of a){if(Zt(i).test(e.getPropertyValue(t)))return!1}let s=e.getPropertyValue("color");return!i||e.getPropertyValue("background-color")!=s}function L(t,e,{bgColorCheck:i=!0}={}){let s=xe(t,e);if(!Ft(t,s)||!n(t,s,{bgColorCheck:i}))return"";let{content:o}=zt(s);if(o&&"none"!==o){let e=zt([]);return o=zt(o).trim().replace(/(["'])(?:(?=(\\?))\2.)*?\1/g,(t=>""+(e.push(zt(t).slice(1,-1))-1))),o=o.replace(/\s*attr\(\s*([^\s,)]+)[^)]*?\)\s*/g,((e,i)=>zt(t).getAttribute(i)||"")),o.replace(/\x01(\d+)/g,((t,i)=>e[i]))}return""}function M(t,e,{boxMargin:i=2}={}){const s=zt(t).getBoundingClientRect(),o=zt(e).getBoundingClientRect(),r=o.left-i,u=o.right+i,a=o.top-i,n=o.bottom+i;return r<=s.left&&s.left<=u&&a<=s.top&&s.top<=n&&a<=s.bottom&&s.bottom<=n&&r<=s.right&&s.right<=u}function C(t,e,i,s,o,{boxMargin:r=2,bgColorCheck:u,checkIsContained:a}={}){let w=!i;if(w&&(i=xe(t)),!Ft(t,i,w&&e))return"";s||"hidden"!==zt(i).getPropertyValue("overflow-x")&&"hidden"!==zt(i).getPropertyValue("overflow-y")||(s=t);let y=L(t,":before",{bgColorCheck:u});for(let e of zt(t).childNodes)switch(zt(e).nodeType){case Ye:y+=C(e,t,xe(e),s,o,{boxMargin:r,bgColorCheck:u,checkIsContained:a});break;case Qe:if(s)M(t,s,{boxMargin:r})&&n(t,i,{bgColorCheck:u})&&(y+=zt(e).nodeValue);else if(n(t,i,{bgColorCheck:u})){if(a&&!M(t,o,{boxMargin:r}))continue;y+=zt(e).nodeValue}}return y+L(t,":after",{bgColorCheck:u})}const w=r.get("-snippet-box-margin"),y=Pe(w)||0,v=!("true"===r.get("-disable-bg-color-check")),D="true"===r.get("-check-is-contained");let g=Zt(t),l=new Ke;const p=Wt(((t,e)=>{if(l.has(t))return!1;l.add(t);let i=C(t,e,null,null,t,{boxMargin:y,bgColorCheck:v,checkIsContained:D}),s=g.test(i);return _t()&&i.length&&ee(s,g,i),s}),e,i);p.race(Le("hide-if-contains-visible-text",(()=>{p.disconnect()})))},"hide-if-contains-and-matches-style":function(t,e="*",i=null,s=null,o=null){const r=ie("hide-if-contains-and-matches-style");null==i&&(i=e);let u=Zt(t),a=s?Zt(s):null,n=o?Zt(o):null,L=()=>{for(let t of qt(i))if(u.test(zt(t).textContent)&&(!n||n.test(Rt(t)))){const i=zt(t).closest(e);if(!i)continue;const s=Rt(i);!a||a.test(s)?(C(),Ut(i),r("Matched: ",i," for params: ",...arguments)):r("In this element the searchStyle matched but style didn't:\n",i,s)}},M=new Me(L),C=Le("hide-if-contains-and-matches-style",(()=>M.disconnect()));M.observe(document,{childList:!0,characterData:!0,subtree:!0}),L()},"hide-if-has-and-matches-style":function(t,e="*",i=null,s=null,o=null){const r=ie("hide-if-has-and-matches-style");null==i&&(i=e);let u=s?Zt(s):null,a=o?Zt(o):null,n=()=>{for(let s of qt(i))if(zt(s).querySelector(t)&&(!a||a.test(Rt(s)))){let t=zt(s).closest(e);const i=Rt(t);!t||u&&!u.test(i)?r("In this element the searchStyle matched but style didn't:\n",t,i):(M(),Ut(t),r("Matched: ",t," for params: ",...arguments))}},L=new be(n),M=Le("hide-if-has-and-matches-style",(()=>L.disconnect()));L.observe(document,{childList:!0,subtree:!0}),n()},"hide-if-labelled-by":function(t,e,i=null){let s=null==i,o=Zt(t),r=new Se,u=()=>{for(let t of qt(e)){let e=s?t:zt(t).closest(i);if(!e||!Ft(t,Ee(t),e))continue;let u=zt(t).getAttribute("aria-labelledby"),a=()=>{r.has(e)||o.test(zt(t).getAttribute("aria-label")||"")&&(n(),r.add(e),Ut(e))};if(u)for(let t of zt(u).split(/\s+/)){let i=zt(document).getElementById(t);i?!r.has(i)&&o.test(i.innerText)&&(n(),r.add(i),Ut(e)):a()}else a()}},a=new Te(u),n=Le("hide-if-labelled-by",(()=>a.disconnect()));a.observe(document,{characterData:!0,childList:!0,subtree:!0}),u()},"hide-if-contains-image":function(t,e,i){null==i&&(i=e);let s=Zt(t);const o=ie("hide-if-contains-image");let r=()=>{for(let t of qt(i)){let i=ye(t),r=zt(i["background-image"]).match(/^url\("(.*)"\)$/);r&&je(r[1]).then((i=>{if(s.test(Ae(new le(i)))){let i=zt(t).closest(e);i&&(a(),Ut(i),o("Matched: ",i," for:",...arguments))}}))}},u=new ge(r),a=Le("hide-if-contains-image",(()=>u.disconnect()));u.observe(document,{childList:!0,subtree:!0}),r()},"simulate-event-poc":function(t,e,i="0"){if(!t)throw new Ue("[simulate-event snippet]: No event type provided.");if(!e)throw new Ue("[simulate-event snippet]: No selector provided.");let s=Jt(e),o=Ne(i,10),r=new Fe;function u(){s((e=>{r.has(e)||(r.add(e),Be((()=>{zt(e).dispatchEvent(new Je(t,{bubbles:!0,cancelable:!0}))}),o))}))}new We(u).observe(document,{childList:!0,subtree:!0}),u()},"simulate-mouse-event":function(...t){const e=ie("simulate-mouse-event");if(t.length<1)throw new Ve("[simulate-mouse-event snippet]: No selector provided.");t.length>7&&(t=t.slice(0,7));const i=zt([]);function s(){return i.forEach((t=>{if(!t.found){(function(t){let e=t;if(e.startsWith("xpath(")&&e.endsWith(")")){let e=Jt(t);return()=>{let t=zt([]);return e((e=>t.push(e))),t}}return()=>Yt.from(qt(t))})(t.selector)().length>0&&(t.found=!0)}})),i.every((t=>t.found))}function o(t,i,s){t&&i&&("click"===i&&t.click?(t.click(),e("Clicked on this node:\n",t,"\nwith a delay of",s,"ms")):(t.dispatchEvent(new Ze(i,{bubbles:!0,cancelable:!0})),e("A",i,"event was dispatched with a delay of",s,"ms on this node:\n",t)))}zt(t).forEach((t=>{const e=function(t){if(!t)return null;const e={selector:"",continue:!1,trigger:!1,event:"click",delay:"500",clicked:!1,found:!1},i=t.split("$");let s=[];i.length>=2&&(s=i[1].toLowerCase().split(",")),[e.selector]=i;for(const t of s)if("trigger"===t)e.trigger=!0;else if("continue"===t)e.continue=!0;else if(t.startsWith("event")){const i=t.toLowerCase().split("=");i[1]?e.event=i[1]:e.event="click"}else if(t.startsWith("delay")){const i=t.toLowerCase().split("=");i[1]?e.delay=i[1]:e.delay="500"}return e}(t);i.push(e)}));let r=!1;const[u]=i.slice(-1);u.trigger=!0;let a=new _e;function n(){if(r||(r=s()),r)for(const t of i){const e=Jt(t.selector),i=Re(t.delay,10);t.trigger&&e((e=>{a.has(e)||(a.add(e),t.continue?setInterval((()=>{o(e,t.event,t.delay)}),i):He((()=>{o(e,t.event,t.delay)}),i))}))}}new Xe(n).observe(document,{childList:!0,subtree:!0}),n()}};let{requestAnimationFrame:ti,MutationObserver:ei,WeakSet:ii,console:si}=zt(window);$e["hide-if-graph-matches"]=function(t,e){let i=globalThis.ml,s=new ii,o=!1,r=!1,u="AD,PRED,DTG,DFS,INF,EV,TOTAL\n",a=0;t.startsWith("mldebug:")&&(r=!0,t=t.slice(8)),t=t.split("..");let n=new ei((function(){o||(o=!0,ti((()=>{o=!1,M()})))})),L=Le("hide-if-graph-matches",(()=>n.disconnect()));async function M(){let o=[...t],n=document,M=[];for(;o.length>1;){let t,e=o.shift();try{t=n.querySelector(e),e&&t&&(n=t.parentElement)}catch(t){n=document;break}}try{M=n.querySelectorAll(o.shift())}catch(t){}for(let t of M){if(!zt(t).innerHTML)continue;let o=zt(t).querySelectorAll(e);0===o.length&&(o=[t]);for(let e of o)if(!s.has(t)&&(s.add(t),zt(e).innerHTML))if(r){let t={dtNow:Date.now(),dtDomToGraph:0,dtPreprocessGraph:0,dtPredict:0,dtDigestPrediction:0,predictions:[],isAd:null,target:e},s=await i.util.domToGraph(i.data.hideIfGraphMatchesConfig.config,e,i.model);t.dtDomToGraph=Date.now();let o=await i.util.preprocessGraph(i.data.hideIfGraphMatchesConfig.config,s,window.location.hostname);t.dtPreprocessGraph=Date.now(),t.predictions=await i.util.predict(i.tfjs,i.model,i.data.hideIfGraphMatchesConfig.config,o),t.dtPredict=Date.now(),t.isAd=await i.util.digestPrediction(t.predictions),t.dtDigestPrediction=Date.now(),si.log("%cMLDB ♥ %c| PRED: %s, DTG: %sms, DFS: %sms, INF: %sms, EV: %sms, TOTAL: %sms | %cAd: %s%c |","color:cyan","color:inherit",JSON.stringify(t.predictions),t.dtDomToGraph-t.dtNow,t.dtPreprocessGraph-t.dtDomToGraph,t.dtPredict-t.dtPreprocessGraph,t.dtDigestPrediction-t.dtPredict,t.dtDigestPrediction-t.dtNow,t.isAd?"color:red":"color:green",t.isAd,"color:inherit",e),a+=1,u+=`            ${t.isAd},            ${JSON.stringify(t.predictions)},            ${t.dtDomToGraph-t.dtNow},            ${t.dtPreprocessGraph-t.dtDomToGraph},            ${t.dtPredict-t.dtPreprocessGraph},            ${t.dtDigestPrediction-t.dtPredict},            ${t.dtDigestPrediction-t.dtNow}\n          `,a>9&&(a=0,si.log("%cMLDB CSV ♥%c\n%s","color:cyan","color:inherit",u.replace(/ /g,"")))}else i.util.inference(i.tfjs,i.model,i.data.hideIfGraphMatchesConfig.config,e).then((e=>{e&&(L(),Ut(t))})).catch((t=>{}))}}!function t(e=0){if(!i)throw new Error("ml not available.");if(!i.model){if(e>2e3)throw new Error("ml failed to initialize.");return ti(t)}n.observe(document,{childList:!0,subtree:!0}),M()}()}
/*!
 * This file is part of eyeo's Anti-Circumvention Snippets module (@eyeo/snippets),
 * Copyright (C) 2006-present eyeo GmbH
 * 
 * @eyeo/snippets is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 * 
 * @eyeo/snippets is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with @eyeo/snippets.  If not, see <http://www.gnu.org/licenses/>.
 */;

const snippets=$e;
let context;
for (const [name, ...args] of filters) {
if (snippets.hasOwnProperty(name)) {
try { context = snippets[name].apply(context, args); }
catch (error) { console.error(error); }
}
}
context = void 0;
};
/**  
        *   @eyeo/mlbrowserutils - v0.1.7
        *   ML utility package for ABP's snippet library
        *   Made by eyeo GmbH
        *   Under GPL-3.0-only License
        *   
        *   The following npm packages may be included in this product:
        *
        *   - tfjs
        *   - tfjs-backend-cpu
        *   - tfjs-backend-webgl
        *   - tfjs-converter
        *   - tfjs-core
        *   - tfjs-data
        *   - tfjs-layers
        *
        *    These packages contain the following information about the license:
        * 
        *  * @license
        *  * Copyright 2018-2022 Google LLC. All Rights Reserved.
        *  * Licensed under the Apache License, Version 2.0 (the "License");
        *  * you may not use this file except in compliance with the License.
        *  * You may obtain a copy of the License at
        *  *
        *  * http://www.apache.org/licenses/LICENSE-2.0
        *  *
        *  * Unless required by applicable law or agreed to in writing, software
        *  * distributed under the License is distributed on an "AS IS" BASIS,
        *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        *  * See the License for the specific language governing permissions and
        *  * limitations under the License.
        *  * =============================================================================
        */
var It}]]);
callback.get = snippet => graph.get(snippet);
callback.has = snippet => graph.has(snippet);
/* harmony default export */ const ml = (callback);
;// CONCATENATED MODULE: ./node_modules/@eyeo/snippets/webext/main.mjs
/*!
 * This file is part of eyeo's Anti-Circumvention Snippets module (@eyeo/snippets),
 * Copyright (C) 2006-present eyeo GmbH
 * 
 * @eyeo/snippets is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 * 
 * @eyeo/snippets is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with @eyeo/snippets.  If not, see <http://www.gnu.org/licenses/>.
 */

const main_callback = (environment, ...filters) => {
const e=Proxy,{apply:t,bind:r,call:n}=Function,o=n.bind(t),i=n.bind(r),s=n.bind(n),a={get:(e,t)=>i(n,e[t])},l=t=>new e(t,a),c=(t,r)=>new e(t,{apply:(e,t,n)=>o(r,t,n)}),u={get:(e,t)=>i(e[t],e)},f=t=>new e(t,u),{assign:p,defineProperties:d,freeze:h,getOwnPropertyDescriptor:w,getOwnPropertyDescriptors:g,getPrototypeOf:y}=f(Object),{hasOwnProperty:m}=l({}),{species:b}=Symbol,v={get(e,t){const r=e[t];class n extends r{}const o=g(r.prototype);delete o.constructor,h(d(n.prototype,o));const i=g(r);return delete i.length,delete i.prototype,i[b]={value:n},h(d(n,i))}},E=t=>new e(t,v),S="undefined"!=typeof environment?environment:{};"undefined"==typeof globalThis&&(window.globalThis=window);const{apply:M,ownKeys:T}=f(Reflect),x="world"in S,O=x&&"ISOLATED"===S.world,P=x&&"MAIN"===S.world,j="object"==typeof chrome&&!!chrome.runtime,N="object"==typeof browser&&!!browser.runtime,L=!P&&(O||j||N),k=e=>L?e:C(e,H(e)),{create:C,defineProperties:A,defineProperty:W,freeze:$,getOwnPropertyDescriptor:D,getOwnPropertyDescriptors:H}=f(Object),z=f(globalThis),R=L?globalThis:E(globalThis),{Map:F,RegExp:I,Set:J,WeakMap:V,WeakSet:B}=R,U=(e,t,r=null)=>{const n=T(t);for(const o of T(e)){if(n.includes(o))continue;const i=D(e,o);if(r&&"value"in i){const{value:e}=i;"function"==typeof e&&(i.value=r(e))}W(t,o,i)}},_=e=>{const t=R[e];class r extends t{}const{toString:n,valueOf:o}=t.prototype;A(r.prototype,{toString:{value:n},valueOf:{value:o}});const i=e.toLowerCase(),s=e=>function(){const t=M(e,this,arguments);return typeof t===i?new r(t):t};return U(t,r,s),U(t.prototype,r.prototype,s),r},X=$({frozen:new V,hidden:new B,iframePropertiesToAbort:{read:new J,write:new J},abortedIframes:new V}),q=new I("^[A-Z]");var G=new Proxy(new F([["chrome",L&&(j&&chrome||N&&browser)||void 0],["isExtensionContext",L],["variables",X],["console",k(console)],["document",globalThis.document],["performance",k(performance)],["JSON",k(JSON)],["Map",F],["Math",k(Math)],["Number",L?Number:_("Number")],["RegExp",I],["Set",J],["String",L?String:_("String")],["WeakMap",V],["WeakSet",B],["MouseEvent",MouseEvent]]),{get(e,t){if(e.has(t))return e.get(t);let r=globalThis[t];return"function"==typeof r&&(r=(q.test(t)?R:z)[t]),e.set(t,r),r},has:(e,t)=>e.has(t)});const K={WeakSet:WeakSet,WeakMap:WeakMap,WeakValue:class{has(){return!1}set(){}}},{apply:Y}=Reflect;const{Map:Z,WeakMap:Q,WeakSet:ee,setTimeout:te}=G;let re=!0,ne=e=>{e.clear(),re=!re};var oe=function(e){const{WeakSet:t,WeakMap:r,WeakValue:n}=this||K,o=new t,i=new r,s=new n;return function(t){if(o.has(t))return t;if(i.has(t))return i.get(t);if(s.has(t))return s.get(t);const r=Y(e,this,arguments);return o.add(r),r!==t&&("object"==typeof t&&t?i:s).set(t,r),r}}.bind({WeakMap:Q,WeakSet:ee,WeakValue:class extends Z{set(e,t){return re&&(re=!re,te(ne,0,this)),super.set(e,t)}}});const{concat:ie,includes:se,join:ae,reduce:le,unshift:ce}=l([]),ue=E(globalThis),{Map:fe,WeakMap:pe}=ue,de=new fe,he=t=>{const r=(e=>{const t=[];let r=e;for(;r;){if(de.has(r))ce(t,de.get(r));else{const e=g(r);de.set(r,e),ce(t,e)}r=y(r)}return ce(t,{}),o(p,null,t)})("function"==typeof t?t.prototype:t),n={get(e,t){if(t in r){const{value:n,get:o}=r[t];if(o)return s(o,e);if("function"==typeof n)return i(n,e)}return e[t]},set(e,t,n){if(t in r){const{set:o}=r[t];if(o)return s(o,e,n),!0}return e[t]=n,!0}};return t=>new e(t,n)},{isExtensionContext:we,Array:ge,Number:ye,String:me,Object:be}=G,{isArray:ve}=ge,{getOwnPropertyDescriptor:Ee,setPrototypeOf:Se}=be,{toString:Me}=be.prototype,{slice:Te}=me.prototype,{get:xe}=Ee(Node.prototype,"nodeType"),Oe=we?{}:{Attr:he(Attr),CanvasRenderingContext2D:he(CanvasRenderingContext2D),CSSStyleDeclaration:he(CSSStyleDeclaration),Document:he(Document),Element:he(Element),HTMLCanvasElement:he(HTMLCanvasElement),HTMLElement:he(HTMLElement),HTMLImageElement:he(HTMLImageElement),HTMLScriptElement:he(HTMLScriptElement),MutationRecord:he(MutationRecord),Node:he(Node),ShadowRoot:he(ShadowRoot),get CSS2Properties(){return Oe.CSSStyleDeclaration}},Pe=(e,t)=>{if("Element"!==t&&t in Oe)return Oe[t](e);if(ve(e))return Se(e,ge.prototype);const r=(e=>s(Te,s(Me,e),8,-1))(e);if(r in Oe)return Oe[r](e);if(r in G)return Se(e,G[r].prototype);if("nodeType"in e)switch(s(xe,e)){case 1:if(!(t in Oe))throw new Error("unknown hint "+t);return Oe[t](e);case 2:return Oe.Attr(e);case 3:return Oe.Node(e);case 9:return Oe.Document(e)}throw new Error("unknown brand "+r)};var je=we?e=>e===window||e===globalThis?G:e:oe(((e,t="Element")=>{if(e===window||e===globalThis)return G;switch(typeof e){case"object":return e&&Pe(e,t);case"string":return new me(e);case"number":return new ye(e);default:throw new Error("unsupported value")}}));const Ne={get(e,t){const r=e;for(;!m(e,t);)e=y(e);const{get:n,set:i}=w(e,t);return function(){return arguments.length?o(i,r,arguments):s(n,r)}}},Le=t=>new e(t,Ne);let ke=!1;function Ce(){return ke}const{console:Ae}=je(window),We=()=>{};function $e(...e){Ce()&&je(e).unshift("%c DEBUG","font-weight: bold"),Ae.log(...e)}function De(e){return i(Ce()?$e:We,null,e)}let{Math:He,RegExp:ze}=je(window);function Re(e){let{length:t}=e;if(t>1&&"/"===e[0]){let r="/"===e[t-1];if(r||t>2&&je(e).endsWith("/i")){let t=[je(e).slice(1,r?-1:-2)];return r||t.push("i"),new ze(...t)}}return new ze(je(e).replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"))}function Fe(){return je(He.floor(2116316160*He.random()+60466176)).toString(36)}let{parseFloat:Ie,variables:Je,Array:Ve,Error:Be,Map:Ue,Object:_e,ReferenceError:Xe,Set:qe,WeakMap:Ge}=je(window),{onerror:Ke}=Le(window),Ye=Node.prototype,Ze=Element.prototype,Qe=null;function et(e,t,r){let n=je(t),o=n.indexOf(".");if(-1==o){let n=_e.getOwnPropertyDescriptor(e,t);if(n&&!n.configurable)return;let o=_e.assign({},r,{configurable:!0});if(!n&&!o.get&&o.set){let r=e[t];o.get=()=>r}return void _e.defineProperty(e,t,o)}let i=n.slice(0,o).toString();t=n.slice(o+1).toString();let s=e[i];!s||"object"!=typeof s&&"function"!=typeof s||et(s,t,r);let a=_e.getOwnPropertyDescriptor(e,i);if(a&&!a.configurable)return;Qe||(Qe=new Ge),Qe.has(e)||Qe.set(e,new Ue);let l=Qe.get(e);if(l.has(i))return void l.get(i).set(t,r);let c=new Ue([[t,r]]);l.set(i,c),_e.defineProperty(e,i,{get:()=>s,set(e){if(s=e,s&&("object"==typeof s||"function"==typeof s))for(let[e,t]of c)et(s,e,t)},configurable:!0})}function tt(e){let t=Ke();Ke(((...r)=>{let n=r.length&&r[0];return!("string"!=typeof n||!je(n).includes(e))||("function"==typeof t?o(t,this,r):void 0)}))}function rt(e,t,r){let n=De(e);if(!r)return void n("no property to abort on read");let o=Fe();n(`aborting on ${r} access`),et(t,r,{get:function(){throw n(`${r} access aborted`),new Xe(o)},set(){}}),tt(o)}function nt(e,t,r){let n=De(e);if(!r)return void n("no property to abort on write");let o=Fe();n(`aborting when setting ${r}`),et(t,r,{set:function(){throw n(`setting ${r} aborted`),new Xe(o)}}),tt(o)}function ot(e,t=!1,r=!1){let n=Je.abortedIframes,i=Je.iframePropertiesToAbort;for(let o of Ve.from(window.frames))if(n.has(o))for(let i of e)t&&n.get(o).read.add(i),r&&n.get(o).write.add(i);for(let n of e)t&&i.read.add(n),r&&i.write.add(n);function a(){for(let e of Ve.from(window.frames)){n.has(e)||n.set(e,{read:new qe(i.read),write:new qe(i.write)});let t=n.get(e).read;if(t.size>0){let r=Ve.from(t);t.clear();for(let t of r)rt("abort-on-iframe-property-read",e,t)}let r=n.get(e).write;if(r.size>0){let t=Ve.from(r);r.clear();for(let r of t)nt("abort-on-iframe-property-write",e,r)}}}a(),n.has(document)||(n.set(document,!0),function(e){let t;function r(e,t){for(let r of t){et(e,r,n(e,r))}}function n(t,r){let n=t[r];return{get:()=>function(...t){let r;return r=o(n,this,t),e&&e(),r}}}function i(t,r){let n=_e.getOwnPropertyDescriptor(t,r),{set:o}=n||{};return{set(t){let r;return r=s(o,this,t),e&&e(),r}}}r(Ye,["appendChild","insertBefore","replaceChild"]),r(Ze,["append","prepend","replaceWith","after","before","insertAdjacentElement","insertAdjacentHTML"]),t=i(Ze,"innerHTML"),et(Ze,"innerHTML",t),t=i(Ze,"outerHTML"),et(Ze,"outerHTML",t)}(a))}let{Object:it}=window;function st(e,t){if(!(e instanceof it))return;let r=e,n=je(t).split(".");if(0===n.length)return;for(let e=0;e<n.length-1;e++){let t=n[e];if(!m(r,t))return;if(r=r[t],!(r instanceof it))return}let o=n[n.length-1];return m(r,o)?[r,o]:void 0}const at=je(/^\d+$/);function lt(e){switch(e){case"false":return!1;case"true":return!0;case"null":return null;case"noopFunc":return()=>{};case"trueFunc":return()=>!0;case"falseFunc":return()=>!1;case"emptyArray":return[];case"emptyObj":return{};case"undefined":return;case"":return e;default:if(at.test(e))return Ie(e);throw new Be(`[override-property-read snippet]: Value "${e}" is not valid.`)}}let{HTMLScriptElement:ct,Object:ut,ReferenceError:ft}=je(window),pt=ut.getPrototypeOf(ct);let{Error:dt}=je(window),{cookie:ht}=Le(document);let{document:wt,getComputedStyle:gt,isExtensionContext:yt,variables:mt,Array:bt,MutationObserver:vt,Object:Et,XPathEvaluator:St,XPathExpression:Mt,XPathResult:Tt}=je(window),{querySelectorAll:xt}=wt,Ot=xt&&i(xt,wt);const{assign:Pt,setPrototypeOf:jt}=Et;class Nt extends Mt{evaluate(...e){return jt(o(super.evaluate,this,e),Tt.prototype)}}class Lt extends St{createExpression(...e){return jt(o(super.createExpression,this,e),Nt.prototype)}}function kt(e){if(mt.hidden.has(e))return;!function(e){yt&&"function"==typeof checkElement&&checkElement(e)}(e),mt.hidden.add(e);let{style:t}=je(e),r=je(t,"CSSStyleDeclaration"),n=je([]),{debugCSSProperties:o}=S;for(let[e,t]of o||[["display","none"]])r.setProperty(e,t,"important"),n.push([e,r.getPropertyValue(e)]);new vt((()=>{for(let[e,t]of n){let n=r.getPropertyValue(e),o=r.getPropertyPriority(e);n==t&&"important"==o||r.setProperty(e,t,"important")}})).observe(e,{attributes:!0,attributeFilter:["style"]})}function Ct(e){let t=e;if(t.startsWith("xpath(")&&t.endsWith(")")){let t=function(e){let t=e;if(t.startsWith("xpath(")&&t.endsWith(")")){let e=t.slice(6,-1),r=(new Lt).createExpression(e,null),n=Tt.ORDERED_NODE_SNAPSHOT_TYPE;return e=>{if(!e)return;let t=r.evaluate(wt,n,null),{snapshotLength:o}=t;for(let r=0;r<o;r++)e(t.snapshotItem(r))}}return t=>Ot(e).forEach(t)}(e);return()=>{let e=je([]);return t((t=>e.push(t))),e}}return()=>bt.from(Ot(e))}let{ELEMENT_NODE:At,TEXT_NODE:Wt,prototype:$t}=Node,{prototype:Dt}=Element,{prototype:Ht}=HTMLElement,{console:zt,variables:Rt,DOMParser:Ft,Error:It,MutationObserver:Jt,Object:Vt,ReferenceError:Bt}=je(window),{getOwnPropertyDescriptor:Ut}=Vt;function _t(e,t){return We}je(window);const{Map:Xt,MutationObserver:qt,Object:Gt,Set:Kt,WeakSet:Yt}=je(window);let Zt=Element.prototype,{attachShadow:Qt}=Zt,er=new Yt,tr=new Xt,rr=null;const{Error:nr,JSON:or,Map:ir,Object:sr}=je(window);let ar=null;let{Error:lr,JSON:cr,Map:ur,Object:fr}=je(window),pr=null;let{Error:dr}=je(window);let{Error:hr,Map:wr,Object:gr,console:yr}=je(window),{toString:mr}=Function.prototype,br=EventTarget.prototype,{addEventListener:vr}=br,Er=null;let Sr,{URL:Mr,fetch:Tr}=je(window),{delete:xr,has:Or}=l(URLSearchParams.prototype);const Pr={"abort-current-inline-script":function(e,t=null){const r=De("abort-current-inline-script"),n=t?Re(t):null,o=Fe(),i=je(document).currentScript;let a=window;const l=je(e).split("."),c=je(l).pop();for(let e of je(l))if(a=a[e],!a||"object"!=typeof a&&"function"!=typeof a)return void r(l," is not found");const{get:u,set:f}=ut.getOwnPropertyDescriptor(a,c)||{};let p=a[c];void 0===p&&r("The property",c,"doesn't exist yet. Check typos.");const d=()=>{const e=je(document).currentScript;if(e instanceof pt&&""==je(e,"HTMLScriptElement").src&&e!=i&&(!n||n.test(je(e).textContent)))throw r(l," is aborted \n",e),new ft(o)};et(a,c,{get(){return d(),u?s(u,this):p},set(e){d(),f?s(f,this,e):p=e}}),tt(o)},"abort-on-iframe-property-read":function(...e){ot(e,!0,!1)},"abort-on-iframe-property-write":function(...e){ot(e,!1,!0)},"abort-on-property-read":function(e){rt("abort-on-property-read",window,e)},"abort-on-property-write":function(e){nt("abort-on-property-write",window,e)},"cookie-remover":function(e){if(!e)throw new dt("[cookie-remover snippet]: No cookie to remove.");let t=De("cookie-remover"),r=Re(e);if(je(/^http|^about/).test(location.protocol)){t("Parsing cookies for matches");for(const e of je(je(ht()).split(";").filter((e=>r.test(je(e).split("=")[0]))))){let r=je(location.hostname),n=je(e).split("=")[0],o="expires=Thu, 01 Jan 1970 00:00:00 GMT",i="path=/",s="domain="+r.slice(r.indexOf(".")+1);ht(`${je(n).trim()}=;${o};${i};${s}`),t(`Set expiration date on ${n}`)}}else t("Snippet only works for http or https and about.")},debug:function(){ke=!0},"freeze-element":function(e,t="",...r){let n,i,a=!1,l=!1,c=je(r).filter((e=>!h(e))),u=je(r).filter((e=>h(e))).map(Re),f=Fe(),p=Ct(e);!function(){let r=je(t).split("+");1===r.length&&""===r[0]&&(r=[]);for(let t of r)switch(t){case"subtree":a=!0;break;case"abort":l=!0;break;default:throw new It("[freeze] Unknown option passed to the snippet. [selector]: "+e+" [option]: "+t)}}();let d={selector:e,shouldAbort:l,rid:f,exceptionSelectors:c,regexExceptions:u,changeId:0};function h(e){return e.length>=2&&"/"==e[0]&&"/"==e[e.length-1]}function w(){i=p(),g(i,!1)}function g(e,t=!0){for(let r of e)Rt.frozen.has(r)||(Rt.frozen.set(r,d),!t&&a&&new Jt((e=>{for(let t of je(e))g(je(t,"MutationRecord").addedNodes)})).observe(r,{childList:!0,subtree:!0}),a&&je(r).nodeType===At&&g(je(r).childNodes))}function y(e,...t){$e(`[freeze][${e}] `,...t)}function m(e,t,r,n){let o=n.selector,i=n.changeId,s="string"==typeof e,a=n.shouldAbort?"aborting":"watching";switch(zt.groupCollapsed(`[freeze][${i}] ${a}: ${o}`),r){case"appendChild":case"append":case"prepend":case"insertBefore":case"replaceChild":case"insertAdjacentElement":case"insertAdjacentHTML":case"insertAdjacentText":case"innerHTML":case"outerHTML":y(i,s?"text: ":"node: ",e),y(i,"added to node: ",t);break;case"replaceWith":case"after":case"before":y(i,s?"text: ":"node: ",e),y(i,"added to node: ",je(t).parentNode);break;case"textContent":case"innerText":case"nodeValue":y(i,"content of node: ",t),y(i,"changed to: ",e)}y(i,`using the function "${r}"`),zt.groupEnd(),n.changeId++}function b(e,t){if(t)for(let r of t)if(r.test(e))return!0;return!1}function v(e){throw new Bt(e)}function E(e,t,r,n){let o=new Ft,{body:i}=je(o.parseFromString(e,"text/html")),s=S(je(i).childNodes,t,r,n);return je(s).map((e=>{switch(je(e).nodeType){case At:return je(e).outerHTML;case Wt:return je(e).textContent;default:return""}})).join("")}function S(e,t,r,n){let o=je([]);for(let i of e)M(i,t,r,n)&&o.push(i);return o}function M(e,t,r,n){let o=n.shouldAbort,i=n.regexExceptions,s=n.exceptionSelectors,a=n.rid;if("string"==typeof e){let s=e;return!!b(s,i)||(Ce()&&m(s,t,r,n),o&&v(a),Ce())}let l=e;switch(je(l).nodeType){case At:return!!function(e,t){if(t){let r=je(e);for(let e of t)if(r.matches(e))return!0}return!1}(l,s)||(o&&(Ce()&&m(l,t,r,n),v(a)),!!Ce()&&(kt(l),m(l,t,r,n),!0));case Wt:return!!b(je(l).textContent,i)||(Ce()&&m(l,t,r,n),o&&v(a),!1);default:return!0}}function T(e,t,r,n){let i=Ut(e,t)||{},a=i.get&&s(i.get,e)||i.value;if(a)return{get:()=>function(...e){if(r(this)){let r=n(this);if(r){let n=e[0];if(!M(n,this,t,r))return n}}return o(a,this,e)}}}function x(e,t,r,n){let i=Ut(e,t)||{},a=i.get&&s(i.get,e)||i.value;if(a)return{get:()=>function(...e){if(!r(this))return o(a,this,e);let i=n(this);if(!i)return o(a,this,e);let s=S(e,this,t,i);return s.length>0?o(a,this,s):void 0}}}function O(e,t,r,n){let i=Ut(e,t)||{},a=i.get&&s(i.get,e)||i.value;if(a)return{get:()=>function(...e){let[i,l]=e,c="afterbegin"===i||"beforeend"===i;if(r(this,c)){let e=n(this,c);if(e){let r,n=c?this:je(this).parentNode;switch(t){case"insertAdjacentElement":if(!M(l,n,t,e))return l;break;case"insertAdjacentHTML":return r=E(l,n,t,e),r?s(a,this,i,r):void 0;case"insertAdjacentText":if(!M(l,n,t,e))return}}}return o(a,this,e)}}}function P(e,t,r,n){let o=Ut(e,t)||{},{set:i}=o;if(i)return{set(e){if(!r(this))return s(i,this,e);let o=n(this);if(!o)return s(i,this,e);let a=E(e,this,t,o);return a?s(i,this,a):void 0}}}function j(e,t,r,n){let o=Ut(e,t)||{},{set:i}=o;if(i)return{set(e){if(!r(this))return s(i,this,e);let o=n(this);return o?M(e,this,t,o)?s(i,this,e):void 0:s(i,this,e)}}}Rt.frozen.has(document)||(Rt.frozen.set(document,!0),function(){let e;function t(e){return e&&Rt.frozen.has(e)}function r(e){try{return e&&(Rt.frozen.has(e)||Rt.frozen.has(je(e).parentNode))}catch(e){return!1}}function n(e,t){try{return e&&(Rt.frozen.has(e)&&t||Rt.frozen.has(je(e).parentNode)&&!t)}catch(e){return!1}}function o(e){return Rt.frozen.get(e)}function i(e){try{if(Rt.frozen.has(e))return Rt.frozen.get(e);let t=je(e).parentNode;return Rt.frozen.get(t)}catch(e){}}function s(e,t){try{if(Rt.frozen.has(e)&&t)return Rt.frozen.get(e);let r=je(e).parentNode;return Rt.frozen.get(r)}catch(e){}}e=T($t,"appendChild",t,o),et($t,"appendChild",e),e=T($t,"insertBefore",t,o),et($t,"insertBefore",e),e=T($t,"replaceChild",t,o),et($t,"replaceChild",e),e=x(Dt,"append",t,o),et(Dt,"append",e),e=x(Dt,"prepend",t,o),et(Dt,"prepend",e),e=x(Dt,"replaceWith",r,i),et(Dt,"replaceWith",e),e=x(Dt,"after",r,i),et(Dt,"after",e),e=x(Dt,"before",r,i),et(Dt,"before",e),e=O(Dt,"insertAdjacentElement",n,s),et(Dt,"insertAdjacentElement",e),e=O(Dt,"insertAdjacentHTML",n,s),et(Dt,"insertAdjacentHTML",e),e=O(Dt,"insertAdjacentText",n,s),et(Dt,"insertAdjacentText",e),e=P(Dt,"innerHTML",t,o),et(Dt,"innerHTML",e),e=P(Dt,"outerHTML",r,i),et(Dt,"outerHTML",e),e=j($t,"textContent",t,o),et($t,"textContent",e),e=j(Ht,"innerText",t,o),et(Ht,"innerText",e),e=j($t,"nodeValue",t,o),et($t,"nodeValue",e)}()),n=new Jt(w),n.observe(document,{childList:!0,subtree:!0}),w()},"hide-if-shadow-contains":function(e,t="*"){let r=`${e}\\${t}`;tr.has(r)||tr.set(r,[Re(e),t,_t()]);const n=De("hide-if-shadow-contain");rr||(rr=new qt((e=>{let t=new Kt;for(let{target:r}of je(e)){let e=je(r).parentNode;for(;e;)[r,e]=[e,je(r).parentNode];if(!er.has(r)&&!t.has(r)){t.add(r);for(let[e,t,o]of tr.values())if(e.test(je(r).textContent)){let e=je(r.host).closest(t);e&&(o(),je(r).appendChild(document.createElement("style")).textContent=":host {display: none !important}",kt(e),er.add(r),n("Hiding: ",e," for params: ",...arguments))}}}})),Gt.defineProperty(Zt,"attachShadow",{value:c(Qt,(function(){let e=o(Qt,this,arguments);return n("attachShadow is called for: ",e),rr.observe(e,{childList:!0,characterData:!0,subtree:!0}),e}))}))},"json-override":function(e,t,r="",n=""){if(!e)throw new nr("[json-override snippet]: Missing paths to override.");if(void 0===t)throw new nr("[json-override snippet]: No value to override with.");if(!ar){let e=De("json-override"),{parse:t}=or;ar=new ir,sr.defineProperty(window.JSON,"parse",{value:c(t,(function(r){let n=o(t,this,arguments);for(let{prune:t,needle:o,filter:i,value:s}of ar.values())if(!i||i.test(r)){if(je(o).some((e=>!st(n,e))))return n;for(let r of t){let t=st(n,r);void 0!==t&&(e(`Found ${r} replaced it with ${s}`),t[0][t[1]]=lt(s))}}return n}))}),e("Wrapped JSON.parse for override")}ar.set(e,{prune:je(e).split(/ +/),needle:r.length?je(r).split(/ +/):[],filter:n?Re(n):null,value:t})},"json-prune":function(e,t=""){if(!e)throw new lr("Missing paths to prune");if(!pr){let e=De("json-prune"),{parse:t}=cr;pr=new ur,fr.defineProperty(window.JSON,"parse",{value:c(t,(function(){let r=o(t,this,arguments);for(let{prune:t,needle:n}of pr.values()){if(je(n).some((e=>!st(r,e))))return r;for(let n of t){let t=st(r,n);void 0!==t&&(e(`Found ${n} and deleted`),delete t[0][t[1]])}}return r}))}),e("Wrapped JSON.parse for prune")}pr.set(e,{prune:je(e).split(/ +/),needle:t.length?je(t).split(/ +/):[]})},"override-property-read":function(e,t){if(!e)throw new dr("[override-property-read snippet]: No property to override.");if(void 0===t)throw new dr("[override-property-read snippet]: No value to override with.");let r=De("override-property-read"),n=lt(t);r(`Overriding ${e}.`),et(window,e,{get:()=>(r(`${e} override done.`),n),set(){}})},"prevent-listener":function(e,t,r){if(!e)throw new hr("[prevent-listener snippet]: No event type.");if(!Er){Er=new wr;let e=De("[prevent]");gr.defineProperty(br,"addEventListener",{value:c(vr,(function(t,r){for(let{evt:n,handlers:o,selectors:i}of Er.values()){if(!n.test(t))continue;let a=this instanceof Element;for(let l=0;l<o.length;l++){let c=o[l],u=i[l],f=()=>c.test(s(mr,"function"==typeof r?r:r.handleEvent));if((!c||f())&&(!u||a&&je(this).matches(u)))return void(Ce()&&(yr.groupCollapsed("DEBUG [prevent] was successful"),e(`type: ${t} matching ${n}`),e("handler:",r),c&&e(`matching ${c}`),u&&e("on element: ",this,` matching ${u}`),e("was prevented from being added"),yr.groupEnd()))}}return o(vr,this,arguments)}))}),e("Wrapped addEventListener")}Er.has(e)||Er.set(e,{evt:Re(e),handlers:[],selectors:[]});let{handlers:n,selectors:i}=Er.get(e);n.push(t?Re(t):null),i.push(r)},"strip-fetch-query-parameter":function(e,t=null){const r=De("strip-fetch-query-parameter");Sr||(Sr=new Map,window.fetch=c(Tr,((...e)=>{let[t]=e;if("string"==typeof t){let n=new Mr(t);for(let[o,i]of Sr)i&&!i.test(t)||Or(n.searchParams,o)&&(r(`${o} has been stripped from url ${t}`),xr(n.searchParams,o),e[0]=n.href)}return o(Tr,self,e)}))),Sr.set(e,t&&Re(t))},trace:function(...e){o($e,null,e)}};
const snippets=Pr;
let context;
for (const [name, ...args] of filters) {
if (snippets.hasOwnProperty(name)) {
try { context = snippets[name].apply(context, args); }
catch (error) { console.error(error); }
}
}
context = void 0;
};
const main_graph = new Map([["abort-current-inline-script",null],["abort-on-iframe-property-read",null],["abort-on-iframe-property-write",null],["abort-on-property-read",null],["abort-on-property-write",null],["cookie-remover",null],["debug",null],["freeze-element",null],["hide-if-shadow-contains",null],["json-override",null],["json-prune",null],["override-property-read",null],["prevent-listener",null],["strip-fetch-query-parameter",null],["trace",null]]);
main_callback.get = snippet => main_graph.get(snippet);
main_callback.has = snippet => main_graph.has(snippet);
/* harmony default export */ const main = (main_callback);
;// CONCATENATED MODULE: ./node_modules/@eyeo/snippets/index.mjs






;// CONCATENATED MODULE: ./adblock-betafish/alias/contentFiltering.js
/*
 * Same as the original source adblockpluschrome/lib/contentFiltering.js
 * except:
 * - updated require paths
 * - added fetch() of second snippet library
 */
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

/** @module contentFiltering */




function loadSnippets() {
  ewe_api.snippets.setLibrary({
    injectedCode: main,
    isolatedCode: ml
  });
};
loadSnippets();


/***/ }),

/***/ 1021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QO": () => (/* binding */ showIconBadgeCTA),
/* harmony export */   "ec": () => (/* binding */ NEW_BADGE_REASONS),
/* harmony export */   "vo": () => (/* binding */ getNewBadgeTextReason)
/* harmony export */ });
/* unused harmony exports statsInIconKey, stopIconAnimation, startIconAnimation */
/* harmony import */ var info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _vendor_adblockplusui_adblockpluschrome_lib_storage_tab_session_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1627);
/* harmony import */ var _vendor_adblockplusui_adblockpluschrome_lib_allowlisting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8858);
/* harmony import */ var _vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3265);
/* harmony import */ var _utilities_background_bg_functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2028);
/*
 * Same as the original source adblockpluschrome/lib/icon.js
 * except:
 * - updated image file names from 'abp-' to 'ab-'
 * - updated the 'import' paths
 * - use the term 'whitelisted' instead of 'allowlisted' for now
 * - call renderIcons() at the end of the module for all platforms,
 *   not just Chromium
 * - added the showIconBadgeCTA, getNewBadgeTextReason functions, and related
 *   message listeners
 */
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

/** @module icon */








const ANIMATION_LOOPS = 3;
const FRAME_IN_MS = 100;

const statsInIconKey = 'current_show_statsinicon';

let frameOpacities = calculateFrameOpacities(9, 7);
let frameOpacitiesCritical = calculateFrameOpacities(5, 3);

let stopRequested = false;
let canUpdateIcon = true;
let notRunning = Promise.resolve();
let allowlistedState = new _vendor_adblockplusui_adblockpluschrome_lib_storage_tab_session_js__WEBPACK_IMPORTED_MODULE_1__/* .TabSessionStorage */ .H("icon:allowlistedState");

let icons = [null, null];

function easeOut(progress) {
  // This is merely an approximation to the built-in ease-out timing function
  // https://css-tricks.com/emulating-css-timing-functions-javascript/
  return 1 - Math.pow(1 - progress, 1.675);
}

function calculateFrameOpacities(keyframeFrames, transitionFrames) {
  let opacities = [];

  // Show second half of first keyframe
  // Omit first frame because it's only shown after the first timeout
  for (let i = 0; i < keyframeFrames / 2 - 1; i++)
    opacities.push(0);
  // Transition from first to second keyframe
  for (let i = 0; i < transitionFrames; i++)
    opacities.push(easeOut((i + 1) / (transitionFrames + 1)));
  // Show second keyframe
  for (let i = 0; i < keyframeFrames; i++)
    opacities.push(1);
  // Transition from second to first keyframe
  for (let i = 0; i < transitionFrames; i++)
    opacities.push(easeOut((transitionFrames - i) / (transitionFrames + 1)));
  // Show first half of first keyframe
  // Omit last frame due to an additional timeout that resets the icon
  for (let i = 0; i < keyframeFrames / 2 - 1; i++)
    opacities.push(0);

  return opacities;
}

async function loadImage(url) {
  let response = await fetch(url);
  let blob = await response.blob();
  return createImageBitmap(blob);
}

async function renderIcons() {
  let paths = [
    "icons/ab-16.png", "icons/ab-16-whitelisted.png",
    "icons/ab-32.png", "icons/ab-32-whitelisted.png"
  ];

  for (let path of paths) {
    let image = await loadImage(path);
    let [, size, allowlisted] = /\/ab-(16|32)(-whitelisted)?\./.exec(path);

    let canvas = new OffscreenCanvas(size, size);
    let context = canvas.getContext("2d");
    let imageData = icons[!!allowlisted | 0] || {};

    context.globalAlpha = 1;
    context.drawImage(image, 0, 0);
    imageData[size] = context.getImageData(0, 0, size, size);

    icons[!!allowlisted | 0] = imageData;
  }
}

async function setIcon(page, opacity, frames) {
  opacity = opacity || 0;
  let allowlisted = !!(await allowlistedState.get(page.id));

  if (!frames) {
    if (opacity > 0.5) {
      (0,_vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_3__/* .setIconPath */ .c4)(
        page.id,
        "/icons/ab-$size-notification.png"
      );
    }
    else if (icons[allowlisted | 0]) {
      (0,_vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_3__/* .setIconImageData */ .k8)(page.id, icons[allowlisted | 0]);
    }
    else {
      (0,_vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_3__/* .setIconPath */ .c4)(
        page.id,
        "/icons/ab-$size" + (allowlisted ? "-allowlisted" : "") + ".png"
      );
    }
  }
  else {
    browser.action.setIcon({
      tabId: page.id,
      imageData: frames["" + opacity + allowlisted]
    });
  }
}

_vendor_adblockplusui_adblockpluschrome_lib_allowlisting__WEBPACK_IMPORTED_MODULE_2__/* .allowlistingState.addListener */ ._o.addListener("changed", async (page, isAllowlisted) => {
  await allowlistedState.set(page.id, isAllowlisted);
  if (canUpdateIcon)
    await setIcon(page);
});

async function renderFrames(opacities) {
  let images = await Promise.all([
    loadImage("icons/ab-16.png"),
    loadImage("icons/ab-16-whitelisted.png"),
    loadImage("icons/ab-16-whitelisted.png"),
    loadImage("icons/ab-20.png"),
    loadImage("icons/ab-20-whitelisted.png"),
    loadImage("icons/ab-20-whitelisted.png"),
    loadImage("icons/ab-32.png"),
    loadImage("icons/ab-32-whitelisted.png"),
    loadImage("icons/ab-32-whitelisted.png"),
    loadImage("icons/ab-40.png"),
    loadImage("icons/ab-40-whitelisted.png"),
    loadImage("icons/ab-40-whitelisted.png"),
  ]);
  opacities = new Set(opacities);
  let imageMap = {
    16: { base: [images[0], images[1]], overlay: images[2] },
    20: { base: [images[3], images[4]], overlay: images[5] },
    32: { base: [images[6], images[7]], overlay: images[8] },
    40: { base: [images[9], images[10]], overlay: images[11] }
  };

  let frames = {};
  let canvas = new OffscreenCanvas(0, 0);
  let context = canvas.getContext("2d");

  for (let allowlisted of [false, true]) {
    for (let opacity of opacities) {
      let imageData = {};
      let sizes = [16, 20, 32, 40];
      for (let size of sizes) {
        canvas.width = size;
        canvas.height = size;
        context.globalAlpha = 1;
        context.drawImage(imageMap[size]["base"][allowlisted | 0], 0, 0);
        context.globalAlpha = opacity;
        context.drawImage(imageMap[size]["overlay"], 0, 0);
        imageData[size] = context.getImageData(0, 0, size, size);
      }
      frames["" + opacity + allowlisted] = imageData;
    }
  }

  return frames;
}

async function animateIcon(opacities, frames) {
  let tabs = await browser.tabs.query({ active: true });
  let pages = tabs.map(tab => new ext.Page(tab));

  let animationLoop = 0;
  let animationStep = 0;
  let numberOfFrames = opacities.length;
  let opacity = 0;

  let onActivated = async page => {
    pages.push(page);
    await setIcon(page, opacity, frames);
    toggleBadge(page.id, true);
  };
  ext.pages.onActivated.addListener(onActivated);

  canUpdateIcon = false;
  for (let page of pages)
    toggleBadge(page.id, true);
  return new Promise((resolve, reject) => {
    let interval = setInterval(async () => {
      let oldOpacity = opacity;
      opacity = opacities[animationStep++];

      if (opacity != oldOpacity) {
        for (let page of pages) {
          if (await allowlistedState.has(page.id))
            await setIcon(page, opacity, frames);
        }
      }

      if (animationStep > numberOfFrames) {
        if (++animationLoop > ANIMATION_LOOPS - 1 || stopRequested) {
          clearInterval(interval);
          ext.pages.onActivated.removeListener(onActivated);
          for (let page of pages)
            toggleBadge(page.id, false);
          canUpdateIcon = true;
          resolve();
        }
        else {
          animationStep = 0;
        }
      }
    }, FRAME_IN_MS);
  });
}

/**
 * Stops to animate the browser action icon
 * after the current interval has been finished.
 *
 * @return {Promise} A promise that is fullfilled when
 *                   the icon animation has been stopped.
 */
async function stopIconAnimation() {
  stopRequested = true;
  await notRunning;
  stopRequested = false;
}

/**
 * Starts to animate the browser action icon to indicate a pending notifcation.
 * If the icon is already animated, it replaces the previous
 * animation as soon as the current interval has been finished.
 *
 * @param {string} type  The notification type (i.e: "information" or
 *                       "critical".)
 */
function startIconAnimation(type) {
  let opacities = frameOpacities;
  if (type == "critical")
    opacities = frameOpacitiesCritical;

  notRunning = Promise.all([renderFrames(opacities), stopIconAnimation()])
    .then(results => {
      if (stopRequested)
        return;

      let frames = results[0];
      return animateIcon(opacities, frames);
    });
}

renderIcons();

/**
 * Returns the Object containing all of the reasons the text on the toolbar icon / badge is 'new'
 *
 */
const NEW_BADGE_REASONS = {
  SEVEN_DAY: 'seven day',
  UPDATE: 'update',
  VPN_CTA: 'vpn cta',
  FREE_DC_UPDATE: 'free dc update',
};

/**
 * Handles the display of the New badge on the toolbar icon.
 * @param {Boolean} [showBadge] true shows the badge, false removes the badge
 */

let newBadgeTextReason = "";

async function showIconBadgeCTA(showBadge, reason) {
  if (!License.shouldShowPremiumCTA()) {
    return;
  }
  if (showBadge) {
    let newBadgeText = browser.i18n.getMessage('new_badge');
    // Text that exceeds 4 characters is truncated on the toolbar badge,
    // so we default to English
    if (!newBadgeText || newBadgeText.length >= 5) {
      newBadgeText = 'New';
    }
    const storedValue = await (0,_utilities_background_bg_functions_js__WEBPACK_IMPORTED_MODULE_4__/* .chromeStorageGetHelper */ .nX)(statsInIconKey);
    if (!storedValue) {  // don't overwrite the original, saved value
      (0,_utilities_background_bg_functions_js__WEBPACK_IMPORTED_MODULE_4__/* .chromeStorageSetHelper */ .rJ)(statsInIconKey, Prefs.show_statsinicon);
    }
    Prefs.show_statsinicon = false;
    // wait 10 seconds to allow any other tasks to finish
    setTimeout(() => {
      // process all currently opened tabs
      browser.tabs.query({}).then((tabs) => {
        for (const tab of tabs) {
          if (tab.url && tab.url.startsWith('http')) {
            (0,_vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_3__/* .setBadge */ .q_)(tab.id, { color: '#03bcfc', number: newBadgeText });
            newBadgeTextReason = reason || '';
          }
        }
      });
    }, 10000); // 10 seconds
  } else {
    // Restore show_statsinicon if we previously stored its value
    const storedValue = await (0,_utilities_background_bg_functions_js__WEBPACK_IMPORTED_MODULE_4__/* .chromeStorageGetHelper */ .nX)(statsInIconKey);
    if (typeof storedValue === 'boolean') {
      Prefs.show_statsinicon = storedValue;
      (0,_utilities_background_bg_functions_js__WEBPACK_IMPORTED_MODULE_4__/* .chromeStorageDeleteHelper */ .lE)(statsInIconKey); // remove the data, since we no longer need it
      browser.tabs.query({}).then((tabs) => {
        for (const tab of tabs) {
          browser.browserAction.setBadgeText({
            tabId: tab.id,
            text: '',
          });
        }
      });
      browser.browserAction.setBadgeText({ text: '' });
    }
  }
};

/**
 * Returns the String reason the text on the toolbar icon / badge is 'new'
 *
 */
function getNewBadgeTextReason() {
  return newBadgeTextReason;
};


/***/ }),

/***/ 5829:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3817);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0__);



browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command !== "parseFilter" || !message.filterTextToParse) {
    return;
  }
  sendResponse(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0__.filters.validate(message.filterTextToParse));
});


/***/ }),

/***/ 8910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ initialize)
});

// UNUSED EXPORTS: isDataCorrupted

// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/prefs.js
var prefs = __webpack_require__(8710);
// EXTERNAL MODULE: ./build/templates/info.chrome.js.tmpl
var info_chrome_js = __webpack_require__(187);
// EXTERNAL MODULE: ./vendor/webext-sdk/dist/ewe-api.js
var ewe_api = __webpack_require__(3817);
;// CONCATENATED MODULE: ./node_modules/@adblockinc/rules/dist/index/adblock.json
const adblock_namespaceObject = JSON.parse('[{"id":"684A25C6-6B5D-458A-8A2B-BAC0A12B0B15","type":"ads","languages":["ar"],"title":"Liste AR+Liste FR+EasyList","homepage":"https://forums.lanik.us/viewforum.php?f=98","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","8D421590-1A68-4B68-BE50-04E17C09460E","3D60E303-1141-4775-B800-834177922876"],"url":"https://easylist-downloads.adblockplus.org/v3/full/liste_ar+liste_fr+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/liste_ar+liste_fr+easylist.txt"},{"id":"25A31255-AB36-48A4-9086-06192DE71119","type":"ads","languages":["bn","gu","hi","pa","as","mr","ml","te","kn","or","ne","si"],"title":"IndianList+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","9FAA2906-CD5C-4520-BDC4-4E098B7EA228"],"url":"https://easylist-downloads.adblockplus.org/v3/full/indianlist+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/indianlist+easylist.txt"},{"id":"E22C3B40-DC90-49D7-8BF5-E60904AB159A","type":"ads","languages":["bg"],"title":"Bulgarian list+EasyList","homepage":"https://stanev.org/abp/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","1638B159-F64A-4307-84E7-16AB08ED409E"],"url":"https://easylist-downloads.adblockplus.org/v3/full/bulgarian_list+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/bulgarian_list+easylist.txt"},{"id":"4B6CE485-30AB-4213-AD17-504B3F2D2825","type":"ads","languages":["cs","sk"],"title":"EasyList Czech and Slovak+EasyList","homepage":"https://adblock.sk/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","2D8C4D88-34A0-4259-9098-30D28BA674BC"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistczechslovak+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistczechslovak+easylist.txt"},{"id":"96932CD9-6DDF-4D97-B92F-FDF747B6FAA2","type":"ads","languages":["no","nb","nn","da","is","fo","kl","sv","fi"],"title":"Dandelion Sprout\'s Nordic Filters+EasyList","homepage":"https://github.com/DandelionSprout/adfilt","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","6D489E8D-E61C-444C-BBC5-44741773ADC2"],"url":"https://easylist-downloads.adblockplus.org/v3/full/dandelion_sprouts_nordic_filters+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/dandelion_sprouts_nordic_filters+easylist.txt"},{"id":"0CD3D105-D3B3-4652-8489-94163DE9A08F","type":"ads","languages":["de"],"title":"EasyList Germany+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","4337FB2B-A95C-44D5-B78D-11AD40F7711B"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistgermany+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistgermany+easylist.txt"},{"id":"8C13E995-8F06-4927-BEA7-6C845FB7EEBF","type":"ads","languages":["en"],"title":"EasyList","homepage":"https://easylist.to/","url":"https://easylist-downloads.adblockplus.org/v3/full/easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylist.txt"},{"id":"C3D13A19-3E8D-41F5-AD64-0F3B36DDE128","type":"ads","languages":["es"],"title":"EasyList Spanish+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","C8C1AA76-15B4-4CA3-8A9C-AD38D6AFCAEC"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistspanish+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistspanish+easylist.txt"},{"id":"2CEA1481-C29C-44F1-A084-A2A019533797","type":"ads","languages":["fr"],"title":"Liste FR+EasyList","homepage":"https://forums.lanik.us/viewforum.php?f=98","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","8D421590-1A68-4B68-BE50-04E17C09460E"],"url":"https://easylist-downloads.adblockplus.org/v3/full/liste_fr+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/liste_fr+easylist.txt"},{"id":"07549D8B-F06F-4D9D-A567-929AA59E9D1D","type":"ads","languages":["he"],"title":"EasyList Hebrew+EasyList","homepage":"https://github.com/easylist/EasyListHebrew","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","AE0D9320-665E-407D-B692-1A85AE481F34"],"url":"https://easylist-downloads.adblockplus.org/v3/full/israellist+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/israellist+easylist.txt"},{"id":"B7D76369-DD19-4602-80E8-2E32DDB490AC","type":"ads","languages":["id","ms"],"title":"ABPindo+EasyList","homepage":"http://abpindo.blogspot.com/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","A4A32212-E6BD-45F6-AD0F-E0FD18E8537B"],"url":"https://easylist-downloads.adblockplus.org/v3/full/abpindo+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/abpindo+easylist.txt"},{"id":"BBC07C05-66F1-42EC-BD4D-7AD495FAC84B","type":"ads","languages":["it"],"title":"EasyList Italy+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","2F0A4F0D-DF16-40D0-B0E0-5EB6791EC119"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistitaly+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistitaly+easylist.txt"},{"id":"2708BCB7-2E45-41BC-B517-1730CF532F89","type":"ads","languages":["ko"],"title":"KoreanList+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","BCE2062F-0D99-4861-A1F7-E3DFEA6DAB69"],"url":"https://easylist-downloads.adblockplus.org/v3/full/koreanlist+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/koreanlist+easylist.txt"},{"id":"CBE50FA2-DE3F-480C-B1D7-04289391C033","type":"ads","languages":["lt"],"title":"EasyList Lithuania+EasyList","homepage":"https://github.com/EasyList-Lithuania/easylist_lithuania","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","E89B3C08-2DED-40EA-8EE1-339B90D7B451"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistlithuania+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistlithuania+easylist.txt"},{"id":"950C88EA-2DD1-42E3-B2A2-2DF2ED15563A","type":"ads","languages":["lv"],"title":"Latvian List+EasyList","homepage":"https://forums.lanik.us/viewforum.php?f=99-latvian-list","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","51893C6C-F39E-43C5-A2EF-9545E388A2CE"],"url":"https://easylist-downloads.adblockplus.org/v3/full/latvianlist+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/latvianlist+easylist.txt"},{"id":"A4B88FB6-E5E5-417F-8A49-20B8244995FD","type":"ads","languages":["nl"],"title":"EasyList Dutch+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","CB94E27D-6CD1-4DB9-83D9-6B7F1A3555F6"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistdutch+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistdutch+easylist.txt"},{"id":"3D2C09D0-DF1C-4C8E-9947-A23DCEAF8F8B","type":"ads","languages":["pl"],"title":"EasyList Polish+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","9F743FCD-801B-41D0-830F-5A4EA995216E"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistpolish+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistpolish+easylist.txt"},{"id":"14DF7BE6-9675-4E07-987A-D8A1000F9FEF","type":"ads","languages":["pt"],"title":"EasyList Portuguese+EasyList","homepage":"https://easylist.to/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","A41441EE-BF7C-4A48-9A43-42CCEA2B2A1D"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistportuguese+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistportuguese+easylist.txt"},{"id":"EEEF75EC-B2B4-49F4-BC49-17B08266F334","type":"ads","languages":["ro"],"title":"ROList+EasyList","homepage":"https://zoso.ro/rolist/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","99166908-5FDA-4F9E-8C4C-70BB4DEEFC08"],"url":"https://easylist-downloads.adblockplus.org/v3/full/rolist+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/rolist+easylist.txt"},{"id":"1B5F78CA-8B30-4BDF-B0A3-451CB2202984","type":"ads","languages":["ru","uk"],"title":"RU AdList+EasyList","homepage":"https://forums.lanik.us/viewforum.php?f=102","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","879ECB9D-8935-4506-939E-5BBB7DD09402"],"url":"https://easylist-downloads.adblockplus.org/v3/full/ruadlist+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/ruadlist+easylist.txt"},{"id":"1C571EC7-6E52-47CC-B04A-4B3008D0AEBE","type":"ads","languages":["vi"],"title":"ABPVN List+EasyList","homepage":"http://abpvn.com/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","03648752-31EE-4FD0-85C1-20B07C5551C3"],"url":"https://easylist-downloads.adblockplus.org/v3/full/abpvn+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/abpvn+easylist.txt"},{"id":"9BD3EA2F-889D-4CC3-B680-CF484F2BD1B9","type":"ads","languages":["zh"],"title":"EasyList China+EasyList","homepage":"https://github.com/easylist/easylistchina/","includes":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF","1D7F590C-B752-4BA0-9473-6A26DE1326B1"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easylistchina+easylist.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easylistchina+easylist.txt"},{"id":"0798B6A2-94A4-4ADF-89ED-BEC112FC4C7F","type":"allowing","title":"Allow nonintrusive advertising","homepage":"https://acceptableads.com/","url":"https://easylist-downloads.adblockplus.org/v3/full/exceptionrules.txt","mv2_url":"https://easylist-downloads.adblockplus.org/exceptionrules.txt"},{"id":"F12E0801-A00B-49DE-B1E3-52C9C4F90C8C","type":"allowing","title":"Allow nonintrusive advertising without third-party tracking","homepage":"https://acceptableads.com/","url":"https://easylist-downloads.adblockplus.org/v3/full/exceptionrules-privacy-friendly.txt","mv2_url":"https://easylist-downloads.adblockplus.org/exceptionrules-privacy-friendly.txt"},{"id":"D5561090-9ADB-4EEE-AA81-101B645D9F4F","type":"newsletters","title":"DistractionControl-Newsletter","homepage":"https://help.getadblock.com/support/home","url":"https://easylist-downloads.adblockplus.org/v3/full/distraction-control-newsletter.txt","mv2_url":"https://cdn.adblockcdn.com/filters/distraction-control-newsletter.txt"},{"id":"3B85CD3F-553A-45D1-AA38-6288E1C4C7B9","type":"notifications","title":"DistractionControl-Push","homepage":"https://help.getadblock.com/support/home","url":"https://easylist-downloads.adblockplus.org/v3/full/distraction-control-push.txt","mv2_url":"https://cdn.adblockcdn.com/filters/distraction-control-push.txt"},{"id":"1E7A240E-CD85-493D-BEEF-C68A6AEA1225","type":"surveys","title":"DistractionControl-Survey","homepage":"https://help.getadblock.com/support/home","url":"https://easylist-downloads.adblockplus.org/v3/full/distraction-control-survey.txt","mv2_url":"https://cdn.adblockcdn.com/filters/distraction-control-survey.txt"},{"id":"8E2D687A-3B44-46E1-BE68-2FE5441A788E","type":"videos","title":"DistractionControl-Video","homepage":"https://help.getadblock.com/support/home","url":"https://easylist-downloads.adblockplus.org/v3/full/distraction-control-video.txt","mv2_url":"https://cdn.adblockcdn.com/filters/distraction-control-video.txt"},{"id":"D4028CDD-3D39-4624-ACC7-8140F4EC3238","type":"circumvention","title":"ABP filters","homepage":"https://github.com/abp-filters/abp-filters-anti-cv","url":"https://easylist-downloads.adblockplus.org/v3/full/abp-filters-anti-cv.txt","mv2_url":"https://easylist-downloads.adblockplus.org/abp-filters-anti-cv.txt"},{"id":"2090F374-29D9-4202-B2CE-139D6492D95E","type":"cookies","title":"I don\'t care about cookies","homepage":"https://www.i-dont-care-about-cookies.eu/","url":"https://easylist-downloads.adblockplus.org/v3/full/i_dont_care_about_cookies.txt","mv2_url":"https://easylist-downloads.adblockplus.org/i_dont_care_about_cookies.txt"},{"id":"5BD2BB73-459D-4A74-AF9D-A10157268350","type":"notifications","title":"Fanboy\'s Notifications Blocking List","homepage":"https://easylist.to/","url":"https://easylist-downloads.adblockplus.org/v3/full/fanboy-notifications.txt","mv2_url":"https://easylist-downloads.adblockplus.org/fanboy-notifications.txt"},{"id":"D72B6F06-52B2-4FED-96A2-1BF59CDD7AEC","type":"privacy","title":"EasyPrivacy","homepage":"https://easylist.to/","requires":["8C13E995-8F06-4927-BEA7-6C845FB7EEBF"],"url":"https://easylist-downloads.adblockplus.org/v3/full/easyprivacy.txt","mv2_url":"https://easylist-downloads.adblockplus.org/easyprivacy.txt"},{"id":"0A679439-445F-4DE7-84B9-88341F6DA520","type":"social","title":"Fanboy\'s Social Blocking List","homepage":"https://easylist.to/","url":"https://easylist-downloads.adblockplus.org/v3/full/fanboy-social.txt","mv2_url":"https://easylist-downloads.adblockplus.org/fanboy-social.txt"},{"id":"0B0296EB-1CC5-49CD-AD38-8AF27420B7E4","type":"annoyances","title":"Fanboy\'s Annoyance List","homepage":"https://easylist.to/","url":"https://easylist-downloads.adblockplus.org/v3/full/fanboy-annoyance.txt","mv2_url":"https://secure.fanboy.co.nz/fanboy-annoyance.txt"},{"id":"9CC3AF4D-EB89-4100-97C6-4EEE4F8A2E82","type":"cryptomining","title":"NoCoin Filter List","homepage":"https://github.com/hoshsadiq/adblock-nocoin-list/","url":"https://easylist-downloads.adblockplus.org/v3/full/nocoin.txt","mv2_url":"https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt"}]');
// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/messaging/port.js
var port = __webpack_require__(4554);
// EXTERNAL MODULE: ./adblock-betafish/telemetry/background/index.js + 4 modules
var background = __webpack_require__(158);
;// CONCATENATED MODULE: ./adblock-betafish/alias/subscriptionInit.js
/** @module adblock-betafish/alias/subscriptionInit */

/** similar to adblockpluschrome\lib\subscriptionInit.js */

/** @module subscriptionInit */








let firstRun;
let reinitialized = false;
let dataCorrupted = false;

/**
 * If there aren't any filters, the default subscriptions are added.
 * However, if patterns.ini already did exist and/or any preference
 * is set to a non-default value, this indicates that this isn't the
 * first run, but something went wrong.
 *
 * This function detects the first run, and makes sure that the user
 * gets notified (on the first run page) if the data appears incomplete
 * and therefore will be reinitialized.
 */
async function detectFirstRun(foundSubscriptions, foundStorage) {
  let userFilters = await ewe_api.filters.getUserFilters();
  firstRun = !foundSubscriptions && !userFilters.length;

  if (firstRun && (foundStorage || prefs/* Prefs.currentVersion */.B.currentVersion))
    reinitialized = true;

  prefs/* Prefs.currentVersion */.B.currentVersion = info_chrome_js.addonVersion;
}

/**
 * In case of data corruption, we don't want to show users
 * any non-essential notifications so we need to instruct
 * the notification manager to ignore them.
 *
 * @param {boolean} value
 */
function setDataCorrupted(value) {
  dataCorrupted = value;
  ewe_api.notifications.ignored = value;
}

/*
 * Remove any subscriptions that a user or administrator has added to a
 * central / common configuration (such as the Windows Registry)
 *
 * @return {Promise}
 */

function removeSubscriptions() {
  return new Promise(function (resolve, reject) {
    if ("managed" in browser.storage) {
      browser.storage.managed.get(null).then(
        async (items) => {
          for (let key in items) {
            if (key === "remove_subscriptions" && Array.isArray(items[key]) && items[key].length) {
              for (let inx = 0; inx < items[key].length; inx++) {
                await ewe_api.subscriptions.remove(items[key][inx]);
              }
            }
          }
          resolve();
        },

        // Opera doesn't support browser.storage.managed, but instead of simply
        // removing the API, it gives an asynchronous error which we ignore here.
        () => {
          resolve();
        }
      );
    } else {
      resolve();
    }
  });
}


async function openInstalled() {
  const userID = await background/* TELEMETRY.untilLoaded */.C.untilLoaded();
  browser.tabs.create({
    url:
      "https://getadblock.com/installed/?u=" +
      userID +
      "&lg=" +
      browser.i18n.getUILanguage() +
      "&dc=" +
      dataCorrupted
  });
}


async function addSubscriptions() {
  if (firstRun || reinitialized) {
    await ewe_api.subscriptions.addDefaults();
  }
  // Remove "acceptable ads" if Gecko
  if (firstRun) {
    for (let url of prefs/* Prefs.additional_subscriptions */.B.additional_subscriptions) {
      try {
        await ewe_api.subscriptions.add(url);
      }
      catch (ex) {
        console.error(`Failed to add additional subscription: ${url}`);
      }
    }
    if (info_chrome_js.platform === "gecko") {
      try {
        await ewe_api.subscriptions.remove(ewe_api.subscriptions.ACCEPTABLE_ADS_URL);
      }
      catch (ex) {
        console.error(`Failed to remove AA subscription`);
      }
    }
  }

  // Show first run page or the updates page. The latter is only shown
  // on Chromium (since the current updates page announces features that
  // aren't new to Firefox users), and only if this version of the
  // updates page hasn't been shown yet.

  if (firstRun && !prefs/* Prefs.suppress_first_run_page */.B.suppress_first_run_page) {
    // Always show the first run page if a data corruption was detected
    // (either through failure of reading from or writing to storage.local).
    // The first run page could notify the user about the data corruption.
    if (firstRun || dataCorrupted) {
      openInstalled();
    }
  }
}

/**
 * We need to check whether we can safely write to/read from storage
 * before we start relying on it for storing preferences.
 */
async function testStorage() {
  let testKey = "readwrite_test";
  let testValue = Math.random();

  try {
    await browser.storage.local.set({ [testKey]: testValue });
    let result = await browser.storage.local.get(testKey);
    if (result[testKey] != testValue)
      throw new Error("Storage test: Failed to read and write value");
  } finally {
    await browser.storage.local.remove(testKey);
  }
}

const initialize = ewe_api.start({
  bundledSubscriptions: adblock_namespaceObject,
  name: info_chrome_js.addonName,
  version: info_chrome_js.addonVersion,
  bundledSubscriptionsPath: "/data/rules/abp",
}).then(async (eweFirstRun) => {
  eweFirstRun.warnings.forEach(console.warn);
  await prefs/* Prefs.untilLoaded.catch */.B.untilLoaded["catch"](() => { setDataCorrupted(true); });
  await testStorage().catch(() => { setDataCorrupted(true); })
  await detectFirstRun(
    eweFirstRun.foundSubscriptions,
    eweFirstRun.foundStorage
  );
  // adding default filter lists
  await addSubscriptions();
  await removeSubscriptions();
});


/**
 * Gets a value indicating whether a data corruption was detected.
 *
 * @return {boolean}
 */
function isDataCorrupted() {
  return dataCorrupted;
}




/**
 * @typedef {object} subscriptionsGetInitIssuesResult
 * @property {boolean} dataCorrupted
 *   true if it appears that the user's extension data was corrupted.
 * @property {boolean} reinitialized
 *   true if we have reset the user's settings due to data corruption.
 */

/**
 * Returns an Object with boolean flags for any subscription initialization
 * issues.
 *
 * @event "subscriptions.getInitIssues"
 * @returns {subscriptionsGetInitIssuesResult}
 */
port/* port.on */.N.on("subscriptions.getInitIssues", (message, sender) => ({ dataCorrupted, reinitialized }));


/***/ }),

/***/ 9192:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _servermessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1546);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3817);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2028);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global License*/





const authorizedKeys = [
  `MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAuePfbm865kumeftXjlbt
J68DTXLTn0VeOgdSTqOcpADVqH0Kxz5hfLMaoKC/QhO3SmAu1yZwJZ1WP9Uyu3I5
EvJwEt7OHjJv54GhyYCtylMDCqSZgIIkUtB9PSXqFe3qyKAXACzwnLHmYIMMC1rx
bViqMD06+S4NKtzEh602/JsOOTHkXDJFQi5gGpd7Yn/r1YFG20JzU5lr0pf3dOEK
gNXiEwSRCuVSZ2+MHMtkFdP83/k59rTOfz5+ZThYmxECytD0JyY+bpDbso/XxQeL
fThNEEnSpbbeJRZQM5Lwf4D/f1wzSvyRrQiQz6Bo6TrA9DpL/BHqgUBv4O+DwhAu
8tFaaI+YWUmA1M6DRCL1aPQlFf3RB+aAf/TXFRU6enm8y/DFKWnwZja1YlApxTYT
MGnZ5hrsXZZImjcKBKwXi3JCtLkfV+osAHYrMAJPPAfECkch/ovrEUcdBEu4WsJ+
gKlL2C1/ZL+fTZc+H9qt38qba8my5XlQmhXmzXFKKyp+1pqNkQuYzzT0M8PUqtlh
z5aNu4gc/sOrQayusssUkkwISWm9yKc9pwOE+2Ax45iq2xNhjx0+rl9nc/chV21T
ZLfyePid/4N3Q7obmQ9a6trOBIF5ONyg16CK61RjacnG76AMKrVOoq9lzF2UufL8
Myzw9X8Wsw3VrjJyYbWhUtkCAwEAAQ==`,
  `MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAwWP4dO4iYcHpcO6lVmjC
gg/jfLM4fP+wWNaoDvMke0gQ7m9smXVtgbYXb6qzEd0aDaCRX3em+eo6bWp6ps5U
+8USRxuNH4cs6ZLjGynmZnm2TXrJScixUEw4ULq8Rdexr4ZmtT1WfUjJSFQpWWwp
e69kVR0iwwiCFRq90I/7MfJWnwgHX2tkUkVBttmXt9o0wP8th/UOIdx+0VbrqhgY
wMyo3xCUvqcSpcKsHXoLkKGlpcplE96rKg2vOqhSSQzoHMr8ZrGIn7hsPI7enVsP
D/nMiJptavVowfNZjM/rd6Iv/TYfI1JOJWUeIM+aPyhZKrvWHGdC8VO2jneNkNXj
1B6tnZy6owPt4Lgdimr0u/146WvjAL+ZK1dc4CNecOLeRINn26POCIeOpYPHGhbi
N6K1UrHpC1Oon2NW5ms9dciE242O1BrQF5j/GvNzGoV74GvnbVFZ9eyBJm9MlIOU
Sd5O2iTqWPmJ03wVSXLx+6g0fgaGHEDtKtbfhuHvDG2dIoAB7q+oKBHQJ7CIFEbI
lBnPV1v+dxDLb3DdK0Ip9wM74S2+Nf9359TCjAaWgNjiTnhBw6xpwTGn/8vzNL3p
fcEVJJt8DUfuCYV9mtKPHbj06RHnLsaXQ72x6I+ocXi8TygTjldZFx13ttJqVvju
UaTE0E4KN9Mzb/2zEYTgCzcCAwEAAQ==`,
];

/**
 * Function to be called when a valid allowlisting request was received
 *
 * @param domain - Domain to allowlist
 */
async function onAllowlisting(domain) {
  if (License.isActiveLicense()) {
    return;
  }

  await _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.add([`@@||${domain}^$document`], (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_2__/* .createFilterMetaData */ .Yv)('web'));
}

/**
 * Remove all web based allowlisting filters
 */
async function removeWebAllowlistingFilters() {
  const allowlistingFilters = (await _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.getUserFilters())
    .filter(filter => filter.type === 'allowing');

  const allowlistingFiltersWithMetadata = await Promise.all(
    allowlistingFilters.map(async (filter) => {
      const metadata = await _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.getMetadata(filter.text);
      return { filter, metadata };
    }),
  );

  const webAllowlistingFilters = allowlistingFiltersWithMetadata
    .filter(({ metadata }) => metadata && metadata.origin === 'web')
    .map(({ filter }) => filter);

  return _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.remove(webAllowlistingFilters.map(filter => filter.text));
}

/**
 * Initializes module
 */
async function start() {
  _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.allowlisting.setAuthorizedKeys(authorizedKeys);
  _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.allowlisting.setAllowlistingCallback(onAllowlisting);

  await License.ready();
  if (License.isActiveLicense()) {
    removeWebAllowlistingFilters();
  }

  License.licenseNotifier.on('license.status.changed', () => {
    if (License.isActiveLicense()) {
      _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.allowlisting.setAuthorizedKeys([]);
      removeWebAllowlistingFilters();
    } else {
      _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.allowlisting.setAuthorizedKeys(authorizedKeys);
    }
  });

  _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.allowlisting.onUnauthorized.addListener((error) => {
    _servermessages__WEBPACK_IMPORTED_MODULE_0__/* ["default"].recordErrorMessage */ .Z.recordErrorMessage('one_click_allowlisting_error ', undefined, { errorMessage: error.toString() });
    // eslint-disable-next-line no-console
    console.error(error);
  });
}

start();


/***/ }),

/***/ 4590:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/prefs.js
var prefs = __webpack_require__(8710);
// EXTERNAL MODULE: ./build/templates/info.chrome.js.tmpl
var info_chrome_js = __webpack_require__(187);
// EXTERNAL MODULE: ./vendor/webext-sdk/dist/ewe-api.js
var ewe_api = __webpack_require__(3817);
// EXTERNAL MODULE: ./adblock-betafish/telemetry/background/index.js + 4 modules
var background = __webpack_require__(158);
// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/stats.js
var stats = __webpack_require__(9892);
// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/allowlisting.js
var allowlisting = __webpack_require__(8858);
// EXTERNAL MODULE: ./adblock-betafish/alias/subscriptionInit.js + 1 modules
var subscriptionInit = __webpack_require__(8910);
// EXTERNAL MODULE: ./adblock-betafish/picreplacement/sync-service.js
var sync_service = __webpack_require__(8409);
// EXTERNAL MODULE: ./adblock-betafish/subscriptionadapter.js + 1 modules
var subscriptionadapter = __webpack_require__(934);
// EXTERNAL MODULE: ./adblock-betafish/datacollection.v2.js
var datacollection_v2 = __webpack_require__(5175);
// EXTERNAL MODULE: ./adblock-betafish/ctaabmanager.js
var ctaabmanager = __webpack_require__(1064);
// EXTERNAL MODULE: ./adblock-betafish/alias/icon.js
var icon = __webpack_require__(1021);
// EXTERNAL MODULE: ./adblock-betafish/localdatacollection.js
var localdatacollection = __webpack_require__(1120);
// EXTERNAL MODULE: ./adblock-betafish/picreplacement/check.js
var check = __webpack_require__(1177);
// EXTERNAL MODULE: ./adblock-betafish/servermessages.js
var servermessages = __webpack_require__(1546);
// EXTERNAL MODULE: ./adblock-betafish/survey.js + 1 modules
var survey = __webpack_require__(7877);
;// CONCATENATED MODULE: ./adblock-betafish/alias/uninstall.js
/** @module uninstall */
/** similar to adblockpluschrome\lib\uninstall.js */





/**
 * Returns the number of currently active filters that have been added using
 * the experimental allowlisting functionality (i.e. that originated in the
 * web, and not in the extension popup).
 *
 * @returns {number} The filter count
 */
async function getWebAllowlistingFilterCount() {
  // get all allowlisting filters that are enabled
  const filters = (await ewe.filters.getUserFilters()).filter(
    filter => filter.type === "allowing" && filter.enabled
  );

  // collect their metadata
  const filtersMetadata = await Promise.all(
    filters.map(async filter => await ewe.filters.getMetadata(filter.text))
  );

  // count the ones that originated in the web
  return filtersMetadata.filter(data => data.origin === "web").length;
}

async function setUninstallURL() {
  if (browser.runtime.setUninstallURL) {
    const userID = await background/* TELEMETRY.untilLoaded */.C.untilLoaded();
    let uninstallURL = "https://getadblock.com/uninstall/?u=" + userID;
    // if the start property of blockCount exists (which is the AdBlock
    // installation timestamp)
    // use it to calculate the approximate length of time that user has
    // AdBlock installed
    if (prefs/* Prefs */.B && prefs/* Prefs.blocked_total */.B.blocked_total !== undefined) {
      let twoMinutes = 2 * 60 * 1000;
      let getLastUpdateTime = async function () {
        const userSubs = await subscriptionadapter/* default.getSubscriptionsMinusText */.Z.getSubscriptionsMinusText();
        let maxLastDownload = -1;
        for (const sub in userSubs) {
          if (userSubs[sub].lastSuccess > maxLastDownload) {
            maxLastDownload = userSubs[sub].lastSuccess;
          }
        }
        return maxLastDownload;
      };
      let updateUninstallURL = async function () {
        const data = await browser.storage.local.get("blockage_stats");
        let url = uninstallURL;
        if (data && data.blockage_stats && data.blockage_stats.start) {
          let installedDuration = Date.now() - data.blockage_stats.start;
          url = url + "&t=" + installedDuration;
        }
        let bc = prefs/* Prefs.blocked_total */.B.blocked_total;
        url = url + "&bc=" + bc;
        let lastUpdateTime = await getLastUpdateTime();
        url = url + "&lt=" + lastUpdateTime;
        url += `&wafc=${await getWebAllowlistingFilterCount()}`;
        browser.runtime.setUninstallURL(url);
      };
      // start an interval timer that will update the Uninstall URL every 2
      // minutes
      setInterval(updateUninstallURL, twoMinutes);
      updateUninstallURL();
    } else {
      browser.runtime.setUninstallURL(uninstallURL + "&t=-1");
    }
  }
};

// EXTERNAL MODULE: ./adblock-betafish/utilities/background/bg-functions.js
var bg_functions = __webpack_require__(2028);
;// CONCATENATED MODULE: ./adblock-betafish/background.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, License,
   gabQuestion, ext, getSettings, setSetting, settings
   parseFilter, channels, twitchChannelNamePages, ytChannelNamePages,
   updateButtonUIAndContextMenus,  */
























// Message verification
const trustedBaseUrl = browser.runtime.getURL('');
const gabHostnames = ['https://getadblock.com', 'https://dev.getadblock.com', 'https://dev1.getadblock.com', 'https://dev2.getadblock.com', 'https://vpn.getadblock.com', 'https://help.getadblock.com'];

const isTrustedSender = sender => sender.url.startsWith(trustedBaseUrl);

const isTrustedTarget = url => (url.startsWith(trustedBaseUrl)
  || gabHostnames.includes(new URL(url).origin));

const isTrustedSenderDomain = (sender) => {
  if (sender.origin) {
    return gabHostnames.includes(sender.origin);
  }
  if (sender.url) {
    return gabHostnames.includes(new URL(sender.url).origin);
  }
  return false;
};
const adblocBetaID = 'pljaalgmajnlogcgiohkhdmgpomjcihk';

// eslint-disable-next-line no-restricted-globals
Object.assign(self, {
  Prefs: prefs/* Prefs */.B,
  info: info_chrome_js,
  getBlockedPerPage: stats/* getBlockedPerPage */.G,
  SURVEY: survey/* default */.Z,
  SyncService: sync_service["default"],
  LocalDataCollection: localdatacollection/* default */.Z,
  ServerMessages: servermessages/* default */.Z,
  SubscriptionAdapter: subscriptionadapter/* default */.Z,
  TELEMETRY: background/* TELEMETRY */.C,
  IPM: background/* IPM */.fp,
  DataCollectionV2: datacollection_v2/* default */.Z,
  CtaABManager: ctaabmanager/* default */.Z,
  getNewBadgeTextReason: icon/* getNewBadgeTextReason */.vo,
  ewe: ewe_api,
  License: check/* License */.Cz,
  channels: check/* channels */.ZW,
  isTrustedSender,
  isTrustedTarget,
  isTrustedSenderDomain,
});

// CUSTOM FILTERS

const isSelectorFilter = function (text) {
  // This returns true for both hiding rules as hiding whitelist rules
  // This means that you'll first have to check if something is an excluded rule
  // before checking this, if the difference matters.
  return /#@?#./.test(text);
};

// custom filter countCache singleton.
const countCache = (function countCache() {
  let cache;

  // Update custom filter count stored in storage
  const updateCustomFilterCount = function () {
    (0,bg_functions/* chromeStorageSetHelper */.rJ)('custom_filter_count', cache);
  };

  return {
    // Update custom filter count cache and value stored in storage.
    // Inputs: new_count_map:count map - count map to replace existing count
    // cache
    updateCustomFilterCountMap(newCountMap) {
      cache = newCountMap || cache;
      updateCustomFilterCount();
    },

    // Remove custom filter count for host
    // Inputs: host:string - url of the host
    removeCustomFilterCount(host) {
      if (host && cache[host]) {
        delete cache[host];
        updateCustomFilterCount();
      }
    },

    // Get current custom filter count for a particular domain
    // Inputs: host:string - url of the host
    getCustomFilterCount(host) {
      let customCount = 0;
      if (cache) {
        customCount = cache[host];
      }
      return customCount || 0;
    },

    // Add 1 to custom filter count for the filters domain.
    // Inputs: filter:string - line of text to be added to custom filters.
    addCustomFilterCount(filter) {
      const host = filter.split('##')[0];
      cache[host] = this.getCustomFilterCount(host) + 1;
      updateCustomFilterCount();
    },

    init() {
      browser.storage.local.get('custom_filter_count').then((response) => {
        cache = response.custom_filter_count || {};
      });
    },
  };
}());
countCache.init();

// Add a new custom filter entry.
// Inputs: filter:string - line of text to add to custom filters.
//         origin:string - the source or trigger for the filter list entry
// Returns: null if succesfull, otherwise an exception
const addCustomFilter = async function (filterText, origin) {
  try {
    const response = ewe_api.filters.validate(filterText);
    if (response) {
      return response;
    }
    await ewe_api.filters.add([filterText], (0,bg_functions/* createFilterMetaData */.Yv)(origin));
    await ewe_api.filters.enable([filterText]);
    if (isSelectorFilter(filterText)) {
      countCache.addCustomFilterCount(filterText);
    }
    return null;
  } catch (ex) {
    // convert to a string so that Safari can pass
    // it back to content scripts
    return ex.toString();
  }
};

// Creates a custom filter entry that allowlists a given domain
// Inputs: pageUrl:string - url of the page
//         origin:string - the source or trigger for the filter list entry
// Returns: null if successful, otherwise an exception
const createDomainAllowlistFilter = async function (pageUrl, origin) {
  const theURL = new URL(pageUrl);
  const host = theURL.hostname.replace(/^www\./, '');
  const filter = `@@||${host}/*^$document`;
  return addCustomFilter(filter, origin);
};

// UNWHITELISTING

async function getUserFilters() {
  return ewe_api.filters.getUserFilters();
}

const isWhitelistFilter = function (text) {
  return /^@@/.test(text);
};

// Look for a custom filter that would whitelist the 'url' parameter
// and if any exist, remove the first one.
// Inputs: url:string - a URL that may be allowlisted by a custom filter
//         tabId: integer - tab id of the tab that may be allowlisted by a custom filter
// Returns: true if a filter was found and removed; false otherwise.
const tryToUnwhitelist = async function (pageUrl, tabId) {
  const url = pageUrl.replace(/#.*$/, ''); // Whitelist ignores anchors
  const customFilters = await getUserFilters();
  if (!customFilters || !customFilters.length === 0) {
    return false;
  }

  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < customFilters.length; i++) {
    const { text } = customFilters[i];
    const whitelist = text.search(/@@\*\$document,domain=~/);
    // Blacklist site, which is whitelisted by global @@*&document,domain=~
    // filter
    if (whitelist > -1) {
      // Remove protocols
      const [finalUrl] = url.replace(/((http|https):\/\/)?(www.)?/, '').split(/[/?#]/);
      await ewe_api.filters.remove([text]);
      await ewe_api.filters.remove([`${text}|~${finalUrl}`]);
      return true;
    }
    if (isWhitelistFilter(text) && (await ewe_api.filters.getAllowingFilters(tabId)).includes(text)) {
      await ewe_api.filters.remove([text]);
      return true;
    }
  }
  return false;
};

// Removes a custom filter entry.
// Inputs: host:domain of the custom filters to be reset.
const removeCustomFilter = async function (host) {
  const customFilters = await getUserFilters();
  if (!customFilters || !customFilters.length === 0) {
    return;
  }

  const identifier = host;

  for (let i = 0; i < customFilters.length; i++) {
    const entry = customFilters[i];
    // If the identifier is at the start of the entry
    // then delete it.
    if (entry.text.indexOf(identifier) === 0) {
      ewe_api.filters.remove([entry.text]);
    }
  }
};

// Entry point for customize.js, used to update custom filter count cache.
const updateCustomFilterCountMap = function (newCountMap) {
  // Firefox passes weak references to objects, so we need a local copy
  const localCountMap = JSON.parse(JSON.stringify(newCountMap));
  countCache.updateCustomFilterCountMap(localCountMap);
};

const removeCustomFilterForHost = function (host) {
  if (countCache.getCustomFilterCount(host)) {
    removeCustomFilter(host);
    countCache.removeCustomFilterCount(host);
  }
};

// Currently, Firefox doesn't allow the background page to use alert() or confirm(),
// so some JavaScript is injected into the active tab, which does the confirmation for us.
// If the user confirms the removal of the entries, then they are removed, and the page reloaded.
const confirmRemovalOfCustomFiltersOnHost = function (host, activeTabId) {
  const customFilterCount = countCache.getCustomFilterCount(host);
  const confirmationText = browser.i18n.getMessage('confirm_undo_custom_filters', [customFilterCount, host]);
  const messageListenerFN = function (request) {
    browser.runtime.onMessage.removeListener(messageListenerFN);
    if (request === `remove_custom_filters_on_host${host}:true`) {
      removeCustomFilterForHost(host);
      browser.tabs.reload(activeTabId);
    }
  };

  browser.runtime.onMessage.addListener(messageListenerFN);
  /* eslint-disable prefer-template */
  const codeToExecute = 'var host = "' + host + '"; var confirmResponse = confirm("' + confirmationText + '"); browser.runtime.sendMessage("remove_custom_filters_on_host" + host + ":" + confirmResponse); ';
  const details = { allFrames: false, code: codeToExecute };
  browser.tabs.executeScript(activeTabId, details);
};
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command !== 'confirmRemovalOfCustomFiltersOnHost' || !message.host || !message.activeTabId) {
    return;
  }
  confirmRemovalOfCustomFiltersOnHost(message.host, message.activeTabId);
  sendResponse({});
});

// Reload already opened tab
// Input:
// id: integer - id of the tab which should be reloaded
const reloadTab = function (id, callback) {
  let tabId = id;
  const localCallback = callback;
  const listener = function (updatedTabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.status === 'complete') {
      setTimeout(() => {
        browser.tabs.sendMessage(updatedTabId, { command: 'reloadcomplete' });
        if (typeof localCallback === 'function') {
          localCallback(tab);
        }
        browser.tabs.onUpdated.removeListener(listener);
      }, 2000);
    }
  };

  if (typeof tabId === 'string') {
    tabId = parseInt(tabId, 10);
  }
  browser.tabs.onUpdated.addListener(listener);
  browser.tabs.reload(tabId, { bypassCache: true });
};

const isSelectorExcludeFilter = function (text) {
  return /#@#./.test(text);
};

const getAdblockUserId = function () {
  return background/* TELEMETRY.userId */.C.userId;
};

// INFO ABOUT CURRENT PAGE

// Returns true if the url cannot be blocked
const pageIsUnblockable = function (url) {
  if (!url) { // Protect against empty URLs - e.g. Safari empty/bookmarks/top sites page
    return true;
  }
  let scheme = '';
  if (!url.protocol) {
    scheme = (0,bg_functions/* parseUri */.he)(url).protocol;
  } else {
    scheme = url.protocol;
  }

  return (scheme !== 'http:' && scheme !== 'https:' && scheme !== 'feed:');
};

// Returns true if the page is whitelisted.
// Called from a content script
const pageIsWhitelisted = async function (page) {
  const whitelisted = !!await ewe_api.filters.getAllowingFilters(page.id).length;
  return (whitelisted !== undefined && whitelisted !== null);
};

const pausedKey = 'paused';
// white-list all blocking requests regardless of frame / document, but still allows element hiding
const pausedFilterText1 = '@@*';
// white-list all documents, which prevents element hiding
const pausedFilterText2 = '@@*$document';

// Get or set if AdBlock is paused
// Inputs: newValue (optional boolean): if true, AdBlock will be paused, if
// false, AdBlock will not be paused.
// Returns: undefined if newValue was specified, otherwise it returns true
// if paused, false otherwise.
const adblockIsPaused = function (newValue) {
  if (newValue === undefined) {
    return ((0,bg_functions/* sessionStorageGet */.E_)(pausedKey) === true);
  }

  if (newValue === true) {
    (0,bg_functions/* chromeStorageSetHelper */.rJ)(pausedKey, true, () => {
      ewe_api.filters.add([pausedFilterText1]);
      ewe_api.filters.add([pausedFilterText2]);
    });
  } else {
    ewe_api.filters.remove([pausedFilterText1]);
    ewe_api.filters.remove([pausedFilterText2]);
    browser.storage.local.remove(pausedKey);
  }
  (0,bg_functions/* sessionStorageSet */.bg)(pausedKey, newValue);
  return undefined;
};

const domainPausedKey = 'domainPaused';

// Helper that saves the domain pauses
// Inputs:  domainPauses (required object): domain pauses to save
// Returns: undefined
const saveDomainPauses = function (domainPauses) {
  (0,bg_functions/* chromeStorageSetHelper */.rJ)(domainPausedKey, domainPauses);
  (0,bg_functions/* sessionStorageSet */.bg)(domainPausedKey, domainPauses);
};

// Helper that removes any domain pause filter rules based on tab events
// Inputs:  tabId (required integer): identifier for the affected tab
//          newDomain (optional string): the current domain of the tab
// Returns: undefined
const domainPauseChangeHelper = function (tabId, newDomain) {
  // get stored domain pauses
  const storedDomainPauses = (0,bg_functions/* sessionStorageGet */.E_)(domainPausedKey);

  // check if any of the stored domain pauses match the affected tab
  for (const aDomain in storedDomainPauses) {
    if (storedDomainPauses[aDomain] === tabId && aDomain !== newDomain) {
      // Remove the filter that white-listed the domain
      ewe_api.filters.remove([`@@${aDomain}$document`]);
      delete storedDomainPauses[aDomain];

      // save updated domain pauses
      saveDomainPauses(storedDomainPauses);
    }
  }
  updateButtonUIAndContextMenus();
};

// Handle the effects of a tab update event on any existing domain pauses
// Inputs:  tabId (required integer): identifier for the affected tab
//          changeInfo (required object with a url property): contains the
// new url for the tab
//          tab (optional Tab object): the affected tab
// Returns: undefined
const domainPauseNavigationHandler = function (tabId, changeInfo) {
  if (changeInfo === undefined || changeInfo.url === undefined || tabId === undefined) {
    return;
  }

  const newDomain = (0,bg_functions/* parseUri */.he)(changeInfo.url).host;

  domainPauseChangeHelper(tabId, newDomain);
};

// Handle the effects of a tab remove event on any existing domain pauses
// Inputs:  tabId (required integer): identifier for the affected tab
//          changeInfo (optional object): info about the remove event
// Returns: undefined
const domainPauseClosedTabHandler = function (tabId) {
  if (tabId === undefined) {
    return;
  }

  domainPauseChangeHelper(tabId);
};

// Get or set if AdBlock is domain paused for the domain of the specified tab
// Inputs:  activeTab (optional object with url and id properties): the paused tab
//          newValue (optional boolean): if true, AdBlock will be domain paused
// on the tab's domain, if false, AdBlock will not be domain paused on that domain.
// Returns: undefined if activeTab and newValue were specified; otherwise if activeTab
// is specified it returns true if domain paused, false otherwise; finally it returns
// the complete storedDomainPauses if activeTab is not specified

const adblockIsDomainPaused = function (activeTab, newValue) {
  // get stored domain pauses
  let storedDomainPauses = (0,bg_functions/* sessionStorageGet */.E_)(domainPausedKey);

  // return the complete list of stored domain pauses if activeTab is undefined
  if (activeTab === undefined) {
    return storedDomainPauses;
  }

  // return a boolean indicating whether the domain is paused if newValue is undefined
  const activeDomain = (0,bg_functions/* parseUri */.he)(activeTab.url).host;
  if (newValue === undefined) {
    if (storedDomainPauses) {
      return Object.prototype.hasOwnProperty.call(storedDomainPauses, activeDomain);
    }
    return false;
  }

  // create storedDomainPauses object if needed
  if (!storedDomainPauses) {
    storedDomainPauses = {};
  }

  // set or delete a domain pause
  if (newValue === true) {
    // add a domain pause
    ewe_api.filters.add([`@@${activeDomain}$document`]);
    storedDomainPauses[activeDomain] = activeTab.id;
    browser.tabs.onUpdated.removeListener(domainPauseNavigationHandler);
    browser.tabs.onRemoved.removeListener(domainPauseClosedTabHandler);
    browser.tabs.onUpdated.addListener(domainPauseNavigationHandler);
    browser.tabs.onRemoved.addListener(domainPauseClosedTabHandler);
  } else {
    // remove the domain pause
    ewe_api.filters.remove([`@@${activeDomain}$document`]);
    delete storedDomainPauses[activeDomain];
  }

  // save the updated list of domain pauses
  saveDomainPauses(storedDomainPauses);
  return undefined;
};

// If AdBlock was paused on shutdown (adblock_is_paused is true), then
// unpause / remove the white-list all entry at startup.
browser.storage.local.get(pausedKey).then((response) => {
  if (response[pausedKey]) {
    subscriptionInit/* initialize.then */.j.then(() => {
      ewe_api.filters.remove([pausedFilterText1]);
      ewe_api.filters.remove([pausedFilterText2]);
      browser.storage.local.remove(pausedKey);
    });
  }
});


// If AdBlock was domain paused on shutdown, then unpause / remove
// all domain pause white-list entries at startup.
browser.storage.local.get(domainPausedKey).then((response) => {
  const storedDomainPauses = response[domainPausedKey];
  if (!(0,bg_functions/* isEmptyObject */.Qr)(storedDomainPauses)) {
    subscriptionInit/* initialize.then */.j.then(() => {
      for (const aDomain in storedDomainPauses) {
        ewe_api.filters.remove([`@@${aDomain}$document`]);
      }
      browser.storage.local.remove(domainPausedKey);
    });
  }
});

browser.commands.onCommand.addListener((command) => {
  if (command === 'toggle_pause') {
    adblockIsPaused(!adblockIsPaused());
    servermessages/* default.recordGeneralMessage */.Z.recordGeneralMessage('pause_shortcut_used');
  }
});

const getTab = function (tabId) {
  return new Promise((resolve) => {
    if (tabId) {
      let id = tabId;
      if (typeof id === 'string') {
        id = parseInt(id, 10);
      }
      browser.tabs.get(id).then((tab) => {
        resolve(tab);
      });
    } else {
      browser.tabs.query({
        active: true,
        lastFocusedWindow: true,
      }).then((tabs) => {
        if (tabs.length === 0) {
          resolve(); // For example: only the background devtools or a popup are opened
        }
        resolve(tabs[0]);
      });
    }
  });
};


// Get interesting information about the current tab.
// Inputs:
// secondTime: bool - whether this is a recursive call
// info object passed to resolve: {
// page: Page object
// tab: Tab object
// whitelisted: bool - whether the current tab's URL is whitelisted.
// disabled_site: bool - true if the url is e.g. about:blank or the
// Extension Gallery, where extensions don't run.
// settings: Settings object
// paused: bool - whether AdBlock is paused
// domainPaused: bool - whether the current tab's URL is paused
// blockCountPage: int - number of ads blocked on the current page
// blockCountTotal: int - total number of ads blocked since install
// customFilterCount: int - number of custom rules for the current tab's URL
// showMABEnrollment: bool - whether to show MAB enrollment
// popupMenuThemeCTA: string - name of current popup menu CTA theme
// lastGetStatusCode: int - status code for last GET request
// lastGetErrorResponse: error object - error response for last GET request
// lastPostStatusCode: int - status code for last POST request
// allowlistRuleText: string - allowlist rule text for use on YouTube and Twitch
// }
// Returns: Promise
const getCurrentTabInfo = function (secondTime, tabId) {
  return new Promise((resolve) => {
    getTab(tabId).then(async (tab) => {
      if (tab && !tab.url) {
        // Issue 6877: tab URL is not set directly after you opened a window
        // using window.open()
        if (!secondTime) {
          setTimeout(() => {
            getCurrentTabInfo(true);
          }, 250);
        }
        return resolve();
      }
      try {
        const page = new ext.Page(tab);
        const disabledSite = pageIsUnblockable(page.url.href);
        const customFilterCheckUrl = disabledSite ? undefined : page.url.hostname;

        const result = {
          disabledSite,
          url: String(page.url || tab.url),
          id: page.id,
          settings: getSettings(),
          paused: adblockIsPaused(),
          domainPaused: adblockIsDomainPaused({ url: page.url.href, id: page.id }),
          blockCountPage: await (0,stats/* getBlockedPerPage */.G)(tab),
          blockCountTotal: stats/* Stats.blocked_total */.j.blocked_total,
          customFilterCount: countCache.getCustomFilterCount(customFilterCheckUrl),
          showMABEnrollment: check/* License.shouldShowMyAdBlockEnrollment */.Cz.shouldShowMyAdBlockEnrollment(),
          popupMenuThemeCTA: check/* License.getCurrentPopupMenuThemeCTA */.Cz.getCurrentPopupMenuThemeCTA(),
          showDcCTA: check/* License.shouldShowPremiumDcCTA */.Cz.shouldShowPremiumDcCTA(),
          lastGetStatusCode: sync_service["default"].getLastGetStatusCode(),
          lastGetErrorResponse: sync_service["default"].getLastGetErrorResponse(),
          lastPostStatusCode: sync_service["default"].getLastPostStatusCode(),
          newBadgeTextReason: (0,icon/* getNewBadgeTextReason */.vo)(),
        };
        if (!disabledSite) {
          result.whitelisted = !!(await ewe_api.filters.getAllowingFilters(page.id)).length;
          result.whitelistedText = await ewe_api.filters.getAllowingFilters(page.id);
        }
        if (check/* License */.Cz && check/* License.isActiveLicense */.Cz.isActiveLicense()) {
          result.activeLicense = true;
          result.subscriptions = await subscriptionadapter/* default.getSubscriptionsMinusText */.Z.getSubscriptionsMinusText();
        }
        if (
          getSettings()
          && getSettings().youtube_channel_whitelist
          && (0,bg_functions/* parseUri */.he)(tab.url).hostname === 'www.youtube.com'
        ) {
          result.youTubeChannelName = ytChannelNamePages.get(page.id);
          // handle the odd occurence of when the  YT Channel Name
          // isn't available in the ytChannelNamePages map
          // obtain the channel name from the URL
          // for instance, when the forward / back button is clicked
          if (!result.youTubeChannelName && /ab_channel/.test(tab.url)) {
            result.youTubeChannelName = bg_functions/* parseUri.parseSearch */.he.parseSearch(tab.url).ab_channel;
          }
          if (result.youTubeChannelName) {
            result.allowlistRuleText = `@@||www.youtube.com/*${result.youTubeChannelName}|$document`;
          }
        }
        if (
          twitchChannelNamePages
          && getSettings()
          && getSettings().twitch_channel_allowlist
          && (0,bg_functions/* parseUri */.he)(tab.url).hostname === 'www.twitch.tv'
        ) {
          result.twitchChannelName = twitchChannelNamePages.get(page.id);
          if (result.twitchChannelName) {
            result.allowlistRuleText = `@@||twitch.tv/*${result.twitchChannelName}^$document`;
          }
        }
        return resolve(result);
      } catch (err) {
        return resolve({ errorStr: err.toString(), stack: err.stack, message: err.message });
      }
    });
  });
};

// BETA CODE
if (browser.runtime.id === adblocBetaID) {
  // Display beta page after each update for beta-users only
  browser.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'update' || details.reason === 'install') {
      browser.tabs.create({ url: 'https://getadblock.com/beta' });
    }
  });
}

const updateStorageKey = 'last_known_version';
if (browser.runtime.id) {
  let updateTabRetryCount = 0;
  const getUpdatedURL = function () {
    const encodedVersion = encodeURIComponent('5.7.0');
    let updatedURL = `https://getadblock.com/update/${background/* TELEMETRY.flavor.toLowerCase */.C.flavor.toLowerCase()}/${encodedVersion}/?u=${background/* TELEMETRY.userId */.C.userId}&bc=${prefs/* Prefs.blocked_total */.B.blocked_total}`;
    updatedURL = `${updatedURL}&rt=${updateTabRetryCount}`;
    return updatedURL;
  };
  const waitForUserAction = function () {
    browser.tabs.onCreated.removeListener(waitForUserAction);
    setTimeout(() => {
      updateTabRetryCount += 1;
      // eslint-disable-next-line no-use-before-define
      openUpdatedPage();
    }, 10000); // 10 seconds
  };
  const openUpdatedPage = function () {
    const updatedURL = getUpdatedURL();
    browser.tabs.create({ url: updatedURL });
  };
  const shouldShowUpdate = function () {
    const checkQueryState = function () {
      browser.idle.queryState(30).then((state) => {
        if (state === 'active') {
          openUpdatedPage();
        } else {
          browser.tabs.onCreated.removeListener(waitForUserAction);
          browser.tabs.onCreated.addListener(waitForUserAction);
        }
      });
    };
    const checkLicense = function () {
      if (!check/* License.isActiveLicense */.Cz.isActiveLicense()) {
        checkQueryState();
      }
    };
    if (browser.management && browser.management.getSelf) {
      browser.management.getSelf().then((extensionInfo) => {
        if (extensionInfo && extensionInfo.installType !== 'admin') {
          check/* License.ready */.Cz.ready().then(checkLicense);
        }
      });
    } else {
      check/* License.ready */.Cz.ready().then(checkLicense);
    }
  };
  const slashUpdateReleases = ['5.7.0'];
  // Display updated page after each update
  browser.runtime.onInstalled.addListener(async (details) => {
    let {
      last_known_version: lastKnownVersion,
    } = await browser.storage.local.get(updateStorageKey);
    if (!lastKnownVersion) {
      lastKnownVersion = localStorage.getItem(updateStorageKey);
    }
    const currentVersion = browser.runtime.getManifest().version;
    // don't open the /update page for Ukraine or Russian users.
    const shouldShowUpdateForLocale = function () {
      const language = (0,bg_functions/* determineUserLanguage */.pN)();
      return !(language && (language.startsWith('ru') || language.startsWith('uk')));
    };
    if (
      details.reason === 'update'
      && shouldShowUpdateForLocale()
      && slashUpdateReleases.includes(currentVersion)
      && !slashUpdateReleases.includes(lastKnownVersion)
      && browser.runtime.id !== adblocBetaID
    ) {
      settings.onload().then(async () => {
        if (!getSettings().suppress_update_page) {
          await background/* TELEMETRY.untilLoaded */.C.untilLoaded();
          prefs/* Prefs.untilLoaded.then */.B.untilLoaded.then(shouldShowUpdate);
        }
      });
    }
    // We want to move away from localStorage, so remove item if it exists.
    localStorage.removeItem(updateStorageKey);
    // Update version in browser.storage.local. We intentionally ignore the
    // returned promise.
    browser.storage.local.set({ [updateStorageKey]: browser.runtime.getManifest().version });
  });
}


const openTab = function (url) {
  browser.tabs.create({ url });
};

// These functions are usually only called by content scripts.

// DEBUG INFO

async function getCustomFilterMetaData() {
  const currentUserFilters = await getUserFilters();
  if (!currentUserFilters || currentUserFilters.length === 0) {
    return Promise.resolve({});
  }
  /* eslint-disable consistent-return */
  return Promise.all(
    currentUserFilters.map(async (rule) => {
      if (rule && rule.text) {
        try {
          const metaData = await ewe_api.filters.getMetadata(rule.text);
          return { text: rule.text, metaData };
        } catch {
          return { text: rule.text };
        }
      }
    }),
  );
}
const getDebugAlarmInfo = async () => {
  const response = {};
  const alarms = await browser.alarms.getAll();
  if (alarms && alarms.length > 0) {
    response['Alarm info'] = `length: ${alarms.length}`;
    for (let i = 0; i < alarms.length; i++) {
      const alarm = alarms[i];
      response[`${i} Alarm Name`] = alarm.name;
      response[`${i} Alarm Scheduled Time`] = new Date(alarm.scheduledTime).toLocaleString();
    }
  } else {
    response['No alarm info'] = 'No alarm info';
  }
  return response;
};// end of getDebugAlarmInfo()

const getDebugLicenseInfo = async () => {
  const response = {};
  if (check/* License.isActiveLicense */.Cz.isActiveLicense()) {
    response.licenseInfo = {};
    response.licenseInfo.extensionGUID = background/* TELEMETRY.userId */.C.userId;
    response.licenseInfo.licenseId = check/* License.get */.Cz.get().licenseId;
    if (getSettings().sync_settings) {
      const syncInfo = {};
      syncInfo.SyncCommitVersion = sync_service["default"].getCommitVersion();
      syncInfo.SyncCommitName = sync_service["default"].getCurrentExtensionName();
      syncInfo.SyncCommitLog = sync_service["default"].getSyncLog();
      response.syncInfo = syncInfo;
    }
    response['License Installation Date'] = await check/* License.getLicenseInstallationDate */.Cz.getLicenseInstallationDate();
    const customChannelId = check/* channels.getIdByName */.ZW.getIdByName('CustomChannel');
    if (check/* channels.getGuide */.ZW.getGuide()[customChannelId].enabled) {
      const customChannel = check/* channels.channelGuide */.ZW.channelGuide[customChannelId].channel;
      const result = await customChannel.getTotalBytesInUse();
      response['Custom Channel total bytes in use'] = result;
    }
  }
  return response;
};

// Get debug info as a JSON object for bug reporting and ad reporting
const getDebugInfo = function () {
  return new Promise(async (resolve) => {
    const response = {};
    response.otherInfo = {};
    const { otherInfo } = response;

    // Is this installed build of AdBlock the official one?
    if (browser.runtime.id === 'pljaalgmajnlogcgiohkhdmgpomjcihk') {
      otherInfo.buildtype = ' Beta';
    } else if (browser.runtime.id === 'gighmmpiobklfepjocnamgkkbiglidom'
      || browser.runtime.id === 'aobdicepooefnbaeokijohmhjlleamfj'
      || browser.runtime.id === 'ndcileolkflehcjpmjnfbnaibdcgglog'
      || browser.runtime.id === 'jid1-NIfFY2CA8fy1tg@jetpack') {
      otherInfo.buildtype = ' Stable';
    } else {
      otherInfo.buildtype = ' Unofficial';
    }

    // Get AdBlock version
    otherInfo.version = browser.runtime.getManifest().version;

    // Get subscribed filter lists
    const subscriptionInfo = {};
    const subscriptions = await subscriptionadapter/* default.getSubscriptionsMinusText */.Z.getSubscriptionsMinusText();
    for (const id in subscriptions) {
      if (subscriptions[id].subscribed) {
        subscriptionInfo[id] = {};
        subscriptionInfo[id].lastSuccess = new Date(subscriptions[id].lastSuccess * 1000);
        subscriptionInfo[id].lastDownload = new Date(subscriptions[id].lastDownload * 1000);
        subscriptionInfo[id].downloadStatus = subscriptions[id].downloadStatus;
      }
    }
    response.subscriptions = subscriptionInfo;

    const userFilters = await getUserFilters();
    if (userFilters && userFilters.length) {
      response.customFilters = userFilters.map(filter => filter.text).join('\n');
    }

    // Get settings
    const adblockSettings = {};
    const settings = getSettings();
    for (const setting in settings) {
      adblockSettings[setting] = JSON.stringify(settings[setting]);
    }

    response.settings = adblockSettings;
    response.prefs = JSON.stringify(prefs/* Prefs */.B);
    otherInfo.browser = background/* TELEMETRY.browser */.C.browser;
    otherInfo.browserVersion = background/* TELEMETRY.browserVersion */.C.browserVersion;
    otherInfo.osVersion = background/* TELEMETRY.osVersion */.C.osVersion;
    otherInfo.os = background/* TELEMETRY.os */.C.os;

    if (localStorage && localStorage.length) {
      otherInfo.localStorageInfo = {};
      otherInfo.localStorageInfo.length = localStorage.length;
      let inx = 1;
      for (const key in localStorage) {
        otherInfo.localStorageInfo[`key${inx}`] = key;
        inx += 1;
      }
    } else {
      otherInfo.localStorageInfo = 'no data';
    }
    otherInfo.isAdblockPaused = adblockIsPaused();
    otherInfo.licenseState = check/* License.get */.Cz.get().status;
    otherInfo.licenseVersion = check/* License.get */.Cz.get().lv;

    // Get 'Stats' size
    otherInfo.rawStatsSize = await localdatacollection/* default.getRawStatsSize */.Z.getRawStatsSize();

    // Get total pings
    const storageResponse = await browser.storage.local.get('total_pings');
    otherInfo.totalPings = storageResponse.totalPings || 0;

    // Add exclude filters (if there are any)
    const excludeFiltersKey = 'exclude_filters';
    const secondResponse = await browser.storage.local.get(excludeFiltersKey);
    if (secondResponse && secondResponse[excludeFiltersKey]) {
      response.excludedFilters = secondResponse[excludeFiltersKey];
    }

    // Add JavaScript exception error (if there is one)
    const errorKey = 'errorkey';
    const errorResponse = await browser.storage.local.get(errorKey);
    if (errorResponse && errorResponse[errorKey]) {
      otherInfo[errorKey] = errorResponse[errorKey];
    }

    // Add any migration messages (if there are any)
    const migrateLogMessageKey = 'migrateLogMessageKey';
    const migrateLogMessageResponse = await browser.storage.local.get(migrateLogMessageKey);
    if (migrateLogMessageResponse && migrateLogMessageResponse[migrateLogMessageKey]) {
      const messages = migrateLogMessageResponse[migrateLogMessageKey].split('\n');
      for (let i = 0; i < messages.length; i++) {
        const key = `migration_message_${i}`;
        otherInfo[key] = messages[i];
      }
    }

    otherInfo.alarmInfo = await getDebugAlarmInfo();
    if (browser.permissions && browser.permissions.getAll) {
      otherInfo.hostPermissions = await browser.permissions.getAll();
    } else {
      otherInfo.hostPermissions = 'no data';
    }
    otherInfo.licenseInfo = await getDebugLicenseInfo();
    otherInfo.customRuleMetaData = await getCustomFilterMetaData();
    resolve(response);
  }); // end of Promise
};

// Called when user explicitly requests filter list updates
async function updateFilterLists() {
  const subscriptions = await ewe_api.subscriptions.getDownloadable();
  subscriptions.forEach(async (subscription) => {
    await ewe_api.subscriptions.sync(subscription.url);
  });
}

// Checks if the filter lists are currently in the process of
// updating and if there were errors the last time they were
// updated
async function checkUpdateProgress() {
  let inProgress = false;
  let filterError = false;
  const subscriptions = await ewe_api.subscriptions.getDownloadable();
  subscriptions.forEach(async (subscription) => {
    if (subscription.downloading) {
      inProgress = true;
    } else if (subscription.downloadStatus && subscription.downloadStatus !== 'synchronize_ok') {
      filterError = true;
    }
  });
  return { inProgress, filterError };
}

subscriptionInit/* initialize.then */.j.then(async () => {
  await background/* TELEMETRY.untilLoaded */.C.untilLoaded();
  background/* TELEMETRY.start */.C.start();
  setUninstallURL();
  await background/* IPM.untilLoaded */.fp.untilLoaded();
  background/* IPM.start */.fp.start();
  (0,allowlisting/* revalidateAllowlistingStates */.s)();
});

// Create the "blockage stats" for the uninstall logic ...
browser.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    browser.storage.local.get('blockage_stats').then((response) => {
      const { blockage_stats } = response;
      if (!blockage_stats) {
        const data = {};
        data.start = Date.now();
        data.version = 1;
        (0,bg_functions/* chromeStorageSetHelper */.rJ)('blockage_stats', data);
      }
    });
  }
});

// Attach methods to window
// eslint-disable-next-line no-restricted-globals
Object.assign(self, {
  adblockIsPaused,
  getUserFilters,
  updateFilterLists,
  checkUpdateProgress,
  createDomainAllowlistFilter,
  getDebugInfo,
  openTab,
  saveDomainPauses,
  adblockIsDomainPaused,
  pageIsWhitelisted,
  pageIsUnblockable,
  getCurrentTabInfo,
  getAdblockUserId,
  tryToUnwhitelist,
  addCustomFilter,
  removeCustomFilter,
  countCache,
  updateCustomFilterCountMap,
  removeCustomFilterForHost,
  confirmRemovalOfCustomFiltersOnHost,
  reloadTab,
  isSelectorFilter,
  isWhitelistFilter,
  isSelectorExcludeFilter,
  pausedFilterText1,
  pausedFilterText2,
  updateStorageKey,
  getCustomFilterMetaData,
});


/***/ }),

/***/ 922:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var prefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8710);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3817);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3265);
/* harmony import */ var _servermessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1546);
/* harmony import */ var _messaging_messagevalidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9031);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, ext, adblockIsPaused, adblockIsDomainPaused
   log, License, reloadTab, getSettings */









const updateButtonUIAndContextMenus = function () {
  browser.tabs.query({}).then((tabs) => {
    for (const tab of tabs) {
      tab.url = tab.url ? tab.url : tab.pendingUrl;
      if (adblockIsPaused() || adblockIsDomainPaused({ url: tab.url.href, id: tab.id })) {
        (0,_vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_2__/* .setBadge */ .q_)(tab.id, { number: '' });
      }
      const page = new ext.Page(tab);
      // eslint-disable-next-line no-use-before-define
      updateContextMenuItems(page);
    }
  });
};

// Bounce messages back to content scripts.
const emitPageBroadcast = (function emitBroadcast() {
  const injectMap = {
    topOpenWhitelistUI:
      {
        allFrames: false,
        include: [
          'jquery-3.5.1.min.js',
          'adblock-uiscripts-load_wizard_resources.js',
          'adblock-uiscripts-top_open_whitelist_ui.js',
        ],
      },
    topOpenWhitelistCompletionUI:
      {
        allFrames: false,
        include: [
          'jquery-3.5.1.min.js',
          'adblock-uiscripts-load_wizard_resources.js',
          'adblock-uiscripts-top_open_whitelist_completion_ui.js',
        ],
      },
    topOpenBlacklistUI:
      {
        allFrames: false,
        include: [
          'jquery-3.5.1.min.js',
          'purify.min.js',
          'adblock-uiscripts-load_wizard_resources.js',
          'adblock-uiscripts-blacklisting-overlay.js',
          'adblock-uiscripts-blacklisting-clickwatcher.js',
          'adblock-uiscripts-blacklisting-elementchain.js',
          'adblock-uiscripts-blacklisting-blacklistui.js',
          'adblock-uiscripts-top_open_blacklist_ui.js',
        ],
      },
    sendContentToBack:
      {
        allFrames: true,
        include: ['adblock-uiscripts-send_content_to_back.js'],
      },
  };

  // Inject the required scripts to execute fnName(parameter) in
  // the given tab.
  // Inputs: fnName:string name of function to execute on tab.
  //         fnName must exist in injectMap above.
  //         parameter:object to pass to fnName.  Must be JSON.stringify()able.
  //         alreadyInjected?:int used to recursively inject required scripts.
  //         tabID:int representing the ID of the tab to execute in.
  //         tabID defaults to the active tab
  const executeOnTab = function (fnName, parameter, alreadyInjected, tabID) {
    const injectedSoFar = alreadyInjected || 0;
    const data = injectMap[fnName];
    const details = { allFrames: data.allFrames };

    // If there's anything to inject, inject the next item and recurse.
    if (data.include.length > injectedSoFar) {
      details.file = data.include[injectedSoFar];
      browser.tabs.executeScript(tabID, details).then(() => {
        executeOnTab(fnName, parameter, injectedSoFar + 1, tabID);
      }).catch((error) => {
        log(error);
      });
    } else {
      // Nothing left to inject, so execute the function.
      const param = JSON.stringify(parameter);
      details.code = `${fnName}(${param});`;
      browser.tabs.executeScript(tabID, details);
    }
  };

  // The emitPageBroadcast() function
  const theFunction = function (request) {
    executeOnTab(request.fn, request.options, 0, request.tabID);
  };

  return theFunction;
}());

const contextMenuItem = (() => ({
  pauseAll:
    {
      title: browser.i18n.getMessage('pause_adblock_everywhere'),
      id: 'pause_adblock_everywhere',
      contexts: ['all'],
      onclick: () => {
        _servermessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"].recordGeneralMessage */ .Z.recordGeneralMessage('cm_pause_clicked');
        adblockIsPaused(true);
        updateButtonUIAndContextMenus();
      },
    },
  unpauseAll:
    {
      title: browser.i18n.getMessage('resume_blocking_ads'),
      id: 'resume_blocking_ads',
      contexts: ['all'],
      onclick: () => {
        _servermessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"].recordGeneralMessage */ .Z.recordGeneralMessage('cm_unpause_clicked');
        adblockIsPaused(false);
        updateButtonUIAndContextMenus();
      },
    },
  pauseDomain:
    {
      title: browser.i18n.getMessage('domain_pause_adblock'),
      id: 'domain_pause_adblock',
      contexts: ['all'],
      onclick: (info, tab) => {
        _servermessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"].recordGeneralMessage */ .Z.recordGeneralMessage('cm_domain_pause_clicked');
        adblockIsDomainPaused({ url: tab.url, id: tab.id }, true);
        updateButtonUIAndContextMenus();
      },
    },
  unpauseDomain:
    {
      title: browser.i18n.getMessage('resume_blocking_ads'),
      id: 'resume_blocking_ads_unpause',
      contexts: ['all'],
      onclick: (info, tab) => {
        _servermessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"].recordGeneralMessage */ .Z.recordGeneralMessage('cm_domain_unpause_clicked');
        adblockIsDomainPaused({ url: tab.url, id: tab.id }, false);
        updateButtonUIAndContextMenus();
      },
    },
  blockThisAd:
    {
      title: browser.i18n.getMessage('block_this_ad'),
      id: 'block_this_ad',
      contexts: ['all'],
      onclick(info, tab) {
        emitPageBroadcast({
          fn: 'topOpenBlacklistUI',
          options: {
            info,
            showBlacklistCTA: License.shouldShowBlacklistCTA(),
            isActiveLicense: License.isActiveLicense(),
            settings: getSettings(),
            addCustomFilterRandomName: _messaging_messagevalidator__WEBPACK_IMPORTED_MODULE_4__/* ["default"].generateNewRandomText */ .Z.generateNewRandomText(),
          },
        }, {
          tab,
        });
      },
    },
  blockAnAd:
    {
      title: browser.i18n.getMessage('block_an_ad_on_this_page'),
      id: 'block_an_ad_on_this_page',
      contexts: ['all'],
      onclick(info, tab) {
        emitPageBroadcast({
          fn: 'topOpenBlacklistUI',
          options: {
            nothingClicked: true,
            showBlacklistCTA: License.shouldShowBlacklistCTA(),
            isActiveLicense: License.isActiveLicense(),
            settings: getSettings(),
            addCustomFilterRandomName: _messaging_messagevalidator__WEBPACK_IMPORTED_MODULE_4__/* ["default"].generateNewRandomText */ .Z.generateNewRandomText(),
          },
        }, {
          tab,
        });
      },
    },
}))();


const checkLastError = function () {
  if (browser.runtime.lastError) {
    // do nothing
  }
};

let updateContextMenuItems = async function (page) {
  // Remove the AdBlock context menu items
  await browser.contextMenus.removeAll();

  // Check if the context menu items should be added
  if (!prefs__WEBPACK_IMPORTED_MODULE_0__/* .Prefs.shouldShowBlockElementMenu */ .B.shouldShowBlockElementMenu) {
    return;
  }
  const domainIsPaused = adblockIsDomainPaused({ url: page.url.href, id: page.id });

  if (adblockIsPaused()) {
    browser.contextMenus.create(contextMenuItem.unpauseAll, checkLastError);
  } else if (domainIsPaused) {
    browser.contextMenus.create(contextMenuItem.unpauseDomain, checkLastError);
  } else if (await _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.getAllowingFilters(page.id).length) {
    browser.contextMenus.create(contextMenuItem.pauseAll, checkLastError);
  } else {
    browser.contextMenus.create(contextMenuItem.blockThisAd, checkLastError);
    browser.contextMenus.create(contextMenuItem.blockAnAd, checkLastError);
    browser.contextMenus.create(contextMenuItem.pauseDomain, checkLastError);
    browser.contextMenus.create(contextMenuItem.pauseAll, checkLastError);
  }
};

const updateContextMenuItemsNoOp = function () {
  // Remove the AdBlock context menu items
  browser.contextMenus.removeAll();
};
// startup test to check if the context menu API functions correctly
// the `create` function is invoked twice, because it's the second
// and all subsequent calls that fail.
try {
  browser.contextMenus.create(contextMenuItem.blockThisAd, checkLastError);
  browser.contextMenus.create(contextMenuItem.blockThisAd, checkLastError);
} catch (e) {
  updateContextMenuItems = updateContextMenuItemsNoOp;
}
browser.contextMenus.removeAll();

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status) {
    updateContextMenuItems(new ext.Page(tab));
  }
});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command !== 'sendContentToBack') {
    return;
  } // not for us
  emitPageBroadcast({ fn: 'sendContentToBack', options: {} });
  sendResponse({});
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === 'reloadTabForWhitelist') {
    reloadTab(sender.tab.id, () => {
      emitPageBroadcast({
        fn: 'topOpenWhitelistCompletionUI',
        options: {
          rule: request.rule,
          isActiveLicense: License.isActiveLicense(),
          showWhitelistCTA: License.shouldShowWhitelistCTA(),
        },
        tabID: sender.tab.id,
      });
    });
    sendResponse({});
  }
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === 'showWhitelistCompletion') {
    emitPageBroadcast({
      fn: 'topOpenWhitelistCompletionUI',
      options: {
        rule: request.rule,
        isActiveLicense: License.isActiveLicense(),
        showWhitelistCTA: License.shouldShowWhitelistCTA(),
      },
      tabID: sender.tab.id,
    });
    sendResponse({});
  }
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === 'showBlacklist' && typeof request.nothingClicked === 'boolean') {
    emitPageBroadcast({
      fn: 'topOpenBlacklistUI',
      options: {
        nothingClicked: request.nothingClicked,
        isActiveLicense: License.isActiveLicense(),
        showBlacklistCTA: License.shouldShowBlacklistCTA(),
        settings: getSettings(),
        addCustomFilterRandomName: _messaging_messagevalidator__WEBPACK_IMPORTED_MODULE_4__/* ["default"].generateNewRandomText */ .Z.generateNewRandomText(),
      },
      tabID: request.tabId,
    });
    sendResponse({});
  }
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === 'showWhitelist') {
    emitPageBroadcast({
      fn: 'topOpenWhitelistUI',
      options: {
        addCustomFilterRandomName: _messaging_messagevalidator__WEBPACK_IMPORTED_MODULE_4__/* ["default"].generateNewRandomText */ .Z.generateNewRandomText(),
      },
      tabID: request.tabId,
    });
    sendResponse({});
  }
});

// Update browser actions and context menus when whitelisting might have
// changed. That is now when initally loading the filters and later when
// importing backups or saving filter changes.
// Update browser actions and context menus when whitelisting might have
// changed. That is now when initally loading the filters and later when
// importing backups or saving filter changes.
_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.subscriptions.onAdded.addListener(updateButtonUIAndContextMenus);
_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.subscriptions.onChanged.addListener(updateButtonUIAndContextMenus);
_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.subscriptions.onRemoved.addListener(updateButtonUIAndContextMenus);

prefs__WEBPACK_IMPORTED_MODULE_0__/* .Prefs.on */ .B.on(prefs__WEBPACK_IMPORTED_MODULE_0__/* .Prefs.shouldShowBlockElementMenu */ .B.shouldShowBlockElementMenu, () => {
  updateButtonUIAndContextMenus();
});

updateButtonUIAndContextMenus();

// eslint-disable-next-line no-restricted-globals
Object.assign(self, {
  emitPageBroadcast,
  updateButtonUIAndContextMenus,
});


/***/ }),

/***/ 1064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _alias_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1021);
/* harmony import */ var _utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2028);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, log, openTab, License,
 */






const CtaABManager = (function get() {
  let ctaData = {
    enrollment: false,
  };
  const ctaDataStorageKey = 'ctaData';
  // Load the CTA A/B data from persistent storage
  // Should only be called during startup / initialization
  browser.storage.local.get(ctaDataStorageKey).then((response) => {
    if (response[ctaDataStorageKey]) {
      ctaData = response[ctaDataStorageKey];
    }
  });

  // Check the response from a ping to see if it contains valid CTA A/B instructions.
  // If so, return an object containing data about the CTA A/B data.
  // Otherwise, return null.
  // Inputs:
  //   responseData: string response from a ping
  const dataFrom = function (responseData) {
    if (!responseData || responseData.length === 0 || responseData.trim().length === 0) {
      return null;
    }
    let pingData = {};
    try {
      pingData = JSON.parse(responseData);
      if (!pingData || (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_1__/* .isEmptyObject */ .Qr)(pingData)) {
        return null;
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Something went wrong with parsing data.');
      // eslint-disable-next-line no-console
      console.log('error', e);
      // eslint-disable-next-line no-console
      console.log('response data', responseData);
      return null;
    }
    return pingData;
  };

  return {
    get() {
      return ctaData;
    },
    isEnrolled() {
      return (ctaData.enrollment === true);
    },
    getVar() {
      return ctaData.var;
    },
    getExp() {
      return ctaData.exp;
    },
    maybeCtaAB(responseData) {
      if (!License.shouldShowPremiumCTA()) {
        return;
      }
      const pingData = dataFrom(responseData);
      if (!pingData) {
        return;
      }
      ctaData.enrollment = true;
      ctaData.var = pingData.var;
      ctaData.exp = pingData.exp;
      browser.storage.local.set({ ctaData });
      (0,_alias_icon__WEBPACK_IMPORTED_MODULE_0__/* .showIconBadgeCTA */ .QO)(true, _alias_icon__WEBPACK_IMPORTED_MODULE_0__/* .NEW_BADGE_REASONS.VPN_CTA */ .ec.VPN_CTA);
    }, // end of maybeCtaAB
    types() {
      // 'C' = A/B Test of CTAs
      return 'C';
    },
  };
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CtaABManager);


/***/ }),

/***/ 5175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3817);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subscriptionadapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(934);
/* harmony import */ var _fetch_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2379);
/* harmony import */ var _prefs_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2630);
/* harmony import */ var _utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2028);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, adblockIsPaused,
   adblockIsDomainPaused, getUserFilters, */








const DataCollectionV2 = (function getDataCollectionV2() {
  const HOUR_IN_MIN = 60;
  const TIME_LAST_PUSH_KEY = 'timeLastPush';
  const DATA_COLLECTION_ALARM_NAME = 'datacollectionalarm';
  const STORAGE_KEY = 'ab:data.collection.storage.key';
  const REPORTING_OPTIONS = {
    filterType: 'all',
    includeElementHiding: false,
  };

  // Setup memory cache
  let dataCollectionCache = {};
  dataCollectionCache.filters = {};
  dataCollectionCache.domains = {};

  const addFilterToCache = async function (details, filter) {
    const validFilterText = filter && filter.text && (typeof filter.text === 'string');
    if (validFilterText && details && details.url) {
      let domain = details.url.hostname;
      if (!domain) {
        domain = new URL(details.url).hostname;
        if (!domain) {
          return;
        }
      }
      const { text } = filter;

      if (!(text in dataCollectionCache.filters)) {
        dataCollectionCache.filters[text] = {};
        dataCollectionCache.filters[text].firstParty = {};
        dataCollectionCache.filters[text].thirdParty = {};
        dataCollectionCache.filters[text].subscriptions = [];
      }
      if (filter.thirdParty) {
        if (!dataCollectionCache.filters[text].thirdParty[domain]) {
          dataCollectionCache.filters[text].thirdParty[domain] = {};
          dataCollectionCache.filters[text].thirdParty[domain].hits = 0;
        }
        dataCollectionCache.filters[text].thirdParty[domain].hits += 1;
      } else {
        if (!dataCollectionCache.filters[text].firstParty[domain]) {
          dataCollectionCache.filters[text].firstParty[domain] = {};
          dataCollectionCache.filters[text].firstParty[domain].hits = 0;
        }
        dataCollectionCache.filters[text].firstParty[domain].hits += 1;
      }
      const subscriptions = await _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.subscriptions.getForFilter(text);
      subscriptions.forEach((sub) => {
        if (sub.enabled && sub.url && sub.downloadable) {
          const subURL = sub.url.substring(0, 256);
          if (!dataCollectionCache.filters[text].subscriptions.includes(subURL)) {
            dataCollectionCache.filters[text].subscriptions.push(subURL);
          }
        }
      });
      (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_4__/* .chromeStorageSetHelper */ .rJ)(STORAGE_KEY, dataCollectionCache);
    }
  };

  const webRequestListener = function (details) {
    if (details.url && details.type === 'main_frame' && !adblockIsPaused() && !adblockIsDomainPaused({ url: details.url, id: details.id })) {
      const domain = (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_4__/* .parseUri */ .he)(details.url).host;
      if (!dataCollectionCache.domains[domain]) {
        dataCollectionCache.domains[domain] = {};
        dataCollectionCache.domains[domain].pages = 0;
      }
      dataCollectionCache.domains[domain].pages += 1;
      (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_4__/* .chromeStorageSetHelper */ .rJ)(STORAGE_KEY, dataCollectionCache);
    }
  };

  const filterListener = function ({ request, filter }) {
    if ((0,_prefs_settings__WEBPACK_IMPORTED_MODULE_3__/* .getSettings */ .Gw)().data_collection_v2 && !adblockIsPaused()) {
      addFilterToCache(request, filter);
    } else if (!(0,_prefs_settings__WEBPACK_IMPORTED_MODULE_3__/* .getSettings */ .Gw)().data_collection_v2) {
      _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.reporting.onBlockableItem.removeListener(filterListener, REPORTING_OPTIONS);
      browser.alarms.clear(DATA_COLLECTION_ALARM_NAME);
    }
  };

  const sendToServer = async function () {
    const dataCollectionSetting = (0,_prefs_settings__WEBPACK_IMPORTED_MODULE_3__/* .getSettings */ .Gw)().data_collection_v2;
    if (!dataCollectionSetting) {
      browser.alarms.clear(DATA_COLLECTION_ALARM_NAME);
    }
    if (dataCollectionSetting && Object.keys(dataCollectionCache.filters).length > 0) {
      const subscribedSubs = [];
      const subs = await _subscriptionadapter__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getSubscriptionsMinusText */ .Z.getSubscriptionsMinusText();
      for (const subscription of Object.values(subs)) {
        if (subscription && subscription.url) {
          subscribedSubs.push(subscription.url.substring(0, 256));
        }
      }
      if (await getUserFilters().length) {
        subscribedSubs.push('customlist');
      }
      const data = {
        version: '5',
        addonName: info__WEBPACK_IMPORTED_MODULE_0__.addonName,
        addonVersion: info__WEBPACK_IMPORTED_MODULE_0__.addonVersion,
        application: info__WEBPACK_IMPORTED_MODULE_0__.application,
        applicationVersion: info__WEBPACK_IMPORTED_MODULE_0__.applicationVersion,
        platform: info__WEBPACK_IMPORTED_MODULE_0__.platform,
        platformVersion: info__WEBPACK_IMPORTED_MODULE_0__.platformVersion,
        appLocale: browser.i18n.getUILanguage(),
        filterListSubscriptions: subscribedSubs,
        domains: dataCollectionCache.domains,
        filters: dataCollectionCache.filters,
      };
      browser.storage.local.get(TIME_LAST_PUSH_KEY).then((response) => {
        let timeLastPush = 'n/a';
        if (response[TIME_LAST_PUSH_KEY]) {
          const serverTimestamp = new Date(response[TIME_LAST_PUSH_KEY]);
          // Format the timeLastPush
          const yearStr = `${serverTimestamp.getUTCFullYear()}`;
          let monthStr = `${serverTimestamp.getUTCMonth() + 1}`;
          let dateStr = `${serverTimestamp.getUTCDate()}`;
          let hourStr = `${serverTimestamp.getUTCHours()}`;
          // round the minutes up to the nearest 10
          let minStr = `${Math.floor(serverTimestamp.getUTCMinutes() / 10) * 10}`;

          if (monthStr.length === 1) {
            monthStr = `0${monthStr}`;
          }
          if (dateStr.length === 1) {
            dateStr = `0${dateStr}`;
          }
          if (hourStr.length === 1) {
            hourStr = `0${hourStr}`;
          }
          if (minStr.length === 1) {
            minStr = `0${minStr}`;
          }
          if (minStr === '60') {
            minStr = '00';
          }
          timeLastPush = `${yearStr}-${monthStr}-${dateStr} ${hourStr}:${minStr}:00`;
        }
        data.timeOfLastPush = timeLastPush;
        (0,_fetch_util__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)('https://log.getadblock.com/v2/record_log.php', data)
          .then((postResponse) => {
            if (postResponse.ok) {
              let nowTimestamp = (new Date()).toGMTString();
              try {
                if (postResponse.headers.has('date')) {
                  nowTimestamp = postResponse.headers.get('date');
                }
              } catch (e) {
                nowTimestamp = (new Date()).toGMTString();
              }
              (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_4__/* .chromeStorageSetHelper */ .rJ)(TIME_LAST_PUSH_KEY, nowTimestamp);
              // Reset memory cache
              dataCollectionCache = {};
              dataCollectionCache.filters = {};
              dataCollectionCache.domains = {};
              browser.storage.local.remove(STORAGE_KEY);
              return;
            }
            (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_4__/* .log */ .cM)('bad response from log server', postResponse);
          });
      }); // end of TIME_LAST_PUSH_KEY
    }
  };

  const loadCache = async function () {
    const response = await browser.storage.local.get(STORAGE_KEY);
    if (response[STORAGE_KEY]) {
      dataCollectionCache = response[STORAGE_KEY];
    }
  };

  const initializeAlarm = function () {
    const processAlarm = async function (alarm) {
      if (!alarm && alarm.name !== DATA_COLLECTION_ALARM_NAME) {
        return;
      }
      await _prefs_settings__WEBPACK_IMPORTED_MODULE_3__/* .settings.onload */ .Xd.onload();
      if ((0,_prefs_settings__WEBPACK_IMPORTED_MODULE_3__/* .getSettings */ .Gw)().data_collection_v2) {
        await loadCache();
        sendToServer();
      } else {
        browser.alarms.clear(DATA_COLLECTION_ALARM_NAME);
        browser.alarms.onAlarm.removeListener(processAlarm);
      }
    };
    browser.alarms.onAlarm.addListener(processAlarm);
  };

  // If enabled at startup periodic saving of memory cache &
  // sending of data to the log server
  const initialize = function () {
    initializeAlarm();
    _prefs_settings__WEBPACK_IMPORTED_MODULE_3__/* .settings.onload */ .Xd.onload().then(async () => {
      if (!(0,_prefs_settings__WEBPACK_IMPORTED_MODULE_3__/* .getSettings */ .Gw)().data_collection_v2) {
        return;
      }
      await loadCache();
      _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.reporting.onBlockableItem.addListener(filterListener, REPORTING_OPTIONS);
      browser.webRequest.onBeforeRequest.addListener(webRequestListener, {
        urls: ['http://*/*', 'https://*/*'],
        types: ['main_frame'],
      });
      browser.alarms.create(DATA_COLLECTION_ALARM_NAME, { periodInMinutes: HOUR_IN_MIN });
    });
  };
  initialize();


  const returnObj = {};
  returnObj.start = function returnObjStart() {
    dataCollectionCache.filters = {};
    dataCollectionCache.domains = {};
    (0,_prefs_settings__WEBPACK_IMPORTED_MODULE_3__/* .setSetting */ .Lt)('data_collection_v2', true, () => {
      initialize();
    });
  };
  returnObj.end = function returnObjEnd() {
    dataCollectionCache = {};
    _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.reporting.onBlockableItem.removeListener(filterListener, REPORTING_OPTIONS);
    browser.webRequest.onBeforeRequest.removeListener(webRequestListener);
    browser.storage.local.remove(TIME_LAST_PUSH_KEY);
    browser.storage.local.remove(STORAGE_KEY);
    browser.alarms.clear(DATA_COLLECTION_ALARM_NAME);
    (0,_prefs_settings__WEBPACK_IMPORTED_MODULE_3__/* .setSetting */ .Lt)('data_collection_v2', false);
  };
  returnObj.getCache = function returnObjGetCache() {
    return dataCollectionCache;
  };

  return returnObj;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataCollectionV2);


/***/ }),

/***/ 2508:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2028);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser */



// Send the file name and line number of any error message. This will help us
// to trace down any frequent errors we can't confirm ourselves.
/* eslint-disable no-restricted-globals */
self.addEventListener('error', (e) => {
  if (!e.filename && !e.lineno && !e.colno && !e.error && !e.message) {
    return;
  }
  let str = `Error: ${
    (e.filename || 'anywhere').replace(browser.runtime.getURL(''), '')
  }:${e.lineno || 'anywhere'
  }:${e.colno || 'anycol'}`;
  if (e.message) {
    str += `: ${e.message}`;
  }
  const src = e.target.src || e.target.href;
  if (src) {
    str += `src: ${src}`;
  }
  if (e.error) {
    let stack = `-${e.error.message || ''
    }-${e.error.stack || ''}`;
    stack = stack.replace(/:/gi, ';').replace(/\n/gi, '');
    // only append the stack info if there isn't any URL info in the stack trace
    if (stack.indexOf('http') === -1) {
      str += stack;
    }
    // don't send large stack traces
    if (str.length > 1024) {
      str = str.substr(0, 1023);
    }
  }
  (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_0__/* .chromeStorageSetHelper */ .rJ)('errorkey', `Date added:${new Date()} ${str}`);
  // eslint-disable-next-line no-console
  console.log(str);
});


/***/ }),

/***/ 2379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ postData)
/* harmony export */ });
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global  */

async function postData(url = '', payload = {}) {
  return fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}


/***/ }),

/***/ 4448:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict"; true&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")}, true&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return S}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});


/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default

;// CONCATENATED MODULE: ./adblock-betafish/localFilesIndex.js
function getAvailableFiles() {
return {
jquery: {
"jquery-1.10.2.min.js": 93107,
"jquery-1.11.0.min.js": 96381,
"jquery-1.11.1.min.js": 95786,
"jquery-1.11.2.min.js": 95931,
"jquery-1.11.3.min.js": 95957,
"jquery-1.12.4.min.js": 97163,
"jquery-1.3.2.min.js": 57254,
"jquery-1.4.2.min.js": 72174,
"jquery-1.7.1.min.js": 93868,
"jquery-1.7.2.min.js": 94840,
"jquery-1.8.2.min.js": 93435,
"jquery-1.8.3.min.js": 93636,
"jquery-1.9.1.min.js": 92629,
"jquery-2.1.1.min.js": 84245,
"jquery-2.1.3.min.js": 84320,
"jquery-2.1.4.min.js": 84345,
"jquery-2.2.4.min.js": 85578,
"jquery-3.1.1.min.js": 86709,
"jquery-3.2.1.min.js": 86659,
},
};
}
 
/* harmony default export */ const localFilesIndex = (getAvailableFiles);
 

// EXTERNAL MODULE: ./adblock-betafish/prefs/settings.js
var settings = __webpack_require__(2630);
// EXTERNAL MODULE: ./adblock-betafish/utilities/background/bg-functions.js
var bg_functions = __webpack_require__(2028);
;// CONCATENATED MODULE: ./adblock-betafish/localcdn.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, adblockIsPaused */

// This module is conditional imported only into a Chrome build via the
// build config file in ..build\config\chrome.mjs





const LocalCDN = (function getLocalCDN() {
  const urlsMatchPattern = ['http://*/*', 'https://*/*'];
  const hostRegex = /ajax\.googleapis\.com|ajax\.aspnetcdn\.com|ajax\.microsoft\.com|cdnjs\.cloudflare\.com|code\.jquery\.com|cdn\.jsdelivr\.net|yastatic\.net|yandex\.st|libs\.baidu\.com|lib\.sinaapp\.com|upcdn\.b0\.upaiyun\.com/;
  const pathRegex = { jquery: /jquery[/-](\d*\.\d*\.\d*)/ };
  const libraryPaths = { jquery: { prefix: 'jquery-', postfix: '.min.js' } };
  const headersToRemove = ['Cookie', 'Origin', 'Referer'];
  const redirectCountKey = 'redirectCount';
  const dataCountKey = 'redirectDataCount';
  const missedVersionsKey = 'missedVersions';
  let localFiles = {};
  let libraries = [];
  let versionArray = {};

  // Gets a stored value from chrome.storage if available, and parses it. Otherwise,
  // if the value isn't currently stored or if the parse fails, returns a default
  // value.
  // Param: keyName: the key under which the value is stored
  //        defaultValue: the value to be returned if the stored value cannot be
  //                      retrieved
  const getStoredValue = function (keyName, defaultValue) {
    return new Promise((resolve) => {
      (0,bg_functions/* chromeStorageGetHelper */.nX)(keyName).then((response) => {
        let storedValue = null;
        try {
          storedValue = JSON.parse(response);
        } catch (err) {
          storedValue = defaultValue;
        } finally {
          if (!storedValue) {
            storedValue = defaultValue;
          }
        }
        resolve(storedValue);
      });
    });
  };

  // Populates the version array based on the files available locally
  // Pre: localFiles and libraries must be populated first
  const populateVersionArray = function () {
    const libraryVersions = {};
    // go through each libarary
    for (let i = 0; i < libraries.length; i++) {
      // check for path info
      if (libraryPaths[libraries[i]]) {
        // get the filenames
        const filenames = Object.getOwnPropertyNames(localFiles[libraries[i]]);
        libraryVersions[libraries[i]] = [];
        for (let j = 0; j < filenames.length; j++) {
          // extract the version from the filesname
          let version = filenames[j].replace(libraryPaths[libraries[i]].prefix, '');
          version = version.replace(libraryPaths[libraries[i]].postfix, '');
          libraryVersions[libraries[i]].push(version);
        }
      }
    }

    return libraryVersions;
  };

  // Completes necessary set up for the LocalCDN
  // Post:  localFiles, libraries, and versionArray are populated based on
  //        available local files
  const setUp = function () {
    localFiles = localFilesIndex();
    libraries = Object.getOwnPropertyNames(localFiles);
    versionArray = populateVersionArray();
  };

  // Increments the redirect count by one.
  // The redirect count is loaded from and saved to storage.
  const incrementRedirectCount = function () {
    getStoredValue(redirectCountKey, 0).then((count) => {
      // increment
      let storedRedirectCount = count;
      storedRedirectCount += 1;

      // store updated count
      (0,bg_functions/* chromeStorageSetHelper */.rJ)(redirectCountKey, JSON.stringify(storedRedirectCount));
    });
  };

  // Adds the size of the specified file to the data count for that library.
  // The data count is loaded from and saved to storage.
  // Param: targetLibrary: the library that the file belongs to
  //        fileName: the file to be added to the data count
  const addToDataCount = function (targetLibrary, fileName) {
    getStoredValue(dataCountKey, 0).then((count) => {
      // add file size to data count
      let storedDataCount = count;
      storedDataCount += localFiles[targetLibrary][fileName];

      // store updated count
      (0,bg_functions/* chromeStorageSetHelper */.rJ)(dataCountKey, JSON.stringify(storedDataCount));
    });
  };

  // Adds the specified version of the specified library to the missed versions
  // object, if it hasn't already been added. Otherwise increments the count for
  // that version.
  // The missed versions object is loaded from and saved to storage.
  // Param: targetLibrary: the library that the missing version belongs to
  //        version: the missing version to be added
  const addMissedVersion = function (targetLibrary, version) {
    getStoredValue(missedVersionsKey, {}).then((storedMissedVersions) => {
      // add new missed version
      const missedVersions = storedMissedVersions;
      if (!missedVersions[targetLibrary]) {
        missedVersions[targetLibrary] = {};
      }
      if (missedVersions[targetLibrary][version] > 0) {
        missedVersions[targetLibrary][version] += 1;
      } else {
        missedVersions[targetLibrary][version] = 1;
      }

      // store updated missed versions
      (0,bg_functions/* chromeStorageSetHelper */.rJ)(missedVersionsKey, JSON.stringify(missedVersions));
    });
  };

  // Handles a webRequest.onBeforeRequest event.
  // Redirects any requests for locally available files from a matching host,
  // if AdBlock is not paused. Otherwise allows request to continue as normal.
  // Records any redirects, bytes of data redirected, and missing versions of
  // supported libararies.
  // Param: details: holds information about the request, including the URL.
  const libRequestHandler = function (details) {
    // respect pause
    if (!adblockIsPaused()) {
      let targetLibrary = null;
      const requestUrl = (0,bg_functions/* parseUri */.he)(details.url);

      // check if the url contains a library keyword
      for (let i = 0; i < libraries.length; i++) {
        if (requestUrl.pathname.indexOf(libraries[i]) !== -1) {
          targetLibrary = libraries[i];
        }
      }

      // check the request host
      if (targetLibrary !== null && hostRegex.test(requestUrl.host)) {
        // check the path
        const matches = pathRegex[targetLibrary].exec(requestUrl.pathname);
        if (matches) {
          const version = matches[1];

          // check if we have the version locally
          if (versionArray[targetLibrary].indexOf(version) !== -1) {
            const libraryPrefix = libraryPaths[targetLibrary].prefix;
            const libraryPostfix = libraryPaths[targetLibrary].postfix;
            const fileName = libraryPrefix + version + libraryPostfix;
            const localPath = `localLib/${targetLibrary}/${fileName}`;
            incrementRedirectCount();
            addToDataCount(targetLibrary, fileName);
            return { redirectUrl: browser.runtime.getURL(localPath) };
          }
          addMissedVersion(targetLibrary, version);
        }
      }
    }

    return { cancel: false };
  };

  // Handles a webrequest.onBeforeSendHeaders event.
  // Strips the cookie, origin, and referer headers (if present) from any requests for
  // a supported libarary from a matching host, if AdBlock is not paused. Otherwise
  // allows request to continue as normal.
  // Param: details: holds information about the request, including the URL and request
  //                 headers
  const stripMetadataHandler = function (details) {
    // respect pause
    if (!adblockIsPaused()) {
      const requestUrl = (0,bg_functions/* parseUri */.he)(details.url);
      let match = false;

      // check if the url contains a library keyword
      for (let k = 0; k < libraries.length; k++) {
        if (requestUrl.pathname.indexOf(libraries[k]) !== -1) {
          match = true;
        }
      }

      // check for a matching host
      if (match && hostRegex.test(requestUrl.host)) {
        // strip the headers to remove, if present
        for (let i = 0; i < details.requestHeaders.length; i++) {
          const aHeader = details.requestHeaders[i].name;
          if (headersToRemove.includes(aHeader)) {
            details.requestHeaders.splice(i -= 1, 1);
          }
        }
      }
    }

    return { requestHeaders: details.requestHeaders };
  };

  // Sets redirect count, data count, and missed versions back to default
  // (0 for redirect count and data count, and an empty object for missed
  // versions)
  const resetCollectedData = function () {
    (0,bg_functions/* chromeStorageSetHelper */.rJ)(redirectCountKey, '0');
    (0,bg_functions/* chromeStorageSetHelper */.rJ)(dataCountKey, '0');
    (0,bg_functions/* chromeStorageSetHelper */.rJ)(missedVersionsKey, '{}');
  };

  return {
    migrateStoredData() {
      return Promise.all([(0,bg_functions/* migrateData */.ww)(redirectCountKey),
        (0,bg_functions/* migrateData */.ww)(dataCountKey),
        (0,bg_functions/* migrateData */.ww)(missedVersionsKey)]);
    },
    setUp,
    // Starts the LocalCDN listeners
    start() {
      setUp();
      browser.webRequest.onBeforeRequest.addListener(libRequestHandler, { urls: urlsMatchPattern }, ['blocking']);
      browser.webRequest.onBeforeSendHeaders.addListener(stripMetadataHandler, { urls: urlsMatchPattern }, ['blocking', 'requestHeaders']);
    },
    // Stops the LocalCDN listeners and reset data
    end() {
      browser.webRequest.onBeforeRequest.removeListener(libRequestHandler);
      browser.webRequest.onBeforeSendHeaders.removeListener(stripMetadataHandler);
      resetCollectedData();
    },
    // Gets the redirect count as a number of redirects
    getRedirectCount() {
      return getStoredValue(redirectCountKey, 0);
    },
    // Gets the data count as a number of bytes
    getDataCount() {
      return getStoredValue(dataCountKey, 0);
    },
    // Gets the missed versions object, which includes a count of how many
    // times the missed version has been requested
    getMissedVersions() {
      return getStoredValue(missedVersionsKey, undefined);
    },
  };
}());

/* harmony default export */ const localcdn = ((/* unused pure expression or super */ null && (LocalCDN)));

// eslint-disable-next-line no-restricted-globals
Object.assign(self, {
  LocalCDN,
});

settings/* settings.onload */.Xd.onload().then(() => {
  if ((0,settings/* getSettings */.Gw)().local_cdn) {
    LocalCDN.migrateStoredData().then(() => {
      LocalCDN.start();
    });
  }
});


/***/ }),

/***/ 1120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3817);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prefs_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2630);
/* harmony import */ var _utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2028);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, ext, adblockIsPaused, adblockIsDomainPaused, settings,
   getUserFilters, Utils, replacedCounts, setSetting,  */





const LocalDataCollection = (function getLocalDataCollection() {
  const easyPrivacyURL = 'https://easylist-downloads.adblockplus.org/easyprivacy.txt';
  const FIFTEEN_MINS = 15;
  const EXT_STATS_KEY = 'ext_stats_key';
  const STATS_ALARM_NAME = 'statsalarm';
  const STATS_STORAGE_KEY = 'ab:stats.storage.key';
  const REPORTING_OPTIONS = {
    filterType: 'blocking',
    includeElementHiding: false,
  };

  // Setup memory cache
  let dataCollectionCache = {};
  dataCollectionCache.domains = {};

  const initializeDomainIfNeeded = function (domain) {
    if (!(domain in dataCollectionCache.domains)) {
      dataCollectionCache.domains[domain] = {};
      dataCollectionCache.domains[domain].ads = 0;
      dataCollectionCache.domains[domain].trackers = 0;
      dataCollectionCache.domains[domain].adsReplaced = 0;
    }
  };

  const addFilterToCache = function (details, filter) {
    const validFilterText = filter && filter.text && (typeof filter.text === 'string');
    if (details.tabId > 0 && validFilterText && validFilterText && details && details.url) {
      browser.tabs.get(details.tabId).then(async (tab) => {
        if (tab.incognito) {
          return;
        }
        const theURL = new URL(details.url);
        const domain = theURL.hostname;
        initializeDomainIfNeeded(domain);
        const { text } = filter;
        let isAd = true;
        const subscriptions = await _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0__.subscriptions.getForFilter(text);
        subscriptions.forEach((sub) => {
          if (!sub.disabled && sub.url && sub.url === easyPrivacyURL) {
            isAd = false;
          }
        });
        if (isAd) {
          dataCollectionCache.domains[domain].ads += 1;
        } else {
          dataCollectionCache.domains[domain].trackers += 1;
        }
        (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_2__/* .chromeStorageSetHelper */ .rJ)(STATS_STORAGE_KEY, dataCollectionCache);
      });
    }
  };

  const filterListener = function ({ request, filter }) {
    if ((0,_prefs_settings__WEBPACK_IMPORTED_MODULE_1__/* .getSettings */ .Gw)().local_data_collection && !adblockIsPaused()) {
      addFilterToCache(request, filter);
    } else if (!(0,_prefs_settings__WEBPACK_IMPORTED_MODULE_1__/* .getSettings */ .Gw)().local_data_collection) {
      LocalDataCollection.end();
    }
  };

  const adReplacedListener = function (tabId, url) {
    if ((0,_prefs_settings__WEBPACK_IMPORTED_MODULE_1__/* .getSettings */ .Gw)().local_data_collection && !adblockIsPaused()) {
      const domain = new URL(url).hostname;
      initializeDomainIfNeeded(domain);
      dataCollectionCache.domains[domain].adsReplaced += 1;
      (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_2__/* .chromeStorageSetHelper */ .rJ)(STATS_STORAGE_KEY, dataCollectionCache);
    } else if (!(0,_prefs_settings__WEBPACK_IMPORTED_MODULE_1__/* .getSettings */ .Gw)().local_data_collection) {
      LocalDataCollection.end();
    }
  };


  const clearCache = function () {
    dataCollectionCache = {};
    dataCollectionCache.domains = {};
    browser.storage.local.remove(STATS_STORAGE_KEY);
  };

  const saveCacheData = function () {
    return new Promise(async (resolve) => {
      if ((0,_prefs_settings__WEBPACK_IMPORTED_MODULE_1__/* .getSettings */ .Gw)().local_data_collection && !(0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_2__/* .isEmptyObject */ .Qr)(dataCollectionCache.domains)) {
        const hourSnapShot = JSON.parse(JSON.stringify({
          v: '1',
          doms: dataCollectionCache.domains,
        }));
        browser.storage.local.get(EXT_STATS_KEY).then((hourlyResponse) => {
          const savedData = hourlyResponse[EXT_STATS_KEY] || { };
          savedData[Date.now().toString()] = hourSnapShot;
          (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_2__/* .chromeStorageSetHelper */ .rJ)(EXT_STATS_KEY, savedData, resolve);
          clearCache();
        });
      } else {
        if (!(0,_prefs_settings__WEBPACK_IMPORTED_MODULE_1__/* .getSettings */ .Gw)().local_data_collection) {
          browser.alarms.clear(STATS_ALARM_NAME);
        }
        resolve();
      }
    });
  };

  const loadCache = async function () {
    const response = await browser.storage.local.get(STATS_STORAGE_KEY);
    if (response[STATS_STORAGE_KEY]) {
      dataCollectionCache = response[STATS_STORAGE_KEY];
    }
  };

  const initialize = function () {
    browser.alarms.onAlarm.addListener(async (alarm) => {
      // Not our alarm, nothing to do
      if (!alarm && alarm.name !== STATS_ALARM_NAME) {
        return;
      }
      await settings.onload();
      // If we're collecting data and the alarm has fired, process the memory cache
      if ((0,_prefs_settings__WEBPACK_IMPORTED_MODULE_1__/* .getSettings */ .Gw)().local_data_collection) {
        await loadCache();
        saveCacheData();
      } else {
        browser.alarms.clear(STATS_ALARM_NAME);
      }
    });
    // If enabled at startup, enable periodic processing of memory cache
    settings.onload().then(async () => {
      if (!(0,_prefs_settings__WEBPACK_IMPORTED_MODULE_1__/* .getSettings */ .Gw)().local_data_collection) {
        return;
      }
      await loadCache();
      browser.alarms.create(STATS_ALARM_NAME, { periodInMinutes: FIFTEEN_MINS });
      _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0__.reporting.onBlockableItem.addListener(filterListener, REPORTING_OPTIONS);
      replacedCounts.adReplacedNotifier.on('adReplaced', adReplacedListener);
    });
  };
  initialize();

  const returnObj = {};
  returnObj.EXT_STATS_KEY = EXT_STATS_KEY;

  returnObj.start = function returnObjStart() {
    return new Promise((resolve) => {
      dataCollectionCache.domains = {};
      setSetting('local_data_collection', true, () => {
        initialize();
        resolve();
      });
    });
  };

  returnObj.end = function returnObjEnd() {
    return new Promise((resolve) => {
      browser.alarms.clear(STATS_ALARM_NAME);
      clearCache();
      _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0__.reporting.onBlockableItem.removeListener(filterListener, REPORTING_OPTIONS);
      replacedCounts.adReplacedNotifier.off('adReplaced', adReplacedListener);
      setSetting('local_data_collection', false, resolve);
    });
  };
  returnObj.clearCache = clearCache;
  returnObj.getCache = function returnObjGetCache() {
    return dataCollectionCache;
  };
  returnObj.saveCacheData = saveCacheData;
  returnObj.easyPrivacyURL = easyPrivacyURL;
  returnObj.exportRawStats = async function returnObjFilterStats() {
    const hourlyResponse = await browser.storage.local.get(EXT_STATS_KEY);
    return Promise.resolve(hourlyResponse[EXT_STATS_KEY] || { });
  };
  returnObj.getRawStatsSize = async function returnObjFilterStatsSize() {
    const rawStats = await LocalDataCollection.exportRawStats();
    return Promise.resolve((JSON.stringify(rawStats).length));
  };
  // Note: the following function is used for testing purposes
  // Import filter list statistics which will be converted to the format needed / used
  // by the 'stats' tab.
  // Inputs: filterStatsArray: array of stringified JSON filter list statistics data
  //         from the DataCollection V2 messages.
  // Returns: a Promise, resolved when complete
  returnObj.importFilterStats = function returnObjFilterStats(filterStatsArray) {
    return new Promise((resolve) => {
      let parsedfilterStats = {};
      try {
        parsedfilterStats = JSON.parse(filterStatsArray);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        resolve(`error : ${e.toString()}`);
        return;
      }
      browser.storage.local.get(EXT_STATS_KEY).then((hourlyResponse) => {
        const savedData = hourlyResponse[EXT_STATS_KEY] || { };
        for (let inx = 0; inx < parsedfilterStats.length; inx++) {
          const dupDataCache = parsedfilterStats[inx];
          // only process new data
          // don't overwrite existing data
          if (!savedData[Date.parse(dupDataCache.timeOfLastPush)]) {
            const hourSnapShot = {};
            const initializeDomainDataObject = function (domain) {
              hourSnapShot[domain] = {};
              hourSnapShot[domain].ads = 0;
              hourSnapShot[domain].trackers = 0;
              hourSnapShot[domain].adsReplaced = 0;
              if (dupDataCache.domains[domain] && typeof dupDataCache.domains[domain].adsReplaced === 'number') {
                hourSnapShot[domain].adsReplaced = dupDataCache.domains[domain].adsReplaced;
              }
            };
            for (const domain in dupDataCache.domains) {
              initializeDomainDataObject(domain);
            }
            const processDomainByFilterType = function (filter, domains, filterRequestType) {
              for (const domain in domains) {
                if (!hourSnapShot[domain]) {
                  initializeDomainDataObject(domain);
                }
                if (dupDataCache.filters[filter].subscriptions
                    && dupDataCache.filters[filter].subscriptions.length
                    && dupDataCache.filters[filter].subscriptions.includes(easyPrivacyURL)) {
                  hourSnapShot[domain].trackers
                    += dupDataCache.filters[filter][filterRequestType][domain].hits;
                } else {
                  hourSnapShot[domain].ads
                    += dupDataCache.filters[filter][filterRequestType][domain].hits;
                }
              }
            };
            for (const filter in dupDataCache.filters) {
              processDomainByFilterType(filter, dupDataCache.filters[filter].firstParty, 'firstParty');
              processDomainByFilterType(filter, dupDataCache.filters[filter].thirdParty, 'thirdParty');
            }
            savedData[Date.parse(dupDataCache.timeOfLastPush)] = JSON.parse(JSON.stringify({
              v: '1',
              doms: hourSnapShot,
            }));
          }
        }// end for loop
        (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_2__/* .chromeStorageSetHelper */ .rJ)(EXT_STATS_KEY, savedData);
        resolve(' success! ');
      });
    });
  };
  return returnObj;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalDataCollection);


/***/ }),

/***/ 7641:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./vendor/webext-sdk/dist/ewe-api.js
var ewe_api = __webpack_require__(3817);
// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/messaging/types.js
var types = __webpack_require__(3242);
// EXTERNAL MODULE: ./adblock-betafish/prefs/settings.js
var settings = __webpack_require__(2630);
// EXTERNAL MODULE: ./adblock-betafish/subscriptionadapter.js + 1 modules
var subscriptionadapter = __webpack_require__(934);
// EXTERNAL MODULE: ./adblock-betafish/datacollection.v2.js
var datacollection_v2 = __webpack_require__(5175);
// EXTERNAL MODULE: ./adblock-betafish/servermessages.js
var servermessages = __webpack_require__(1546);
// EXTERNAL MODULE: ./adblock-betafish/localdatacollection.js
var localdatacollection = __webpack_require__(1120);
;// CONCATENATED MODULE: ./adblock-betafish/excludefilter.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, parseFilter, chromeStorageSetHelper */

// Module for removing individual filters from filter lists
// An 'advance' feature, used on the Customize tab, titled "disabled filters"



const ExcludeFilter = (function excludeFilter() {
  const excludeFiltersKey = 'exclude_filters';
  // Removes the valid filters from any / all filter lists and
  // saves the valid entries
  // Note:  any invalid filters are ignored
  // Inputs: filters:string the new filters.
  const setExcludeFilters = async function (filtersToExclude) {
    const response = await browser.storage.local.get(excludeFiltersKey);
    const currentExcludeFilters = response[excludeFiltersKey];
    let promises = [];
    if (currentExcludeFilters) {
      const currentExcludeArr = currentExcludeFilters.split('\n');
      for (let i = 0; i < currentExcludeArr.length; i++) {
        const filter = currentExcludeArr[i];
        if (filter.length > 0) {
          const result = ewe_api.filters.validate(filter);
          if (!result) {
            promises.push(ewe_api.filters.enable([filter]));
          }
        }
      }
    }
    await Promise.all(promises);
    promises = [];
    const excludeFilters = filtersToExclude.trim();
    const excludeFiltersArray = excludeFilters.split('\n');
    const validExcludeFiltersArray = [];
    for (let i = 0; i < excludeFiltersArray.length; i++) {
      let filter = excludeFiltersArray[i];
      filter = filter.trim();
      if (filter.length > 0) {
        const result = ewe_api.filters.validate(filter);
        if (!result) {
          validExcludeFiltersArray.push(filter);
          promises.push(ewe_api.filters.disable([filter]));
        }
      }
    }
    await Promise.all(promises);
    if (validExcludeFiltersArray.length) {
      chromeStorageSetHelper(excludeFiltersKey, validExcludeFiltersArray.join('\n'));
    } else {
      browser.storage.local.remove(excludeFiltersKey);
    }
  };

  function excludeFilterChangeListener() {
    browser.storage.local.get(excludeFiltersKey).then((response) => {
      if (response[excludeFiltersKey]) {
        setExcludeFilters(response[excludeFiltersKey]);
      }
    });
  }

  // At startup, add a listener to so that the exclude filters
  // can be removed if the filter lists are updated
  ewe_api.subscriptions.onAdded.addListener(excludeFilterChangeListener);
  ewe_api.subscriptions.onChanged.addListener(excludeFilterChangeListener);
  ewe_api.subscriptions.onRemoved.addListener(excludeFilterChangeListener);

  return {
    setExcludeFilters,
  };
}());
/* harmony default export */ const excludefilter = (ExcludeFilter);

// EXTERNAL MODULE: ./adblock-betafish/messaging/messagevalidator.js
var messagevalidator = __webpack_require__(9031);
// EXTERNAL MODULE: ./adblock-betafish/alias/icon.js
var icon = __webpack_require__(1021);
// EXTERNAL MODULE: ./adblock-betafish/utilities/background/bg-functions.js
var bg_functions = __webpack_require__(2028);
;// CONCATENATED MODULE: ./adblock-betafish/messaging/message-responder.js
/* For ESLint: List any global identifiers used in this file below */
/* global browser, isTrustedSender,  isTrustedTarget, tryToUnwhitelist, getUserFilters,
   createDomainAllowlistFilter, addCustomFilter, countCache, checkUpdateProgress,
   adblockIsPaused, pageIsWhitelisted, adblockIsDomainPaused, getCurrentTabInfo,
   openTab, updateFilterLists, isTrustedSenderDomain, updateButtonUIAndContextMenus,
   getDebugInfo, addYTChannelListeners, removeYTChannelListeners, openYTManagedSubPage,
   addTwitchAllowlistListeners, removeTwitchAllowlistListeners, abpPrefPropertyNames,
   pausedFilterText1, pausedFilterText2, updateCustomFilterCountMap, LocalCDN
*/















const processMessageResponse = (sendResponse, responseData) => {
  sendResponse({});
  return Promise.resolve(responseData);
};

// eslint-disable-next-line no-restricted-globals
Object.assign(self, {
  processMessageResponse,
});

const uiPorts = new Map();
const messageTypes = new Map([
  ['settings', 'settings.respond'],
]);


function sendMessage(type, action, ...args) {
  if (uiPorts.size === 0) {
    return;
  }

  for (const [uiPort, filters] of uiPorts) {
    const actions = filters.get(type);
    if (actions && actions.indexOf(action) !== -1) {
      uiPort.postMessage({
        type: messageTypes.get(type),
        action,
        args,
      });
    }
  }
}

function getListener(type, action) {
  return (...args) => {
    sendMessage(type, action, ...args);
  };
}

function listen(type, filters, newFilter) {
  switch (type) {
    case 'settings':
      filters.set('settings', newFilter);
      break;
    default:
        // do nothing
  }
}

function onConnect(uiPort) {
  if (!isTrustedSender(uiPort.sender)) {
    return;
  }

  if (uiPort.name !== 'settings') {
    return;
  }

  const filters = new Map();
  uiPorts.set(uiPort, filters);

  uiPort.onDisconnect.addListener(() => {
    uiPorts.delete(uiPort);
  });

  uiPort.onMessage.addListener((message) => {
    const [type, action] = message.type.split('.', 2);
    if (action === 'listen') {
      listen(type, filters, message.filter, message,
        uiPort.sender && uiPort.sender.tab && uiPort.sender.tab.id);
    }
  });
}
browser.runtime.onConnect.addListener(onConnect);

/**
 * Process messages and events related to the 'Settings' object
 *
 */
settings/* settings.onload */.Xd.onload().then(() => {
  /* eslint-disable consistent-return */
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (!isTrustedSender(sender)) {
      return;
    }
    const { command } = message;
    switch (command) {
      case 'setSetting':
        (0,settings/* setSetting */.Lt)(message.name, message.isEnabled);
        sendResponse({});
        break;
      case 'isValidTheme':
        return processMessageResponse(sendResponse, (0,settings/* isValidTheme */.uR)(message.name));
      case 'getABPPrefPropertyNames':
        return processMessageResponse(sendResponse, abpPrefPropertyNames);
      default:
    }
  });
  settings/* settingsNotifier.on */.Pg.on('settings.changed', getListener('settings', 'changed'));
});

/**
 * Process messages from Popup menu and other UI components
 *
 */
/* eslint-disable consistent-return */
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!isTrustedSender(sender)) {
    return;
  }
  const { command } = message;
  switch (command) {
    case 'pageIsWhitelisted':
      sendResponse(pageIsWhitelisted(JSON.parse(message.page)));
      break;
    case 'adblockIsPaused': {
      const isPaused = adblockIsPaused(message.newValue);
      sendResponse(isPaused);
      return Promise.resolve(isPaused);
    }
    case 'adblockIsDomainPaused': {
      const isDomainPaused = adblockIsDomainPaused(message.activeTab, message.newValue);
      sendResponse(isDomainPaused);
      return Promise.resolve(isDomainPaused);
    }
    case 'getPausedFilterText':
      return processMessageResponse(sendResponse, { pausedFilterText1, pausedFilterText2 });
    case 'getCurrentTabInfo':
      sendResponse({});
      return getCurrentTabInfo(false, message.tabId).then(results => results);
    case 'updateCustomFilterCountMap':
      updateCustomFilterCountMap(message.countMap);
      sendResponse({});
      return;
    case 'updateFilterLists':
      updateFilterLists();
      sendResponse({});
      return;
    case 'checkUpdateProgress':
      sendResponse(checkUpdateProgress());
      return;
    case 'getCustomFilterCount':
      sendResponse({ response: countCache.getCustomFilterCount(message.host) });
      return;
    case 'subscriptions.has':
      return processMessageResponse(sendResponse, ewe_api.subscriptions.has(message.url));
    case 'createDomainAllowlistFilter':
      sendResponse({});
      return createDomainAllowlistFilter(message.url, message.origin).then(results => results);
    case 'getUserFilters':
      sendResponse({ response: getUserFilters() });
      return;
    case 'tryToUnwhitelist':
      sendResponse({});
      return tryToUnwhitelist(message.url, message.id).then(results => results);
    case 'getDebugInfo':
      sendResponse({});
      return getDebugInfo();
    case 'showIconBadgeCTA':
      sendResponse({});
      (0,icon/* showIconBadgeCTA */.QO)(message.value);
      return;
    case 'getNewBadgeTextReason':
      sendResponse({ reason: (0,icon/* getNewBadgeTextReason */.vo)() });
      return;
    case 'updateButtonUIAndContextMenus':
      updateButtonUIAndContextMenus();
      sendResponse({});
      break;
    default:
  }
});

async function addCustomFilterMessageValidation(message) {
  if (await messagevalidator/* default.validateMessage */.Z.validateMessage(message)) {
    return addCustomFilter(message.filterTextToAdd, message.origin).then(results => results);
  }
}

/**
 * Process the 'addCustomFilter' message the wizards, which requires verifing the
 * `addCustomFilterRandomName` property on the message matches what is current set on the global
 * name space
 *
 */
/* eslint-disable consistent-return */
browser.runtime.onMessage.addListener((message) => {
  if (
    message.command === 'addCustomFilter'
    && message.filterTextToAdd
  ) {
    return addCustomFilterMessageValidation(message);
  }
});

/**
 * Process messages that are sent from a content script
 *
 */
//
/* eslint-disable consistent-return */
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (isTrustedSenderDomain(sender) || isTrustedSender(sender)) {
    const { command } = message;
    switch (command) {
      case 'subscribe':
        subscriptionadapter/* default.subscribe */.Z.subscribe({ id: message.id });
        sendResponse({});
        break;
      case 'unsubscribe':
        subscriptionadapter/* default.unsubscribe */.Z.unsubscribe({ adblockId: message.adblockId });
        sendResponse({});
        break;
      case 'getIdFromURL':
        sendResponse({});
        return processMessageResponse(sendResponse,
          subscriptionadapter/* default.getIdFromURL */.Z.getIdFromURL(message.url));
      case 'isLanguageSpecific':
        sendResponse({});
        return processMessageResponse(sendResponse,
          subscriptionadapter/* default.isLanguageSpecific */.Z.isLanguageSpecific(message.id));
      case 'getSubscriptionsMinusText':
        sendResponse({});
        return processMessageResponse(sendResponse,
          subscriptionadapter/* default.getSubscriptionsMinusText */.Z.getSubscriptionsMinusText());
      case 'getAllSubscriptionsMinusText':
        sendResponse({});
        return processMessageResponse(sendResponse,
          subscriptionadapter/* default.getAllSubscriptionsMinusText */.Z.getAllSubscriptionsMinusText());
      case 'recordGeneralMessage':
        servermessages/* default.recordGeneralMessage */.Z.recordGeneralMessage(message.msg, undefined, message.additionalParams);
        sendResponse({});
        break;
      default:
    }
  }
});

/**
 * Process messages that are sent from a content script & trusted senders
 *
 */
//
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const { command } = message;
  switch (command) {
    case 'getSettings':
      sendResponse((0,settings/* getSettings */.Gw)());
      break;
    case 'openTab':
      openTab(message.urlToOpen);
      sendResponse({});
      break;
    default:
  }
});

/**
 * Process messages for the LocalCDN
 *
 */
/* eslint-disable consistent-return */
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!isTrustedSender(sender)) {
    return;
  }
  const { command } = message;
  switch (command) {
    case 'LocalCDN.start':
      LocalCDN.start();
      sendResponse({});
      break;
    case 'LocalCDN.end':
      LocalCDN.end();
      sendResponse({});
      break;
    case 'LocalCDN.isAvailable':
      return processMessageResponse(sendResponse, (typeof LocalCDN === 'object'));
    default:
  }
});

/**
 * Process messages for the DataCollectionV2
 *
 */
/* eslint-disable consistent-return */
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!isTrustedSender(sender)) {
    return;
  }
  const { command } = message;
  switch (command) {
    case 'DataCollectionV2.start':
      return processMessageResponse(sendResponse, datacollection_v2/* default.start */.Z.start());
    case 'DataCollectionV2.end':
      return processMessageResponse(sendResponse, datacollection_v2/* default.end */.Z.end());
    default:
  }
});

/**
 * Process messages for the  Exclude Filters, Local Data Collection,
 * Server Messages, YT Channel & Twitch Channel Listeners
 *
 */
/* eslint-disable consistent-return */
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!isTrustedSender(sender)) {
    return;
  }
  const { command } = message;
  switch (command) {
    case 'addYTChannelListeners':
      addYTChannelListeners();
      sendResponse({});
      break;
    case 'removeYTChannelListeners':
      removeYTChannelListeners();
      sendResponse({});
      break;
    case 'openYTManagedSubPage':
      openYTManagedSubPage();
      sendResponse({});
      break;
    case 'addTwitchAllowlistListeners':
      addTwitchAllowlistListeners();
      sendResponse({});
      break;
    case 'removeTwitchAllowlistListeners':
      removeTwitchAllowlistListeners();
      sendResponse({});
      break;
    case 'recordAnonymousErrorMessage':
      servermessages/* default.recordAnonymousErrorMessage */.Z.recordAnonymousErrorMessage(message.msg, undefined, message.additionalParams);
      sendResponse({});
      break;
    case 'LocalDataCollection.clearCache':
      localdatacollection/* default.clearCache */.Z.clearCache();
      sendResponse({});
      break;
    case 'LocalDataCollection.end':
      return processMessageResponse(sendResponse, localdatacollection/* default.end */.Z.end());
    case 'LocalDataCollection.start':
      return processMessageResponse(sendResponse, localdatacollection/* default.start */.Z.start());
    case 'LocalDataCollection.saveCacheData':
      sendResponse({});
      return localdatacollection/* default.saveCacheData */.Z.saveCacheData();
    case 'LocalDataCollection.easyPrivacyURL':
      return processMessageResponse(sendResponse, localdatacollection/* default.easyPrivacyURL */.Z.easyPrivacyURL);
    case 'LocalDataCollection.EXT_STATS_KEY':
      return processMessageResponse(sendResponse, localdatacollection/* default.EXT_STATS_KEY */.Z.EXT_STATS_KEY);
    case 'ExcludeFilter.setExcludeFilters':
      excludefilter.setExcludeFilters(message.filters);
      sendResponse({});
      break;
    default:
  }
});

function parseFilter(text) {
  const filterText = text.trim() || null;
  let error = null;

  if (filterText) {
    if (filterText[0] === '[') {
      error = { type: 'unexpected_filter_list_header' };
    } else {
      const filterError = ewe_api.filters.validate(filterText);
      if (filterError) {
        error = (0,types/* toPlainFilterError */.U_)(filterError);
      }
    }
  }

  return [filterText, error];
}

function filtersValidate(text) {
  const filters = [];
  const errors = [];

  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const [filter, error] = parseFilter(lines[i]);

    if (error) {
      error.filter = filter;
      // We don't treat filter headers like invalid filters,
      // instead we simply ignore them and don't show any errors
      // in order to allow pasting complete filter lists.
      // If there are no filters, we do treat it as an invalid filter
      // to inform users about it and to give them a chance to edit it.
      if (error.type === 'unexpected_filter_list_header'
          && lines.length > 1) {
        /* eslint-disable no-continue */
        continue;
      }
      errors.push(error);
    } else if (filter) {
      filters.push(filter);
    }
  }

  return [filters, errors];
}

async function filtersAdd(text, origin) {
  const filters = [];
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const [filter, error] = parseFilter(lines[i]);

    if (error) {
      return error;
    }

    if (filter) {
      filters.push(filter);
    }
  }
  try {
    await ewe_api.filters.add(filters, (0,bg_functions/* createFilterMetaData */.Yv)(origin));
  } catch (error) {
    return error;
  }
}


/* eslint-disable consistent-return */
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!isTrustedSender(sender)) {
    return;
  }
  const { command } = message;
  switch (command) {
    case 'filters.validate': {
      const [, validationErrors] = filtersValidate(message.text);
      return processMessageResponse(sendResponse, validationErrors);
    }
    case 'filters.add': {
      sendResponse({});
      return filtersAdd(message.text, message.origin);
    }
    case 'filters.remove':
      ewe_api.filters.remove(message.filters);
      sendResponse({});
      break;
    default:
  }
});


/***/ }),

/***/ 9031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_adblockplusui_adblockpluschrome_lib_storage_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(735);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser */



const sessionStorageKey = 'ab:CustomFilterRandomName';
const sessionKey = 'ab:randomtext';

const sessionStorage = new _vendor_adblockplusui_adblockpluschrome_lib_storage_session__WEBPACK_IMPORTED_MODULE_0__/* .SessionStorage */ .x(sessionStorageKey);

/* eslint-disable-next-line no-unused-vars */
class MessageValidator {
  generateNewRandomText = () => {
    this.randomtext = `ab-${Math.random().toString(36).substring(2)}`;
    sessionStorage.set(sessionKey, this.randomtext);
    return this.randomtext;
  };

  validateMessage = async (message) => {
    const data = await sessionStorage.get(sessionKey);
    this.randomtext = data;
    return Promise.resolve(message && (message.addCustomFilterRandomName === this.randomtext));
  };
}
const messageValidator = new MessageValidator();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (messageValidator);


/***/ }),

/***/ 6130:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1177);
/* harmony import */ var _picreplacement_channels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1053);
/* harmony import */ var _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8409);
/* harmony import */ var _prefs_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2630);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3817);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_4__);
/* For ESLint: List any global identifiers used in this file below */
/* global browser, isTrustedSender, openTab, isTrustedSenderDomain,
   processMessageResponse */







/**
 * Process events related to the Premium object - License, Channels, and Sync-Service
 *
 */
const uiPorts = new Map();
const messageTypes = new Map([
  ['license', 'license.respond'],
  ['channels', 'channels.respond'],
  ['sync', 'sync.respond'],
]);


function sendMessage(type, action, ...args) {
  if (uiPorts.size === 0) {
    return;
  }
  for (const [uiPort, filters] of uiPorts) {
    const actions = filters.get(type);
    if (actions && actions.indexOf(action) !== -1) {
      uiPort.postMessage({
        type: messageTypes.get(type),
        action,
        args,
      });
    }
  }
}

function getListener(type, action) {
  return (...args) => {
    sendMessage(type, action, ...args);
  };
}

function listen(type, filters, newFilter) {
  switch (type) {
    case 'license':
      filters.set('license', newFilter);
      break;
    case 'channels':
      filters.set('channels', newFilter);
      break;
    case 'sync':
      filters.set('sync', newFilter);
      break;
    default:
        // do nothing
  }
}

function onConnect(uiPort) {
  if (!isTrustedSender(uiPort.sender)) {
    return;
  }

  if (uiPort.name !== 'premium') {
    return;
  }

  const filters = new Map();
  uiPorts.set(uiPort, filters);

  uiPort.onDisconnect.addListener(() => {
    uiPorts.delete(uiPort);
  });

  uiPort.onMessage.addListener((message) => {
    const [type, action] = message.type.split('.', 2);
    if (action === 'listen') {
      listen(type, filters, message.filter, message,
        uiPort.sender && uiPort.sender.tab && uiPort.sender.tab.id);
    }
  });
}
browser.runtime.onConnect.addListener(onConnect);

/**
 * Process complex messages related to the 'License' object
 *
 */
_picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.ready */ .Cz.ready().then(() => {
  browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'load_my_adblock') {
      if (sender.url && sender.url.startsWith('http') && _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.isActiveLicense */ .Cz.isActiveLicense() && (0,_prefs_settings__WEBPACK_IMPORTED_MODULE_3__/* .getSettings */ .Gw)().picreplacement) {
        const logError = function (e) {
          // eslint-disable-next-line no-console
          console.error(e);
        };
        browser.tabs.executeScript(sender.tab.id, { file: 'adblock-picreplacement.js', frameId: sender.frameId, runAt: 'document_start' }).catch(logError);
      }
      if (
        _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.isActiveLicense */ .Cz.isActiveLicense()
          && sender.url
          && sender.url.startsWith('http')
          && _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_4__.subscriptions.has('https://cdn.adblockcdn.com/filters/distraction-control-push.txt')
          && _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_4__.filters.getAllowingFilters(sender.tab.id).length === 0
      ) {
        const logError = function (e) {
          // eslint-disable-next-line no-console
          console.error(e);
        };
        browser.tabs.executeScript(sender.tab.id, { file: 'adblock-picreplacement-push-notification-wrapper-cs.js', runAt: 'document_start' }).catch(logError);
      }
      sendResponse({});
    }
  });

  /**
   * Process general messages related to the 'License' object
   *
   */
  /* eslint-disable consistent-return */
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (!isTrustedSender(sender)) {
      return;
    }
    const { command } = message;
    switch (command) {
      case 'setBlacklistCTAStatus':
        _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.shouldShowBlacklistCTA */ .Cz.shouldShowBlacklistCTA(message.isEnabled);
        sendResponse({});
        break;
      case 'setWhitelistCTAStatus':
        _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.shouldShowWhitelistCTA */ .Cz.shouldShowWhitelistCTA(message.isEnabled);
        sendResponse({});
        break;
      case 'cleanUpSevenDayAlarm':
        _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.cleanUpSevenDayAlarm */ .Cz.cleanUpSevenDayAlarm();
        sendResponse({});
        break;
      case 'updatePeriodically':
        _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.updatePeriodically */ .Cz.updatePeriodically();
        sendResponse({});
        break;
      case 'isActiveLicense':
        return processMessageResponse(sendResponse, _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.isActiveLicense */ .Cz.isActiveLicense());
      case 'shouldShowMyAdBlockEnrollment':
        return processMessageResponse(sendResponse, _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.shouldShowMyAdBlockEnrollment */ .Cz.shouldShowMyAdBlockEnrollment());
      default:
    }
  });

  /* eslint-disable consistent-return */
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const { command } = message;
    switch (command) {
      case 'openPremiumPayURL':
        openTab(_picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.MAB_CONFIG.payURL */ .Cz.MAB_CONFIG.payURL);
        sendResponse({});
        break;
      case 'payment_success':
        _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.activate */ .Cz.activate();
        sendResponse({ ack: true });
        break;
      default:
    }
  });

  /**
   * Process the message related to getting the 'License' object
   *
   */
  /* eslint-disable consistent-return */
  browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.command === 'getLicenseConfig') {
      sendResponse({});
      const response = {
        getFormattedActiveSinceDate: _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.getFormattedActiveSinceDate */ .Cz.getFormattedActiveSinceDate(),
        MAB_CONFIG: _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.MAB_CONFIG */ .Cz.MAB_CONFIG,
        shouldShowMyAdBlockEnrollment: _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.shouldShowMyAdBlockEnrollment */ .Cz.shouldShowMyAdBlockEnrollment(),
        shouldShowPremiumCTA: _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.shouldShowPremiumCTA */ .Cz.shouldShowPremiumCTA(),
        isActiveLicense: _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.isActiveLicense */ .Cz.isActiveLicense(),
        isLicenseCodeValid: _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.isLicenseCodeValid */ .Cz.isLicenseCodeValid(),
        pageReloadedOnSettingChangeKey: _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.pageReloadedOnSettingChangeKey */ .Cz.pageReloadedOnSettingChangeKey,
        userClosedSyncCTAKey: _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.userClosedSyncCTAKey */ .Cz.userClosedSyncCTAKey,
        userSawSyncCTAKey: _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.userSawSyncCTAKey */ .Cz.userSawSyncCTAKey,
        themesForCTA: _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.userSawSyncCTAKey */ .Cz.userSawSyncCTAKey,
      };
      Object.assign(response, _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.get */ .Cz.get());
      return Promise.resolve(response);
    }
  });

  /**
   * Process the messages related to Channels object
   *
   */
  /* eslint-disable consistent-return */
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (!isTrustedSender(sender)) {
      return;
    }
    const { command } = message;
    switch (command) {
      case 'channels.getGuide':
        return processMessageResponse(sendResponse, _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.getGuide */ .ZW.getGuide());
      case 'channels.isAnyEnabled':
        return processMessageResponse(sendResponse, _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.isAnyEnabled */ .ZW.isAnyEnabled());
      case 'channels.isCustomChannelEnabled':
        return processMessageResponse(sendResponse, _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.isCustomChannelEnabled */ .ZW.isCustomChannelEnabled());
      case 'channels.initializeListeners':
        return processMessageResponse(sendResponse, _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.initializeListeners */ .ZW.initializeListeners());
      case 'channels.setEnabled':
        return processMessageResponse(sendResponse,
          _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.setEnabled */ .ZW.setEnabled(message.channelId, message.enabled));
      case 'channels.getIdByName':
        return processMessageResponse(sendResponse, _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.getIdByName */ .ZW.getIdByName(message.name));
      case 'channels.disableAllChannels':
        return processMessageResponse(sendResponse, _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.disableAllChannels */ .ZW.disableAllChannels());
      default:
    }
  });

  /**
   * Process the `getrandomlisting` &
   * 'channels.recordOneAdReplaced' message from the Image Swap content script
   *
   */
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === 'channels.getrandomlisting') {
      if (!!_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_4__.filters.getAllowingFilters(sender.tab.id).length || !_picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.isActiveLicense */ .Cz.isActiveLicense()) {
        sendResponse({ disabledOnPage: true });
        return;
      }
      const result = _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.randomListing */ .ZW.randomListing(message.opts);
      if (result) {
        sendResponse(result);
        return;
      }
      sendResponse({ disabledOnPage: true });
    } else if (message.command === 'channels.recordOneAdReplaced') {
      sendResponse({});
      if (_picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.isActiveLicense */ .Cz.isActiveLicense()) {
        _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .replacedCounts.recordOneAdReplaced */ .lg.recordOneAdReplaced(sender.tab.id);
      }
    }
  });

  /**
   * Process the messages related to Custom channel object
   *
   */
  /* eslint-disable consistent-return */
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (!isTrustedSender(sender)) {
      return;
    }
    const { command } = message;
    switch (command) {
      case 'customchannel.isMaximumAllowedImages': {
        const customChannelId = _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.getIdByName */ .ZW.getIdByName('CustomChannel');
        const customChannel = _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.channelGuide */ .ZW.channelGuide[customChannelId].channel;
        return processMessageResponse(sendResponse, customChannel.isMaximumAllowedImages());
      }
      case 'customchannel.getListings': {
        const customChannelId = _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.getIdByName */ .ZW.getIdByName('CustomChannel');
        const customChannel = _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.channelGuide */ .ZW.channelGuide[customChannelId].channel;
        return processMessageResponse(sendResponse, customChannel.getListings());
      }
      case 'customchannel.addCustomImage': {
        const customChannelId = _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.getIdByName */ .ZW.getIdByName('CustomChannel');
        const customChannel = _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.channelGuide */ .ZW.channelGuide[customChannelId].channel;
        return processMessageResponse(sendResponse,
          customChannel.addCustomImage(message.imageInfo));
      }
      case 'customchannel.removeListingByURL': {
        const customChannelId = _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.getIdByName */ .ZW.getIdByName('CustomChannel');
        const customChannel = _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .channels.channelGuide */ .ZW.channelGuide[customChannelId].channel;
        return processMessageResponse(sendResponse,
          customChannel.removeListingByURL(message.url));
      }
      default:
    }
  });

  /**
   * Process the messages related to Sync Service object
   *
   */
  /* eslint-disable consistent-return */
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (!isTrustedSender(sender)) {
      return;
    }
    const { command } = message;
    switch (command) {
      case 'resetLastGetStatusCode':
        _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].resetLastGetStatusCode();
        sendResponse({});
        break;
      case 'resetLastGetErrorResponse':
        _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].resetLastGetErrorResponse();
        sendResponse({});
        break;
      case 'resetLastPostStatusCode':
        _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].resetLastPostStatusCode();
        sendResponse({});
        break;
      case 'resetAllSyncErrors':
        _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].resetAllSyncErrors();
        sendResponse({});
        break;
      case 'SyncService.enableSync':
        _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].enableSync(message.initialGet);
        sendResponse({});
        break;
      case 'SyncService.disableSync':
        _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].disableSync(message.removeName);
        sendResponse({});
        break;
      case 'SyncService.getLastPostStatusCode':
        return processMessageResponse(sendResponse, _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].getLastPostStatusCode());
      case 'SyncService.getLastGetStatusCode':
        return processMessageResponse(sendResponse, _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].getLastGetStatusCode());
      case 'SyncService.getAllExtensionNames':
        return processMessageResponse(sendResponse, _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].getAllExtensionNames());
      case 'SyncService.getCurrentExtensionName':
        return processMessageResponse(sendResponse, _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentExtensionName());
      case 'SyncService.processUserSyncRequest':
        _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].processUserSyncRequest();
        sendResponse({});
        break;
      case 'SyncService.removeExtensionName':
        _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].removeExtensionName(message.dataDeviceName, message.dataExtensionGUID);
        sendResponse({});
        break;
      case 'SyncService.setCurrentExtensionName':
        _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].setCurrentExtensionName(message.name);
        sendResponse({});
        break;
      default:
    }
  });

  _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.licenseNotifier.on */ .Cz.licenseNotifier.on('license.updating', getListener('license', 'updating'));
  _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.licenseNotifier.on */ .Cz.licenseNotifier.on('license.updated', getListener('license', 'updated'));
  _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.licenseNotifier.on */ .Cz.licenseNotifier.on('license.updated.error', getListener('license', 'updated.error'));
  _picreplacement_check__WEBPACK_IMPORTED_MODULE_0__/* .License.licenseNotifier.on */ .Cz.licenseNotifier.on('license.expired', getListener('license', 'expired'));

  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('sync.data.receieved', getListener('sync', 'sync.data.receieved'));
  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('sync.data.getting', getListener('sync', 'sync.data.getting'));
  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('sync.data.error.initial.fail', getListener('sync', 'sync.data.error.initial.fail'));
  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('sync.data.getting.error', getListener('sync', 'sync.data.getting.error'));
  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('extension.names.downloading', getListener('sync', 'extension.names.downloading'));
  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('extension.names.downloaded', getListener('sync', 'extension.names.downloaded'));
  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('extension.names.downloading.error', getListener('sync', 'extension.names.ownloading.error'));
  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('extension.name.updating', getListener('sync', 'extension.name.updating'));
  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('extension.name.updated', getListener('sync', 'extension.name.updated'));
  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('extension.name.updated.error', getListener('sync', 'extension.name.updated.error'));
  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('extension.name.remove', getListener('sync', 'extension.name.remove'));
  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('extension.name.removed', getListener('sync', 'extension.name.removed'));
  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('extension.name.remove.error', getListener('sync', 'extension.name.remove.error'));
  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('post.data.sending', getListener('sync', 'post.data.sending'));
  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('post.data.sent', getListener('sync', 'post.data.sent'));
  _picreplacement_sync_service__WEBPACK_IMPORTED_MODULE_2__["default"].syncNotifier.on('post.data.sent.error', getListener('sync', 'post.data.sent.error'));

  _picreplacement_channels__WEBPACK_IMPORTED_MODULE_1__/* .channelsNotifier.on */ .l.on('channels.changed', getListener('channels', 'changed'));
});


/***/ }),

/***/ 1306:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1177);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, log */



/**
 * Algorithm used to verify authenticity of sender
 */
const algorithm = {
  name: 'RSASSA-PKCS1-v1_5',
  modulusLength: 4096,
  publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
  hash: { name: 'SHA-512' },
};
/**
 * Time (in milliseconds) from now for which we consider signatures to be valid
 * based on their associated timestamps
 */
const signatureExpiration = 60 * 60 * 1000;

/**
 * Converts base64 string into array buffer
 *
 * @param {string} str - base64 string
 *
 * @returns {Uint8Array} array buffer
 */
function base64ToArrayBuffer(str) {
  const decodedData = atob(str);
  return Uint8Array.from(decodedData, c => c.charCodeAt(0));
}

/**
 * Encodes request data to sign for verifying authenticity of sender
 *
 * @param {string} domain - Sender domain
 * @param {number} timestamp - Timestamp of current date and time
 *
 * @returns {Uint8Array} Encoded request data
 */
function getAllowData(domain, timestamp) {
  const str = `${domain},${timestamp}`;
  return new TextEncoder().encode(str);
}

/**
 * Generates public key from string for verifying signatures
 *
 * @param {string} key - public key string
 *
 * @returns {Promise<CryptoKey>} public key
 */
async function getKey(key) {
  const abKey = base64ToArrayBuffer(key);
  const importedKey = await crypto.subtle.importKey(
    'spki',
    abKey,
    algorithm,
    false,
    ['verify'],
  );
  return importedKey;
}

/**
 * Handles incoming "users.isPaying" messages
 *
 * @param {Object} message - "users.isPaying" message
 * @param {Object} sender - Message sender
 *
 * @returns {Promise<string|null>} requested payload
 */
async function handleUsersIsPayingMessage(message, sender) {
  // Check Premium state
  if (!_check__WEBPACK_IMPORTED_MODULE_0__/* .License.isActiveLicense */ .Cz.isActiveLicense()) {
    log('user not active');
    return null;
  }

  // Verify timestamp
  const { signature, timestamp } = message;
  /* eslint-disable-next-line no-use-before-define */
  const validTimestamp = verifyTimestamp(timestamp);
  if (!validTimestamp) {
    log('invalid Timestamp', timestamp);
    return null;
  }

  // Verify signature
  const domain = new URL(sender.url).hostname;
  /* eslint-disable-next-line no-use-before-define */
  const validSignature = await verifySignature(domain, timestamp, signature);
  if (!validSignature) {
    log('invalid signature');
    return null;
  }

  // Retrieve payload
  const payload = _check__WEBPACK_IMPORTED_MODULE_0__/* .License.getBypassPayload */ .Cz.getBypassPayload();
  if (!payload) {
    log('no bypass mode payload');
    return null;
  }

  return payload;
}

/**
 * Checks whether signature matches data and any of the known public keys
 * that are authorized to use the bypass API
 *
 * @param {string} domain - Sender domain
 * @param {number} timestamp - Timestamp of current date and time
 * @param {string} signature - Signature for provided domain and timestamp
 *
 * @returns {Promise<boolean>} whether signature matches data and any authorized public key
 */
async function verifySignature(domain, timestamp, signature) {
  if (typeof signature !== 'string') {
    return false;
  }

  const data = getAllowData(domain, timestamp);
  const abSignature = base64ToArrayBuffer(signature);

  const promisedValidations = _check__WEBPACK_IMPORTED_MODULE_0__/* .License.MAB_CONFIG.bypassAuthorizedKeys.map */ .Cz.MAB_CONFIG.bypassAuthorizedKeys.map(
    /* eslint-disable-next-line no-use-before-define */
    key => verifySignatureWithKey(data, abSignature, key),
  );
  const validations = await Promise.all(promisedValidations);
  return validations.some(isValid => isValid);
}

/**
 * Checks whether signature matches data and public key
 *
 * @param {Uint8Array} data - Encoded data
 * @param {Uint8Array} signature - Signature for encoded data
 * @param {string} pubKey - Public key
 *
 * @returns {Promise<boolean>} whether signature matches data and public key
 */
async function verifySignatureWithKey(data, signature, pubKey) {
  return crypto.subtle.verify(
    algorithm,
    await getKey(pubKey),
    signature,
    data,
  );
}

/**
 * Checks whether timestamp is valid
 *
 * @param {number} timestamp - Timestamp
 *
 * @returns {boolean} whether timestamp is valid
 */
function verifyTimestamp(timestamp) {
  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    log('timestamp is not number', timestamp);
    return false;
  }

  const timeDiff = Date.now() - timestamp;
  return timeDiff < signatureExpiration;
}

/**
 * Initializes module
 */
function start() {
  /* eslint-disable consistent-return */
  browser.runtime.onMessage.addListener((message, sender) => {
    if (message.command !== 'users.isPaying') {
      return;
    }

    return handleUsersIsPayingMessage(message, sender);
  });
  /* eslint-enable consistent-return */
}

start();


/***/ }),

/***/ 1053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ Channels),
  "l": () => (/* binding */ channelsNotifier)
});

// EXTERNAL MODULE: ./node_modules/adblockpluscore/lib/contentTypes.js
var contentTypes = __webpack_require__(7610);
// EXTERNAL MODULE: ./vendor/webext-sdk/dist/ewe-api.js
var ewe_api = __webpack_require__(3817);
// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/events.js
var events = __webpack_require__(2901);
;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/image-sizes-map.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

const imageSizesMap = new Map([
  ['NONE', 0],
  ['wide', 1],
  ['tall', 2],
  ['skinnywide', 4],
  ['skinnytall', 8],
  ['big', 16],
  ['small', 32],
]);


const WIDE = imageSizesMap.get('wide');
const TALL = imageSizesMap.get('tall');
const BIG = imageSizesMap.get('big');
const SMALL = imageSizesMap.get('small');
const SKINNYWIDE = imageSizesMap.get('skinnywide');
const SKINNYTALL = imageSizesMap.get('skinnytall');

// EXTERNAL MODULE: ./adblock-betafish/subscriptionadapter.js + 1 modules
var subscriptionadapter = __webpack_require__(934);
;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/listing.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global  */


// Inputs: width:int, height:int, url:url, title:string, attributionUrl:url
class Listing {
  constructor(data) {
    this.width = data.width;
    this.height = data.height;
    this.url = data.url;
    this.title = data.title;
    this.attributionUrl = data.attributionUrl;
    this.channelName = data.channelName;
    if (data.name) {
      this.name = data.name;
    }
    if (data.thumbURL) {
      this.thumbURL = data.thumbURL;
    }
    if (data.userLink) {
      this.userLink = data.userLink;
    }
    if (data.anySize) {
      this.anySize = data.anySize;
    }
    if (data.type) {
      this.type = data.type;
    }
    if (data.ratio) {
      this.ratio = data.ratio;
    }
    if (data.customImage) {
      this.customImage = data.customImage;
    }
  }
}
/* harmony default export */ const listing = (Listing);

;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/channel.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global  */




// Base class representing a channel of photos.
// Concrete constructors must accept a single argument, because Channels.add()
// relies on that.
class Channel {
  constructor() {
    this.listings = [];
  }

  getListings() {
    return this.listings.slice(0); // shallow copy
  }

  static listingFactory(widthParam, heightParam, url, title, channelName) {
    let width = widthParam;
    let height = heightParam;
    const type = Channel.calculateType(width, height);

    if (typeof width === 'number') {
      width = `${width}`;
    }
    if (typeof height === 'number') {
      height = `${height}`;
    }
    return new listing({
      width,
      height,
      url,
      attributionUrl: url,
      type,
      ratio: Math.max(width, height) / Math.min(width, height),
      title,
      channelName, // message.json key for channel name
    });
  }

  // Update the channel's listings and trigger an 'updated' event.
  refresh() {
    const that = this;
    this.getLatestListings((listings) => {
      that.listings = listings;
    });
  }

  // Load all photos so that they're in the cache.
  static prefetch() {
    // current - noop, since all of the URLs are hard coded.
  }

  static getLatestListings() {
    throw new Error('Implemented by subclass. Call callback with up-to-date listings.');
  }

  static calculateType(w, h) {
    let width = w;
    let height = h;

    if (typeof width === 'string') {
      width = parseInt(width, 10);
    }
    if (typeof height === 'string') {
      height = parseInt(height, 10);
    }
    let type = '';
    const ratio = Math.max(width, height) / Math.min(width, height);
    if (ratio >= 1.5 && ratio < 7) {
      type = (width > height ? imageSizesMap.get('wide') : imageSizesMap.get('tall'));
    } else if (ratio > 7) {
      type = (width > height ? imageSizesMap.get('skinnywide') : imageSizesMap.get('skinnytall'));
    } else {
      type = ((width > 125 || height > 125) ? imageSizesMap.get('big') : imageSizesMap.get('small'));
    }
    return type;
  }
}
/* harmony default export */ const channel = (Channel);

;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/custom-channel.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser */

// Channel containing user imported images
// Subclass of Channel.




class CustomChannel extends channel {
  constructor() {
    super();
    this.listings = [];
    this.CUSTOM_META_KEY = 'customMetaData';
    const that = this;

    // load the meta data Array from storage
    browser.storage.local.get(this.CUSTOM_META_KEY).then((customImageMetaData) => {
      const savedCustomImageMetaData = customImageMetaData;
      if (!savedCustomImageMetaData[this.CUSTOM_META_KEY]) {
        savedCustomImageMetaData[this.CUSTOM_META_KEY] = [];
      }
      const customMetaData = savedCustomImageMetaData[this.CUSTOM_META_KEY];
      for (let inx = 0; inx < customMetaData.length; inx++) {
        const listingData = customMetaData[inx];
        if (
          listingData
          && listingData.url
          && listingData.width
          && listingData.height
          && listingData.title
        ) {
          const theNewListing = CustomChannel.createListing(listingData.width,
            listingData.height, listingData.url, listingData.title);
          that.listings.push(theNewListing);
        }
      }
    });
  }

  static createListing(theWidth, theHeight, theURL, theName) {
    let width = theWidth;
    let height = theHeight;
    const url = theURL;
    const type = channel.calculateType(width, height);

    if (typeof width === 'number') {
      width = `${width}`;
    }
    if (typeof height === 'number') {
      height = `${height}`;
    }
    return new listing({
      width,
      height,
      url,
      attributionUrl: url,
      type,
      ratio: Math.max(width, height) / Math.min(width, height),
      title: `This is an image from your PC! : ${theName}`,
      channelName: 'custom_channel_name', // message.json key for channel name
      customImage: true,
    });
  }

  // to run - channels.channelGuide[channels.getIdByName("CustomChannel")].channel.deleteAll()
  deleteAll() {
    const customImagesArray = this.listings;
    for (let inx = 0; inx < customImagesArray.length; inx++) {
      if (customImagesArray[inx] && customImagesArray[inx].url) {
        browser.storage.local.remove(customImagesArray[inx].url);
      }
    }
    browser.storage.local.remove(this.CUSTOM_META_KEY).then(() => {
      this.listings = [];
    });
  }

  getLatestListings(callback) {
    callback(this.listings);
  }

  isMaximumAllowedImages() {
    return (this.listings.length >= 9);
  }

  saveListings() {
    const that = this;
    return new Promise((resolve, reject) => {
      const persistedMetaImageObj = {};
      persistedMetaImageObj[that.CUSTOM_META_KEY] = that.listings;
      browser.storage.local.set(persistedMetaImageObj).then(() => {
        if (browser.runtime.lastError) {
          reject(browser.runtime.lastError);
        }
        resolve(true);
      });
    });
  }

  removeListingByURL(theURLToRemove) {
    for (let inx = 0; inx < this.listings.length; inx++) {
      const theListing = this.listings[inx];
      if (theListing && theListing.url === theURLToRemove) {
        this.listings.splice(inx, 1);
      }
    }
    const that = this;
    return new Promise((resolve, reject) => {
      that.saveListings().then((response) => {
        if (response) {
          browser.storage.local.remove(theURLToRemove).then(() => {
            if (browser.runtime.lastError) {
              reject(browser.runtime.lastError);
            }
            resolve(true);
          });
        } else {
          resolve(response);
        }
      });
    });
  }

  async addCustomImage(imageInfo) {
    const theNewListing = CustomChannel.createListing(imageInfo.width,
      imageInfo.height, imageInfo.listingURL, imageInfo.name);
    this.listings.push(theNewListing);
    const response = await this.saveListings().catch(() => Promise.reject());
    if (response) {
      return Promise.resolve(imageInfo.listingURL);
    }
    return Promise.reject();
  }

  getBytesInUseForEachImage() {
    if (typeof browser.storage.local.getBytesInUse !== 'function') {
      return Promise.resolve(0);
    }
    const customImagesArray = this.getListings();
    const promises = [];
    for (let inx = 0; inx < customImagesArray.length; inx++) {
      const thePromise = new Promise((resolve) => {
        if (customImagesArray[inx] && customImagesArray[inx].url) {
          browser.storage.local.getBytesInUse(customImagesArray[inx].url).then((biu) => {
            resolve(biu);
          });
        }
      });
      promises.push(thePromise);
    }
    return Promise.all(promises);
  }

  getTotalBytesInUse() {
    if (typeof browser.storage.local.getBytesInUse !== 'function') {
      return Promise.resolve(0);
    }
    return new Promise((resolve) => {
      this.getBytesInUseForEachImage().then((results) => {
        let sum = 0;
        let numResults = results.length;
        while (numResults > 0) {
          numResults -= 1;
          sum += results[numResults];
        }
        resolve(sum);
      });
    });
  }
}
/* harmony default export */ const custom_channel = (CustomChannel);

;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/data/cats.json
const cats_namespaceObject = JSON.parse('[{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x628/12--x628/cat-7784.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x628/12--x628/cat-animal-animal-portrait-pet.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x628/12--x628/cat-feline-cute-domestic.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x628/12--x628/cat-kitten-rozkosne-little.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x628/12--x628/domestic-cat-cat-adidas-relaxed.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x628/12--x628/eyes-cats-cat-couch.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x628/24--x1256/cat-7784.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x628/24--x1256/cat-animal-animal-portrait-pet.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x628/24--x1256/cat-feline-cute-domestic.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x628/24--x1256/cat-kitten-rozkosne-little.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x628/24--x1256/domestic-cat-cat-adidas-relaxed.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x628/24--x1256/eyes-cats-cat-couch.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-7784.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-82072.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-animal-animal-portrait-pet.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-animal-cute-pet-39500.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-balcony-surprised-look-80363.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-british-shorthair-mieze-blue-eye-162174.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-british-shorthair-thoroughbred-adidas-162064.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-close-animal-cat-face-162309.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-eyes-view-face-66292.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-feline-cute-domestic.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-feline-furry-pet-53446.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-feline-kitty-kitten-39380.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-home-animal-cat-s-eyes-46208.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-kitten-rozkosne-little.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-pet-eyes-animal-50566.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-pet-furry-face-162319.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-portrait-eyes-animal-162216.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-portrait-kitten-cute-128884.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-relax-chill-out-camacho-70844.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-tiger-getiegert-feel-at-home-160722.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/domestic-cat-cat-adidas-relaxed.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/eyes-cats-cat-couch.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-105587.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-106131.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-116835.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-135859.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-142615.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-171216.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-172420.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-173909.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-192384.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-207166.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-208845.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-208860.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-208878.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-208880.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-208906.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-208907.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-208954.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-208971.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-208998.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-209117.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-209800.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-210081.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-214657.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-220826.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-220876.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-220951.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-220970.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-220983.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-236630.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-236633.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-244848.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-247007.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-248254.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-248289.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-248304.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-257423.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-271889.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-272124.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-289345.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-289381.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-290263.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-327014.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-349388.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-372651.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-372657.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-416088.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-416138.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-416208.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-437886.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-461872.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-549237.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-576802.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-583250.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-596590.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-599492.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-605048.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-622549.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-65536.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-674568.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-674577 (1).jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-674577.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-679855.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-680437.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-683205.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-689042.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-709482.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-720684.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-731553.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-731637.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-733105.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-736528.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-745241.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-749212.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-751050.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-89951.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-92174.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-94434.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-95328.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-close-animal-cat-face-1623-9.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/cat-feline-kitty-kitten-3938-.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-1-5587.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-17242-.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-1739-9.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-2-886-.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-2-8878.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-58325-.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-6832-5.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-7-9482.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/3--x25-/pexels-photo-751-5-.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-7784.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-82072.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-animal-animal-portrait-pet.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-animal-cute-pet-39500.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-balcony-surprised-look-80363.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-british-shorthair-mieze-blue-eye-162174.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-british-shorthair-thoroughbred-adidas-162064.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-close-animal-cat-face-162309.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-eyes-view-face-66292.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-feline-cute-domestic.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-feline-furry-pet-53446.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-feline-kitty-kitten-39380.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-home-animal-cat-s-eyes-46208.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-kitten-rozkosne-little.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-pet-eyes-animal-50566.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-pet-furry-face-162319.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-portrait-eyes-animal-162216.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-portrait-kitten-cute-128884.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-relax-chill-out-camacho-70844.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/cat-tiger-getiegert-feel-at-home-160722.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/domestic-cat-cat-adidas-relaxed.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/eyes-cats-cat-couch.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-105587.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-106131.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-116835.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-135859.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-142615.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-171216.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-172420.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-173909.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-192384.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-207166.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-208845.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-208860.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-208878.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-208880.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-208906.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-208907.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-208954.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-208971.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-208998.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-209117.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-209800.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-210081.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-214657.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-220826.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-220876.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-220951.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-220970.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-220983.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-236630.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-236633.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-244848.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-247007.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-248254.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-248289.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-248304.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-257423.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-271889.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-272124.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-289345.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-289381.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-290263.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-327014.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-349388.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-372651.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-372657.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-416088.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-416138.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-416208.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-437886.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-461872.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-549237.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-576802.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-583250.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-596590.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-599492.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-605048.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-622549.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-65536.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-674568.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-674577 (1).jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-674577.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-679855.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-680437.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-683205.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-689042.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-709482.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-720684.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-731553.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-731637.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-733105.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-736528.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-745241.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-749212.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-751050.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-89951.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-92174.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-94434.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-95328.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-1-6131.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-2-89-6.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-2-9117.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-22-983.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-23663-.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-4162-8.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-5768-2.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-68-437.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/6--x5--/pexels-photo-7331-5.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/_6--x5--/pexels-photo-116835.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/_6--x5--/pexels-photo-59659-.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/_6--x5--/pexels-photo-7331-5.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x25-/_6--x5--/pexels-photo-94434.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x6--/3--x6--/cat-7784.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x6--/3--x6--/cat-animal-animal-portrait-pet.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x6--/3--x6--/cat-feline-cute-domestic.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x6--/3--x6--/cat-kitten-rozkosne-little.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x6--/3--x6--/domestic-cat-cat-adidas-relaxed.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x6--/3--x6--/eyes-cats-cat-couch.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x6--/6--x12--/cat-7784.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x6--/6--x12--/cat-animal-animal-portrait-pet.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x6--/6--x12--/cat-feline-cute-domestic.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x6--/6--x12--/cat-kitten-rozkosne-little.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x6--/6--x12--/domestic-cat-cat-adidas-relaxed.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Cats/3--x6--/6--x12--/eyes-cats-cat-couch.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Cats/336x28-/336x28-/cat-7784.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Cats/336x28-/336x28-/cat-animal-animal-portrait-pet.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Cats/336x28-/336x28-/cat-feline-cute-domestic.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Cats/336x28-/336x28-/cat-kitten-rozkosne-little.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Cats/336x28-/336x28-/domestic-cat-cat-adidas-relaxed.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Cats/336x28-/336x28-/eyes-cats-cat-couch.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Cats/336x28-/672x56-/cat-7784.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Cats/336x28-/672x56-/cat-animal-animal-portrait-pet.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Cats/336x28-/672x56-/cat-feline-cute-domestic.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Cats/336x28-/672x56-/cat-kitten-rozkosne-little.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Cats/336x28-/672x56-/domestic-cat-cat-adidas-relaxed.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Cats/336x28-/672x56-/eyes-cats-cat-couch.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/468x6-/cat_468x6-_01.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/468x6-/cat_468x6-_02.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/468x6-/cat_468x6-_03.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/468x6-/cat_468x6-_04.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/468x6-/cat_468x6-_05.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/468x6-/-2.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/468x6-/-3.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/468x6-/-4.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/468x6-/-5.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/468x6-/cat_468x6-_-3.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/936x12-/cat_936x120_01.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/936x12-/cat_936x120_02.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/936x12-/cat_936x120_03.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/936x12-/cat_936x120_04.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/936x12-/cat_936x120_05.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/936x12-/cat_936x12-_-1.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Cats/468x6-/936x12-/-4.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/12--x5-/cat_1200x50_01.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/12--x5-/cat_1200x50_02.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/12--x5-/cat_1200x50_03.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/12--x5-/cat_1200x50_04.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/12--x5-/cat_1200x50_05.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/12--x5-/-1.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/12--x5-/-2.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/12--x5-/-3.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/12--x5-/cat_12--x5-_-3.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/12--x5-/cat_12--x5-_-5.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/24--x1--/cat_2400x100_01.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/24--x1--/cat_2400x100_02.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/24--x1--/cat_2400x100_03.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/24--x1--/cat_2400x100_04.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/24--x1--/cat_2400x100_05.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/24--x1--/-1.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/24--x1--/-2.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/24--x1--/cat_24--x1--_-2.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Cats/12--x5-/24--x1--/cat_24--x1--_-4.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/1-9-x43/ad_1090x43_01.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/1-9-x43/ad_1090x43_02.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/1-9-x43/ad_1090x43_03.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/1-9-x43/ad_1090x43_04.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/1-9-x43/ad_1090x43_05.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/1-9-x43/-3.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/1-9-x43/-4.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/1-9-x43/ad_1-9-x43_-5.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/218-x86/cat_2180x86_01.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/218-x86/cat_2180x86_02.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/218-x86/cat_2180x86_03.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/218-x86/cat_2180x86_04.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/218-x86/cat_2180x86_05.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/218-x86/-2.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/218-x86/-3.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/218-x86/-4.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/218-x86/-5.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/218-x86/cat_218-x86_-1.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Cats/1-9-x43/218-x86/cat_218-x86_-3.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/45-x62/cat_450x62_01.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/45-x62/cat_450x62_02.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/45-x62/cat_450x62_03.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/45-x62/cat_450x62_04.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/45-x62/cat_450x62_05.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/45-x62/-1.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/45-x62/-2.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/9--x124/cat_900x124_01.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/9--x124/cat_900x124_02.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/9--x124/cat_900x124_03.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/9--x124/cat_900x124_04.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/9--x124/cat_900x124_05.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/9--x124/-1.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/9--x124/-2.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/9--x124/-3.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/9--x124/-4.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/9--x124/-5.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/9--x124/cat_9--x124_-1.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/9--x124/cat_9--x124_-2.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/9--x124/cat_9--x124_-3.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/9--x124/cat_9--x124_-4.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Cats/45-x62/9--x124/cat_9--x124_-5.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/1440x90/cat_1440x90_01.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/1440x90/cat_1440x90_02.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/1440x90/cat_1440x90_03.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/1440x90/cat_1440x90_04.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/1440x90/cat_1440x90_05.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/2880x180/cat_2880x180_01.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/2880x180/cat_2880x180_02.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/2880x180/cat_2880x180_03.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/2880x180/cat_2880x180_04.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/2880x180/cat_2880x180_05.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/144-x9-/-1.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/144-x9-/-4.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/144-x9-/-5.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/144-x9-/cat_144-x9-_-1.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/144-x9-/cat_144-x9-_-2.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/144-x9-/cat_144-x9-_-3.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/144-x9-/cat_144-x9-_-4.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/144-x9-/cat_144-x9-_-5.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/288-x18-/-1.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/288-x18-/-2.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/288-x18-/-3.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/288-x18-/-4.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/288-x18-/-5.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/288-x18-/cat_288-x18-_-1.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/288-x18-/cat_288-x18-_-2.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/288-x18-/cat_288-x18-_-3.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/288-x18-/cat_288-x18-_-4.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/144-x9-/288-x18-/cat_288-x18-_-5.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x180_01.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x180_02.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x180_03.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x180_04.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x180_05.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x18-_01.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x18-_02.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x18-_03.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x18-_04.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x18-_05.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x18-_-3.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x18-_-4.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x18-_-6.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x18-_-7.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x18-_-8.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/1456x18-/cat_1456x18-_1-.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/728x9-/cat_728x90_01.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/728x9-/cat_728x90_02.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/728x9-/cat_728x90_03.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/728x9-/cat_728x90_04.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/728x9-/cat_728x90_05.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/728x9-/cat_728x9-_01.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/728x9-/cat_728x9-_02.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/728x9-/cat_728x9-_03.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/728x9-/cat_728x9-_04.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/728x9-/cat_728x9-_05.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/728x9-/cat_728x9-_-4.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/728x9-/728x9-/cat_728x9-_-1.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/34-x9-/Cats_34-x9-_01.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/34-x9-/Cats_34-x9-_02.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/34-x9-/Cats_34-x9-_03.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/34-x9-/Cats_34-x9-_04.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/34-x9-/Cats_34-x9-_05.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/68-x18-/Cats_68-x18-_01.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/68-x18-/Cats_68-x18-_02.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/68-x18-/Cats_68-x18-_03.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/68-x18-/Cats_68-x18-_04.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/68-x18-/Cats_68-x18-_05.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/68-x18-/Cats_68-x18-_-1.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/68-x18-/Cats_68-x18-_-2.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/68-x18-/Cats_68-x18-_-4.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/68-x18-/Cats_68-x18-_-5.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/68-x18-/Cats_68-x18-_-9.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/68-x18-/Cats_68-x18-_1-.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Cats/34-x9-/68-x18-/Cats_68-x18-_11.jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Cats/16-x6--/32-x12--/cat-kitten-rozkosne-little.jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Cats/16-x6--/32-x12--/cat-7784.jpg"},{"width":1120,"height":1344,"url":"https://cdn.adblockcdn.com/pix/Cats/56-x672/112-x1344/pexels-photo-437886.jpg"},{"width":1120,"height":1344,"url":"https://cdn.adblockcdn.com/pix/Cats/56-x672/112-x1344/pexels-photo-2-8845.jpg"},{"width":1120,"height":1344,"url":"https://cdn.adblockcdn.com/pix/Cats/56-x672/112-x1344/pexels-photo-21--81.jpg"},{"width":1120,"height":1344,"url":"https://cdn.adblockcdn.com/pix/Cats/56-x672/112-x1344/pexels-photo-22-983.jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Cats/56-x672/56-x672/pexels-photo-22-97-.jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Cats/56-x672/56-x672/pexels-photo-416138.jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Cats/56-x672/56-x672/pexels-photo-59659-.jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Cats/56-x672/56-x672/pexels-photo-731553.jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Cats/56-x672/56-x672/pexels-photo-89951.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/cat-7784.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/cat-82-72.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/cat-feline-cute-domestic.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/domestic-cat-cat-adidas-relaxed.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-1-5587.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-1-6131.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-142615.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-17242-.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-1739-9.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-2-8845.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-2-886-.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-2-888-.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-2-89-6.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-2-89-7.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-2-9117.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-2-98--.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-22-826.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-22-876.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-22-951.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-22-983.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-244848.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-2483-4.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-416138.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-549237.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-59659-.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-599492.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-6-5-48.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-622549.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-674568.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-674577.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-679855.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-689-42.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-7-9482.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-7331-5.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-736528.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-745241.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/18-x68-/pexels-photo-749212.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/cat-7784.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/cat-82-72.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/cat-feline-cute-domestic.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/domestic-cat-cat-adidas-relaxed.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-1-5587.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-1-6131.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-142615.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-17242-.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-1739-9.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-2-8845.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-2-886-.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-2-888-.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-2-89-6.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-2-89-7.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-2-9117.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-2-98--.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-22-826.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-22-876.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-22-951.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-22-983.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-244848.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-2483-4.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-416138.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-549237.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-59659-.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-599492.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-6-5-48.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-622549.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-674568.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-674577.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-679855.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-689-42.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-7-9482.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-7331-5.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-736528.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-745241.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Cats/18-x68-/36-x136-/pexels-photo-749212.jpg"}]');
;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/cat-channel.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global   */





// Channel containing hard coded cats loaded from disk.
// Subclass of Channel.
class CatsChannel extends channel {
  getLatestListings(callback) {
    for (const cat of cats_namespaceObject) {
      this.listings.push(channel.listingFactory(cat.width, cat.height, cat.url, 'This is a cat!', 'catchannelswitchlabel'));
    }
    callback(this.listings);
  }
}
/* harmony default export */ const cat_channel = (CatsChannel);

;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/data/dogs.json
const dogs_namespaceObject = JSON.parse('[{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/animal-dog-golden-retriever-9716.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/animal-dog-pet-brown.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/bordeaux-mastiff-dog-animal.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/dalmatians-dog-animal-head.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/dog-brown-snout-fur.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/dog-cute-pet.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/dog-young-dog-small-dog-maltese.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/nature-animal-dog-pet.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/night-animal-dog-pet.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/night-garden-yellow-animal.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/wall-animal-dog-pet.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/animal-dog-golden-retriever-9716.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/animal-dog-pet-brown.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/bordeaux-mastiff-dog-animal.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/dalmatians-dog-animal-head.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/dog-brown-snout-fur.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/dog-cute-pet.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/dog-young-dog-small-dog-maltese.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/nature-animal-dog-pet.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/night-animal-dog-pet.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/night-garden-yellow-animal.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/wall-animal-dog-pet.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/animal-dog-golden-retriever-9716.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/animal-dog-pet-brown.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/bordeaux-mastiff-dog-animal.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/dalmatians-dog-animal-head.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/dog-brown-snout-fur.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/dog-cute-pet.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/dog-young-dog-small-dog-maltese.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/nature-animal-dog-pet.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/night-animal-dog-pet.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/night-garden-yellow-animal.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/wall-animal-dog-pet.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/animal-dog-golden-retriever-9716.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/animal-dog-pet-brown.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/bordeaux-mastiff-dog-animal.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/dalmatians-dog-animal-head.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/dog-brown-snout-fur.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/dog-cute-pet.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/dog-young-dog-small-dog-maltese.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/nature-animal-dog-pet.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/night-animal-dog-pet.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/night-garden-yellow-animal.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/wall-animal-dog-pet.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/animal-dog-golden-retriever-9716.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/animal-dog-pet-brown.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/bordeaux-mastiff-dog-animal.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/dalmatians-dog-animal-head.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/dog-brown-snout-fur.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/dog-cute-pet.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/dog-young-dog-small-dog-maltese.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/nature-animal-dog-pet.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/night-animal-dog-pet.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/night-garden-yellow-animal.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/wall-animal-dog-pet.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/animal-dog-golden-retriever-9716.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/animal-dog-pet-brown.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/bordeaux-mastiff-dog-animal.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/dalmatians-dog-animal-head.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/dog-brown-snout-fur.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/dog-cute-pet.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/dog-young-dog-small-dog-maltese.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/nature-animal-dog-pet.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/night-animal-dog-pet.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/night-garden-yellow-animal.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/wall-animal-dog-pet.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/animal-dog-golden-retriever-9716.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/animal-dog-pet-brown.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/bordeaux-mastiff-dog-animal.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/dalmatians-dog-animal-head.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/dog-brown-snout-fur.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/dog-cute-pet.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/dog-young-dog-small-dog-maltese.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/nature-animal-dog-pet.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/night-animal-dog-pet.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/night-garden-yellow-animal.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/wall-animal-dog-pet.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/animal-dog-golden-retriever-9716.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/animal-dog-pet-brown.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/bordeaux-mastiff-dog-animal.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/dalmatians-dog-animal-head.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/dog-brown-snout-fur.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/dog-cute-pet.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/dog-young-dog-small-dog-maltese.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/nature-animal-dog-pet.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/night-animal-dog-pet.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/night-garden-yellow-animal.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/wall-animal-dog-pet.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/dog_468x6-_01.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/dog_468x6-_02.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/dog_468x6-_03.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/dog_468x6-_04.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/dog_468x6-_05.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/-3.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/-4.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/dog_468x6-_-2.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/468x6-/dog_468x6-_-4.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x120_01.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x120_02.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x120_03.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x120_04.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x120_05.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/-1.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/-2.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/-3.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/-4.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/-5.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x12-_-1.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x12-_-2.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x12-_-4.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Dogs/468x6-/936x12-/dog_936x12-_-5.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/dog_450x62_01.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/dog_450x62_02.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/dog_450x62_03.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/dog_450x62_04.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/dog_450x62_05.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/-4.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/-5.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/45-x62/dog_45-x62_-1.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_900x124_01.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_900x124_02.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_900x124_03.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_900x124_04.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_900x124_05.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/-1.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/-3.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/-4.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/-5.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_9--x124_-1.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_9--x124_-2.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_9--x124_-3.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_9--x124_-4.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Dogs/45-x62/9--x124/dog_9--x124_-5.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1090x43_01.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1090x43_02.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1090x43_03.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1090x43_04.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1090x43_05.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/-2.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/-3.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1-9-x43_-1.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1-9-x43_-2.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/1-9-x43/dog_1-9-x43_-3.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_2180x86_01.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_2180x86_02.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_2180x86_03.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_2180x86_04.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_2180x86_05.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/-1.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/-2.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/-3.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/-5.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_218-x86_-2.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_218-x86_-3.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Dogs/1-9-x43/218-x86/dog_218-x86_-4.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/dog_1200x50_01.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/dog_1200x50_02.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/dog_1200x50_03.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/dog_1200x50_04.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/dog_1200x50_05.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/-2.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/dog_12--x5-_-2.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/12--x5-/dog_12--x5-_-3.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/dog_2400x100_01.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/dog_2400x100_02.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/dog_2400x100_03.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/dog_2400x100_04.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/dog_2400x100_05.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/-3.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/-4.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/dog_24--x1--_-1.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x5-/24--x1--/dog_24--x1--_-4.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/144-x9-/144-x9-/dog_1440x90_01.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/144-x9-/144-x9-/dog_1440x90_02.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/144-x9-/144-x9-/dog_1440x90_03.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/144-x9-/144-x9-/dog_1440x90_04.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/144-x9-/144-x9-/dog_1440x90_05.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/144-x9-/144-x9-/-5.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/144-x9-/144-x9-/dog_144-x9-_-2.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/dog_2880x180_01.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/dog_2880x180_02.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/dog_2880x180_03.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/dog_2880x180_04.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/dog_2880x180_05.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/-2.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/dog_288-x18-_-5.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/144-x9-/288-x18-/-5.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x180_01.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x180_02.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x180_03.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x180_04.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x180_05.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_01.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_02.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_03.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_04.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_05.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-1.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-2.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-3.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-4.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-5.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-6.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-7.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-8.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_-9.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_1-.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/1456x18-/Dog_1456x18-_11.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x90_01.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x90_02.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x90_03.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x90_04.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x90_05.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x9-_01.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x9-_02.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x9-_03.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x9-_04.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x9-_05.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x9-_-2.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/728x9-/728x9-/Dog_728x9-_-4.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_01.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_02.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_03.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_04.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_05.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_-1.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_-3.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_-4.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_-8.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_-9.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/34-x9-/Dogs_34-x9-_1-.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_01.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_02.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_03.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_04.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_05.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_-1.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_-2.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_-4.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_-5.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_-6.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_-7.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_-9.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_1-.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Dogs/34-x9-/68-x18-/Dogs_68-x18-_11.jpg"},{"width":160,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/16-x6--/16-x6--/bordeaux-mastiff-dog-animal.jpg"},{"width":160,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/16-x6--/16-x6--/dog-cute-pet.jpg"},{"width":160,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/16-x6--/16-x6--/wall-animal-dog-pet.jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/16-x6--/32-x12--/animal-dog-pet-brown.jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/16-x6--/32-x12--/bordeaux-mastiff-dog-animal.jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/16-x6--/32-x12--/dog-young-dog-small-dog-maltese.jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/16-x6--/32-x12--/night-garden-yellow-animal.jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Dogs/56-x672/56-x672/pexels-photo-97863.jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Dogs/56-x672/56-x672/dog-animal-friend-pointer-16226-.jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Dogs/56-x672/56-x672/pexels-photo-594687.jpg"},{"width":1120,"height":1344,"url":"https://cdn.adblockcdn.com/pix/Dogs/56-x672/112-x1344/pexels-photo-113883.jpg"},{"width":1120,"height":1344,"url":"https://cdn.adblockcdn.com/pix/Dogs/56-x672/112-x1344/pexels-photo-434-9-.jpg"},{"width":1120,"height":1344,"url":"https://cdn.adblockcdn.com/pix/Dogs/56-x672/112-x1344/pexels-photo-46-186.jpg"},{"width":1120,"height":1344,"url":"https://cdn.adblockcdn.com/pix/Dogs/56-x672/112-x1344/pexels-photo-58997.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/12--x628/pexels-photo-89249.png"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Dogs/12--x628/24--x1256/pexels-photo-89249.png"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/3--x25-/pexels-photo-89249.png"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x25-/6--x5--/pexels-photo-89249.png"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/3--x6--/pexels-photo-89249.png"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Dogs/3--x6--/6--x12--/pexels-photo-89249.png"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/336x28-/pexels-photo-89249.png"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Dogs/336x28-/672x56-/pexels-photo-89249.png"},{"width":160,"height":600,"url":"https://cdn.adblockcdn.com/pix/Dogs/16-x6--/16-x6--/pexels-photo-89249.png"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/bordeaux-mastiff-dog-animal.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/dalmatians-dog-animal-head.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/dog-bernese-mountain-dog-berner-senner-dog-577-8.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/dog-bulldog-white-tongue-4-986.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/dog-cavalier-king-charles-spaniel-funny-pet-162193.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/dog-hybrid-animal-lying-162349.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/dog-young-dog-puppy-59965.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/dog-young-dog-small-dog-maltese.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/english-bulldog-bulldog-canine-dog-4-544.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/french-bulldog-summer-smile-joy-16-846.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/nature-animal-dog-pet.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/papillon-dog-animal-59969.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-13-763.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-134392.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-164446.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-169524.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-2358-5.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-247997.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-25757-.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-257577.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-271824.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-356378.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-3749-8.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-412465.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-4162-4.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-452772.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-46-132.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-46-823.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-485294.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-532423.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-58997.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-594687.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-612813.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-61372.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-66687-.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-688694.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-71-927.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-72-678.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-752383.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-8--33-.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/pexels-photo-9238-.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/tibet-terrier-cute-pet-dog-162276.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/wall-animal-dog-pet.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/weimaraner-puppy-dog-snout-97-82.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/wildlife-photography-pet-photography-dog-animal-159541.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/18-x68-/wildlife-photography-pet-photography-dog-dog-runs-159492.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/bordeaux-mastiff-dog-animal.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/dalmatians-dog-animal-head.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/dog-bernese-mountain-dog-berner-senner-dog-577-8.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/dog-bulldog-white-tongue-4-986.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/dog-cavalier-king-charles-spaniel-funny-pet-162193.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/dog-hybrid-animal-lying-162349.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/dog-young-dog-puppy-59965.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/dog-young-dog-small-dog-maltese.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/english-bulldog-bulldog-canine-dog-4-544.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/french-bulldog-summer-smile-joy-16-846.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/nature-animal-dog-pet.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/papillon-dog-animal-59969.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-13-763.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-134392.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-164446.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-169524.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-2358-5.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-247997.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-25757-.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-257577.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-271824.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-356378.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-3749-8.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-412465.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-4162-4.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-452772.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-46-132.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-46-823.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-485294.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-532423.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-58997.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-594687.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-612813.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-61372.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-66687-.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-688694.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-71-927.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-72-678.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-752383.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-8--33-.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/pexels-photo-9238-.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/tibet-terrier-cute-pet-dog-162276.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/wall-animal-dog-pet.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/weimaraner-puppy-dog-snout-97-82.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/wildlife-photography-pet-photography-dog-animal-159541.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Dogs/18-x68-/36-x136-/wildlife-photography-pet-photography-dog-dog-runs-159492.jpg"}]');
;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/dog-channel.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global */





// Channel containing hard coded dogs loaded from CDN
// Subclass of Channel.
class DogsChannel extends channel {
  getLatestListings(callback) {
    for (const dog of dogs_namespaceObject) {
      this.listings.push(channel.listingFactory(dog.width, dog.height, dog.url, 'This is a dog!', 'dogchannelswitchlabel'));
    }
    callback(this.listings);
  }
}
/* harmony default export */ const dog_channel = (DogsChannel);

;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/data/landscapes.json
const landscapes_namespaceObject = JSON.parse('[{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/12--x628/amazing-animal-beautiful-beautifull.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/12--x628/amazing-beautiful-beauty-blue.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/12--x628/antelope-canyon-lower-canyon-arizona.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/12--x628/delicate-arch-night-stars-landscape.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/12--x628/italian-landscape-mountains-nature.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/12--x628/pexels-photo (1).jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/12--x628/pexels-photo (2).jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/12--x628/pexels-photo.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/12--x628/road-sun-rays-path.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/12--x628/sunrise-phu-quoc-island-ocean.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/12--x628/sunset-field-poppy-sun-priroda.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/12--x628/switzerland-zermatt-mountains-snow.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/24--x1256/amazing-animal-beautiful-beautifull.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/24--x1256/amazing-beautiful-beauty-blue.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/24--x1256/antelope-canyon-lower-canyon-arizona.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/24--x1256/delicate-arch-night-stars-landscape.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/24--x1256/italian-landscape-mountains-nature.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/24--x1256/pexels-photo (1).jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/24--x1256/pexels-photo (2).jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/24--x1256/pexels-photo.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/24--x1256/road-sun-rays-path.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/24--x1256/sunrise-phu-quoc-island-ocean.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/24--x1256/sunset-field-poppy-sun-priroda.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x628/24--x1256/switzerland-zermatt-mountains-snow.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/3--x25-/amazing-animal-beautiful-beautifull.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/3--x25-/amazing-beautiful-beauty-blue.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/3--x25-/antelope-canyon-lower-canyon-arizona.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/3--x25-/delicate-arch-night-stars-landscape.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/3--x25-/italian-landscape-mountains-nature.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/3--x25-/pexels-photo (1).jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/3--x25-/pexels-photo (2).jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/3--x25-/pexels-photo.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/3--x25-/road-sun-rays-path.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/3--x25-/sunrise-phu-quoc-island-ocean.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/3--x25-/sunset-field-poppy-sun-priroda.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/3--x25-/switzerland-zermatt-mountains-snow.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/6--x5--/amazing-animal-beautiful-beautifull.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/6--x5--/amazing-beautiful-beauty-blue.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/6--x5--/antelope-canyon-lower-canyon-arizona.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/6--x5--/delicate-arch-night-stars-landscape.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/6--x5--/italian-landscape-mountains-nature.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/6--x5--/pexels-photo (1).jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/6--x5--/pexels-photo (2).jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/6--x5--/pexels-photo.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/6--x5--/road-sun-rays-path.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/6--x5--/sunrise-phu-quoc-island-ocean.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/6--x5--/sunset-field-poppy-sun-priroda.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x25-/6--x5--/switzerland-zermatt-mountains-snow.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/3--x6--/amazing-animal-beautiful-beautifull.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/3--x6--/amazing-beautiful-beauty-blue.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/3--x6--/antelope-canyon-lower-canyon-arizona.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/3--x6--/delicate-arch-night-stars-landscape.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/3--x6--/italian-landscape-mountains-nature.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/3--x6--/pexels-photo (1).jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/3--x6--/pexels-photo (2).jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/3--x6--/pexels-photo.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/3--x6--/road-sun-rays-path.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/3--x6--/sunrise-phu-quoc-island-ocean.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/3--x6--/sunset-field-poppy-sun-priroda.jpg"},{"width":300,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/3--x6--/switzerland-zermatt-mountains-snow.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/6--x12--/amazing-animal-beautiful-beautifull.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/6--x12--/amazing-beautiful-beauty-blue.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/6--x12--/antelope-canyon-lower-canyon-arizona.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/6--x12--/delicate-arch-night-stars-landscape.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/6--x12--/italian-landscape-mountains-nature.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/6--x12--/pexels-photo (1).jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/6--x12--/pexels-photo (2).jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/6--x12--/pexels-photo.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/6--x12--/road-sun-rays-path.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/6--x12--/sunrise-phu-quoc-island-ocean.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/6--x12--/sunset-field-poppy-sun-priroda.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/3--x6--/6--x12--/switzerland-zermatt-mountains-snow.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/336x28-/amazing-animal-beautiful-beautifull.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/336x28-/amazing-beautiful-beauty-blue.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/336x28-/antelope-canyon-lower-canyon-arizona.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/336x28-/delicate-arch-night-stars-landscape.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/336x28-/italian-landscape-mountains-nature.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/336x28-/pexels-photo (1).jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/336x28-/pexels-photo (2).jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/336x28-/pexels-photo.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/336x28-/road-sun-rays-path.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/336x28-/sunrise-phu-quoc-island-ocean.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/336x28-/sunset-field-poppy-sun-priroda.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/336x28-/switzerland-zermatt-mountains-snow.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/672x56-/amazing-animal-beautiful-beautifull.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/672x56-/amazing-beautiful-beauty-blue.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/672x56-/antelope-canyon-lower-canyon-arizona.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/672x56-/delicate-arch-night-stars-landscape.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/672x56-/italian-landscape-mountains-nature.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/672x56-/pexels-photo (1).jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/672x56-/pexels-photo (2).jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/672x56-/pexels-photo.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/672x56-/road-sun-rays-path.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/672x56-/sunrise-phu-quoc-island-ocean.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/672x56-/sunset-field-poppy-sun-priroda.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Landscapes/336x28-/672x56-/switzerland-zermatt-mountains-snow.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Landscapes/1-9-x43/1-9-x43/landscape_1090x43_01.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Landscapes/1-9-x43/1-9-x43/landscape_1090x43_02.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Landscapes/1-9-x43/1-9-x43/landscape_1090x43_03.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Landscapes/1-9-x43/1-9-x43/landscape_1090x43_04.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Landscapes/1-9-x43/1-9-x43/landscape_1090x43_05.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Landscapes/1-9-x43/1-9-x43/-2.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Landscapes/1-9-x43/1-9-x43/landscape_1-9-x43_-2.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Landscapes/1-9-x43/218-x86/landscape_2180x86_01.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Landscapes/1-9-x43/218-x86/landscape_2180x86_02.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Landscapes/1-9-x43/218-x86/landscape_2180x86_03.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Landscapes/1-9-x43/218-x86/landscape_2180x86_04.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Landscapes/1-9-x43/218-x86/landscape_2180x86_05.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Landscapes/1-9-x43/218-x86/landscape_218-x86_-1.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Landscapes/1-9-x43/218-x86/landscape_218-x86_-4.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/45-x62/landscape_450x62_01.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/45-x62/landscape_450x62_02.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/45-x62/landscape_450x62_03.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/45-x62/landscape_450x62_04.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/45-x62/landscape_450x62_05.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/45-x62/-3.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/45-x62/-4.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/45-x62/-5.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/45-x62/landscape_45-x62_-5.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/9--x124/landscape_900x124_01.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/9--x124/landscape_900x124_02.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/9--x124/landscape_900x124_03.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/9--x124/landscape_900x124_04.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/9--x124/landscape_900x124_05.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/9--x124/-1.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/9--x124/-2.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/9--x124/-3.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/9--x124/-4.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/9--x124/-5.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/9--x124/landscape_9--x124_-2.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/9--x124/landscape_9--x124_-3.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Landscapes/45-x62/9--x124/landscape_9--x124_-4.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/144-x9-/landscape_1440x90_01.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/144-x9-/landscape_1440x90_02.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/144-x9-/landscape_1440x90_03.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/144-x9-/landscape_1440x90_04.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/144-x9-/landscape_1440x90_05.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/144-x9-/-1.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/144-x9-/-2.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/144-x9-/-3.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/144-x9-/-5.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/144-x9-/landscape_144-x9-_-1.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/144-x9-/landscape_144-x9-_-3.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/288-x18-/landscape_2880x180_01.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/288-x18-/landscape_2880x180_02.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/288-x18-/landscape_2880x180_03.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/288-x18-/landscape_2880x180_04.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/288-x18-/landscape_2880x180_05.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/288-x18-/-3.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/288-x18-/landscape_288-x18-_-2.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/144-x9-/288-x18-/landscape_288-x18-_-5.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/12--x5-/landscape_1200x50_01.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/12--x5-/landscape_1200x50_02.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/12--x5-/landscape_1200x50_03.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/12--x5-/landscape_1200x50_04.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/12--x5-/landscape_1200x50_05.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/12--x5-/-1.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/12--x5-/-2.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/12--x5-/-3.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/12--x5-/-4.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/12--x5-/-5.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/12--x5-/landscape_12--x5-_-2.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/12--x5-/landscape_12--x5-_-3.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/12--x5-/landscape_12--x5-_-4.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/12--x5-/landscape_12--x5-_-5.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/12--x5-/landscape_12--x5-_-1.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/24--x1--/landscape_2400x100_01.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/24--x1--/landscape_2400x100_02.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/24--x1--/landscape_2400x100_03.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/24--x1--/landscape_2400x100_04.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/24--x1--/landscape_2400x100_05.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/24--x1--/-1.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/24--x1--/-2.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/24--x1--/-3.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/24--x1--/-4.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/24--x1--/-5.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/24--x1--/landscape_24--x1--_-1.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/24--x1--/landscape_24--x1--_-2.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/24--x1--/landscape_24--x1--_-3.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/24--x1--/landscape_24--x1--_-4.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Landscapes/12--x5-/24--x1--/landscape_24--x1--_-5.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Landscapes/468x6-/468x6-/landscape_468x6-_01.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Landscapes/468x6-/468x6-/landscape_468x6-_02.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Landscapes/468x6-/468x6-/landscape_468x6-_03.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Landscapes/468x6-/468x6-/landscape_468x6-_04.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Landscapes/468x6-/468x6-/landscape_468x6-_05.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Landscapes/468x6-/468x6-/-4.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Landscapes/468x6-/468x6-/landscape_468x6-_-4.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Landscapes/468x6-/936x12-/landscape_936x120_01.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Landscapes/468x6-/936x12-/landscape_936x120_02.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Landscapes/468x6-/936x12-/landscape_936x120_03.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Landscapes/468x6-/936x12-/landscape_936x120_04.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Landscapes/468x6-/936x12-/landscape_936x120_05.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Landscapes/468x6-/936x12-/-1.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Landscapes/468x6-/936x12-/landscape_936x12-_-3.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x180_01.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x180_02.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x180_03.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x180_04.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x180_05.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x18-_01.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x18-_02.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x18-_03.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x18-_04.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x18-_05.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x18-_-3.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x18-_-4.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x18-_-7.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x18-_1-.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x18-_11.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x18-_12.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x18-_15.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x18-_17.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/1456x18-/Landscape_1456x18-_-2.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/728x9-/Landscape_728x90_01.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/728x9-/Landscape_728x90_02.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/728x9-/Landscape_728x90_03.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/728x9-/Landscape_728x90_04.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/728x9-/Landscape_728x90_05.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/728x9-/Landscape_728x9-_01.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/728x9-/Landscape_728x9-_02.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/728x9-/Landscape_728x9-_03.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/728x9-/Landscape_728x9-_04.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/728x9-/Landscape_728x9-_05.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/728x9-/Landscape_728x9-_-1.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/728x9-/Landscape_728x9-_-4.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/728x9-/728x9-/Landscape_728x9-_-5.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/34-x9-/Landscape_34-x9-_01.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/34-x9-/Landscape_34-x9-_02.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/34-x9-/Landscape_34-x9-_03.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/34-x9-/Landscape_34-x9-_04.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/34-x9-/Landscape_34-x9-_05.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/34-x9-/Landscape_34-x9-_-2.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/34-x9-/Landscape_34-x9-_-3.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/34-x9-/Landscape_34-x9-_-4.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/34-x9-/Landscape_34-x9-_1-.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/34-x9-/Landscape_34-x9-_11.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_01.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_02.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_03.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_04.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_05.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_-2.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_-3.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_-5.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_-6.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_-8.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_1-.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_11.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_12.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_14.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_15.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_16.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Landscapes/34-x9-/68-x18-/Landscape_68-x18-_17.jpg"},{"width":160,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/16-x6--/amazing-animal-beautiful-beautifull.jpg"},{"width":160,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/16-x6--/amazing-beautiful-beauty-blue.jpg"},{"width":160,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/16-x6--/antelope-canyon-lower-canyon-arizona.jpg"},{"width":160,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/16-x6--/delicate-arch-night-stars-landscape.jpg"},{"width":160,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/16-x6--/italian-landscape-mountains-nature.jpg"},{"width":160,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/16-x6--/pexels-photo (1).jpg"},{"width":160,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/16-x6--/pexels-photo (2).jpg"},{"width":160,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/16-x6--/road-sun-rays-path.jpg"},{"width":160,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/16-x6--/sunset-field-poppy-sun-priroda.jpg"},{"width":160,"height":600,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/16-x6--/switzerland-zermatt-mountains-snow.jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/32-x12--/amazing-beautiful-beauty-blue.jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/32-x12--/antelope-canyon-lower-canyon-arizona.jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/32-x12--/italian-landscape-mountains-nature.jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/32-x12--/pexels-photo (1).jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/32-x12--/pexels-photo (2).jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/32-x12--/road-sun-rays-path.jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/32-x12--/sunrise-phu-quoc-island-ocean.jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Landscapes/16-x6--/32-x12--/switzerland-zermatt-mountains-snow.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Landscapes/18-x68-/18-x68-/pexels-photo-414-83.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Landscapes/18-x68-/18-x68-/pexels-photo-351448.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Landscapes/18-x68-/36-x136-/amazing-animal-beautiful-beautifull.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Landscapes/18-x68-/36-x136-/pexels-photo-164196.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Landscapes/18-x68-/36-x136-/pexels-photo-189848.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Landscapes/18-x68-/36-x136-/pexels-photo-21-186.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Landscapes/18-x68-/36-x136-/pexels-photo-221148.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Landscapes/18-x68-/36-x136-/pexels-photo-388-65.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Landscapes/18-x68-/36-x136-/pexels-photo-443446.jpg"},{"width":1120,"height":1344,"url":"https://cdn.adblockcdn.com/pix/Landscapes/56-x672/112-x1344/pexels-photo-355241.jpg"},{"width":1120,"height":1344,"url":"https://cdn.adblockcdn.com/pix/Landscapes/56-x672/112-x1344/pexels-photo-552791.jpg"},{"width":1120,"height":1344,"url":"https://cdn.adblockcdn.com/pix/Landscapes/56-x672/112-x1344/switzerland-zermatt-mountains-snow.jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Landscapes/56-x672/56-x672/boat-house-cottage-waters-lake-65225.jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Landscapes/56-x672/56-x672/pexels-photo (1).jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Landscapes/56-x672/56-x672/pexels-photo-117843.jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Landscapes/56-x672/56-x672/pexels-photo-221148.jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Landscapes/56-x672/56-x672/yellowstone-national-park-sunset-twilight-dusk-158489.jpg"}]');
;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/landscape-channel.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global  */





// Channel containing hard coded Landscapes loaded from CDN.
// Subclass of Channel.
class LandscapesChannel extends channel {
  getLatestListings(callback) {
    for (const landscape of landscapes_namespaceObject) {
      this.listings.push(channel.listingFactory(landscape.width, landscape.height, landscape.url, 'This is a landscape!', 'landscapechannelswitchlabel'));
    }
    callback(this.listings);
  }
}
/* harmony default export */ const landscape_channel = (LandscapesChannel);

;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/data/birds.json
const birds_namespaceObject = JSON.parse('[{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_000.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_001.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_002.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_003.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_004.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_005.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_006.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_007.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_008.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_009.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_010.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_011.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_012.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_013.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_014.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_015.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_016.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_017.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Birds/18-x68-/file_018.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_000.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_001.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_002.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_003.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_004.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_005.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_006.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_007.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_008.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_009.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_010.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_011.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_012.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_013.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_014.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_015.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_016.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_017.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_018.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_019.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_020.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_021.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_022.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_023.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_024.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_025.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_026.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_027.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_028.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_029.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_030.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_031.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_032.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_033.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_034.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_035.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_036.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_037.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_038.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_039.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_040.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_041.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_042.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_043.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_044.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_045.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_046.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_047.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_048.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_049.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_050.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_051.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_052.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_053.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_054.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_055.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_056.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_057.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_058.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_059.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_060.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_061.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_062.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_063.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_064.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_065.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_066.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_067.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_068.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_069.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_070.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_071.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_072.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_073.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_074.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_075.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_076.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_077.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_078.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_079.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_080.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_081.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_082.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_083.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_084.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_085.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_086.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_087.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_088.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_089.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_090.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_091.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_092.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_093.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_094.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_095.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_096.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_097.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/24--x1256/file_098.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_000.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_001.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_002.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_003.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_004.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_005.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_006.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_007.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_008.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_009.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_010.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_011.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_012.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_013.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_014.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_015.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_016.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_017.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_018.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_019.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_020.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_021.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_022.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_023.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_024.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_025.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_026.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_027.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_028.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_029.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_030.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_031.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_032.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_033.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_034.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_035.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_036.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_037.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_038.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_039.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_040.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_041.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_042.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_043.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_044.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_045.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_046.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_047.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_048.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_049.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_050.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_051.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_052.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_053.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_054.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_055.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_056.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_057.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_058.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_059.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_060.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_061.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_062.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_063.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_064.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_065.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_066.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_067.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_068.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_069.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_070.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_071.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_072.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_073.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_074.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_075.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_076.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_077.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_078.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_079.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_080.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_081.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_082.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_083.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_084.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_085.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_086.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_087.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_088.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_089.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_090.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_091.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_092.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_093.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_094.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_095.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_096.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_097.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Birds/3--x25-/file_098.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_000.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_001.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_002.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_003.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_004.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_005.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_006.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_007.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_008.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_009.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_010.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_011.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_012.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_013.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_014.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_015.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_016.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_017.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_018.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_019.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_020.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_021.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_022.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_023.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_024.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_025.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_026.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_027.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_028.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_029.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_030.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_031.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_032.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_033.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_034.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_035.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_036.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_037.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_038.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_039.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_040.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_041.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_042.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_043.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_044.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_045.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_046.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_047.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_048.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_049.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_050.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_051.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_052.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_053.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_054.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_055.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_056.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_057.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_058.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_059.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_060.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_061.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_062.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_063.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_064.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_065.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_066.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_067.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_068.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_069.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_070.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_071.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_072.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_073.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_074.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_075.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_076.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_077.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_078.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_079.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_080.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_081.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_082.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_083.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_084.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_085.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_086.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_087.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_088.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_089.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_090.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_091.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_092.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_093.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_094.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_095.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_096.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_097.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Birds/336x28-/file_098.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_000.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_001.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_002.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_003.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_004.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_005.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_006.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_007.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_008.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_009.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_010.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_011.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_012.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_013.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_014.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_015.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_016.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_017.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_018.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_019.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_020.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_021.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_022.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_023.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Birds/36-x136-/file_024.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_000.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_001.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_002.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_003.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_004.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_005.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_006.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_007.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_008.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_009.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_010.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_011.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_012.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_013.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_014.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_015.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_016.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_017.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_018.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_019.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_020.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_021.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_022.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_023.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_024.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_025.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_026.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_027.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_028.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_029.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_030.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_031.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_032.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_033.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_034.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_035.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_036.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_037.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_038.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_039.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_040.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_041.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_042.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_043.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_044.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_045.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_046.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_047.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_048.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_049.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_050.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_051.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_052.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_053.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_054.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_055.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_056.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_057.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_058.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_059.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_060.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_061.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_062.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_063.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_064.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_065.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_066.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_067.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_068.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_069.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Birds/6--x5--/file_070.jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Birds/random/file_000.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Birds/random/file_001.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Birds/random/file_002.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Birds/random/file_003.jpg"},{"width":1120,"height":1344,"url":"https://cdn.adblockcdn.com/pix/Birds/random/file_004.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Birds/random/file_005.jpg"}]');
;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/birds-channel.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global  */





// Channel containing hard coded birds loaded from disk.
// Subclass of Channel.
class BirdChannel extends channel {
  getLatestListings(callback) {
    for (const bird of birds_namespaceObject) {
      this.listings.push(channel.listingFactory(bird.width, bird.height, bird.url, 'This is a bird!', 'birdchannelswitchlabel'));
    }
    callback(this.listings);
  }
}
/* harmony default export */ const birds_channel = (BirdChannel);

;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/data/food.json
const food_namespaceObject = JSON.parse('[{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_000.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_001.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_002.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_003.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_004.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_005.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_006.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_007.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_008.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_009.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_010.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_011.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_012.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_013.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_014.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_015.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_016.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_017.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_018.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_019.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_020.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_021.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_022.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_023.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_024.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_025.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_026.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_027.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_028.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_029.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_030.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_031.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_032.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_033.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_034.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_035.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_036.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_037.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_038.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_039.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_040.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_041.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_042.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_043.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_044.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_045.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_046.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_047.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_048.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_049.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_050.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_051.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_052.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_053.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_054.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_055.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_056.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_057.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_058.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_059.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_060.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_061.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_062.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_063.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_064.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_065.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_066.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_067.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_068.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_069.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_070.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_071.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_072.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_073.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_074.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_075.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_076.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_077.jpg"},{"width":"180","height":" 680","url":"https://cdn.adblockcdn.com/pix/Food/18-x68-/file_078.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_000.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_001.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_002.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_003.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_004.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_005.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_006.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_007.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_008.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_009.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_010.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_011.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_012.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_013.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_014.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_015.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_016.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_017.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_018.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_019.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_020.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_021.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_022.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_023.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_024.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_025.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_026.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_027.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_028.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_029.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_030.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_031.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_032.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_033.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_034.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_035.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_036.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_037.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_038.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_039.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_040.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_041.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_042.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_043.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_044.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_045.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_046.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_047.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_048.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_049.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_050.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_051.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_052.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_053.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_054.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_055.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_056.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_057.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_058.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_059.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_060.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_061.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_062.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_063.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_064.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_065.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_066.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_067.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_068.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_069.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_070.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_071.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_072.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_073.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_074.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_075.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_076.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_077.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_078.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_079.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_080.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_081.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_082.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_083.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_084.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_085.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_086.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_087.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_088.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_089.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_090.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_091.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_092.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_093.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_094.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_095.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_096.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_097.jpg"},{"width":"2400","height":" 1256","url":"https://cdn.adblockcdn.com/pix/Food/24--x1256/file_098.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_000.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_001.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_002.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_003.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_004.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_005.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_006.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_007.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_008.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_009.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_010.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_011.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_012.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_013.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_014.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_015.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_016.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_017.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_018.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_019.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_020.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_021.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_022.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_023.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_024.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_025.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_026.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_027.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_028.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_029.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_030.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_031.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_032.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_033.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_034.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_035.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_036.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_037.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_038.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_039.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_040.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_041.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_042.jpg"},{"width":"300","height":" 250","url":"https://cdn.adblockcdn.com/pix/Food/3--x25-/file_043.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_000.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_001.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_002.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_003.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_004.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_005.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_006.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_007.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_008.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_009.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_010.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_011.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_012.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_013.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_014.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_015.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_016.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_017.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_018.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_019.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_020.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_021.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_022.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_023.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_024.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_025.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_026.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_027.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_028.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_029.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_030.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_031.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_032.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_033.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_034.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_035.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_036.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_037.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_038.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_039.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_040.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_041.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_042.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_043.jpg"},{"width":"336","height":" 280","url":"https://cdn.adblockcdn.com/pix/Food/336x28-/file_044.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_000.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_001.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_002.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_003.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_004.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_005.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_006.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_007.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_008.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_009.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_010.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_011.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_012.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_013.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_014.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_015.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_016.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_017.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_018.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_019.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_020.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_021.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_022.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_023.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_024.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_025.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_026.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_027.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_028.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_029.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_030.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_031.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_032.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_033.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_034.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_035.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_036.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_037.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_038.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_039.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_040.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_041.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_042.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_043.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_044.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_045.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_046.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_047.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_048.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_049.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_050.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_051.jpg"},{"width":"360","height":" 1360","url":"https://cdn.adblockcdn.com/pix/Food/36-x136-/file_052.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_000.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_001.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_002.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_003.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_004.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_005.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_006.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_007.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_008.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_009.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_010.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_011.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_012.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_013.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_014.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_015.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_016.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_017.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_018.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_019.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_020.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_021.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_022.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_023.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_024.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_025.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_026.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_027.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_028.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_029.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_030.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_031.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_032.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_033.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_034.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_035.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_036.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_037.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_038.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_039.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_040.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_041.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_042.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_043.jpg"},{"width":"600","height":" 500","url":"https://cdn.adblockcdn.com/pix/Food/6--x5--/file_044.jpg"},{"width":"1120","height":" 1344","url":"https://cdn.adblockcdn.com/pix/Food/random/112-x1344.jpg"},{"width":"1200","height":" 678","url":"https://cdn.adblockcdn.com/pix/Food/random/12--x678.jpg"},{"width":"320","height":" 1200","url":"https://cdn.adblockcdn.com/pix/Food/random/32-x12--.jpg"},{"width":"570","height":" 672","url":"https://cdn.adblockcdn.com/pix/Food/random/57-x672.jpg"},{"width":"600","height":" 1200","url":"https://cdn.adblockcdn.com/pix/Food/random/6--x12--.jpg"},{"width":"672 560","height":"https://cdn.adblockcdn.com/pix/Food/random/672x56-.jpg","url":""},{"width":"680","height":" 180","url":"https://cdn.adblockcdn.com/pix/Food/random/68-x18-.jpg"}]');
;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/food-channel.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global */





// Channel containing hard coded cats loaded from disk.
// Subclass of Channel.
class FoodChannel extends channel {
  getLatestListings(callback) {
    for (const food of food_namespaceObject) {
      this.listings.push(channel.listingFactory(food.width, food.height, food.url, 'This is food!', 'foodchannelswitchlabel'));
    }
    callback(this.listings);
  }
}
/* harmony default export */ const food_channel = (FoodChannel);

;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/data/goats.json
const goats_namespaceObject = JSON.parse('[{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Goats/18-x68-/file_000.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Goats/18-x68-/file_001.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Goats/18-x68-/file_002.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Goats/18-x68-/file_003.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Goats/18-x68-/file_004.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Goats/18-x68-/file_005.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Goats/18-x68-/file_006.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Goats/18-x68-/file_007.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Goats/18-x68-/file_008.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Goats/18-x68-/file_009.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_000.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_001.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_002.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_003.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_004.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_005.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_006.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_007.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_008.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_009.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_010.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_011.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_012.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_013.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_014.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_015.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_016.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_017.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_018.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_019.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_020.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_021.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_022.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_023.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Goats/24--x1256/file_024.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_000.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_001.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_002.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_003.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_004.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_005.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_006.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_007.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_008.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_009.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_010.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_011.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_012.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_013.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_014.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_015.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_016.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_017.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_018.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_019.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_020.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_021.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_022.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_023.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Goats/3--x25-/file_024.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_000.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_001.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_002.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_003.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_004.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_005.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_006.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_007.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_008.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_009.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_010.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_011.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_012.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_013.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_014.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_015.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_016.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_017.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_018.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_019.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_020.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_021.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_022.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_023.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Goats/336x28-/file_024.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Goats/36-x136-/file_000.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Goats/36-x136-/file_001.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Goats/36-x136-/file_002.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Goats/36-x136-/file_003.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Goats/36-x136-/file_004.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Goats/36-x136-/file_005.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Goats/36-x136-/file_006.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Goats/36-x136-/file_007.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Goats/36-x136-/file_008.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Goats/36-x136-/file_009.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_000.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_001.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_002.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_003.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_004.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_005.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_006.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_007.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_008.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_009.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_010.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_011.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_012.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_013.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_014.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_015.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_016.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_017.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_018.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_019.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_020.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_021.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Goats/6--x5--/file_022.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Goats/file_000.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Goats/file_001.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Goats/file_002.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Goats/file_003.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Goats/file_004.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Goats/file_005.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Goats/file_006.jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Goats/file_007.jpg"},{"width":1120,"height":1344,"url":"https://cdn.adblockcdn.com/pix/Goats/file_008.jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Goats/file_009.jpg"}]');
;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/goat-channel.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global  */





// Channel containing hard coded cats loaded from disk.
// Subclass of Channel.
class GoatsChannel extends channel {
  getLatestListings(callback) {
    for (const goat of goats_namespaceObject) {
      this.listings.push(channel.listingFactory(goat.width, goat.height, goat.url, 'This is a goat!', 'goatchannelswitchlabel'));
    }
    callback(this.listings);
  }
}
/* harmony default export */ const goat_channel = (GoatsChannel);

;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/data/ocean.json
const ocean_namespaceObject = JSON.parse('[{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_000.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_001.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_002.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_003.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_004.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_005.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_006.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_007.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_008.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_009.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_010.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_011.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_012.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_013.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_014.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_015.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_016.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_017.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_018.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_019.jpg"},{"width":180,"height":680,"url":"https://cdn.adblockcdn.com/pix/Oceans/18-x68-/file_020.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_000.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_001.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_002.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_003.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_004.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_005.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_006.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_007.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_008.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_009.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_010.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_011.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_012.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_013.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_014.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_015.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_016.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_017.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_018.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_019.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_020.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_021.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_022.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_023.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_024.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_025.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_026.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_027.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_028.jpg"},{"width":2400,"height":1256,"url":"https://cdn.adblockcdn.com/pix/Oceans/24--x1256/file_029.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_000.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_001.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_002.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_003.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_004.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_005.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_006.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_007.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_008.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_009.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_010.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_011.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_012.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_013.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_014.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_015.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_016.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_017.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_018.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_019.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_020.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_021.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_022.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_023.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_024.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_025.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_026.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_027.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_028.jpg"},{"width":300,"height":250,"url":"https://cdn.adblockcdn.com/pix/Oceans/3--x25-/file_029.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_000.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_001.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_002.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_003.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_004.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_005.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_006.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_007.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_008.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_009.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_010.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_011.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_012.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_013.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_014.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_015.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_016.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_017.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_018.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_019.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_020.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_021.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_022.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_023.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_024.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_025.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_026.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_027.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_028.jpg"},{"width":336,"height":280,"url":"https://cdn.adblockcdn.com/pix/Oceans/336x28-/file_029.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_000.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_001.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_002.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_003.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_004.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_005.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_006.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_007.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_008.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_009.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_010.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_011.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_012.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_013.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_014.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_015.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_016.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_017.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_018.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_019.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_020.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_021.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_022.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_023.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_024.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_025.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_026.jpg"},{"width":360,"height":1360,"url":"https://cdn.adblockcdn.com/pix/Oceans/36-x136-/file_027.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_000.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_001.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_002.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_003.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_004.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_005.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_006.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_007.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_008.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_009.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_010.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_011.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_012.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_013.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_014.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_015.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_016.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_017.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_018.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_019.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_020.jpg"},{"width":600,"height":500,"url":"https://cdn.adblockcdn.com/pix/Oceans/6--x5--/file_021.jpg"},{"width":1200,"height":628,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_000.jpg"},{"width":600,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_001.jpg"},{"width":672,"height":560,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_002.jpg"},{"width":468,"height":60,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_003.jpg"},{"width":936,"height":120,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_004.jpg"},{"width":1200,"height":50,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_005.jpg"},{"width":2400,"height":100,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_006.jpg"},{"width":1090,"height":43,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_007.jpg"},{"width":2180,"height":86,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_008.jpg"},{"width":450,"height":62,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_009.jpg"},{"width":900,"height":124,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_010.jpg"},{"width":1440,"height":90,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_011.jpg"},{"width":2880,"height":180,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_012.jpg"},{"width":1456,"height":180,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_013.jpg"},{"width":728,"height":90,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_014.jpg"},{"width":340,"height":90,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_015.jpg"},{"width":680,"height":180,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_016.jpg"},{"width":320,"height":1200,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_017.jpg"},{"width":1120,"height":1344,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_018.jpg"},{"width":560,"height":672,"url":"https://cdn.adblockcdn.com/pix/Oceans/random/file_019.jpg"}]');
;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/ocean-channel.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global */





// Channel containing hard coded cats loaded from disk.
// Subclass of Channel.
class OceanChannel extends channel {
  getLatestListings(callback) {
    for (const ocean of ocean_namespaceObject) {
      this.listings.push(channel.listingFactory(ocean.width, ocean.height, ocean.url, 'This is a ocean!', 'oceanchannelswitchlabel'));
    }
    callback(this.listings);
  }
}
/* harmony default export */ const ocean_channel = (OceanChannel);

;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/unknown-channel.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global  */



// Empty Channel
// Subclass of Channel.
//
// Allows the Sync process to create an new named Channel
// when the sync process recieves a request with a unknown channel name
class UnknownChannel extends channel {
  // eslint-disable-next-line class-methods-use-this
  getLatestListings(callback) {
    callback([]);
  }
}
/* harmony default export */ const unknown_channel = (UnknownChannel);

// EXTERNAL MODULE: ./adblock-betafish/utilities/background/bg-functions.js
var bg_functions = __webpack_require__(2028);
;// CONCATENATED MODULE: ./adblock-betafish/picreplacement/channels.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global settings, getSettings, setSetting, ,
   browser, , , ext */

















const resourceTypes = new Map();
for (const type in contentTypes/* contentTypes */.Tr) {
  resourceTypes.set(type.toLowerCase(), contentTypes/* contentTypes */.Tr[type]);
}
resourceTypes.set('sub_frame', contentTypes/* contentTypes.SUBDOCUMENT */.Tr.SUBDOCUMENT);
resourceTypes.set('beacon', contentTypes/* contentTypes.PING */.Tr.PING);
resourceTypes.set('imageset', contentTypes/* contentTypes.IMAGE */.Tr.IMAGE);
resourceTypes.set('object_subrequest', contentTypes/* contentTypes.OBJECT */.Tr.OBJECT);
resourceTypes.set('main_frame', contentTypes/* contentTypes.DOCUMENT */.Tr.DOCUMENT);

const typeSelectors = new Map([
  [contentTypes/* contentTypes.IMAGE */.Tr.IMAGE, 'img,input'],
  [contentTypes/* contentTypes.MEDIA */.Tr.MEDIA, 'audio,video'],
  [contentTypes/* contentTypes.SUBDOCUMENT */.Tr.SUBDOCUMENT, 'frame,iframe,object,embed'],
  [contentTypes/* contentTypes.OBJECT */.Tr.OBJECT, 'object,embed'],
]);

const REPORTING_OPTIONS = {
  filterType: 'blocking',
  includeElementHiding: false,
};

const channelsKey = 'channels';

const subscription1 = subscriptionadapter/* default.getUrlFromId */.Z.getUrlFromId('antisocial');
const subscription2 = subscriptionadapter/* default.getUrlFromId */.Z.getUrlFromId('annoyances');

const channelObjects = {
  CustomChannel: custom_channel,
  CatsChannel: cat_channel,
  DogsChannel: dog_channel,
  LandscapesChannel: landscape_channel,
  BirdChannel: birds_channel,
  FoodChannel: food_channel,
  GoatsChannel: goat_channel,
  OceanChannel: ocean_channel,
  UnknownChannel: unknown_channel,
};

const channelsNotifier = new events/* EventEmitter */.v();

// Contains and provides access to all the photo channels.
class Channels {
  constructor(license) {
    this.license = license;
    this.channelGuide = undefined; // maps channel ids to channels and metadata
    this.loadFromStorage();
    this.initializeListeners();
  }

  // Inputs:
  //   name:string - a Channel class name.
  //   param:object - the single ctor parameter to the Channel class.
  //   enabled:bool - true if this channel is to be used for pictures.
  // Returns:
  //   id of newly created channel, or undefined if the channel already existed.
  add(data) {
    let Klass = channelObjects[data.name];
    if (!Klass) {
      Klass = channelObjects.UnknownChannel;
    }
    const dataParam = JSON.stringify(data.param);
    for (const id in this.channelGuide) {
      const c = this.channelGuide[id];
      if (c.name === data.name && JSON.stringify(c.param) === dataParam) {
        return undefined;
      }
    }
    const id = Math.floor(Math.random() * Date.now());
    const channel = new Klass(data.param);
    this.channelGuide[id] = {
      name: data.name,
      param: data.param,
      enabled: data.enabled,
      channel,
    };
    this.saveToStorage();
    channel.refresh();
    return id;
  }

  remove(channelId) {
    delete this.channelGuide[channelId];
    this.saveToStorage();
  }

  // Return read-only map from each channel ID to
  // { name, param, enabled }.
  getGuide() {
    const results = {};
    for (const id in this.channelGuide) {
      const c = this.channelGuide[id];
      results[id] = {
        name: c.name,
        param: c.param,
        enabled: c.enabled,
      };
    }

    return results;
  }

  // Return id for channel name
  getIdByName(name) {
    for (const id in this.channelGuide) {
      if (this.channelGuide[id].name === name) {
        return id;
      }
    }
    return undefined;
  }

  isCustomChannel(id) {
    return (this.getIdByName('CustomChannel') === id);
  }

  isCustomChannelEnabled() {
    return (this.channelGuide[this.getIdByName('CustomChannel')].enabled);
  }

  getListings(id) {
    return this.channelGuide[id].channel.getListings();
  }

  setEnabled(id, enabled) {
    const originalValue = this.channelGuide[id].enabled;
    this.channelGuide[id].enabled = enabled;
    this.saveToStorage();
    if (originalValue !== enabled) {
      channelsNotifier.emit('channels.changed', id, enabled, originalValue);
    }
  }

  refreshAllEnabled() {
    for (const id in this.channelGuide) {
      const data = this.channelGuide[id];
      if (data.enabled) {
        data.channel.refresh();
      }
    }
  }

  isAnyEnabled() {
    for (const id in this.channelGuide) {
      const channel = this.channelGuide[id];
      if (channel.enabled) {
        return true;
      }
    }
    return false;
  }

  disableAllChannels() {
    for (const id in this.channelGuide) {
      if (this.channelGuide[id].enabled) {
        this.channelGuide[id].enabled = false;
        channelsNotifier.emit('channels.changed', id, false, true);
      }
    }
  }

  // Returns a random Listing from all enabled channels or from channel
  // |channelId| if specified, trying to match the ratio of |width| and
  // |height| decently.  Returns undefined if there are no enabled channels.
  randomListing(opts) {
    if (!getSettings().picreplacement) {
      return undefined;
    }
    // if the element to be replace is 'fixed' in position, it may make for bad pic
    // replacement element.
    if (opts.position === 'fixed') {
      for (const sub of subscriptionadapter/* default.getSubscriptionsMinusText */.Z.getSubscriptionsMinusText()) {
        if (sub.url === subscription1 || sub.url === subscription2) {
          return undefined;
        }
      }
    }

    const heightLowRange = opts.height;
    const widthLowRange = opts.width;
    const heightHighRange = (opts.height * 1.25);
    const widthHighRange = (opts.width * 1.25);
    const typeMatchListings = [];
    const rangeLimitedListings = [];
    let targetRatio = Math.max(opts.width, opts.height) / Math.min(opts.width, opts.height);

    for (const id in this.channelGuide) {
      const data = this.channelGuide[id];
      if (opts.channelId === id || (data.enabled && !opts.channelId)) {
        data.channel.getListings().forEach((element) => {
          if (
            (opts.type === WIDE || opts.type === SKINNYWIDE)
            && (element.type !== SKINNYTALL)
            && (element.width <= widthHighRange)
            && (element.height >= heightLowRange)
            && (element.height <= heightHighRange)
          ) {
            rangeLimitedListings.push(element);
          } else if (
            (opts.type === TALL || opts.type === SKINNYTALL)
            && (element.type !== SKINNYWIDE)
            && (element.width >= widthLowRange)
            && (element.width <= widthHighRange)
            && (element.height <= heightHighRange)
          ) {
            rangeLimitedListings.push(element);
          } else if (
            (opts.type !== WIDE)
            && (opts.type !== TALL)
            && (opts.type !== SKINNYTALL)
            && (opts.type !== SKINNYWIDE)
            && (element.width >= widthLowRange)
            && (element.width <= widthHighRange)
            && (element.height >= heightLowRange)
            && (element.height <= heightHighRange)
          ) {
            rangeLimitedListings.push(element);
          }
          if (
            opts.type === element.type
            && element.width >= widthLowRange
            && element.height >= heightLowRange
          ) {
            typeMatchListings.push(element);
          }
        });
      }
    }
    let exactTypeMatchListings = [];
    if (rangeLimitedListings.length > 0) {
      const randomIndex = Math.floor(Math.random() * rangeLimitedListings.length);
      const theListing = Object.assign({}, rangeLimitedListings[randomIndex]);
      theListing.listingHeight = theListing.height;
      theListing.listingWidth = theListing.width;
      if (opts.height !== theListing.height && opts.width !== theListing.width) {
        theListing.height = (theListing.height * opts.width) / theListing.width;
        theListing.width = opts.width;
      }
      return theListing;
    }
    let bestMatchRatio = 0;
    targetRatio = Math.max(opts.width, opts.height) / Math.min(opts.width, opts.height);
    typeMatchListings.forEach((listing) => {
      if (Math.abs(listing.ratio - targetRatio) < Math.abs(bestMatchRatio - targetRatio)) {
        exactTypeMatchListings = []; // remove previous matches
        exactTypeMatchListings.push(listing);
        bestMatchRatio = listing.ratio;
      } else if (listing.ratio === bestMatchRatio) {
        exactTypeMatchListings.push(listing);
      }
    });
    if (exactTypeMatchListings.length > 0) {
      const randomIndex = Math.floor(Math.random() * exactTypeMatchListings.length);
      const theListing = Object.assign({}, exactTypeMatchListings[randomIndex]);
      theListing.listingHeight = theListing.height;
      theListing.listingWidth = theListing.width;
      return theListing;
    }

    return undefined;
  }

  // adds any new or missing channels (in a disabled state) to the users channel guide
  addNewChannels() {
    const channelNames = ['DogsChannel', 'CatsChannel', 'LandscapesChannel', 'OceanChannel', 'GoatsChannel', 'BirdChannel', 'FoodChannel', 'CustomChannel'];
    for (const name of channelNames) {
      if (!this.getIdByName(name)) {
        this.add({
          name,
          param: undefined,
          enabled: false,
        });
      }
    }
  }

  loadFromStorage() {
    (0,bg_functions/* migrateData */.ww)(channelsKey, true).then(() => {
      (0,bg_functions/* chromeStorageGetHelper */.nX)(channelsKey).then((response) => {
        this.channelGuide = {};
        const savedData = response || [];
        for (let i = 0; i < savedData.length; i++) {
          this.add(savedData[i]);
        }
        this.addNewChannels();
      });
    });
  }

  saveToStorage() {
    const toStore = [];
    const guide = this.getGuide();
    for (const id in guide) {
      toStore.push(guide[id]);
    }
    (0,bg_functions/* chromeStorageSetHelper */.rJ)(channelsKey, toStore);
  }

  static getContentType(details) {
    return resourceTypes.get(details.type) || contentTypes/* contentTypes.OTHER */.Tr.OTHER;
  }

  static getFrameId(details) {
    return details.type === 'sub_frame' ? details.parentFrameId
      : details.frameId;
  }

  // Ignore EasyPrivacy rules, since they can cause issue with odd image swaps
  static async shouldUseFilter(filter) {
    if (!filter) {
      return false;
    }
    const subscriptions = await ewe_api.subscriptions.getForFilter(filter);
    const isEasyPrivacy = subscriptions.filter(subscription => subscription.title === 'EasyPrivacy');
    return (isEasyPrivacy && isEasyPrivacy.length === 0);
  }

  async filterListener({ request, filter }) {
    if (getSettings().picreplacement && this.license.isActiveLicense()) {
      const shouldUseFilter = await Channels.shouldUseFilter(filter);
      if (!shouldUseFilter) {
        return;
      }
      if (request
          && request.tabId
          && filter
          && filter.type === 'elemhide'
          && filter.selector && filter.enabled) {
        const msgDetail = { hidingSelector: filter.selector, command: 'addSelector' };
        browser.tabs.sendMessage(request.tabId, msgDetail, { frameId: request.frameId });
      } else if (request
        && request.tabId
        && filter
        && filter.type === 'blocking'
        && filter.enabled) {
        const selector = typeSelectors.get(Channels.getContentType(request));
        const frameId = Channels.getFrameId(request);
        const msg = { selector, command: 'addBlockingSelector', url: request.url };
        browser.tabs.sendMessage(request.tabId, msg, { frameId });
      }
    } else if (!getSettings().picreplacement) {
      ewe_api.reporting.onBlockableItem.removeListener(this.filterListener, REPORTING_OPTIONS);
    }
  }


  initializeListeners() {
    this.license.ready().then(() => {
      settings.onload().then(() => {
        if (getSettings().picreplacement && this.license.isActiveLicense()) {
          ewe_api.reporting.onBlockableItem.removeListener(this.filterListener, REPORTING_OPTIONS);
          ewe_api.reporting.onBlockableItem.addListener(
            this.filterListener.bind(this), REPORTING_OPTIONS,
          );
        }
      });
    });
  }
}


/***/ }),

/***/ 1177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cz": () => (/* binding */ License),
/* harmony export */   "ZW": () => (/* binding */ channels),
/* harmony export */   "lg": () => (/* binding */ replacedCounts)
/* harmony export */ });
/* harmony import */ var _vendor_adblockplusui_adblockpluschrome_lib_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2901);
/* harmony import */ var _vendor_adblockplusui_adblockpluschrome_lib_storage_tab_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1627);
/* harmony import */ var _telemetry_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(158);
/* harmony import */ var _channels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1053);
/* harmony import */ var _prefs_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2630);
/* harmony import */ var _alias_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1021);
/* harmony import */ var _alias_subscriptionInit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8910);
/* harmony import */ var _servermessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1546);
/* harmony import */ var _subscriptionadapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(934);
/* harmony import */ var _fetch_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2379);
/* harmony import */ var _utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2028);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global ext, browser, translate, openTab,
   emitPageBroadcast, isTrustedSenderDomain */


// Yes, you could hack my code to not check the license.  But please don't.
// Paying for this extension supports the work on AdBlock.  Thanks very much.














const licenseNotifier = new _vendor_adblockplusui_adblockpluschrome_lib_events__WEBPACK_IMPORTED_MODULE_9__/* .EventEmitter */ .v();

const License = (function getLicense() {
  const isProd = true;
  const licenseStorageKey = 'license';
  const installTimestampStorageKey = 'install_timestamp';
  const userClosedSyncCTAKey = 'user_closed_sync_cta';
  const userSawSyncCTAKey = 'user_saw_sync_cta';
  const pageReloadedOnSettingChangeKey = 'page_reloaded_on_user_settings_change';
  const licenseAlarmName = 'licenseAlarm';
  const sevenDayAlarmName = 'sevenDayLicenseAlarm';

  let theLicense;
  const fiveMinutes = 300000;
  const initialized = false;
  let ajaxRetryCount = 0;
  let readyComplete;
  const licensePromise = new Promise(((resolve) => {
    readyComplete = resolve;
  }));
  const themesForCTA = [
    'solarized_theme', 'solarized_light_theme', 'watermelon_theme', 'sunshine_theme', 'ocean_theme',
  ];
  let currentThemeIndex = 0;
  const mabConfig = {
    prod: {
      licenseURL: 'https://myadblock-licensing.firebaseapp.com/license/',
      syncURL: 'https://myadblock.sync.getadblock.com/v1/sync',
      subscribeKey: 'sub-c-9eccffb2-8c6a-11e9-97ab-aa54ad4b08ec',
      payURL: 'https://getadblock.com/premium/enrollment/',
      subscriptionURL: 'https://getadblock.com/premium/manage-subscription/',
      bypassAuthorizedKeys: [
        // Production keys
        `MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAsCtBp9/0qCM5lp0lJVSx
      IAGgWZsX50xeJfBq6OkfsI+305Yj0igVfyVASOaC1fc2JRHD/uAOKk47SiPcBkiz
      mPHUt9ziOtAEkW7GrU6gaVOSwp26vUbSuvg9ouut5U2m8ULOyzp+WyU8nCzTPV5o
      AvCta04bK9or4UnyTRKyqADlNwz7WnH+0QiHYbgtfE/E3rowEoMEAC44C7OiawCm
      rnBXAkyBJnh1oEfUVI4LurxVl/zLo8MWfzErkaJy1FpsFR3F3L9ymKXpmxbhlDdX
      0rxjwnRD/2sCWW3SJOU26gfFgu/NI6LGxcWdPrucdkoOOOnNQjjDlhGYPTqqxugH
      /I5r+tAeUrrwKjmFcpMdxX7dfw1LoBoZCZnShZKlGKDqXf985Dc+3StbGWcxwNn9
      l9/Ho6YFA7fKpBKEED2V+SrDb4RCkScvOOiMOI1v5bwsLinUd/2yxRDrO25uwU7h
      r4LqmOguqjjLGF17d2WvG5D+LIQwgusxQd9Jk/n9PRdwtVGJhSDsDc8el2nKIqk9
      ofk3YJzAIbS9iHQ2LuHubuhzYjkxRLcdSbt1oONHCSHeecZn/OXwYeTvU7Po1KPW
      emi3XUpyjylUe9ONlw50lynwRw117bNHQDDHwKPoVW1cjoAtRsCnviFHPWTPjQKe
      A2LS9qa7eNdIonehrzG20cECAwEAAQ==`,
      ],
    },
    dev: {
      licenseURL: 'https://dev.myadblock.licensing.getadblock.com/license/',
      syncURL: 'https://dev.myadblock.sync.getadblock.com/v1/sync',
      subscribeKey: 'sub-c-9e0a7270-83e7-11e9-99de-d6d3b84c4a25',
      payURL: 'https://getadblock.com/premium/enrollment/?testmode=true',
      subscriptionURL: 'https://dev.getadblock.com/premium/manage-subscription/',
      bypassAuthorizedKeys: [
        // Development keys
        `MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAlTA+1kMAzbuPzMv/FV5B
      BcnqJRb7BTtCTE3IKox2Jd6d5kgI4JUIR9Hrsh+BPU8DACOv5dmcTIiy8Ci5Ptlu
      99t09oOPfZQLTyBEL4wFrTgbJPftURKugs8fkU9ttR/FyCCtSzhFlGNrcQvTTUvr
      NLBpBGuIpCkz/k8hux+IqDxaStVlJaJnyfcLl4kD+ogWkjmzG7Ba8btfPlVEkGvh
      xgrlVafn5w94hIhF9XzByxDxFk9KE4+Bs317HmYjYVoH3av61WMqZY5NFHoucuZz
      r4vhwt3b7yFIQ3T/eqiysUUX5OrqBVK9aQos8mCDKjGp2hWYnP1Oi1BzfPKVyTju
      IZAtZdrIeazj5NDcH+dwRmYTfB0r/35Dd7SIUrNX1uIRHcKWvLFUtpsRW+/d1XHG
      ruWBaPExutIgcIIpSCHm1cHVYpgEzu8Vs5VyOw+AfqTL5kWNAchx1VeWD91r4cVh
      ZPZQbN/TfxHyxisYLRMD4pKfjV8hlsUvmuy+Bg49Ds+rpGVEvnDdijWIbVsSD9eN
      5IO768819feXbR56PPxQtMs/JaE77Uoauuj7Lw9vGx/27V24TCWNTtbnwRkBCxJz
      m7YeUksuKYg7SQp4SMzkwhGxRRu9xlF/yKnDVXF5/J483akIuhuv0TiJI51mYvrD
      uc6lr1LW6QmZf6Vv2+ur7hcCAwEAAQ==`,
        // Testing keys
        `MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAqpV+M8A3hfi7JMut3Orr
      Sa6YEQutZ6F/FiaAmWPAlrG4IFA88HvqxRqbPz1niCWou7FqgsJ+v5+hhyrMFqM2
      JBBdaLHiDN1KNm7Ydx1j7NJJ+o/O22SN6kIU6k+VLg2B+Gj37s1qi8tIGWnrP+Ip
      jPMHDYSxLbQlIH/6CIiKVyMr7zaTej9rigGr33tqxM+RZtwo8eudEVcN3+DsUZ4j
      /jYx/hTvPze2r5xhB3faErhPSFLjZ9UIv0P9tPwO9m7PRQx9mrnh5QnS8NfEY2FY
      oFd+HiTsJS1QJi/ez9+5n1WCOTutc2lbxboCV3eJegBDObPDW1EhuVXOzGTEs5Sc
      Mb8NgE4iEoL9awIiGce+jS4Yj2olJAwGxv0rDJTycnDxx0SDvjTqEYFhuXk55vGd
      Dq7ClDvv8yiQ4CfCjZiLr9YbzO/kp2zf55wL+0SGmLKW6BLcUgGTciSHYMhPLv/N
      C5HtFlag5H7KGyimp/Q8eC9RnTskchyr1ShWyOoRMTsd45Htba5gfYjUWQxqhKiC
      SuFCooSX8/6zMynNOvD3A1p1+NhsKYzB+hnBeaFc/YKRyXVx1UJc8EZDc6jOYDoz
      1EB3nXfMQjtqmpqS5IbhzUxKDRC+kvRo7wa0TexhFMs6Vlg3+dAeemQujyljtJ7r
      PVMNXy0NnTuRNSK6V+Oz2JUCAwEAAQ==`,
        // Production keys
        `MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAsCtBp9/0qCM5lp0lJVSx
      IAGgWZsX50xeJfBq6OkfsI+305Yj0igVfyVASOaC1fc2JRHD/uAOKk47SiPcBkiz
      mPHUt9ziOtAEkW7GrU6gaVOSwp26vUbSuvg9ouut5U2m8ULOyzp+WyU8nCzTPV5o
      AvCta04bK9or4UnyTRKyqADlNwz7WnH+0QiHYbgtfE/E3rowEoMEAC44C7OiawCm
      rnBXAkyBJnh1oEfUVI4LurxVl/zLo8MWfzErkaJy1FpsFR3F3L9ymKXpmxbhlDdX
      0rxjwnRD/2sCWW3SJOU26gfFgu/NI6LGxcWdPrucdkoOOOnNQjjDlhGYPTqqxugH
      /I5r+tAeUrrwKjmFcpMdxX7dfw1LoBoZCZnShZKlGKDqXf985Dc+3StbGWcxwNn9
      l9/Ho6YFA7fKpBKEED2V+SrDb4RCkScvOOiMOI1v5bwsLinUd/2yxRDrO25uwU7h
      r4LqmOguqjjLGF17d2WvG5D+LIQwgusxQd9Jk/n9PRdwtVGJhSDsDc8el2nKIqk9
      ofk3YJzAIbS9iHQ2LuHubuhzYjkxRLcdSbt1oONHCSHeecZn/OXwYeTvU7Po1KPW
      emi3XUpyjylUe9ONlw50lynwRw117bNHQDDHwKPoVW1cjoAtRsCnviFHPWTPjQKe
      A2LS9qa7eNdIonehrzG20cECAwEAAQ==`,
      ],
    },
  };
  (async () => {
    const userID = await _telemetry_background__WEBPACK_IMPORTED_MODULE_1__/* .TELEMETRY.untilLoaded */ .C.untilLoaded();
    mabConfig.prod.payURL = `${mabConfig.prod.payURL}?u=${userID}`;
    mabConfig.dev.payURL = `${mabConfig.dev.payURL}&u=${userID}`;
  })();
  const MAB_CONFIG = isProd ? mabConfig.prod : mabConfig.dev;

  const sevenDayAlarmIdleListener = function (newState) {
    if (newState === 'active') {
      License.checkSevenDayAlarm();
    }
  };

  const removeSevenDayAlarmStateListener = function () {
    browser.idle.onStateChanged.removeListener(sevenDayAlarmIdleListener);
  };

  const addSevenDayAlarmStateListener = function () {
    removeSevenDayAlarmStateListener();
    browser.idle.onStateChanged.addListener(sevenDayAlarmIdleListener);
  };

  const cleanUpSevenDayAlarm = function () {
    removeSevenDayAlarmStateListener();
    browser.storage.local.remove(License.sevenDayAlarmName);
    browser.alarms.clear(License.sevenDayAlarmName);
  };

  const processSevenDayAlarm = function () {
    cleanUpSevenDayAlarm();
    (0,_alias_icon__WEBPACK_IMPORTED_MODULE_4__/* .showIconBadgeCTA */ .QO)(true, _alias_icon__WEBPACK_IMPORTED_MODULE_4__/* .NEW_BADGE_REASONS.SEVEN_DAY */ .ec.SEVEN_DAY);
  };

  browser.alarms.onAlarm.addListener((alarm) => {
    if (alarm && alarm.name === licenseAlarmName) {
      // At this point, no alarms exists, so
      // create an temporary alarm to avoid race condition issues
      browser.alarms.create(licenseAlarmName, { delayInMinutes: (24 * 60) });
      License.ready().then(() => {
        License.updatePeriodically();
      });
    }
    if (alarm && alarm.name === sevenDayAlarmName) {
      processSevenDayAlarm();
    }
  });

  // Check if the computer was woken up, and if there was a pending alarm
  // that should fired during the sleep, then
  // remove it, and fire the update ourselves.
  // see - https://bugs.chromium.org/p/chromium/issues/detail?id=471524
  browser.idle.onStateChanged.addListener((newState) => {
    if (newState === 'active') {
      browser.alarms.get(licenseAlarmName).then((alarm) => {
        if (alarm && Date.now() > alarm.scheduledTime) {
          browser.alarms.clear(licenseAlarmName).then(() => {
            License.updatePeriodically();
          });
        } else if (alarm) {
          // if the alarm should fire in the future,
          // re-add the license so it fires at the correct time
          const originalTime = alarm.scheduledTime;
          browser.alarms.clear(licenseAlarmName).then((wasCleared) => {
            if (wasCleared) {
              browser.alarms.create(licenseAlarmName, { when: originalTime });
            }
          });
        } else {
          License.updatePeriodically();
        }
      });
    }
  });

  // check the 7 alarm when the browser starts
  // or is woken up
  const checkSevenDayAlarm = function () {
    browser.alarms.get(License.sevenDayAlarmName).then((alarm) => {
      if (alarm && Date.now() > alarm.scheduledTime) {
        browser.alarms.clear(License.sevenDayAlarmName).then(() => {
          (0,_alias_icon__WEBPACK_IMPORTED_MODULE_4__/* .showIconBadgeCTA */ .QO)(true, _alias_icon__WEBPACK_IMPORTED_MODULE_4__/* .NEW_BADGE_REASONS.SEVEN_DAY */ .ec.SEVEN_DAY);
          removeSevenDayAlarmStateListener();
          browser.storage.local.remove(License.sevenDayAlarmName);
        });
      } else if (alarm) {
        // if the alarm should fire in the future,
        // re-add the license so it fires at the correct time
        const originalTime = alarm.scheduledTime;
        browser.alarms.clear(License.sevenDayAlarmName).then((wasCleared) => {
          if (wasCleared) {
            browser.alarms.create(License.sevenDayAlarmName, { when: originalTime });
            browser.storage.local.set({ [License.sevenDayAlarmName]: true });
            License.addSevenDayAlarmStateListener();
          }
        });
      } else {
        // since there's no alarm, we may need to show the 'new' text,
        // check if the temporary seven day alarm indicator is set, and
        // if the install date is 7 days or more than now
        browser.storage.local.get(License.sevenDayAlarmName).then((data) => {
          if (data && data[License.sevenDayAlarmName]) {
            browser.storage.local.get('blockage_stats').then((response) => {
              const { blockage_stats } = response;
              if (blockage_stats && blockage_stats.start) {
                const installDate = new Date(blockage_stats.start);
                const now = new Date();
                const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
                const diffDays = Math.round((now - installDate) / oneDay);
                if (diffDays >= 7) {
                  (0,_alias_icon__WEBPACK_IMPORTED_MODULE_4__/* .showIconBadgeCTA */ .QO)(true, _alias_icon__WEBPACK_IMPORTED_MODULE_4__/* .NEW_BADGE_REASONS.SEVEN_DAY */ .ec.SEVEN_DAY);
                  removeSevenDayAlarmStateListener();
                  browser.storage.local.remove(License.sevenDayAlarmName);
                }
              }
            });
          }
        });
        removeSevenDayAlarmStateListener();
      }
    });
  };
  addSevenDayAlarmStateListener();

  /**
   * Provides payload to verify authenticity of Premium license data
   *
   * @returns {string} Encoded signed Premium license data
   */
  const getBypassPayload = function () {
    if (!License.isActiveLicense()) {
      return null;
    }
    return `${License.get().encodedData}.${License.get().signature}`;
  };

  // Load the license from persistent storage
  // Should only be called during startup / initialization
  const loadFromStorage = function (callback) {
    browser.storage.local.get(licenseStorageKey).then((response) => {
      theLicense = response[licenseStorageKey] || {};
      if (typeof callback === 'function') {
        callback();
      }
    });
  };
  const checkForManagedSettings = function () {
    return new Promise(((resolve) => {
      if ('managed' in browser.storage) {
        browser.storage.managed.get(null).then((items) => {
          for (const key in items) {
            if (key === 'suppress_premium_cta') {
              theLicense = License.get();
              theLicense[key] = items[key];
              License.set(theLicense);
            }
          }
          resolve();
        },
        // Opera and FF doesn't support browser.storage.managed, but instead of simply
        // removing the API, it gives an asynchronous error which we ignore here.
        () => {
          resolve();
        });
      } else {
        resolve();
      }
    }));
  };

  // Clean up / remove old, unused data in localStorage
  function cleanUpLocalStorage() {
    (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_8__/* .storageSet */ .eV)(licenseStorageKey);
  }

  return {
    licenseStorageKey,
    userClosedSyncCTAKey,
    userSawSyncCTAKey,
    themesForCTA,
    pageReloadedOnSettingChangeKey,
    initialized,
    licenseAlarmName,
    sevenDayAlarmName,
    checkSevenDayAlarm,
    addSevenDayAlarmStateListener,
    removeSevenDayAlarmStateListener,
    cleanUpSevenDayAlarm,
    licenseTimer: undefined, // the license update timer token
    licenseNotifier,
    MAB_CONFIG,
    isProd,
    getBypassPayload,
    enrollUser() {
      loadFromStorage(() => {
        // only enroll users if they were not previously enrolled
        if (typeof theLicense.myadblock_enrollment === 'undefined') {
          theLicense.myadblock_enrollment = true;
          License.set(theLicense);
        }
      });
    },
    get() {
      return theLicense;
    },
    set(newLicense) {
      const licenseStatusBefore = theLicense.status;

      if (newLicense) {
        theLicense = newLicense;
        browser.storage.local.set({ license: theLicense });
      }

      if (licenseStatusBefore !== newLicense.status) {
        licenseNotifier.emit('license.status.changed');
      }
    },
    /**
     * Changes configuration to use development licensing server
     */
    setDevConfig() {
      License.MAB_CONFIG = mabConfig.dev;
    },
    initialize(callback) {
      loadFromStorage(() => {
        checkForManagedSettings().then(() => {
          if (typeof callback === 'function') {
            callback();
          }
          cleanUpLocalStorage();
          readyComplete();
        });
      });
    },
    getCurrentPopupMenuThemeCTA() {
      const theme = License.themesForCTA[currentThemeIndex];
      const lastThemeIndex = License.themesForCTA.length - 1;
      currentThemeIndex = lastThemeIndex === currentThemeIndex ? 0 : currentThemeIndex += 1;
      return theme || '';
    },
    // Get the latest license data from the server, and talk to the user if needed.
    async update() {
      const userID = await _telemetry_background__WEBPACK_IMPORTED_MODULE_1__/* .TELEMETRY.untilLoaded */ .C.untilLoaded();
      licenseNotifier.emit('license.updating');
      const postDataObj = {};
      postDataObj.u = userID;
      postDataObj.cmd = 'license_check';
      const licenseStatusBefore = License.get().status;
      // license version
      postDataObj.v = '1';
      (0,_fetch_util__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(License.MAB_CONFIG.licenseURL, postDataObj).then(async (response) => {
        if (response.ok) {
          const responseObj = await response.json();
          ajaxRetryCount = 0;
          const updatedLicense = responseObj;
          licenseNotifier.emit('license.updated', updatedLicense);
          if (!updatedLicense) {
            return;
          }
          // merge the updated license
          theLicense = { ...theLicense, ...updatedLicense };
          theLicense.licenseId = theLicense.code;
          License.set(theLicense);
          // now check to see if we need to do anything because of a status change
          if (
            licenseStatusBefore === 'active'
            && updatedLicense.status
            && updatedLicense.status === 'expired'
          ) {
            License.processExpiredLicense();
            _servermessages__WEBPACK_IMPORTED_MODULE_6__/* ["default"].recordGeneralMessage */ .Z.recordGeneralMessage('trial_license_expired');
          }
        } else {
          (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_8__/* .log */ .cM)('license server error response', response.status, ajaxRetryCount);
          licenseNotifier.emit('license.updated.error', ajaxRetryCount);
          ajaxRetryCount += 1;
          if (ajaxRetryCount > 3) {
            (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_8__/* .log */ .cM)('Retry Count exceeded, giving up', ajaxRetryCount);
            return;
          }
          const oneMinute = 1 * 60 * 1000;
          setTimeout(() => {
            License.updatePeriodically(`error${ajaxRetryCount}`);
          }, oneMinute);
        }
      })
        .catch((error) => {
          (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_8__/* .log */ .cM)('license server returned error: ', error);
        });
    },
    processExpiredLicense() {
      theLicense = License.get();
      theLicense.myadblock_enrollment = true;
      License.set(theLicense);
      (0,_prefs_settings__WEBPACK_IMPORTED_MODULE_3__/* .setSetting */ .Lt)('picreplacement', false);
      licenseNotifier.emit('license.expired');
      if ((0,_prefs_settings__WEBPACK_IMPORTED_MODULE_3__/* .getSettings */ .Gw)().sync_settings) {
        // We have to import the "sync-service" module on demand,
        // as the "sync-service" module in turn requires this module.
        /* eslint-disable import/no-cycle */
        (Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 8409))).disableSync();
      }
      (0,_prefs_settings__WEBPACK_IMPORTED_MODULE_3__/* .setSetting */ .Lt)('color_themes', { popup_menu: 'default_theme', options_page: 'default_theme' });
      _subscriptionadapter__WEBPACK_IMPORTED_MODULE_7__/* ["default"].unsubscribe */ .Z.unsubscribe({ adblockId: 'distraction-control-push' });
      _subscriptionadapter__WEBPACK_IMPORTED_MODULE_7__/* ["default"].unsubscribe */ .Z.unsubscribe({ adblockId: 'distraction-control-newsletter' });
      _subscriptionadapter__WEBPACK_IMPORTED_MODULE_7__/* ["default"].unsubscribe */ .Z.unsubscribe({ adblockId: 'distraction-control-survey' });
      _subscriptionadapter__WEBPACK_IMPORTED_MODULE_7__/* ["default"].unsubscribe */ .Z.unsubscribe({ adblockId: 'distraction-control-video' });
      browser.alarms.clear(licenseAlarmName);
    },
    ready() {
      return licensePromise;
    },
    updatePeriodically() {
      if (!License.isActiveLicense()) {
        return;
      }
      License.update();
      browser.storage.local.get(installTimestampStorageKey).then((response) => {
        let installTimestamp = response[installTimestampStorageKey];
        const originalInstallTimestamp = installTimestamp || Date.now();
        // If the installation timestamp is missing from storage,
        // save an updated version
        if (!(response[installTimestampStorageKey])) {
          installTimestamp = Date.now();
          browser.storage.local.set({ install_timestamp: installTimestamp });
        }
        const originalInstallDate = new Date(originalInstallTimestamp);
        let nextLicenseCheck = new Date();
        if (originalInstallDate.getHours() <= nextLicenseCheck.getHours()) {
          nextLicenseCheck.setDate(nextLicenseCheck.getDate() + 1);
        }
        nextLicenseCheck.setHours(originalInstallDate.getHours());
        nextLicenseCheck.setMinutes(originalInstallDate.getMinutes());
        // Add 5 minutes to the 'minutes' to make sure we've allowed enought time for '1' day
        nextLicenseCheck = new Date(nextLicenseCheck.getTime() + fiveMinutes);
        browser.alarms.create(licenseAlarmName, { when: nextLicenseCheck.getTime() });
      });
    },
    async getLicenseInstallationDate() {
      const response = await browser.storage.local.get(installTimestampStorageKey);
      const originalInstallTimestamp = response[installTimestampStorageKey];
      if (originalInstallTimestamp) {
        return (new Date(originalInstallTimestamp));
      }
      return undefined;
    },
    // activate the current license and configure the extension in licensed mode.
    // Call with an optional delay parameter (in milliseconds) if the first license
    // update should be delayed by a custom delay (default is 0 minutes).
    activate(delayMs) {
      let delay = delayMs;
      const currentLicense = License.get() || {};
      const newLicense = { ...currentLicense };
      newLicense.status = 'active';
      License.set(newLicense);
      (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_8__/* .reloadOptionsPageTabs */ .qo)();
      if (typeof delay !== 'number') {
        delay = 0; // 0 minutes
      }
      if (!this.licenseTimer) {
        this.licenseTimer = setTimeout(() => {
          License.updatePeriodically();
        }, delay);
      }
      (0,_prefs_settings__WEBPACK_IMPORTED_MODULE_3__/* .setSetting */ .Lt)('picreplacement', false);
    },
    getFormattedActiveSinceDate() {
      if (
        !License
        || !License.isActiveLicense()
        || !License.get()
        || !License.get().createdAtUTC
        || !Number.isInteger(License.get().createdAtUTC)
      ) {
        return null;
      }
      const dateFormat = { year: 'numeric', month: 'long' };
      let formattedDate = null;
      try {
        const createdAtUTC = parseInt(License.get().createdAtUTC, 10);
        formattedDate = new Date(createdAtUTC).toLocaleDateString(undefined, dateFormat);
      } catch (e) {
        return null;
      }
      return formattedDate;
    },
    isActiveLicense() {
      return License && License.get() && License.get().status === 'active';
    },
    isLicenseCodeValid() {
      return License && License.get().code && typeof License.get().code === 'string';
    },
    isMyAdBlockEnrolled() {
      return License && License.get() && License.get().myadblock_enrollment === true;
    },
    shouldShowMyAdBlockEnrollment() {
      return License.isMyAdBlockEnrolled()
        && !License.isActiveLicense()
        && License.shouldShowPremiumCTA();
    },
    shouldShowPremiumDcCTA() {
      return (License && License.isActiveLicense() && License.get().suppress_premium_cta !== true);
    },
    shouldShowPremiumCTA() {
      return !(License && License.get().suppress_premium_cta === true);
    },
    shouldShowBlacklistCTA(newValue) {
      if (!License.shouldShowPremiumCTA()) {
        return false;
      }
      const currentLicense = License.get() || {};
      if (typeof newValue === 'boolean') {
        currentLicense.showBlacklistCTA = newValue;
        License.set(currentLicense);
        return null;
      }

      if (typeof currentLicense.showBlacklistCTA === 'undefined') {
        currentLicense.showBlacklistCTA = true;
        License.set(currentLicense);
      }
      return License && License.get() && License.get().showBlacklistCTA === true;
    },
    shouldShowWhitelistCTA(newValue) {
      if (!License.shouldShowPremiumCTA()) {
        return false;
      }
      const currentLicense = License.get() || {};
      if (typeof newValue === 'boolean') {
        currentLicense.showWhitelistCTA = newValue;
        License.set(currentLicense);
        return null;
      }

      if (typeof currentLicense.showWhitelistCTA === 'undefined') {
        currentLicense.showWhitelistCTA = true;
        License.set(currentLicense);
      }
      return License && License.get() && License.get().showWhitelistCTA === true;
    },
    displayPopupMenuNewCTA() {
      const isNotActive = !License.isActiveLicense();
      const variant = License.get() ? License.get().var : undefined;
      return License && isNotActive && [3, 4].includes(variant) && License.shouldShowPremiumCTA();
    },
    // fetchLicenseAPI automates the common steps required to call the /license/api endpoint.
    // POST bodies will always automatically contain the command, license and userid so only
    // provide the missing fields in the body parameter. The ok callback handler receives the
    // data returned by the API and the fail handler receives any error information available.
    fetchLicenseAPI(command, requestBody, ok, requestFail) {
      const licenseCode = License.get().code;
      const userID = _telemetry_background__WEBPACK_IMPORTED_MODULE_1__/* .TELEMETRY.userId */ .C.userId;
      const body = requestBody;
      let fail = requestFail;
      body.cmd = command;
      body.userid = userID;
      if (licenseCode) {
        body.license = licenseCode;
      }
      const request = new Request('https://myadblock.licensing.getadblock.com/license/api/', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      fetch(request)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          fail(response.status);
          fail = null;
          return Promise.resolve({});
        })
        .then((data) => {
          ok(data);
        })
        .catch((err) => {
          fail(err);
        });
    },
  };
}());

const replacedPerPage = new _vendor_adblockplusui_adblockpluschrome_lib_storage_tab_session__WEBPACK_IMPORTED_MODULE_0__/* .TabSessionStorage */ .H('ab:premium:replacedPerPage');

// Records how many ads have been replaced by AdBlock.  This is used
// by the AdBlock to display statistics to the user.
const replacedCounts = (function getReplacedCount() {
  const adReplacedNotifier = new _vendor_adblockplusui_adblockpluschrome_lib_events__WEBPACK_IMPORTED_MODULE_9__/* .EventEmitter */ .v();
  const key = 'replaced_stats';
  (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_8__/* .migrateData */ .ww)(key, true).then(() => {
    (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_8__/* .chromeStorageGetHelper */ .nX)(key).then((data) => {
      let replacedCountData = data;
      if (!data) {
        replacedCountData = {};
      }
      if (replacedCountData.start === undefined) {
        replacedCountData.start = Date.now();
      }
      if (replacedCountData.total === undefined) {
        replacedCountData.total = 0;
      }
      replacedCountData.version = 1;
      (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_8__/* .chromeStorageSetHelper */ .rJ)(key, replacedCountData);
      (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_8__/* .storageSet */ .eV)(key);
    });
  });

  return {
    recordOneAdReplaced(tabId) {
      (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_8__/* .chromeStorageGetHelper */ .nX)(key).then((replacedCountData) => {
        const data = replacedCountData;
        data.total += 1;
        (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_8__/* .chromeStorageSetHelper */ .rJ)(key, data);
        browser.tabs.get(tabId).then(async (tab) => {
          let replaced = await replacedPerPage.get(tabId) || 0;
          await replacedPerPage.set(tabId, replaced += 1);
          adReplacedNotifier.emit('adReplaced', tabId, tab.url);
        });
      });
    },
    get() {
      return (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_8__/* .chromeStorageGetHelper */ .nX)(key);
    },
    async getTotalAdsReplaced(tabId) {
      if (tabId) {
        return replacedPerPage.get(tabId);
      }
      return this.get().then(data => data.total);
    },
    adReplacedNotifier,
  };
}());

// for use in the premium enrollment process
// de-coupled from the `License.ready().then` code below because the delay
// prevents the addListener from being fired in a timely fashion.
const onInstalledPromise = new Promise(((resolve) => {
  browser.runtime.onInstalled.addListener((details) => {
    resolve(details);
  });
}));

// the order of Promises below dictacts the order of the data in the detailsArray
Promise.all([onInstalledPromise, License.ready(), _alias_subscriptionInit__WEBPACK_IMPORTED_MODULE_5__/* .initialize */ .j]).then((detailsArray) => {
  // Enroll existing users in Premium
  if (detailsArray.length > 0 && detailsArray[0].reason) {
    License.enrollUser();
    if (detailsArray[0].reason === 'install') {
      // create an alarm that will fire in ~ 7 days to show the "New" badge text
      browser.alarms.create(License.sevenDayAlarmName, { delayInMinutes: (60 * 24 * 7) });
      License.addSevenDayAlarmStateListener();
      browser.storage.local.set({ [License.sevenDayAlarmName]: true });
    }
  }
});

License.ready().then(() => {
  License.checkSevenDayAlarm();

  if (License.isActiveLicense()) {
    License.updatePeriodically();
  }
});

License.initialize(() => {
  if (!License.initialized) {
    License.initialized = true;
  }
});

// eslint-disable-next-line no-restricted-globals
Object.assign(self, {
  License,
  replacedCounts,
});

const channels = new _channels__WEBPACK_IMPORTED_MODULE_2__/* .Channels */ .E(License);


/***/ }),

/***/ 3032:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _telemetry_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _subscriptionadapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(934);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, log */




const sendDCReport = function (url, type, id) {
  if (!url || !type) {
    return;
  }
  const reportData = {
    url,
    type,
    platform: _telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY */ .C && `browser:${_telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY.browser */ .C.browser}, browser version:${_telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY.browserVersion */ .C.browserVersion}, OS:${_telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY.os */ .C.os}, OS version:${_telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY.osVersion */ .C.osVersion}`,
    locale: browser.i18n.getUILanguage(),
    version: browser.runtime.getManifest().version,
  };
  if (id) {
    const subs = _subscriptionadapter__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getSubscriptionsMinusText */ .Z.getSubscriptionsMinusText();
    if (subs && subs[id]) {
      const lastUpdate = subs[id].lastDownload || 0;
      reportData.filterListLastUpdate = new Date(lastUpdate * 1000);
    }
  }
  const formData = new FormData();
  formData.append('bug_report', JSON.stringify(reportData));
  fetch('https://getadblock.com/freshdesk/bugReportDistractionControl.php', {
    body: formData,
    method: 'post',
  }).catch((error) => {
    log('freshdesk returned error: ', error);
  });
};

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command !== 'sendDCReport' || !message.url || !message.type) {
    return;
  }
  sendDCReport(message.url, message.type, message.id);
  sendResponse({});
});


/***/ }),

/***/ 8409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _telemetry_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _vendor_adblockplusui_adblockpluschrome_lib_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2901);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3817);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1177);
/* harmony import */ var _channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1053);
/* harmony import */ var _subscriptionadapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(934);
/* harmony import */ var _prefs_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2630);
/* harmony import */ var _servermessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1546);
/* harmony import */ var _fetch_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2379);
/* harmony import */ var _utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2028);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, channels,
   getUserFilters, Prefs, abpPrefPropertyNames,
   adblockIsDomainPaused, PubNub, adblockIsPaused,
   pausedFilterText1, pausedFilterText2,
   isWhitelistFilter, getCustomFilterMetaData */

/** @module SyncService */




// check.js imports disableSync from here
// eslint-disable-next-line import/no-cycle








const SyncService = (function getSyncService() {
  let storedSyncDomainPauses = [];
  let syncCommitVersion = 0;
  let currentExtensionName = '';
  let pubnub;
  const syncSchemaVersion = 1;
  const syncCommitVersionKey = 'SyncCommitKey';
  const syncLogMessageKey = 'SyncLogMessageKey';
  const syncPreviousDataKey = 'SyncPreviousDataKey';
  const syncExtensionNameKey = 'SyncExtensionNameKey';
  const syncPendingPostDataKey = 'syncPendingPostDataKey';
  const syncNotifier = new _vendor_adblockplusui_adblockpluschrome_lib_events__WEBPACK_IMPORTED_MODULE_8__/* .EventEmitter */ .v();
  let lastPostStatusCode = 200;
  let pendingPostData = false;
  let lastGetStatusCode = 200;
  let lastGetErrorResponse = {};
  const debounceWaitTime = 3000; // time in ms before posting data
  // Below is a list of filter list ids that have been added since the
  // sync feature was added to AdBlock, therefore these filter lists should be sent
  // with an ID of 'url:...' instead of the id in the betafish-subscriptions.json file
  // any adds to the the betafish-subscriptions.json file should be added here as well.
  const sendFilterListByURL = ['nordic', 'annoyances',
    'fb_notifications', 'easylist_plus_romanian', 'idcac'];

  function setCommitVersion(newVersionNum) {
    syncCommitVersion = newVersionNum;
  }

  function getLastPostStatusCode() {
    return lastPostStatusCode;
  }

  function resetLastPostStatusCode() {
    lastPostStatusCode = 200;
  }

  function setLastPostStatusCode(newCode) {
    lastPostStatusCode = newCode;
  }

  function getLastGetStatusCode() {
    return lastGetStatusCode;
  }

  function resetLastGetStatusCode() {
    lastGetStatusCode = 200;
  }

  function setLastGetStatusCode(newCode) {
    lastGetStatusCode = newCode;
  }

  function getLastGetErrorResponse() {
    return lastGetErrorResponse;
  }

  function resetLastGetErrorResponse() {
    lastGetErrorResponse = {};
  }

  function setLastGetErrorResponse(newObject) {
    lastGetErrorResponse = newObject;
  }

  function resetAllErrors() {
    resetLastGetErrorResponse();
    resetLastGetStatusCode();
    resetLastPostStatusCode();
  }

  const getCurrentExtensionName = function () {
    return currentExtensionName;
  };

  const getSyncLog = function () {
    return new Promise((resolve) => {
      (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .chromeStorageGetHelper */ .nX)(syncLogMessageKey).then((logMsgs) => {
        const storedLog = JSON.parse(logMsgs || '[]');
        const theReturnObj = {};
        Object.assign(theReturnObj, storedLog);
        resolve(theReturnObj);
      });
    });
  };

  // TODO - when should we delete the log file???
  const deleteSyncLog = function () {
    (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .chromeStorageDeleteHelper */ .lE)(syncLogMessageKey);
  };

  const migrateSyncLog = function () {
    /* eslint-disable no-restricted-globals */
    if (typeof self.localStorage === 'undefined') {
      return;
    }
    let storedMsgs = localStorage.getItem(syncLogMessageKey);
    if (!storedMsgs) {
      return;
    }
    storedMsgs = JSON.parse(storedMsgs);
    while (storedMsgs.length > 500) { // only keep the last 500 log entries
      storedMsgs.shift();
    }
    (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .chromeStorageSetHelper */ .rJ)(syncLogMessageKey, JSON.stringify(storedMsgs), (error) => {
      if (!error) {
        localStorage.removeItem(syncLogMessageKey);
      }
    });
  };

  function debounced(delay, fn) {
    let timerId;
    return function debouncedAgain(...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
        timerId = null;
      }, delay);
    };
  }

  // return meta data about the extension installation
  const getExtensionInfo = function () {
    return {
      flavor: _telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY.flavor */ .C.flavor,
      browserVersion: _telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY.browserVersion */ .C.browserVersion,
      os: _telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY.os */ .C.os,
      osVersion: _telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY.osVersion */ .C.osVersion,
      extVersion: _telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY.version */ .C.version,
      syncSchemaVersion,
    };
  };

  /*
  ** @param arrOne, arrTwo - Arrays to compare
  ** @returns {boolean} - true if a and b are the same array
  **                      has the length and same values in any order
  **                      otherwise false
  */
  function arrayComparison(arrOne, arrTwo) {
    if (!Array.isArray(arrOne) || !Array.isArray(arrTwo)) {
      return false;
    }
    if (arrOne.length !== arrTwo.length) {
      return false;
    }
    return arrOne.every(element => arrTwo.includes(element));
  }

  /*
  ** @param a, b        - values (Object, Date, etc.)
  ** @returns {boolean} - true if a and b are the same object or
  **                      same primitive value or
  **                      have the same properties with the same values
  **                      otherwise false
  */
  function objectComparison(a, b) {
    // Helper to return a value's internal object [[Class]]
    // That this returns [object Type] even for primitives
    function getClass(obj) {
      return Object.prototype.toString.call(obj);
    }

    // If a and b reference the same value, return true
    if (a === b) {
      return true;
    }

    // If a and b aren't the same type, return false
    if (typeof a !== typeof b) {
      return false;
    }

    // Already know types are the same, so if type is number
    // and both NaN, return true
    if (typeof a === 'number' && Number.isNaN(a) && Number.isNaN(b)) {
      return true;
    }

    // Get internal [[Class]]
    const aClass = getClass(a);
    const bClass = getClass(b);

    // Return false if not same class
    if (aClass !== bClass) {
      return false;
    }

    // If they're Boolean, String or Number objects, check values
    if (
      aClass === '[object Boolean]'
      || aClass === '[object String]'
      || aClass === '[object Number]'
    ) {
      if (a.valueOf() !== b.valueOf()) {
        return false;
      }
    }

    // If they're RegExps, Dates or Error objects, check stringified values
    if (aClass === '[object RegExp]' || aClass === '[object Date]' || aClass === '[object Error]') {
      if (a.toString() !== b.toString()) {
        return false;
      }
    }

    // For functions, check stringigied values are the same
    // Almost impossible to be equal if a and b aren't trivial
    // and are different functions
    if (aClass === '[object Function]' && a.toString() !== b.toString()) {
      return false;
    }

    // For all objects, (including Objects, Functions, Arrays and host objects),
    // check the properties
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    // If they don't have the same number of keys, return false
    if (aKeys.length !== bKeys.length) {
      return false;
    }

    if (Array.isArray(a) && Array.isArray(b)) {
      return arrayComparison(a, b);
    }

    // Check they have the same keys
    if (!aKeys.every(key => Object.prototype.hasOwnProperty.call(b, key))) {
      return false;
    }

    // Check key values - uses ES5 Object.keys
    return aKeys.every(key => objectComparison(a[key], b[key]));
  }

  const isDomainPauseFilter = function (filterText) {
    if (isWhitelistFilter(filterText)) {
      const domains = adblockIsDomainPaused();
      for (const domain in domains) {
        if (`@@${domain}$document` === filterText) {
          return true;
        }
      }
    }
    return false;
  };

  const isPauseFilter = function (filterText) {
    return (
      isWhitelistFilter(filterText) && ((pausedFilterText1 === filterText)
        || (pausedFilterText2 === filterText))
    );
  };

  function getCommitVersion() {
    return syncCommitVersion;
  }

  // Sync log message processing

  const addSyncLogText = function (msg) {
    (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .chromeStorageGetHelper */ .nX)(syncLogMessageKey).then((logMsgs) => {
      const storedLog = JSON.parse(logMsgs || '[]');
      storedLog.push(`${new Date().toUTCString()} , ${msg}`);
      while (storedLog.length > 500) { // only keep the last 500 log entries
        storedLog.shift();
      }
      (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .chromeStorageSetHelper */ .rJ)(syncLogMessageKey, JSON.stringify(storedLog));
    });
  };

  const onExtensionNamesDownloadingAddLogEntry = function () {
    addSyncLogText('extension.names.downloading');
  };

  const onExtensionNamesDownloadedAddLogEntry = function () {
    addSyncLogText('extension.names.downloaded');
  };

  const onExtensionNamesDownloadingErrorAddLogEntry = function (errorCode) {
    addSyncLogText(`extension.names.downloading.error: ${errorCode}`);
  };

  const onExtensionNameUpdatingAddLogEntry = function () {
    addSyncLogText('extension.name.updating');
  };

  const onExtensionNameUpdatedAddLogEntry = function () {
    addSyncLogText('extension.name.updated');
  };

  const onExtensionNameUpdatedErrorAddLogEntry = function (errorCode) {
    addSyncLogText(`extension.names.updated.error: ${errorCode}`);
  };

  const onExtensionNameRemoveAddLogEntry = function () {
    addSyncLogText('extension.name.remove');
  };

  const onExtensionNameRemovedAddLogEntry = function () {
    addSyncLogText('extension.name.removed');
  };

  const onExtensionNamesRemoveErrorAddLogEntry = function (errorCode) {
    addSyncLogText(`extension.name.remove.error: ${errorCode}`);
  };

  const onPostDataSendingAddLogEntry = function () {
    addSyncLogText('post.data.sending');
  };

  const onPostDataSentAddLogEntry = function () {
    addSyncLogText(`post.data.sent, commit version: ${getCommitVersion()}`);
  };

  const onPostDataSentErrorAddLogEntry = function (errorCode) {
    addSyncLogText(`post.data.sent.error: ${errorCode}`);
  };

  const onSyncDataGettingAddLogEntry = function () {
    addSyncLogText('sync.data.getting');
  };

  const onSyncDataReceievedAddLogEntry = function () {
    addSyncLogText(`sync.data.receieved, commit version: ${getCommitVersion()}`);
  };

  const onSyncDataGettingErrorAddLogEntry = function (errorCode) {
    addSyncLogText(`sync.data.getting.error: ${errorCode}`);
  };

  const onSyncDataGettingErrorInitialFailAddLogEntry = function (errorCode) {
    addSyncLogText(`sync.data.getting.error.initial.fail: ${errorCode}`);
  };

  function cleanCustomFilter(filters) {
    // Remove the global pause white-list item if adblock is paused
    if (adblockIsPaused()) {
      let index = filters.indexOf(pausedFilterText1);
      if (index >= 0) {
        filters.splice(index, 1);
      }
      index = filters.indexOf(pausedFilterText2);
      if (index >= 0) {
        filters.splice(index, 1);
      }
    }

    // Remove the domain pause white-list items
    const domainPauses = adblockIsDomainPaused();
    for (const aDomain in domainPauses) {
      const index = filters.indexOf(`@@${aDomain}$document`);
      if (index >= 0) {
        filters.splice(index, 1);
      }
    }
    return filters;
  }

  const processSyncUpdate = async function (payload) {
    (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .log */ .cM)('processing sync update', payload);
    // do we need a check or comparison of payload.version vs. syncSchemaVersion ?
    if (payload.settings) {
      const keywords = Object.keys(payload.settings);
      // Use a Promise to wait until the previous 'set' is complete because
      // calling 'setSetting' several times in a row in a loop prevents some
      // settings from being saved to storage
      for (let inx = 0, p = Promise.resolve(); inx < keywords.length; inx++) {
        const id = keywords[inx];
        p = p.then(() => new Promise((resolve) => {
          let value = payload.settings[id];
          // since we receive a 'show_statsinpopup' property on the |Prefs| object
          // from older versions of AdBLock, use the incoming value from |Prefs|
          // object for backward compatability
          if (
            id === 'display_menu_stats'
            && payload.prefs
            && Object.prototype.hasOwnProperty.call(payload.prefs, 'show_statsinpopup')
          ) {
            value = payload.prefs.show_statsinpopup;
          }
          (0,_prefs_settings__WEBPACK_IMPORTED_MODULE_5__/* .setSetting */ .Lt)(id, value, () => {
            resolve();
          });
        }));
      }
    }
    if (payload.subscriptions) {
      const currentSubs = await _subscriptionadapter__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getSubscriptionsMinusText */ .Z.getSubscriptionsMinusText();
      for (const id in currentSubs) {
        if (!payload.subscriptions[id] && currentSubs[id].subscribed) {
          // eslint-disable-next-line no-await-in-loop
          await _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.subscriptions.remove(currentSubs[id].url);
        }
      }
      for (const id in payload.subscriptions) {
        if (!currentSubs[id] || !currentSubs[id].subscribed) {
          let url = _subscriptionadapter__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getUrlFromId */ .Z.getUrlFromId(id);
          if (!url && id.startsWith('url:')) {
            url = id.slice(4);
          }
          if (url) {
            // eslint-disable-next-line no-await-in-loop
            await _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.subscriptions.add(url);
            _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.subscriptions.sync(url);
          }
        }
      }
    }

    if (payload.customFilterRules) {
      // capture, then remove all current custom filters, account for pause filters in
      // current processing
      let currentUserFilters = await getUserFilters();
      const onlyUserFilters = currentUserFilters.map(filter => filter.text);
      let results = [];
      for (const inx in payload.customFilterRules) {
        if (
          !_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.validate(payload.customFilterRules[inx])
          && !onlyUserFilters.includes(payload.customFilterRules[inx])
        ) {
          results.push(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.add([payload.customFilterRules[inx]]));
        }
      }
      await Promise.all(results);
      results = [];
      if (currentUserFilters && currentUserFilters.length) {
        currentUserFilters = cleanCustomFilter(currentUserFilters);
        // Delete / remove filters the user removed...
        if (currentUserFilters) {
          for (let i = 0; (i < currentUserFilters.length); i++) {
            const filter = currentUserFilters[i];
            if (!payload.customFilterRules.includes(filter.text)) {
              if (filter.text.length > 0) {
                if (!_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.validate(filter.text)) {
                  results.push(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.remove([filter.text]));
                }
              }
            }
          }
        }
      }
      await Promise.all(results);
    }
    if (payload.customRuleMetaData) {
      let currentUserFilters = await getUserFilters();
      currentUserFilters = currentUserFilters.map(filter => filter.text);
      for (const ruleText in payload.customRuleMetaData) {
        if (currentUserFilters.includes(ruleText)) {
          _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.setMetadata(ruleText, payload.customRuleMetaData[ruleText]);
        }
      }
    }
    if (payload.prefs) {
      for (const key in payload.prefs) {
        Prefs[key] = payload.prefs[key];
        // add any new Prefs to the array of Preferences we're tracking for sync
        if (abpPrefPropertyNames.indexOf(key) < 0) {
          abpPrefPropertyNames.push(key);
        }
        // since we no long use the 'show_statsinpopup' property on the |Prefs| object,
        // manually set Settings property for backward compatability
        if (key === 'show_statsinpopup') {
          (0,_prefs_settings__WEBPACK_IMPORTED_MODULE_5__/* .setSetting */ .Lt)('display_menu_stats', payload.prefs[key]);
        }
      }
    }
    if (payload.channels) {
      for (const name in payload.channels) {
        const channelId = channels.getIdByName(name);
        if (channelId) {
          channels.setEnabled(channelId, payload.channels[name]);
        } else {
          // create a new channel to save the channel name and the enabled indicator
          channels.add({ name, param: undefined, enabled: payload.channels[name] });
        }
      }
    }
  };

  const process403ErrorCode = function () {
    // eslint-disable-next-line no-use-before-define
    disableSync(false);
  };

  // Retreive or 'get' the sync data from the sync server
  // Input: initialGet:boolean - if true, and the server returns a 404 error code,
  //                             then a 'post' is invoked
  //        disableEmitMsg:boolean - if true, then no sync notifier message will be emitted
  //                                 (usually used for post error processing)
  //        callback:function - function that will be called when success or failure occurs
  //        shouldForce:boolean - optional, force a response from the server (even if the commit
  //                              versions match), defaults to false
  const getSyncData = function (initialGet, disableEmitMsg, callback, shouldForce) {
    const getSuccess = function (text, statusCode) {
      let responseObj = {};
      if (text && typeof text === 'object') {
        responseObj = text;
      } else if (text && typeof text === 'string') {
        try {
          responseObj = JSON.parse(text);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log('Something went wrong with parsing license data.');
          // eslint-disable-next-line no-console
          console.log('error', e);
          // eslint-disable-next-line no-console
          console.log(text);
          return;
        }
      }
      if (responseObj && ((responseObj.commitVersion > syncCommitVersion) || shouldForce)) {
        if (responseObj.data) {
          try {
            processSyncUpdate(JSON.parse(responseObj.data));
          } catch (e) {
            // eslint-disable-next-line no-console
            console.log('failed to parse response data from server', responseObj.data);
            // eslint-disable-next-line no-console
            console.log(e);
          }
        }
        syncCommitVersion = responseObj.commitVersion;
        (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .chromeStorageSetHelper */ .rJ)(syncCommitVersionKey, responseObj.commitVersion);
        (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .chromeStorageSetHelper */ .rJ)(syncPreviousDataKey, responseObj.data);
        pendingPostData = false; // reset in case an update is received from another extension
        (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .chromeStorageSetHelper */ .rJ)(syncPendingPostDataKey, pendingPostData);
      }
      if (!disableEmitMsg) {
        syncNotifier.emit('sync.data.receieved');
      }
      if (typeof callback === 'function') {
        callback(statusCode);
      }
    };

    const getFailure = function (statusCode, textStatus, responseJSON) {
      lastGetStatusCode = statusCode;
      lastGetErrorResponse = responseJSON;
      if (initialGet && statusCode === 404) {
        // eslint-disable-next-line no-use-before-define
        postDataSync(callback, initialGet);
        // now that the initial post is complete, enable Sync (add listeners, etc.)
        // with 'initialGet' now set to false
        // eslint-disable-next-line no-use-before-define
        enableSync();
        return;
      }
      if (initialGet && !disableEmitMsg) {
        syncNotifier.emit('sync.data.getting.error.initial.fail', statusCode);
      } else if (!disableEmitMsg) {
        syncNotifier.emit('sync.data.getting.error', statusCode, responseJSON);
        if (statusCode === 403) {
          process403ErrorCode();
        }
      }
      if (typeof callback === 'function') {
        callback(statusCode);
      }
    };

    if (!disableEmitMsg) {
      syncNotifier.emit('sync.data.getting');
    }
    lastGetStatusCode = 200;
    lastGetErrorResponse = {};
    // eslint-disable-next-line no-use-before-define
    requestSyncData(getSuccess, getFailure, undefined, shouldForce);
  };

  const getAllExtensionNames = function () {
    return new Promise((resolve) => {
      syncNotifier.emit('extension.names.downloading');
      fetch(`${_check__WEBPACK_IMPORTED_MODULE_2__/* .License.MAB_CONFIG.syncURL */ .Cz.MAB_CONFIG.syncURL}/devices/list`, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
          'X-GABSYNC-PARAMS': JSON.stringify({
            extensionGUID: _telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY.userId */ .C.userId,
            licenseId: _check__WEBPACK_IMPORTED_MODULE_2__/* .License.get */ .Cz.get().licenseId,
            extInfo: getExtensionInfo(),
          }),
        },
      })
        .then(async (response) => {
          if (response.ok) {
            const responseObj = await response.json();
            syncNotifier.emit('extension.names.downloaded', responseObj);
            resolve(responseObj);
            return;
          }
          if (response.status === 404) {
            syncNotifier.emit('extension.names.downloading.error', response.status);
            const text = await response.text();
            resolve(text);
            return;
          }
          (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .log */ .cM)('sync server error: ', response);
        })
        .catch((error) => {
          syncNotifier.emit('extension.names.downloading.error');
          (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .log */ .cM)('sync server returned error: ', error);
        });
    });
  };

  const setCurrentExtensionName = function (newName) {
    if (newName && newName.trim().length >= 1 && newName.trim().length <= 50) {
      currentExtensionName = newName.trim();
      (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .chromeStorageSetHelper */ .rJ)(syncExtensionNameKey, currentExtensionName);
      const thedata = {
        deviceName: currentExtensionName,
        extensionGUID: _telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY.userId */ .C.userId,
        licenseId: _check__WEBPACK_IMPORTED_MODULE_2__/* .License.get */ .Cz.get().licenseId,
        extInfo: getExtensionInfo(),
      };
      syncNotifier.emit('extension.name.updating');
      (0,_fetch_util__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(`${_check__WEBPACK_IMPORTED_MODULE_2__/* .License.MAB_CONFIG.syncURL */ .Cz.MAB_CONFIG.syncURL}/devices/add`, thedata)
        .then((response) => {
          if (response.ok) {
            syncNotifier.emit('extension.name.updated');
          } else {
            syncNotifier.emit('extension.name.updated.error', response.status);
          }
        })
        .catch((error) => {
          syncNotifier.emit('extension.name.updated.error');
          (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .log */ .cM)('message server returned error: ', error);
        });
    }
  };
  const removeExtensionName = function (extensionName, extensionGUID) {
    const thedata = {
      deviceName: extensionName,
      extensionGUID,
      licenseId: _check__WEBPACK_IMPORTED_MODULE_2__/* .License.get */ .Cz.get().licenseId,
      extInfo: getExtensionInfo(),
    };
    syncNotifier.emit('extension.name.remove');
    (0,_fetch_util__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(`${_check__WEBPACK_IMPORTED_MODULE_2__/* .License.MAB_CONFIG.syncURL */ .Cz.MAB_CONFIG.syncURL}/devices/remove`, thedata)
      .then((response) => {
        if (response.ok) {
          if (extensionName === currentExtensionName) {
            currentExtensionName = '';
            (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .chromeStorageSetHelper */ .rJ)(syncExtensionNameKey, currentExtensionName);
          }
          syncNotifier.emit('extension.name.removed');
        } else {
          syncNotifier.emit('extension.name.remove.error', response.status);
        }
      })
      .catch((error) => {
        syncNotifier.emit('extension.name.remove.error');
        (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .log */ .cM)('message server returned error: ', error);
      });
  };


  const removeCurrentExtensionName = function () {
    removeExtensionName(currentExtensionName, _telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY.userId */ .C.userId);
  };

  // return all of the current user configurable extension options (settings, Prefs, filter list
  // sub, custom rules, themes, etc. Since a comparison will be done in this, and other sync'd
  // extensions, the payload should only contain settings, Prefs, etc and not data that can change
  // from browser to brower, version to version, etc.
  const getSyncInformation = async function () {
    const payload = {};
    payload.settings = (0,_prefs_settings__WEBPACK_IMPORTED_MODULE_5__/* .getSettings */ .Gw)();
    payload.subscriptions = {};
    const subscriptions = await _subscriptionadapter__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getSubscriptionsMinusText */ .Z.getSubscriptionsMinusText();

    for (const id in subscriptions) {
      if (subscriptions[id].subscribed) {
        const { adblockId } = subscriptions[id];
        let { mv2URL: url } = subscriptions[id];
        if (!url) {
          ({ url } = subscriptions[id]);
        }
        if (sendFilterListByURL.includes(adblockId)) {
          payload.subscriptions[`url:${url}`] = url;
        } else {
          payload.subscriptions[adblockId] = url;
        }
      }
    }
    let userFilters = await getUserFilters();
    userFilters = userFilters.map(filter => filter.text).sort();
    payload.customFilterRules = cleanCustomFilter(userFilters);

    const metaDataArr = await getCustomFilterMetaData();
    if (metaDataArr && metaDataArr.length) {
      const ruleMetaData = {};
      for (let inx = 0; inx < metaDataArr.length; inx++) {
        if (metaDataArr[inx].text && metaDataArr[inx].metaData) {
          ruleMetaData[metaDataArr[inx].text] = metaDataArr[inx].metaData;
        }
      }
      payload.customRuleMetaData = ruleMetaData;
    }
    payload.prefs = {};
    for (const inx in abpPrefPropertyNames) {
      const name = abpPrefPropertyNames[inx];
      payload.prefs[name] = Prefs[name];
    }
    // since we no long use the 'show_statsinpopup' property on the |Prefs| object,
    // manually set it using the new 'show_statsinpopup' property on the Settings object
    // for backward compatability
    payload.prefs.show_statsinpopup = (0,_prefs_settings__WEBPACK_IMPORTED_MODULE_5__/* .getSettings */ .Gw)().display_menu_stats;
    payload.channels = {};
    const guide = channels.getGuide();
    for (const id in guide) {
      payload.channels[guide[id].name] = guide[id].enabled;
    }
    return payload;
  };

  const postDataSync = async function (callback, initialGet) {
    if (!(0,_prefs_settings__WEBPACK_IMPORTED_MODULE_5__/* .getSettings */ .Gw)().sync_settings) {
      return;
    }
    const payload = await getSyncInformation();
    const thedata = {
      data: JSON.stringify(payload),
      commitVersion: syncCommitVersion,
      extensionGUID: _telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY.userId */ .C.userId,
      licenseId: _check__WEBPACK_IMPORTED_MODULE_2__/* .License.get */ .Cz.get().licenseId,
      extInfo: getExtensionInfo(),
    };
    browser.storage.local.get(syncPreviousDataKey).then((response) => {
      const previousData = response[syncPreviousDataKey] || '{}';
      if (objectComparison(payload, JSON.parse(previousData))) {
        return;
      }
      syncNotifier.emit('post.data.sending');
      lastPostStatusCode = 200;
      pendingPostData = false;
      (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .chromeStorageSetHelper */ .rJ)(syncPendingPostDataKey, pendingPostData);
      (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .log */ .cM)('sending sync \'payload\' to server', thedata);
      (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .log */ .cM)('sending sync \'thedata\' to server', payload);
      (0,_fetch_util__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_check__WEBPACK_IMPORTED_MODULE_2__/* .License.MAB_CONFIG.syncURL */ .Cz.MAB_CONFIG.syncURL, thedata).then((postResponse) => {
        lastPostStatusCode = postResponse.status;
        if (postResponse.ok) {
          postResponse.json().then((responseObj) => {
            if (responseObj && responseObj.commitVersion > syncCommitVersion) {
              syncCommitVersion = responseObj.commitVersion;
              (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .chromeStorageSetHelper */ .rJ)(syncCommitVersionKey, responseObj.commitVersion);
            }
            (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .chromeStorageSetHelper */ .rJ)(syncPreviousDataKey, responseObj.data);
            if (typeof callback === 'function') {
              callback();
            }
            syncNotifier.emit('post.data.sent');
          });
        } else {
          syncNotifier.emit('post.data.sent.error', postResponse.status, initialGet);
          lastPostStatusCode = postResponse.status;
          if (postResponse.status === 409) {
            // this extension probably had an version of the sync data
            // aka - the sync commit version was behind the sync server
            // so, undo / revert all of the user changes that were just posted
            // by doing a 'GET'
            // because we want the above error to be persisted, will set the
            // 'disableEmitMsg' to true
            getSyncData(false, true);
            return;
          }
          if (postResponse.status === 403) {
            process403ErrorCode();
          }
          // all other currently known errors (0, 401, 404, 500).
          pendingPostData = true;
          (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .chromeStorageSetHelper */ .rJ)(syncPendingPostDataKey, pendingPostData);
        }
      })
        .catch((error) => {
          syncNotifier.emit('extension.name.updated.error');
          // eslint-disable-next-line no-console
          console.log('message server returned error: ', error);
        });
    });
  };

  const processUserSyncRequest = function () {
    if (pendingPostData) {
      postDataSync();
    } else {
      getSyncData(false, false, undefined, true);
    }
  };

  const processEventChangeRequest = function () {
    if (pendingPostData) {
      postDataSync();
    } else {
      getSyncData();
    }
  };

  const postDataSyncHandler = debounced(debounceWaitTime, postDataSync);

  // Sync Listeners
  function onFilterAdded(filter, subscription, position, calledPreviously) {
    // a delay is added to allow the domain pause filters time to be saved to storage
    // otherwise the domain pause filter check below would always fail
    if (calledPreviously === undefined) {
      setTimeout(() => {
        onFilterAdded(filter, subscription, position, true);
      }, 500);
      return;
    }
    if (isPauseFilter(filter.text)) {
      return;
    }
    if (isDomainPauseFilter(filter.text)) {
      storedSyncDomainPauses.push(filter.text);
      return;
    }
    postDataSyncHandler();
  }

  function onFilterRemoved(filter) {
    if (isPauseFilter(filter.text)) {
      return;
    }
    if (isDomainPauseFilter(filter.text)) {
      const filterTextIndex = storedSyncDomainPauses.indexOf(filter.text);
      storedSyncDomainPauses = storedSyncDomainPauses.slice(filterTextIndex);
      return;
    }
    postDataSyncHandler();
  }

  // a delay is added to allow the domain pause filters time to be saved to storage
  // otherwise the domain pause filter check below would always fail
  const onFilterListsSubAdded = function (sub, calledPreviously) {
    (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .log */ .cM)('onFilterListsSubAdded', sub);
    if (calledPreviously === undefined) {
      setTimeout(() => {
        onFilterListsSubAdded(sub, true);
      }, 500);
      return;
    }
    let containsPauseFilter = false;
    if (sub.url && sub.url.startsWith('~user~') && sub._filterText.length) {
      const arrayLength = sub._filterText.length;
      for (let i = 0; i < arrayLength; i++) {
        const filter = sub._filterText[i];
        containsPauseFilter = isPauseFilter(filter);
        if (!containsPauseFilter && isDomainPauseFilter(filter)) {
          containsPauseFilter = true;
          storedSyncDomainPauses.push(filter.text);
        }
      }
    }
    if (containsPauseFilter) {
      return;
    }
    postDataSyncHandler();
  };

  const onFilterListsSubRemoved = function (sub) {
    let containsPauseFilter = false;
    if (sub.url && sub.url.startsWith('~user~') && sub._filterText.length) {
      const arrayLength = sub._filterText.length;
      for (let i = 0; i < arrayLength; i++) {
        const filter = sub._filterText[i];
        containsPauseFilter = isPauseFilter(filter);
        if (!containsPauseFilter && isDomainPauseFilter(filter.text)) {
          containsPauseFilter = true;
          const filterTextIndex = storedSyncDomainPauses.indexOf(filter.text);
          storedSyncDomainPauses = storedSyncDomainPauses.slice(filterTextIndex);
          return;
        }
      }
    }
    if (containsPauseFilter) {
      return;
    }
    postDataSyncHandler();
  };

  const onSettingsChanged = function (name) {
    if (name === 'sync_settings') {
      return; // don't process any sync setting changes
    }
    postDataSyncHandler();
  };

  const updateNetworkStatus = function () {
    if (navigator.onLine) {
      processEventChangeRequest();
    }
  };

  function processFetchRequest(commitVersion) {
    let fetchCommitVersion = commitVersion;
    if (!fetchCommitVersion) {
      return;
    }
    if (typeof fetchCommitVersion === 'string') {
      fetchCommitVersion = Number.parseInt(fetchCommitVersion, 10);
    }
    if (fetchCommitVersion === syncCommitVersion) {
      return;
    }
    getSyncData();
  }

  function enablePubNub() {
    pubnub = new PubNub({
      subscribeKey: _check__WEBPACK_IMPORTED_MODULE_2__/* .License.MAB_CONFIG.subscribeKey */ .Cz.MAB_CONFIG.subscribeKey,
      authKey: `${_check__WEBPACK_IMPORTED_MODULE_2__/* .License.get */ .Cz.get().licenseId}_${_telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY.userId */ .C.userId}`,
      ssl: true,
    });

    pubnub.addListener({
      message(response) {
        if (response.message && response.message && response.message.commitVersion) {
          processFetchRequest(response.message.commitVersion);
        }
      },
      status(msg) {
        if (msg.category === 'PNNetworkUpCategory') {
          pubnub.subscribe({
            channels: [_check__WEBPACK_IMPORTED_MODULE_2__/* .License.get */ .Cz.get().licenseId],
          });
        }
        if (msg.error === true && msg.category && msg.operation) {
          _servermessages__WEBPACK_IMPORTED_MODULE_6__/* ["default"].recordGeneralMessage */ .Z.recordGeneralMessage('pubnub_error', undefined, { licenseId: _check__WEBPACK_IMPORTED_MODULE_2__/* .License.get */ .Cz.get().licenseId, category: msg.category, operation: msg.operation });
        }
      },
    });

    pubnub.subscribe({
      channels: [_check__WEBPACK_IMPORTED_MODULE_2__/* .License.get */ .Cz.get().licenseId],
    });
  }

  const enableSync = function (initialGet) {
    (0,_prefs_settings__WEBPACK_IMPORTED_MODULE_5__/* .setSetting */ .Lt)('sync_settings', true);
    const addListeners = function () {
      syncNotifier.on('sync.data.getting.error', onSyncDataGettingErrorAddLogEntry);
      syncNotifier.on('sync.data.getting.error.initial.fail', onSyncDataGettingErrorInitialFailAddLogEntry);
      syncNotifier.on('extension.names.downloading', onExtensionNamesDownloadingAddLogEntry);
      syncNotifier.on('sync.data.receieved', onSyncDataReceievedAddLogEntry);
      syncNotifier.on('sync.data.getting', onSyncDataGettingAddLogEntry);
      syncNotifier.on('post.data.sent.error', onPostDataSentErrorAddLogEntry);
      syncNotifier.on('post.data.sending', onPostDataSendingAddLogEntry);
      syncNotifier.on('post.data.sent', onPostDataSentAddLogEntry);
      syncNotifier.on('extension.name.remove.error', onExtensionNamesRemoveErrorAddLogEntry);
      syncNotifier.on('extension.name.removed', onExtensionNameRemovedAddLogEntry);
      syncNotifier.on('extension.name.remove', onExtensionNameRemoveAddLogEntry);
      syncNotifier.on('extension.name.updated.error', onExtensionNameUpdatedErrorAddLogEntry);
      syncNotifier.on('extension.name.updated', onExtensionNameUpdatedAddLogEntry);
      syncNotifier.on('extension.name.updating', onExtensionNameUpdatingAddLogEntry);
      syncNotifier.on('extension.names.downloaded', onExtensionNamesDownloadedAddLogEntry);
      syncNotifier.on('extension.names.downloading.error', onExtensionNamesDownloadingErrorAddLogEntry);

      // eslint-disable-next-line no-use-before-define
      _check__WEBPACK_IMPORTED_MODULE_2__/* .License.licenseNotifier.on */ .Cz.licenseNotifier.on('license.expired', processDisableSync);

      _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.subscriptions.onAdded.addListener(onFilterListsSubAdded);
      _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.subscriptions.onRemoved.addListener(onFilterListsSubRemoved);

      _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.onAdded.addListener(onFilterAdded);
      _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.onRemoved.addListener(onFilterRemoved);

      _prefs_settings__WEBPACK_IMPORTED_MODULE_5__/* .settingsNotifier.on */ .Pg.on('settings.changed', onSettingsChanged);
      _channels__WEBPACK_IMPORTED_MODULE_3__/* .channelsNotifier.on */ .l.on('channels.changed', postDataSyncHandler);

      for (const inx in abpPrefPropertyNames) {
        const name = abpPrefPropertyNames[inx];
        Prefs.on(name, postDataSyncHandler);
      }
      // wait a moment at start to allow all of the backgound scripts to load
      setTimeout(() => {
        enablePubNub();
      }, 1000);

      window.addEventListener('online', updateNetworkStatus);
      window.addEventListener('offline', updateNetworkStatus);
    };

    if (initialGet) {
      SyncService.getSyncData(initialGet, false, (response) => {
        if (response === 200 || response === 304) {
          addListeners();
        }
      });
      return;
    }

    addListeners();
  };

  function disablePubNub() {
    if (!pubnub) {
      return;
    }

    pubnub.removeAllListeners();
    pubnub.unsubscribeAll();
    pubnub = undefined;
  }

  const disableSync = function (removeName) {
    (0,_prefs_settings__WEBPACK_IMPORTED_MODULE_5__/* .setSetting */ .Lt)('sync_settings', false);
    syncCommitVersion = 0;
    disablePubNub();
    _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.subscriptions.onAdded.removeListener(onFilterListsSubAdded);
    _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.subscriptions.onRemoved.removeListener(onFilterListsSubRemoved);

    _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.onAdded.removeListener(onFilterAdded);
    _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_1__.filters.onRemoved.removeListener(onFilterRemoved);

    _prefs_settings__WEBPACK_IMPORTED_MODULE_5__/* .settingsNotifier.off */ .Pg.off('settings.changed', onSettingsChanged);
    _channels__WEBPACK_IMPORTED_MODULE_3__/* .channelsNotifier.off */ .l.off('channels.changed', postDataSyncHandler);

    for (const inx in abpPrefPropertyNames) {
      const name = abpPrefPropertyNames[inx];
      Prefs.off(name, postDataSyncHandler);
    }

    storedSyncDomainPauses = [];
    if (removeName) {
      removeCurrentExtensionName();

      currentExtensionName = '';
      (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .chromeStorageSetHelper */ .rJ)(syncExtensionNameKey, currentExtensionName);
    }

    syncNotifier.off('sync.data.getting.error', onSyncDataGettingErrorAddLogEntry);
    syncNotifier.off('sync.data.getting.error.initial.fail', onSyncDataGettingErrorInitialFailAddLogEntry);
    syncNotifier.off('extension.names.downloading', onExtensionNamesDownloadingAddLogEntry);
    syncNotifier.off('sync.data.receieved', onSyncDataReceievedAddLogEntry);
    syncNotifier.off('sync.data.getting', onSyncDataGettingAddLogEntry);
    syncNotifier.off('post.data.sent.error', onPostDataSentErrorAddLogEntry);
    syncNotifier.off('post.data.sending', onPostDataSendingAddLogEntry);
    syncNotifier.off('post.data.sent', onPostDataSentAddLogEntry);
    syncNotifier.off('extension.name.remove.error', onExtensionNamesRemoveErrorAddLogEntry);
    syncNotifier.off('extension.name.removed', onExtensionNameRemovedAddLogEntry);
    syncNotifier.off('extension.name.remove', onExtensionNameRemoveAddLogEntry);
    syncNotifier.off('extension.name.updated.error', onExtensionNameUpdatedErrorAddLogEntry);
    syncNotifier.off('extension.name.updated', onExtensionNameUpdatedAddLogEntry);
    syncNotifier.off('extension.name.updating', onExtensionNameUpdatingAddLogEntry);
    syncNotifier.off('extension.names.downloaded', onExtensionNamesDownloadedAddLogEntry);
    syncNotifier.off('extension.names.downloading.error', onExtensionNamesDownloadingErrorAddLogEntry);

    // eslint-disable-next-line no-use-before-define
    _check__WEBPACK_IMPORTED_MODULE_2__/* .License.licenseNotifier.off */ .Cz.licenseNotifier.off('license.expired', processDisableSync);
    window.removeEventListener('online', updateNetworkStatus);
    window.removeEventListener('offline', updateNetworkStatus);
  };

  const processDisableSync = function () {
    disableSync(true);
  };

  // Retreive the sync data from the sync server
  // Input: successCallback:function - function that will be called when success occurs, the
  //                                   callback will be provided the response data
  //        errorCallback:function - function that will be called when  failure occurs, the
  //                                 callback will be provided the error code
  //        totalAttempts:integer - the number of 'get' attempts made (only used internally by
  //                               the retry logic)
  //        shouldForce:boolean - optional, force a response from the server (even if the commit
  //                              versions match), defaults to false
  const requestSyncData = function (successCallback, errorCallback, totalAttempts, shouldForce) {
    let attemptCount = totalAttempts;
    if (!attemptCount) {
      attemptCount = 1;
    } else {
      attemptCount += 1;
    }
    const forceParam = shouldForce || false;

    fetch(_check__WEBPACK_IMPORTED_MODULE_2__/* .License.MAB_CONFIG.syncURL */ .Cz.MAB_CONFIG.syncURL, {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'X-GABSYNC-PARAMS': JSON.stringify({
          extensionGUID: _telemetry_background__WEBPACK_IMPORTED_MODULE_0__/* .TELEMETRY.userId */ .C.userId,
          licenseId: _check__WEBPACK_IMPORTED_MODULE_2__/* .License.get */ .Cz.get().licenseId,
          commitVersion: syncCommitVersion,
          force: forceParam,
          extInfo: getExtensionInfo(),
        }),
      },
    })
      .then(async (response) => {
        if (response.ok && typeof successCallback === 'function') {
          const text = await response.text();
          successCallback(text, response.status);
        }
        if (!response.ok) {
          if ((response.status !== 404 || response.status !== 403) && attemptCount < 3) {
            setTimeout(() => {
              requestSyncData(successCallback, errorCallback, attemptCount, shouldForce);
            }, 1000); // wait 1 second for retry
            return;
          }
          if (typeof errorCallback === 'function') {
            const responseObj = await response.json();
            errorCallback(response.status, response.status, responseObj);
          }
        }
      })
      .catch((error) => {
        (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_7__/* .log */ .cM)('message server returned error: ', error);
        errorCallback(error.message);
      });
  };

  _prefs_settings__WEBPACK_IMPORTED_MODULE_5__/* .settings.onload */ .Xd.onload().then(() => {
    _check__WEBPACK_IMPORTED_MODULE_2__/* .License.ready */ .Cz.ready().then(() => {
      if ((0,_prefs_settings__WEBPACK_IMPORTED_MODULE_5__/* .getSettings */ .Gw)().sync_settings) {
        browser.storage.local.get(syncCommitVersionKey).then((response) => {
          syncCommitVersion = response[syncCommitVersionKey] || 0;
          browser.storage.local.get(syncPendingPostDataKey).then((postDataResponse) => {
            pendingPostData = postDataResponse[syncPendingPostDataKey] || false;
            processEventChangeRequest();
            enableSync();
            migrateSyncLog();
          });
        });
      }

      browser.storage.local.get(syncExtensionNameKey).then((response) => {
        currentExtensionName = response[syncExtensionNameKey] || '';
      });
    });
  });

  return {
    enableSync,
    disableSync,
    getSyncData,
    processFetchRequest,
    getCurrentExtensionName,
    getAllExtensionNames,
    setCurrentExtensionName,
    removeCurrentExtensionName,
    removeExtensionName,
    syncNotifier,
    getCommitVersion,
    setCommitVersion,
    getLastPostStatusCode,
    resetLastPostStatusCode,
    setLastPostStatusCode,
    getLastGetStatusCode,
    resetLastGetStatusCode,
    setLastGetStatusCode,
    getLastGetErrorResponse,
    resetLastGetErrorResponse,
    setLastGetErrorResponse,
    resetAllErrors,
    getSyncLog,
    deleteSyncLog,
    processUserSyncRequest,
    processEventChangeRequest,
    addSyncLogText,
  };
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyncService);


/***/ }),

/***/ 2630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gw": () => (/* binding */ getSettings),
/* harmony export */   "Lt": () => (/* binding */ setSetting),
/* harmony export */   "Pg": () => (/* binding */ settingsNotifier),
/* harmony export */   "Xd": () => (/* binding */ settings),
/* harmony export */   "uR": () => (/* binding */ isValidTheme)
/* harmony export */ });
/* harmony import */ var _vendor_adblockplusui_adblockpluschrome_lib_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2901);
/* harmony import */ var _utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2028);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser */





const settingsNotifier = new _vendor_adblockplusui_adblockpluschrome_lib_events__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .v();
const abpPrefPropertyNames = ['show_statsinicon', 'shouldShowBlockElementMenu', 'show_devtools_panel'];
const validThemes = ['default_theme', 'dark_theme', 'watermelon_theme', 'solarized_theme', 'solarized_light_theme', 'rebecca_purple_theme', 'ocean_theme', 'sunshine_theme'];


// OPTIONAL SETTINGS
function Settings() {
  this.settingsKey = 'settings';
  this.defaults = {
    debug_logging: false,
    youtube_channel_whitelist: true,
    youtube_manage_subscribed: true,
    show_advanced_options: false,
    show_block_counts_help_link: true,
    display_menu_stats: true,
    show_survey: true,
    local_cdn: false,
    picreplacement: false,
    twitch_hiding: false,
    onpageMessages: true,
    color_themes: {
      popup_menu: 'default_theme',
      options_page: 'default_theme',
    },
  };
  const that = this;
  this.init = new Promise(((resolve) => {
    browser.storage.local.get(that.settingsKey).then((response) => {
      const settings = response.settings || {};
      that.data = (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .l7)(that.defaults, settings);
      if (settings.debug_logging) {
        (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_0__/* .logging */ .PW)(true);
      }
      if ('managed' in browser.storage) {
        browser.storage.managed.get(null).then((items) => {
          for (const key in items) {
            if (key === 'suppress_update_page' || key === 'suppress_surveys' || key === 'suppress_first_run_page') {
              that.data[key] = items[key];
            }
          }
          resolve();
        },
        // Opera and FF doesn't support browser.storage.managed, but instead of simply
        // removing the API, it gives an asynchronous error which we ignore here.
        () => {
          resolve();
        });
      } else {
        resolve();
      }
    });
  })).then(() => {
    (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_0__/* .log */ .cM)('\n===SETTINGS FINISHED LOADING===\n\n');
  });
}

Settings.prototype = {
  set(name, isEnabled, callback) {
    const originalValue = this.data[name];
    // Firefox passes weak references to objects, so in case isEnabled is an object,
    // we need to store a local copy of the object
    const localIsEnabled = JSON.parse(JSON.stringify(isEnabled));
    this.data[name] = localIsEnabled;
    const that = this;

    // Don't store defaults that the user hasn't modified
    browser.storage.local.get(this.settingsKey).then((response) => {
      const storedData = response.settings || {};

      storedData[name] = localIsEnabled;
      (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_0__/* .chromeStorageSetHelper */ .rJ)(that.settingsKey, storedData);
      if (originalValue !== localIsEnabled) {
        settingsNotifier.emit('settings.changed', name, localIsEnabled, originalValue);
      }
      if (callback !== undefined && typeof callback === 'function') {
        callback();
      }
    });
  },

  getAll() {
    return this.data;
  },

  onload() {
    return this.init;
  },

};

const settings = new Settings();
settings.onload();

const getSettings = function () {
  return settings.getAll();
};

const setSetting = function (name, isEnabled, callback) {
  settings.set(name, isEnabled, callback);

  if (name === 'debug_logging') {
    (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_0__/* .logging */ .PW)(isEnabled);
  }
};

const disableSetting = function (name) {
  settings.set(name, false);
};

const isValidTheme = themeName => validThemes.includes(themeName);

// Attach methods to window
// eslint-disable-next-line no-restricted-globals
Object.assign(self, {
  disableSetting,
  getSettings,
  setSetting,
  settings,
  settingsNotifier,
  abpPrefPropertyNames,
  isValidTheme,
});


/***/ }),

/***/ 1546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2028);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, TELEMETRY,  */



// Log an 'error' message on GAB log server.
const ServerMessages = (function serverMessages() {
  // Log a message on GAB log server. The user's userid will be prepended to the
  // message.
  // If callback() is specified, call callback() after logging has completed
  const sendMessageToLogServer = function (payload, callback) {
    fetch('https://log.getadblock.com/v2/record_log.php', {
      method: 'POST',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(() => {
        if (typeof callback === 'function') {
          callback();
        }
      })
      .catch((error) => {
        (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_0__/* .log */ .cM)('message server returned error: ', error);
      });
  };

  // Log a message on GAB log server. The user's userid will be prepended to the
  // message.
  // If callback() is specified, call callback() after logging has completed
  const recordMessageWithUserID = function (msg, queryType, callback, additionalParams) {
    if (!msg || !queryType) {
      return;
    }
    const payload = {
      u: TELEMETRY.userId,
      f: TELEMETRY.flavor,
      o: TELEMETRY.os,
      l: (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_0__/* .determineUserLanguage */ .pN)(),
      t: queryType,
      v: browser.runtime.getManifest().version,
    };
    if (typeof additionalParams === 'object') {
      for (const prop in additionalParams) {
        payload[prop] = additionalParams[prop];
      }
    }
    const eventWithPayload = { event: msg, payload };
    sendMessageToLogServer(eventWithPayload, callback);
  };

  // Log a message on GAB log server.
  // If callback() is specified, call callback() after logging has completed
  const recordAnonymousMessage = function (msg, queryType, callback, additionalParams) {
    if (!msg || !queryType) {
      return;
    }
    const payload = {
      f: TELEMETRY.flavor,
      o: TELEMETRY.os,
      l: (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_0__/* .determineUserLanguage */ .pN)(),
      t: queryType,
    };
    if (typeof additionalParams === 'object') {
      for (const prop in additionalParams) {
        payload[prop] = additionalParams[prop];
      }
    }
    const eventWithPayload = { event: msg, payload };
    sendMessageToLogServer(eventWithPayload, callback);
  };

  // Log a error message on GAB log server.
  // If callback() is specified, call callback() after logging has completed
  const recordAnonymousErrorMessage = function (msg, callback, additionalParams) {
    if (!msg) {
      return;
    }
    const payload = {
      f: TELEMETRY.flavor,
      o: TELEMETRY.os,
      l: (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_0__/* .determineUserLanguage */ .pN)(),
      t: 'error',
    };
    if (typeof additionalParams === 'object') {
      for (const prop in additionalParams) {
        payload[prop] = additionalParams[prop];
      }
    }
    const eventWithPayload = { event: msg, payload };
    sendMessageToLogServer(eventWithPayload, callback);
  };

  const recordErrorMessage = function (msg, callback, additionalParams) {
    recordMessageWithUserID(msg, 'error', callback, additionalParams);
  };

  // Log an 'status' related message on GAB log server.
  const recordStatusMessage = function (msg, callback, additionalParams) {
    recordMessageWithUserID(msg, 'stats', callback, additionalParams);
  };

  // Log a 'general' message on GAB log server.
  const recordGeneralMessage = function (msg, callback, additionalParams) {
    recordMessageWithUserID(msg, 'general', callback, additionalParams);
  };

  // Log a 'adreport' message on GAB log server.
  const recordAdreportMessage = function (msg, callback, additionalParams) {
    recordMessageWithUserID(msg, 'adreport', callback, additionalParams);
  };

  // Send an error message to the backup log server. This is to be used when
  // there's fetch failure.  It may fail as well depending on the failure,
  // and state of the local computer & network
  const sendMessageToBackupLogServer = function (msg, errorMsg, queryType = 'error') {
    const payload = {
      u: TELEMETRY.userId,
      f: TELEMETRY.flavor,
      o: TELEMETRY.os,
      l: (0,_utilities_background_bg_functions__WEBPACK_IMPORTED_MODULE_0__/* .determineUserLanguage */ .pN)(),
      t: queryType,
      v: browser.runtime.getManifest().version,
      error: errorMsg,
    };
    const eventWithPayload = { event: msg, payload };
    fetch('https://192.241.161.10/v2/record_log.php', {
      method: 'POST',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventWithPayload),
    });
  };

  return {
    recordErrorMessage,
    recordAnonymousMessage,
    recordAnonymousErrorMessage,
    recordStatusMessage,
    recordGeneralMessage,
    recordAdreportMessage,
    sendMessageToBackupLogServer,
  };
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerMessages);


/***/ }),

/***/ 934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ subscriptionadapter)
});

// EXTERNAL MODULE: ./vendor/webext-sdk/dist/ewe-api.js
var ewe_api = __webpack_require__(3817);
;// CONCATENATED MODULE: ./adblock-betafish/data/betafish-subscriptions.json
const betafish_subscriptions_namespaceObject = JSON.parse('{"https://easylist-downloads.adblockplus.org/exceptionrules.txt":{"id":"0798B6A2-94A4-4ADF-89ED-BEC112FC4C7F","mv2URL":"https://easylist-downloads.adblockplus.org/exceptionrules.txt","adblockId":"acceptable_ads","index":1},"https://easylist-downloads.adblockplus.org/v3/full/exceptionrules.txt":{"id":"0798B6A2-94A4-4ADF-89ED-BEC112FC4C7F","mv2URL":"https://easylist-downloads.adblockplus.org/exceptionrules.txt","adblockId":"acceptable_ads","index":1},"https://easylist-downloads.adblockplus.org/exceptionrules-privacy-friendly.txt":{"id":"F12E0801-A00B-49DE-B1E3-52C9C4F90C8C","mv2URL":"https://easylist-downloads.adblockplus.org/exceptionrules-privacy-friendly.txt","adblockId":"acceptable_ads_privacy","index":2},"https://easylist-downloads.adblockplus.org/v3/full/exceptionrules-privacy-friendly.txt":{"id":"F12E0801-A00B-49DE-B1E3-52C9C4F90C8C","mv2URL":"https://easylist-downloads.adblockplus.org/exceptionrules-privacy-friendly.txt","adblockId":"acceptable_ads_privacy","index":2},"https://easylist-downloads.adblockplus.org/v3/full/distraction-control-video.txt":{"id":"8E2D687A-3B44-46E1-BE68-2FE5441A788E","mv2URL":"https://cdn.adblockcdn.com/filters/distraction-control-video.txt","adblockId":"distraction-control-video","index":4},"https://cdn.adblockcdn.com/filters/distraction-control-video.txt":{"id":"8E2D687A-3B44-46E1-BE68-2FE5441A788E","mv2URL":"https://cdn.adblockcdn.com/filters/distraction-control-video.txt","adblockId":"distraction-control-video","index":4},"https://easylist-downloads.adblockplus.org/v3/full/distraction-control-survey.txt":{"id":"1E7A240E-CD85-493D-BEEF-C68A6AEA1225","mv2URL":"https://cdn.adblockcdn.com/filters/distraction-control-survey.txt","adblockId":"distraction-control-survey","index":5},"https://cdn.adblockcdn.com/filters/distraction-control-survey.txt":{"id":"1E7A240E-CD85-493D-BEEF-C68A6AEA1225","mv2URL":"https://cdn.adblockcdn.com/filters/distraction-control-survey.txt","adblockId":"distraction-control-survey","index":5},"https://easylist-downloads.adblockplus.org/v3/full/distraction-control-newsletter.txt":{"id":"D5561090-9ADB-4EEE-AA81-101B645D9F4F","mv2URL":"https://cdn.adblockcdn.com/filters/distraction-control-newsletter.txt","adblockId":"distraction-control-newsletter","index":6},"https://cdn.adblockcdn.com/filters/distraction-control-newsletter.txt":{"id":"D5561090-9ADB-4EEE-AA81-101B645D9F4F","mv2URL":"https://cdn.adblockcdn.com/filters/distraction-control-newsletter.txt","adblockId":"distraction-control-newsletter","index":6},"https://easylist-downloads.adblockplus.org/v3/full/distraction-control-push.txt":{"id":"3B85CD3F-553A-45D1-AA38-6288E1C4C7B9","mv2URL":"https://cdn.adblockcdn.com/filters/distraction-control-push.txt","adblockId":"distraction-control-push","index":7},"https://cdn.adblockcdn.com/filters/distraction-control-push.txt":{"id":"3B85CD3F-553A-45D1-AA38-6288E1C4C7B9","mv2URL":"https://cdn.adblockcdn.com/filters/distraction-control-push.txt","adblockId":"distraction-control-push","index":7},"https://easylist-downloads.adblockplus.org/v3/full/nocoin.txt":{"url":"https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt","adblockId":"bitcoin_mining_protection","id":"9CC3AF4D-EB89-4100-97C6-4EEE4F8A2E82","index":8},"https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt":{"url":"https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt","adblockId":"bitcoin_mining_protection","id":"9CC3AF4D-EB89-4100-97C6-4EEE4F8A2E82","index":8},"https://easylist-downloads.adblockplus.org/antiadblockfilters.txt":{"url":"https://easylist-downloads.adblockplus.org/antiadblockfilters.txt","adblockId":"warning_removal","index":9},"https://easylist-downloads.adblockplus.org/v3/full/abpindo+easylist.txt":{"id":"B7D76369-DD19-4602-80E8-2E32DDB490AC","mv2URL":"https://easylist-downloads.adblockplus.org/abpindo+easylist.txt","adblockId":"easylist_plus_indonesian","index":13},"https://easylist-downloads.adblockplus.org/abpindo+easylist.txt":{"id":"B7D76369-DD19-4602-80E8-2E32DDB490AC","mv2URL":"https://easylist-downloads.adblockplus.org/abpindo+easylist.txt","adblockId":"easylist_plus_indonesian","index":13},"https://easylist-downloads.adblockplus.org/v3/full/abpvn+easylist.txt":{"id":"1C571EC7-6E52-47CC-B04A-4B3008D0AEBE","mv2URL":"https://easylist-downloads.adblockplus.org/abpvn+easylist.txt","adblockId":"easylist_plus_vietnamese","index":14},"https://easylist-downloads.adblockplus.org/abpvn+easylist.txt":{"id":"1C571EC7-6E52-47CC-B04A-4B3008D0AEBE","mv2URL":"https://easylist-downloads.adblockplus.org/abpvn+easylist.txt","adblockId":"easylist_plus_vietnamese","index":14},"https://easylist-downloads.adblockplus.org/v3/full/bulgarian_list+easylist.txt":{"id":"E22C3B40-DC90-49D7-8BF5-E60904AB159A","mv2URL":"https://easylist-downloads.adblockplus.org/bulgarian_list+easylist.txt","adblockId":"easylist_plus_bulgarian","index":15},"https://easylist-downloads.adblockplus.org/bulgarian_list+easylist.txt":{"id":"E22C3B40-DC90-49D7-8BF5-E60904AB159A","mv2URL":"https://easylist-downloads.adblockplus.org/bulgarian_list+easylist.txt","adblockId":"easylist_plus_bulgarian","index":15},"https://easylist-downloads.adblockplus.org/easylist.txt":{"id":"8C13E995-8F06-4927-BEA7-6C845FB7EEBF","mv2URL":"https://easylist-downloads.adblockplus.org/easylist.txt","adblockId":"easylist","index":16},"https://easylist-downloads.adblockplus.org/v3/full/easylist.txt":{"id":"8C13E995-8F06-4927-BEA7-6C845FB7EEBF","mv2URL":"https://easylist-downloads.adblockplus.org/easylist.txt","adblockId":"easylist","index":16},"https://easylist-downloads.adblockplus.org/v3/full/easylistchina+easylist.txt":{"id":"9BD3EA2F-889D-4CC3-B680-CF484F2BD1B9","mv2URL":"https://easylist-downloads.adblockplus.org/easylistchina+easylist.txt","adblockId":"chinese","index":17},"https://easylist-downloads.adblockplus.org/easylistchina+easylist.txt":{"id":"9BD3EA2F-889D-4CC3-B680-CF484F2BD1B9","mv2URL":"https://easylist-downloads.adblockplus.org/easylistchina+easylist.txt","adblockId":"chinese","index":17},"https://easylist-downloads.adblockplus.org/v3/full/easylistczechslovak+easylist.txt":{"id":"4B6CE485-30AB-4213-AD17-504B3F2D2825","mv2URL":"https://easylist-downloads.adblockplus.org/easylistczechslovak+easylist.txt","adblockId":"czech","index":18},"https://easylist-downloads.adblockplus.org/easylistczechslovak+easylist.txt":{"id":"4B6CE485-30AB-4213-AD17-504B3F2D2825","mv2URL":"https://easylist-downloads.adblockplus.org/easylistczechslovak+easylist.txt","adblockId":"czech","index":18},"https://easylist-downloads.adblockplus.org/v3/full/easylistdutch+easylist.txt":{"id":"A4B88FB6-E5E5-417F-8A49-20B8244995FD","mv2URL":"https://easylist-downloads.adblockplus.org/easylistdutch+easylist.txt","adblockId":"dutch","index":19},"https://easylist-downloads.adblockplus.org/easylistdutch+easylist.txt":{"id":"A4B88FB6-E5E5-417F-8A49-20B8244995FD","mv2URL":"https://easylist-downloads.adblockplus.org/easylistdutch+easylist.txt","adblockId":"dutch","index":19},"https://easylist-downloads.adblockplus.org/v3/full/easylistgermany+easylist.txt":{"id":"0CD3D105-D3B3-4652-8489-94163DE9A08F","mv2URL":"https://easylist-downloads.adblockplus.org/easylistgermany+easylist.txt","adblockId":"easylist_plus_german","index":20},"https://easylist-downloads.adblockplus.org/easylistgermany+easylist.txt":{"id":"0CD3D105-D3B3-4652-8489-94163DE9A08F","mv2URL":"https://easylist-downloads.adblockplus.org/easylistgermany+easylist.txt","adblockId":"easylist_plus_german","index":20},"https://easylist-downloads.adblockplus.org/v3/full/israellist+easylist.txt":{"id":"07549D8B-F06F-4D9D-A567-929AA59E9D1D","mv2URL":"https://easylist-downloads.adblockplus.org/israellist+easylist.txt","adblockId":"israeli","index":21},"https://easylist-downloads.adblockplus.org/israellist+easylist.txt":{"id":"07549D8B-F06F-4D9D-A567-929AA59E9D1D","mv2URL":"https://easylist-downloads.adblockplus.org/israellist+easylist.txt","adblockId":"israeli","index":21},"https://easylist-downloads.adblockplus.org/v3/full/easylistitaly+easylist.txt":{"id":"BBC07C05-66F1-42EC-BD4D-7AD495FAC84B","mv2URL":"https://easylist-downloads.adblockplus.org/easylistitaly+easylist.txt","adblockId":"italian","index":22},"https://easylist-downloads.adblockplus.org/easylistitaly+easylist.txt":{"id":"BBC07C05-66F1-42EC-BD4D-7AD495FAC84B","mv2URL":"https://easylist-downloads.adblockplus.org/easylistitaly+easylist.txt","adblockId":"italian","index":22},"https://easylist-downloads.adblockplus.org/v3/full/easylistlithuania+easylist.txt":{"id":"CBE50FA2-DE3F-480C-B1D7-04289391C033","mv2URL":"https://easylist-downloads.adblockplus.org/easylistlithuania+easylist.txt","adblockId":"easylist_plus_lithuania","index":23},"https://easylist-downloads.adblockplus.org/easylistlithuania+easylist.txt":{"id":"CBE50FA2-DE3F-480C-B1D7-04289391C033","mv2URL":"https://easylist-downloads.adblockplus.org/easylistlithuania+easylist.txt","adblockId":"easylist_plus_lithuania","index":23},"https://easylist-downloads.adblockplus.org/v3/full/easylistpolish+easylist.txt":{"id":"3D2C09D0-DF1C-4C8E-9947-A23DCEAF8F8B","mv2URL":"https://easylist-downloads.adblockplus.org/easylistpolish+easylist.txt","adblockId":"easylist_plus_polish","index":24},"https://easylist-downloads.adblockplus.org/easylistpolish+easylist.txt":{"id":"3D2C09D0-DF1C-4C8E-9947-A23DCEAF8F8B","mv2URL":"https://easylist-downloads.adblockplus.org/easylistpolish+easylist.txt","adblockId":"easylist_plus_polish","index":24},"https://easylist-downloads.adblockplus.org/v3/full/easylistportuguese+easylist.txt":{"id":"14DF7BE6-9675-4E07-987A-D8A1000F9FEF","mv2URL":"https://easylist-downloads.adblockplus.org/easylistportuguese+easylist.txt","adblockId":"easylist_plus_portuguese","index":25},"https://easylist-downloads.adblockplus.org/easylistportuguese+easylist.txt":{"id":"14DF7BE6-9675-4E07-987A-D8A1000F9FEF","mv2URL":"https://easylist-downloads.adblockplus.org/easylistportuguese+easylist.txt","adblockId":"easylist_plus_portuguese","index":25},"https://easylist-downloads.adblockplus.org/v3/full/easylistspanish+easylist.txt":{"id":"C3D13A19-3E8D-41F5-AD64-0F3B36DDE128","mv2URL":"https://easylist-downloads.adblockplus.org/easylistspanish+easylist.txt","adblockId":"easylist_plus_spanish","index":26},"https://easylist-downloads.adblockplus.org/easylistspanish+easylist.txt":{"id":"C3D13A19-3E8D-41F5-AD64-0F3B36DDE128","mv2URL":"https://easylist-downloads.adblockplus.org/easylistspanish+easylist.txt","adblockId":"easylist_plus_spanish","index":26},"https://easylist-downloads.adblockplus.org/v3/full/indianlist+easylist.txt":{"id":"25A31255-AB36-48A4-9086-06192DE71119","mv2URL":"https://easylist-downloads.adblockplus.org/indianlist+easylist.txt","adblockId":"easylist_plus_indian","index":27},"https://easylist-downloads.adblockplus.org/indianlist+easylist.txt":{"id":"25A31255-AB36-48A4-9086-06192DE71119","mv2URL":"https://easylist-downloads.adblockplus.org/indianlist+easylist.txt","adblockId":"easylist_plus_indian","index":27},"https://easylist-downloads.adblockplus.org/v3/full/koreanlist+easylist.txt":{"id":"2708BCB7-2E45-41BC-B517-1730CF532F89","mv2URL":"https://easylist-downloads.adblockplus.org/koreanlist+easylist.txt","adblockId":"easylist_plun_korean","index":28},"https://easylist-downloads.adblockplus.org/koreanlist+easylist.txt":{"id":"2708BCB7-2E45-41BC-B517-1730CF532F89","mv2URL":"https://easylist-downloads.adblockplus.org/koreanlist+easylist.txt","adblockId":"easylist_plun_korean","index":28},"https://easylist-downloads.adblockplus.org/v3/full/latvianlist+easylist.txt":{"id":"950C88EA-2DD1-42E3-B2A2-2DF2ED15563A","mv2URL":"https://easylist-downloads.adblockplus.org/latvianlist+easylist.txt","adblockId":"latvian","index":29},"https://easylist-downloads.adblockplus.org/latvianlist+easylist.txt":{"id":"950C88EA-2DD1-42E3-B2A2-2DF2ED15563A","mv2URL":"https://easylist-downloads.adblockplus.org/latvianlist+easylist.txt","adblockId":"latvian","index":29},"https://easylist-downloads.adblockplus.org/v3/full/liste_ar+liste_fr+easylist.txt":{"id":"684A25C6-6B5D-458A-8A2B-BAC0A12B0B15","mv2URL":"https://easylist-downloads.adblockplus.org/liste_ar+liste_fr+easylist.txt","adblockId":"easylist_plus_arabic_plus_french","index":30},"https://easylist-downloads.adblockplus.org/liste_ar+liste_fr+easylist.txt":{"id":"684A25C6-6B5D-458A-8A2B-BAC0A12B0B15","mv2URL":"https://easylist-downloads.adblockplus.org/liste_ar+liste_fr+easylist.txt","adblockId":"easylist_plus_arabic_plus_french","index":30},"https://easylist-downloads.adblockplus.org/v3/full/liste_fr+easylist.txt":{"id":"2CEA1481-C29C-44F1-A084-A2A019533797","mv2URL":"https://easylist-downloads.adblockplus.org/liste_fr+easylist.txt","adblockId":"easylist_plus_french","index":31},"https://easylist-downloads.adblockplus.org/liste_fr+easylist.txt":{"id":"2CEA1481-C29C-44F1-A084-A2A019533797","mv2URL":"https://easylist-downloads.adblockplus.org/liste_fr+easylist.txt","adblockId":"easylist_plus_french","index":31},"https://easylist-downloads.adblockplus.org/v3/full/ruadlist+easylist.txt":{"id":"1B5F78CA-8B30-4BDF-B0A3-451CB2202984","mv2URL":"https://easylist-downloads.adblockplus.org/ruadlist+easylist.txt","adblockId":"russian","index":32},"https://easylist-downloads.adblockplus.org/ruadlist+easylist.txt":{"id":"1B5F78CA-8B30-4BDF-B0A3-451CB2202984","mv2URL":"https://easylist-downloads.adblockplus.org/ruadlist+easylist.txt","adblockId":"russian","index":32},"https://easylist-downloads.adblockplus.org/v3/full/rolist+easylist.txt":{"id":"EEEF75EC-B2B4-49F4-BC49-17B08266F334","mv2URL":"https://easylist-downloads.adblockplus.org/rolist+easylist.txt","adblockId":"easylist_plus_romanian","index":33},"https://easylist-downloads.adblockplus.org/rolist+easylist.txt":{"id":"EEEF75EC-B2B4-49F4-BC49-17B08266F334","mv2URL":"https://easylist-downloads.adblockplus.org/rolist+easylist.txt","adblockId":"easylist_plus_romanian","index":33},"https://easylist-downloads.adblockplus.org/v3/full/abp-filters-anti-cv.txt":{"id":"D4028CDD-3D39-4624-ACC7-8140F4EC3238","mv2URL":"https://easylist-downloads.adblockplus.org/abp-filters-anti-cv.txt","adblockId":"anticircumvent","index":34},"https://easylist-downloads.adblockplus.org/abp-filters-anti-cv.txt":{"id":"D4028CDD-3D39-4624-ACC7-8140F4EC3238","mv2URL":"https://easylist-downloads.adblockplus.org/abp-filters-anti-cv.txt","adblockId":"anticircumvent","index":34},"https://easylist-downloads.adblockplus.org/v3/full/easyprivacy.txt":{"id":"D72B6F06-52B2-4FED-96A2-1BF59CDD7AEC","mv2URL":"https://easylist-downloads.adblockplus.org/easyprivacy.txt","adblockId":"easyprivacy","index":35},"https://easylist-downloads.adblockplus.org/easyprivacy.txt":{"id":"D72B6F06-52B2-4FED-96A2-1BF59CDD7AEC","mv2URL":"https://easylist-downloads.adblockplus.org/easyprivacy.txt","adblockId":"easyprivacy","index":35},"https://easylist-downloads.adblockplus.org/v3/full/i_dont_care_about_cookies.txt":{"id":"2090F374-29D9-4202-B2CE-139D6492D95E","mv2URL":"https://easylist-downloads.adblockplus.org/i_dont_care_about_cookies.txt","adblockId":"idcac","index":36},"https://easylist-downloads.adblockplus.org/i_dont_care_about_cookies.txt":{"id":"2090F374-29D9-4202-B2CE-139D6492D95E","mv2URL":"https://easylist-downloads.adblockplus.org/i_dont_care_about_cookies.txt","adblockId":"idcac","index":36},"https://easylist-downloads.adblockplus.org/v3/full/fanboy-social.txt":{"id":"0A679439-445F-4DE7-84B9-88341F6DA520","mv2URL":"https://easylist-downloads.adblockplus.org/fanboy-social.txt","adblockId":"antisocial","index":37},"https://easylist-downloads.adblockplus.org/fanboy-social.txt":{"id":"0A679439-445F-4DE7-84B9-88341F6DA520","mv2URL":"https://easylist-downloads.adblockplus.org/fanboy-social.txt","adblockId":"antisocial","index":37},"https://secure.fanboy.co.nz/fanboy-annoyance.txt":{"id":"0B0296EB-1CC5-49CD-AD38-8AF27420B7E4","mv2URL":"https://fanboy.co.nz/fanboy-annoyance.txt","adblockId":"annoyances","index":38},"https://fanboy.co.nz/fanboy-annoyance.txt":{"id":"0B0296EB-1CC5-49CD-AD38-8AF27420B7E4","mv2URL":"https://fanboy.co.nz/fanboy-annoyance.txt","adblockId":"annoyances","index":38},"https://easylist-downloads.adblockplus.org/v3/full/fanboy-annoyance.txt":{"id":"0B0296EB-1CC5-49CD-AD38-8AF27420B7E4","mv2URL":"https://fanboy.co.nz/fanboy-annoyance.txt","adblockId":"annoyances","index":38},"https://easylist-downloads.adblockplus.org/v3/full/fanboy-notifications.txt":{"id":"5BD2BB73-459D-4A74-AF9D-A10157268350","mv2URL":"https://easylist-downloads.adblockplus.org/fanboy-notifications.txt","adblockId":"fb_notifications","index":39},"https://easylist-downloads.adblockplus.org/fanboy-notifications.txt":{"id":"5BD2BB73-459D-4A74-AF9D-A10157268350","mv2URL":"https://easylist-downloads.adblockplus.org/fanboy-notifications.txt","adblockId":"fb_notifications","index":39},"https://easylist-downloads.adblockplus.org/v3/full/dandelion_sprouts_nordic_filters+easylist.txt":{"id":"96932CD9-6DDF-4D97-B92F-FDF747B6FAA2","mv2URL":"https://easylist-downloads.adblockplus.org/dandelion_sprouts_nordic_filters+easylist.txt","adblockId":"nordic","index":55},"https://easylist-downloads.adblockplus.org/dandelion_sprouts_nordic_filters+easylist.txt":{"id":"96932CD9-6DDF-4D97-B92F-FDF747B6FAA2","mv2URL":"https://easylist-downloads.adblockplus.org/dandelion_sprouts_nordic_filters+easylist.txt","adblockId":"nordic","index":55}}');
;// CONCATENATED MODULE: ./adblock-betafish/subscriptionadapter.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */


/* For ESLint: List any global identifiers used in this file below */
/* global browser */




// Adapters & helpers to add the legacy AB 'id' to the ABP subscriptions
// Also adds the 'language' and 'hidden' properties
const SubscriptionAdapter = (function getSubscriptionAdapter() {
  const addAdBlockProperties = function (sub) {
    let subscription = Object.assign({}, sub);
    const url = subscription.url || subscription.mv2URL;
    if (betafish_subscriptions_namespaceObject[url]) {
      subscription = Object.assign(subscription, betafish_subscriptions_namespaceObject[url]);
      if (Object.prototype.hasOwnProperty.call(sub, 'languages')) {
        subscription.languages = [].concat(sub.languages);
      }
      if (!Object.prototype.hasOwnProperty.call(subscription, 'language')) {
        subscription.language = (subscription.languages && subscription.languages.length > 0);
      }
    }
    subscription.correctedURL = subscription.url;
    if (browser.runtime.getManifest().manifest_version === 2) {
      subscription.correctedURL = subscription.mv2URL || subscription.url;
    }
    return subscription;
  };

  // Get the URL for the corresponding ID
  const getUrlFromId = function (searchID) {
    for (const url in betafish_subscriptions_namespaceObject) {
      const subscription = betafish_subscriptions_namespaceObject[url];
      const { adblockId } = subscription;
      if (searchID === adblockId) {
        return url;
      }
    }
    return '';
  };

  // Get the ID for the corresponding URL
  const getIdFromURL = function (searchURL) {
    for (const url in betafish_subscriptions_namespaceObject) {
      const subscription = betafish_subscriptions_namespaceObject[url];
      const { adblockId } = subscription;
      if (searchURL === url) {
        return adblockId;
      }
    }
    return null;
  };

  // determine if the specified filter list is language specific
  // returns the boolean language attribue (if found)
  //         false otherwise
  const isLanguageSpecific = function (searchID) {
    // check for EasyList, as it is a language-specific list (en), but
    // shouldn't be treated as such by the AdBlock code
    if (searchID === 'easylist') {
      return false;
    }

    for (let subscription of ewe_api.subscriptions.getRecommendations()) {
      subscription = addAdBlockProperties(subscription);
      const { adblockId } = subscription;
      if (adblockId === searchID) {
        return subscription.language;
      }
    }
    return false;
  };

  // Get the ID for the corresponding URL
  const getSubscriptionInfoFromURL = function (searchURL) {
    for (let subscription of ewe_api.subscriptions.getRecommendations()) {
      subscription = addAdBlockProperties(subscription);
      const { url } = subscription;
      if (searchURL === url) {
        return subscription;
      }
    }
    return null;
  };

  // Unsubcribe the user from the subscription specified in the argument
  const unsubscribe = async function (options) {
    const subscriptionUrl = getUrlFromId(options.adblockId);
    if (subscriptionUrl !== '') {
      try {
        await ewe_api.subscriptions.remove(subscriptionUrl);
      } catch (e) {
        // do nothing
      }
    }
  };

  // Get only the user's subscriptions with in the AB format
  // without the filter contents (text)
  const getSubscriptionsMinusText = async function () {
    const result = {};
    const subscriptions = await ewe_api.subscriptions.getDownloadable();
    subscriptions.forEach(async (subscription) => {
      const tempSub = addAdBlockProperties(subscription);
      // if the subscription doesn't have a 'adblockId' property, use the 'URL' as an
      // 'adblockId' property
      if (!tempSub.adblockId || tempSub.adblockId === undefined) {
        tempSub.adblockId = `url:${subscription.url}`;
      }
      // add the 'subscribed' property
      tempSub.subscribed = true;
      result[tempSub.adblockId] = tempSub;
    });
    return result;
  };

  const rareFilterLists = {
    'http://fanboy.co.nz/fanboy-turkish.txt': 56,
    'https://pgl.yoyo.org/adservers/serverlist.php?hostformat=adblockplus&mimetype=plaintext': 57,
    'https://adblock.gardar.net/is.abp.txt': 58,
    'https://github.com/SlashArash/adblockfa': 59,
    'https://adblock.ee/list.php': 60,
  };

  // Get a binary string representation of the users subscriptions
  const getSubscriptionsChecksum = async function () {
    let resultA = 0;
    let resultB = 0;
    const subscriptions = await ewe_api.subscriptions.getDownloadable();
    subscriptions.forEach(async (subscription) => {
      const sub = addAdBlockProperties(subscription);
      let index = sub.index || 0; // 0 is the 'unkown' index
      // if URL wasn't found in our subscription file, check the rareFilterLists to get the index
      if (index === 0 && rareFilterLists[sub.url]) {
        index = rareFilterLists[sub.url];
      }
      index = parseInt(index, 10);
      if (index < 32) {
        resultA |= (2 ** index); // eslint-disable-line no-bitwise
      } else {
        resultB |= (2 ** (index - 32)); // eslint-disable-line no-bitwise
      }
    });
    return resultB.toString(2).padStart(32, '0') + resultA.toString(2).padStart(32, '0');
  };

  // Get all subscriptions in the AB format
  // without the filter contents (text)
  const getAllSubscriptionsMinusText = async function () {
    const userSubs = await getSubscriptionsMinusText();
    for (const subscription of ewe_api.subscriptions.getRecommendations()) {
      const sub = addAdBlockProperties(subscription);
      const { adblockId } = sub;
      if (!(adblockId in userSubs)) {
        userSubs[adblockId] = sub;
      } else {
        Object.assign(userSubs[adblockId], sub);
      }
    }
    for (const url in betafish_subscriptions_namespaceObject) {
      let sub = Object.assign({}, betafish_subscriptions_namespaceObject[url]);
      sub.url = url;
      sub = addAdBlockProperties(sub);
      const { adblockId } = sub;
      if (!(adblockId in userSubs)) {
        userSubs[adblockId] = sub;
      }
    }
    return userSubs;
  };
  // Get all distraction control subscriptions
  // without the filter contents (text)
  const getDCSubscriptionsMinusText = async function () {
    const userSubs = await getAllSubscriptionsMinusText();
    const result = {};
    for (const adblockId in userSubs) {
      const {
        url, type, title, homepage, hidden, subscribed, index,
      } = userSubs[adblockId];
      if (type === 'distraction-control') {
        result[adblockId] = {};
        result[adblockId].subscribed = subscribed;
        result[adblockId].adblockId = adblockId;
        result[adblockId].url = url;
        result[adblockId].userSubmitted = false;
        result[adblockId].hidden = hidden;
        result[adblockId].type = type;
        result[adblockId].title = title;
        result[adblockId].homepage = homepage;
        result[adblockId].index = index;
      }
    }
    return result;
  };


  // Subcribe the user to the subscription specified in the argument
  const subscribe = function (options) {
    if (options && options.adblockId) {
      const subscriptionUrl = getUrlFromId(options.adblockId);
      if (subscriptionUrl) {
        ewe_api.subscriptions.add(subscriptionUrl);
      }
    }
  };

  return {
    getSubscriptionInfoFromURL,
    getUrlFromId,
    unsubscribe,
    subscribe,
    getSubscriptionsMinusText,
    getSubscriptionsChecksum,
    getAllSubscriptionsMinusText,
    getDCSubscriptionsMinusText,
    getIdFromURL,
    isLanguageSpecific,
  };
}());

/* harmony default export */ const subscriptionadapter = (SubscriptionAdapter);


/***/ }),

/***/ 7877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ survey)
});

// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/prefs.js
var prefs = __webpack_require__(8710);
// EXTERNAL MODULE: ./node_modules/adblockpluscore/lib/url.js
var url = __webpack_require__(9491);
// EXTERNAL MODULE: ./adblock-betafish/prefs/settings.js
var settings = __webpack_require__(2630);
// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/stats.js
var stats = __webpack_require__(9892);
// EXTERNAL MODULE: ./adblock-betafish/utilities/background/bg-functions.js
var bg_functions = __webpack_require__(2028);
;// CONCATENATED MODULE: ./adblock-betafish/onpageIcon/onpage-icon-bg.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, log,
 */




const OnPageIconManager = (function initialize() {
  const MAX_MSG_TEXT_LENGTH = 280;

  const isIconDataValid = function (iconData) {
    if (!iconData) {
      return false;
    }
    if (!iconData.msgText || !iconData.titleText || !iconData.titlePrefixText) {
      return false;
    }
    if (!iconData.buttonText && iconData.buttonURL) {
      return false;
    }
    if (iconData.buttonText && !iconData.buttonURL) {
      return false;
    }
    if (typeof iconData.buttonText !== 'string') {
      return false;
    }
    if (typeof iconData.msgText !== 'string') {
      return false;
    }
    if (typeof iconData.titlePrefixText !== 'string') {
      return false;
    }
    if (typeof iconData.titleText !== 'string') {
      return false;
    }
    if (iconData.buttonURL && typeof iconData.buttonURL !== 'string') {
      return false;
    }
    if (iconData.buttonURL && !iconData.buttonURL.startsWith('/')) {
      return false;
    }
    if (iconData.ctaIconURL && typeof iconData.ctaIconURL !== 'string') {
      return false;
    }
    return true;
  };


  return {
    // shows / display the AdBlock annimated icon on the specified tab
    // Inputs: tabId : integer - the id of the tab
    //         tabUrl : string - the top level URL of the tab, used for confirmation purposes
    //         iconData : object - with the following:
    //             surveyId: string - unique survey id from ping server
    //             msgText : string - The text of the message (will truncate after 280 characters)
    //             titlePrefixText : string - The prefix title text in the speech bubble
    //             titleText : string - The title text in the speech bubble
    //             ctaIconURL : string (optional) - The hero image in SVG format
    //             buttonText : string (optional) - The text in the button
    //             buttonURL : string (optional) - only the path part of the URL,
    //                         required to start with a '/' character
    //                         the '/' indicates that a new tab should be opened on gab.com
    //                         (the extension will add the 'gab.com' prefix for security reasons)
    showOnPageIcon(tabId, tabUrl, iconData) {
      if (!(0,settings/* getSettings */.Gw)().onpageMessages) {
        (0,bg_functions/* log */.cM)('OnPageIconManager:: settings.onpageMessages is false');
        return;
      }
      if (!isIconDataValid(iconData)) {
        (0,bg_functions/* log */.cM)('OnPageIconManager:showOnPageIcon::isIconDataValid: false', iconData);
        return;
      }
      let { msgText } = iconData;
      if (msgText && msgText.length > MAX_MSG_TEXT_LENGTH) {
        msgText = msgText.slice(0, MAX_MSG_TEXT_LENGTH);
      }
      (0,bg_functions/* log */.cM)('showOnPageIcon::iconData:', iconData);
      browser.tabs.insertCSS(tabId, {
        file: 'adblock-onpage-icon-user.css',
        allFrames: false,
        runAt: 'document_start',
      }).then(() => {
        browser.tabs.executeScript(tabId, {
          file: 'purify.min.js',
          allFrames: false,
        }).then(() => {
          const data = {
            command: 'showonpageicon',
            tabURL: tabUrl,
            titleText: iconData.titleText,
            titlePrefixText: iconData.titlePrefixText,
            msgText,
            surveyId: iconData.surveyId,
            buttonText: iconData.buttonText,
            buttonURL: iconData.buttonURL,
            ctaIconURL: iconData.ctaIconURL,
          };
          browser.tabs.sendMessage(tabId, data).catch((error) => {
            (0,bg_functions/* log */.cM)('error', error);
          });
        }).catch((error) => {
          (0,bg_functions/* log */.cM)('Injection of DOM Purify failed');
          (0,bg_functions/* log */.cM)(error);
        });
      }).catch((error) => {
        (0,bg_functions/* log */.cM)('Injection of adblock-onpage-icon-user.css failed');
        (0,bg_functions/* log */.cM)(error);
      });
    }, // end of showOnPageIcon
  };
}());

/* harmony default export */ const onpage_icon_bg = (OnPageIconManager);

// EXTERNAL MODULE: ./adblock-betafish/fetch-util.js
var fetch_util = __webpack_require__(2379);
;// CONCATENATED MODULE: ./adblock-betafish/survey.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, TELEMETRY, License, log, openTab,
 */

// if the ping response indicates a survey (tab or overlay)
// gracefully processes the request










const SURVEY = (function getSurvey() {
  // Only allow one survey per browser startup, to make sure users don't get
  // spammed due to bugs in AdBlock / the ping server / the browser.
  let surveyAllowed = true;
  const SURVEY_DATA_KEY = 'ab.survey.data';

  // True if we are willing to show an overlay on this tab.
  const validTab = function (tab) {
    if (tab.incognito || tab.status !== 'complete') {
      return false;
    }
    return /^http/.test(tab.url);
  };

  /**
   * Checks whether the tab URL is a match to the domain(s)
   * @param {?string} [tabDomain]
   * @return {boolean}
   */
  const isActiveOnDomain = function (tabDomain, domains) {
    // If no domains are set the rule matches everywhere
    if (!domains) {
      return true;
    }
    let docDomain = tabDomain;
    if (docDomain === null) {
      docDomain = '';
    } else if (docDomain[docDomain.length - 1] === '.') {
      docDomain = docDomain.substring(0, docDomain.length - 1);
    }

    // If the document has no host name, match only if the filter
    // isn't restricted to specific domains
    if (!docDomain) {
      return domains.get('');
    }

    for (docDomain of (0,url/* domainSuffixes */.$e)(docDomain)) {
      const isDomainIncluded = domains.get(docDomain);
      if (typeof isDomainIncluded !== 'undefined') {
        return isDomainIncluded;
      }
    }

    return domains.get('');
  };

  // Domains and paths that we don't want to show the On Page icon on
  // hostname : required and is an exact match
  // pathname : optional and is an startsWith match
  const excludedSites = [
    {
      hostname: 'www.google.com',
      pathname: '/maps',
    },
    {
      hostname: 'meet.google.com',
    },
  ];

  /**
   * Checks whether the URL is restricted
   *
   * @param {URL} [theURL]
   * @return {boolean}
   */
  const isRestricted = function (theURL) {
    return excludedSites.some((element) => {
      let response = !!(element.hostname && element.hostname === theURL.hostname);
      if (response && element.pathname && theURL.pathname) {
        response = response && theURL.pathname.startsWith(element.pathname);
      }
      return response;
    });
  };

  // functions below are used by both Tab Surveys

  // Double check that the survey should be shown
  // Inputs:
  //   surveyData: JSON survey information from ping server
  //   callback(): called with no arguments if the survey should be shown
  const shouldShowSurvey = async function (surveyData) {
    // Check if we should show survey only if it can actually be shown
    // based on surveyAllowed.
    (0,bg_functions/* log */.cM)('shouldShowSurvey::surveyAllowed: ', surveyAllowed);
    if (!surveyAllowed) {
      return null;
    }
    const data = { cmd: 'survey', u: TELEMETRY.userId, sid: surveyData.survey_id };
    if (TELEMETRY.flavor === 'E' && prefs/* Prefs.blocked_total */.B.blocked_total) {
      data.b = prefs/* Prefs.blocked_total */.B.blocked_total;
    }
    const response = await (0,fetch_util/* default */.Z)(TELEMETRY.statsUrl, data);
    if (response.ok) {
      const dataObj = await response.json();
      if (dataObj && dataObj.should_survey === 'true' && surveyAllowed) {
        // for icon surveys, the surveyAllowed is set to false when
        // the user engages / mouse's over the icon
        if (surveyData.type !== 'icon') {
          surveyAllowed = false;
        }
        return dataObj;
      }
    }
    (0,bg_functions/* log */.cM)('bad response from ping', response);
    return null;
  };

  const validateIconSurveyData = function (surveyData) {
    if (!surveyData) {
      return false;
    }
    if (surveyData.type !== 'icon') {
      return false;
    }
    if (!surveyData.survey_id) {
      return false;
    }
    if (!surveyData.domains || typeof surveyData.domains !== 'string') {
      return false;
    }
    if (surveyData.block_count && typeof surveyData.block_count !== 'number') {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(surveyData, 'block_count')) {
      return false;
    }
    if (!surveyData.user_state || typeof surveyData.user_state !== 'string') {
      return false;
    }
    return true;
  };

  const doesLicenseMatch = function (surveyData) {
    if (surveyData.user_state === 'all') {
      return true;
    }
    const license = License && License.get();
    if (license && license.status === 'active' && surveyData.user_state === 'active') {
      return true;
    }
    if (license && !license.status && surveyData.user_state === 'free') {
      return true;
    }
    return false;
  };

  const tabListener = async function (updatedTabId, changeInfo, tab) {
    const shouldShowOnPageIcon = async function (surveyData) {
      const responseData = await shouldShowSurvey(surveyData);
      (0,bg_functions/* log */.cM)('shouldShowSurvey:: responseData', responseData);
      if (
        responseData
        && responseData.survey_id === surveyData.survey_id
        && responseData.should_survey === 'true'
        && responseData.type === 'icon'
        && responseData.icon_options
      ) {
        onpage_icon_bg.showOnPageIcon(tab.id, tab.url, {
          titlePrefixText: responseData.icon_options.title_prefix_text,
          titleText: responseData.icon_options.title_text,
          msgText: responseData.icon_options.msg_text,
          buttonText: responseData.icon_options.button_text,
          ctaIconURL: responseData.icon_options.cta_icon_url,
          buttonURL: responseData.icon_options.button_url,
          surveyId: responseData.survey_id,
        });
      } else {
        // clean up, if we were told to not show the survey
        browser.storage.local.remove(SURVEY_DATA_KEY);
      }
    };

    const surveyData = await (0,bg_functions/* chromeStorageGetHelper */.nX)(SURVEY_DATA_KEY);
    if (!surveyData || !validateIconSurveyData(surveyData)) {
      browser.tabs.onUpdated.removeListener(tabListener);
      return;
    }
    const parsedDomains = (0,url/* parseDomains */.bV)(surveyData.domains, ',');
    if (changeInfo.status === 'complete' && tab.status === 'complete' && validTab(tab)) {
      const myURL = new URL(tab.url);
      const cleanDomain = myURL.hostname;
      (0,bg_functions/* log */.cM)('processIcon:: surveyData', surveyData);
      (0,bg_functions/* log */.cM)('processIcon:: parsedDomains', parsedDomains);
      (0,bg_functions/* log */.cM)('processIcon:: checking if isActiveOnDomain', cleanDomain, isActiveOnDomain(cleanDomain, parsedDomains));
      (0,bg_functions/* log */.cM)('processIcon:: checking if isRestricted', isRestricted(myURL));
      if (isActiveOnDomain(cleanDomain, parsedDomains) && !isRestricted(myURL)) {
        (0,bg_functions/* log */.cM)('processIcon:: block count check', await (0,stats/* getBlockedPerPage */.G)(tab), surveyData.block_count);
        if (surveyData.block_count <= await (0,stats/* getBlockedPerPage */.G)(tab)) {
          shouldShowOnPageIcon(surveyData);
        }
      }
    }
  };

  const surveyMsgListener = async function (message, sender, sendResponse) {
    const surveyData = await (0,bg_functions/* chromeStorageGetHelper */.nX)(SURVEY_DATA_KEY);
    if (!surveyData || !validateIconSurveyData(surveyData)) {
      browser.runtime.onMessage.removeListener(surveyMsgListener);
      return;
    }
    if (message.onpageiconevent === 'mouseenter') {
      surveyAllowed = false;
      browser.runtime.onMessage.removeListener(surveyMsgListener);
      browser.tabs.onUpdated.removeListener(tabListener);
      browser.storage.local.remove(SURVEY_DATA_KEY);
      const tabs = await browser.tabs.query({ url: '*://*/*' });
      for (const theTab of tabs) {
        if (theTab.id !== sender.tab.id && theTab.url && theTab.url.startsWith('http')) {
          browser.tabs.sendMessage(theTab.id, { command: 'removeIcon' }).catch(() => {
            // ignore error
          });
        }
      }
      sendResponse({});
    }
  };

  // Process a request to show the 'on page / tab AdBlock icon'
  // Inputs:
  //         surveyData : object - with the following:
  //             survey_id : string - A unique string
  //             domains : string - A separate list of domains, and subdomain to show the icon on
  //             block_count : integer - The minimum block count to show the icon (can be zero)
  //             user_state : string - one of the three values: 'all', 'free', 'active'
  // step 1 verify the user allows on page messages
  // step 2 verify the initial survey data (ping response)
  // step 3 verify license type is a match
  // step 4 add a onTab update listener to watch for user navigation
  // step 5 when a tab/site is done loading, check the tab's domain to the survey's list of domains
  // step 6 compare the current block count on the tab to survey's minimum block count
  // step 7 if the tab meets all of the survey critieria, then check with the ping server again
  // step 8 validate shouldShow response data
  // step 9 show the adblock icon on the tab
  // step 10 when the user interacts with the icon, remove tab listener
  const processIcon = function (surveyData) {
    (0,bg_functions/* log */.cM)('processIcon:: surveyData', surveyData);
    (0,bg_functions/* log */.cM)('processIcon:: is survey data valid? ', validateIconSurveyData(surveyData));
    (0,bg_functions/* log */.cM)('processIcon:: is license status match? ', doesLicenseMatch(surveyData));
    (0,bg_functions/* log */.cM)('processIcon:: is settting enabled? ', (0,settings/* getSettings */.Gw)().onpageMessages);
    if (
      (0,settings/* getSettings */.Gw)().onpageMessages
      && validateIconSurveyData(surveyData)
      && doesLicenseMatch(surveyData)
    ) {
      (0,bg_functions/* chromeStorageSetHelper */.rJ)(SURVEY_DATA_KEY, surveyData);
      browser.runtime.onMessage.removeListener(surveyMsgListener);
      browser.runtime.onMessage.addListener(surveyMsgListener);
      browser.tabs.onUpdated.removeListener(tabListener);
      browser.tabs.onUpdated.addListener(tabListener);
    }
  };

  // Check the response from a ping to see if it contains valid survey instructions.
  // If so, return an object containing data about the survey to show.
  // Otherwise, return null.
  // Inputs:
  //   responseData: string response from a ping
  const surveyDataFrom = function (responseData) {
    let surveyData;

    if (responseData.length === 0 || responseData.trim().length === 0) {
      return null;
    }
    try {
      surveyData = JSON.parse(responseData);
      if (!surveyData) {
        return null;
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Something went wrong with parsing survey data.');
      // eslint-disable-next-line no-console
      console.log('error', e);
      // eslint-disable-next-line no-console
      console.log('response data', responseData);
      return null;
    }
    return surveyData;
  };

  const openTabIfAllowed = async function (surveyData) {
    if (surveyData && surveyData.type === 'tab') {
      const responseData = await shouldShowSurvey(surveyData);
      browser.storage.local.remove(SURVEY_DATA_KEY);
      if (responseData && responseData.open_this_url) {
        browser.tabs.create({ url: `https://getadblock.com/${responseData.open_this_url}` });
      }
    }
  };

  const waitForUserAction = async function () {
    const surveyData = await (0,bg_functions/* chromeStorageGetHelper */.nX)(SURVEY_DATA_KEY);
    if (!surveyData) {
      browser.tabs.onCreated.removeListener(waitForUserAction);
      return;
    }
    openTabIfAllowed(surveyData);
  };

  // open a Tab for a full page survey
  const processTab = async function (surveyData) {
    if ((0,settings/* getSettings */.Gw)().onpageMessages) {
      (0,bg_functions/* chromeStorageSetHelper */.rJ)(SURVEY_DATA_KEY, surveyData);
      const state = await browser.idle.queryState(60);
      if (state === 'active') {
        openTabIfAllowed(surveyData);
      } else {
        browser.tabs.onCreated.removeListener(waitForUserAction);
        browser.tabs.onCreated.addListener(waitForUserAction);
      }
    }
  }; // end of processTab()

  browser.runtime.onMessage.removeListener(surveyMsgListener);
  browser.runtime.onMessage.addListener(surveyMsgListener);
  browser.tabs.onUpdated.addListener(tabListener);
  browser.tabs.onCreated.removeListener(waitForUserAction);
  browser.tabs.onCreated.addListener(waitForUserAction);

  return {
    maybeSurvey(responseData) {
      if ((0,settings/* getSettings */.Gw)().show_survey === false) {
        (0,bg_functions/* log */.cM)('maybeSurvey::show_survey === false, returning');
        return;
      }
      if ((0,settings/* getSettings */.Gw)().suppress_surveys) {
        (0,bg_functions/* log */.cM)('maybeSurvey::suppress_surveys === true, returning');
        return;
      }

      const surveyData = surveyDataFrom(responseData);
      if (!surveyData) {
        return;
      }
      if (surveyData.type === 'tab') {
        processTab(surveyData);
      } else if (surveyData.type === 'icon') {
        processIcon(surveyData);
      }
    }, // end of maybeSurvey
    types() {
      // 'T' = Tab Surveys
      // 'I' = On Page Icon
      return 'TI';
    },
  };
}());

/* harmony default export */ const survey = (SURVEY);


/***/ }),

/***/ 158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fp": () => (/* reexport */ IPM),
  "C": () => (/* reexport */ TELEMETRY)
});

// UNUSED EXPORTS: telemetryNotifier

// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/events.js
var events = __webpack_require__(2901);
// EXTERNAL MODULE: ./adblock-betafish/servermessages.js
var servermessages = __webpack_require__(1546);
// EXTERNAL MODULE: ./vendor/adblockplusui/adblockpluschrome/lib/prefs.js
var prefs = __webpack_require__(8710);
// EXTERNAL MODULE: ./vendor/webext-sdk/dist/ewe-api.js
var ewe_api = __webpack_require__(3817);
// EXTERNAL MODULE: ./adblock-betafish/ctaabmanager.js
var ctaabmanager = __webpack_require__(1064);
// EXTERNAL MODULE: ./adblock-betafish/survey.js + 1 modules
var survey = __webpack_require__(7877);
// EXTERNAL MODULE: ./adblock-betafish/subscriptionadapter.js + 1 modules
var subscriptionadapter = __webpack_require__(934);
// EXTERNAL MODULE: ./adblock-betafish/utilities/background/bg-functions.js
var bg_functions = __webpack_require__(2028);
;// CONCATENATED MODULE: ./adblock-betafish/telemetry/background/telemetry-base.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, channels, replacedCounts, getSettings
   recordAnonymousErrorMessage, BigInt, LocalCDN,  */










const userIdStorageKey = 'userid';
const FiftyFiveMinutes = 3300000;

class TelemetryBase {
  constructor(totalRequestsStorageKeyArg, nextRequestTimeStorageKeyArg, alarmNameArg, hostURLArg) {
    this.totalRequestsStorageKey = totalRequestsStorageKeyArg;
    this.nextRequestTimeStorageKey = nextRequestTimeStorageKeyArg;
    this.alarmName = alarmNameArg;
    this.hostURL = hostURLArg;
    this.dataCorrupt = false;
    // Get some information about the version, os, and browser
    this.version = browser.runtime.getManifest().version;
    let match = navigator.userAgent.match(/(CrOS \w+|Windows NT|Mac OS X|Linux) ([\d._]+)?/);
    this.os = (match || [])[1] || 'Unknown';
    this.osVersion = (match || [])[2] || 'Unknown';
    this.flavor = 'E'; // Chrome
    match = navigator.userAgent.match(/(?:Chrome|Version)\/([\d.]+)/);
    const edgeMatch = navigator.userAgent.match(/(?:Edg|Version)\/([\d.]+)/);
    const firefoxMatch = navigator.userAgent.match(/(?:Firefox)\/([\d.]+)/);
    if (edgeMatch) {
      this.flavor = 'CM'; // MS - Chromium Edge
      match = edgeMatch;
    } else if (firefoxMatch) {
      this.flavor = 'F'; // Firefox
      match = firefoxMatch;
    }
    this.browserVersion = (match || [])[1] || 'Unknown';
    this.firstRun = false;
    this.userId = '';
    // added calls to these two methods because the need to be
    // called in the first turn of the event loop
    this.addAlarmListener();
    this.checkIdleState();
  }

  // Check if the computer was woken up, and if there was a pending alarm
  // that should fired during the sleep, then
  // remove it, and fire the update ourselves.
  // see - https://bugs.chromium.org/p/chromium/issues/detail?id=471524
  checkIdleState() {
    browser.idle.onStateChanged.addListener(async (newState) => {
      if (newState === 'active') {
        const alarm = await browser.alarms.get(this.alarmName);
        if (alarm && Date.now() > alarm.scheduledTime) {
          await browser.alarms.clear(this.alarmName);
          await this.pingNow();
          await this.scheduleNextPing();
          await this.sleepThenPing();
        } else if (alarm) {
          // if the alarm should fire in the future,
          // re-add the alarm so it fires at the correct time
          const originalTime = alarm.scheduledTime;
          const wasCleared = await browser.alarms.clear(this.alarmName);
          if (wasCleared) {
            browser.alarms.create(this.alarmName, { when: originalTime });
          }
        }
      }
    });
  }

  addAlarmListener = () => {
    browser.alarms.onAlarm.addListener(async (alarm) => {
      if (alarm && alarm.name === this.alarmName) {
        await this.pingNow();
        await this.scheduleNextPing();
        await this.sleepThenPing();
      }
    });
  };

  // Give the user a userid if they don't have one yet.
  async loadUserID() {
    const response = await browser.storage.local.get(userIdStorageKey);
    if (!response[userIdStorageKey]) {
      const timeSuffix = (Date.now()) % 1e8; // 8 digits from end of
      // timestamp
      const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
      const result = [];
      for (let i = 0; i < 8; i++) {
        const choice = Math.floor(Math.random() * alphabet.length);
        result.push(alphabet[choice]);
      }
      this.userId = result.join('') + timeSuffix;
      (0,bg_functions/* chromeStorageSetHelper */.rJ)(userIdStorageKey, this.userId);
    } else {
      this.userId = response[userIdStorageKey];
    }
    return this.userId;
  }

  // Clean up / remove old, unused data in localStorage
  cleanUpLocalStorage() {
    (0,bg_functions/* storageSet */.eV)(userIdStorageKey);
    (0,bg_functions/* storageSet */.eV)(this.totalRequestsStorageKey);
    (0,bg_functions/* storageSet */.eV)(this.nextRequestTimeStorageKey);
  }

  async getTelemetryData() {
    const response = await browser.storage.local.get(this.totalRequestsStorageKey);
    let data = {};
    const settingsObj = getSettings();
    const totalPings = response[this.totalRequestsStorageKey] || 0;
    const themeOptionsPage = settingsObj.color_themes.options_page.replace('_theme', '');
    const themePopupMenu = settingsObj.color_themes.popup_menu.replace('_theme', '');
    let subsStr = '-1';
    if (typeof BigInt === 'function') {
      subsStr = BigInt(`0b${await subscriptionadapter/* default.getSubscriptionsChecksum */.Z.getSubscriptionsChecksum()}`).toString();
    }

    data = {
      u: this.userId,
      v: this.version,
      f: this.flavor,
      o: this.os,
      bv: this.browserVersion,
      ov: this.osVersion,
      ad: settingsObj.show_advanced_options ? '1' : '0',
      yt: settingsObj.youtube_channel_whitelist ? '1' : '0',
      l: (0,bg_functions/* determineUserLanguage */.pN)(),
      pc: totalPings,
      dcv2: settingsObj.data_collection_v2 ? '1' : '0',
      ldc: settingsObj.local_data_collection ? '1' : '0',
      cdn: settingsObj.local_cdn ? '1' : '0',
      rc: await replacedCounts.getTotalAdsReplaced(),
      to: themeOptionsPage,
      tm: themePopupMenu,
      sy: settingsObj.sync_settings ? '1' : '0',
      ir: channels.isAnyEnabled() ? '1' : '0',
      cir: channels.channelGuide[channels.getIdByName('CustomChannel')].enabled ? '1' : '0',
      tca: settingsObj.twitch_channel_allowlist ? '1' : '0',
      sup: settingsObj.suppress_update_page ? '1' : '0',
      ss: settingsObj.suppress_surveys ? '1' : '0',
      sfrp: settingsObj.suppress_first_run_page ? '1' : '0',
      opm: settingsObj.onpageMessages ? '1' : '0',
      subs: subsStr,
    };

    if (typeof LocalCDN !== 'undefined') {
      data.cdnr = await LocalCDN.getRedirectCount();
      data.cdnd = await LocalCDN.getDataCount();
    } else {
      data.cdnr = 0;
      data.cdnd = 0;
    }

    // only on Chrome, Edge, or Firefox
    if ((this.flavor === 'E' || this.flavor === 'CM' || this.flavor === 'F') && prefs/* Prefs.blocked_total */.B.blocked_total) {
      data.b = prefs/* Prefs.blocked_total */.B.blocked_total;
    }
    if (browser.runtime.id) {
      data.extid = browser.runtime.id;
    }
    const subs = await subscriptionadapter/* default.getAllSubscriptionsMinusText */.Z.getAllSubscriptionsMinusText();
    if (subs) {
      const aa = subs.acceptable_ads;
      const aaPrivacy = subs.acceptable_ads_privacy;

      if (!aa && !aaPrivacy) {
        data.aa = 'u'; // Both filter lists unavailable
      } else if (aa.subscribed) {
        data.aa = '1';
      } else if (aaPrivacy.subscribed) {
        data.aa = '2';
      } else if (!aa.subscribed && !aaPrivacy.subscribed) {
        data.aa = '0'; // Both filter lists unsubscribed
      }
    }

    data.crctotal = 0;
    data.crcsnippet = 0;
    data.crcelemhideemulation = 0;
    data.crcelemhideexception = 0;
    data.crcelemhide = 0;
    data.crcallowing = 0;
    data.crcblocking = 0;
    data.crccomment = 0;
    data.crcinvalid = 0;

    const userFilters = await ewe_api.filters.getUserFilters();
    for (let j = 0; j < userFilters.length; j++) {
      const filter = userFilters[j];
      data[`crc${filter.type}`] += 1;
      data.crctotal += 1;
    }

    data.dc = this.dataCorrupt ? '1' : '0';
    data.st = survey/* default.types */.Z.types() + ctaabmanager/* default.types */.Z.types();
    if (browser.permissions && browser.permissions.getAll) {
      const allPermissions = await browser.permissions.getAll();
      data.dhp = allPermissions.origins && allPermissions.origins.includes('<all_urls>') ? '1' : '0';
    } else {
      data.dhp = '1';
    }
    return data;
  }

  // Return the number of milliseconds until the next scheduled ping.
  async millisTillNextPing() {
    // If we've detected data corruption issues,
    // then default to a 55 minute ping interval
    if (this.dataCorrupt) {
      return FiftyFiveMinutes;
    }
    const response = await browser.storage.local.get(this.nextRequestTimeStorageKey);
    if (!response[this.nextRequestTimeStorageKey]) {
      this.firstRun = true;
    }
    let nextPingTime = response[this.nextRequestTimeStorageKey];
    if (typeof nextPingTime !== 'number' || Number.isNaN(nextPingTime)) {
      nextPingTime = 0;
    }
    if (nextPingTime === 0 && this.firstRun) {
      return (1000 * 60);
    }
    // if we don't have a 'next ping time', or it's not a valid number,
    // default to 55 minute ping interval
    if (
      typeof nextPingTime !== 'number'
      || nextPingTime === 0
      || Number.isNaN(nextPingTime)
    ) {
      return FiftyFiveMinutes;
    }
    return (nextPingTime - Date.now());
  }

  async sleepThenPing() {
    const delay = await this.millisTillNextPing();
    browser.alarms.create(this.alarmName, { delayInMinutes: (delay / 1000 / 60) });
  }


  async start() {
    await this.loadUserID();
    // Do 'stuff' when we're first installed...
    // - send a message
    const response = await browser.storage.local.get(this.totalRequestsStorageKey);
    if (!response[this.totalRequestsStorageKey]) {
      if (browser.management && browser.management.getSelf) {
        const info = await browser.management.getSelf();
        if (info) {
          servermessages/* default.recordGeneralMessage */.Z.recordGeneralMessage(`new_install_${info.installType}`);
        } else {
          servermessages/* default.recordGeneralMessage */.Z.recordGeneralMessage('new_install');
        }
      } else {
        servermessages/* default.recordGeneralMessage */.Z.recordGeneralMessage('new_install');
      }
    }
    // This will sleep, then ping, then schedule a new ping, then
    // call itself to start the process over again.
    await this.sleepThenPing();
    this.cleanUpLocalStorage();
  }

  async untilLoaded() {
    await this.loadUserID();
    return this.userId;
  }

  get browser() {
    return ({
      E: 'Chrome',
      CM: 'Edge',
      F: 'Firefox',
    })[this.flavor];
  }
}

/* harmony default export */ const telemetry_base = (TelemetryBase);

// EXTERNAL MODULE: ./adblock-betafish/fetch-util.js
var fetch_util = __webpack_require__(2379);
;// CONCATENATED MODULE: ./adblock-betafish/telemetry/background/telemetry-ping.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, LocalCDN */







const telemetryNotifier = new events/* EventEmitter */.v();

class Telemetry extends telemetry_base {
  // Called just after we ping the server, to schedule our next ping.
  scheduleNextPing() {
    return new Promise(async (resolve) => {
      const response = await browser.storage.local.get(this.totalRequestsStorageKey);
      let totalPings = response[this.totalRequestsStorageKey];
      if (typeof totalPings !== 'number' || Number.isNaN(totalPings)) {
        totalPings = 0;
      }
      totalPings += 1;
      (0,bg_functions/* chromeStorageSetHelper */.rJ)(this.totalRequestsStorageKey, totalPings);

      let delayHours;
      if (totalPings === 1) { // Ping one hour after install
        delayHours = 1;
      } else if (totalPings < 9) { // Then every day for a week
        delayHours = 24;
      } else { // Then weekly forever
        delayHours = 24 * 7;
      }
      const millis = 1000 * 60 * 60 * delayHours;
      const nextPingTime = Date.now() + millis;
      (0,bg_functions/* chromeStorageSetHelper */.rJ)(this.nextRequestTimeStorageKey, nextPingTime, (error) => {
        this.dataCorrupt = !!error;
        resolve();
      });
    });
  }

  sendPingData(pingData) {
    return new Promise(async (resolve) => {
      const response = await (0,fetch_util/* default */.Z)(this.hostURL, pingData)
        // Send any network errors during the ping fetch to a dedicated log server
        // to help us determine why there's been a drop in ping requests
        // See https://gitlab.com/adblockinc/ext/adblock/adblock/-/issues/136
        .catch((error) => {
          servermessages/* default.sendMessageToBackupLogServer */.Z.sendMessageToBackupLogServer('fetch_error', error.toString());
          (0,bg_functions/* log */.cM)('ping server returned error: ', error);
        });
      if (response && response.ok) {
        telemetryNotifier.emit('ping.complete');
      } else {
        (0,bg_functions/* log */.cM)('Ping server returned error: ', (response && response.statusText));
      }
      resolve(pingData);
    });
  }

  // Tell the server we exist.
  async pingNow() {
    const pingData = await this.getTelemetryData();
    if (!pingData.u) {
      return pingData;
    }
    // attempt to stop users that are pinging us 'a lot'
    // by checking the current ping count,
    // if the ping count is above a theshold,
    // then only ping 'occasionally'
    if (pingData.pc > 5000) {
      if (pingData.pc > 5000 && pingData.pc < 100000 && ((pingData.pc % 5000) !== 0)) {
        return pingData;
      }
      if (pingData.pc >= 100000 && ((pingData.pc % 50000) !== 0)) {
        return pingData;
      }
    }
    pingData.cmd = 'ping';
    if (browser.management && browser.management.getSelf) {
      const info = await browser.management.getSelf();
      pingData.it = info.installType.charAt(0);
    }
    if (typeof LocalCDN !== 'undefined') {
      const missedVersions = LocalCDN.getMissedVersions();
      if (missedVersions) {
        servermessages/* default.recordGeneralMessage */.Z.recordGeneralMessage('cdn_miss_stats', undefined, { cdnm: missedVersions });
      }
    }
    return this.sendPingData(pingData);
  }
}

/* harmony default export */ const telemetry_ping = (Telemetry);

;// CONCATENATED MODULE: ./adblock-betafish/telemetry/background/telemetry-ipm.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser */







class IPMTelemetry extends telemetry_base {
  // Called just after we ping the server, to schedule our next ping.
  scheduleNextPing() {
    return new Promise(async (resolve) => {
      const response = await browser.storage.local.get(this.totalRequestsStorageKey);
      let totalPings = response[this.totalRequestsStorageKey];
      if (typeof totalPings !== 'number' || Number.isNaN(totalPings)) {
        totalPings = 0;
      }
      totalPings += 1;
      (0,bg_functions/* chromeStorageSetHelper */.rJ)(this.totalRequestsStorageKey, totalPings);

      let delayHours;
      if (totalPings === 1) { // Ping one hour after install
        delayHours = 1;
      } else { // Then every day
        delayHours = 24;
      }
      const millis = 1000 * 60 * 60 * delayHours;
      const nextPingTime = Date.now() + millis;
      (0,bg_functions/* chromeStorageSetHelper */.rJ)(this.nextRequestTimeStorageKey, nextPingTime, (error) => {
        this.dataCorrupt = !!error;
        resolve();
      });
    });
  }

  sendPingData(pingData) {
    return new Promise(async (resolve) => {
      const response = await (0,fetch_util/* default */.Z)(this.hostURL, pingData).catch((error) => {
        (0,bg_functions/* log */.cM)('ipm ping error', error);
        resolve(pingData);
      });
      if (response && response.ok) {
        telemetryNotifier.emit('ipm.ping.complete');
      } else {
        (0,bg_functions/* log */.cM)('IPM server returned error: ', (response && response.statusText));
      }
      resolve(pingData);
    });
  }

  async pingNow() {
    const pingData = await this.getTelemetryData();
    if (!pingData.u) {
      return pingData;
    }
    // attempt to stop users that are pinging us 'a lot'
    // by checking the current ping count,
    // if the ping count is above a theshold,
    // then only ping 'occasionally'
    if (pingData.pc > 5000) {
      if (pingData.pc > 5000 && pingData.pc < 100000 && ((pingData.pc % 5000) !== 0)) {
        return pingData;
      }
      if (pingData.pc >= 100000 && ((pingData.pc % 50000) !== 0)) {
        return pingData;
      }
    }
    pingData.cmd = 'ping';
    if (browser.management && browser.management.getSelf) {
      const info = await browser.management.getSelf();
      pingData.it = info.installType.charAt(0);
    }
    return this.sendPingData(pingData);
  }
}

/* harmony default export */ const telemetry_ipm = (IPMTelemetry);

;// CONCATENATED MODULE: ./adblock-betafish/telemetry/background/telemetry.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */




const IPM = new telemetry_ipm('total_ipm_pings', 'next_ipm_ping_time', 'ipm_pingalarm', 'https://ipm.adblock.dev/api/stats');
const TELEMETRY = new telemetry_ping('total_pings', 'next_ping_time', 'pingalarm', 'https://ping.getadblock.com/stats/');

;// CONCATENATED MODULE: ./adblock-betafish/telemetry/background/index.js
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */





/***/ }),

/***/ 1483:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3817);
/* harmony import */ var _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3265);
/* harmony import */ var _prefs_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2630);
/*
 * This file is part of AdBlock  <https://getadblock.com/>,
 * Copyright (C) 2013-present  Adblock, Inc.
 *
 * AdBlock is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * AdBlock is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.
 */

/* For ESLint: List any global identifiers used in this file below */
/* global browser, ext,
   addCustomFilter, */





const twitchChannelNamePages = new Map();

// On single page sites, such as Twitch, that update the URL using the History API pushState(),
// they don't actually load a new page, we need to get notified when this happens
// and update the URLs in the Page and Frame objects
const twitchHistoryStateUpdateHandler = async function (details) {
  if (details
      && Object.prototype.hasOwnProperty.call(details, 'frameId')
      && Object.prototype.hasOwnProperty.call(details, 'tabId')
      && Object.prototype.hasOwnProperty.call(details, 'url')
      && details.transitionType === 'link') {
    const myURL = new URL(details.url);
    if (myURL.hostname === 'www.twitch.tv') {
      const myFrame = ext.getFrame(details.tabId, details.frameId);
      const myPage = ext.getPage(details.tabId);
      myPage._url = myURL;
      myFrame.url = myURL;
      myFrame._url = myURL;
      if (await _vendor_webext_sdk_dist_ewe_api__WEBPACK_IMPORTED_MODULE_0__.filters.getAllowingFilters(myPage.id).length) {
        (0,_vendor_adblockplusui_adblockpluschrome_lib_browserAction__WEBPACK_IMPORTED_MODULE_1__/* .setBadge */ .q_)(details.tabId, { number: '' });
      }
    }
  }
};

// Creates a custom filter entry that whitelists a YouTube channel
// Inputs: url:string url of the page
// Returns: null if successful, otherwise an exception
const createWhitelistFilterForTwitchChannel = function (url, origin) {
  let twitchChannel;
  if (/ab_channel=/.test(url)) {
    [, twitchChannel] = url.match(/ab_channel=([^]*)/);
  } else {
    twitchChannel = url.split('/').pop();
  }
  if (twitchChannel) {
    const filter = `@@||twitch.tv/*${twitchChannel}^$document`;
    return addCustomFilter(filter, origin);
  }
  return undefined;
};

const twitchMessageHandler = function (message, sender, sendResponse) {
  if (message.command === 'createWhitelistFilterForTwitchChannel' && message.url) {
    sendResponse(createWhitelistFilterForTwitchChannel(message.url, message.origin));
    return;
  }
  if (message.command === 'updateTwitchChannelName' && message.channelName) {
    twitchChannelNamePages.set(sender.tab.id, message.channelName);
    sendResponse({});
  }
};

const addTwitchAllowlistListeners = function () {
  twitchChannelNamePages.clear();
  browser.runtime.onMessage.addListener(twitchMessageHandler);
  browser.webNavigation.onHistoryStateUpdated.addListener(twitchHistoryStateUpdateHandler);
};

const removeTwitchAllowlistListeners = function () {
  twitchChannelNamePages.clear();
  browser.runtime.onMessage.removeListener(twitchMessageHandler);
  browser.webNavigation.onHistoryStateUpdated.removeListener(twitchHistoryStateUpdateHandler);
};

_prefs_settings__WEBPACK_IMPORTED_MODULE_2__/* .settings.onload */ .Xd.onload().then(() => {
  if ((0,_prefs_settings__WEBPACK_IMPORTED_MODULE_2__/* .getSettings */ .Gw)().twitch_channel_allowlist) {
    addTwitchAllowlistListeners();
  }
});

// eslint-disable-next-line no-restricted-globals
Object.assign(self, {
  addTwitchAllowlistListeners,
  removeTwitchAllowlistListeners,
  twitchChannelNamePages,
});


/***/ }),

/***/ 2028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E_": () => (/* binding */ sessionStorageGet),
/* harmony export */ });
/*
 *
 *
 *