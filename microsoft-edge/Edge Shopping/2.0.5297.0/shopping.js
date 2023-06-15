/*! For license information please see shopping.js.LICENSE.txt */
  :host {
    background-color: ${Kl};
    color: ${Hc};
  }
`.withBehaviors(Wm(dm`
      :host {
        background-color: ${jm.Canvas};
        box-shadow: 0 0 0 1px ${jm.CanvasText};
        color: ${jm.CanvasText};
      }
    `));function qm(e){return(t,n)=>{t[n+"Changed"]=function(t,n){null!=n?e.setValueFor(this,n):e.deleteValueFor(this)}}}class Xm extends Zg{constructor(){super(),this.noPaint=!1;const e={handleChange:this.noPaintChanged.bind(this)};rr.getNotifier(this).subscribe(e,"fillColor"),rr.getNotifier(this).subscribe(e,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){this.noPaint||void 0===this.fillColor&&!this.baseLayerLuminance?this.$fastController.removeStyles(Ym):this.$fastController.addStyles(Ym)}}lm([xr({attribute:"no-paint",mode:"boolean"})],Xm.prototype,"noPaint",void 0),lm([xr({attribute:"fill-color",converter:$m,mode:"fromView"}),qm(Kl)],Xm.prototype,"fillColor",void 0),lm([xr({attribute:"accent-base-color",converter:$m,mode:"fromView"}),qm(Nl)],Xm.prototype,"accentBaseColor",void 0),lm([xr({attribute:"neutral-base-color",converter:$m,mode:"fromView"}),qm(wl)],Xm.prototype,"neutralBaseColor",void 0),lm([xr({converter:br}),qm(Za)],Xm.prototype,"density",void 0),lm([xr({attribute:"design-unit",converter:br}),qm(Ja)],Xm.prototype,"designUnit",void 0),lm([xr({attribute:"direction"}),qm($a)],Xm.prototype,"direction",void 0),lm([xr({attribute:"base-height-multiplier",converter:br}),qm(qa)],Xm.prototype,"baseHeightMultiplier",void 0),lm([xr({attribute:"base-horizontal-spacing-multiplier",converter:br}),qm(Xa)],Xm.prototype,"baseHorizontalSpacingMultiplier",void 0),lm([xr({attribute:"control-corner-radius",converter:br}),qm(Qa)],Xm.prototype,"controlCornerRadius",void 0),lm([xr({attribute:"layer-corner-radius",converter:br}),qm(es)],Xm.prototype,"layerCornerRadius",void 0),lm([xr({attribute:"stroke-width",converter:br}),qm(ts)],Xm.prototype,"strokeWidth",void 0),lm([xr({attribute:"focus-stroke-width",converter:br}),qm(ns)],Xm.prototype,"focusStrokeWidth",void 0),lm([xr({attribute:"disabled-opacity",converter:br}),qm(Ya)],Xm.prototype,"disabledOpacity",void 0),lm([xr({attribute:"type-ramp-minus-2-font-size"}),qm(ps)],Xm.prototype,"typeRampMinus2FontSize",void 0),lm([xr({attribute:"type-ramp-minus-2-line-height"}),qm(hs)],Xm.prototype,"typeRampMinus2LineHeight",void 0),lm([xr({attribute:"type-ramp-minus-1-font-size"}),qm(cs)],Xm.prototype,"typeRampMinus1FontSize",void 0),lm([xr({attribute:"type-ramp-minus-1-line-height"}),qm(us)],Xm.prototype,"typeRampMinus1LineHeight",void 0),lm([xr({attribute:"type-ramp-base-font-size"}),qm(as)],Xm.prototype,"typeRampBaseFontSize",void 0),lm([xr({attribute:"type-ramp-base-line-height"}),qm(ss)],Xm.prototype,"typeRampBaseLineHeight",void 0),lm([xr({attribute:"type-ramp-plus-1-font-size"}),qm(gs)],Xm.prototype,"typeRampPlus1FontSize",void 0),lm([xr({attribute:"type-ramp-plus-1-line-height"}),qm(ms)],Xm.prototype,"typeRampPlus1LineHeight",void 0),lm([xr({attribute:"type-ramp-plus-2-font-size"}),qm(Cs)],Xm.prototype,"typeRampPlus2FontSize",void 0),lm([xr({attribute:"type-ramp-plus-2-line-height"}),qm(ys)],Xm.prototype,"typeRampPlus2LineHeight",void 0),lm([xr({attribute:"type-ramp-plus-3-font-size"}),qm(bs)],Xm.prototype,"typeRampPlus3FontSize",void 0),lm([xr({attribute:"type-ramp-plus-3-line-height"}),qm(Ts)],Xm.prototype,"typeRampPlus3LineHeight",void 0),lm([xr({attribute:"type-ramp-plus-4-font-size"}),qm(Es)],Xm.prototype,"typeRampPlus4FontSize",void 0),lm([xr({attribute:"type-ramp-plus-4-line-height"}),qm(ks)],Xm.prototype,"typeRampPlus4LineHeight",void 0),lm([xr({attribute:"type-ramp-plus-5-font-size"}),qm(Is)],Xm.prototype,"typeRampPlus5FontSize",void 0),lm([xr({attribute:"type-ramp-plus-5-line-height"}),qm(Os)],Xm.prototype,"typeRampPlus5LineHeight",void 0),lm([xr({attribute:"type-ramp-plus-6-font-size"}),qm(Ps)],Xm.prototype,"typeRampPlus6FontSize",void 0),lm([xr({attribute:"type-ramp-plus-6-line-height"}),qm(ws)],Xm.prototype,"typeRampPlus6LineHeight",void 0),lm([xr({attribute:"accent-fill-rest-delta",converter:br}),qm(_s)],Xm.prototype,"accentFillRestDelta",void 0),lm([xr({attribute:"accent-fill-hover-delta",converter:br}),qm(Ms)],Xm.prototype,"accentFillHoverDelta",void 0),lm([xr({attribute:"accent-fill-active-delta",converter:br}),qm(Ls)],Xm.prototype,"accentFillActiveDelta",void 0),lm([xr({attribute:"accent-fill-focus-delta",converter:br}),qm(Fs)],Xm.prototype,"accentFillFocusDelta",void 0),lm([xr({attribute:"accent-foreground-rest-delta",converter:br}),qm(Hs)],Xm.prototype,"accentForegroundRestDelta",void 0),lm([xr({attribute:"accent-foreground-hover-delta",converter:br}),qm(Us)],Xm.prototype,"accentForegroundHoverDelta",void 0),lm([xr({attribute:"accent-foreground-active-delta",converter:br}),qm(Bs)],Xm.prototype,"accentForegroundActiveDelta",void 0),lm([xr({attribute:"accent-foreground-focus-delta",converter:br}),qm(Gs)],Xm.prototype,"accentForegroundFocusDelta",void 0),lm([xr({attribute:"neutral-fill-rest-delta",converter:br}),qm(Vs)],Xm.prototype,"neutralFillRestDelta",void 0),lm([xr({attribute:"neutral-fill-hover-delta",converter:br}),qm(Ws)],Xm.prototype,"neutralFillHoverDelta",void 0),lm([xr({attribute:"neutral-fill-active-delta",converter:br}),qm(Ks)],Xm.prototype,"neutralFillActiveDelta",void 0),lm([xr({attribute:"neutral-fill-focus-delta",converter:br}),qm(zs)],Xm.prototype,"neutralFillFocusDelta",void 0),lm([xr({attribute:"neutral-fill-input-rest-delta",converter:br}),qm(js)],Xm.prototype,"neutralFillInputRestDelta",void 0),lm([xr({attribute:"neutral-fill-input-hover-delta",converter:br}),qm($s)],Xm.prototype,"neutralFillInputHoverDelta",void 0),lm([xr({attribute:"neutral-fill-input-active-delta",converter:br}),qm(Ys)],Xm.prototype,"neutralFillInputActiveDelta",void 0),lm([xr({attribute:"neutral-fill-input-focus-delta",converter:br}),qm(qs)],Xm.prototype,"neutralFillInputFocusDelta",void 0),lm([xr({attribute:"neutral-fill-layer-rest-delta",converter:br}),qm(el)],Xm.prototype,"neutralFillLayerRestDelta",void 0),lm([xr({attribute:"neutral-fill-stealth-rest-delta",converter:br}),qm(ll)],Xm.prototype,"neutralFillStealthRestDelta",void 0),lm([xr({attribute:"neutral-fill-stealth-hover-delta",converter:br}),qm(cl)],Xm.prototype,"neutralFillStealthHoverDelta",void 0),lm([xr({attribute:"neutral-fill-stealth-active-delta",converter:br}),qm(ul)],Xm.prototype,"neutralFillStealthActiveDelta",void 0),lm([xr({attribute:"neutral-fill-stealth-focus-delta",converter:br}),qm(dl)],Xm.prototype,"neutralFillStealthFocusDelta",void 0),lm([xr({attribute:"neutral-fill-strong-hover-delta",converter:br}),qm(hl)],Xm.prototype,"neutralFillStrongHoverDelta",void 0),lm([xr({attribute:"neutral-fill-strong-active-delta",converter:br}),qm(fl)],Xm.prototype,"neutralFillStrongActiveDelta",void 0),lm([xr({attribute:"neutral-fill-strong-focus-delta",converter:br}),qm(gl)],Xm.prototype,"neutralFillStrongFocusDelta",void 0),lm([xr({attribute:"base-layer-luminance",converter:br}),qm(Ns)],Xm.prototype,"baseLayerLuminance",void 0),lm([xr({attribute:"neutral-stroke-divider-rest-delta",converter:br}),qm(El)],Xm.prototype,"neutralStrokeDividerRestDelta",void 0),lm([xr({attribute:"neutral-stroke-rest-delta",converter:br}),qm(ml)],Xm.prototype,"neutralStrokeRestDelta",void 0),lm([xr({attribute:"neutral-stroke-hover-delta",converter:br}),qm(vl)],Xm.prototype,"neutralStrokeHoverDelta",void 0),lm([xr({attribute:"neutral-stroke-active-delta",converter:br}),qm(Cl)],Xm.prototype,"neutralStrokeActiveDelta",void 0),lm([xr({attribute:"neutral-stroke-focus-delta",converter:br}),qm(yl)],Xm.prototype,"neutralStrokeFocusDelta",void 0);const Zm=Xm.compose({baseName:"design-system-provider",template:Bm` <slot></slot> `,styles:dm`
    ${zm("block")}
  `});var Jm;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Jm||(Jm={}));const Qm="ArrowDown",ev="ArrowLeft",tv="ArrowRight",nv="ArrowUp",iv="Enter",ov="Escape",rv="Home",av="End",sv=" ",lv="Tab",cv={ArrowDown:Qm,ArrowLeft:ev,ArrowRight:tv,ArrowUp:nv};function uv(e,t,n){return n<e?t:n>t?e:n}function dv(e,t,n=0){return[t,n]=[t,n].sort(((e,t)=>e-t)),t<=e&&e<n}class pv{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function hv(e){return new mm("fast-ref",pv,e)}class fv{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const gv=(e,t)=>Bm`
    <span
        part="end"
        ${hv("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${hv("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,mv=(e,t)=>Bm`
    <span
        part="start"
        ${hv("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${hv("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;Bm`
    <span part="end" ${hv("endContainer")}>
        <slot
            name="end"
            ${hv("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Bm`
    <span part="start" ${hv("startContainer")}>
        <slot
            name="start"
            ${hv("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function vv(e,...t){const n=yr.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((n=>{"constructor"!==n&&Object.defineProperty(e.prototype,n,Object.getOwnPropertyDescriptor(t.prototype,n))}));yr.locate(t).forEach((e=>n.push(e)))}))}class Cv extends Zg{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=e=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}tr([xr({attribute:"heading-level",mode:"fromView",converter:br})],Cv.prototype,"headinglevel",void 0),tr([xr({mode:"boolean"})],Cv.prototype,"expanded",void 0),tr([xr],Cv.prototype,"id",void 0),vv(Cv,fv);const yv="single",Sv="multi";class bv extends Zg{constructor(){super(...arguments),this.expandmode=Sv,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var e;if(0!==this.accordionItems.length&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach(((e,t)=>{e instanceof Cv&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==t?e.expanded=!1:e.expanded=!0));const n=this.accordionIds[t];e.setAttribute("id","string"!=typeof n?`accordion-${t+1}`:n),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)})),this.isSingleExpandMode())){(null!==(e=this.findExpandedItem())&&void 0!==e?e:this.accordionItems[0]).setAttribute("aria-disabled","true")}},this.removeItemListeners=e=>{e.forEach(((e,t)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)}))},this.activeItemChange=e=>{if(e.defaultPrevented||e.target!==e.currentTarget)return;e.preventDefault();const t=e.target;this.activeid=t.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),t.expanded=!0,t.setAttribute("aria-disabled","true"),this.accordionItems.forEach((e=>{e.hasAttribute("disabled")||e.id===this.activeid||e.removeAttribute("aria-disabled")}))),this.activeItemIndex=Array.from(this.accordionItems).indexOf(t),this.change()},this.handleItemKeyDown=e=>{if(e.target===e.currentTarget)switch(this.accordionIds=this.getItemIds(),e.key){case nv:e.preventDefault(),this.adjust(-1);break;case Qm:e.preventDefault(),this.adjust(1);break;case rv:this.activeItemIndex=0,this.focusItem();break;case av:this.activeItemIndex=this.accordionItems.length-1,this.focusItem()}},this.handleItemFocus=e=>{if(e.target===e.currentTarget){const t=e.target,n=this.activeItemIndex=Array.from(this.accordionItems).indexOf(t);this.activeItemIndex!==n&&-1!==n&&(this.activeItemIndex=n,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(e,t){this.$fastController.isConnected&&(this.removeItemListeners(e),this.setItems())}findExpandedItem(){for(let e=0;e<this.accordionItems.length;e++)if("true"===this.accordionItems[e].getAttribute("expanded"))return this.accordionItems[e];return null}resetItems(){this.accordionItems.forEach(((e,t)=>{e.expanded=!1}))}getItemIds(){return this.accordionItems.map((e=>e.getAttribute("id")))}isSingleExpandMode(){return this.expandmode===yv}adjust(e){this.activeItemIndex=uv(0,this.accordionItems.length-1,this.activeItemIndex+e),this.focusItem()}focusItem(){const e=this.accordionItems[this.activeItemIndex];e instanceof Cv&&e.expandbutton.focus()}}function Tv(e){return e?function(t,n,i){return 1===t.nodeType&&t.matches(e)}:function(e,t,n){return 1===e.nodeType}}tr([xr({attribute:"expand-mode"})],bv.prototype,"expandmode",void 0),tr([ar],bv.prototype,"accordionItems",void 0);class xv{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=rr.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Ni),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Ev extends xv{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function kv(e){return"string"==typeof e&&(e={property:e}),new mm("fast-slotted",Ev,e)}const Av=hm`
  font-family: ${is};
  font-size: ${as};
  line-height: ${ss};
  font-weight: initial;
  font-variation-settings: ${ls};
`,Iv=(hm`
  font-family: ${is};
  font-size: ${cs};
  line-height: ${us};
  font-weight: initial;
  font-variation-settings: ${ds};
`,hm`
  font-family: ${is};
  font-size: ${ps};
  line-height: ${hs};
  font-weight: initial;
  font-variation-settings: ${fs};
`,hm`
  font-family: ${is};
  font-size: ${gs};
  line-height: ${ms};
  font-weight: initial;
  font-variation-settings: ${vs};
`,hm`
  font-family: ${is};
  font-size: ${Cs};
  line-height: ${ys};
  font-weight: initial;
  font-variation-settings: ${Ss};
`,hm`
  font-family: ${is};
  font-size: ${bs};
  line-height: ${Ts};
  font-weight: initial;
  font-variation-settings: ${xs};
`,hm`
  font-family: ${is};
  font-size: ${Es};
  line-height: ${ks};
  font-weight: initial;
  font-variation-settings: ${As};
`,hm`
  font-family: ${is};
  font-size: ${Is};
  line-height: ${Os};
  font-weight: initial;
  font-variation-settings: ${Ds};
`,hm`
  font-family: ${is};
  font-size: ${Ps};
  line-height: ${ws};
  font-weight: initial;
  font-variation-settings: ${Rs};
`,bv.compose({baseName:"accordion",template:(e,t)=>Bm`
    <template>
        <slot ${kv({property:"accordionItems",filter:Tv()})}></slot>
        <slot name="item" part="item" ${kv("accordionItems")}></slot>
    </template>
`,styles:(e,t)=>dm`
    ${zm("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${Av}
      color: ${Hc};
      gap: calc(${Ja} * 1px);
    }
  `}));function Ov(...e){return e.every((e=>e instanceof HTMLElement))}let Dv;const Pv=function(){if("boolean"==typeof Dv)return Dv;if("undefined"==typeof window||!window.document||!window.document.createElement)return Dv=!1,Dv;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),Dv=!0}catch(e){Dv=!1}finally{document.head.removeChild(e)}return Dv}()?"focus-visible":"focus",wv=hm`
  outline: calc(${ns} * 1px) solid ${su};
  outline-offset: calc(${ns} * -1px);
`,Rv=hm`
  outline: calc(${ns} * 1px) solid ${su};
  outline-offset: calc(${ts} * 1px);
`,Nv=hm`(${qa} + ${Za}) * ${Ja}`,_v=Zr.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault((e=>{const t=Tc.getValueFor(e);return wc.getValueFor(e).evaluate(e,t.evaluate(e).rest).rest})),Mv=Zr.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault((e=>{const t=Tc.getValueFor(e);return wc.getValueFor(e).evaluate(e,t.evaluate(e).rest).hover})),Lv=Zr.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault((e=>{const t=Tc.getValueFor(e);return wc.getValueFor(e).evaluate(e,t.evaluate(e).rest).active})),Fv=Cv.compose({baseName:"accordion-item",template:(e,t)=>Bm`
    <template class="${e=>e.expanded?"expanded":""}">
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${e=>e.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${hv("expandbutton")}
                aria-expanded="${e=>e.expanded}"
                aria-controls="${e=>e.id}-panel"
                id="${e=>e.id}"
                @click="${(e,t)=>e.clickHandler(t.event)}"
            >
                <span class="heading-content" part="heading-content">
                    <slot name="heading"></slot>
                </span>
            </button>
            ${mv(0,t)}
            ${gv(0,t)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon" part="expanded-icon">
                    ${t.expandedIcon||""}
                </slot>
                <slot name="collapsed-icon" part="collapsed-icon">
                    ${t.collapsedIcon||""}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${e=>e.id}-panel"
            role="region"
            aria-labelledby="${e=>e.id}"
        >
            <slot></slot>
        </div>
    </template>
`,styles:(e,t)=>dm`
    ${zm("flex")} :host {
      box-sizing: border-box;
      ${Av};
      flex-direction: column;
      background: ${xc};
      color: ${Hc};
      border: calc(${ts} * 1px) solid ${tu};
      border-radius: calc(${es} * 1px);
    }

    .region {
      display: none;
      padding: calc(${Ja} * 2 * 1px);
      background: ${kc};
    }

    .heading {
      display: grid;
      position: relative;
      grid-template-columns: auto 1fr auto auto;
      align-items: center;
    }

    .button {
      appearance: none;
      border: none;
      background: none;
      grid-column: 2;
      grid-row: 1;
      outline: none;
      margin: calc(${Ja} * 3 * 1px) 0;
      padding: 0 calc(${Ja} * 2 * 1px);
      text-align: left;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }

    .button::before {
      content: '';
      position: absolute;
      top: calc(${ts} * -1px);
      left: calc(${ts} * -1px);
      right: calc(${ts} * -1px);
      bottom: calc(${ts} * -1px);
      cursor: pointer;
    }

    .button:${Pv}::before {
      ${wv}
      border-radius: calc(${es} * 1px);
    }

    :host(.expanded) .button:${Pv}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${ts} * 1px) solid ${tu};
      border-bottom-left-radius: calc((${es} - ${ts}) * 1px);
      border-bottom-right-radius: calc((${es} - ${ts}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${_v};
      border-radius: calc(${Qa} * 1px);
      fill: currentcolor;
      width: calc(${Nv} * 1px);
      height: calc(${Nv} * 1px);
      margin: calc(${Ja} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${Mv};
    }

    .heading:active .icon {
      background: ${Lv};
    }

    slot[name='collapsed-icon'] {
      display: flex;
    }

    :host(.expanded) slot[name='collapsed-icon'] {
      display: none;
    }

    slot[name='expanded-icon'] {
      display: none;
    }

    :host(.expanded) slot[name='expanded-icon'] {
      display: flex;
    }

    .start {
      display: flex;
      align-items: center;
      padding-inline-start: calc(${Ja} * 2 * 1px);
      justify-content: center;
      grid-column: 1;
    }

    .end {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 3;
    }

    .icon,
    .start,
    .end {
      position: relative;
    }
  `.withBehaviors(Wm(dm`
        .button:${Pv}::before {
          outline-color: ${jm.Highlight};
        }
        .icon {
          fill: ${jm.ButtonText};
        }
      `)),collapsedIcon:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  ',expandedIcon:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>\n    </svg>\n  '});class Hv{}tr([xr({attribute:"aria-atomic"})],Hv.prototype,"ariaAtomic",void 0),tr([xr({attribute:"aria-busy"})],Hv.prototype,"ariaBusy",void 0),tr([xr({attribute:"aria-controls"})],Hv.prototype,"ariaControls",void 0),tr([xr({attribute:"aria-current"})],Hv.prototype,"ariaCurrent",void 0),tr([xr({attribute:"aria-describedby"})],Hv.prototype,"ariaDescribedby",void 0),tr([xr({attribute:"aria-details"})],Hv.prototype,"ariaDetails",void 0),tr([xr({attribute:"aria-disabled"})],Hv.prototype,"ariaDisabled",void 0),tr([xr({attribute:"aria-errormessage"})],Hv.prototype,"ariaErrormessage",void 0),tr([xr({attribute:"aria-flowto"})],Hv.prototype,"ariaFlowto",void 0),tr([xr({attribute:"aria-haspopup"})],Hv.prototype,"ariaHaspopup",void 0),tr([xr({attribute:"aria-hidden"})],Hv.prototype,"ariaHidden",void 0),tr([xr({attribute:"aria-invalid"})],Hv.prototype,"ariaInvalid",void 0),tr([xr({attribute:"aria-keyshortcuts"})],Hv.prototype,"ariaKeyshortcuts",void 0),tr([xr({attribute:"aria-label"})],Hv.prototype,"ariaLabel",void 0),tr([xr({attribute:"aria-labelledby"})],Hv.prototype,"ariaLabelledby",void 0),tr([xr({attribute:"aria-live"})],Hv.prototype,"ariaLive",void 0),tr([xr({attribute:"aria-owns"})],Hv.prototype,"ariaOwns",void 0),tr([xr({attribute:"aria-relevant"})],Hv.prototype,"ariaRelevant",void 0),tr([xr({attribute:"aria-roledescription"})],Hv.prototype,"ariaRoledescription",void 0);class Uv extends Zg{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{var e;null===(e=this.control)||void 0===e||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}tr([xr],Uv.prototype,"download",void 0),tr([xr],Uv.prototype,"href",void 0),tr([xr],Uv.prototype,"hreflang",void 0),tr([xr],Uv.prototype,"ping",void 0),tr([xr],Uv.prototype,"referrerpolicy",void 0),tr([xr],Uv.prototype,"rel",void 0),tr([xr],Uv.prototype,"target",void 0),tr([xr],Uv.prototype,"type",void 0),tr([ar],Uv.prototype,"defaultSlottedContent",void 0);class Bv{}tr([xr({attribute:"aria-expanded"})],Bv.prototype,"ariaExpanded",void 0),vv(Bv,Hv),vv(Uv,fv,Bv);const Gv=(e,t,n,i="[disabled]")=>dm`
    ${zm("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${Av}
      height: calc(${Nv} * 1px);
      min-width: calc(${Nv} * 1px);
      color: ${Hc};
      border-radius: calc(${Qa} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${ts} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${Ja} * 2 * ${Za})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${Pv} {
      ${wv}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `,Vv=(e,t,n,i="[disabled]")=>dm`
    .control {
      background: padding-box linear-gradient(${uc}, ${uc}),
        border-box ${jc};
    }

    :host(${n}:hover) .control {
      background: padding-box linear-gradient(${dc}, ${dc}),
        border-box ${$c};
    }

    :host(${n}:active) .control {
      background: padding-box linear-gradient(${pc}, ${pc}),
        border-box ${Yc};
    }

    :host(${i}) .control {
      background: padding-box linear-gradient(${uc}, ${uc}),
        border-box ${Vc};
    }
  `.withBehaviors(Wm(dm`
        .control {
          background: ${jm.ButtonFace};
          border-color: ${jm.ButtonText};
          color: ${jm.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          forced-color-adjust: none;
          background: ${jm.HighlightText};
          border-color: ${jm.Highlight};
          color: ${jm.Highlight};
        }

        :host(${i}) .control {
          background: transparent;
          border-color: ${jm.GrayText};
          color: ${jm.GrayText};
        }

        .control:${Pv} {
          outline-color: ${jm.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${jm.LinkText};
          color: ${jm.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${jm.CanvasText};
          color: ${jm.CanvasText};
        }
    `)),Wv=(e,t,n,i="[disabled]")=>dm`
    .control {
      background: padding-box linear-gradient(${$l}, ${$l}),
        border-box ${ac};
      color: ${Jl};
    }

    :host(${n}:hover) .control {
      background: padding-box linear-gradient(${Yl}, ${Yl}),
        border-box ${sc};
      color: ${Ql};
    }

    :host(${n}:active) .control {
      background: padding-box linear-gradient(${ql}, ${ql}),
        border-box ${lc};
      color: ${ec};
    }

    :host(${i}) .control {
      background: ${$l};
    }

    .control:${Pv} {
      box-shadow: 0 0 0 calc(${ns} * 1px) ${cu} inset !important;
    }
  `.withBehaviors(Wm(dm`
        .control {
          forced-color-adjust: none;
          background: ${jm.Highlight};
          color: ${jm.HighlightText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: ${jm.HighlightText};
          border-color: ${jm.Highlight};
          color: ${jm.Highlight};
        }

        :host(${i}) .control {
          background: transparent;
          border-color: ${jm.GrayText};
          color: ${jm.GrayText};
        }

        .control:${Pv} {
          outline-color: ${jm.CanvasText};
          box-shadow: 0 0 0 calc(${ns} * 1px) ${jm.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${jm.LinkText};
          color: ${jm.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${jm.ButtonFace};
          border-color: ${jm.LinkText};
          color: ${jm.LinkText};
        }
      `)),Kv=(e,t,n,i="[disabled]")=>dm`
    :host {
      color: ${nc};
    }

    .control {
      background: ${Rc};
    }

    :host(${n}:hover) .control {
      background: ${Nc};
      color: ${ic};
    }

    :host(${n}:active) .control {
      background: ${_c};
      color: ${oc};
    }

    :host(${i}) .control {
      background: ${Rc};
    }
  `.withBehaviors(Wm(dm`
        :host {
          color: ${jm.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: transparent;
          border-color: ${jm.ButtonText};
          color: ${jm.ButtonText};
        }

        :host(${i}) .control {
          background: transparent;
          color: ${jm.GrayText};
        }

        .control:${Pv} {
          outline-color: ${jm.CanvasText};
        }

        :host([href]) .control {
          color: ${jm.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${jm.LinkText};
          color: ${jm.LinkText};
        }
      `)),zv=(e,t,n,i="[disabled]")=>dm`
    .control {
      background: transparent !important;
      border-color: ${Vc};
    }

    :host(${n}:hover) .control {
      border-color: ${Wc};
    }

    :host(${n}:active) .control {
      border-color: ${Kc};
    }

    :host(${i}) .control {
      background: transparent !important;
      border-color: ${Vc};
    }
  `.withBehaviors(Wm(dm`
        .control {
          border-color: ${jm.ButtonText};
          color: ${jm.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: ${jm.HighlightText};
          border-color: ${jm.Highlight};
          color: ${jm.Highlight};
        }

        :host(${i}) .control {
          border-color: ${jm.GrayText};
          color: ${jm.GrayText};
        }

        .control:${Pv} {
          outline-color: ${jm.CanvasText};
        }

        :host([href]) .control {
          border-color: ${jm.LinkText};
          color: ${jm.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${jm.CanvasText};
          color: ${jm.CanvasText};
        }
      `)),jv=(e,t,n,i="[disabled]")=>dm`
    .control {
      background: ${Rc};
    }

    :host(${n}:hover) .control {
      background: ${Nc};
    }

    :host(${n}:active) .control {
      background: ${_c};
    }

    :host(${i}) .control {
      background: ${Rc};
    }
  `.withBehaviors(Wm(dm`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${jm.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: transparent;
          border-color: ${jm.ButtonText};
          color: ${jm.ButtonText};
        }

        :host(${i}) .control {
          background: transparent;
          color: ${jm.GrayText};
        }
        
        .control:${Pv} {
          outline-color: ${jm.CanvasText};
        }

        :host([href]) .control {
          color: ${jm.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${jm.LinkText};
          color: ${jm.LinkText};
        }
      `));class $v{constructor(e,t,n){this.propertyName=e,this.value=t,this.styles=n}bind(e){rr.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){rr.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function Yv(e,t){return new $v("appearance",e,t)}const qv="[href]";class Xv extends Uv{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var e,t;const n=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===n.length&&n[0]instanceof SVGElement?null===(e=this.control)||void 0===e||e.classList.add("icon-only"):null===(t=this.control)||void 0===t||t.classList.remove("icon-only")}}lm([xr],Xv.prototype,"appearance",void 0);const Zv=Xv.compose({baseName:"anchor",baseClass:Uv,template:(e,t)=>Bm`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${hv("control")}
    >
        ${mv(0,t)}
        <span class="content" part="content">
            <slot ${kv("defaultSlottedContent")}></slot>
        </span>
        ${gv(0,t)}
    </a>
`,styles:(e,t)=>Gv().withBehaviors(Yv("neutral",Vv(0,0,qv)),Yv("accent",Wv(0,0,qv)),Yv("hypertext",((e,t,n,i="[disabled]")=>dm`
    :host {
      height: auto;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      min-width: 0;
    }

    .control {
      display: inline;
      padding: 0;
      border: none;
      box-shadow: none;
      line-height: 1;
    }

    :host(${n}) .control {
      color: ${nc};
      text-decoration: underline 1px;
    }

    :host(${n}:hover) .control {
      color: ${ic};
      text-decoration: none;
    }

    :host(${n}:active) .control {
      color: ${oc};
      text-decoration: none;
    }

    .control:${Pv} {
      ${Rv}
    }
  `.withBehaviors(Wm(dm`
        :host(${n}) .control {
          color: ${jm.LinkText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          color: ${jm.CanvasText};
        }

        .control:${Pv} {
          outline-color: ${jm.CanvasText};
        }
      `)))(0,0,qv)),Yv("lightweight",Kv(0,0,qv)),Yv("outline",zv(0,0,qv)),Yv("stealth",jv(0,0,qv))),shadowOptions:{delegatesFocus:!0}}),Jv="form-associated-proxy",Qv="ElementInternals",eC=Qv in window&&"setFormValue"in window[Qv].prototype,tC=new WeakMap;function nC(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return eC}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=e?t.concat(Array.from(e)):t;return Object.freeze(n)}return Ni}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),Gi.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),Gi.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!eC)return null;let e=tC.get(this);return e||(e=this.attachInternals(),tC.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,n){this.elementInternals?this.elementInternals.setValidity(e,t,n):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Jv),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Jv)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===iv)if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return xr({mode:"boolean"})(t.prototype,"disabled"),xr({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),xr({attribute:"current-value"})(t.prototype,"currentValue"),xr(t.prototype,"name"),xr({mode:"boolean"})(t.prototype,"required"),ar(t.prototype,"value"),t}function iC(e){class t extends(nC(e)){}class n extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return xr({attribute:"checked",mode:"boolean"})(n.prototype,"checkedAttribute"),xr({attribute:"current-checked",converter:Sr})(n.prototype,"currentChecked"),ar(n.prototype,"defaultChecked"),ar(n.prototype,"checked"),n}class oC extends Zg{}class rC extends(nC(oC)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class aC extends rC{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}tr([xr({mode:"boolean"})],aC.prototype,"autofocus",void 0),tr([xr({attribute:"form"})],aC.prototype,"formId",void 0),tr([xr],aC.prototype,"formaction",void 0),tr([xr],aC.prototype,"formenctype",void 0),tr([xr],aC.prototype,"formmethod",void 0),tr([xr({mode:"boolean"})],aC.prototype,"formnovalidate",void 0),tr([xr],aC.prototype,"formtarget",void 0),tr([xr],aC.prototype,"type",void 0),tr([ar],aC.prototype,"defaultSlottedContent",void 0);class sC{}tr([xr({attribute:"aria-expanded"})],sC.prototype,"ariaExpanded",void 0),tr([xr({attribute:"aria-pressed"})],sC.prototype,"ariaPressed",void 0),vv(sC,Hv),vv(aC,fv,sC);const lC="not-allowed",cC=":not([disabled])",uC="[disabled]";class dC extends aC{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}lm([xr],dC.prototype,"appearance",void 0);const pC=dC.compose({baseName:"button",baseClass:aC,template:(e,t)=>Bm`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${hv("control")}
    >
        ${mv(0,t)}
        <span class="content" part="content">
            <slot ${kv("defaultSlottedContent")}></slot>
        </span>
        ${gv(0,t)}
    </button>
`,styles:(e,t)=>dm`
    :host(${cC}) .control {
      cursor: pointer;
    }

    :host(${uC}) .control {
      cursor: ${lC};
    }

    @media (forced-colors: none) {
      :host(${uC}) .control {
        opacity: ${Ya};
      }
    }

    ${Gv(0,0,0,uC)}
  `.withBehaviors(Yv("neutral",Vv(0,0,cC,uC)),Yv("accent",Wv(0,0,cC,uC)),Yv("lightweight",Kv(0,0,cC,uC)),Yv("outline",zv(0,0,cC,uC)),Yv("stealth",jv(0,0,cC,uC))),shadowOptions:{delegatesFocus:!0}}),hC="menuitem",fC="menuitemcheckbox",gC="menuitemradio",mC={[hC]:"menuitem",[fC]:"menuitemcheckbox",[gC]:"menuitemradio"};var vC;!function(e){e.ltr="ltr",e.rtl="rtl"}(vC||(vC={}));const CC=e=>{const t=e.closest("[dir]");return null!==t&&"rtl"===t.dir?vC.rtl:vC.ltr};class yC extends Zg{constructor(){super(...arguments),this.role=hC,this.hasSubmenu=!1,this.currentDirection=vC.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=e=>{if(e.defaultPrevented)return!1;switch(e.key){case iv:case sv:return this.invoke(),!1;case tv:return this.expandAndFocus(),!1;case ev:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=e=>(e.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=e=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=e=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case fC:this.checked=!this.checked;break;case hC:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case gC:this.checked||(this.checked=!0)}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find((e=>"menu"===e.getAttribute("role"))),this.hasSubmenu=void 0!==this.submenu}}expandedChanged(e){if(this.$fastController.isConnected){if(void 0===this.submenu)return;!1===this.expanded?this.submenu.collapseExpandedItem():this.currentDirection=CC(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(e,t){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),Gi.queueUpdate((()=>{this.updateSubmenu()})),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,void 0!==this.observer&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter((e=>!e.hasAttribute("hidden")))}}tr([xr({mode:"boolean"})],yC.prototype,"disabled",void 0),tr([xr({mode:"boolean"})],yC.prototype,"expanded",void 0),tr([ar],yC.prototype,"startColumnCount",void 0),tr([xr],yC.prototype,"role",void 0),tr([xr({mode:"boolean"})],yC.prototype,"checked",void 0),tr([ar],yC.prototype,"submenuRegion",void 0),tr([ar],yC.prototype,"hasSubmenu",void 0),tr([ar],yC.prototype,"currentDirection",void 0),tr([ar],yC.prototype,"submenu",void 0),vv(yC,fv);class SC extends Zg{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&Ov(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=e=>{if(!this.contains(e.relatedTarget)&&void 0!==this.menuItems){this.collapseExpandedItem();const e=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[e].setAttribute("tabindex","0"),this.focusIndex=e}},this.handleItemFocus=e=>{const t=e.target;void 0!==this.menuItems&&t!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0"))},this.handleExpandedChanged=e=>{if(e.defaultPrevented||null===e.target||void 0===this.menuItems||this.menuItems.indexOf(e.target)<0)return;e.preventDefault();const t=e.target;null===this.expandedItem||t!==this.expandedItem||!1!==t.expanded?t.expanded&&(null!==this.expandedItem&&this.expandedItem!==t&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=t,this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0")):this.expandedItem=null},this.removeItemListeners=()=>{void 0!==this.menuItems&&this.menuItems.forEach((e=>{e.removeEventListener("expanded-change",this.handleExpandedChanged),e.removeEventListener("focus",this.handleItemFocus)}))},this.setItems=()=>{const e=this.domChildren();this.removeItemListeners(),this.menuItems=e;const t=this.menuItems.filter(this.isMenuItemElement);t.length&&(this.focusIndex=0);const n=t.reduce(((e,t)=>{const n=function(e){const t=e.getAttribute("role"),n=e.querySelector("[slot=start]");return t!==hC&&null===n||t===hC&&null!==n?1:t!==hC&&null!==n?2:0}(t);return e>n?e:n}),0);t.forEach(((e,t)=>{e.setAttribute("tabindex",0===t?"0":"-1"),e.addEventListener("expanded-change",this.handleExpandedChanged),e.addEventListener("focus",this.handleItemFocus),e instanceof yC&&(e.startColumnCount=n)}))},this.changeHandler=e=>{if(void 0===this.menuItems)return;const t=e.target,n=this.menuItems.indexOf(t);if(-1!==n&&"menuitemradio"===t.role&&!0===t.checked){for(let e=n-1;e>=0;--e){const t=this.menuItems[e],n=t.getAttribute("role");if(n===gC&&(t.checked=!1),"separator"===n)break}const e=this.menuItems.length-1;for(let t=n+1;t<=e;++t){const e=this.menuItems[t],n=e.getAttribute("role");if(n===gC&&(e.checked=!1),"separator"===n)break}}},this.isMenuItemElement=e=>Ov(e)&&SC.focusableElementRoles.hasOwnProperty(e.getAttribute("role")),this.isFocusableElement=e=>this.isMenuItemElement(e)}itemsChanged(e,t){this.$fastController.isConnected&&void 0!==this.menuItems&&this.setItems()}connectedCallback(){super.connectedCallback(),Gi.queueUpdate((()=>{this.setItems()})),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(e){if(!e.defaultPrevented&&void 0!==this.menuItems)switch(e.key){case Qm:return void this.setFocus(this.focusIndex+1,1);case nv:return void this.setFocus(this.focusIndex-1,-1);case av:return void this.setFocus(this.menuItems.length-1,-1);case rv:return void this.setFocus(0,1);default:return!0}}domChildren(){return Array.from(this.children).filter((e=>!e.hasAttribute("hidden")))}setFocus(e,t){if(void 0!==this.menuItems)for(;e>=0&&e<this.menuItems.length;){const n=this.menuItems[e];if(this.isFocusableElement(n)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=e,n.setAttribute("tabindex","0"),n.focus();break}e+=t}}}SC.focusableElementRoles=mC,tr([ar],SC.prototype,"items",void 0);const bC="horizontal",TC="separator";class xC extends Zg{constructor(){super(...arguments),this.role=TC,this.orientation=bC}}tr([xr],xC.prototype,"role",void 0),tr([xr],xC.prototype,"orientation",void 0);const EC=Zr.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(e,t,n)=>{let i=.12,o=.14;t>16&&(i=.2,o=.24);return`${`0 0 2px rgba(0, 0, 0, ${i})`}, ${`0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${o})`}`}}),kC=Zr.create("elevation-shadow-card-rest-size").withDefault(4),AC=Zr.create("elevation-shadow-card-hover-size").withDefault(8),IC=Zr.create("elevation-shadow-card-active-size").withDefault(0),OC=Zr.create("elevation-shadow-card-focus-size").withDefault(8),DC=(Zr.create("elevation-shadow-card-rest").withDefault((e=>EC.getValueFor(e).evaluate(e,kC.getValueFor(e)))),Zr.create("elevation-shadow-card-hover").withDefault((e=>EC.getValueFor(e).evaluate(e,AC.getValueFor(e)))),Zr.create("elevation-shadow-card-active").withDefault((e=>EC.getValueFor(e).evaluate(e,IC.getValueFor(e)))),Zr.create("elevation-shadow-card-focus").withDefault((e=>EC.getValueFor(e).evaluate(e,OC.getValueFor(e)))),Zr.create("elevation-shadow-tooltip-size").withDefault(16)),PC=Zr.create("elevation-shadow-tooltip").withDefault((e=>EC.getValueFor(e).evaluate(e,DC.getValueFor(e)))),wC=Zr.create("elevation-shadow-flyout-size").withDefault(32),RC=Zr.create("elevation-shadow-flyout").withDefault((e=>EC.getValueFor(e).evaluate(e,wC.getValueFor(e)))),NC=Zr.create("elevation-shadow-dialog-size").withDefault(128),_C=Zr.create("elevation-shadow-dialog").withDefault((e=>EC.getValueFor(e).evaluate(e,NC.getValueFor(e))));const MC=class extends SC{connectedCallback(){super.connectedCallback(),Kl.setValueFor(this,Hl)}}.compose({baseName:"menu",baseClass:SC,template:(e,t)=>Bm`
    <template
        slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,t)=>e.handleMenuKeyDown(t.event)}"
        @focusout="${(e,t)=>e.handleFocusOut(t.event)}"
    >
        <slot ${kv("items")}></slot>
    </template>
`,styles:(e,t)=>dm`
    ${zm("block")} :host {
      background: ${Hl};
      border: calc(${ts} * 1px) solid transparent;
      border-radius: calc(${es} * 1px);
      box-shadow: ${RC};
      padding: calc((${Ja} - ${ts}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${Ja} * 2px);
    }

    ::slotted(${e.tagFor(yC)}) {
      margin: 0 calc(${Ja} * 1px);
    }

    ::slotted(${e.tagFor(xC)}) {
      margin: calc(${Ja} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${Ja} * 1px) 0;
      border: none;
      border-top: calc(${ts} * 1px) solid ${Xc};
    }
  `.withBehaviors(Wm(dm`
        :host([slot='submenu']) {
          background: ${jm.Canvas};
          border-color: ${jm.CanvasText};
        }
      `))}),LC=e=>"function"==typeof e,FC=()=>null;function HC(e){return void 0===e?FC:LC(e)?e:()=>e}function UC(e,t,n){const i=LC(e)?e:()=>e,o=HC(t),r=HC(n);return(e,t)=>i(e,t)?o(e,t):r(e,t)}const BC="resize",GC="scroll";class VC extends Zg{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=vC.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(VC.intersectionService.requestPosition(this,this.handleIntersection),VC.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&VC.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,VC.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&VC.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&VC.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>"string"!=typeof this.viewport||""===this.viewport?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=e=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(e)&&this.updateLayout())},this.applyIntersectionEntries=e=>{const t=e.find((e=>e.target===this)),n=e.find((e=>e.target===this.anchorElement)),i=e.find((e=>e.target===this.viewportElement));return void 0!==t&&void 0!==i&&void 0!==n&&(!!(!this.regionVisible||this.forceUpdate||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect||this.isRectDifferent(this.anchorRect,n.boundingClientRect)||this.isRectDifferent(this.viewportRect,i.boundingClientRect)||this.isRectDifferent(this.regionRect,t.boundingClientRect))&&(this.regionRect=t.boundingClientRect,this.anchorRect=n.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(i.boundingClientRect.x+document.documentElement.scrollLeft,i.boundingClientRect.y+document.documentElement.scrollTop,i.boundingClientRect.width,i.boundingClientRect.height):this.viewportRect=i.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0))},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(e,t)=>Math.abs(e.top-t.top)>this.updateThreshold||Math.abs(e.right-t.right)>this.updateThreshold||Math.abs(e.bottom-t.bottom)>this.updateThreshold||Math.abs(e.left-t.left)>this.updateThreshold,this.handleResize=e=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=CC(this),this.startObservers())},this.updateLayout=()=>{let e,t;if("uncontrolled"!==this.horizontalPositioningMode){const e=this.getPositioningOptions(this.horizontalInset);if("center"===this.horizontalDefaultPosition)t="center";else if("unset"!==this.horizontalDefaultPosition){let e=this.horizontalDefaultPosition;if("start"===e||"end"===e){const t=CC(this);if(t!==this.currentDirection)return this.currentDirection=t,void this.initialize();e=this.currentDirection===vC.ltr?"start"===e?"left":"right":"start"===e?"right":"left"}switch(e){case"left":t=this.horizontalInset?"insetStart":"start";break;case"right":t=this.horizontalInset?"insetEnd":"end"}}const n=void 0!==this.horizontalThreshold?this.horizontalThreshold:void 0!==this.regionRect?this.regionRect.width:0,i=void 0!==this.anchorRect?this.anchorRect.left:0,o=void 0!==this.anchorRect?this.anchorRect.right:0,r=void 0!==this.anchorRect?this.anchorRect.width:0,a=void 0!==this.viewportRect?this.viewportRect.left:0,s=void 0!==this.viewportRect?this.viewportRect.right:0;(void 0===t||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableSpace(t,i,o,r,a,s)<n)&&(t=this.getAvailableSpace(e[0],i,o,r,a,s)>this.getAvailableSpace(e[1],i,o,r,a,s)?e[0]:e[1])}if("uncontrolled"!==this.verticalPositioningMode){const t=this.getPositioningOptions(this.verticalInset);if("center"===this.verticalDefaultPosition)e="center";else if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":e=this.verticalInset?"insetStart":"start";break;case"bottom":e=this.verticalInset?"insetEnd":"end"}const n=void 0!==this.verticalThreshold?this.verticalThreshold:void 0!==this.regionRect?this.regionRect.height:0,i=void 0!==this.anchorRect?this.anchorRect.top:0,o=void 0!==this.anchorRect?this.anchorRect.bottom:0,r=void 0!==this.anchorRect?this.anchorRect.height:0,a=void 0!==this.viewportRect?this.viewportRect.top:0,s=void 0!==this.viewportRect?this.viewportRect.bottom:0;(void 0===e||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableSpace(e,i,o,r,a,s)<n)&&(e=this.getAvailableSpace(t[0],i,o,r,a,s)>this.getAvailableSpace(t[1],i,o,r,a,s)?t[0]:t[1])}const n=this.getNextRegionDimension(t,e),i=this.horizontalPosition!==t||this.verticalPosition!==e;if(this.setHorizontalPosition(t,n),this.setVerticalPosition(e,n),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),i&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top","start"===this.verticalPosition),this.classList.toggle("bottom","end"===this.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.verticalPosition),this.classList.toggle("vertical-center","center"===this.verticalPosition),this.classList.toggle("left","start"===this.horizontalPosition),this.classList.toggle("right","end"===this.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.horizontalPosition),this.classList.toggle("horizontal-center","center"===this.horizontalPosition)},this.setHorizontalPosition=(e,t)=>{if(void 0===e||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let n=0;switch(this.horizontalScaling){case"anchor":case"fill":n=this.horizontalViewportLock?this.viewportRect.width:t.width,this.regionWidth=`${n}px`;break;case"content":n=this.regionRect.width,this.regionWidth="unset"}let i=0;switch(e){case"start":this.translateX=this.baseHorizontalOffset-n,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-n+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(i=(this.anchorRect.width-n)/2,this.translateX=this.baseHorizontalOffset+i,this.horizontalViewportLock){const e=this.anchorRect.left+i,t=this.anchorRect.right-i;e<this.viewportRect.left&&!(t>this.viewportRect.right)?this.translateX=this.translateX-(e-this.viewportRect.left):t>this.viewportRect.right&&!(e<this.viewportRect.left)&&(this.translateX=this.translateX-(t-this.viewportRect.right))}}this.horizontalPosition=e},this.setVerticalPosition=(e,t)=>{if(void 0===e||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let n=0;switch(this.verticalScaling){case"anchor":case"fill":n=this.verticalViewportLock?this.viewportRect.height:t.height,this.regionHeight=`${n}px`;break;case"content":n=this.regionRect.height,this.regionHeight="unset"}let i=0;switch(e){case"start":this.translateY=this.baseVerticalOffset-n,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-n+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(i=(this.anchorRect.height-n)/2,this.translateY=this.baseVerticalOffset+i,this.verticalViewportLock){const e=this.anchorRect.top+i,t=this.anchorRect.bottom-i;e<this.viewportRect.top&&!(t>this.viewportRect.bottom)?this.translateY=this.translateY-(e-this.viewportRect.top):t>this.viewportRect.bottom&&!(e<this.viewportRect.top)&&(this.translateY=this.translateY-(t-this.viewportRect.bottom))}}this.verticalPosition=e},this.getPositioningOptions=e=>e?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(e,t,n,i,o,r)=>{const a=t-o,s=r-(t+i);switch(e){case"start":return a;case"insetStart":return a+i;case"insetEnd":return s+i;case"end":return s;case"center":return 2*Math.min(a,s)+i}},this.getNextRegionDimension=(e,t)=>{const n={height:void 0!==this.regionRect?this.regionRect.height:0,width:void 0!==this.regionRect?this.regionRect.width:0};return void 0!==e&&"fill"===this.horizontalScaling?n.width=this.getAvailableSpace(e,void 0!==this.anchorRect?this.anchorRect.left:0,void 0!==this.anchorRect?this.anchorRect.right:0,void 0!==this.anchorRect?this.anchorRect.width:0,void 0!==this.viewportRect?this.viewportRect.left:0,void 0!==this.viewportRect?this.viewportRect.right:0):"anchor"===this.horizontalScaling&&(n.width=void 0!==this.anchorRect?this.anchorRect.width:0),void 0!==t&&"fill"===this.verticalScaling?n.height=this.getAvailableSpace(t,void 0!==this.anchorRect?this.anchorRect.top:0,void 0!==this.anchorRect?this.anchorRect.bottom:0,void 0!==this.anchorRect?this.anchorRect.height:0,void 0!==this.viewportRect?this.viewportRect.top:0,void 0!==this.viewportRect?this.viewportRect.bottom:0):"anchor"===this.verticalScaling&&(n.height=void 0!==this.anchorRect?this.anchorRect.height:0),n},this.startAutoUpdateEventListeners=()=>{window.addEventListener(BC,this.update,{passive:!0}),window.addEventListener(GC,this.update,{passive:!0,capture:!0}),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(BC,this.update),window.removeEventListener(GC,this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(e,t){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===e&&this.stopAutoUpdateEventListeners(),"auto"===t&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.setInitialState(),Gi.queueUpdate((()=>this.reset())),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}VC.intersectionService=new class{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(e,t)=>{var n;null!==this.intersectionDetector&&(this.observedElements.has(e)?null===(n=this.observedElements.get(e))||void 0===n||n.push(t):(this.observedElements.set(e,[t]),this.intersectionDetector.observe(e)))},this.cancelRequestPosition=(e,t)=>{const n=this.observedElements.get(e);if(void 0!==n){const e=n.indexOf(t);-1!==e&&n.splice(e,1)}},this.initializeIntersectionDetector=()=>{Pi.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=e=>{if(null===this.intersectionDetector)return;const t=[],n=[];e.forEach((e=>{var i;null===(i=this.intersectionDetector)||void 0===i||i.unobserve(e.target);const o=this.observedElements.get(e.target);void 0!==o&&(o.forEach((i=>{let o=t.indexOf(i);-1===o&&(o=t.length,t.push(i),n.push([])),n[o].push(e)})),this.observedElements.delete(e.target))})),t.forEach(((e,t)=>{e(n[t])}))},this.initializeIntersectionDetector()}},tr([xr],VC.prototype,"anchor",void 0),tr([xr],VC.prototype,"viewport",void 0),tr([xr({attribute:"horizontal-positioning-mode"})],VC.prototype,"horizontalPositioningMode",void 0),tr([xr({attribute:"horizontal-default-position"})],VC.prototype,"horizontalDefaultPosition",void 0),tr([xr({attribute:"horizontal-viewport-lock",mode:"boolean"})],VC.prototype,"horizontalViewportLock",void 0),tr([xr({attribute:"horizontal-inset",mode:"boolean"})],VC.prototype,"horizontalInset",void 0),tr([xr({attribute:"horizontal-threshold"})],VC.prototype,"horizontalThreshold",void 0),tr([xr({attribute:"horizontal-scaling"})],VC.prototype,"horizontalScaling",void 0),tr([xr({attribute:"vertical-positioning-mode"})],VC.prototype,"verticalPositioningMode",void 0),tr([xr({attribute:"vertical-default-position"})],VC.prototype,"verticalDefaultPosition",void 0),tr([xr({attribute:"vertical-viewport-lock",mode:"boolean"})],VC.prototype,"verticalViewportLock",void 0),tr([xr({attribute:"vertical-inset",mode:"boolean"})],VC.prototype,"verticalInset",void 0),tr([xr({attribute:"vertical-threshold"})],VC.prototype,"verticalThreshold",void 0),tr([xr({attribute:"vertical-scaling"})],VC.prototype,"verticalScaling",void 0),tr([xr({attribute:"fixed-placement",mode:"boolean"})],VC.prototype,"fixedPlacement",void 0),tr([xr({attribute:"auto-update-mode"})],VC.prototype,"autoUpdateMode",void 0),tr([ar],VC.prototype,"anchorElement",void 0),tr([ar],VC.prototype,"viewportElement",void 0),tr([ar],VC.prototype,"initialLayoutComplete",void 0);class WC{constructor(e,t){this.cache=new WeakMap,this.ltr=e,this.rtl=t}bind(e){this.attach(e)}unbind(e){const t=this.cache.get(e);t&&$a.unsubscribe(t)}attach(e){const t=this.cache.get(e)||new KC(this.ltr,this.rtl,e),n=$a.getValueFor(e);$a.subscribe(t),t.attach(n),this.cache.set(e,t)}}class KC{constructor(e,t,n){this.ltr=e,this.rtl=t,this.source=n,this.attached=null}handleChange({target:e,token:t}){this.attach(t.getValueFor(this.source))}attach(e){this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const zC=yC.compose({baseName:"menu-item",template:(e,t)=>Bm`
    <template
        role="${e=>e.role}"
        aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
        aria-checked="${e=>e.role!==hC?e.checked:void 0}"
        aria-disabled="${e=>e.disabled}"
        aria-expanded="${e=>e.expanded}"
        @keydown="${(e,t)=>e.handleMenuItemKeyDown(t.event)}"
        @click="${(e,t)=>e.handleMenuItemClick(t.event)}"
        @mouseover="${(e,t)=>e.handleMouseOver(t.event)}"
        @mouseout="${(e,t)=>e.handleMouseOut(t.event)}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.expanded?"expanded":""} ${e=>`indent-${e.startColumnCount}`}"
    >
            ${UC((e=>e.role===fC),Bm`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${UC((e=>e.role===gC),Bm`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${mv(0,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${gv(0,t)}
        ${UC((e=>e.hasSubmenu),Bm`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${t.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${UC((e=>e.expanded),Bm`
                <${e.tagFor(VC)}
                    :anchorElement="${e=>e}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${e=>e.currentDirection}"
                    @loaded="${e=>e.submenuLoaded()}"
                    ${hv("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${e.tagFor(VC)}>
            `)}
    </template>
`,styles:(e,t)=>dm`
    ${zm("grid")} :host {
      contain: layout;
      overflow: visible;
      ${Av}
      box-sizing: border-box;
      height: calc(${Nv} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${Hc};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${Qa} * 1px);
      border: calc(${ts} * 1px) solid transparent;
      position: relative;
    }

    :host(.indent-0) {
      grid-template-columns: auto 1fr minmax(32px, auto);
    }

    :host(.indent-0) .content {
      grid-column: 1;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-0) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) {
      grid-template-columns: minmax(32px, auto) minmax(32px, auto) 1fr minmax(32px, auto) minmax(32px, auto);
    }

    :host(.indent-2) .content {
      grid-column: 3;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) .start {
      grid-column: 2;
    }

    :host(.indent-2) .end {
      grid-column: 4;
    }

    :host(:${Pv}) {
      ${wv}
    }

    :host(:not([disabled]):hover) {
      background: ${Nc};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${_c};
      color: ${Hc};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${lC};
      opacity: ${Ya};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end {
      display: flex;
      justify-content: center;
    }

    :host(.indent-0[aria-haspopup='menu']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-1[aria-haspopup='menu']),
    :host(.indent-1[role='menuitemcheckbox']),
    :host(.indent-1[role='menuitemradio']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup='menu'])) .end {
      grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
      display: none;
    }

    :host([aria-haspopup='menu']) .expand-collapse-glyph-container,
    :host([role='menuitemcheckbox']) .input-container,
    :host([role='menuitemradio']) .input-container {
      display: grid;
    }

    :host([aria-haspopup='menu']) .content,
    :host([role='menuitemcheckbox']) .content,
    :host([role='menuitemradio']) .content {
      grid-column-start: 3;
    }

    :host([aria-haspopup='menu'].indent-0) .content {
      grid-column-start: 1;
    }

    :host([aria-haspopup='menu']) .end,
    :host([role='menuitemcheckbox']) .end,
    :host([role='menuitemradio']) .end {
      grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    slot[name='checkbox-indicator'],
    slot[name='radio-indicator'] {
      display: none;
    }

    ::slotted([slot='end']:not(svg)) {
      margin-inline-end: 10px;
      color: ${Bc};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(Wm(dm`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${jm.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${jm.Highlight};
          color: ${jm.HighlightText};
          fill: currentcolor;
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg),
        :host(:hover) ::slotted([slot='end']:not(svg)),
        :host(:${Pv}) ::slotted([slot='end']:not(svg)) {
          color: ${jm.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${jm.Highlight};
          color: ${jm.HighlightText};
        }
        :host(:${Pv}) {
          background: ${jm.Highlight};
          outline-color: ${jm.ButtonText};
          color: ${jm.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${Pv}) {
          background: ${jm.ButtonFace};
          color: ${jm.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${Pv}) {
          outline-color: ${jm.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${jm.ButtonText};
          background: ${jm.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${jm.HighlightText};
          border-color: ${jm.HighlightText};
        }
        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${Pv}) .expanded-toggle,
            :host(:${Pv}) .checkbox,
            :host(:${Pv}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${Pv}) .checkbox,
            :host([checked]:${Pv}) .radio {
          border-color: ${jm.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${jm.Highlight};
          color: ${jm.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${jm.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${jm.Highlight};
        }
      `),new WC(dm`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,dm`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),checkboxIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',expandCollapseGlyph:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M5.65 3.15a.5.5 0 000 .7L9.79 8l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  ',radioIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="2"/>\n    </svg>\n  '});class jC extends Zg{}tr([xr({mode:"boolean"})],jC.prototype,"disabled",void 0);const $C=jC.compose({baseName:"tab",template:(e,t)=>Bm`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>dm`
      ${zm("inline-flex")} :host {
        box-sizing: border-box;
        ${Av}
        height: calc((${Nv} + (${Ja} * 2)) * 1px);
        padding: 0 calc((6 + (${Ja} * 2 * ${Za})) * 1px);
        color: ${Hc};
        border-radius: calc(${Qa} * 1px);
        border: calc(${ts} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1 / 3;
        cursor: pointer;
      }

      :host([aria-selected='true']) {
        z-index: 2;
      }

      :host(:hover),
      :host(:active) {
        color: ${Hc};
      }

      :host(:${Pv}) {
        ${wv}
      }

      :host(.vertical) {
        justify-content: start;
        grid-column: 1 / 3;
      }

      :host(.vertical[aria-selected='true']) {
        z-index: 2;
      }

      :host(.vertical:hover),
      :host(.vertical:active) {
        color: ${Hc};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(Wm(dm`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${jm.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${jm.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${jm.Highlight};
            fill: currentcolor;
          }
          :host(:${Pv}) {
            background: transparent;
            outline-color: ${jm.ButtonText};
          }
        `))});const YC=class extends Zg{}.compose({baseName:"tab-panel",template:(e,t)=>Bm`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>dm`
  ${zm("block")} :host {
    box-sizing: border-box;
    ${Av}
    padding: 0 calc((6 + (${Ja} * 2 * ${Za})) * 1px);
  }
`});let qC=0;function XC(e=""){return`${e}${qC++}`}const ZC="horizontal";class JC extends Zg{constructor(){super(...arguments),this.orientation=ZC,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",n=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((i,o)=>{if("tab"===i.slot){const e=this.activeTabIndex===o&&this.isFocusableElement(i);this.activeindicator&&this.isFocusableElement(i)&&(this.showActiveIndicator=!0);const t=this.tabIds[o],n=this.tabpanelIds[o];i.setAttribute("id",t),i.setAttribute("aria-selected",e?"true":"false"),i.setAttribute("aria-controls",n),i.addEventListener("click",this.handleTabClick),i.addEventListener("keydown",this.handleTabKeyDown),i.setAttribute("tabindex",e?"0":"-1"),e&&(this.activetab=i)}i.style[e]="",i.style[t]="",i.style[n]=`${o+1}`,this.isHorizontal()?i.classList.remove("vertical"):i.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((e,t)=>{const n=this.tabIds[t],i=this.tabpanelIds[t];e.setAttribute("id",i),e.setAttribute("aria-labelledby",n),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case ev:e.preventDefault(),this.adjustBackward(e);break;case tv:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case nv:e.preventDefault(),this.adjustBackward(e);break;case Qm:e.preventDefault(),this.adjustForward(e)}switch(e.key){case rv:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case av:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)+1:1,n===t.length&&(n=0);n<t.length&&t.length>1;){if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}if(this.activetab&&n===t.indexOf(this.activetab))break;n+1>=t.length?n=0:n+=1}},this.adjustBackward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)-1:0,n=n<0?t.length-1:n;n>=0&&t.length>1;){if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}n-1<0?n=t.length-1:n-=1}},this.moveToTabByIndex=(e,t)=>{const n=e[t];this.activetab=n,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,n.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${XC()}`}))}getTabPanelIds(){return this.tabpanels.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${XC()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===ZC}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",n=this.isHorizontal()?"offsetLeft":"offsetTop",i=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const r=o-i;this.activeIndicatorRef.style.transform=`${t}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=uv(0,this.tabs.length-1,this.activeTabIndex+e),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}tr([xr],JC.prototype,"orientation",void 0),tr([xr],JC.prototype,"activeid",void 0),tr([ar],JC.prototype,"tabs",void 0),tr([ar],JC.prototype,"tabpanels",void 0),tr([xr({mode:"boolean"})],JC.prototype,"activeindicator",void 0),tr([ar],JC.prototype,"activeIndicatorRef",void 0),tr([ar],JC.prototype,"showActiveIndicator",void 0),vv(JC,fv);const QC=JC.compose({baseName:"tabs",template:(e,t)=>Bm`
    <template class="${e=>e.orientation}">
        ${mv(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${kv("tabs")}></slot>

            ${UC((e=>e.showActiveIndicator),Bm`
                    <div
                        ${hv("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${gv(0,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${kv("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>dm`
      ${zm("grid")} :host {
        box-sizing: border-box;
        ${Av}
        color: ${Hc};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${Nv} * 1px); auto;
        grid-template-columns: auto;
        position: relative;
        width: max-content;
        align-self: end;
      }

      .start,
      .end {
        align-self: center;
      }

      .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(${Qa} * 1px);
        justify-self: center;
        background: ${$l};
      }

      .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
      }

      .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
      }

      :host(.vertical) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
      }

      :host(.vertical) .tablist {
        grid-row-start: 2;
        grid-row-end: 2;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
        position: relative;
        width: max-content;
        justify-self: end;
        align-self: flex-start;
        width: 100%;
      }

      :host(.vertical) .tabpanel {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      :host(.vertical) .end {
        grid-row: 3;
      }

      :host(.vertical) .activeIndicator {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 20px;
        margin-inline-start: calc(${ns} * 1px);
        border-radius: calc(${Qa} * 1px);
        align-self: center;
        background: ${$l};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(Wm(dm`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${jm.Highlight};
        }
      `))});class ey extends Zg{}class ty extends(iC(ey)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ny extends ty{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case iv:case sv:this.checked=!this.checked}},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(e,t){super.checkedChanged(e,t),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}tr([xr({attribute:"readonly",mode:"boolean"})],ny.prototype,"readOnly",void 0),tr([ar],ny.prototype,"defaultSlottedNodes",void 0);const iy=ny.compose({baseName:"switch",template:(e,t)=>Bm`
    <template
        role="switch"
        aria-checked="${e=>e.checked}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.checked?"checked":""}"
    >
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${kv("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${t.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`,styles:(e,t)=>dm`
    :host([hidden]) {
      display: none;
    }

    ${zm("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${is};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${Ya};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${lC};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${Nv} / 2) + ${Ja}) * 2px);
      height: calc(((${Nv} / 2) + ${Ja}) * 1px);
      background: ${Cc};
      border-radius: calc(${Nv} * 1px);
      border: calc(${ts} * 1px) solid ${iu};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${yc};
      border-color: ${ou};
    }

    :host(:not(.disabled):active) .switch {
      background: ${Sc};
      border-color: ${ru};
    }

    :host(:${Pv}) .switch {
      ${Rv}
      background: ${bc};
    }

    :host(.checked) .switch {
      background: ${$l};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${Yl};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${ql};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${Hc};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${Hc};
      cursor: pointer;
      ${Av}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${Hc};
      ${Av}
      margin-inline-end: calc(${Ja} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${Ja} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${$l};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${Jl};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${Yl};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${Ql};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${ql};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${ec};
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host(.checked) .unchecked-message {
      display: none;
    }

    :host(.checked) .checked-message {
      display: block;
    }
  `.withBehaviors(new WC(dm`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,dm`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),Wm(dm`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${jm.FieldText};
        }
        .switch {
          background: ${jm.Field};
          border-color: ${jm.FieldText};
        }
        :host(.checked) .switch {
          background: ${jm.Highlight};
          border-color: ${jm.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${jm.HighlightText};
          border-color: ${jm.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${jm.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${jm.Highlight};
        }
        :host(:${Pv}) .switch {
          forced-color-adjust: none;
          background: ${jm.Field}; 
          border-color: ${jm.Highlight};
          outline-color: ${jm.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${jm.GrayText};
        }
        :host(.disabled) .switch {
          background: ${jm.Field};
          border-color: ${jm.GrayText};
        }
        .status-message,
        .label {
          color: ${jm.FieldText};
        }
      `)),switch:'\n    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n      <rect x="2" y="2" width="12" height="12" rx="6"/>\n    </svg>\n  '});class oy extends Zg{}class ry extends(nC(oy)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const ay="text";class sy extends ry{constructor(){super(...arguments),this.type=ay}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&Gi.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}tr([xr({attribute:"readonly",mode:"boolean"})],sy.prototype,"readOnly",void 0),tr([xr({mode:"boolean"})],sy.prototype,"autofocus",void 0),tr([xr],sy.prototype,"placeholder",void 0),tr([xr],sy.prototype,"type",void 0),tr([xr],sy.prototype,"list",void 0),tr([xr({converter:br})],sy.prototype,"maxlength",void 0),tr([xr({converter:br})],sy.prototype,"minlength",void 0),tr([xr],sy.prototype,"pattern",void 0),tr([xr({converter:br})],sy.prototype,"size",void 0),tr([xr({mode:"boolean"})],sy.prototype,"spellcheck",void 0),tr([ar],sy.prototype,"defaultSlottedNodes",void 0);class ly{}function cy(e,t,n){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}vv(ly,Hv),vv(sy,fv,ly);const uy=Zr.create("input-placeholder-rest").withDefault((e=>{const t=hc.getValueFor(e);return Uc.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),dy=Zr.create("input-placeholder-hover").withDefault((e=>{const t=hc.getValueFor(e);return Uc.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),py=Zr.create("input-filled-placeholder-rest").withDefault((e=>{const t=Ac.getValueFor(e);return Uc.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),hy=Zr.create("input-filled-placeholder-hover").withDefault((e=>{const t=Ac.getValueFor(e);return Uc.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),fy=(e,t,n,i=":not([disabled]):not(:focus-within)")=>dm`
  ${n} {
    background: ${Ic};
  }

  :host(${i}:hover) ${n} {
    background: ${Oc};
  }

  :host(:not([disabled]):focus-within) ${n} {
    background: ${Pc};
  }

  :host([disabled]) ${n} {
    background: ${Ic};
  }

  .control::placeholder {
    color: ${py};
  }

  :host(${i}:hover) .control::placeholder {
    color: ${hy};
  }
`,gy=(e,t,n,i=":not([disabled]):not(:focus-within)")=>dm`
  :host {
    color: ${jm.ButtonText};
  }

  ${n} {
    background: ${jm.ButtonFace};
    border-color: ${jm.ButtonText};
  }

  :host(${i}:hover) ${n},
  :host(:not([disabled]):focus-within) ${n} {
    border-color: ${jm.Highlight};
  }

  :host([disabled]) ${n} {
    opacity: 1;
    background: ${jm.ButtonFace};
    border-color: ${jm.GrayText};
  }

  .control::placeholder,
  :host(${i}:hover) .control::placeholder {
    color: ${jm.CanvasText};
  }

  :host(:not([disabled]):focus) ${n} {
    ${wv}
    outline-color: ${jm.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${jm.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${jm.GrayText};
  }
`,my=".root";class vy extends sy{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}lm([xr],vy.prototype,"appearance",void 0);const Cy=vy.compose({baseName:"text-field",baseClass:sy,template:(e,t)=>Bm`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${kv({property:"defaultSlottedNodes",filter:cy})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${mv(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${hv("control")}
            />
            ${gv(0,t)}
        </div>
    </template>
`,styles:(e,t)=>dm`
    ${zm("inline-block")}

    ${((e,t,n)=>dm`
  :host {
    ${Av}
    color: ${Hc};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${n} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${ts} * 1px) solid transparent;
    border-radius: calc(${Qa} * 1px);
    height: calc(${Nv} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
    outline: none;
  }

  .label {
    display: block;
    color: ${Hc};
    cursor: pointer;
    ${Av}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${n},
  :host([readonly]) ${n},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${lC};
  }

  :host([disabled]) {
    opacity: ${Ya};
  }
`)(0,0,my)}

    ${dm`
  @media (forced-colors: none) {
    :host(:not([disabled]):active)::after {
      left: 50%;
      width: 40%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(:not([disabled]):focus-within)::after {
      left: 0;
      width: 100%;
      transform: none;
    }

    :host(:not([disabled]):active)::after,
    :host(:not([disabled]):focus-within:not(:active))::after {
      content: '';
      position: absolute;
      height: calc(${ns} * 1px);
      bottom: 0;
      border-bottom: calc(${ns} * 1px) solid ${$l};
      border-bottom-left-radius: calc(${Qa} * 1px);
      border-bottom-right-radius: calc(${Qa} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${Ja} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors(Yv("outline",((e,t,n,i=":not([disabled]):not(:focus-within)")=>dm`
  ${n} {
    background: padding-box linear-gradient(${fc}, ${fc}),
      border-box ${Jc};
  }

  :host(${i}:hover) ${n} {
    background: padding-box linear-gradient(${gc}, ${gc}),
      border-box ${Qc};
  }

  :host(:not([disabled]):focus-within) ${n} {
    background: padding-box linear-gradient(${mc}, ${mc}),
      border-box ${Jc};
  }
  
  :host([disabled]) ${n} {
    background: padding-box linear-gradient(${fc}, ${fc}),
      border-box ${Vc};
  }

  .control::placeholder {
    color: ${uy};
  }

  :host(${i}:hover) .control::placeholder {
    color: ${dy};
  }
`)(0,0,my)),Yv("filled",fy(0,0,my)),Wm(gy(0,0,my))),shadowOptions:{delegatesFocus:!0}});class yy extends Zg{}class Sy extends(iC(yy)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class by extends Sy{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly&&e.key===sv)this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}tr([xr({attribute:"readonly",mode:"boolean"})],by.prototype,"readOnly",void 0),tr([ar],by.prototype,"defaultSlottedNodes",void 0),tr([ar],by.prototype,"indeterminate",void 0);const Ty=by.compose({baseName:"checkbox",template:(e,t)=>Bm`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${kv("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>dm`
    ${zm("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${Nv} / 2 + ${Ja}) * 1px);
      height: calc((${Nv} / 2 + ${Ja}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${Qa} * 1px);
      border: calc(${ts} * 1px) solid ${iu};
      background: ${Cc};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Av}
      color: ${Hc};
      ${""} padding-inline-start: calc(${Ja} * 2px + 2px);
      margin-inline-end: calc(${Ja} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${Hc};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${Jl};
    }

    :host(:not(.disabled):hover) .control {
      background: ${yc};
      border-color: ${ou};
    }

    :host(:not(.disabled):active) .control {
      background: ${Sc};
      border-color: ${ru};
    }

    :host(:${Pv}) .control {
      background: ${bc};
      ${Rv}
    }

    :host(.checked) .control {
      background: ${$l};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Yl};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${ql};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${lC};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Ya};
    }
  `.withBehaviors(Wm(dm`
        .control {
          border-color: ${jm.FieldText};
          background: ${jm.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${jm.Highlight};
          background: ${jm.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${jm.FieldText};
        }
        :host(:${Pv}) .control {
          forced-color-adjust: none;
          outline-color: ${jm.FieldText};
          background: ${jm.Field};
          border-color: ${jm.Highlight};
        }
        :host(.checked) .control {
          background: ${jm.Highlight};
          border-color: ${jm.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${jm.HighlightText};
          border-color: ${jm.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${jm.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${jm.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${jm.GrayText};
          background: ${jm.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${jm.GrayText};
        }
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',indeterminateIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>\n    </svg>\n  '});function xy(e){return Ov(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class Ey extends Zg{constructor(e,t,n,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),n&&(this.defaultSelected=n),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),rr.notify(this,"value")}get value(){var e;return rr.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}tr([ar],Ey.prototype,"checked",void 0),tr([ar],Ey.prototype,"content",void 0),tr([ar],Ey.prototype,"defaultSelected",void 0),tr([xr({mode:"boolean"})],Ey.prototype,"disabled",void 0),tr([xr({attribute:"selected",mode:"boolean"})],Ey.prototype,"selectedAttribute",void 0),tr([ar],Ey.prototype,"selected",void 0),tr([xr({attribute:"value",mode:"fromView"})],Ey.prototype,"initialValue",void 0);class ky{}tr([ar],ky.prototype,"ariaChecked",void 0),tr([ar],ky.prototype,"ariaPosInSet",void 0),tr([ar],ky.prototype,"ariaSelected",void 0),tr([ar],ky.prototype,"ariaSetSize",void 0),vv(ky,Hv),vv(Ey,fv,ky);class Ay extends Zg{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return rr.track(this,"options"),this._options}set options(e){this._options=e,rr.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const n=e>t?-1:e<t?1:0,i=e+n;let o=null;switch(n){case-1:o=this.options.reduceRight(((e,t,n)=>!e&&!t.disabled&&n<i?t:e),o);break;case 1:o=this.options.reduce(((e,t,n)=>!e&&!t.disabled&&n>i?t:e),o)}return this.options.indexOf(o)}handleChange(e,t){if("selected"===t)Ay.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions()}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),Ay.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case rv:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case Qm:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case nv:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case av:e.preventDefault(),this.selectLastOption();break;case lv:return this.focusAndScrollOptionIntoView(),!0;case iv:case ov:return!0;case sv:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var n;if(this.hasSelectableOptions){if((null===(n=this.options[this.selectedIndex])||void 0===n?void 0:n.disabled)&&"number"==typeof e){const n=this.getSelectableIndex(e,t),i=n>-1?n:e;return this.selectedIndex=i,void(t===i&&this.selectedIndexChanged(t,i))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var n;const i=t.filter(Ay.slottedOptionFilter);null===(n=this.options)||void 0===n||n.forEach((e=>{const t=rr.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=i.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let n=e.length;for(;n--;)if(t(e[n],n,e))return n;return-1}(this.options,(e=>!e.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,n;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(n=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==n?n:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(xy(t)&&e.push(t),e)),[]);const n=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=XC("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=n})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}Ay.slottedOptionFilter=e=>xy(e)&&!e.hidden,Ay.TYPE_AHEAD_TIMEOUT_MS=1e3,tr([xr({mode:"boolean"})],Ay.prototype,"disabled",void 0),tr([ar],Ay.prototype,"selectedIndex",void 0),tr([ar],Ay.prototype,"selectedOptions",void 0),tr([ar],Ay.prototype,"slottedOptions",void 0),tr([ar],Ay.prototype,"typeaheadBuffer",void 0);class Iy{}tr([ar],Iy.prototype,"ariaActiveDescendant",void 0),tr([ar],Iy.prototype,"ariaDisabled",void 0),tr([ar],Iy.prototype,"ariaExpanded",void 0),tr([ar],Iy.prototype,"ariaMultiSelectable",void 0),vv(Iy,Hv),vv(Ay,Iy);class Oy extends Ay{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var n,i;this.ariaActiveDescendant=null!==(i=null===(n=this.options[t])||void 0===n?void 0:n.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=dv(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=dv(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=dv(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=dv(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const n=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return n&&!n.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(n),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:n}=e;switch(this.shouldSkipFocus=!1,t){case rv:return void this.checkFirstOption(n);case Qm:return void this.checkNextOption(n);case nv:return void this.checkPreviousOption(n);case av:return void this.checkLastOption(n);case lv:return this.focusAndScrollOptionIntoView(),!0;case ov:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case sv:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var n;this.ariaMultiSelectable=t?"true":null,null===(n=this.options)||void 0===n||n.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var n;const i=Math.max(0,parseInt(null!==(n=null==t?void 0:t.toFixed())&&void 0!==n?n:"",10));i!==t&&Gi.queueUpdate((()=>{this.size=i}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}tr([ar],Oy.prototype,"activeIndex",void 0),tr([xr({mode:"boolean"})],Oy.prototype,"multiple",void 0),tr([xr({converter:br})],Oy.prototype,"size",void 0);const Dy=class extends Ay{}.compose({baseName:"listbox",template:(e,t)=>Bm`
    <template
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        <slot
            ${kv({filter:Oy.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,styles:(e,t)=>dm`
    ${zm("inline-flex")} :host {
      border: calc(${ts} * 1px) solid ${Vc};
      border-radius: calc(${Qa} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${Ja} * 1px) 0;
    }

    ::slotted(${e.tagFor(Ey)}) {
      margin: 0 calc(${Ja} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${wv}
    }
  `}),Py=Ey.compose({baseName:"option",template:(e,t)=>Bm`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${mv(0,t)}
        <span class="content" part="content">
            <slot ${kv("content")}></slot>
        </span>
        ${gv(0,t)}
    </template>
`,styles:(e,t)=>dm`
    ${zm("inline-flex")} :host {
      position: relative;
      ${Av}
      background: ${Rc};
      border-radius: calc(${Qa} * 1px);
      border: calc(${ts} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${Hc};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${Nv} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${Ja} * 3) - ${ts} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${ns} - ${ts}) * 1px);
      top: calc((${Nv} / 4) - ${ns} * 1px);
      width: 3px;
      height: calc((${Nv} / 2) * 1px);
      background: transparent;
      border-radius: calc(${Qa} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Nc};
    }

    :host(:not([disabled]):active) {
      background: ${_c};
    }

    :host(:not([disabled]):active)::before {
      background: ${$l};
      height: calc(((${Nv} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${$l};
    }

    :host(:${Pv}) {
      ${wv}
      background: ${Mc};
    }

    :host([aria-selected='true']) {
      background: ${Ic};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${Oc};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${Dc};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Nc};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${_c};
    }

    :host([disabled]) {
      cursor: ${lC};
      opacity: ${Ya};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(Wm(dm`
        :host {
          background: ${jm.ButtonFace};
          border-color: ${jm.ButtonFace};
          color: ${jm.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${jm.Highlight};
          color: ${jm.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${jm.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${jm.Canvas};
          color: ${jm.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${Pv}) {
          outline-color: ${jm.CanvasText};
        }
      `))});class wy extends Zg{}class Ry extends(iC(wy)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ny extends Ry{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key!==sv)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}tr([xr({attribute:"readonly",mode:"boolean"})],Ny.prototype,"readOnly",void 0),tr([ar],Ny.prototype,"name",void 0),tr([ar],Ny.prototype,"defaultSlottedNodes",void 0);const _y=Ny.compose({baseName:"radio",template:(e,t)=>Bm`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${kv("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>dm`
    ${zm("inline-flex")} :host {
      --input-size: calc((${Nv} / 2) + ${Ja});
      align-items: center;
      outline: none;
      ${""} user-select: none;
      position: relative;
      flex-direction: row;
      transition: all 0.2s ease-in-out;
    }

    .control {
      position: relative;
      width: calc(var(--input-size) * 1px);
      height: calc(var(--input-size) * 1px);
      box-sizing: border-box;
      border-radius: 50%;
      border: calc(${ts} * 1px) solid ${iu};
      background: ${Cc};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Av}
      color: ${Hc};
      ${""} padding-inline-start: calc(${Ja} * 2px + 2px);
      margin-inline-end: calc(${Ja} * 2px + 2px);
      cursor: pointer;
    }

    .control,
    slot[name='checked-indicator'] {
      flex-shrink: 0;
    }

    slot[name='checked-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${Jl};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${yc};
      border-color: ${ou};
    }

    :host(:not(.disabled):active) .control {
      background: ${Sc};
      border-color: ${ru};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${Pv}) .control {
      ${Rv}
      background: ${bc};
    }

    :host(.checked) .control {
      background: ${$l};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Yl};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${ql};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${lC};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Ya};
    }
  `.withBehaviors(Wm(dm`
        .control {
          background: ${jm.Field};
          border-color: ${jm.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${jm.Highlight};
        }
        :host(:${Pv}) .control {
          forced-color-adjust: none;
          background: ${jm.Field};
          outline-color: ${jm.FieldText};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          border-color: ${jm.Highlight};
          background: ${jm.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'] {
          fill: ${jm.Highlight};
        }
        :host(.checked:hover) .control slot[name='checked-indicator'] {
          fill: ${jm.HighlightText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${jm.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control {
          background: ${jm.Field};
          border-color: ${jm.GrayText};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled) slot[name='checked-indicator'] {
          fill: ${jm.GrayText};
        }
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="4"/>\n    </svg>\n  '});class My extends Zg{constructor(){super(...arguments),this.orientation=bC,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const n=e[t];this.isInsideToolbar||(n.setAttribute("tabindex","0"),n.readOnly?this.slottedRadioButtons.forEach((e=>{e!==n&&e.setAttribute("tabindex","-1")})):(n.checked=!0,this.selectedRadio=n)),this.focusedRadio=n,n.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,n=e.target,i=null!==n?t.indexOf(n):0,o=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===o&&i===o||o===t.length-1&&o===i)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,n)=>e===t.length&&this.isInsideToolbar&&n===tv,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===ev,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(n,t,e.key))this.moveRightOffGroup();else for(n===t.length&&(n=0);n<t.length&&t.length>1;){if(!t[n].disabled){this.moveToRadioByIndex(t,n);break}if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;if(n+1>=t.length){if(this.isInsideToolbar)break;n=0}else n+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,n=n<0?t.length-1:n,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;n>=0&&t.length>1;){if(!t[n].disabled){this.moveToRadioByIndex(t,n);break}if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;n-1<0?n=t.length-1:n-=1}},this.keydownHandler=e=>{const t=e.key;if(t in cv&&this.isInsideFoundationToolbar)return!0;switch(t){case iv:this.checkFocusedRadio();break;case tv:case Qm:this.direction===vC.ltr?this.moveRight(e):this.moveLeft(e);break;case ev:case nv:this.direction===vC.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=CC(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;if(t>1){e[t-1].checked=!0}let n=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),n=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!n){const n=e[t-1];n.checked=!0,this.focusedRadio=n,n.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}tr([xr({attribute:"readonly",mode:"boolean"})],My.prototype,"readOnly",void 0),tr([xr({attribute:"disabled",mode:"boolean"})],My.prototype,"disabled",void 0),tr([xr],My.prototype,"name",void 0),tr([xr],My.prototype,"value",void 0),tr([xr],My.prototype,"orientation",void 0),tr([ar],My.prototype,"childItems",void 0),tr([ar],My.prototype,"slottedRadioButtons",void 0);const Ly=My.compose({baseName:"radio-group",template:(e,t)=>Bm`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===bC?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${kv({property:"slottedRadioButtons",filter:Tv("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>dm`
  ${zm("flex")} :host {
    align-items: flex-start;
    flex-direction: column;
  }

  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }

  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }

  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
`});class Fy extends Zg{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,n="number"==typeof this.value?this.value:0,i=t-e;this.percentComplete=0===i?0:Math.fround((n-e)/i*100)}}tr([xr({converter:br})],Fy.prototype,"value",void 0),tr([xr({converter:br})],Fy.prototype,"min",void 0),tr([xr({converter:br})],Fy.prototype,"max",void 0),tr([xr({mode:"boolean"})],Fy.prototype,"paused",void 0),tr([ar],Fy.prototype,"percentComplete",void 0);class Hy extends Fy{}const Uy=Hy.compose({baseName:"progress",template:(e,t)=>Bm`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${UC((e=>"number"==typeof e.value),Bm`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${e=>e.percentComplete}%"
                    ></div>
                </div>
            `,Bm`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${t.indeterminateIndicator1||""}
                        ${t.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,styles:(e,t)=>dm`
    ${zm("flex")} :host {
      align-items: center;
      height: calc((${ts} * 3) * 1px);
    }

    .progress {
      background-color: ${iu};
      border-radius: calc(${Ja} * 1px);
      width: 100%;
      height: calc(${ts} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${$l};
      border-radius: calc(${Ja} * 1px);
      height: calc((${ts} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${ts} * 3) * 1px);
      border-radius: calc(${Ja} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${$l};
      border-radius: calc(${Ja} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${$l};
      border-radius: calc(${Ja} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${Bc};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${Bc};
    }

    @keyframes indeterminate-1 {
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      70% {
        opacity: 1;
        transform: translateX(300%);
      }
      70.01% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateX(300%);
      }
    }

    @keyframes indeterminate-2 {
      0% {
        opacity: 0;
        transform: translateX(-150%);
      }
      29.99% {
        opacity: 0;
      }
      30% {
        opacity: 1;
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(166.66%);
        opacity: 1;
      }
    }
  `.withBehaviors(Wm(dm`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${jm.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${jm.GrayText};
        }
      `)),indeterminateIndicator1:'\n    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n  ',indeterminateIndicator2:'\n    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>\n  '});const By=class extends Fy{}.compose({baseName:"progress-ring",template:(e,t)=>Bm`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${UC((e=>"number"==typeof e.value),Bm`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,Bm`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>dm`
    ${zm("flex")} :host {
      align-items: center;
      height: calc(${Nv} * 1px);
      width: calc(${Nv} * 1px);
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke-width: 2px;
    }

    .determinate {
      stroke: ${$l};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${$l};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    :host(.paused) .indeterminate-indicator-1 {
      animation: none;
      stroke: ${Bc};
    }

    :host(.paused) .determinate {
      stroke: ${Bc};
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `.withBehaviors(Wm(dm`
        .background {
          stroke: ${jm.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${jm.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${jm.GrayText};
        }
      `)),indeterminateIndicator:'\n    <svg class="progress" part="progress" viewBox="0 0 16 16">\n        <circle\n            class="background"\n            part="background"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n        <circle\n            class="indeterminate-indicator-1"\n            part="indeterminate-indicator-1"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n    </svg>\n  '}),Gy=xC.compose({baseName:"divider",template:(e,t)=>Bm`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>dm`
    ${zm("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${ts} * 1px) solid ${Xc};
    }
  `});var Vy=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Wy=Vy.join(","),Ky="undefined"==typeof Element,zy=Ky?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,jy=!Ky&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},$y=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},Yy=function(e){return"INPUT"===e.tagName},qy=function(e){return function(e){return Yy(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||jy(e),i=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=i(window.CSS.escape(e.name));else try{t=i(e.name)}catch(e){return!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},Xy=function(e){var t=e.getBoundingClientRect(),n=t.width,i=t.height;return 0===n&&0===i},Zy=function(e,t){return!(t.disabled||function(e){return Yy(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,i=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=zy.call(e,"details>summary:first-of-type")?e.parentElement:e;if(zy.call(o,"details:not([open]) *"))return!0;var r=jy(e).host,a=(null==r?void 0:r.ownerDocument.contains(r))||e.ownerDocument.contains(e);if(n&&"full"!==n){if("non-zero-area"===n)return Xy(e)}else{if("function"==typeof i){for(var s=e;e;){var l=e.parentElement,c=jy(e);if(l&&!l.shadowRoot&&!0===i(l))return Xy(e);e=e.assignedSlot?e.assignedSlot:l||c===e.ownerDocument?l:c.host}e=s}if(a)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var i=t.children.item(n);if("LEGEND"===i.tagName)return!!zy.call(t,"fieldset[disabled] *")||!i.contains(e)}return!0}t=t.parentElement}return!1}(t))},Jy=function(e,t){return!(qy(t)||$y(t)<0||!Zy(e,t))},Qy=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==zy.call(e,Wy)&&Jy(t,e)};class eS extends Zg{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&!this.hidden)switch(e.key){case ov:this.dismiss(),e.preventDefault();break;case lv:this.handleTabKeyDown(e)}},this.handleDocumentFocus=e=>{!e.defaultPrevented&&this.shouldForceFocus(e.target)&&(this.focusFirstElement(),e.preventDefault())},this.handleTabKeyDown=e=>{if(!this.trapFocus||this.hidden)return;const t=this.getTabQueueBounds();return 0!==t.length?1===t.length?(t[0].focus(),void e.preventDefault()):void(e.shiftKey&&e.target===t[0]?(t[t.length-1].focus(),e.preventDefault()):e.shiftKey||e.target!==t[t.length-1]||(t[0].focus(),e.preventDefault())):void 0},this.getTabQueueBounds=()=>eS.reduceTabbableItems([],this),this.focusFirstElement=()=>{const e=this.getTabQueueBounds();e.length>0?e[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=e=>this.isTrappingFocus&&!this.contains(e),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=e=>{const t=void 0===e?this.shouldTrapFocus():e;t&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),Gi.queueUpdate((()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()}))):!t&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=rr.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(e,t){if("hidden"===t)this.updateTrapFocus()}static reduceTabbableItems(e,t){return"-1"===t.getAttribute("tabindex")?e:Qy(t)||eS.isFocusableFastElement(t)&&eS.hasTabbableShadow(t)?(e.push(t),e):t.childElementCount?e.concat(Array.from(t.children).reduce(eS.reduceTabbableItems,[])):e}static isFocusableFastElement(e){var t,n;return!!(null===(n=null===(t=e.$fastController)||void 0===t?void 0:t.definition.shadowOptions)||void 0===n?void 0:n.delegatesFocus)}static hasTabbableShadow(e){var t,n;return Array.from(null!==(n=null===(t=e.shadowRoot)||void 0===t?void 0:t.querySelectorAll("*"))&&void 0!==n?n:[]).some((e=>Qy(e)))}}tr([xr({mode:"boolean"})],eS.prototype,"modal",void 0),tr([xr({mode:"boolean"})],eS.prototype,"hidden",void 0),tr([xr({attribute:"trap-focus",mode:"boolean"})],eS.prototype,"trapFocus",void 0),tr([xr({attribute:"aria-describedby"})],eS.prototype,"ariaDescribedby",void 0),tr([xr({attribute:"aria-labelledby"})],eS.prototype,"ariaLabelledby",void 0),tr([xr({attribute:"aria-label"})],eS.prototype,"ariaLabel",void 0);const tS=eS.compose({baseName:"dialog",template:(e,t)=>Bm`
    <div class="positioning-region" part="positioning-region">
        ${UC((e=>e.modal),Bm`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    @click="${e=>e.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            tabindex="-1"
            class="control"
            part="control"
            aria-modal="${e=>e.modal}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-label="${e=>e.ariaLabel}"
            ${hv("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`,styles:(e,t)=>dm`
  :host([hidden]) {
    display: none;
  }

  :host {
    --dialog-height: 480px;
    --dialog-width: 640px;
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    touch-action: none;
  }

  .positioning-region {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .control {
    box-shadow: ${_C};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${es} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${Kl};
    z-index: 1;
    border: calc(${ts} * 1px) solid transparent;
  }
`});class nS extends Oy{}class iS extends(nC(nS)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const oS="above",rS="below";class aS extends iS{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=XC("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void Gi.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return rr.track(this,"value"),this._value}set value(e){var t,n,i,o,r,a,s;const l=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),l=null!==(i=null===(n=this._options[this.selectedIndex])||void 0===n?void 0:n.value)&&void 0!==i?i:null,c=null!==(r=null===(o=this._options[t])||void 0===o?void 0:o.value)&&void 0!==r?r:null;-1!==t&&l===c||(e="",this.selectedIndex=t),e=null!==(s=null===(a=this.firstSelectedOption)||void 0===a?void 0:a.value)&&void 0!==s?s:e}l!==e&&(this._value=e,super.valueChanged(l,e),rr.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,n;this.$fastController.isConnected&&(this.value=null!==(n=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==n?n:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?oS:rS,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===oS?~~e.top:~~t}get displayValue(){var e,t;return rr.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const n=e.relatedTarget;this.isSameNode(n)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(n))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{rr.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{rr.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var n;super.selectedOptionsChanged(e,t),null===(n=this.options)||void 0===n||n.forEach(((e,t)=>{var n;const i=null===(n=this.proxy)||void 0===n?void 0:n.options.item(t);i&&(i.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(Ay.slottedOptionFilter),n=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===n?0:n}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case sv:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case rv:case av:e.preventDefault();break;case iv:e.preventDefault(),this.open=!this.open;break;case ov:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case lv:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Qm||t===nv)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&rr.notify(this,"displayValue")}}tr([xr({attribute:"open",mode:"boolean"})],aS.prototype,"open",void 0),tr([sr],aS.prototype,"collapsible",null),tr([ar],aS.prototype,"control",void 0),tr([xr({attribute:"position"})],aS.prototype,"positionAttribute",void 0),tr([ar],aS.prototype,"position",void 0),tr([ar],aS.prototype,"maxHeight",void 0);class sS{}tr([ar],sS.prototype,"ariaControls",void 0),vv(sS,Iy),vv(aS,fv,sS);const lS=".control",cS=":not([disabled]):not([open])",uS="[disabled]";class dS extends aS{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&Kl.setValueFor(this.listbox,Hl)}}lm([xr({mode:"fromView"})],dS.prototype,"appearance",void 0);const pS=dS.compose({baseName:"select",baseClass:aS,template:(e,t)=>Bm`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${UC((e=>e.collapsible),Bm`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${hv("control")}
                >
                    ${mv(0,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${gv(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${hv("listbox")}
        >
            <slot
                ${kv({filter:Ay.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>dm`
    ${zm("inline-flex")}
    
    :host {
      border-radius: calc(${Qa} * 1px);
      box-sizing: border-box;
      color: ${Hc};
      fill: currentcolor;
      font-family: ${is};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${RC};
      background: ${Kl};
      border-radius: calc(${es} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${Nv} * 1px));
      padding: calc((${Ja} - ${ts} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${ts} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${ts} * 1px) solid transparent;
      border-radius: calc(${Qa} * 1px);
      height: calc(${Nv} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${Av}
      min-height: 100%;
      padding: 0 calc(${Ja} * 2.25px);
      width: 100%;
    }

    :host(:${Pv}) {
      ${wv}
    }

    :host([disabled]) .control {
      cursor: ${lC};
      opacity: ${Ya};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${Nv} + ${Ja} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${Nv} + ${Ja} * 2) * 1px);
    }

    .selected-value {
      font-family: inherit;
      flex: 1 1 auto;
      text-align: start;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }

    .start,
    .end,
    .indicator,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([role='option']) {
      flex: 0 0 auto;
    }
  `.withBehaviors(Yv("outline",Vv(0,0,cS,uS)),Yv("filled",fy(0,0,lS,cS).withBehaviors(Wm(gy(0,0,lS,cS)))),Yv("stealth",jv(0,0,cS,uS)),Wm(dm`
    :host([open]) .listbox {
      background: ${jm.ButtonFace};
      border-color: ${jm.CanvasText};
    }
  `)),indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '}),hS=VC.compose({baseName:"anchored-region",template:(e,t)=>Bm`
    <template class="${e=>e.initialLayoutComplete?"loaded":""}">
        ${UC((e=>e.initialLayoutComplete),Bm`
                <slot></slot>
            `)}
    </template>
`,styles:(e,t)=>dm`
  :host {
    contain: layout;
    display: block;
  }
`}),fS="top",gS="right",mS="bottom",vS="left",CS="start",yS="end",SS="top-left",bS="top-right",TS="bottom-left",xS="bottom-right",ES="top-start",kS="top-end",AS="bottom-start",IS="bottom-end";class OS extends Zg{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=vC.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=e=>{this.classList.toggle("top","start"===this.region.verticalPosition),this.classList.toggle("bottom","end"===this.region.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.region.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.region.verticalPosition),this.classList.toggle("center-vertical","center"===this.region.verticalPosition),this.classList.toggle("left","start"===this.region.horizontalPosition),this.classList.toggle("right","end"===this.region.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.region.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.region.horizontalPosition),this.classList.toggle("center-horizontal","center"===this.region.horizontalPosition)},this.handleRegionMouseOver=e=>{this.isRegionHovered=!0},this.handleRegionMouseOut=e=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=e=>{this.tooltipVisible?this.isAnchorHoveredFocused=!0:this.startShowDelayTimer()},this.handleAnchorMouseOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=e=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout((()=>{this.updateTooltipVisibility()}),60))},this.clearHideDelayTimer=()=>{null!==this.hideDelayTimer&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{this.isAnchorHoveredFocused||(this.delay>1?null===this.showDelayTimer&&(this.showDelayTimer=window.setTimeout((()=>{this.startHover()}),this.delay)):this.startHover())},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{null!==this.showDelayTimer&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const e=this.getRootNode();return e instanceof ShadowRoot?e.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&this.tooltipVisible&&e.key===ov)this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss")},this.updateTooltipVisibility=()=>{if(!1===this.visible)this.hideTooltip();else{if(!0===this.visible)return void this.showTooltip();if(this.isAnchorHoveredFocused||this.isRegionHovered)return void this.showTooltip();this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=CC(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),Gi.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),null!==this.region&&void 0!==this.region&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(e){if(this.$fastController.isConnected){if(null!=e&&(e.removeEventListener("mouseover",this.handleAnchorMouseOver),e.removeEventListener("mouseout",this.handleAnchorMouseOut),e.removeEventListener("focusin",this.handleAnchorFocusIn),e.removeEventListener("focusout",this.handleAnchorFocusOut)),null!==this.anchorElement&&void 0!==this.anchorElement){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const e=this.anchorElement.id;null!==this.anchorElement.parentElement&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach((t=>{t.id===e&&this.startShowDelayTimer()}))}null!==this.region&&void 0!==this.region&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){null!==this.region&&void 0!==this.region&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case fS:case mS:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case gS:case vS:case CS:case yS:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case SS:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case bS:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case TS:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case xS:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case ES:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case kS:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case AS:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case IS:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center"}}}tr([xr({mode:"boolean"})],OS.prototype,"visible",void 0),tr([xr],OS.prototype,"anchor",void 0),tr([xr],OS.prototype,"delay",void 0),tr([xr],OS.prototype,"position",void 0),tr([xr({attribute:"auto-update-mode"})],OS.prototype,"autoUpdateMode",void 0),tr([xr({attribute:"horizontal-viewport-lock"})],OS.prototype,"horizontalViewportLock",void 0),tr([xr({attribute:"vertical-viewport-lock"})],OS.prototype,"verticalViewportLock",void 0),tr([ar],OS.prototype,"anchorElement",void 0),tr([ar],OS.prototype,"viewportElement",void 0),tr([ar],OS.prototype,"verticalPositioningMode",void 0),tr([ar],OS.prototype,"horizontalPositioningMode",void 0),tr([ar],OS.prototype,"horizontalInset",void 0),tr([ar],OS.prototype,"verticalInset",void 0),tr([ar],OS.prototype,"horizontalScaling",void 0),tr([ar],OS.prototype,"verticalScaling",void 0),tr([ar],OS.prototype,"verticalDefaultPosition",void 0),tr([ar],OS.prototype,"horizontalDefaultPosition",void 0),tr([ar],OS.prototype,"tooltipVisible",void 0),tr([ar],OS.prototype,"currentDirection",void 0);const DS=class extends OS{connectedCallback(){super.connectedCallback(),Kl.setValueFor(this,Hl)}}.compose({baseName:"tooltip",baseClass:OS,template:(e,t)=>Bm`
        ${UC((e=>e.tooltipVisible),Bm`
            <${e.tagFor(VC)}
                fixed-placement="true"
                auto-update-mode="${e=>e.autoUpdateMode}"
                vertical-positioning-mode="${e=>e.verticalPositioningMode}"
                vertical-default-position="${e=>e.verticalDefaultPosition}"
                vertical-inset="${e=>e.verticalInset}"
                vertical-scaling="${e=>e.verticalScaling}"
                horizontal-positioning-mode="${e=>e.horizontalPositioningMode}"
                horizontal-default-position="${e=>e.horizontalDefaultPosition}"
                horizontal-scaling="${e=>e.horizontalScaling}"
                horizontal-inset="${e=>e.horizontalInset}"
                vertical-viewport-lock="${e=>e.horizontalViewportLock}"
                horizontal-viewport-lock="${e=>e.verticalViewportLock}"
                dir="${e=>e.currentDirection}"
                ${hv("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${e.tagFor(VC)}>
        `)}
    `,styles:(e,t)=>dm`
    :host {
      position: relative;
      contain: layout;
      overflow: visible;
      height: 0;
      width: 0;
      z-index: 10000;
    }

    .tooltip {
      box-sizing: border-box;
      border-radius: calc(${Qa} * 1px);
      border: calc(${ts} * 1px) solid ${tu};
      background: ${Kl};
      color: ${Hc};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${Av}
      white-space: nowrap;
      box-shadow: ${PC};
    }

    ${e.tagFor(VC)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${e.tagFor(VC)}.right,
    ${e.tagFor(VC)}.left {
      flex-direction: column;
    }

    ${e.tagFor(VC)}.top .tooltip::after,
    ${e.tagFor(VC)}.bottom .tooltip::after,
    ${e.tagFor(VC)}.left .tooltip::after,
    ${e.tagFor(VC)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${Kl};
      border-top: calc(${ts} * 1px) solid ${tu};
      border-left: calc(${ts} * 1px) solid ${tu};
      position: absolute;
    }

    ${e.tagFor(VC)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${e.tagFor(VC)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${e.tagFor(VC)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${e.tagFor(VC)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${e.tagFor(VC)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${e.tagFor(VC)}.left .tooltip {
      margin-right: 12px;
    }

    ${e.tagFor(VC)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${e.tagFor(VC)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(Wm(dm`
        :host([disabled]) {
          opacity: 1;
        }
        ${e.tagFor(VC)}.top .tooltip::after,
        ${e.tagFor(VC)}.bottom .tooltip::after,
        ${e.tagFor(VC)}.left .tooltip::after,
        ${e.tagFor(VC)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }