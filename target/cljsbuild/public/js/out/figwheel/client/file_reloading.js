// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__42234_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__42234_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__42235 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__42236 = null;
var count__42237 = (0);
var i__42238 = (0);
while(true){
if((i__42238 < count__42237)){
var n = cljs.core._nth.call(null,chunk__42236,i__42238);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__42239 = seq__42235;
var G__42240 = chunk__42236;
var G__42241 = count__42237;
var G__42242 = (i__42238 + (1));
seq__42235 = G__42239;
chunk__42236 = G__42240;
count__42237 = G__42241;
i__42238 = G__42242;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__42235);
if(temp__5457__auto__){
var seq__42235__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42235__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__42235__$1);
var G__42243 = cljs.core.chunk_rest.call(null,seq__42235__$1);
var G__42244 = c__4351__auto__;
var G__42245 = cljs.core.count.call(null,c__4351__auto__);
var G__42246 = (0);
seq__42235 = G__42243;
chunk__42236 = G__42244;
count__42237 = G__42245;
i__42238 = G__42246;
continue;
} else {
var n = cljs.core.first.call(null,seq__42235__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__42247 = cljs.core.next.call(null,seq__42235__$1);
var G__42248 = null;
var G__42249 = (0);
var G__42250 = (0);
seq__42235 = G__42247;
chunk__42236 = G__42248;
count__42237 = G__42249;
i__42238 = G__42250;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__42251){
var vec__42252 = p__42251;
var _ = cljs.core.nth.call(null,vec__42252,(0),null);
var v = cljs.core.nth.call(null,vec__42252,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__42255){
var vec__42256 = p__42255;
var k = cljs.core.nth.call(null,vec__42256,(0),null);
var v = cljs.core.nth.call(null,vec__42256,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__42268_42276 = cljs.core.seq.call(null,deps);
var chunk__42269_42277 = null;
var count__42270_42278 = (0);
var i__42271_42279 = (0);
while(true){
if((i__42271_42279 < count__42270_42278)){
var dep_42280 = cljs.core._nth.call(null,chunk__42269_42277,i__42271_42279);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_42280;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_42280));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_42280,(depth + (1)),state);
} else {
}


var G__42281 = seq__42268_42276;
var G__42282 = chunk__42269_42277;
var G__42283 = count__42270_42278;
var G__42284 = (i__42271_42279 + (1));
seq__42268_42276 = G__42281;
chunk__42269_42277 = G__42282;
count__42270_42278 = G__42283;
i__42271_42279 = G__42284;
continue;
} else {
var temp__5457__auto___42285 = cljs.core.seq.call(null,seq__42268_42276);
if(temp__5457__auto___42285){
var seq__42268_42286__$1 = temp__5457__auto___42285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42268_42286__$1)){
var c__4351__auto___42287 = cljs.core.chunk_first.call(null,seq__42268_42286__$1);
var G__42288 = cljs.core.chunk_rest.call(null,seq__42268_42286__$1);
var G__42289 = c__4351__auto___42287;
var G__42290 = cljs.core.count.call(null,c__4351__auto___42287);
var G__42291 = (0);
seq__42268_42276 = G__42288;
chunk__42269_42277 = G__42289;
count__42270_42278 = G__42290;
i__42271_42279 = G__42291;
continue;
} else {
var dep_42292 = cljs.core.first.call(null,seq__42268_42286__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_42292;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_42292));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_42292,(depth + (1)),state);
} else {
}


var G__42293 = cljs.core.next.call(null,seq__42268_42286__$1);
var G__42294 = null;
var G__42295 = (0);
var G__42296 = (0);
seq__42268_42276 = G__42293;
chunk__42269_42277 = G__42294;
count__42270_42278 = G__42295;
i__42271_42279 = G__42296;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__42272){
var vec__42273 = p__42272;
var seq__42274 = cljs.core.seq.call(null,vec__42273);
var first__42275 = cljs.core.first.call(null,seq__42274);
var seq__42274__$1 = cljs.core.next.call(null,seq__42274);
var x = first__42275;
var xs = seq__42274__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__42273,seq__42274,first__42275,seq__42274__$1,x,xs,get_deps__$1){
return (function (p1__42259_SHARP_){
return clojure.set.difference.call(null,p1__42259_SHARP_,x);
});})(vec__42273,seq__42274,first__42275,seq__42274__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__42297 = cljs.core.seq.call(null,provides);
var chunk__42298 = null;
var count__42299 = (0);
var i__42300 = (0);
while(true){
if((i__42300 < count__42299)){
var prov = cljs.core._nth.call(null,chunk__42298,i__42300);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42301_42309 = cljs.core.seq.call(null,requires);
var chunk__42302_42310 = null;
var count__42303_42311 = (0);
var i__42304_42312 = (0);
while(true){
if((i__42304_42312 < count__42303_42311)){
var req_42313 = cljs.core._nth.call(null,chunk__42302_42310,i__42304_42312);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42313,prov);


var G__42314 = seq__42301_42309;
var G__42315 = chunk__42302_42310;
var G__42316 = count__42303_42311;
var G__42317 = (i__42304_42312 + (1));
seq__42301_42309 = G__42314;
chunk__42302_42310 = G__42315;
count__42303_42311 = G__42316;
i__42304_42312 = G__42317;
continue;
} else {
var temp__5457__auto___42318 = cljs.core.seq.call(null,seq__42301_42309);
if(temp__5457__auto___42318){
var seq__42301_42319__$1 = temp__5457__auto___42318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42301_42319__$1)){
var c__4351__auto___42320 = cljs.core.chunk_first.call(null,seq__42301_42319__$1);
var G__42321 = cljs.core.chunk_rest.call(null,seq__42301_42319__$1);
var G__42322 = c__4351__auto___42320;
var G__42323 = cljs.core.count.call(null,c__4351__auto___42320);
var G__42324 = (0);
seq__42301_42309 = G__42321;
chunk__42302_42310 = G__42322;
count__42303_42311 = G__42323;
i__42304_42312 = G__42324;
continue;
} else {
var req_42325 = cljs.core.first.call(null,seq__42301_42319__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42325,prov);


var G__42326 = cljs.core.next.call(null,seq__42301_42319__$1);
var G__42327 = null;
var G__42328 = (0);
var G__42329 = (0);
seq__42301_42309 = G__42326;
chunk__42302_42310 = G__42327;
count__42303_42311 = G__42328;
i__42304_42312 = G__42329;
continue;
}
} else {
}
}
break;
}


