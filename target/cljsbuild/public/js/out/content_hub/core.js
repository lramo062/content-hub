// Compiled by ClojureScript 1.10.339 {}
goog.provide('content_hub.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('accountant.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
content_hub.core.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof content_hub !== 'undefined') && (typeof content_hub.core !== 'undefined') && (typeof content_hub.core.get_json !== 'undefined')){
} else {
content_hub.core.get_json = (function (){var c__34465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34465__auto__){
return (function (){
var f__34466__auto__ = (function (){var switch__34442__auto__ = ((function (c__34465__auto__){
return (function (state_35982){
var state_val_35983 = (state_35982[(1)]);
if((state_val_35983 === (1))){
var inst_35970 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_35971 = ["since"];
var inst_35972 = [(135)];
var inst_35973 = cljs.core.PersistentHashMap.fromArrays(inst_35971,inst_35972);
var inst_35974 = [false,inst_35973];
var inst_35975 = cljs.core.PersistentHashMap.fromArrays(inst_35970,inst_35974);
var inst_35976 = cljs_http.client.get.call(null,"https://jsonplaceholder.typicode.com/todos/1",inst_35975);
var state_35982__$1 = state_35982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35982__$1,(2),inst_35976);
} else {
if((state_val_35983 === (2))){
var inst_35978 = (state_35982[(2)]);
var inst_35979 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_35978);
var inst_35980 = cljs.core.reset_BANG_.call(null,content_hub.core.app_state,inst_35979);
var state_35982__$1 = state_35982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35982__$1,inst_35980);
} else {
return null;
}
}
});})(c__34465__auto__))
;
return ((function (switch__34442__auto__,c__34465__auto__){
return (function() {
var content_hub$core$state_machine__34443__auto__ = null;
var content_hub$core$state_machine__34443__auto____0 = (function (){
var statearr_35984 = [null,null,null,null,null,null,null];
(statearr_35984[(0)] = content_hub$core$state_machine__34443__auto__);

(statearr_35984[(1)] = (1));

return statearr_35984;
});
var content_hub$core$state_machine__34443__auto____1 = (function (state_35982){
while(true){
var ret_value__34444__auto__ = (function (){try{while(true){
var result__34445__auto__ = switch__34442__auto__.call(null,state_35982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34445__auto__;
}
break;
}
}catch (e35985){if((e35985 instanceof Object)){
var ex__34446__auto__ = e35985;
var statearr_35986_35988 = state_35982;
(statearr_35986_35988[(5)] = ex__34446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35989 = state_35982;
state_35982 = G__35989;
continue;
} else {
return ret_value__34444__auto__;
}
break;
}
});
content_hub$core$state_machine__34443__auto__ = function(state_35982){
switch(arguments.length){
case 0:
return content_hub$core$state_machine__34443__auto____0.call(this);
case 1:
return content_hub$core$state_machine__34443__auto____1.call(this,state_35982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
content_hub$core$state_machine__34443__auto__.cljs$core$IFn$_invoke$arity$0 = content_hub$core$state_machine__34443__auto____0;
content_hub$core$state_machine__34443__auto__.cljs$core$IFn$_invoke$arity$1 = content_hub$core$state_machine__34443__auto____1;
return content_hub$core$state_machine__34443__auto__;
})()
;})(switch__34442__auto__,c__34465__auto__))
})();
var state__34467__auto__ = (function (){var statearr_35987 = f__34466__auto__.call(null);
(statearr_35987[(6)] = c__34465__auto__);

return statearr_35987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34467__auto__);
});})(c__34465__auto__))
);

return c__34465__auto__;
})();
}
content_hub.core.home_page = (function content_hub$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to content-hub"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/about"], null),"go to about page"], null)], null)], null);
});
content_hub.core.about_page = (function content_hub$core$about_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About content-hub"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"go to the home page"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,content_hub.core.app_state))].join('')], null)], null);
});
if((typeof content_hub !== 'undefined') && (typeof content_hub.core !== 'undefined') && (typeof content_hub.core.page !== 'undefined')){
} else {
content_hub.core.page = reagent.core.atom.call(null,new cljs.core.Var(function(){return content_hub.core.home_page;},new cljs.core.Symbol("content-hub.core","home-page","content-hub.core/home-page",752377781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"content-hub.core","content-hub.core",-1331893072,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/lesterr/Desktop/content-hub/src/cljs/content_hub/core.cljs",16,1,25,25,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(content_hub.core.home_page)?content_hub.core.home_page.cljs$lang$test:null)])));
}
content_hub.core.current_page = (function content_hub$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,content_hub.core.page)], null)], null);
});
var action__33153__auto___35995 = (function (params__33154__auto__){
if(cljs.core.map_QMARK_.call(null,params__33154__auto__)){
var map__35990 = params__33154__auto__;
var map__35990__$1 = ((((!((map__35990 == null)))?(((((map__35990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35990):map__35990);
return cljs.core.reset_BANG_.call(null,content_hub.core.page,new cljs.core.Var(function(){return content_hub.core.home_page;},new cljs.core.Symbol("content-hub.core","home-page","content-hub.core/home-page",752377781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"content-hub.core","content-hub.core",-1331893072,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/lesterr/Desktop/content-hub/src/cljs/content_hub/core.cljs",16,1,25,25,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(content_hub.core.home_page)?content_hub.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33154__auto__)){
var vec__35992 = params__33154__auto__;
return cljs.core.reset_BANG_.call(null,content_hub.core.page,new cljs.core.Var(function(){return content_hub.core.home_page;},new cljs.core.Symbol("content-hub.core","home-page","content-hub.core/home-page",752377781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"content-hub.core","content-hub.core",-1331893072,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/lesterr/Desktop/content-hub/src/cljs/content_hub/core.cljs",16,1,25,25,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(content_hub.core.home_page)?content_hub.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__33153__auto___35995);

var action__33153__auto___36001 = (function (params__33154__auto__){
if(cljs.core.map_QMARK_.call(null,params__33154__auto__)){
var map__35996 = params__33154__auto__;
var map__35996__$1 = ((((!((map__35996 == null)))?(((((map__35996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35996):map__35996);
return cljs.core.reset_BANG_.call(null,content_hub.core.page,new cljs.core.Var(function(){return content_hub.core.about_page;},new cljs.core.Symbol("content-hub.core","about-page","content-hub.core/about-page",1101870309,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"content-hub.core","content-hub.core",-1331893072,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/lesterr/Desktop/content-hub/src/cljs/content_hub/core.cljs",17,1,31,31,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(content_hub.core.about_page)?content_hub.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33154__auto__)){
var vec__35998 = params__33154__auto__;
return cljs.core.reset_BANG_.call(null,content_hub.core.page,new cljs.core.Var(function(){return content_hub.core.about_page;},new cljs.core.Symbol("content-hub.core","about-page","content-hub.core/about-page",1101870309,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"content-hub.core","content-hub.core",-1331893072,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/lesterr/Desktop/content-hub/src/cljs/content_hub/core.cljs",17,1,31,31,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(content_hub.core.about_page)?content_hub.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__33153__auto___36001);

content_hub.core.mount_root = (function content_hub$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_hub.core.current_page], null),document.getElementById("app"));
});
content_hub.core.init_BANG_ = (function content_hub$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return content_hub.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1539629321217
