(this["webpackJsonpnew-frontend"]=this["webpackJsonpnew-frontend"]||[]).push([[15],{1324:function(n,r){},1490:function(n,r,t){"use strict";t.r(r),function(n){t.d(r,"getED25519Key",(function(){return o}));var e=t(104),a=t(1323),f=t.n(a).a.lowlevel;function o(r){var t;t="string"===typeof r?n.from(r,"hex"):r;var a=new Uint8Array(64),o=[f.gf(),f.gf(),f.gf(),f.gf()],c=new Uint8Array([].concat(Object(e.a)(new Uint8Array(t)),Object(e.a)(new Uint8Array(32)))),i=new Uint8Array(32);f.crypto_hash(a,c,32),a[0]&=248,a[31]&=127,a[31]|=64,f.scalarbase(o,a),f.pack(i,o);for(var s=0;s<32;s+=1)c[s+32]=i[s];return{sk:n.from(c),pk:n.from(i)}}}.call(this,t(22).Buffer)}}]);
//# sourceMappingURL=15.df5592f2.chunk.js.map