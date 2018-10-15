// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__43607__delegate = function (x__43591__auto__){
if(cljs.core.truth_(content_hub.core.mount_root)){
return cljs.core.apply.call(null,content_hub.core.mount_root,x__43591__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("content-hub.core/mount-root"),"' is missing"].join(''));
}
};
var G__43607 = function (var_args){
var x__43591__auto__ = null;
if (arguments.length > 0) {
var G__43608__i = 0, G__43608__a = new Array(arguments.length -  0);
while (G__43608__i < G__43608__a.length) {G__43608__a[G__43608__i] = arguments[G__43608__i + 0]; ++G__43608__i;}
  x__43591__auto__ = new cljs.core.IndexedSeq(G__43608__a,0,null);
} 
return G__43607__delegate.call(this,x__43591__auto__);};
G__43607.cljs$lang$maxFixedArity = 0;
G__43607.cljs$lang$applyTo = (function (arglist__43609){
var x__43591__auto__ = cljs.core.seq(arglist__43609);
return G__43607__delegate(x__43591__auto__);
});
G__43607.cljs$core$IFn$_invoke$arity$variadic = G__43607__delegate;
return G__43607;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1539627777895
