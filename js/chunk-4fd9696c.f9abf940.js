(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fd9696c"],{"57d8":function(t,e,n){"use strict";n("a321")},a321:function(t,e,n){},b0c7:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"d-flex"},[n("TrackList",{staticClass:"track-list",attrs:{tracks:t.tracks,sort:!1,put:!1,pull:"clone",queueing:!0,query:t.searchQuery,listActions:!0}})],1)},r=[],c=(n("d3b7"),n("5530")),s=n("2b0e"),i=n("2f62"),u=n("a735"),o=(n("4de4"),n("c975"),n("a15b"),n("b0c0"),n("d4ec")),l=n("bee2"),d=function(){function t(e){Object(o["a"])(this,t),this.tracks=e}return Object(l["a"])(t,[{key:"getTracksByTag",value:function(t){return this.tracks.filter((function(e){return e.tags.indexOf(t)>=0}))}},{key:"getTracksByQuery",value:function(t){return this.tracks.filter((function(e){var n=e.video.getTitle()||"",a=e.video.getChannel(),r=a?a.name:"",c=[e.title,e.singer,e.artist,n,r].join("  ").toLowerCase();return c.indexOf(t)>=0}))}}]),t}(),f=n("18df"),k=s["a"].extend({name:"Covers",components:{TrackList:function(){return Promise.all([n.e("chunk-04291098"),n.e("chunk-2d0e4545")]).then(n.bind(null,"a1a1"))}},data:function(){return{tracks:new d(f["e"](u["a"].tracks,!0)).getTracksByTag("歌ってみた")}},computed:Object(c["a"])({},Object(i["d"])(["searchQuery"]))}),b=k,h=(n("57d8"),n("2877")),g=n("6544"),p=n.n(g),v=n("a523"),y=Object(h["a"])(b,a,r,!1,null,"d2df06aa",null);e["default"]=y.exports;p()(y,{VContainer:v["a"]})}}]);
//# sourceMappingURL=chunk-4fd9696c.f9abf940.js.map