var G__42330 = seq__42297;
var G__42331 = chunk__42298;
var G__42332 = count__42299;
var G__42333 = (i__42300 + (1));
seq__42297 = G__42330;
chunk__42298 = G__42331;
count__42299 = G__42332;
i__42300 = G__42333;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__42297);
if(temp__5457__auto__){
var seq__42297__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42297__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__42297__$1);
var G__42334 = cljs.core.chunk_rest.call(null,seq__42297__$1);
var G__42335 = c__4351__auto__;
var G__42336 = cljs.core.count.call(null,c__4351__auto__);
var G__42337 = (0);
seq__42297 = G__42334;
chunk__42298 = G__42335;
count__42299 = G__42336;
i__42300 = G__42337;
continue;
} else {
var prov = cljs.core.first.call(null,seq__42297__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42305_42338 = cljs.core.seq.call(null,requires);
var chunk__42306_42339 = null;
var count__42307_42340 = (0);
var i__42308_42341 = (0);
while(true){
if((i__42308_42341 < count__42307_42340)){
var req_42342 = cljs.core._nth.call(null,chunk__42306_42339,i__42308_42341);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42342,prov);


var G__42343 = seq__42305_42338;
var G__42344 = chunk__42306_42339;
var G__42345 = count__42307_42340;
var G__42346 = (i__42308_42341 + (1));
seq__42305_42338 = G__42343;
chunk__42306_42339 = G__42344;
count__42307_42340 = G__42345;
i__42308_42341 = G__42346;
continue;
} else {
var temp__5457__auto___42347__$1 = cljs.core.seq.call(null,seq__42305_42338);
if(temp__5457__auto___42347__$1){
var seq__42305_42348__$1 = temp__5457__auto___42347__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42305_42348__$1)){
var c__4351__auto___42349 = cljs.core.chunk_first.call(null,seq__42305_42348__$1);
var G__42350 = cljs.core.chunk_rest.call(null,seq__42305_42348__$1);
var G__42351 = c__4351__auto___42349;
var G__42352 = cljs.core.count.call(null,c__4351__auto___42349);
var G__42353 = (0);
seq__42305_42338 = G__42350;
chunk__42306_42339 = G__42351;
count__42307_42340 = G__42352;
i__42308_42341 = G__42353;
continue;
} else {
var req_42354 = cljs.core.first.call(null,seq__42305_42348__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42354,prov);


var G__42355 = cljs.core.next.call(null,seq__42305_42348__$1);
var G__42356 = null;
var G__42357 = (0);
var G__42358 = (0);
seq__42305_42338 = G__42355;
chunk__42306_42339 = G__42356;
count__42307_42340 = G__42357;
i__42308_42341 = G__42358;
continue;
}
} else {
}
}
break;
}


