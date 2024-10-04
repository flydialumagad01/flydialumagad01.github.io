"use strict";(self.webpackChunkwith_create_react_app=self.webpackChunkwith_create_react_app||[]).push([[1199],{9386:function(e,t,n){n.d(t,{t0:function(){return A},zv:function(){return O},uA:function(){return E},uc:function(){return ee},jb:function(){return ne},zb:function(){return j},AV:function(){return C},Ic:function(){return ue},Vs:function(){return fe}});var r=n(3433),o=n(7762),a=n(4165),i=n(5861),s=n(9439),c=(Symbol(),Symbol()),u=Object.getPrototypeOf,l=new WeakMap,f=function(e){return e&&(l.has(e)?l.get(e):u(e)===Object.prototype||u(e)===Array.prototype)},d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l.set(e,t)},p=function(e){return"object"===typeof e&&null!==e},v=new WeakMap,h=new WeakSet,b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return new Proxy(e,t)},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return p(e)&&!h.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new WeakMap,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,r=a.get(e);if((null==r?void 0:r[0])===t)return r[1];var c=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return d(c,!0),a.set(e,[t,c]),Reflect.ownKeys(e).forEach((function(t){if(!Object.getOwnPropertyDescriptor(c,t)){var r=Reflect.get(e,t),o={value:r,enumerable:!0,configurable:!0};if(h.has(r))d(r,!1);else if(r instanceof Promise)delete o.value,o.get=function(){return n(r)};else if(v.has(r)){var a=v.get(r),u=(0,s.Z)(a,2),l=u[0],f=u[1];o.value=i(l,f(),n)}Object.defineProperty(c,t,o)}})),Object.preventExtensions(c)},u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new WeakMap,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[1,1],b=arguments.length>8&&void 0!==arguments[8]?arguments[8]:function(o){if(!p(o))throw new Error("object required");var a=u.get(o);if(a)return a;var d=l[0],m=new Set,g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++l[0];d!==t&&(d=t,m.forEach((function(n){return n(e,t)})))},y=l[1],w=function(e){return function(t,n){var o=(0,r.Z)(t);o[1]=[e].concat((0,r.Z)(o[1])),g(o,n)}},I=new Map,C=function(e){var t,n=I.get(e);n&&(I.delete(e),null==(t=n[1])||t.call(n))},O=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),W={deleteProperty:function(e,t){var n=Reflect.get(e,t);C(t);var r=Reflect.deleteProperty(e,t);return r&&g(["delete",[t],n]),r},set:function(t,r,o,a){var i=Reflect.has(t,r),s=Reflect.get(t,r,a);if(i&&(e(s,o)||u.has(o)&&e(s,u.get(o))))return!0;C(r),p(o)&&(o=function(e){return f(e)&&e[c]||null}(o)||o);var l=o;if(o instanceof Promise)o.then((function(e){o.status="fulfilled",o.value=e,g(["resolve",[r],e])})).catch((function(e){o.status="rejected",o.reason=e,g(["reject",[r],e])}));else{!v.has(o)&&n(o)&&(l=b(o));var d=!h.has(l)&&v.get(l);d&&function(e,t){if(I.has(e))throw new Error("prop listener already exists");if(m.size){var n=t[3](w(e));I.set(e,[t,n])}else I.set(e,[t])}(r,d)}return Reflect.set(t,r,l,a),g(["set",[r],o,s]),!0}},E=t(O,W);u.set(o,E);var k=[O,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++l[1];return y===e||m.size||(y=e,I.forEach((function(t){var n=(0,s.Z)(t,1)[0][1](e);n>d&&(d=n)}))),d},i,function(e){m.add(e),1===m.size&&I.forEach((function(e,t){var n=(0,s.Z)(e,2),r=n[0];if(n[1])throw new Error("remove already exists");var o=r[3](w(t));I.set(t,[r,o])}));return function(){m.delete(e),0===m.size&&I.forEach((function(e,t){var n=(0,s.Z)(e,2),r=n[0],o=n[1];o&&(o(),I.set(t,[r]))}))}}];return v.set(E,k),Reflect.ownKeys(o).forEach((function(e){var t=Object.getOwnPropertyDescriptor(o,e);"value"in t&&(E[e]=o[e],delete t.value,delete t.writable),Object.defineProperty(O,e,t)})),E};return[b,v,h,e,t,n,o,a,i,u,l]},m=b(),g=(0,s.Z)(m,1)[0];function y(){return g(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function w(e,t,n){var r,o=v.get(e);o||console.warn("Please use proxy object");var a=[],i=o[3],s=!1,c=i((function(e){a.push(e),n?t(a.splice(0)):r||(r=Promise.resolve().then((function(){r=void 0,s&&t(a.splice(0))})))}));return s=!0,function(){s=!1,c()}}var I=y({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),C={state:I,subscribe:function(e){return w(I,(function(){return e(I)}))},push:function(e,t){e!==I.view&&(I.view=e,t&&(I.data=t),I.history.push(e))},reset:function(e){I.view=e,I.history=[e]},replace:function(e){I.history.length>1&&(I.history[I.history.length-1]=e,I.view=e)},goBack:function(){if(I.history.length>1){I.history.pop();var e=I.history.slice(-1),t=(0,s.Z)(e,1)[0];I.view=t}},setData:function(e){I.data=e}},O={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:function(){return typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/.test(navigator.userAgent))},isAndroid:function(){return O.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos:function(){var e=navigator.userAgent.toLowerCase();return O.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:function(e){return e.startsWith("http://")||e.startsWith("https://")},isArray:function(e){return Array.isArray(e)&&e.length>0},formatNativeUrl:function(e,t,n){if(O.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);var r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r="".concat(r,"://")),r.endsWith("/")||(r="".concat(r,"/")),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"wc?uri=").concat(o)},formatUniversalUrl:function(e,t,n){if(!O.isHttpUrl(e))return this.formatNativeUrl(e,t,n);var r=e;r.endsWith("/")||(r="".concat(r,"/")),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"wc?uri=").concat(o)},wait:function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})))()},openHref:function(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink:function(e,t){try{localStorage.setItem(O.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch(n){console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink:function(e){try{var t=e.split("?"),n=(0,s.Z)(t,1)[0];localStorage.setItem(O.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:n,name:"Android"}))}catch(r){console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink:function(){try{localStorage.removeItem(O.WALLETCONNECT_DEEPLINK_CHOICE)}catch(e){console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage:function(){try{typeof localStorage<"u"&&localStorage.setItem(O.WCM_VERSION,"2.6.2")}catch(e){console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData:function(){var e,t=null==(e=C.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},W=y({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),E={state:W,subscribe:function(e){return w(W.events,(function(){return e(function(e,t){var n=v.get(e);n||console.warn("Please use proxy object");var r=(0,s.Z)(n,3),o=r[0],a=r[1];return(0,r[2])(o,a(),t)}(W.events[W.events.length-1]))}))},initialize:function(){W.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(W.userSessionId=crypto.randomUUID())},setConnectedWalletId:function(e){W.connectedWalletId=e},click:function(e){if(W.enabled){var t={type:"CLICK",name:e.name,userSessionId:W.userSessionId,timestamp:Date.now(),data:e};W.events.push(t)}},track:function(e){if(W.enabled){var t={type:"TRACK",name:e.name,userSessionId:W.userSessionId,timestamp:Date.now(),data:e};W.events.push(t)}},view:function(e){if(W.enabled){var t={type:"VIEW",name:e.name,userSessionId:W.userSessionId,timestamp:Date.now(),data:e};W.events.push(t)}}},k=y({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),j={state:k,subscribe:function(e){return w(k,(function(){return e(k)}))},setChains:function(e){k.chains=e},setWalletConnectUri:function(e){k.walletConnectUri=e},setIsCustomDesktop:function(e){k.isCustomDesktop=e},setIsCustomMobile:function(e){k.isCustomMobile=e},setIsDataLoaded:function(e){k.isDataLoaded=e},setIsUiLoaded:function(e){k.isUiLoaded=e},setIsAuth:function(e){k.isAuth=e}},x=y({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),A={state:x,subscribe:function(e){return w(x,(function(){return e(x)}))},setConfig:function(e){var t,n;E.initialize(),j.setChains(e.chains),j.setIsAuth(Boolean(e.enableAuthMode)),j.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),j.setIsCustomDesktop(Boolean(null==(n=e.desktopWallets)?void 0:n.length)),O.setModalVersionInStorage(),Object.assign(x,e)}},L=Object.defineProperty,Z=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,P=function(e,t,n){return t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},D=function(e,t){for(var n in t||(t={}))M.call(t,n)&&P(e,n,t[n]);if(Z){var r,a=(0,o.Z)(Z(t));try{for(a.s();!(r=a.n()).done;){n=r.value;U.call(t,n)&&P(e,n,t[n])}}catch(i){a.e(i)}finally{a.f()}}return e},S="https://explorer-api.walletconnect.com",N="wcm",T="js-2.6.2";function _(e,t){return R.apply(this,arguments)}function R(){return R=(0,i.Z)((0,a.Z)().mark((function e(t,n){var r,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=D({sdkType:N,sdkVersion:T},n),(o=new URL(t,S)).searchParams.append("projectId",A.state.projectId),Object.entries(r).forEach((function(e){var t=(0,s.Z)(e,2),n=t[0],r=t[1];r&&o.searchParams.append(n,String(r))})),e.next=5,fetch(o);case 5:return e.abrupt("return",e.sent.json());case 6:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}var V=function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",_("/w3m/v1/getDesktopListings",e));case 1:case"end":return t.stop()}}),t)})))()},z=function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",_("/w3m/v1/getMobileListings",e));case 1:case"end":return t.stop()}}),t)})))()},B=function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",_("/w3m/v1/getAllListings",e));case 1:case"end":return t.stop()}}),t)})))()},H=function(e){return"".concat(S,"/w3m/v1/getWalletImage/").concat(e,"?projectId=").concat(A.state.projectId,"&sdkType=").concat(N,"&sdkVersion=").concat(T)},K=function(e){return"".concat(S,"/w3m/v1/getAssetImage/").concat(e,"?projectId=").concat(A.state.projectId,"&sdkType=").concat(N,"&sdkVersion=").concat(T)},J=Object.defineProperty,q=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,Q=function(e,t,n){return t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},X=function(e,t){for(var n in t||(t={}))F.call(t,n)&&Q(e,n,t[n]);if(q){var r,a=(0,o.Z)(q(t));try{for(a.s();!(r=a.n()).done;){n=r.value;G.call(t,n)&&Q(e,n,t[n])}}catch(i){a.e(i)}finally{a.f()}}return e},Y=O.isMobile(),$=y({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),ee={state:$,getRecomendedWallets:function(){return(0,i.Z)((0,a.Z)().mark((function e(){var t,n,r,o,i,s,c,u,l,f,d,p,v,h,b;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=A.state,n=t.explorerRecommendedWalletIds,r=t.explorerExcludedWalletIds,"NONE"!==n&&("ALL"!==r||n)){e.next=3;break}return e.abrupt("return",$.recomendedWallets);case 3:if(!O.isArray(n)){e.next=13;break}return o={recommendedIds:n.join(",")},e.next=7,B(o);case 7:i=e.sent,s=i.listings,(c=Object.values(s)).sort((function(e,t){return n.indexOf(e.id)-n.indexOf(t.id)})),$.recomendedWallets=c,e.next=31;break;case 13:if(u=j.state,l=u.chains,f=u.isAuth,d=null===l||void 0===l?void 0:l.join(","),p=O.isArray(r),v={page:1,sdks:f?"auth_v1":void 0,entries:O.RECOMMENDED_WALLET_AMOUNT,chains:d,version:2,excludedIds:p?r.join(","):void 0},!Y){e.next=25;break}return e.next=22,z(v);case 22:e.t0=e.sent,e.next=28;break;case 25:return e.next=27,V(v);case 27:e.t0=e.sent;case 28:h=e.t0,b=h.listings,$.recomendedWallets=Object.values(b);case 31:return e.abrupt("return",$.recomendedWallets);case 32:case"end":return e.stop()}}),e)})))()},getWallets:function(e){return(0,i.Z)((0,a.Z)().mark((function t(){var n,o,i,s,c,u,l,f,d,p,v,h;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=X({},e),o=A.state,i=o.explorerRecommendedWalletIds,s=o.explorerExcludedWalletIds,c=$.recomendedWallets,"ALL"!==s){t.next=3;break}return t.abrupt("return",$.wallets);case 3:if(c.length?n.excludedIds=c.map((function(e){return e.id})).join(","):O.isArray(i)&&(n.excludedIds=i.join(",")),O.isArray(s)&&(n.excludedIds=[n.excludedIds,s].filter(Boolean).join(",")),j.state.isAuth&&(n.sdks="auth_v1"),u=e.page,l=e.search,!Y){t.next=12;break}return t.next=9,z(n);case 9:t.t0=t.sent,t.next=15;break;case 12:return t.next=14,V(n);case 14:t.t0=t.sent;case 15:return f=t.t0,d=f.listings,p=f.total,v=Object.values(d),h=l?"search":"wallets",t.abrupt("return",($[h]={listings:[].concat((0,r.Z)($[h].listings),v),total:p,page:null!==u&&void 0!==u?u:1},{listings:v,total:p}));case 21:case"end":return t.stop()}}),t)})))()},getWalletImageUrl:function(e){return H(e)},getAssetImageUrl:function(e){return K(e)},resetSearch:function(){$.search={listings:[],total:0,page:1}}},te=y({open:!1}),ne={state:te,subscribe:function(e){return w(te,(function(){return e(te)}))},open:function(e){return(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var n=j.state,r=n.isUiLoaded,o=n.isDataLoaded;if(O.removeWalletConnectDeepLink(),j.setWalletConnectUri(null===e||void 0===e?void 0:e.uri),j.setChains(null===e||void 0===e?void 0:e.chains),C.reset("ConnectWallet"),r&&o)te.open=!0,t();else var a=setInterval((function(){var e=j.state;e.isUiLoaded&&e.isDataLoaded&&(clearInterval(a),te.open=!0,t())}),200)})));case 1:case"end":return t.stop()}}),t)})))()},close:function(){te.open=!1}},re=Object.defineProperty,oe=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,se=function(e,t,n){return t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n};var ce=y({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),ue={state:ce,subscribe:function(e){return w(ce,(function(){return e(ce)}))},setThemeConfig:function(e){var t=e.themeMode,n=e.themeVariables;t&&(ce.themeMode=t),n&&(ce.themeVariables=function(e,t){for(var n in t||(t={}))ae.call(t,n)&&se(e,n,t[n]);if(oe){var r,a=(0,o.Z)(oe(t));try{for(a.s();!(r=a.n()).done;)n=r.value,ie.call(t,n)&&se(e,n,t[n])}catch(i){a.e(i)}finally{a.f()}}return e}({},n))}},le=y({open:!1,message:"",variant:"success"}),fe={state:le,subscribe:function(e){return w(le,(function(){return e(le)}))},openToast:function(e,t){le.open=!0,le.message=e,le.variant=t},closeToast:function(){le.open=!1}}},1199:function(e,t,n){n.r(t),n.d(t,{WalletConnectModal:function(){return c}});var r=n(4165),o=n(5861),a=n(5671),i=n(3144),s=n(9386),c=function(){function e(t){(0,a.Z)(this,e),this.openModal=s.jb.open,this.closeModal=s.jb.close,this.subscribeModal=s.jb.subscribe,this.setTheme=s.Ic.setThemeConfig,s.Ic.setThemeConfig(t),s.t0.setConfig(t),this.initUi()}return(0,i.Z)(e,[{key:"initUi",value:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(typeof window<"u")){e.next=5;break}return e.next=3,n.e(1140).then(n.bind(n,1140));case 3:t=document.createElement("wcm-modal"),document.body.insertAdjacentElement("beforeend",t),s.zb.setIsUiLoaded(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()}}]);