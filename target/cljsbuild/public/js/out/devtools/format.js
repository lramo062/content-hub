// Compiled by ClojureScript 1.10.339 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4243__auto__ = (((value == null))?null:value);
var m__4244__auto__ = (devtools.format._header[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,value);
} else {
var m__4244__auto____$1 = (devtools.format._header["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4243__auto__ = (((value == null))?null:value);
var m__4244__auto__ = (devtools.format._has_body[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,value);
} else {
var m__4244__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4243__auto__ = (((value == null))?null:value);
var m__4244__auto__ = (devtools.format._body[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,value);
} else {
var m__4244__auto____$1 = (devtools.format._body["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o31617 = temp__5455__auto__;
var temp__5455__auto____$1 = (o31617["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o31618 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o31618["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o31619 = temp__5455__auto____$2;
return (o31619["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o31620 = temp__5455__auto__;
var temp__5455__auto____$1 = (o31620["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o31621 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o31621["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o31622 = temp__5455__auto____$2;
return (o31622["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o31623 = temp__5455__auto__;
var temp__5455__auto____$1 = (o31623["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o31624 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o31624["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o31625 = temp__5455__auto____$2;
return (o31625["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o31626 = temp__5455__auto__;
var temp__5455__auto____$1 = (o31626["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o31627 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o31627["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o31628 = temp__5455__auto____$2;
return (o31628["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o31629 = temp__5455__auto__;
var temp__5455__auto____$1 = (o31629["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o31630 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o31630["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o31631 = temp__5455__auto____$2;
return (o31631["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o31632 = temp__5455__auto__;
var temp__5455__auto____$1 = (o31632["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o31633 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o31633["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o31634 = temp__5455__auto____$2;
return (o31634["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o31635 = temp__5455__auto__;
var temp__5455__auto____$1 = (o31635["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o31636 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o31636["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o31637 = temp__5455__auto____$2;
return (o31637["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31639 = arguments.length;
var i__4532__auto___31640 = (0);
while(true){
if((i__4532__auto___31640 < len__4531__auto___31639)){
args__4534__auto__.push((arguments[i__4532__auto___31640]));

var G__31641 = (i__4532__auto___31640 + (1));
i__4532__auto___31640 = G__31641;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq31638){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31638));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31643 = arguments.length;
var i__4532__auto___31644 = (0);
while(true){
if((i__4532__auto___31644 < len__4531__auto___31643)){
args__4534__auto__.push((arguments[i__4532__auto___31644]));

var G__31645 = (i__4532__auto___31644 + (1));
i__4532__auto___31644 = G__31645;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq31642){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31642));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31647 = arguments.length;
var i__4532__auto___31648 = (0);
while(true){
if((i__4532__auto___31648 < len__4531__auto___31647)){
args__4534__auto__.push((arguments[i__4532__auto___31648]));

var G__31649 = (i__4532__auto___31648 + (1));
i__4532__auto___31648 = G__31649;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq31646){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31646));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31651 = arguments.length;
var i__4532__auto___31652 = (0);
while(true){
if((i__4532__auto___31652 < len__4531__auto___31651)){
args__4534__auto__.push((arguments[i__4532__auto___31652]));

var G__31653 = (i__4532__auto___31652 + (1));
i__4532__auto___31652 = G__31653;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq31650){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31650));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31655 = arguments.length;
var i__4532__auto___31656 = (0);
while(true){
if((i__4532__auto___31656 < len__4531__auto___31655)){
args__4534__auto__.push((arguments[i__4532__auto___31656]));

var G__31657 = (i__4532__auto___31656 + (1));
i__4532__auto___31656 = G__31657;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq31654){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31654));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31659 = arguments.length;
var i__4532__auto___31660 = (0);
while(true){
if((i__4532__auto___31660 < len__4531__auto___31659)){
args__4534__auto__.push((arguments[i__4532__auto___31660]));

var G__31661 = (i__4532__auto___31660 + (1));
i__4532__auto___31660 = G__31661;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq31658){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31658));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31663 = arguments.length;
var i__4532__auto___31664 = (0);
while(true){
if((i__4532__auto___31664 < len__4531__auto___31663)){
args__4534__auto__.push((arguments[i__4532__auto___31664]));

var G__31665 = (i__4532__auto___31664 + (1));
i__4532__auto___31664 = G__31665;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq31662){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31662));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31673 = arguments.length;
var i__4532__auto___31674 = (0);
while(true){
if((i__4532__auto___31674 < len__4531__auto___31673)){
args__4534__auto__.push((arguments[i__4532__auto___31674]));

var G__31675 = (i__4532__auto___31674 + (1));
i__4532__auto___31674 = G__31675;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__31669){
var vec__31670 = p__31669;
var state_override = cljs.core.nth.call(null,vec__31670,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__31670,state_override){
return (function (p1__31666_SHARP_){
return cljs.core.merge.call(null,p1__31666_SHARP_,state_override);
});})(vec__31670,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq31667){
var G__31668 = cljs.core.first.call(null,seq31667);
var seq31667__$1 = cljs.core.next.call(null,seq31667);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31668,seq31667__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31677 = arguments.length;
var i__4532__auto___31678 = (0);
while(true){
if((i__4532__auto___31678 < len__4531__auto___31677)){
args__4534__auto__.push((arguments[i__4532__auto___31678]));

var G__31679 = (i__4532__auto___31678 + (1));
i__4532__auto___31678 = G__31679;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq31676){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31676));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31682 = arguments.length;
var i__4532__auto___31683 = (0);
while(true){
if((i__4532__auto___31683 < len__4531__auto___31682)){
args__4534__auto__.push((arguments[i__4532__auto___31683]));

var G__31684 = (i__4532__auto___31683 + (1));
i__4532__auto___31683 = G__31684;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq31680){
var G__31681 = cljs.core.first.call(null,seq31680);
var seq31680__$1 = cljs.core.next.call(null,seq31680);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31681,seq31680__$1);
});


//# sourceMappingURL=format.js.map?rel=1539627750247