var G__42359 = cljs.core.next.call(null,seq__42297__$1);
var G__42360 = null;
var G__42361 = (0);
var G__42362 = (0);
seq__42297 = G__42359;
chunk__42298 = G__42360;
count__42299 = G__42361;
i__42300 = G__42362;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__42363_42367 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__42364_42368 = null;
var count__42365_42369 = (0);
var i__42366_42370 = (0);
while(true){
if((i__42366_42370 < count__42365_42369)){
var ns_42371 = cljs.core._nth.call(null,chunk__42364_42368,i__42366_42370);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42371);


var G__42372 = seq__42363_42367;
var G__42373 = chunk__42364_42368;
var G__42374 = count__42365_42369;
var G__42375 = (i__42366_42370 + (1));
seq__42363_42367 = G__42372;
chunk__42364_42368 = G__42373;
count__42365_42369 = G__42374;
i__42366_42370 = G__42375;
continue;
} else {
var temp__5457__auto___42376 = cljs.core.seq.call(null,seq__42363_42367);
if(temp__5457__auto___42376){
var seq__42363_42377__$1 = temp__5457__auto___42376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42363_42377__$1)){
var c__4351__auto___42378 = cljs.core.chunk_first.call(null,seq__42363_42377__$1);
var G__42379 = cljs.core.chunk_rest.call(null,seq__42363_42377__$1);
var G__42380 = c__4351__auto___42378;
var G__42381 = cljs.core.count.call(null,c__4351__auto___42378);
var G__42382 = (0);
seq__42363_42367 = G__42379;
chunk__42364_42368 = G__42380;
count__42365_42369 = G__42381;
i__42366_42370 = G__42382;
continue;
} else {
var ns_42383 = cljs.core.first.call(null,seq__42363_42377__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42383);


var G__42384 = cljs.core.next.call(null,seq__42363_42377__$1);
var G__42385 = null;
var G__42386 = (0);
var G__42387 = (0);
seq__42363_42367 = G__42384;
chunk__42364_42368 = G__42385;
count__42365_42369 = G__42386;
i__42366_42370 = G__42387;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__42388__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42389__i = 0, G__42389__a = new Array(arguments.length -  0);
while (G__42389__i < G__42389__a.length) {G__42389__a[G__42389__i] = arguments[G__42389__i + 0]; ++G__42389__i;}
  args = new cljs.core.IndexedSeq(G__42389__a,0,null);
} 
return G__42388__delegate.call(this,args);};
G__42388.cljs$lang$maxFixedArity = 0;
G__42388.cljs$lang$applyTo = (function (arglist__42390){
var args = cljs.core.seq(arglist__42390);
return G__42388__delegate(args);
});
G__42388.cljs$core$IFn$_invoke$arity$variadic = G__42388__delegate;
return G__42388;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__42391_SHARP_,p2__42392_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42391_SHARP_)].join('')),p2__42392_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__42393_SHARP_,p2__42394_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42393_SHARP_)].join(''),p2__42394_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__42395 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__42395.addCallback(((function (G__42395){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__42395))
);

G__42395.addErrback(((function (G__42395){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__42395))
);

return G__42395;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e42396){if((e42396 instanceof Error)){
var e = e42396;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42396;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e42397){if((e42397 instanceof Error)){
var e = e42397;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42397;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42398 = cljs.core._EQ_;
var expr__42399 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42398.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42399))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__42398.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42399))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__42398.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__42399))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__42398,expr__42399){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42398,expr__42399))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42401,callback){
var map__42402 = p__42401;
var map__42402__$1 = ((((!((map__42402 == null)))?(((((map__42402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42402):map__42402);
var file_msg = map__42402__$1;
var request_url = cljs.core.get.call(null,map__42402__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__42402,map__42402__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42402,map__42402__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto__){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto__){
return (function (state_42440){
var state_val_42441 = (state_42440[(1)]);
if((state_val_42441 === (7))){
var inst_42436 = (state_42440[(2)]);
var state_42440__$1 = state_42440;
var statearr_42442_42468 = state_42440__$1;
(statearr_42442_42468[(2)] = inst_42436);

(statearr_42442_42468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (1))){
var state_42440__$1 = state_42440;
var statearr_42443_42469 = state_42440__$1;
(statearr_42443_42469[(2)] = null);

(statearr_42443_42469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (4))){
var inst_42406 = (state_42440[(7)]);
var inst_42406__$1 = (state_42440[(2)]);
var state_42440__$1 = (function (){var statearr_42444 = state_42440;
(statearr_42444[(7)] = inst_42406__$1);

return statearr_42444;
})();
if(cljs.core.truth_(inst_42406__$1)){
var statearr_42445_42470 = state_42440__$1;
(statearr_42445_42470[(1)] = (5));

} else {
var statearr_42446_42471 = state_42440__$1;
(statearr_42446_42471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (15))){
var inst_42419 = (state_42440[(8)]);
var inst_42421 = (state_42440[(9)]);
var inst_42423 = inst_42421.call(null,inst_42419);
var state_42440__$1 = state_42440;
var statearr_42447_42472 = state_42440__$1;
(statearr_42447_42472[(2)] = inst_42423);

(statearr_42447_42472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (13))){
var inst_42430 = (state_42440[(2)]);
var state_42440__$1 = state_42440;
var statearr_42448_42473 = state_42440__$1;
(statearr_42448_42473[(2)] = inst_42430);

(statearr_42448_42473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (6))){
var state_42440__$1 = state_42440;
var statearr_42449_42474 = state_42440__$1;
(statearr_42449_42474[(2)] = null);

(statearr_42449_42474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (17))){
var inst_42427 = (state_42440[(2)]);
var state_42440__$1 = state_42440;
var statearr_42450_42475 = state_42440__$1;
(statearr_42450_42475[(2)] = inst_42427);

(statearr_42450_42475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (3))){
var inst_42438 = (state_42440[(2)]);
var state_42440__$1 = state_42440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42440__$1,inst_42438);
} else {
if((state_val_42441 === (12))){
var state_42440__$1 = state_42440;
var statearr_42451_42476 = state_42440__$1;
(statearr_42451_42476[(2)] = null);

(statearr_42451_42476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (2))){
var state_42440__$1 = state_42440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42440__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42441 === (11))){
var inst_42411 = (state_42440[(10)]);
var inst_42417 = figwheel.client.file_reloading.blocking_load.call(null,inst_42411);
var state_42440__$1 = state_42440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42440__$1,(14),inst_42417);
} else {
if((state_val_42441 === (9))){
var inst_42411 = (state_42440[(10)]);
var state_42440__$1 = state_42440;
if(cljs.core.truth_(inst_42411)){
var statearr_42452_42477 = state_42440__$1;
(statearr_42452_42477[(1)] = (11));

} else {
var statearr_42453_42478 = state_42440__$1;
(statearr_42453_42478[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (5))){
var inst_42406 = (state_42440[(7)]);
var inst_42412 = (state_42440[(11)]);
var inst_42411 = cljs.core.nth.call(null,inst_42406,(0),null);
var inst_42412__$1 = cljs.core.nth.call(null,inst_42406,(1),null);
var state_42440__$1 = (function (){var statearr_42454 = state_42440;
(statearr_42454[(11)] = inst_42412__$1);

(statearr_42454[(10)] = inst_42411);

return statearr_42454;
})();
if(cljs.core.truth_(inst_42412__$1)){
var statearr_42455_42479 = state_42440__$1;
(statearr_42455_42479[(1)] = (8));

} else {
var statearr_42456_42480 = state_42440__$1;
(statearr_42456_42480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (14))){
var inst_42421 = (state_42440[(9)]);
var inst_42411 = (state_42440[(10)]);
var inst_42419 = (state_42440[(2)]);
var inst_42420 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42421__$1 = cljs.core.get.call(null,inst_42420,inst_42411);
var state_42440__$1 = (function (){var statearr_42457 = state_42440;
(statearr_42457[(8)] = inst_42419);

(statearr_42457[(9)] = inst_42421__$1);

return statearr_42457;
})();
if(cljs.core.truth_(inst_42421__$1)){
var statearr_42458_42481 = state_42440__$1;
(statearr_42458_42481[(1)] = (15));

} else {
var statearr_42459_42482 = state_42440__$1;
(statearr_42459_42482[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (16))){
var inst_42419 = (state_42440[(8)]);
var inst_42425 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42419);
var state_42440__$1 = state_42440;
var statearr_42460_42483 = state_42440__$1;
(statearr_42460_42483[(2)] = inst_42425);

(statearr_42460_42483[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (10))){
var inst_42432 = (state_42440[(2)]);
var state_42440__$1 = (function (){var statearr_42461 = state_42440;
(statearr_42461[(12)] = inst_42432);

return statearr_42461;
})();
var statearr_42462_42484 = state_42440__$1;
(statearr_42462_42484[(2)] = null);

(statearr_42462_42484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (8))){
var inst_42412 = (state_42440[(11)]);
var inst_42414 = eval(inst_42412);
var state_42440__$1 = state_42440;
var statearr_42463_42485 = state_42440__$1;
(statearr_42463_42485[(2)] = inst_42414);

(statearr_42463_42485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29362__auto__))
;
return ((function (switch__29271__auto__,c__29362__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29272__auto__ = null;
var figwheel$client$file_reloading$state_machine__29272__auto____0 = (function (){
var statearr_42464 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42464[(0)] = figwheel$client$file_reloading$state_machine__29272__auto__);

(statearr_42464[(1)] = (1));

return statearr_42464;
});
var figwheel$client$file_reloading$state_machine__29272__auto____1 = (function (state_42440){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_42440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e42465){if((e42465 instanceof Object)){
var ex__29275__auto__ = e42465;
var statearr_42466_42486 = state_42440;
(statearr_42466_42486[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42487 = state_42440;
state_42440 = G__42487;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29272__auto__ = function(state_42440){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29272__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29272__auto____1.call(this,state_42440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29272__auto____0;
figwheel$client$file_reloading$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29272__auto____1;
return figwheel$client$file_reloading$state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto__))
})();
var state__29364__auto__ = (function (){var statearr_42467 = f__29363__auto__.call(null);
(statearr_42467[(6)] = c__29362__auto__);

return statearr_42467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto__))
);

return c__29362__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__42489 = arguments.length;
switch (G__42489) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42491,callback){
var map__42492 = p__42491;
var map__42492__$1 = ((((!((map__42492 == null)))?(((((map__42492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42492):map__42492);
var file_msg = map__42492__$1;
var namespace = cljs.core.get.call(null,map__42492__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42492,map__42492__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42492,map__42492__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__42494){
var map__42495 = p__42494;
var map__42495__$1 = ((((!((map__42495 == null)))?(((((map__42495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42495):map__42495);
var file_msg = map__42495__$1;
var namespace = cljs.core.get.call(null,map__42495__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42497){
var map__42498 = p__42497;
var map__42498__$1 = ((((!((map__42498 == null)))?(((((map__42498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42498):map__42498);
var file_msg = map__42498__$1;
var namespace = cljs.core.get.call(null,map__42498__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42500,callback){
var map__42501 = p__42500;
var map__42501__$1 = ((((!((map__42501 == null)))?(((((map__42501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42501):map__42501);
var file_msg = map__42501__$1;
var request_url = cljs.core.get.call(null,map__42501__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42501__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29362__auto___42551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___42551,out){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___42551,out){
return (function (state_42536){
var state_val_42537 = (state_42536[(1)]);
if((state_val_42537 === (1))){
var inst_42510 = cljs.core.seq.call(null,files);
var inst_42511 = cljs.core.first.call(null,inst_42510);
var inst_42512 = cljs.core.next.call(null,inst_42510);
var inst_42513 = files;
var state_42536__$1 = (function (){var statearr_42538 = state_42536;
(statearr_42538[(7)] = inst_42512);

(statearr_42538[(8)] = inst_42513);

(statearr_42538[(9)] = inst_42511);

return statearr_42538;
})();
var statearr_42539_42552 = state_42536__$1;
(statearr_42539_42552[(2)] = null);

(statearr_42539_42552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (2))){
var inst_42519 = (state_42536[(10)]);
var inst_42513 = (state_42536[(8)]);
var inst_42518 = cljs.core.seq.call(null,inst_42513);
var inst_42519__$1 = cljs.core.first.call(null,inst_42518);
var inst_42520 = cljs.core.next.call(null,inst_42518);
var inst_42521 = (inst_42519__$1 == null);
var inst_42522 = cljs.core.not.call(null,inst_42521);
var state_42536__$1 = (function (){var statearr_42540 = state_42536;
(statearr_42540[(11)] = inst_42520);

(statearr_42540[(10)] = inst_42519__$1);

return statearr_42540;
})();
if(inst_42522){
var statearr_42541_42553 = state_42536__$1;
(statearr_42541_42553[(1)] = (4));

} else {
var statearr_42542_42554 = state_42536__$1;
(statearr_42542_42554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (3))){
var inst_42534 = (state_42536[(2)]);
var state_42536__$1 = state_42536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42536__$1,inst_42534);
} else {
if((state_val_42537 === (4))){
var inst_42519 = (state_42536[(10)]);
var inst_42524 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42519);
var state_42536__$1 = state_42536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42536__$1,(7),inst_42524);
} else {
if((state_val_42537 === (5))){
var inst_42530 = cljs.core.async.close_BANG_.call(null,out);
var state_42536__$1 = state_42536;
var statearr_42543_42555 = state_42536__$1;
(statearr_42543_42555[(2)] = inst_42530);

(statearr_42543_42555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (6))){
var inst_42532 = (state_42536[(2)]);
var state_42536__$1 = state_42536;
var statearr_42544_42556 = state_42536__$1;
(statearr_42544_42556[(2)] = inst_42532);

(statearr_42544_42556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (7))){
var inst_42520 = (state_42536[(11)]);
var inst_42526 = (state_42536[(2)]);
var inst_42527 = cljs.core.async.put_BANG_.call(null,out,inst_42526);
var inst_42513 = inst_42520;
var state_42536__$1 = (function (){var statearr_42545 = state_42536;
(statearr_42545[(12)] = inst_42527);

(statearr_42545[(8)] = inst_42513);

return statearr_42545;
})();
var statearr_42546_42557 = state_42536__$1;
(statearr_42546_42557[(2)] = null);

(statearr_42546_42557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29362__auto___42551,out))
;
return ((function (switch__29271__auto__,c__29362__auto___42551,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29272__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29272__auto____0 = (function (){
var statearr_42547 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42547[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29272__auto__);

(statearr_42547[(1)] = (1));

return statearr_42547;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29272__auto____1 = (function (state_42536){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_42536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e42548){if((e42548 instanceof Object)){
var ex__29275__auto__ = e42548;
var statearr_42549_42558 = state_42536;
(statearr_42549_42558[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42559 = state_42536;
state_42536 = G__42559;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29272__auto__ = function(state_42536){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29272__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29272__auto____1.call(this,state_42536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29272__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29272__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___42551,out))
})();
var state__29364__auto__ = (function (){var statearr_42550 = f__29363__auto__.call(null);
(statearr_42550[(6)] = c__29362__auto___42551);

return statearr_42550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___42551,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42560,opts){
var map__42561 = p__42560;
var map__42561__$1 = ((((!((map__42561 == null)))?(((((map__42561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42561):map__42561);
var eval_body = cljs.core.get.call(null,map__42561__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42561__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e42563){var e = e42563;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__42564_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42564_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__42565){
var vec__42566 = p__42565;
var k = cljs.core.nth.call(null,vec__42566,(0),null);
var v = cljs.core.nth.call(null,vec__42566,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42569){
var vec__42570 = p__42569;
var k = cljs.core.nth.call(null,vec__42570,(0),null);
var v = cljs.core.nth.call(null,vec__42570,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42576,p__42577){
var map__42578 = p__42576;
var map__42578__$1 = ((((!((map__42578 == null)))?(((((map__42578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42578):map__42578);
var opts = map__42578__$1;
var before_jsload = cljs.core.get.call(null,map__42578__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42578__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42578__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42579 = p__42577;
var map__42579__$1 = ((((!((map__42579 == null)))?(((((map__42579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42579):map__42579);
var msg = map__42579__$1;
var files = cljs.core.get.call(null,map__42579__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42579__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42579__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_42733){
var state_val_42734 = (state_42733[(1)]);
if((state_val_42734 === (7))){
var inst_42593 = (state_42733[(7)]);
var inst_42594 = (state_42733[(8)]);
var inst_42596 = (state_42733[(9)]);
var inst_42595 = (state_42733[(10)]);
var inst_42601 = cljs.core._nth.call(null,inst_42594,inst_42596);
var inst_42602 = figwheel.client.file_reloading.eval_body.call(null,inst_42601,opts);
var inst_42603 = (inst_42596 + (1));
var tmp42735 = inst_42593;
var tmp42736 = inst_42594;
var tmp42737 = inst_42595;
var inst_42593__$1 = tmp42735;
var inst_42594__$1 = tmp42736;
var inst_42595__$1 = tmp42737;
var inst_42596__$1 = inst_42603;
var state_42733__$1 = (function (){var statearr_42738 = state_42733;
(statearr_42738[(7)] = inst_42593__$1);

(statearr_42738[(8)] = inst_42594__$1);

(statearr_42738[(9)] = inst_42596__$1);

(statearr_42738[(10)] = inst_42595__$1);

(statearr_42738[(11)] = inst_42602);

return statearr_42738;
})();
var statearr_42739_42822 = state_42733__$1;
(statearr_42739_42822[(2)] = null);

(statearr_42739_42822[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (20))){
var inst_42636 = (state_42733[(12)]);
var inst_42644 = figwheel.client.file_reloading.sort_files.call(null,inst_42636);
var state_42733__$1 = state_42733;
var statearr_42740_42823 = state_42733__$1;
(statearr_42740_42823[(2)] = inst_42644);

(statearr_42740_42823[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (27))){
var state_42733__$1 = state_42733;
var statearr_42741_42824 = state_42733__$1;
(statearr_42741_42824[(2)] = null);

(statearr_42741_42824[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (1))){
var inst_42585 = (state_42733[(13)]);
var inst_42582 = before_jsload.call(null,files);
var inst_42583 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42584 = (function (){return ((function (inst_42585,inst_42582,inst_42583,state_val_42734,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42573_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42573_SHARP_);
});
;})(inst_42585,inst_42582,inst_42583,state_val_42734,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42585__$1 = cljs.core.filter.call(null,inst_42584,files);
var inst_42586 = cljs.core.not_empty.call(null,inst_42585__$1);
var state_42733__$1 = (function (){var statearr_42742 = state_42733;
(statearr_42742[(13)] = inst_42585__$1);

(statearr_42742[(14)] = inst_42583);

(statearr_42742[(15)] = inst_42582);

return statearr_42742;
})();
if(cljs.core.truth_(inst_42586)){
var statearr_42743_42825 = state_42733__$1;
(statearr_42743_42825[(1)] = (2));

} else {
var statearr_42744_42826 = state_42733__$1;
(statearr_42744_42826[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (24))){
var state_42733__$1 = state_42733;
var statearr_42745_42827 = state_42733__$1;
(statearr_42745_42827[(2)] = null);

(statearr_42745_42827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (39))){
var inst_42686 = (state_42733[(16)]);
var state_42733__$1 = state_42733;
var statearr_42746_42828 = state_42733__$1;
(statearr_42746_42828[(2)] = inst_42686);

(statearr_42746_42828[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (46))){
var inst_42728 = (state_42733[(2)]);
var state_42733__$1 = state_42733;
var statearr_42747_42829 = state_42733__$1;
(statearr_42747_42829[(2)] = inst_42728);

(statearr_42747_42829[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (4))){
var inst_42630 = (state_42733[(2)]);
var inst_42631 = cljs.core.List.EMPTY;
var inst_42632 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42631);
var inst_42633 = (function (){return ((function (inst_42630,inst_42631,inst_42632,state_val_42734,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42574_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42574_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42574_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__42574_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_42630,inst_42631,inst_42632,state_val_42734,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42634 = cljs.core.filter.call(null,inst_42633,files);
var inst_42635 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42636 = cljs.core.concat.call(null,inst_42634,inst_42635);
var state_42733__$1 = (function (){var statearr_42748 = state_42733;
(statearr_42748[(12)] = inst_42636);

(statearr_42748[(17)] = inst_42630);

(statearr_42748[(18)] = inst_42632);

return statearr_42748;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_42749_42830 = state_42733__$1;
(statearr_42749_42830[(1)] = (16));

} else {
var statearr_42750_42831 = state_42733__$1;
(statearr_42750_42831[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (15))){
var inst_42620 = (state_42733[(2)]);
var state_42733__$1 = state_42733;
var statearr_42751_42832 = state_42733__$1;
(statearr_42751_42832[(2)] = inst_42620);

(statearr_42751_42832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (21))){
var inst_42646 = (state_42733[(19)]);
var inst_42646__$1 = (state_42733[(2)]);
var inst_42647 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42646__$1);
var state_42733__$1 = (function (){var statearr_42752 = state_42733;
(statearr_42752[(19)] = inst_42646__$1);

return statearr_42752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42733__$1,(22),inst_42647);
} else {
if((state_val_42734 === (31))){
var inst_42731 = (state_42733[(2)]);
var state_42733__$1 = state_42733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42733__$1,inst_42731);
} else {
if((state_val_42734 === (32))){
var inst_42686 = (state_42733[(16)]);
var inst_42691 = inst_42686.cljs$lang$protocol_mask$partition0$;
var inst_42692 = (inst_42691 & (64));
var inst_42693 = inst_42686.cljs$core$ISeq$;
var inst_42694 = (cljs.core.PROTOCOL_SENTINEL === inst_42693);
var inst_42695 = ((inst_42692) || (inst_42694));
var state_42733__$1 = state_42733;
if(cljs.core.truth_(inst_42695)){
var statearr_42753_42833 = state_42733__$1;
(statearr_42753_42833[(1)] = (35));

} else {
var statearr_42754_42834 = state_42733__$1;
(statearr_42754_42834[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (40))){
var inst_42708 = (state_42733[(20)]);
var inst_42707 = (state_42733[(2)]);
var inst_42708__$1 = cljs.core.get.call(null,inst_42707,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42709 = cljs.core.get.call(null,inst_42707,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42710 = cljs.core.not_empty.call(null,inst_42708__$1);
var state_42733__$1 = (function (){var statearr_42755 = state_42733;
(statearr_42755[(21)] = inst_42709);

(statearr_42755[(20)] = inst_42708__$1);

return statearr_42755;
})();
if(cljs.core.truth_(inst_42710)){
var statearr_42756_42835 = state_42733__$1;
(statearr_42756_42835[(1)] = (41));

} else {
var statearr_42757_42836 = state_42733__$1;
(statearr_42757_42836[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (33))){
var state_42733__$1 = state_42733;
var statearr_42758_42837 = state_42733__$1;
(statearr_42758_42837[(2)] = false);

(statearr_42758_42837[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (13))){
var inst_42606 = (state_42733[(22)]);
var inst_42610 = cljs.core.chunk_first.call(null,inst_42606);
var inst_42611 = cljs.core.chunk_rest.call(null,inst_42606);
var inst_42612 = cljs.core.count.call(null,inst_42610);
var inst_42593 = inst_42611;
var inst_42594 = inst_42610;
var inst_42595 = inst_42612;
var inst_42596 = (0);
var state_42733__$1 = (function (){var statearr_42759 = state_42733;
(statearr_42759[(7)] = inst_42593);

(statearr_42759[(8)] = inst_42594);

(statearr_42759[(9)] = inst_42596);

(statearr_42759[(10)] = inst_42595);

return statearr_42759;
})();
var statearr_42760_42838 = state_42733__$1;
(statearr_42760_42838[(2)] = null);

(statearr_42760_42838[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (22))){
var inst_42654 = (state_42733[(23)]);
var inst_42650 = (state_42733[(24)]);
var inst_42646 = (state_42733[(19)]);
var inst_42649 = (state_42733[(25)]);
var inst_42649__$1 = (state_42733[(2)]);
var inst_42650__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42649__$1);
var inst_42651 = (function (){var all_files = inst_42646;
var res_SINGLEQUOTE_ = inst_42649__$1;
var res = inst_42650__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42654,inst_42650,inst_42646,inst_42649,inst_42649__$1,inst_42650__$1,state_val_42734,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42575_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42575_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42654,inst_42650,inst_42646,inst_42649,inst_42649__$1,inst_42650__$1,state_val_42734,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42652 = cljs.core.filter.call(null,inst_42651,inst_42649__$1);
var inst_42653 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42654__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42653);
var inst_42655 = cljs.core.not_empty.call(null,inst_42654__$1);
var state_42733__$1 = (function (){var statearr_42761 = state_42733;
(statearr_42761[(26)] = inst_42652);

(statearr_42761[(23)] = inst_42654__$1);

(statearr_42761[(24)] = inst_42650__$1);

(statearr_42761[(25)] = inst_42649__$1);

return statearr_42761;
})();
if(cljs.core.truth_(inst_42655)){
var statearr_42762_42839 = state_42733__$1;
(statearr_42762_42839[(1)] = (23));

} else {
var statearr_42763_42840 = state_42733__$1;
(statearr_42763_42840[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (36))){
var state_42733__$1 = state_42733;
var statearr_42764_42841 = state_42733__$1;
(statearr_42764_42841[(2)] = false);

(statearr_42764_42841[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (41))){
var inst_42708 = (state_42733[(20)]);
var inst_42712 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_42713 = cljs.core.map.call(null,inst_42712,inst_42708);
var inst_42714 = cljs.core.pr_str.call(null,inst_42713);
var inst_42715 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42714)].join('');
var inst_42716 = figwheel.client.utils.log.call(null,inst_42715);
var state_42733__$1 = state_42733;
var statearr_42765_42842 = state_42733__$1;
(statearr_42765_42842[(2)] = inst_42716);

(statearr_42765_42842[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (43))){
var inst_42709 = (state_42733[(21)]);
var inst_42719 = (state_42733[(2)]);
var inst_42720 = cljs.core.not_empty.call(null,inst_42709);
var state_42733__$1 = (function (){var statearr_42766 = state_42733;
(statearr_42766[(27)] = inst_42719);

return statearr_42766;
})();
if(cljs.core.truth_(inst_42720)){
var statearr_42767_42843 = state_42733__$1;
(statearr_42767_42843[(1)] = (44));

} else {
var statearr_42768_42844 = state_42733__$1;
(statearr_42768_42844[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (29))){
var inst_42652 = (state_42733[(26)]);
var inst_42686 = (state_42733[(16)]);
var inst_42654 = (state_42733[(23)]);
var inst_42650 = (state_42733[(24)]);
var inst_42646 = (state_42733[(19)]);
var inst_42649 = (state_42733[(25)]);
var inst_42682 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42685 = (function (){var all_files = inst_42646;
var res_SINGLEQUOTE_ = inst_42649;
var res = inst_42650;
var files_not_loaded = inst_42652;
var dependencies_that_loaded = inst_42654;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42652,inst_42686,inst_42654,inst_42650,inst_42646,inst_42649,inst_42682,state_val_42734,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42684){
var map__42769 = p__42684;
var map__42769__$1 = ((((!((map__42769 == null)))?(((((map__42769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42769):map__42769);
var namespace = cljs.core.get.call(null,map__42769__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42652,inst_42686,inst_42654,inst_42650,inst_42646,inst_42649,inst_42682,state_val_42734,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42686__$1 = cljs.core.group_by.call(null,inst_42685,inst_42652);
var inst_42688 = (inst_42686__$1 == null);
var inst_42689 = cljs.core.not.call(null,inst_42688);
var state_42733__$1 = (function (){var statearr_42771 = state_42733;
(statearr_42771[(16)] = inst_42686__$1);

(statearr_42771[(28)] = inst_42682);

return statearr_42771;
})();
if(inst_42689){
var statearr_42772_42845 = state_42733__$1;
(statearr_42772_42845[(1)] = (32));

} else {
var statearr_42773_42846 = state_42733__$1;
(statearr_42773_42846[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (44))){
var inst_42709 = (state_42733[(21)]);
var inst_42722 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42709);
var inst_42723 = cljs.core.pr_str.call(null,inst_42722);
var inst_42724 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42723)].join('');
var inst_42725 = figwheel.client.utils.log.call(null,inst_42724);
var state_42733__$1 = state_42733;
var statearr_42774_42847 = state_42733__$1;
(statearr_42774_42847[(2)] = inst_42725);

(statearr_42774_42847[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (6))){
var inst_42627 = (state_42733[(2)]);
var state_42733__$1 = state_42733;
var statearr_42775_42848 = state_42733__$1;
(statearr_42775_42848[(2)] = inst_42627);

(statearr_42775_42848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (28))){
var inst_42652 = (state_42733[(26)]);
var inst_42679 = (state_42733[(2)]);
var inst_42680 = cljs.core.not_empty.call(null,inst_42652);
var state_42733__$1 = (function (){var statearr_42776 = state_42733;
(statearr_42776[(29)] = inst_42679);

return statearr_42776;
})();
if(cljs.core.truth_(inst_42680)){
var statearr_42777_42849 = state_42733__$1;
(statearr_42777_42849[(1)] = (29));

} else {
var statearr_42778_42850 = state_42733__$1;
(statearr_42778_42850[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (25))){
var inst_42650 = (state_42733[(24)]);
var inst_42666 = (state_42733[(2)]);
var inst_42667 = cljs.core.not_empty.call(null,inst_42650);
var state_42733__$1 = (function (){var statearr_42779 = state_42733;
(statearr_42779[(30)] = inst_42666);

return statearr_42779;
})();
if(cljs.core.truth_(inst_42667)){
var statearr_42780_42851 = state_42733__$1;
(statearr_42780_42851[(1)] = (26));

} else {
var statearr_42781_42852 = state_42733__$1;
(statearr_42781_42852[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (34))){
var inst_42702 = (state_42733[(2)]);
var state_42733__$1 = state_42733;
if(cljs.core.truth_(inst_42702)){
var statearr_42782_42853 = state_42733__$1;
(statearr_42782_42853[(1)] = (38));

} else {
var statearr_42783_42854 = state_42733__$1;
(statearr_42783_42854[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (17))){
var state_42733__$1 = state_42733;
var statearr_42784_42855 = state_42733__$1;
(statearr_42784_42855[(2)] = recompile_dependents);

(statearr_42784_42855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (3))){
var state_42733__$1 = state_42733;
var statearr_42785_42856 = state_42733__$1;
(statearr_42785_42856[(2)] = null);

(statearr_42785_42856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (12))){
var inst_42623 = (state_42733[(2)]);
var state_42733__$1 = state_42733;
var statearr_42786_42857 = state_42733__$1;
(statearr_42786_42857[(2)] = inst_42623);

(statearr_42786_42857[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (2))){
var inst_42585 = (state_42733[(13)]);
var inst_42592 = cljs.core.seq.call(null,inst_42585);
var inst_42593 = inst_42592;
var inst_42594 = null;
var inst_42595 = (0);
var inst_42596 = (0);
var state_42733__$1 = (function (){var statearr_42787 = state_42733;
(statearr_42787[(7)] = inst_42593);

(statearr_42787[(8)] = inst_42594);

(statearr_42787[(9)] = inst_42596);

(statearr_42787[(10)] = inst_42595);

return statearr_42787;
})();
var statearr_42788_42858 = state_42733__$1;
(statearr_42788_42858[(2)] = null);

(statearr_42788_42858[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (23))){
var inst_42652 = (state_42733[(26)]);
var inst_42654 = (state_42733[(23)]);
var inst_42650 = (state_42733[(24)]);
var inst_42646 = (state_42733[(19)]);
var inst_42649 = (state_42733[(25)]);
var inst_42657 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42659 = (function (){var all_files = inst_42646;
var res_SINGLEQUOTE_ = inst_42649;
var res = inst_42650;
var files_not_loaded = inst_42652;
var dependencies_that_loaded = inst_42654;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42652,inst_42654,inst_42650,inst_42646,inst_42649,inst_42657,state_val_42734,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42658){
var map__42789 = p__42658;
var map__42789__$1 = ((((!((map__42789 == null)))?(((((map__42789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42789):map__42789);
var request_url = cljs.core.get.call(null,map__42789__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42652,inst_42654,inst_42650,inst_42646,inst_42649,inst_42657,state_val_42734,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42660 = cljs.core.reverse.call(null,inst_42654);
var inst_42661 = cljs.core.map.call(null,inst_42659,inst_42660);
var inst_42662 = cljs.core.pr_str.call(null,inst_42661);
var inst_42663 = figwheel.client.utils.log.call(null,inst_42662);
var state_42733__$1 = (function (){var statearr_42791 = state_42733;
(statearr_42791[(31)] = inst_42657);

return statearr_42791;
})();
var statearr_42792_42859 = state_42733__$1;
(statearr_42792_42859[(2)] = inst_42663);

(statearr_42792_42859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (35))){
var state_42733__$1 = state_42733;
var statearr_42793_42860 = state_42733__$1;
(statearr_42793_42860[(2)] = true);

(statearr_42793_42860[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (19))){
var inst_42636 = (state_42733[(12)]);
var inst_42642 = figwheel.client.file_reloading.expand_files.call(null,inst_42636);
var state_42733__$1 = state_42733;
var statearr_42794_42861 = state_42733__$1;
(statearr_42794_42861[(2)] = inst_42642);

(statearr_42794_42861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (11))){
var state_42733__$1 = state_42733;
var statearr_42795_42862 = state_42733__$1;
(statearr_42795_42862[(2)] = null);

(statearr_42795_42862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (9))){
var inst_42625 = (state_42733[(2)]);
var state_42733__$1 = state_42733;
var statearr_42796_42863 = state_42733__$1;
(statearr_42796_42863[(2)] = inst_42625);

(statearr_42796_42863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (5))){
var inst_42596 = (state_42733[(9)]);
var inst_42595 = (state_42733[(10)]);
var inst_42598 = (inst_42596 < inst_42595);
var inst_42599 = inst_42598;
var state_42733__$1 = state_42733;
if(cljs.core.truth_(inst_42599)){
var statearr_42797_42864 = state_42733__$1;
(statearr_42797_42864[(1)] = (7));

} else {
var statearr_42798_42865 = state_42733__$1;
(statearr_42798_42865[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (14))){
var inst_42606 = (state_42733[(22)]);
var inst_42615 = cljs.core.first.call(null,inst_42606);
var inst_42616 = figwheel.client.file_reloading.eval_body.call(null,inst_42615,opts);
var inst_42617 = cljs.core.next.call(null,inst_42606);
var inst_42593 = inst_42617;
var inst_42594 = null;
var inst_42595 = (0);
var inst_42596 = (0);
var state_42733__$1 = (function (){var statearr_42799 = state_42733;
(statearr_42799[(7)] = inst_42593);

(statearr_42799[(8)] = inst_42594);

(statearr_42799[(9)] = inst_42596);

(statearr_42799[(32)] = inst_42616);

(statearr_42799[(10)] = inst_42595);

return statearr_42799;
})();
var statearr_42800_42866 = state_42733__$1;
(statearr_42800_42866[(2)] = null);

(statearr_42800_42866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (45))){
var state_42733__$1 = state_42733;
var statearr_42801_42867 = state_42733__$1;
(statearr_42801_42867[(2)] = null);

(statearr_42801_42867[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (26))){
var inst_42652 = (state_42733[(26)]);
var inst_42654 = (state_42733[(23)]);
var inst_42650 = (state_42733[(24)]);
var inst_42646 = (state_42733[(19)]);
var inst_42649 = (state_42733[(25)]);
var inst_42669 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42671 = (function (){var all_files = inst_42646;
var res_SINGLEQUOTE_ = inst_42649;
var res = inst_42650;
var files_not_loaded = inst_42652;
var dependencies_that_loaded = inst_42654;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42652,inst_42654,inst_42650,inst_42646,inst_42649,inst_42669,state_val_42734,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42670){
var map__42802 = p__42670;
var map__42802__$1 = ((((!((map__42802 == null)))?(((((map__42802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42802):map__42802);
var namespace = cljs.core.get.call(null,map__42802__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42802__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42652,inst_42654,inst_42650,inst_42646,inst_42649,inst_42669,state_val_42734,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42672 = cljs.core.map.call(null,inst_42671,inst_42650);
var inst_42673 = cljs.core.pr_str.call(null,inst_42672);
var inst_42674 = figwheel.client.utils.log.call(null,inst_42673);
var inst_42675 = (function (){var all_files = inst_42646;
var res_SINGLEQUOTE_ = inst_42649;
var res = inst_42650;
var files_not_loaded = inst_42652;
var dependencies_that_loaded = inst_42654;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42652,inst_42654,inst_42650,inst_42646,inst_42649,inst_42669,inst_42671,inst_42672,inst_42673,inst_42674,state_val_42734,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42652,inst_42654,inst_42650,inst_42646,inst_42649,inst_42669,inst_42671,inst_42672,inst_42673,inst_42674,state_val_42734,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42676 = setTimeout(inst_42675,(10));
var state_42733__$1 = (function (){var statearr_42804 = state_42733;
(statearr_42804[(33)] = inst_42674);

(statearr_42804[(34)] = inst_42669);

return statearr_42804;
})();
var statearr_42805_42868 = state_42733__$1;
(statearr_42805_42868[(2)] = inst_42676);

(statearr_42805_42868[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (16))){
var state_42733__$1 = state_42733;
var statearr_42806_42869 = state_42733__$1;
(statearr_42806_42869[(2)] = reload_dependents);

(statearr_42806_42869[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (38))){
var inst_42686 = (state_42733[(16)]);
var inst_42704 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42686);
var state_42733__$1 = state_42733;
var statearr_42807_42870 = state_42733__$1;
(statearr_42807_42870[(2)] = inst_42704);

(statearr_42807_42870[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (30))){
var state_42733__$1 = state_42733;
var statearr_42808_42871 = state_42733__$1;
(statearr_42808_42871[(2)] = null);

(statearr_42808_42871[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (10))){
var inst_42606 = (state_42733[(22)]);
var inst_42608 = cljs.core.chunked_seq_QMARK_.call(null,inst_42606);
var state_42733__$1 = state_42733;
if(inst_42608){
var statearr_42809_42872 = state_42733__$1;
(statearr_42809_42872[(1)] = (13));

} else {
var statearr_42810_42873 = state_42733__$1;
(statearr_42810_42873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (18))){
var inst_42640 = (state_42733[(2)]);
var state_42733__$1 = state_42733;
if(cljs.core.truth_(inst_42640)){
var statearr_42811_42874 = state_42733__$1;
(statearr_42811_42874[(1)] = (19));

} else {
var statearr_42812_42875 = state_42733__$1;
(statearr_42812_42875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (42))){
var state_42733__$1 = state_42733;
var statearr_42813_42876 = state_42733__$1;
(statearr_42813_42876[(2)] = null);

(statearr_42813_42876[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (37))){
var inst_42699 = (state_42733[(2)]);
var state_42733__$1 = state_42733;
var statearr_42814_42877 = state_42733__$1;
(statearr_42814_42877[(2)] = inst_42699);

(statearr_42814_42877[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42734 === (8))){
var inst_42593 = (state_42733[(7)]);
var inst_42606 = (state_42733[(22)]);
var inst_42606__$1 = cljs.core.seq.call(null,inst_42593);
var state_42733__$1 = (function (){var statearr_42815 = state_42733;
(statearr_42815[(22)] = inst_42606__$1);

return statearr_42815;
})();
if(inst_42606__$1){
var statearr_42816_42878 = state_42733__$1;
(statearr_42816_42878[(1)] = (10));

} else {
var statearr_42817_42879 = state_42733__$1;
(statearr_42817_42879[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29271__auto__,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29272__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29272__auto____0 = (function (){
var statearr_42818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42818[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29272__auto__);

(statearr_42818[(1)] = (1));

return statearr_42818;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29272__auto____1 = (function (state_42733){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_42733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e42819){if((e42819 instanceof Object)){
var ex__29275__auto__ = e42819;
var statearr_42820_42880 = state_42733;
(statearr_42820_42880[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42881 = state_42733;
state_42733 = G__42881;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29272__auto__ = function(state_42733){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29272__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29272__auto____1.call(this,state_42733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29272__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29272__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29364__auto__ = (function (){var statearr_42821 = f__29363__auto__.call(null);
(statearr_42821[(6)] = c__29362__auto__);

return statearr_42821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto__,map__42578,map__42578__$1,opts,before_jsload,on_jsload,reload_dependents,map__42579,map__42579__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29362__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42884,link){
var map__42885 = p__42884;
var map__42885__$1 = ((((!((map__42885 == null)))?(((((map__42885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42885):map__42885);
var file = cljs.core.get.call(null,map__42885__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__42885,map__42885__$1,file){
return (function (p1__42882_SHARP_,p2__42883_SHARP_){
if(cljs.core._EQ_.call(null,p1__42882_SHARP_,p2__42883_SHARP_)){
return p1__42882_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__42885,map__42885__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42888){
var map__42889 = p__42888;
var map__42889__$1 = ((((!((map__42889 == null)))?(((((map__42889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42889):map__42889);
var match_length = cljs.core.get.call(null,map__42889__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42889__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42887_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42887_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42891_SHARP_,p2__42892_SHARP_){
return cljs.core.assoc.call(null,p1__42891_SHARP_,cljs.core.get.call(null,p2__42892_SHARP_,key),p2__42892_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_42893 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_42893);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_42893);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42894,p__42895){
var map__42896 = p__42894;
var map__42896__$1 = ((((!((map__42896 == null)))?(((((map__42896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42896):map__42896);
var on_cssload = cljs.core.get.call(null,map__42896__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__42897 = p__42895;
var map__42897__$1 = ((((!((map__42897 == null)))?(((((map__42897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42897):map__42897);
var files_msg = map__42897__$1;
var files = cljs.core.get.call(null,map__42897__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1539627777273
