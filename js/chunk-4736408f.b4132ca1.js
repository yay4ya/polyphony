(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4736408f"],{"0d52":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",[t("ul",{staticClass:"list"},e._l(e.videos,(function(n){return t("li",{key:n.id,staticClass:"item"},[t("Video",{attrs:{video:n},on:{clicked:e.onClick}})],1)})),0)])},r=[],c=(t("d81d"),t("d3b7"),t("3ca3"),t("ddb0"),t("96cf"),t("1da1")),o=t("2b0e"),a=o["a"].extend({name:"VideoList",props:["list"],components:{Video:function(){return t.e("chunk-0e1299b8").then(t.bind(null,"85e1"))}},data:function(){return{videos:[]}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all(e.list.map((function(e){return e.fetchVideoInfo()}))).then((function(){return e.videos=e.list}));case 2:case"end":return n.stop()}}),n)})))()},methods:{onClick:function(e){this.$emit("clicked",e)}}}),s=a,u=(t("abb2"),t("2877")),d=t("6544"),l=t.n(d),f=t("a523"),b=Object(u["a"])(s,i,r,!1,null,"2b90ea9d",null);n["default"]=b.exports;l()(b,{VContainer:f["a"]})},6066:function(e,n,t){},abb2:function(e,n,t){"use strict";t("6066")}}]);
//# sourceMappingURL=chunk-4736408f.b4132ca1.js.map