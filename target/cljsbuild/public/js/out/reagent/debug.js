// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__34398__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34399__i = 0, G__34399__a = new Array(arguments.length -  0);
while (G__34399__i < G__34399__a.length) {G__34399__a[G__34399__i] = arguments[G__34399__i + 0]; ++G__34399__i;}
  args = new cljs.core.IndexedSeq(G__34399__a,0,null);
} 
return G__34398__delegate.call(this,args);};
G__34398.cljs$lang$maxFixedArity = 0;
G__34398.cljs$lang$applyTo = (function (arglist__34400){
var args = cljs.core.seq(arglist__34400);
return G__34398__delegate(args);
});
G__34398.cljs$core$IFn$_invoke$arity$variadic = G__34398__delegate;
return G__34398;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__34401__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__34401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34402__i = 0, G__34402__a = new Array(arguments.length -  0);
while (G__34402__i < G__34402__a.length) {G__34402__a[G__34402__i] = arguments[G__34402__i + 0]; ++G__34402__i;}
  args = new cljs.core.IndexedSeq(G__34402__a,0,null);
} 
return G__34401__delegate.call(this,args);};
G__34401.cljs$lang$maxFixedArity = 0;
G__34401.cljs$lang$applyTo = (function (arglist__34403){
var args = cljs.core.seq(arglist__34403);
return G__34401__delegate(args);
});
G__34401.cljs$core$IFn$_invoke$arity$variadic = G__34401__delegate;
return G__34401;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1539627753774
