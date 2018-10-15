// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e43094){if((e43094 instanceof Error)){
var e = e43094;
return "Error: Unable to stringify";
} else {
throw e43094;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__43097 = arguments.length;
switch (G__43097) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__43095_SHARP_){
if(typeof p1__43095_SHARP_ === 'string'){
return p1__43095_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__43095_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___43100 = arguments.length;
var i__4532__auto___43101 = (0);
while(true){
if((i__4532__auto___43101 < len__4531__auto___43100)){
args__4534__auto__.push((arguments[i__4532__auto___43101]));

var G__43102 = (i__4532__auto___43101 + (1));
i__4532__auto___43101 = G__43102;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43099){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43099));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___43104 = arguments.length;
var i__4532__auto___43105 = (0);
while(true){
if((i__4532__auto___43105 < len__4531__auto___43104)){
args__4534__auto__.push((arguments[i__4532__auto___43105]));

var G__43106 = (i__4532__auto___43105 + (1));
i__4532__auto___43105 = G__43106;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43103){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43103));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43107){
var map__43108 = p__43107;
var map__43108__$1 = ((((!((map__43108 == null)))?(((((map__43108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43108):map__43108);
var message = cljs.core.get.call(null,map__43108__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43108__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29362__auto___43187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___43187,ch){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___43187,ch){
return (function (state_43159){
var state_val_43160 = (state_43159[(1)]);
if((state_val_43160 === (7))){
var inst_43155 = (state_43159[(2)]);
var state_43159__$1 = state_43159;
var statearr_43161_43188 = state_43159__$1;
(statearr_43161_43188[(2)] = inst_43155);

(statearr_43161_43188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (1))){
var state_43159__$1 = state_43159;
var statearr_43162_43189 = state_43159__$1;
(statearr_43162_43189[(2)] = null);

(statearr_43162_43189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (4))){
var inst_43112 = (state_43159[(7)]);
var inst_43112__$1 = (state_43159[(2)]);
var state_43159__$1 = (function (){var statearr_43163 = state_43159;
(statearr_43163[(7)] = inst_43112__$1);

return statearr_43163;
})();
if(cljs.core.truth_(inst_43112__$1)){
var statearr_43164_43190 = state_43159__$1;
(statearr_43164_43190[(1)] = (5));

} else {
var statearr_43165_43191 = state_43159__$1;
(statearr_43165_43191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (15))){
var inst_43119 = (state_43159[(8)]);
var inst_43134 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43119);
var inst_43135 = cljs.core.first.call(null,inst_43134);
var inst_43136 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43135);
var inst_43137 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43136)].join('');
var inst_43138 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43137);
var state_43159__$1 = state_43159;
var statearr_43166_43192 = state_43159__$1;
(statearr_43166_43192[(2)] = inst_43138);

(statearr_43166_43192[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (13))){
var inst_43143 = (state_43159[(2)]);
var state_43159__$1 = state_43159;
var statearr_43167_43193 = state_43159__$1;
(statearr_43167_43193[(2)] = inst_43143);

(statearr_43167_43193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (6))){
var state_43159__$1 = state_43159;
var statearr_43168_43194 = state_43159__$1;
(statearr_43168_43194[(2)] = null);

(statearr_43168_43194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (17))){
var inst_43141 = (state_43159[(2)]);
var state_43159__$1 = state_43159;
var statearr_43169_43195 = state_43159__$1;
(statearr_43169_43195[(2)] = inst_43141);

(statearr_43169_43195[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (3))){
var inst_43157 = (state_43159[(2)]);
var state_43159__$1 = state_43159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43159__$1,inst_43157);
} else {
if((state_val_43160 === (12))){
var inst_43118 = (state_43159[(9)]);
var inst_43132 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43118,opts);
var state_43159__$1 = state_43159;
if(cljs.core.truth_(inst_43132)){
var statearr_43170_43196 = state_43159__$1;
(statearr_43170_43196[(1)] = (15));

} else {
var statearr_43171_43197 = state_43159__$1;
(statearr_43171_43197[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (2))){
var state_43159__$1 = state_43159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43159__$1,(4),ch);
} else {
if((state_val_43160 === (11))){
var inst_43119 = (state_43159[(8)]);
var inst_43124 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43125 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43119);
var inst_43126 = cljs.core.async.timeout.call(null,(1000));
var inst_43127 = [inst_43125,inst_43126];
var inst_43128 = (new cljs.core.PersistentVector(null,2,(5),inst_43124,inst_43127,null));
var state_43159__$1 = state_43159;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43159__$1,(14),inst_43128);
} else {
if((state_val_43160 === (9))){
var inst_43119 = (state_43159[(8)]);
var inst_43145 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43146 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43119);
var inst_43147 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43146);
var inst_43148 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43147)].join('');
var inst_43149 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43148);
var state_43159__$1 = (function (){var statearr_43172 = state_43159;
(statearr_43172[(10)] = inst_43145);

return statearr_43172;
})();
var statearr_43173_43198 = state_43159__$1;
(statearr_43173_43198[(2)] = inst_43149);

(statearr_43173_43198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (5))){
var inst_43112 = (state_43159[(7)]);
var inst_43114 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43115 = (new cljs.core.PersistentArrayMap(null,2,inst_43114,null));
var inst_43116 = (new cljs.core.PersistentHashSet(null,inst_43115,null));
var inst_43117 = figwheel.client.focus_msgs.call(null,inst_43116,inst_43112);
var inst_43118 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43117);
var inst_43119 = cljs.core.first.call(null,inst_43117);
var inst_43120 = figwheel.client.autoload_QMARK_.call(null);
var state_43159__$1 = (function (){var statearr_43174 = state_43159;
(statearr_43174[(9)] = inst_43118);

(statearr_43174[(8)] = inst_43119);

return statearr_43174;
})();
if(cljs.core.truth_(inst_43120)){
var statearr_43175_43199 = state_43159__$1;
(statearr_43175_43199[(1)] = (8));

} else {
var statearr_43176_43200 = state_43159__$1;
(statearr_43176_43200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (14))){
var inst_43130 = (state_43159[(2)]);
var state_43159__$1 = state_43159;
var statearr_43177_43201 = state_43159__$1;
(statearr_43177_43201[(2)] = inst_43130);

(statearr_43177_43201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (16))){
var state_43159__$1 = state_43159;
var statearr_43178_43202 = state_43159__$1;
(statearr_43178_43202[(2)] = null);

(statearr_43178_43202[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (10))){
var inst_43151 = (state_43159[(2)]);
var state_43159__$1 = (function (){var statearr_43179 = state_43159;
(statearr_43179[(11)] = inst_43151);

return statearr_43179;
})();
var statearr_43180_43203 = state_43159__$1;
(statearr_43180_43203[(2)] = null);

(statearr_43180_43203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (8))){
var inst_43118 = (state_43159[(9)]);
var inst_43122 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43118,opts);
var state_43159__$1 = state_43159;
if(cljs.core.truth_(inst_43122)){
var statearr_43181_43204 = state_43159__$1;
(statearr_43181_43204[(1)] = (11));

} else {
var statearr_43182_43205 = state_43159__$1;
(statearr_43182_43205[(1)] = (12));

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
});})(c__29362__auto___43187,ch))
;
return ((function (switch__29271__auto__,c__29362__auto___43187,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29272__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29272__auto____0 = (function (){
var statearr_43183 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43183[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29272__auto__);

(statearr_43183[(1)] = (1));

return statearr_43183;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29272__auto____1 = (function (state_43159){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_43159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e43184){if((e43184 instanceof Object)){
var ex__29275__auto__ = e43184;
var statearr_43185_43206 = state_43159;
(statearr_43185_43206[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43207 = state_43159;
state_43159 = G__43207;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29272__auto__ = function(state_43159){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29272__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29272__auto____1.call(this,state_43159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29272__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29272__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___43187,ch))
})();
var state__29364__auto__ = (function (){var statearr_43186 = f__29363__auto__.call(null);
(statearr_43186[(6)] = c__29362__auto___43187);

return statearr_43186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___43187,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43208_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43208_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_43212 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43212){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_43210 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_43211 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_43210,_STAR_print_fn_STAR_43211,sb,base_path_43212){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_43210,_STAR_print_fn_STAR_43211,sb,base_path_43212))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43211;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43210;
}}catch (e43209){if((e43209 instanceof Error)){
var e = e43209;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43212], null));
} else {
var e = e43209;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_43212))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43213){
var map__43214 = p__43213;
var map__43214__$1 = ((((!((map__43214 == null)))?(((((map__43214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43214):map__43214);
var opts = map__43214__$1;
var build_id = cljs.core.get.call(null,map__43214__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43214,map__43214__$1,opts,build_id){
return (function (p__43216){
var vec__43217 = p__43216;
var seq__43218 = cljs.core.seq.call(null,vec__43217);
var first__43219 = cljs.core.first.call(null,seq__43218);
var seq__43218__$1 = cljs.core.next.call(null,seq__43218);
var map__43220 = first__43219;
var map__43220__$1 = ((((!((map__43220 == null)))?(((((map__43220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43220):map__43220);
var msg = map__43220__$1;
var msg_name = cljs.core.get.call(null,map__43220__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43218__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__43217,seq__43218,first__43219,seq__43218__$1,map__43220,map__43220__$1,msg,msg_name,_,map__43214,map__43214__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43217,seq__43218,first__43219,seq__43218__$1,map__43220,map__43220__$1,msg,msg_name,_,map__43214,map__43214__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43214,map__43214__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43222){
var vec__43223 = p__43222;
var seq__43224 = cljs.core.seq.call(null,vec__43223);
var first__43225 = cljs.core.first.call(null,seq__43224);
var seq__43224__$1 = cljs.core.next.call(null,seq__43224);
var map__43226 = first__43225;
var map__43226__$1 = ((((!((map__43226 == null)))?(((((map__43226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43226):map__43226);
var msg = map__43226__$1;
var msg_name = cljs.core.get.call(null,map__43226__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43224__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43228){
var map__43229 = p__43228;
var map__43229__$1 = ((((!((map__43229 == null)))?(((((map__43229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43229):map__43229);
var on_compile_warning = cljs.core.get.call(null,map__43229__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43229__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43229,map__43229__$1,on_compile_warning,on_compile_fail){
return (function (p__43231){
var vec__43232 = p__43231;
var seq__43233 = cljs.core.seq.call(null,vec__43232);
var first__43234 = cljs.core.first.call(null,seq__43233);
var seq__43233__$1 = cljs.core.next.call(null,seq__43233);
var map__43235 = first__43234;
var map__43235__$1 = ((((!((map__43235 == null)))?(((((map__43235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43235):map__43235);
var msg = map__43235__$1;
var msg_name = cljs.core.get.call(null,map__43235__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43233__$1;
var pred__43237 = cljs.core._EQ_;
var expr__43238 = msg_name;
if(cljs.core.truth_(pred__43237.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43238))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43237.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43238))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43229,map__43229__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto__,msg_hist,msg_names,msg){
return (function (state_43327){
var state_val_43328 = (state_43327[(1)]);
if((state_val_43328 === (7))){
var inst_43247 = (state_43327[(2)]);
var state_43327__$1 = state_43327;
if(cljs.core.truth_(inst_43247)){
var statearr_43329_43376 = state_43327__$1;
(statearr_43329_43376[(1)] = (8));

} else {
var statearr_43330_43377 = state_43327__$1;
(statearr_43330_43377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (20))){
var inst_43321 = (state_43327[(2)]);
var state_43327__$1 = state_43327;
var statearr_43331_43378 = state_43327__$1;
(statearr_43331_43378[(2)] = inst_43321);

(statearr_43331_43378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (27))){
var inst_43317 = (state_43327[(2)]);
var state_43327__$1 = state_43327;
var statearr_43332_43379 = state_43327__$1;
(statearr_43332_43379[(2)] = inst_43317);

(statearr_43332_43379[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (1))){
var inst_43240 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43327__$1 = state_43327;
if(cljs.core.truth_(inst_43240)){
var statearr_43333_43380 = state_43327__$1;
(statearr_43333_43380[(1)] = (2));

} else {
var statearr_43334_43381 = state_43327__$1;
(statearr_43334_43381[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (24))){
var inst_43319 = (state_43327[(2)]);
var state_43327__$1 = state_43327;
var statearr_43335_43382 = state_43327__$1;
(statearr_43335_43382[(2)] = inst_43319);

(statearr_43335_43382[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (4))){
var inst_43325 = (state_43327[(2)]);
var state_43327__$1 = state_43327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43327__$1,inst_43325);
} else {
if((state_val_43328 === (15))){
var inst_43323 = (state_43327[(2)]);
var state_43327__$1 = state_43327;
var statearr_43336_43383 = state_43327__$1;
(statearr_43336_43383[(2)] = inst_43323);

(statearr_43336_43383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (21))){
var inst_43276 = (state_43327[(2)]);
var inst_43277 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43278 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43277);
var state_43327__$1 = (function (){var statearr_43337 = state_43327;
(statearr_43337[(7)] = inst_43276);

return statearr_43337;
})();
var statearr_43338_43384 = state_43327__$1;
(statearr_43338_43384[(2)] = inst_43278);

(statearr_43338_43384[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (31))){
var inst_43306 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43327__$1 = state_43327;
if(cljs.core.truth_(inst_43306)){
var statearr_43339_43385 = state_43327__$1;
(statearr_43339_43385[(1)] = (34));

} else {
var statearr_43340_43386 = state_43327__$1;
(statearr_43340_43386[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (32))){
var inst_43315 = (state_43327[(2)]);
var state_43327__$1 = state_43327;
var statearr_43341_43387 = state_43327__$1;
(statearr_43341_43387[(2)] = inst_43315);

(statearr_43341_43387[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (33))){
var inst_43302 = (state_43327[(2)]);
var inst_43303 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43304 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43303);
var state_43327__$1 = (function (){var statearr_43342 = state_43327;
(statearr_43342[(8)] = inst_43302);

return statearr_43342;
})();
var statearr_43343_43388 = state_43327__$1;
(statearr_43343_43388[(2)] = inst_43304);

(statearr_43343_43388[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (13))){
var inst_43261 = figwheel.client.heads_up.clear.call(null);
var state_43327__$1 = state_43327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43327__$1,(16),inst_43261);
} else {
if((state_val_43328 === (22))){
var inst_43282 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43283 = figwheel.client.heads_up.append_warning_message.call(null,inst_43282);
var state_43327__$1 = state_43327;
var statearr_43344_43389 = state_43327__$1;
(statearr_43344_43389[(2)] = inst_43283);

(statearr_43344_43389[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (36))){
var inst_43313 = (state_43327[(2)]);
var state_43327__$1 = state_43327;
var statearr_43345_43390 = state_43327__$1;
(statearr_43345_43390[(2)] = inst_43313);

(statearr_43345_43390[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (29))){
var inst_43293 = (state_43327[(2)]);
var inst_43294 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43295 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43294);
var state_43327__$1 = (function (){var statearr_43346 = state_43327;
(statearr_43346[(9)] = inst_43293);

return statearr_43346;
})();
var statearr_43347_43391 = state_43327__$1;
(statearr_43347_43391[(2)] = inst_43295);

(statearr_43347_43391[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (6))){
var inst_43242 = (state_43327[(10)]);
var state_43327__$1 = state_43327;
var statearr_43348_43392 = state_43327__$1;
(statearr_43348_43392[(2)] = inst_43242);

(statearr_43348_43392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (28))){
var inst_43289 = (state_43327[(2)]);
var inst_43290 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43291 = figwheel.client.heads_up.display_warning.call(null,inst_43290);
var state_43327__$1 = (function (){var statearr_43349 = state_43327;
(statearr_43349[(11)] = inst_43289);

return statearr_43349;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43327__$1,(29),inst_43291);
} else {
if((state_val_43328 === (25))){
var inst_43287 = figwheel.client.heads_up.clear.call(null);
var state_43327__$1 = state_43327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43327__$1,(28),inst_43287);
} else {
if((state_val_43328 === (34))){
var inst_43308 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43327__$1 = state_43327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43327__$1,(37),inst_43308);
} else {
if((state_val_43328 === (17))){
var inst_43267 = (state_43327[(2)]);
var inst_43268 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43269 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43268);
var state_43327__$1 = (function (){var statearr_43350 = state_43327;
(statearr_43350[(12)] = inst_43267);

return statearr_43350;
})();
var statearr_43351_43393 = state_43327__$1;
(statearr_43351_43393[(2)] = inst_43269);

(statearr_43351_43393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (3))){
var inst_43259 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43327__$1 = state_43327;
if(cljs.core.truth_(inst_43259)){
var statearr_43352_43394 = state_43327__$1;
(statearr_43352_43394[(1)] = (13));

} else {
var statearr_43353_43395 = state_43327__$1;
(statearr_43353_43395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (12))){
var inst_43255 = (state_43327[(2)]);
var state_43327__$1 = state_43327;
var statearr_43354_43396 = state_43327__$1;
(statearr_43354_43396[(2)] = inst_43255);

(statearr_43354_43396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (2))){
var inst_43242 = (state_43327[(10)]);
var inst_43242__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43327__$1 = (function (){var statearr_43355 = state_43327;
(statearr_43355[(10)] = inst_43242__$1);

return statearr_43355;
})();
if(cljs.core.truth_(inst_43242__$1)){
var statearr_43356_43397 = state_43327__$1;
(statearr_43356_43397[(1)] = (5));

} else {
var statearr_43357_43398 = state_43327__$1;
(statearr_43357_43398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (23))){
var inst_43285 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43327__$1 = state_43327;
if(cljs.core.truth_(inst_43285)){
var statearr_43358_43399 = state_43327__$1;
(statearr_43358_43399[(1)] = (25));

} else {
var statearr_43359_43400 = state_43327__$1;
(statearr_43359_43400[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (35))){
var state_43327__$1 = state_43327;
var statearr_43360_43401 = state_43327__$1;
(statearr_43360_43401[(2)] = null);

(statearr_43360_43401[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (19))){
var inst_43280 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43327__$1 = state_43327;
if(cljs.core.truth_(inst_43280)){
var statearr_43361_43402 = state_43327__$1;
(statearr_43361_43402[(1)] = (22));

} else {
var statearr_43362_43403 = state_43327__$1;
(statearr_43362_43403[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (11))){
var inst_43251 = (state_43327[(2)]);
var state_43327__$1 = state_43327;
var statearr_43363_43404 = state_43327__$1;
(statearr_43363_43404[(2)] = inst_43251);

(statearr_43363_43404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (9))){
var inst_43253 = figwheel.client.heads_up.clear.call(null);
var state_43327__$1 = state_43327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43327__$1,(12),inst_43253);
} else {
if((state_val_43328 === (5))){
var inst_43244 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43327__$1 = state_43327;
var statearr_43364_43405 = state_43327__$1;
(statearr_43364_43405[(2)] = inst_43244);

(statearr_43364_43405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (14))){
var inst_43271 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43327__$1 = state_43327;
if(cljs.core.truth_(inst_43271)){
var statearr_43365_43406 = state_43327__$1;
(statearr_43365_43406[(1)] = (18));

} else {
var statearr_43366_43407 = state_43327__$1;
(statearr_43366_43407[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (26))){
var inst_43297 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43327__$1 = state_43327;
if(cljs.core.truth_(inst_43297)){
var statearr_43367_43408 = state_43327__$1;
(statearr_43367_43408[(1)] = (30));

} else {
var statearr_43368_43409 = state_43327__$1;
(statearr_43368_43409[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (16))){
var inst_43263 = (state_43327[(2)]);
var inst_43264 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43265 = figwheel.client.heads_up.display_exception.call(null,inst_43264);
var state_43327__$1 = (function (){var statearr_43369 = state_43327;
(statearr_43369[(13)] = inst_43263);

return statearr_43369;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43327__$1,(17),inst_43265);
} else {
if((state_val_43328 === (30))){
var inst_43299 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43300 = figwheel.client.heads_up.display_warning.call(null,inst_43299);
var state_43327__$1 = state_43327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43327__$1,(33),inst_43300);
} else {
if((state_val_43328 === (10))){
var inst_43257 = (state_43327[(2)]);
var state_43327__$1 = state_43327;
var statearr_43370_43410 = state_43327__$1;
(statearr_43370_43410[(2)] = inst_43257);

(statearr_43370_43410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (18))){
var inst_43273 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43274 = figwheel.client.heads_up.display_exception.call(null,inst_43273);
var state_43327__$1 = state_43327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43327__$1,(21),inst_43274);
} else {
if((state_val_43328 === (37))){
var inst_43310 = (state_43327[(2)]);
var state_43327__$1 = state_43327;
var statearr_43371_43411 = state_43327__$1;
(statearr_43371_43411[(2)] = inst_43310);

(statearr_43371_43411[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43328 === (8))){
var inst_43249 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43327__$1 = state_43327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43327__$1,(11),inst_43249);
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
});})(c__29362__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29271__auto__,c__29362__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29272__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29272__auto____0 = (function (){
var statearr_43372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43372[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29272__auto__);

(statearr_43372[(1)] = (1));

return statearr_43372;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29272__auto____1 = (function (state_43327){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_43327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e43373){if((e43373 instanceof Object)){
var ex__29275__auto__ = e43373;
var statearr_43374_43412 = state_43327;
(statearr_43374_43412[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43413 = state_43327;
state_43327 = G__43413;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29272__auto__ = function(state_43327){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29272__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29272__auto____1.call(this,state_43327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29272__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29272__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto__,msg_hist,msg_names,msg))
})();
var state__29364__auto__ = (function (){var statearr_43375 = f__29363__auto__.call(null);
(statearr_43375[(6)] = c__29362__auto__);

return statearr_43375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto__,msg_hist,msg_names,msg))
);

return c__29362__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29362__auto___43442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___43442,ch){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___43442,ch){
return (function (state_43428){
var state_val_43429 = (state_43428[(1)]);
if((state_val_43429 === (1))){
var state_43428__$1 = state_43428;
var statearr_43430_43443 = state_43428__$1;
(statearr_43430_43443[(2)] = null);

(statearr_43430_43443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (2))){
var state_43428__$1 = state_43428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43428__$1,(4),ch);
} else {
if((state_val_43429 === (3))){
var inst_43426 = (state_43428[(2)]);
var state_43428__$1 = state_43428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43428__$1,inst_43426);
} else {
if((state_val_43429 === (4))){
var inst_43416 = (state_43428[(7)]);
var inst_43416__$1 = (state_43428[(2)]);
var state_43428__$1 = (function (){var statearr_43431 = state_43428;
(statearr_43431[(7)] = inst_43416__$1);

return statearr_43431;
})();
if(cljs.core.truth_(inst_43416__$1)){
var statearr_43432_43444 = state_43428__$1;
(statearr_43432_43444[(1)] = (5));

} else {
var statearr_43433_43445 = state_43428__$1;
(statearr_43433_43445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (5))){
var inst_43416 = (state_43428[(7)]);
var inst_43418 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43416);
var state_43428__$1 = state_43428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43428__$1,(8),inst_43418);
} else {
if((state_val_43429 === (6))){
var state_43428__$1 = state_43428;
var statearr_43434_43446 = state_43428__$1;
(statearr_43434_43446[(2)] = null);

(statearr_43434_43446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (7))){
var inst_43424 = (state_43428[(2)]);
var state_43428__$1 = state_43428;
var statearr_43435_43447 = state_43428__$1;
(statearr_43435_43447[(2)] = inst_43424);

(statearr_43435_43447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (8))){
var inst_43420 = (state_43428[(2)]);
var state_43428__$1 = (function (){var statearr_43436 = state_43428;
(statearr_43436[(8)] = inst_43420);

return statearr_43436;
})();
var statearr_43437_43448 = state_43428__$1;
(statearr_43437_43448[(2)] = null);

(statearr_43437_43448[(1)] = (2));


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
});})(c__29362__auto___43442,ch))
;
return ((function (switch__29271__auto__,c__29362__auto___43442,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29272__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29272__auto____0 = (function (){
var statearr_43438 = [null,null,null,null,null,null,null,null,null];
(statearr_43438[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29272__auto__);

(statearr_43438[(1)] = (1));

return statearr_43438;
});
var figwheel$client$heads_up_plugin_$_state_machine__29272__auto____1 = (function (state_43428){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_43428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e43439){if((e43439 instanceof Object)){
var ex__29275__auto__ = e43439;
var statearr_43440_43449 = state_43428;
(statearr_43440_43449[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43450 = state_43428;
state_43428 = G__43450;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29272__auto__ = function(state_43428){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29272__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29272__auto____1.call(this,state_43428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29272__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29272__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___43442,ch))
})();
var state__29364__auto__ = (function (){var statearr_43441 = f__29363__auto__.call(null);
(statearr_43441[(6)] = c__29362__auto___43442);

return statearr_43441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___43442,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto__){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto__){
return (function (state_43456){
var state_val_43457 = (state_43456[(1)]);
if((state_val_43457 === (1))){
var inst_43451 = cljs.core.async.timeout.call(null,(3000));
var state_43456__$1 = state_43456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43456__$1,(2),inst_43451);
} else {
if((state_val_43457 === (2))){
var inst_43453 = (state_43456[(2)]);
var inst_43454 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_43456__$1 = (function (){var statearr_43458 = state_43456;
(statearr_43458[(7)] = inst_43453);

return statearr_43458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43456__$1,inst_43454);
} else {
return null;
}
}
});})(c__29362__auto__))
;
return ((function (switch__29271__auto__,c__29362__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29272__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29272__auto____0 = (function (){
var statearr_43459 = [null,null,null,null,null,null,null,null];
(statearr_43459[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29272__auto__);

(statearr_43459[(1)] = (1));

return statearr_43459;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29272__auto____1 = (function (state_43456){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_43456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e43460){if((e43460 instanceof Object)){
var ex__29275__auto__ = e43460;
var statearr_43461_43463 = state_43456;
(statearr_43461_43463[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43464 = state_43456;
state_43456 = G__43464;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29272__auto__ = function(state_43456){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29272__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29272__auto____1.call(this,state_43456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29272__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29272__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto__))
})();
var state__29364__auto__ = (function (){var statearr_43462 = f__29363__auto__.call(null);
(statearr_43462[(6)] = c__29362__auto__);

return statearr_43462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto__))
);

return c__29362__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto__,figwheel_version,temp__5457__auto__){
return (function (state_43471){
var state_val_43472 = (state_43471[(1)]);
if((state_val_43472 === (1))){
var inst_43465 = cljs.core.async.timeout.call(null,(2000));
var state_43471__$1 = state_43471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43471__$1,(2),inst_43465);
} else {
if((state_val_43472 === (2))){
var inst_43467 = (state_43471[(2)]);
var inst_43468 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_43469 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_43468);
var state_43471__$1 = (function (){var statearr_43473 = state_43471;
(statearr_43473[(7)] = inst_43467);

return statearr_43473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43471__$1,inst_43469);
} else {
return null;
}
}
});})(c__29362__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__29271__auto__,c__29362__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29272__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29272__auto____0 = (function (){
var statearr_43474 = [null,null,null,null,null,null,null,null];
(statearr_43474[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29272__auto__);

(statearr_43474[(1)] = (1));

return statearr_43474;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29272__auto____1 = (function (state_43471){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_43471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e43475){if((e43475 instanceof Object)){
var ex__29275__auto__ = e43475;
var statearr_43476_43478 = state_43471;
(statearr_43476_43478[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43479 = state_43471;
state_43471 = G__43479;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29272__auto__ = function(state_43471){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29272__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29272__auto____1.call(this,state_43471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29272__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29272__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto__,figwheel_version,temp__5457__auto__))
})();
var state__29364__auto__ = (function (){var statearr_43477 = f__29363__auto__.call(null);
(statearr_43477[(6)] = c__29362__auto__);

return statearr_43477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto__,figwheel_version,temp__5457__auto__))
);

return c__29362__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__43480){
var map__43481 = p__43480;
var map__43481__$1 = ((((!((map__43481 == null)))?(((((map__43481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43481):map__43481);
var file = cljs.core.get.call(null,map__43481__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43481__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43481__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__43483 = "";
var G__43483__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43483),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__43483);
var G__43483__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43483__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__43483__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43483__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__43483__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__43484){
var map__43485 = p__43484;
var map__43485__$1 = ((((!((map__43485 == null)))?(((((map__43485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43485):map__43485);
var ed = map__43485__$1;
var formatted_exception = cljs.core.get.call(null,map__43485__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__43485__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__43485__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__43487_43491 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__43488_43492 = null;
var count__43489_43493 = (0);
var i__43490_43494 = (0);
while(true){
if((i__43490_43494 < count__43489_43493)){
var msg_43495 = cljs.core._nth.call(null,chunk__43488_43492,i__43490_43494);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43495);


var G__43496 = seq__43487_43491;
var G__43497 = chunk__43488_43492;
var G__43498 = count__43489_43493;
var G__43499 = (i__43490_43494 + (1));
seq__43487_43491 = G__43496;
chunk__43488_43492 = G__43497;
count__43489_43493 = G__43498;
i__43490_43494 = G__43499;
continue;
} else {
var temp__5457__auto___43500 = cljs.core.seq.call(null,seq__43487_43491);
if(temp__5457__auto___43500){
var seq__43487_43501__$1 = temp__5457__auto___43500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43487_43501__$1)){
var c__4351__auto___43502 = cljs.core.chunk_first.call(null,seq__43487_43501__$1);
var G__43503 = cljs.core.chunk_rest.call(null,seq__43487_43501__$1);
var G__43504 = c__4351__auto___43502;
var G__43505 = cljs.core.count.call(null,c__4351__auto___43502);
var G__43506 = (0);
seq__43487_43491 = G__43503;
chunk__43488_43492 = G__43504;
count__43489_43493 = G__43505;
i__43490_43494 = G__43506;
continue;
} else {
var msg_43507 = cljs.core.first.call(null,seq__43487_43501__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43507);


var G__43508 = cljs.core.next.call(null,seq__43487_43501__$1);
var G__43509 = null;
var G__43510 = (0);
var G__43511 = (0);
seq__43487_43491 = G__43508;
chunk__43488_43492 = G__43509;
count__43489_43493 = G__43510;
i__43490_43494 = G__43511;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__43512){
var map__43513 = p__43512;
var map__43513__$1 = ((((!((map__43513 == null)))?(((((map__43513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43513):map__43513);
var w = map__43513__$1;
var message = cljs.core.get.call(null,map__43513__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__43515 = cljs.core.seq.call(null,plugins);
var chunk__43516 = null;
var count__43517 = (0);
var i__43518 = (0);
while(true){
if((i__43518 < count__43517)){
var vec__43519 = cljs.core._nth.call(null,chunk__43516,i__43518);
var k = cljs.core.nth.call(null,vec__43519,(0),null);
var plugin = cljs.core.nth.call(null,vec__43519,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43525 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43515,chunk__43516,count__43517,i__43518,pl_43525,vec__43519,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_43525.call(null,msg_hist);
});})(seq__43515,chunk__43516,count__43517,i__43518,pl_43525,vec__43519,k,plugin))
);
} else {
}


var G__43526 = seq__43515;
var G__43527 = chunk__43516;
var G__43528 = count__43517;
var G__43529 = (i__43518 + (1));
seq__43515 = G__43526;
chunk__43516 = G__43527;
count__43517 = G__43528;
i__43518 = G__43529;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43515);
if(temp__5457__auto__){
var seq__43515__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43515__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__43515__$1);
var G__43530 = cljs.core.chunk_rest.call(null,seq__43515__$1);
var G__43531 = c__4351__auto__;
var G__43532 = cljs.core.count.call(null,c__4351__auto__);
var G__43533 = (0);
seq__43515 = G__43530;
chunk__43516 = G__43531;
count__43517 = G__43532;
i__43518 = G__43533;
continue;
} else {
var vec__43522 = cljs.core.first.call(null,seq__43515__$1);
var k = cljs.core.nth.call(null,vec__43522,(0),null);
var plugin = cljs.core.nth.call(null,vec__43522,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43534 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43515,chunk__43516,count__43517,i__43518,pl_43534,vec__43522,k,plugin,seq__43515__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_43534.call(null,msg_hist);
});})(seq__43515,chunk__43516,count__43517,i__43518,pl_43534,vec__43522,k,plugin,seq__43515__$1,temp__5457__auto__))
);
} else {
}


var G__43535 = cljs.core.next.call(null,seq__43515__$1);
var G__43536 = null;
var G__43537 = (0);
var G__43538 = (0);
seq__43515 = G__43535;
chunk__43516 = G__43536;
count__43517 = G__43537;
i__43518 = G__43538;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__43540 = arguments.length;
switch (G__43540) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__43541_43546 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__43542_43547 = null;
var count__43543_43548 = (0);
var i__43544_43549 = (0);
while(true){
if((i__43544_43549 < count__43543_43548)){
var msg_43550 = cljs.core._nth.call(null,chunk__43542_43547,i__43544_43549);
figwheel.client.socket.handle_incoming_message.call(null,msg_43550);


var G__43551 = seq__43541_43546;
var G__43552 = chunk__43542_43547;
var G__43553 = count__43543_43548;
var G__43554 = (i__43544_43549 + (1));
seq__43541_43546 = G__43551;
chunk__43542_43547 = G__43552;
count__43543_43548 = G__43553;
i__43544_43549 = G__43554;
continue;
} else {
var temp__5457__auto___43555 = cljs.core.seq.call(null,seq__43541_43546);
if(temp__5457__auto___43555){
var seq__43541_43556__$1 = temp__5457__auto___43555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43541_43556__$1)){
var c__4351__auto___43557 = cljs.core.chunk_first.call(null,seq__43541_43556__$1);
var G__43558 = cljs.core.chunk_rest.call(null,seq__43541_43556__$1);
var G__43559 = c__4351__auto___43557;
var G__43560 = cljs.core.count.call(null,c__4351__auto___43557);
var G__43561 = (0);
seq__43541_43546 = G__43558;
chunk__43542_43547 = G__43559;
count__43543_43548 = G__43560;
i__43544_43549 = G__43561;
continue;
} else {
var msg_43562 = cljs.core.first.call(null,seq__43541_43556__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_43562);


var G__43563 = cljs.core.next.call(null,seq__43541_43556__$1);
var G__43564 = null;
var G__43565 = (0);
var G__43566 = (0);
seq__43541_43546 = G__43563;
chunk__43542_43547 = G__43564;
count__43543_43548 = G__43565;
i__43544_43549 = G__43566;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___43571 = arguments.length;
var i__4532__auto___43572 = (0);
while(true){
if((i__4532__auto___43572 < len__4531__auto___43571)){
args__4534__auto__.push((arguments[i__4532__auto___43572]));

var G__43573 = (i__4532__auto___43572 + (1));
i__4532__auto___43572 = G__43573;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43568){
var map__43569 = p__43568;
var map__43569__$1 = ((((!((map__43569 == null)))?(((((map__43569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43569):map__43569);
var opts = map__43569__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43567){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43567));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e43574){if((e43574 instanceof Error)){
var e = e43574;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e43574;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__43575){
var map__43576 = p__43575;
var map__43576__$1 = ((((!((map__43576 == null)))?(((((map__43576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43576):map__43576);
var msg_name = cljs.core.get.call(null,map__43576__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1539627777833
