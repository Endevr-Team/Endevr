(this["webpackJsonpnew-frontend"]=this["webpackJsonpnew-frontend"]||[]).push([[17],{1494:function(t,e,n){"use strict";n.r(e),n.d(e,"MetamaskAdapter",(function(){return v}));var r=n(0),a=n(9),i=n(4),s=n(5),c=n(10),o=n(54),h=n(39),u=n(11),d=n(12),l=n(14),p=n.n(l),m=n(600),b=n.n(m),f=n(8),v=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=e.call(this),p()(Object(c.a)(t),"adapterNamespace",f.c.EIP155),p()(Object(c.a)(t),"currentChainNamespace",f.g.EIP155),p()(Object(c.a)(t),"type",f.a.EXTERNAL),p()(Object(c.a)(t),"name",f.j.METAMASK),p()(Object(c.a)(t),"status",f.d.NOT_READY),p()(Object(c.a)(t),"rehydrated",!1),p()(Object(c.a)(t),"metamaskProvider",null),t.chainConfig=r.chainConfig||null,t}return Object(s.a)(n,[{key:"provider",get:function(){return this.status===f.d.CONNECTED&&this.metamaskProvider?this.metamaskProvider:null},set:function(t){throw new Error("Not implemented")}},{key:"init",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object(o.a)(Object(h.a)(n.prototype),"checkInitializationRequirements",this).call(this),t.next=3,b()({mustBeMetaMask:!0});case 3:if(this.metamaskProvider=t.sent,this.metamaskProvider){t.next=6;break}throw f.k.notInstalled("Metamask extension is not installed");case 6:if(this.status=f.d.READY,this.emit(f.b.READY,f.j.METAMASK),t.prev=8,f.p.debug("initializing metamask adapter"),!e.autoConnect){t.next=14;break}return this.rehydrated=!0,t.next=14,this.connect();case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(8),this.emit(f.b.ERRORED,t.t0);case 19:case"end":return t.stop()}}),t,this,[[8,16]])})));return function(e){return t.apply(this,arguments)}}()},{key:"setAdapterSettings",value:function(t){}},{key:"connect",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(){var e=this;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(o.a)(Object(h.a)(n.prototype),"checkConnectionRequirements",this).call(this),this.chainConfig||(this.chainConfig=Object(f.n)(f.g.EIP155,1)),this.status=f.d.CONNECTING,this.emit(f.b.CONNECTING,{adapter:f.j.METAMASK}),this.metamaskProvider){t.next=6;break}throw f.l.notConnectedError("Not able to connect with metamask");case 6:return t.prev=6,t.next=9,this.metamaskProvider.request({method:"eth_requestAccounts"});case 9:if(this.metamaskProvider.chainId===this.chainConfig.chainId){t.next=13;break}return t.next=13,this.switchChain(this.chainConfig);case 13:if(this.status=f.d.CONNECTED,this.provider){t.next=16;break}throw f.l.notConnectedError("Failed to connect with provider");case 16:return this.provider.once("disconnect",(function(){e.disconnect()})),this.emit(f.b.CONNECTED,{adapter:f.j.METAMASK,reconnected:this.rehydrated}),t.abrupt("return",this.provider);case 21:throw t.prev=21,t.t0=t.catch(6),this.status=f.d.READY,this.rehydrated=!1,this.emit(f.b.ERRORED,t.t0),f.l.connectionError("Failed to login with metamask wallet");case 27:case"end":return t.stop()}}),t,this,[[6,21]])})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(){var e,n,a=arguments;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.length>0&&void 0!==a[0]?a[0]:{cleanup:!1},this.status===f.d.CONNECTED){t.next=3;break}throw f.l.disconnectionError("Not connected with wallet");case 3:null===(e=this.provider)||void 0===e||e.removeAllListeners(),n.cleanup?(this.status=f.d.NOT_READY,this.metamaskProvider=null):this.status=f.d.READY,this.rehydrated=!1,this.emit(f.b.DISCONNECTED);case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.status===f.d.CONNECTED){t.next=2;break}throw f.l.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return t.abrupt("return",{});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"switchChain",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.metamaskProvider){t.next=2;break}throw f.l.notConnectedError("Not connected with wallet");case 2:return t.prev=2,t.next=5,this.metamaskProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:e.chainId}]});case 5:case 12:t.next=15;break;case 7:if(t.prev=7,t.t0=t.catch(2),4902!==t.t0.code){t.next=14;break}return t.next=12,this.metamaskProvider.request({method:"wallet_addEthereumChain",params:[{chainId:e.chainId,chainName:e.displayName,rpcUrls:[e.rpcTarget]}]});case 14:throw t.t0;case 15:case"end":return t.stop()}}),t,this,[[2,7]])})));return function(e){return t.apply(this,arguments)}}()}]),n}(f.e)}}]);
//# sourceMappingURL=17.48591c4d.chunk.js.map