// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42019){
var map__42020 = p__42019;
var map__42020__$1 = ((((!((map__42020 == null)))?(((((map__42020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42020):map__42020);
var m = map__42020__$1;
var n = cljs.core.get.call(null,map__42020__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42020__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42022_42044 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42023_42045 = null;
var count__42024_42046 = (0);
var i__42025_42047 = (0);
while(true){
if((i__42025_42047 < count__42024_42046)){
var f_42048 = cljs.core._nth.call(null,chunk__42023_42045,i__42025_42047);
cljs.core.println.call(null,"  ",f_42048);


var G__42049 = seq__42022_42044;
var G__42050 = chunk__42023_42045;
var G__42051 = count__42024_42046;
var G__42052 = (i__42025_42047 + (1));
seq__42022_42044 = G__42049;
chunk__42023_42045 = G__42050;
count__42024_42046 = G__42051;
i__42025_42047 = G__42052;
continue;
} else {
var temp__5457__auto___42053 = cljs.core.seq.call(null,seq__42022_42044);
if(temp__5457__auto___42053){
var seq__42022_42054__$1 = temp__5457__auto___42053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42022_42054__$1)){
var c__4351__auto___42055 = cljs.core.chunk_first.call(null,seq__42022_42054__$1);
var G__42056 = cljs.core.chunk_rest.call(null,seq__42022_42054__$1);
var G__42057 = c__4351__auto___42055;
var G__42058 = cljs.core.count.call(null,c__4351__auto___42055);
var G__42059 = (0);
seq__42022_42044 = G__42056;
chunk__42023_42045 = G__42057;
count__42024_42046 = G__42058;
i__42025_42047 = G__42059;
continue;
} else {
var f_42060 = cljs.core.first.call(null,seq__42022_42054__$1);
cljs.core.println.call(null,"  ",f_42060);


var G__42061 = cljs.core.next.call(null,seq__42022_42054__$1);
var G__42062 = null;
var G__42063 = (0);
var G__42064 = (0);
seq__42022_42044 = G__42061;
chunk__42023_42045 = G__42062;
count__42024_42046 = G__42063;
i__42025_42047 = G__42064;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42065 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42065);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42065)))?cljs.core.second.call(null,arglists_42065):arglists_42065));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42026_42066 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42027_42067 = null;
var count__42028_42068 = (0);
var i__42029_42069 = (0);
while(true){
if((i__42029_42069 < count__42028_42068)){
var vec__42030_42070 = cljs.core._nth.call(null,chunk__42027_42067,i__42029_42069);
var name_42071 = cljs.core.nth.call(null,vec__42030_42070,(0),null);
var map__42033_42072 = cljs.core.nth.call(null,vec__42030_42070,(1),null);
var map__42033_42073__$1 = ((((!((map__42033_42072 == null)))?(((((map__42033_42072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42033_42072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42033_42072):map__42033_42072);
var doc_42074 = cljs.core.get.call(null,map__42033_42073__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42075 = cljs.core.get.call(null,map__42033_42073__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42071);

cljs.core.println.call(null," ",arglists_42075);

if(cljs.core.truth_(doc_42074)){
cljs.core.println.call(null," ",doc_42074);
} else {
}


var G__42076 = seq__42026_42066;
var G__42077 = chunk__42027_42067;
var G__42078 = count__42028_42068;
var G__42079 = (i__42029_42069 + (1));
seq__42026_42066 = G__42076;
chunk__42027_42067 = G__42077;
count__42028_42068 = G__42078;
i__42029_42069 = G__42079;
continue;
} else {
var temp__5457__auto___42080 = cljs.core.seq.call(null,seq__42026_42066);
if(temp__5457__auto___42080){
var seq__42026_42081__$1 = temp__5457__auto___42080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42026_42081__$1)){
var c__4351__auto___42082 = cljs.core.chunk_first.call(null,seq__42026_42081__$1);
var G__42083 = cljs.core.chunk_rest.call(null,seq__42026_42081__$1);
var G__42084 = c__4351__auto___42082;
var G__42085 = cljs.core.count.call(null,c__4351__auto___42082);
var G__42086 = (0);
seq__42026_42066 = G__42083;
chunk__42027_42067 = G__42084;
count__42028_42068 = G__42085;
i__42029_42069 = G__42086;
continue;
} else {
var vec__42035_42087 = cljs.core.first.call(null,seq__42026_42081__$1);
var name_42088 = cljs.core.nth.call(null,vec__42035_42087,(0),null);
var map__42038_42089 = cljs.core.nth.call(null,vec__42035_42087,(1),null);
var map__42038_42090__$1 = ((((!((map__42038_42089 == null)))?(((((map__42038_42089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42038_42089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42038_42089):map__42038_42089);
var doc_42091 = cljs.core.get.call(null,map__42038_42090__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42092 = cljs.core.get.call(null,map__42038_42090__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42088);

cljs.core.println.call(null," ",arglists_42092);

if(cljs.core.truth_(doc_42091)){
cljs.core.println.call(null," ",doc_42091);
} else {
}


var G__42093 = cljs.core.next.call(null,seq__42026_42081__$1);
var G__42094 = null;
var G__42095 = (0);
var G__42096 = (0);
seq__42026_42066 = G__42093;
chunk__42027_42067 = G__42094;
count__42028_42068 = G__42095;
i__42029_42069 = G__42096;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__42040 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42041 = null;
var count__42042 = (0);
var i__42043 = (0);
while(true){
if((i__42043 < count__42042)){
var role = cljs.core._nth.call(null,chunk__42041,i__42043);
var temp__5457__auto___42097__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___42097__$1)){
var spec_42098 = temp__5457__auto___42097__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42098));
} else {
}


var G__42099 = seq__42040;
var G__42100 = chunk__42041;
var G__42101 = count__42042;
var G__42102 = (i__42043 + (1));
seq__42040 = G__42099;
chunk__42041 = G__42100;
count__42042 = G__42101;
i__42043 = G__42102;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__42040);
if(temp__5457__auto____$1){
var seq__42040__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42040__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__42040__$1);
var G__42103 = cljs.core.chunk_rest.call(null,seq__42040__$1);
var G__42104 = c__4351__auto__;
var G__42105 = cljs.core.count.call(null,c__4351__auto__);
var G__42106 = (0);
seq__42040 = G__42103;
chunk__42041 = G__42104;
count__42042 = G__42105;
i__42043 = G__42106;
continue;
} else {
var role = cljs.core.first.call(null,seq__42040__$1);
var temp__5457__auto___42107__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___42107__$2)){
var spec_42108 = temp__5457__auto___42107__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42108));
} else {
}


var G__42109 = cljs.core.next.call(null,seq__42040__$1);
var G__42110 = null;
var G__42111 = (0);
var G__42112 = (0);
seq__42040 = G__42109;
chunk__42041 = G__42110;
count__42042 = G__42111;
i__42043 = G__42112;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1539627760700
