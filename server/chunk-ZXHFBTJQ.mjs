import './polyfills.server.mjs';
import{Aa as P,Fb as E,Kb as D,Lb as y,Q as c,R as _,Sa as C,T as f,Ta as k,Ua as N,V as l,W as a,Ya as $,_ as h,aa as I,ba as M,cb as x,ga as L,ka as B,na as m,oa as R,sa as F,va as O,wa as T}from"./chunk-YS6LDTHA.mjs";var G=null;function w(){return G}function Qe(i){G??=i}var U=class{};var g=new f(""),b=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:()=>a(W),providedIn:"platform"});let i=t;return i})(),Je=new f(""),W=(()=>{let t=class t extends b{constructor(){super(),this._doc=a(g),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return w().getBaseHref(this._doc)}onPopState(e){let n=w().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=w().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:()=>new t,providedIn:"platform"});let i=t;return i})();function v(i,t){if(i.length==0)return t;if(t.length==0)return i;let s=0;return i.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?i+t.substring(1):s==1?i+t:i+"/"+t}function z(i){let t=i.match(/#|\?|$/),s=t&&t.index||i.length,e=s-(i[s-1]==="/"?1:0);return i.slice(0,e)+i.slice(s)}function d(i){return i&&i[0]!=="?"?"?"+i:i}var p=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:()=>a(Z),providedIn:"root"});let i=t;return i})(),H=new f(""),Z=(()=>{let t=class t extends p{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??a(g).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return v(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+d(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let u=this.prepareExternalUrl(r+d(o));this._platformLocation.pushState(e,n,u)}replaceState(e,n,r,o){let u=this.prepareExternalUrl(r+d(o));this._platformLocation.replaceState(e,n,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(l(b),l(H,8))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),et=(()=>{let t=class t extends p{constructor(e,n){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=v(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let u=this.prepareExternalUrl(r+d(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.pushState(e,n,u)}replaceState(e,n,r,o){let u=this.prepareExternalUrl(r+d(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.replaceState(e,n,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(l(b),l(H,8))},t.\u0275prov=c({token:t,factory:t.\u0275fac});let i=t;return i})(),K=(()=>{let t=class t{constructor(e){this._subject=new R,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Q(z(V(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+d(n))}normalize(e){return t.stripTrailingSlash(X(this._basePath,V(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+d(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+d(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n,complete:r})}};t.normalizeQueryParams=d,t.joinWithSlash=v,t.stripTrailingSlash=z,t.\u0275fac=function(n){return new(n||t)(l(p))},t.\u0275prov=c({token:t,factory:()=>q(),providedIn:"root"});let i=t;return i})();function q(){return new K(l(p))}function X(i,t){if(!i||!t.startsWith(i))return t;let s=t.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function V(i){return i.replace(/\/index.html$/,"")}function Q(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function tt(i,t){t=encodeURIComponent(t);for(let s of i.split(";")){let e=s.indexOf("="),[n,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(n.trim()===t)return decodeURIComponent(r)}return null}var nt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=I({type:t}),t.\u0275inj=_({});let i=t;return i})(),J="browser",ee="server";function te(i){return i===J}function ne(i){return i===ee}var it=(()=>{let t=class t{};t.\u0275prov=c({token:t,providedIn:"root",factory:()=>te(a(F))?new A(a(g),window):new S});let i=t;return i})(),A=class{constructor(t,s){this.document=t,this.window=s,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t){this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){let s=ie(this.document,t);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(t){this.window.history.scrollRestoration=t}scrollToElement(t){let s=t.getBoundingClientRect(),e=s.left+this.window.pageXOffset,n=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(e-r[0],n-r[1])}};function ie(i,t){let s=i.getElementById(t)||i.getElementsByName(t)[0];if(s)return s;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let e=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),n=e.currentNode;for(;n;){let r=n.shadowRoot;if(r){let o=r.getElementById(t)||r.querySelector(`[name="${t}"]`);if(o)return o}n=e.nextNode()}}return null}var S=class{setOffset(t){}getScrollPosition(){return[0,0]}scrollToPosition(t){}scrollToAnchor(t){}setHistoryScrollRestoration(t){}},j=class{};var Y=i=>i.src,re=new f("",{providedIn:"root",factory:()=>Y});var se=new f("NG_OPTIMIZED_PRELOADED_IMAGES",{providedIn:"root",factory:()=>new Set}),oe=(()=>{let t=class t{constructor(){this.preloadedImages=a(se),this.document=a(g)}createPreloadLinkTag(e,n,r,o){if(this.preloadedImages.has(n))return;this.preloadedImages.add(n);let u=e.createElement("link");e.setAttribute(u,"as","image"),e.setAttribute(u,"href",n),e.setAttribute(u,"rel","preload"),e.setAttribute(u,"fetchpriority","high"),o&&e.setAttribute(u,"imageSizes",o),r&&e.setAttribute(u,"imageSrcset",r),e.appendChild(this.document.head,u)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var ue=/^((\s*\d+w\s*(,|$)){1,})$/;var ae=[1,2],ce=640;var de=1920,le=1080;var rt=(()=>{let t=class t{constructor(){this.imageLoader=a(re),this.config=he(a(T)),this.renderer=a(C),this.imgElement=a(m).nativeElement,this.injector=a(B),this.isServer=ne(a(F)),this.preloadLinkCreator=a(oe),this.lcpObserver=null,this._renderedSrc=null,this.priority=!1,this.disableOptimizedSrcset=!1,this.fill=!1}ngOnInit(){k("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes&&this.setHostAttribute("sizes",this.sizes),this.isServer&&this.priority&&this.preloadLinkCreator.createPreloadLinkTag(this.renderer,this.getRewrittenSrc(),e,this.sizes)}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let n=this._renderedSrc;this.updateSrcAndSrcset(!0);let r=this._renderedSrc;this.lcpObserver!==null&&n&&r&&n!==r&&this.injector.get(N).runOutsideAngular(()=>{this.lcpObserver?.updateImage(n,r)})}}callImageLoader(e){let n=e;return this.loaderParams&&(n.loaderParams=this.loaderParams),this.imageLoader(n)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=ue.test(this.ngSrcset);return this.ngSrcset.split(",").filter(r=>r!=="").map(r=>{r=r.trim();let o=e?parseFloat(r):parseFloat(r)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:o})} ${r}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,n=e;return this.sizes?.trim()==="100vw"&&(n=e.filter(o=>o>=ce)),n.map(o=>`${this.callImageLoader({src:this.ngSrc,width:o})} ${o}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let n=this.getRewrittenSrc();this.setHostAttribute("src",n);let r;return this.ngSrcset?r=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(r=this.getAutomaticSrcset()),r&&this.setHostAttribute("srcset",r),r}getFixedSrcset(){return ae.map(n=>`${this.callImageLoader({src:this.ngSrc,width:this.width*n})} ${n}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>de||this.height>le),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==Y&&!e}generatePlaceholder(e){let{placeholderResolution:n}=this.config;return e===!0?`url(${this.callImageLoader({src:this.ngSrc,width:n,isPlaceholder:!0})})`:typeof e=="string"&&e.startsWith("data:")?`url(${e})`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let n=()=>{let u=this.injector.get(E);r(),o(),this.placeholder=!1,u.markForCheck()},r=this.renderer.listen(e,"load",n),o=this.renderer.listen(e,"error",n)}ngOnDestroy(){}setHostAttribute(e,n){this.renderer.setAttribute(this.imgElement,e,n)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=M({type:t,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(n,r){n&2&&x("position",r.fill?"absolute":null)("width",r.fill?"100%":null)("height",r.fill?"100%":null)("inset",r.fill?"0":null)("background-size",r.placeholder?"cover":null)("background-position",r.placeholder?"50% 50%":null)("background-repeat",r.placeholder?"no-repeat":null)("background-image",r.placeholder?r.generatePlaceholder(r.placeholder):null)("filter",r.placeholder&&r.shouldBlurPlaceholder(r.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[h.HasDecoratorInputTransform,"ngSrc","ngSrc",fe],ngSrcset:"ngSrcset",sizes:"sizes",width:[h.HasDecoratorInputTransform,"width","width",y],height:[h.HasDecoratorInputTransform,"height","height",y],loading:"loading",priority:[h.HasDecoratorInputTransform,"priority","priority",D],loaderParams:"loaderParams",disableOptimizedSrcset:[h.HasDecoratorInputTransform,"disableOptimizedSrcset","disableOptimizedSrcset",D],fill:[h.HasDecoratorInputTransform,"fill","fill",D],placeholder:[h.HasDecoratorInputTransform,"placeholder","placeholder",De],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},standalone:!0,features:[$,L]});let i=t;return i})();function he(i){let t={};return i.breakpoints&&(t.breakpoints=i.breakpoints.sort((s,e)=>s-e)),Object.assign({},O,i,t)}function fe(i){return typeof i=="string"?i:P(i)}function De(i){return typeof i=="string"&&i.startsWith("data:")?i:D(i)}export{w as a,Qe as b,U as c,g as d,b as e,Je as f,p as g,H as h,Z as i,et as j,K as k,tt as l,nt as m,J as n,ee as o,te as p,ne as q,it as r,S as s,j as t,rt as u};
