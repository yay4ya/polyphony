(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a876727","chunk-2d0e4545"],{9080:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i("18df");class a{constructor(t,e,i=s["a"]()){this.type=t,this.text=e,this.uuid=i}}},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return r}));var s=i("b0af"),a=i("80d2");const n=Object(a["i"])("v-card__actions"),l=Object(a["i"])("v-card__subtitle"),o=Object(a["i"])("v-card__text"),r=Object(a["i"])("v-card__title");s["a"]},c217:function(t,e,i){},c8ab:function(t,e,i){"use strict";i("c217")},e449:function(t,e,i){"use strict";i("ee6f");var s=i("480e"),a=i("4ad4"),n=i("16b7"),l=i("b848"),o=i("21be"),r=i("fe6c"),c=i("75eb"),h=i("58df"),d=i("80d2");const u=Object(h["a"])(o["a"],Object(r["b"])(["top","right","bottom","left","absolute"]),a["a"],c["a"]);var f=u.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:()=>({activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}),computed:{computedLeft(){const t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,s=Math.max(t.width,e.width);let a=0;if(a+=i,(this.left||this.$vuetify.rtl&&!this.right)&&(a-=s-t.width),this.offsetX){const e=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));a+=this.left?-e:t.width}return this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),a},computedTop(){const t=this.dimensions.activator,e=this.dimensions.content;let i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled(t){t&&this.callDeactivate()},isActive(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate(){},calcLeft(t){return Object(d["g"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop(){return Object(d["g"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow(t,e){const i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow(t){const e=this.getInnerHeight(),i=this.absoluteYOffset+e,s=this.dimensions.activator,a=this.dimensions.content.height,n=t+a,l=i<n;return l&&this.offsetOverflow&&s.top>a?t=this.pageYOffset+(s.top-a):l&&!this.allowOverflow?t=i-a-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate(){this.hasWindow&&this.activate()},callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed(){if(!1!==this.attach)return;let t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1},deactivate(){},genActivatorListeners(){const t=a["a"].options.methods.genActivatorListeners.call(this),e=t.click;return e&&(t.click=t=>{this.openOnClick&&e&&e(t),this.absoluteX=t.clientX,this.absoluteY=t.clientY}),t},getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect(t){const e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure(t){if(!t||!this.hasWindow)return null;const e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){const i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek(t){requestAnimationFrame(()=>{const e=this.$refs.content;e&&"none"===e.style.display?(e.style.display="inline-block",t(),e.style.display="none"):t()})},startTransition(){return new Promise(t=>requestAnimationFrame(()=>{this.isContentActive=this.hasJustFocused=this.isActive,t()}))},updateDimensions(){this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;const t={activator:{...this.dimensions.activator},content:{...this.dimensions.content}};if(!this.hasActivator||this.absolute)t.activator=this.absolutePosition();else{const e=this.getActivator();if(!e)return;t.activator=this.measure(e),t.activator.offsetLeft=e.offsetLeft,!1!==this.attach?t.activator.offsetTop=e.offsetTop:t.activator.offsetTop=0}this.sneakPeek(()=>{if(this.$refs.content){if(this.$refs.content.offsetParent){const e=this.getRoundedBoundedClientRect(this.$refs.content.offsetParent);this.relativeYOffset=window.pageYOffset+e.top,t.activator.top-=this.relativeYOffset,t.activator.left-=window.pageXOffset+e.left}t.content=this.measure(this.$refs.content)}this.dimensions=t})}}}),p=i("e4d3"),m=i("a236"),v=i("7560"),g=i("a293"),y=i("dc22"),b=i("d9bd"),k=i("7d8f");const w=Object(h["a"])(l["a"],n["a"],p["a"],m["a"],v["a"],f);e["a"]=w.extend({name:"v-menu",directives:{ClickOutside:g["a"],Resize:y["a"]},provide(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile(){return this.tiles[this.listIndex]},calculatedLeft(){const t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(d["g"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight(){const t=this.auto?"200px":Object(d["g"])(this.maxHeight);return t||"0"},calculatedMaxWidth(){return Object(d["g"])(this.maxWidth)||"0"},calculatedMinWidth(){if(this.minWidth)return Object(d["g"])(this.minWidth)||"0";const t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(d["g"])(Math.min(e,t))||"0"},calculatedTop(){const t=this.auto?Object(d["g"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles(){return Boolean(this.tiles.find(t=>t.tabIndex>-1))},styles(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive(t){t||(this.listIndex=-1)},isContentActive(t){this.hasJustFocused=t},listIndex(t,e){if(t in this.tiles){const e=this.tiles[t];e.classList.add("v-list-item--highlighted");const i=this.$refs.content.scrollTop,s=this.$refs.content.clientHeight;i>e.offsetTop-8?Object(k["b"])(e.offsetTop-e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):i+s<e.offsetTop+e.clientHeight+8&&Object(k["b"])(e.offsetTop-s+2*e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(b["e"])("full-width",this)},mounted(){this.isActive&&this.callActivate()},methods:{activate(){this.updateDimensions(),requestAnimationFrame(()=>{this.startTransition().then(()=>{this.$refs.content&&(this.calculatedTopAuto=this.calcTopAuto(),this.auto&&(this.$refs.content.scrollTop=this.calcScrollPosition()))})})},calcScrollPosition(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);const i=e.offsetTop-this.calcScrollPosition(),s=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-s-1},changeListIndex(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==d["r"].tab){if(t.keyCode===d["r"].down)this.nextTile();else if(t.keyCode===d["r"].up)this.prevTile();else if(t.keyCode===d["r"].end)this.lastTile();else if(t.keyCode===d["r"].home)this.firstTile();else{if(t.keyCode!==d["r"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional(t){const e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes(){const t=a["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?{...t,"aria-activedescendant":this.activeTile.id}:t},genActivatorListeners(){const t=f.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition(){const t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives(){const t=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&t.push({name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:()=>[this.$el,...this.getOpenDependentElements()]}}),t},genContent(){const t={attrs:{...this.getScopeIdAttrs(),role:"role"in this.$attrs?this.$attrs.role:"menu"},staticClass:"v-menu__content",class:{...this.rootThemeClasses,...this.roundedClasses,"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive,[this.contentClass.trim()]:!0},style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:t=>{const e=t.target;e.getAttribute("disabled")||this.closeOnContentClick&&(this.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(t.on=t.on||{},t.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(t.on=t.on||{},t.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(t.on=t.on||{},t.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",t,this.getContentSlot())},getTiles(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler(){this.runDelay("open",()=>{this.hasJustFocused||(this.hasJustFocused=!0)})},mouseLeaveHandler(t){this.runDelay("close",()=>{var e;(null===(e=this.$refs.content)||void 0===e?void 0:e.contains(t.relatedTarget))||requestAnimationFrame(()=>{this.isActive=!1,this.callDeactivate()})})},nextTile(){const t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile(){const t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile(){const t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile(){const t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown(t){if(t.keyCode===d["r"].esc){setTimeout(()=>{this.isActive=!1});const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}else!this.isActive&&[d["r"].up,d["r"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick(()=>this.changeListIndex(t))},onResize(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render(t){const e={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",e,[!this.activator&&this.genActivator(),this.showLazyContent(()=>[this.$createElement(s["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])])])}})},ea2f:function(t,e,i){"use strict";i.r(e);var s=i("0798"),a=i("8336"),n=i("b0af"),l=i("99d9"),o=i("a523"),r=i("169a"),c=i("132d"),h=i("8860"),d=i("da13"),u=i("5d23"),f=i("e449"),p=i("8654"),m=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(o["a"],[e("div",{staticClass:"card-list-container"},[e("CardList",{staticClass:"playlist-list",attrs:{cards:t.playlistCards,query:t.searchQuery},on:{clicked:t.onClick}})],1),e("transition",{attrs:{name:"slide"}},[t.selectedPlaylist?e("div",{staticClass:"track-list-container"},[e("div",{staticClass:"playlist-info-container",on:{click:function(e){t.selectedPlaylist=null}}},[e("div",{staticClass:"playlist-info-background",style:{backgroundImage:"url("+t.selectedPlaylistThumbnail+")"}}),e("div",{staticClass:"playlist-info-content"},[e("div",{staticClass:"playlist-info"},[e("h2",{staticClass:"playlist-info-title"},[t._v(" "+t._s(t.selectedPlaylist.name)+" "),e(r["a"],{attrs:{"max-width":"400px"},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e(a["a"],t._g(t._b({attrs:{icon:"",dark:"",small:""},on:{click:function(e){t.renamedPlaylistName=t.selectedPlaylist.name}}},"v-btn",s,!1),i),[e(c["a"],{attrs:{size:"18"}},[t._v("mdi-pencil")])],1)]}}],null,!1,2973525245),model:{value:t.renameDialog,callback:function(e){t.renameDialog=e},expression:"renameDialog"}},[e(n["a"],[e(l["d"],[t._v("プレイリスト名を変更")]),t.renamePlaylistErrorMessage?e(s["a"],{attrs:{type:t.renamePlaylistErrorMessage.type},on:{click:function(e){t.renamePlaylistErrorMessage=null}}},[t._v(" "+t._s(t.renamePlaylistErrorMessage.text)+" ")]):t._e(),e(l["c"],[e(p["a"],{staticClass:"text-field-rename",model:{value:t.renamedPlaylistName,callback:function(e){t.renamedPlaylistName=e},expression:"renamedPlaylistName"}})],1),e(l["a"],[e(a["a"],{attrs:{text:"",color:"blue"},on:{click:t.renameSelectedPlaylist}},[t._v("変更")]),e(a["a"],{attrs:{text:"",color:"red"},on:{click:function(e){t.renameDialog=!1}}},[t._v("キャンセル")])],1)],1)],1)],1),e("h4",{staticClass:"playlist-info-subtitle"},[t._v(" "+t._s(t.selectedPlaylist.tracks.length+" 曲")+" ")])]),e("div",{staticClass:"btn-close-track-list"},[e(a["a"],{attrs:{dark:"",icon:""}},[e(c["a"],{attrs:{size:"40"}},[t._v("mdi-chevron-down")])],1)],1),e("div",{staticClass:"playlist-actions"},[e(a["a"],{attrs:{icon:"",dark:""},on:{click:function(e){return e.stopPropagation(),t.addTracksToQueue.apply(null,arguments)}}},[e(c["a"],[t._v("mdi-plus")])],1),e(a["a"],{attrs:{icon:"",dark:""},on:{click:function(e){return e.stopPropagation(),t.shuffleAndQueue.apply(null,arguments)}}},[e(c["a"],[t._v("mdi-shuffle-variant")])],1),e(a["a"],{attrs:{icon:"",dark:""},on:{click:function(e){return e.stopPropagation(),t.queueAndRepeat.apply(null,arguments)}}},[e(c["a"],[t._v("mdi-repeat")])],1),e(f["a"],{attrs:{"offset-y":"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e(a["a"],t._g(t._b({attrs:{icon:"",dark:""}},"v-btn",s,!1),i),[e(c["a"],[t._v("mdi-share")])],1)]}}],null,!1,2835766658)},[e(h["a"],{attrs:{dense:""}},[e(d["a"],{attrs:{dense:"",href:t.getTwitterShareUrl(),target:"_blank"}},[e(u["b"],[t._v("Xで共有")])],1),e(d["a"],{attrs:{dense:""},on:{click:t.copySelectedPlaylistUrl}},[e(u["b"],[t._v("URLをコピー")])],1)],1)],1),e(r["a"],{attrs:{"max-width":"300px"},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e(a["a"],t._g(t._b({staticClass:"btn-delete",attrs:{icon:"",dark:""},on:{click:function(t){t.stopPropagation()}}},"v-btn",s,!1),i),[e(c["a"],[t._v("mdi-delete")])],1)]}}],null,!1,2463029616),model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[e(n["a"],[e(l["d"],[t._v(" プレイリストを削除しますか？ ")]),e(l["b"],[t._v(" "+t._s(t.selectedPlaylist.name)+" ")]),e(l["a"],[e(a["a"],{attrs:{text:"",color:"blue"},on:{click:t.deleteSeledtedPlaylist}},[t._v("はい")]),e(a["a"],{attrs:{text:"",color:"red"},on:{click:function(e){t.deleteDialog=!1}}},[t._v("いいえ")])],1)],1)],1)],1)])]),e("TrackList",{staticClass:"track-list scroll-thin",attrs:{tracks:t.selectedPlaylist.tracks,sort:!0,put:!0,pull:"clone",deletable:!0,queueing:!0},on:{deleted:t.deleteTrack,changed:t.updatePlaylistTracks}})],1):t._e()])],1)},v=[],g=(i("d9e2"),i("2b0e")),y=i("2f62"),b=i("2d40"),k=i("18df");function w(t){const e=new URLSearchParams({name:t.name,tracks:t.tracks.map(t=>t.id).join("-")});return"https://yay4ya.github.io/akikunouta/#/videos?"+e.toString()}var P=i("9080"),T=g["a"].extend({name:"Playlists",components:{CardList:()=>i.e("chunk-0aefeb34").then(i.bind(null,"c995e")),TrackList:()=>i.e("chunk-529104f0").then(i.bind(null,"a1a1"))},data(){return{selectedPlaylist:null,renameDialog:!1,deleteDialog:!1,renamedPlaylistName:"",renamePlaylistErrorMessage:null}},computed:{...Object(y["d"])(["playlists","searchQuery"]),playlistCards:function(){return this.playlists.map(t=>({id:t.name,title:t.name,subtitle:t.tracks.length+" 曲",thumbnailUrl:t.tracks.length?t.tracks[0].video.getThumbnailURL("hqdefault"):"",metadata:""}))},selectedPlaylistThumbnail(){const t=this.selectedPlaylist&&this.selectedPlaylist.tracks.length?this.selectedPlaylist.tracks[0]:null;return t?t.video.getThumbnailURL("hqdefault"):""}},methods:{...Object(y["c"])({addPlaylist:b["c"],removePlaylist:b["j"],updatePlaylist:b["r"],renamePlaylist:b["k"],addToQueue:b["d"],setQueue:b["p"],setPlayingTrack:b["o"],setPlayerRepeat:b["m"],addMessage:b["b"]}),onClick(t){this.selectedPlaylist=this.playlists.find(e=>e.name==t.id)||null},deleteTrack(t){if(!this.selectedPlaylist)throw Error("no playlist selected");this.selectedPlaylist.tracks=this.selectedPlaylist.tracks.filter(e=>e.uuid!==t.uuid),this.updatePlaylist(this.selectedPlaylist)},updatePlaylistTracks(t){if(!this.selectedPlaylist)throw Error("no playlist selected");this.selectedPlaylist.tracks=t,this.updatePlaylist(this.selectedPlaylist)},renameSelectedPlaylist(){if(!this.selectedPlaylist)throw Error("no playlist selected");this.selectedPlaylist.name!==this.renamedPlaylistName&&this.playlists.find(t=>t.name===this.renamedPlaylistName)?this.renamePlaylistErrorMessage=new P["a"]("error","プレイリストが既に存在します"):(this.renamePlaylist({targetPlaylist:this.selectedPlaylist,newName:this.renamedPlaylistName}),this.renameDialog=!1)},deleteSeledtedPlaylist(){if(!this.selectedPlaylist)throw Error("no playlist selected");this.removePlaylist(this.selectedPlaylist),this.addMessage(new P["a"]("info",'プレイリスト "'+this.selectedPlaylist.name+'" を削除しました')),this.selectedPlaylist=null,this.deleteDialog=!1},addTracksToQueue(){if(!this.selectedPlaylist)throw Error("no playlist selected");this.selectedPlaylist.tracks.map(t=>this.addToQueue(t.clone()))},shuffleAndQueue(){if(!this.selectedPlaylist)throw Error("no playlist selected");const t=k["c"](this.selectedPlaylist.tracks);t.length>0&&(this.setPlayingTrack(t[0]),this.setQueue(t))},queueAndRepeat(){if(!this.selectedPlaylist)throw Error("no playlist selected");const t=this.selectedPlaylist.tracks;t.length>0&&(this.setPlayingTrack(t[0]),this.setQueue(t),this.setPlayerRepeat("repeat"))},getSelectedPlaylistUrl(){if(!this.selectedPlaylist)throw Error("no playlist selected");return w(this.selectedPlaylist)},copySelectedPlaylistUrl(){const t=this.getSelectedPlaylistUrl();window.navigator.clipboard.writeText(t),this.addMessage(new P["a"]("info","プレイリストのURLをコピーしました"))},getTwitterShareUrl(){var t;const e=this.getSelectedPlaylistUrl(),i=`#アキくんのおうた\nプレイリスト『${null===(t=this.selectedPlaylist)||void 0===t?void 0:t.name}』\n${e}`;return"https://x.com/intent/post?text="+encodeURIComponent(i)}},watch:{renameDialog(){this.renameDialog||(this.renamePlaylistErrorMessage=null)}}}),x=T,O=(i("c8ab"),i("2877")),C=Object(O["a"])(x,m,v,!1,null,"c8331416",null);e["default"]=C.exports},ee6f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-2a876727.6942ee95.js.map