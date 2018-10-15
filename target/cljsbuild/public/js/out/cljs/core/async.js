// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29422 = arguments.length;
switch (G__29422) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29423 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29423 = (function (f,blockable,meta29424){
this.f = f;
this.blockable = blockable;
this.meta29424 = meta29424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29425,meta29424__$1){
var self__ = this;
var _29425__$1 = this;
return (new cljs.core.async.t_cljs$core$async29423(self__.f,self__.blockable,meta29424__$1));
});

cljs.core.async.t_cljs$core$async29423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29425){
var self__ = this;
var _29425__$1 = this;
return self__.meta29424;
});

cljs.core.async.t_cljs$core$async29423.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29423.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29423.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29423.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29424","meta29424",748890662,null)], null);
});

cljs.core.async.t_cljs$core$async29423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29423";

cljs.core.async.t_cljs$core$async29423.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29423");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29423.
 */
cljs.core.async.__GT_t_cljs$core$async29423 = (function cljs$core$async$__GT_t_cljs$core$async29423(f__$1,blockable__$1,meta29424){
return (new cljs.core.async.t_cljs$core$async29423(f__$1,blockable__$1,meta29424));
});

}

return (new cljs.core.async.t_cljs$core$async29423(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29429 = arguments.length;
switch (G__29429) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29432 = arguments.length;
switch (G__29432) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29435 = arguments.length;
switch (G__29435) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29437 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29437);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29437,ret){
return (function (){
return fn1.call(null,val_29437);
});})(val_29437,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29439 = arguments.length;
switch (G__29439) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___29441 = n;
var x_29442 = (0);
while(true){
if((x_29442 < n__4408__auto___29441)){
(a[x_29442] = (0));

var G__29443 = (x_29442 + (1));
x_29442 = G__29443;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29444 = (i + (1));
i = G__29444;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29445 = (function (flag,meta29446){
this.flag = flag;
this.meta29446 = meta29446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29447,meta29446__$1){
var self__ = this;
var _29447__$1 = this;
return (new cljs.core.async.t_cljs$core$async29445(self__.flag,meta29446__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29447){
var self__ = this;
var _29447__$1 = this;
return self__.meta29446;
});})(flag))
;

cljs.core.async.t_cljs$core$async29445.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29445.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29445.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29445.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29445.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29446","meta29446",-597331491,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29445";

cljs.core.async.t_cljs$core$async29445.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29445");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29445.
 */
cljs.core.async.__GT_t_cljs$core$async29445 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29445(flag__$1,meta29446){
return (new cljs.core.async.t_cljs$core$async29445(flag__$1,meta29446));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29445(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29448 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29448 = (function (flag,cb,meta29449){
this.flag = flag;
this.cb = cb;
this.meta29449 = meta29449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29450,meta29449__$1){
var self__ = this;
var _29450__$1 = this;
return (new cljs.core.async.t_cljs$core$async29448(self__.flag,self__.cb,meta29449__$1));
});

cljs.core.async.t_cljs$core$async29448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29450){
var self__ = this;
var _29450__$1 = this;
return self__.meta29449;
});

cljs.core.async.t_cljs$core$async29448.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29448.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29448.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29448.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29449","meta29449",2104902028,null)], null);
});

cljs.core.async.t_cljs$core$async29448.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29448";

cljs.core.async.t_cljs$core$async29448.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29448");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29448.
 */
cljs.core.async.__GT_t_cljs$core$async29448 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29448(flag__$1,cb__$1,meta29449){
return (new cljs.core.async.t_cljs$core$async29448(flag__$1,cb__$1,meta29449));
});

}

return (new cljs.core.async.t_cljs$core$async29448(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29451_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29451_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29452_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29452_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29453 = (i + (1));
i = G__29453;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___29459 = arguments.length;
var i__4532__auto___29460 = (0);
while(true){
if((i__4532__auto___29460 < len__4531__auto___29459)){
args__4534__auto__.push((arguments[i__4532__auto___29460]));

var G__29461 = (i__4532__auto___29460 + (1));
i__4532__auto___29460 = G__29461;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29456){
var map__29457 = p__29456;
var map__29457__$1 = ((((!((map__29457 == null)))?(((((map__29457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29457):map__29457);
var opts = map__29457__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29454){
var G__29455 = cljs.core.first.call(null,seq29454);
var seq29454__$1 = cljs.core.next.call(null,seq29454);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29455,seq29454__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29463 = arguments.length;
switch (G__29463) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29362__auto___29509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___29509){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___29509){
return (function (state_29487){
var state_val_29488 = (state_29487[(1)]);
if((state_val_29488 === (7))){
var inst_29483 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29489_29510 = state_29487__$1;
(statearr_29489_29510[(2)] = inst_29483);

(statearr_29489_29510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (1))){
var state_29487__$1 = state_29487;
var statearr_29490_29511 = state_29487__$1;
(statearr_29490_29511[(2)] = null);

(statearr_29490_29511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (4))){
var inst_29466 = (state_29487[(7)]);
var inst_29466__$1 = (state_29487[(2)]);
var inst_29467 = (inst_29466__$1 == null);
var state_29487__$1 = (function (){var statearr_29491 = state_29487;
(statearr_29491[(7)] = inst_29466__$1);

return statearr_29491;
})();
if(cljs.core.truth_(inst_29467)){
var statearr_29492_29512 = state_29487__$1;
(statearr_29492_29512[(1)] = (5));

} else {
var statearr_29493_29513 = state_29487__$1;
(statearr_29493_29513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (13))){
var state_29487__$1 = state_29487;
var statearr_29494_29514 = state_29487__$1;
(statearr_29494_29514[(2)] = null);

(statearr_29494_29514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (6))){
var inst_29466 = (state_29487[(7)]);
var state_29487__$1 = state_29487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29487__$1,(11),to,inst_29466);
} else {
if((state_val_29488 === (3))){
var inst_29485 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29487__$1,inst_29485);
} else {
if((state_val_29488 === (12))){
var state_29487__$1 = state_29487;
var statearr_29495_29515 = state_29487__$1;
(statearr_29495_29515[(2)] = null);

(statearr_29495_29515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (2))){
var state_29487__$1 = state_29487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29487__$1,(4),from);
} else {
if((state_val_29488 === (11))){
var inst_29476 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
if(cljs.core.truth_(inst_29476)){
var statearr_29496_29516 = state_29487__$1;
(statearr_29496_29516[(1)] = (12));

} else {
var statearr_29497_29517 = state_29487__$1;
(statearr_29497_29517[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (9))){
var state_29487__$1 = state_29487;
var statearr_29498_29518 = state_29487__$1;
(statearr_29498_29518[(2)] = null);

(statearr_29498_29518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (5))){
var state_29487__$1 = state_29487;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29499_29519 = state_29487__$1;
(statearr_29499_29519[(1)] = (8));

} else {
var statearr_29500_29520 = state_29487__$1;
(statearr_29500_29520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (14))){
var inst_29481 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29501_29521 = state_29487__$1;
(statearr_29501_29521[(2)] = inst_29481);

(statearr_29501_29521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (10))){
var inst_29473 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29502_29522 = state_29487__$1;
(statearr_29502_29522[(2)] = inst_29473);

(statearr_29502_29522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (8))){
var inst_29470 = cljs.core.async.close_BANG_.call(null,to);
var state_29487__$1 = state_29487;
var statearr_29503_29523 = state_29487__$1;
(statearr_29503_29523[(2)] = inst_29470);

(statearr_29503_29523[(1)] = (10));


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
});})(c__29362__auto___29509))
;
return ((function (switch__29271__auto__,c__29362__auto___29509){
return (function() {
var cljs$core$async$state_machine__29272__auto__ = null;
var cljs$core$async$state_machine__29272__auto____0 = (function (){
var statearr_29504 = [null,null,null,null,null,null,null,null];
(statearr_29504[(0)] = cljs$core$async$state_machine__29272__auto__);

(statearr_29504[(1)] = (1));

return statearr_29504;
});
var cljs$core$async$state_machine__29272__auto____1 = (function (state_29487){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_29487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e29505){if((e29505 instanceof Object)){
var ex__29275__auto__ = e29505;
var statearr_29506_29524 = state_29487;
(statearr_29506_29524[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29525 = state_29487;
state_29487 = G__29525;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$state_machine__29272__auto__ = function(state_29487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29272__auto____1.call(this,state_29487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29272__auto____0;
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29272__auto____1;
return cljs$core$async$state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___29509))
})();
var state__29364__auto__ = (function (){var statearr_29507 = f__29363__auto__.call(null);
(statearr_29507[(6)] = c__29362__auto___29509);

return statearr_29507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___29509))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29526){
var vec__29527 = p__29526;
var v = cljs.core.nth.call(null,vec__29527,(0),null);
var p = cljs.core.nth.call(null,vec__29527,(1),null);
var job = vec__29527;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29362__auto___29698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___29698,res,vec__29527,v,p,job,jobs,results){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___29698,res,vec__29527,v,p,job,jobs,results){
return (function (state_29534){
var state_val_29535 = (state_29534[(1)]);
if((state_val_29535 === (1))){
var state_29534__$1 = state_29534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29534__$1,(2),res,v);
} else {
if((state_val_29535 === (2))){
var inst_29531 = (state_29534[(2)]);
var inst_29532 = cljs.core.async.close_BANG_.call(null,res);
var state_29534__$1 = (function (){var statearr_29536 = state_29534;
(statearr_29536[(7)] = inst_29531);

return statearr_29536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29534__$1,inst_29532);
} else {
return null;
}
}
});})(c__29362__auto___29698,res,vec__29527,v,p,job,jobs,results))
;
return ((function (switch__29271__auto__,c__29362__auto___29698,res,vec__29527,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____0 = (function (){
var statearr_29537 = [null,null,null,null,null,null,null,null];
(statearr_29537[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__);

(statearr_29537[(1)] = (1));

return statearr_29537;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____1 = (function (state_29534){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_29534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e29538){if((e29538 instanceof Object)){
var ex__29275__auto__ = e29538;
var statearr_29539_29699 = state_29534;
(statearr_29539_29699[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29700 = state_29534;
state_29534 = G__29700;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__ = function(state_29534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____1.call(this,state_29534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___29698,res,vec__29527,v,p,job,jobs,results))
})();
var state__29364__auto__ = (function (){var statearr_29540 = f__29363__auto__.call(null);
(statearr_29540[(6)] = c__29362__auto___29698);

return statearr_29540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___29698,res,vec__29527,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29541){
var vec__29542 = p__29541;
var v = cljs.core.nth.call(null,vec__29542,(0),null);
var p = cljs.core.nth.call(null,vec__29542,(1),null);
var job = vec__29542;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___29701 = n;
var __29702 = (0);
while(true){
if((__29702 < n__4408__auto___29701)){
var G__29545_29703 = type;
var G__29545_29704__$1 = (((G__29545_29703 instanceof cljs.core.Keyword))?G__29545_29703.fqn:null);
switch (G__29545_29704__$1) {
case "compute":
var c__29362__auto___29706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29702,c__29362__auto___29706,G__29545_29703,G__29545_29704__$1,n__4408__auto___29701,jobs,results,process,async){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (__29702,c__29362__auto___29706,G__29545_29703,G__29545_29704__$1,n__4408__auto___29701,jobs,results,process,async){
return (function (state_29558){
var state_val_29559 = (state_29558[(1)]);
if((state_val_29559 === (1))){
var state_29558__$1 = state_29558;
var statearr_29560_29707 = state_29558__$1;
(statearr_29560_29707[(2)] = null);

(statearr_29560_29707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (2))){
var state_29558__$1 = state_29558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29558__$1,(4),jobs);
} else {
if((state_val_29559 === (3))){
var inst_29556 = (state_29558[(2)]);
var state_29558__$1 = state_29558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29558__$1,inst_29556);
} else {
if((state_val_29559 === (4))){
var inst_29548 = (state_29558[(2)]);
var inst_29549 = process.call(null,inst_29548);
var state_29558__$1 = state_29558;
if(cljs.core.truth_(inst_29549)){
var statearr_29561_29708 = state_29558__$1;
(statearr_29561_29708[(1)] = (5));

} else {
var statearr_29562_29709 = state_29558__$1;
(statearr_29562_29709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (5))){
var state_29558__$1 = state_29558;
var statearr_29563_29710 = state_29558__$1;
(statearr_29563_29710[(2)] = null);

(statearr_29563_29710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (6))){
var state_29558__$1 = state_29558;
var statearr_29564_29711 = state_29558__$1;
(statearr_29564_29711[(2)] = null);

(statearr_29564_29711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (7))){
var inst_29554 = (state_29558[(2)]);
var state_29558__$1 = state_29558;
var statearr_29565_29712 = state_29558__$1;
(statearr_29565_29712[(2)] = inst_29554);

(statearr_29565_29712[(1)] = (3));


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
});})(__29702,c__29362__auto___29706,G__29545_29703,G__29545_29704__$1,n__4408__auto___29701,jobs,results,process,async))
;
return ((function (__29702,switch__29271__auto__,c__29362__auto___29706,G__29545_29703,G__29545_29704__$1,n__4408__auto___29701,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____0 = (function (){
var statearr_29566 = [null,null,null,null,null,null,null];
(statearr_29566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__);

(statearr_29566[(1)] = (1));

return statearr_29566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____1 = (function (state_29558){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_29558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e29567){if((e29567 instanceof Object)){
var ex__29275__auto__ = e29567;
var statearr_29568_29713 = state_29558;
(statearr_29568_29713[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29714 = state_29558;
state_29558 = G__29714;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__ = function(state_29558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____1.call(this,state_29558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__;
})()
;})(__29702,switch__29271__auto__,c__29362__auto___29706,G__29545_29703,G__29545_29704__$1,n__4408__auto___29701,jobs,results,process,async))
})();
var state__29364__auto__ = (function (){var statearr_29569 = f__29363__auto__.call(null);
(statearr_29569[(6)] = c__29362__auto___29706);

return statearr_29569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(__29702,c__29362__auto___29706,G__29545_29703,G__29545_29704__$1,n__4408__auto___29701,jobs,results,process,async))
);


break;
case "async":
var c__29362__auto___29715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29702,c__29362__auto___29715,G__29545_29703,G__29545_29704__$1,n__4408__auto___29701,jobs,results,process,async){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (__29702,c__29362__auto___29715,G__29545_29703,G__29545_29704__$1,n__4408__auto___29701,jobs,results,process,async){
return (function (state_29582){
var state_val_29583 = (state_29582[(1)]);
if((state_val_29583 === (1))){
var state_29582__$1 = state_29582;
var statearr_29584_29716 = state_29582__$1;
(statearr_29584_29716[(2)] = null);

(statearr_29584_29716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (2))){
var state_29582__$1 = state_29582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29582__$1,(4),jobs);
} else {
if((state_val_29583 === (3))){
var inst_29580 = (state_29582[(2)]);
var state_29582__$1 = state_29582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29582__$1,inst_29580);
} else {
if((state_val_29583 === (4))){
var inst_29572 = (state_29582[(2)]);
var inst_29573 = async.call(null,inst_29572);
var state_29582__$1 = state_29582;
if(cljs.core.truth_(inst_29573)){
var statearr_29585_29717 = state_29582__$1;
(statearr_29585_29717[(1)] = (5));

} else {
var statearr_29586_29718 = state_29582__$1;
(statearr_29586_29718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (5))){
var state_29582__$1 = state_29582;
var statearr_29587_29719 = state_29582__$1;
(statearr_29587_29719[(2)] = null);

(statearr_29587_29719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (6))){
var state_29582__$1 = state_29582;
var statearr_29588_29720 = state_29582__$1;
(statearr_29588_29720[(2)] = null);

(statearr_29588_29720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (7))){
var inst_29578 = (state_29582[(2)]);
var state_29582__$1 = state_29582;
var statearr_29589_29721 = state_29582__$1;
(statearr_29589_29721[(2)] = inst_29578);

(statearr_29589_29721[(1)] = (3));


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
});})(__29702,c__29362__auto___29715,G__29545_29703,G__29545_29704__$1,n__4408__auto___29701,jobs,results,process,async))
;
return ((function (__29702,switch__29271__auto__,c__29362__auto___29715,G__29545_29703,G__29545_29704__$1,n__4408__auto___29701,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____0 = (function (){
var statearr_29590 = [null,null,null,null,null,null,null];
(statearr_29590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__);

(statearr_29590[(1)] = (1));

return statearr_29590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____1 = (function (state_29582){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_29582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e29591){if((e29591 instanceof Object)){
var ex__29275__auto__ = e29591;
var statearr_29592_29722 = state_29582;
(statearr_29592_29722[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29723 = state_29582;
state_29582 = G__29723;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__ = function(state_29582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____1.call(this,state_29582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__;
})()
;})(__29702,switch__29271__auto__,c__29362__auto___29715,G__29545_29703,G__29545_29704__$1,n__4408__auto___29701,jobs,results,process,async))
})();
var state__29364__auto__ = (function (){var statearr_29593 = f__29363__auto__.call(null);
(statearr_29593[(6)] = c__29362__auto___29715);

return statearr_29593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(__29702,c__29362__auto___29715,G__29545_29703,G__29545_29704__$1,n__4408__auto___29701,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29545_29704__$1)].join('')));

}

var G__29724 = (__29702 + (1));
__29702 = G__29724;
continue;
} else {
}
break;
}

var c__29362__auto___29725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___29725,jobs,results,process,async){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___29725,jobs,results,process,async){
return (function (state_29615){
var state_val_29616 = (state_29615[(1)]);
if((state_val_29616 === (1))){
var state_29615__$1 = state_29615;
var statearr_29617_29726 = state_29615__$1;
(statearr_29617_29726[(2)] = null);

(statearr_29617_29726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (2))){
var state_29615__$1 = state_29615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29615__$1,(4),from);
} else {
if((state_val_29616 === (3))){
var inst_29613 = (state_29615[(2)]);
var state_29615__$1 = state_29615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29615__$1,inst_29613);
} else {
if((state_val_29616 === (4))){
var inst_29596 = (state_29615[(7)]);
var inst_29596__$1 = (state_29615[(2)]);
var inst_29597 = (inst_29596__$1 == null);
var state_29615__$1 = (function (){var statearr_29618 = state_29615;
(statearr_29618[(7)] = inst_29596__$1);

return statearr_29618;
})();
if(cljs.core.truth_(inst_29597)){
var statearr_29619_29727 = state_29615__$1;
(statearr_29619_29727[(1)] = (5));

} else {
var statearr_29620_29728 = state_29615__$1;
(statearr_29620_29728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (5))){
var inst_29599 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29615__$1 = state_29615;
var statearr_29621_29729 = state_29615__$1;
(statearr_29621_29729[(2)] = inst_29599);

(statearr_29621_29729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (6))){
var inst_29596 = (state_29615[(7)]);
var inst_29601 = (state_29615[(8)]);
var inst_29601__$1 = cljs.core.async.chan.call(null,(1));
var inst_29602 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29603 = [inst_29596,inst_29601__$1];
var inst_29604 = (new cljs.core.PersistentVector(null,2,(5),inst_29602,inst_29603,null));
var state_29615__$1 = (function (){var statearr_29622 = state_29615;
(statearr_29622[(8)] = inst_29601__$1);

return statearr_29622;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29615__$1,(8),jobs,inst_29604);
} else {
if((state_val_29616 === (7))){
var inst_29611 = (state_29615[(2)]);
var state_29615__$1 = state_29615;
var statearr_29623_29730 = state_29615__$1;
(statearr_29623_29730[(2)] = inst_29611);

(statearr_29623_29730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (8))){
var inst_29601 = (state_29615[(8)]);
var inst_29606 = (state_29615[(2)]);
var state_29615__$1 = (function (){var statearr_29624 = state_29615;
(statearr_29624[(9)] = inst_29606);

return statearr_29624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29615__$1,(9),results,inst_29601);
} else {
if((state_val_29616 === (9))){
var inst_29608 = (state_29615[(2)]);
var state_29615__$1 = (function (){var statearr_29625 = state_29615;
(statearr_29625[(10)] = inst_29608);

return statearr_29625;
})();
var statearr_29626_29731 = state_29615__$1;
(statearr_29626_29731[(2)] = null);

(statearr_29626_29731[(1)] = (2));


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
});})(c__29362__auto___29725,jobs,results,process,async))
;
return ((function (switch__29271__auto__,c__29362__auto___29725,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____0 = (function (){
var statearr_29627 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__);

(statearr_29627[(1)] = (1));

return statearr_29627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____1 = (function (state_29615){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_29615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e29628){if((e29628 instanceof Object)){
var ex__29275__auto__ = e29628;
var statearr_29629_29732 = state_29615;
(statearr_29629_29732[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29733 = state_29615;
state_29615 = G__29733;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__ = function(state_29615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____1.call(this,state_29615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___29725,jobs,results,process,async))
})();
var state__29364__auto__ = (function (){var statearr_29630 = f__29363__auto__.call(null);
(statearr_29630[(6)] = c__29362__auto___29725);

return statearr_29630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___29725,jobs,results,process,async))
);


var c__29362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto__,jobs,results,process,async){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto__,jobs,results,process,async){
return (function (state_29668){
var state_val_29669 = (state_29668[(1)]);
if((state_val_29669 === (7))){
var inst_29664 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
var statearr_29670_29734 = state_29668__$1;
(statearr_29670_29734[(2)] = inst_29664);

(statearr_29670_29734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (20))){
var state_29668__$1 = state_29668;
var statearr_29671_29735 = state_29668__$1;
(statearr_29671_29735[(2)] = null);

(statearr_29671_29735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (1))){
var state_29668__$1 = state_29668;
var statearr_29672_29736 = state_29668__$1;
(statearr_29672_29736[(2)] = null);

(statearr_29672_29736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (4))){
var inst_29633 = (state_29668[(7)]);
var inst_29633__$1 = (state_29668[(2)]);
var inst_29634 = (inst_29633__$1 == null);
var state_29668__$1 = (function (){var statearr_29673 = state_29668;
(statearr_29673[(7)] = inst_29633__$1);

return statearr_29673;
})();
if(cljs.core.truth_(inst_29634)){
var statearr_29674_29737 = state_29668__$1;
(statearr_29674_29737[(1)] = (5));

} else {
var statearr_29675_29738 = state_29668__$1;
(statearr_29675_29738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (15))){
var inst_29646 = (state_29668[(8)]);
var state_29668__$1 = state_29668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29668__$1,(18),to,inst_29646);
} else {
if((state_val_29669 === (21))){
var inst_29659 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
var statearr_29676_29739 = state_29668__$1;
(statearr_29676_29739[(2)] = inst_29659);

(statearr_29676_29739[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (13))){
var inst_29661 = (state_29668[(2)]);
var state_29668__$1 = (function (){var statearr_29677 = state_29668;
(statearr_29677[(9)] = inst_29661);

return statearr_29677;
})();
var statearr_29678_29740 = state_29668__$1;
(statearr_29678_29740[(2)] = null);

(statearr_29678_29740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (6))){
var inst_29633 = (state_29668[(7)]);
var state_29668__$1 = state_29668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29668__$1,(11),inst_29633);
} else {
if((state_val_29669 === (17))){
var inst_29654 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
if(cljs.core.truth_(inst_29654)){
var statearr_29679_29741 = state_29668__$1;
(statearr_29679_29741[(1)] = (19));

} else {
var statearr_29680_29742 = state_29668__$1;
(statearr_29680_29742[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (3))){
var inst_29666 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29668__$1,inst_29666);
} else {
if((state_val_29669 === (12))){
var inst_29643 = (state_29668[(10)]);
var state_29668__$1 = state_29668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29668__$1,(14),inst_29643);
} else {
if((state_val_29669 === (2))){
var state_29668__$1 = state_29668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29668__$1,(4),results);
} else {
if((state_val_29669 === (19))){
var state_29668__$1 = state_29668;
var statearr_29681_29743 = state_29668__$1;
(statearr_29681_29743[(2)] = null);

(statearr_29681_29743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (11))){
var inst_29643 = (state_29668[(2)]);
var state_29668__$1 = (function (){var statearr_29682 = state_29668;
(statearr_29682[(10)] = inst_29643);

return statearr_29682;
})();
var statearr_29683_29744 = state_29668__$1;
(statearr_29683_29744[(2)] = null);

(statearr_29683_29744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (9))){
var state_29668__$1 = state_29668;
var statearr_29684_29745 = state_29668__$1;
(statearr_29684_29745[(2)] = null);

(statearr_29684_29745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (5))){
var state_29668__$1 = state_29668;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29685_29746 = state_29668__$1;
(statearr_29685_29746[(1)] = (8));

} else {
var statearr_29686_29747 = state_29668__$1;
(statearr_29686_29747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (14))){
var inst_29648 = (state_29668[(11)]);
var inst_29646 = (state_29668[(8)]);
var inst_29646__$1 = (state_29668[(2)]);
var inst_29647 = (inst_29646__$1 == null);
var inst_29648__$1 = cljs.core.not.call(null,inst_29647);
var state_29668__$1 = (function (){var statearr_29687 = state_29668;
(statearr_29687[(11)] = inst_29648__$1);

(statearr_29687[(8)] = inst_29646__$1);

return statearr_29687;
})();
if(inst_29648__$1){
var statearr_29688_29748 = state_29668__$1;
(statearr_29688_29748[(1)] = (15));

} else {
var statearr_29689_29749 = state_29668__$1;
(statearr_29689_29749[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (16))){
var inst_29648 = (state_29668[(11)]);
var state_29668__$1 = state_29668;
var statearr_29690_29750 = state_29668__$1;
(statearr_29690_29750[(2)] = inst_29648);

(statearr_29690_29750[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (10))){
var inst_29640 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
var statearr_29691_29751 = state_29668__$1;
(statearr_29691_29751[(2)] = inst_29640);

(statearr_29691_29751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (18))){
var inst_29651 = (state_29668[(2)]);
var state_29668__$1 = state_29668;
var statearr_29692_29752 = state_29668__$1;
(statearr_29692_29752[(2)] = inst_29651);

(statearr_29692_29752[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29669 === (8))){
var inst_29637 = cljs.core.async.close_BANG_.call(null,to);
var state_29668__$1 = state_29668;
var statearr_29693_29753 = state_29668__$1;
(statearr_29693_29753[(2)] = inst_29637);

(statearr_29693_29753[(1)] = (10));


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
});})(c__29362__auto__,jobs,results,process,async))
;
return ((function (switch__29271__auto__,c__29362__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____0 = (function (){
var statearr_29694 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__);

(statearr_29694[(1)] = (1));

return statearr_29694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____1 = (function (state_29668){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_29668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e29695){if((e29695 instanceof Object)){
var ex__29275__auto__ = e29695;
var statearr_29696_29754 = state_29668;
(statearr_29696_29754[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29755 = state_29668;
state_29668 = G__29755;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__ = function(state_29668){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____1.call(this,state_29668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29272__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto__,jobs,results,process,async))
})();
var state__29364__auto__ = (function (){var statearr_29697 = f__29363__auto__.call(null);
(statearr_29697[(6)] = c__29362__auto__);

return statearr_29697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto__,jobs,results,process,async))
);

return c__29362__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29757 = arguments.length;
switch (G__29757) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29760 = arguments.length;
switch (G__29760) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29763 = arguments.length;
switch (G__29763) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29362__auto___29812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___29812,tc,fc){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___29812,tc,fc){
return (function (state_29789){
var state_val_29790 = (state_29789[(1)]);
if((state_val_29790 === (7))){
var inst_29785 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
var statearr_29791_29813 = state_29789__$1;
(statearr_29791_29813[(2)] = inst_29785);

(statearr_29791_29813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (1))){
var state_29789__$1 = state_29789;
var statearr_29792_29814 = state_29789__$1;
(statearr_29792_29814[(2)] = null);

(statearr_29792_29814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (4))){
var inst_29766 = (state_29789[(7)]);
var inst_29766__$1 = (state_29789[(2)]);
var inst_29767 = (inst_29766__$1 == null);
var state_29789__$1 = (function (){var statearr_29793 = state_29789;
(statearr_29793[(7)] = inst_29766__$1);

return statearr_29793;
})();
if(cljs.core.truth_(inst_29767)){
var statearr_29794_29815 = state_29789__$1;
(statearr_29794_29815[(1)] = (5));

} else {
var statearr_29795_29816 = state_29789__$1;
(statearr_29795_29816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (13))){
var state_29789__$1 = state_29789;
var statearr_29796_29817 = state_29789__$1;
(statearr_29796_29817[(2)] = null);

(statearr_29796_29817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (6))){
var inst_29766 = (state_29789[(7)]);
var inst_29772 = p.call(null,inst_29766);
var state_29789__$1 = state_29789;
if(cljs.core.truth_(inst_29772)){
var statearr_29797_29818 = state_29789__$1;
(statearr_29797_29818[(1)] = (9));

} else {
var statearr_29798_29819 = state_29789__$1;
(statearr_29798_29819[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (3))){
var inst_29787 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29789__$1,inst_29787);
} else {
if((state_val_29790 === (12))){
var state_29789__$1 = state_29789;
var statearr_29799_29820 = state_29789__$1;
(statearr_29799_29820[(2)] = null);

(statearr_29799_29820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (2))){
var state_29789__$1 = state_29789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29789__$1,(4),ch);
} else {
if((state_val_29790 === (11))){
var inst_29766 = (state_29789[(7)]);
var inst_29776 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29789__$1,(8),inst_29776,inst_29766);
} else {
if((state_val_29790 === (9))){
var state_29789__$1 = state_29789;
var statearr_29800_29821 = state_29789__$1;
(statearr_29800_29821[(2)] = tc);

(statearr_29800_29821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (5))){
var inst_29769 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29770 = cljs.core.async.close_BANG_.call(null,fc);
var state_29789__$1 = (function (){var statearr_29801 = state_29789;
(statearr_29801[(8)] = inst_29769);

return statearr_29801;
})();
var statearr_29802_29822 = state_29789__$1;
(statearr_29802_29822[(2)] = inst_29770);

(statearr_29802_29822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (14))){
var inst_29783 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
var statearr_29803_29823 = state_29789__$1;
(statearr_29803_29823[(2)] = inst_29783);

(statearr_29803_29823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (10))){
var state_29789__$1 = state_29789;
var statearr_29804_29824 = state_29789__$1;
(statearr_29804_29824[(2)] = fc);

(statearr_29804_29824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (8))){
var inst_29778 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
if(cljs.core.truth_(inst_29778)){
var statearr_29805_29825 = state_29789__$1;
(statearr_29805_29825[(1)] = (12));

} else {
var statearr_29806_29826 = state_29789__$1;
(statearr_29806_29826[(1)] = (13));

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
});})(c__29362__auto___29812,tc,fc))
;
return ((function (switch__29271__auto__,c__29362__auto___29812,tc,fc){
return (function() {
var cljs$core$async$state_machine__29272__auto__ = null;
var cljs$core$async$state_machine__29272__auto____0 = (function (){
var statearr_29807 = [null,null,null,null,null,null,null,null,null];
(statearr_29807[(0)] = cljs$core$async$state_machine__29272__auto__);

(statearr_29807[(1)] = (1));

return statearr_29807;
});
var cljs$core$async$state_machine__29272__auto____1 = (function (state_29789){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_29789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e29808){if((e29808 instanceof Object)){
var ex__29275__auto__ = e29808;
var statearr_29809_29827 = state_29789;
(statearr_29809_29827[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29828 = state_29789;
state_29789 = G__29828;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$state_machine__29272__auto__ = function(state_29789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29272__auto____1.call(this,state_29789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29272__auto____0;
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29272__auto____1;
return cljs$core$async$state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___29812,tc,fc))
})();
var state__29364__auto__ = (function (){var statearr_29810 = f__29363__auto__.call(null);
(statearr_29810[(6)] = c__29362__auto___29812);

return statearr_29810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___29812,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto__){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto__){
return (function (state_29849){
var state_val_29850 = (state_29849[(1)]);
if((state_val_29850 === (7))){
var inst_29845 = (state_29849[(2)]);
var state_29849__$1 = state_29849;
var statearr_29851_29869 = state_29849__$1;
(statearr_29851_29869[(2)] = inst_29845);

(statearr_29851_29869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29850 === (1))){
var inst_29829 = init;
var state_29849__$1 = (function (){var statearr_29852 = state_29849;
(statearr_29852[(7)] = inst_29829);

return statearr_29852;
})();
var statearr_29853_29870 = state_29849__$1;
(statearr_29853_29870[(2)] = null);

(statearr_29853_29870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29850 === (4))){
var inst_29832 = (state_29849[(8)]);
var inst_29832__$1 = (state_29849[(2)]);
var inst_29833 = (inst_29832__$1 == null);
var state_29849__$1 = (function (){var statearr_29854 = state_29849;
(statearr_29854[(8)] = inst_29832__$1);

return statearr_29854;
})();
if(cljs.core.truth_(inst_29833)){
var statearr_29855_29871 = state_29849__$1;
(statearr_29855_29871[(1)] = (5));

} else {
var statearr_29856_29872 = state_29849__$1;
(statearr_29856_29872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29850 === (6))){
var inst_29832 = (state_29849[(8)]);
var inst_29829 = (state_29849[(7)]);
var inst_29836 = (state_29849[(9)]);
var inst_29836__$1 = f.call(null,inst_29829,inst_29832);
var inst_29837 = cljs.core.reduced_QMARK_.call(null,inst_29836__$1);
var state_29849__$1 = (function (){var statearr_29857 = state_29849;
(statearr_29857[(9)] = inst_29836__$1);

return statearr_29857;
})();
if(inst_29837){
var statearr_29858_29873 = state_29849__$1;
(statearr_29858_29873[(1)] = (8));

} else {
var statearr_29859_29874 = state_29849__$1;
(statearr_29859_29874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29850 === (3))){
var inst_29847 = (state_29849[(2)]);
var state_29849__$1 = state_29849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29849__$1,inst_29847);
} else {
if((state_val_29850 === (2))){
var state_29849__$1 = state_29849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29849__$1,(4),ch);
} else {
if((state_val_29850 === (9))){
var inst_29836 = (state_29849[(9)]);
var inst_29829 = inst_29836;
var state_29849__$1 = (function (){var statearr_29860 = state_29849;
(statearr_29860[(7)] = inst_29829);

return statearr_29860;
})();
var statearr_29861_29875 = state_29849__$1;
(statearr_29861_29875[(2)] = null);

(statearr_29861_29875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29850 === (5))){
var inst_29829 = (state_29849[(7)]);
var state_29849__$1 = state_29849;
var statearr_29862_29876 = state_29849__$1;
(statearr_29862_29876[(2)] = inst_29829);

(statearr_29862_29876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29850 === (10))){
var inst_29843 = (state_29849[(2)]);
var state_29849__$1 = state_29849;
var statearr_29863_29877 = state_29849__$1;
(statearr_29863_29877[(2)] = inst_29843);

(statearr_29863_29877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29850 === (8))){
var inst_29836 = (state_29849[(9)]);
var inst_29839 = cljs.core.deref.call(null,inst_29836);
var state_29849__$1 = state_29849;
var statearr_29864_29878 = state_29849__$1;
(statearr_29864_29878[(2)] = inst_29839);

(statearr_29864_29878[(1)] = (10));


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
});})(c__29362__auto__))
;
return ((function (switch__29271__auto__,c__29362__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29272__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29272__auto____0 = (function (){
var statearr_29865 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29865[(0)] = cljs$core$async$reduce_$_state_machine__29272__auto__);

(statearr_29865[(1)] = (1));

return statearr_29865;
});
var cljs$core$async$reduce_$_state_machine__29272__auto____1 = (function (state_29849){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_29849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e29866){if((e29866 instanceof Object)){
var ex__29275__auto__ = e29866;
var statearr_29867_29879 = state_29849;
(statearr_29867_29879[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29880 = state_29849;
state_29849 = G__29880;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29272__auto__ = function(state_29849){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29272__auto____1.call(this,state_29849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29272__auto____0;
cljs$core$async$reduce_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29272__auto____1;
return cljs$core$async$reduce_$_state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto__))
})();
var state__29364__auto__ = (function (){var statearr_29868 = f__29363__auto__.call(null);
(statearr_29868[(6)] = c__29362__auto__);

return statearr_29868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto__))
);

return c__29362__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto__,f__$1){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto__,f__$1){
return (function (state_29886){
var state_val_29887 = (state_29886[(1)]);
if((state_val_29887 === (1))){
var inst_29881 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29886__$1 = state_29886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29886__$1,(2),inst_29881);
} else {
if((state_val_29887 === (2))){
var inst_29883 = (state_29886[(2)]);
var inst_29884 = f__$1.call(null,inst_29883);
var state_29886__$1 = state_29886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29886__$1,inst_29884);
} else {
return null;
}
}
});})(c__29362__auto__,f__$1))
;
return ((function (switch__29271__auto__,c__29362__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29272__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29272__auto____0 = (function (){
var statearr_29888 = [null,null,null,null,null,null,null];
(statearr_29888[(0)] = cljs$core$async$transduce_$_state_machine__29272__auto__);

(statearr_29888[(1)] = (1));

return statearr_29888;
});
var cljs$core$async$transduce_$_state_machine__29272__auto____1 = (function (state_29886){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_29886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e29889){if((e29889 instanceof Object)){
var ex__29275__auto__ = e29889;
var statearr_29890_29892 = state_29886;
(statearr_29890_29892[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29893 = state_29886;
state_29886 = G__29893;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29272__auto__ = function(state_29886){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29272__auto____1.call(this,state_29886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29272__auto____0;
cljs$core$async$transduce_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29272__auto____1;
return cljs$core$async$transduce_$_state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto__,f__$1))
})();
var state__29364__auto__ = (function (){var statearr_29891 = f__29363__auto__.call(null);
(statearr_29891[(6)] = c__29362__auto__);

return statearr_29891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto__,f__$1))
);

return c__29362__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29895 = arguments.length;
switch (G__29895) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto__){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto__){
return (function (state_29920){
var state_val_29921 = (state_29920[(1)]);
if((state_val_29921 === (7))){
var inst_29902 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
var statearr_29922_29943 = state_29920__$1;
(statearr_29922_29943[(2)] = inst_29902);

(statearr_29922_29943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (1))){
var inst_29896 = cljs.core.seq.call(null,coll);
var inst_29897 = inst_29896;
var state_29920__$1 = (function (){var statearr_29923 = state_29920;
(statearr_29923[(7)] = inst_29897);

return statearr_29923;
})();
var statearr_29924_29944 = state_29920__$1;
(statearr_29924_29944[(2)] = null);

(statearr_29924_29944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (4))){
var inst_29897 = (state_29920[(7)]);
var inst_29900 = cljs.core.first.call(null,inst_29897);
var state_29920__$1 = state_29920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29920__$1,(7),ch,inst_29900);
} else {
if((state_val_29921 === (13))){
var inst_29914 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
var statearr_29925_29945 = state_29920__$1;
(statearr_29925_29945[(2)] = inst_29914);

(statearr_29925_29945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (6))){
var inst_29905 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
if(cljs.core.truth_(inst_29905)){
var statearr_29926_29946 = state_29920__$1;
(statearr_29926_29946[(1)] = (8));

} else {
var statearr_29927_29947 = state_29920__$1;
(statearr_29927_29947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (3))){
var inst_29918 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29920__$1,inst_29918);
} else {
if((state_val_29921 === (12))){
var state_29920__$1 = state_29920;
var statearr_29928_29948 = state_29920__$1;
(statearr_29928_29948[(2)] = null);

(statearr_29928_29948[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (2))){
var inst_29897 = (state_29920[(7)]);
var state_29920__$1 = state_29920;
if(cljs.core.truth_(inst_29897)){
var statearr_29929_29949 = state_29920__$1;
(statearr_29929_29949[(1)] = (4));

} else {
var statearr_29930_29950 = state_29920__$1;
(statearr_29930_29950[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (11))){
var inst_29911 = cljs.core.async.close_BANG_.call(null,ch);
var state_29920__$1 = state_29920;
var statearr_29931_29951 = state_29920__$1;
(statearr_29931_29951[(2)] = inst_29911);

(statearr_29931_29951[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (9))){
var state_29920__$1 = state_29920;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29932_29952 = state_29920__$1;
(statearr_29932_29952[(1)] = (11));

} else {
var statearr_29933_29953 = state_29920__$1;
(statearr_29933_29953[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (5))){
var inst_29897 = (state_29920[(7)]);
var state_29920__$1 = state_29920;
var statearr_29934_29954 = state_29920__$1;
(statearr_29934_29954[(2)] = inst_29897);

(statearr_29934_29954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (10))){
var inst_29916 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
var statearr_29935_29955 = state_29920__$1;
(statearr_29935_29955[(2)] = inst_29916);

(statearr_29935_29955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (8))){
var inst_29897 = (state_29920[(7)]);
var inst_29907 = cljs.core.next.call(null,inst_29897);
var inst_29897__$1 = inst_29907;
var state_29920__$1 = (function (){var statearr_29936 = state_29920;
(statearr_29936[(7)] = inst_29897__$1);

return statearr_29936;
})();
var statearr_29937_29956 = state_29920__$1;
(statearr_29937_29956[(2)] = null);

(statearr_29937_29956[(1)] = (2));


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
});})(c__29362__auto__))
;
return ((function (switch__29271__auto__,c__29362__auto__){
return (function() {
var cljs$core$async$state_machine__29272__auto__ = null;
var cljs$core$async$state_machine__29272__auto____0 = (function (){
var statearr_29938 = [null,null,null,null,null,null,null,null];
(statearr_29938[(0)] = cljs$core$async$state_machine__29272__auto__);

(statearr_29938[(1)] = (1));

return statearr_29938;
});
var cljs$core$async$state_machine__29272__auto____1 = (function (state_29920){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_29920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e29939){if((e29939 instanceof Object)){
var ex__29275__auto__ = e29939;
var statearr_29940_29957 = state_29920;
(statearr_29940_29957[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29958 = state_29920;
state_29920 = G__29958;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$state_machine__29272__auto__ = function(state_29920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29272__auto____1.call(this,state_29920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29272__auto____0;
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29272__auto____1;
return cljs$core$async$state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto__))
})();
var state__29364__auto__ = (function (){var statearr_29941 = f__29363__auto__.call(null);
(statearr_29941[(6)] = c__29362__auto__);

return statearr_29941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto__))
);

return c__29362__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29959 = (function (ch,cs,meta29960){
this.ch = ch;
this.cs = cs;
this.meta29960 = meta29960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29961,meta29960__$1){
var self__ = this;
var _29961__$1 = this;
return (new cljs.core.async.t_cljs$core$async29959(self__.ch,self__.cs,meta29960__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29959.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29961){
var self__ = this;
var _29961__$1 = this;
return self__.meta29960;
});})(cs))
;

cljs.core.async.t_cljs$core$async29959.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29959.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29959.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29959.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29959.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29959.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29959.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29960","meta29960",-1443185931,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29959.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29959";

cljs.core.async.t_cljs$core$async29959.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29959");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29959.
 */
cljs.core.async.__GT_t_cljs$core$async29959 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29959(ch__$1,cs__$1,meta29960){
return (new cljs.core.async.t_cljs$core$async29959(ch__$1,cs__$1,meta29960));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29959(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29362__auto___30181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___30181,cs,m,dchan,dctr,done){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___30181,cs,m,dchan,dctr,done){
return (function (state_30096){
var state_val_30097 = (state_30096[(1)]);
if((state_val_30097 === (7))){
var inst_30092 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30098_30182 = state_30096__$1;
(statearr_30098_30182[(2)] = inst_30092);

(statearr_30098_30182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (20))){
var inst_29995 = (state_30096[(7)]);
var inst_30007 = cljs.core.first.call(null,inst_29995);
var inst_30008 = cljs.core.nth.call(null,inst_30007,(0),null);
var inst_30009 = cljs.core.nth.call(null,inst_30007,(1),null);
var state_30096__$1 = (function (){var statearr_30099 = state_30096;
(statearr_30099[(8)] = inst_30008);

return statearr_30099;
})();
if(cljs.core.truth_(inst_30009)){
var statearr_30100_30183 = state_30096__$1;
(statearr_30100_30183[(1)] = (22));

} else {
var statearr_30101_30184 = state_30096__$1;
(statearr_30101_30184[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (27))){
var inst_29964 = (state_30096[(9)]);
var inst_30044 = (state_30096[(10)]);
var inst_30039 = (state_30096[(11)]);
var inst_30037 = (state_30096[(12)]);
var inst_30044__$1 = cljs.core._nth.call(null,inst_30037,inst_30039);
var inst_30045 = cljs.core.async.put_BANG_.call(null,inst_30044__$1,inst_29964,done);
var state_30096__$1 = (function (){var statearr_30102 = state_30096;
(statearr_30102[(10)] = inst_30044__$1);

return statearr_30102;
})();
if(cljs.core.truth_(inst_30045)){
var statearr_30103_30185 = state_30096__$1;
(statearr_30103_30185[(1)] = (30));

} else {
var statearr_30104_30186 = state_30096__$1;
(statearr_30104_30186[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (1))){
var state_30096__$1 = state_30096;
var statearr_30105_30187 = state_30096__$1;
(statearr_30105_30187[(2)] = null);

(statearr_30105_30187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (24))){
var inst_29995 = (state_30096[(7)]);
var inst_30014 = (state_30096[(2)]);
var inst_30015 = cljs.core.next.call(null,inst_29995);
var inst_29973 = inst_30015;
var inst_29974 = null;
var inst_29975 = (0);
var inst_29976 = (0);
var state_30096__$1 = (function (){var statearr_30106 = state_30096;
(statearr_30106[(13)] = inst_29976);

(statearr_30106[(14)] = inst_29975);

(statearr_30106[(15)] = inst_30014);

(statearr_30106[(16)] = inst_29974);

(statearr_30106[(17)] = inst_29973);

return statearr_30106;
})();
var statearr_30107_30188 = state_30096__$1;
(statearr_30107_30188[(2)] = null);

(statearr_30107_30188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (39))){
var state_30096__$1 = state_30096;
var statearr_30111_30189 = state_30096__$1;
(statearr_30111_30189[(2)] = null);

(statearr_30111_30189[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (4))){
var inst_29964 = (state_30096[(9)]);
var inst_29964__$1 = (state_30096[(2)]);
var inst_29965 = (inst_29964__$1 == null);
var state_30096__$1 = (function (){var statearr_30112 = state_30096;
(statearr_30112[(9)] = inst_29964__$1);

return statearr_30112;
})();
if(cljs.core.truth_(inst_29965)){
var statearr_30113_30190 = state_30096__$1;
(statearr_30113_30190[(1)] = (5));

} else {
var statearr_30114_30191 = state_30096__$1;
(statearr_30114_30191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (15))){
var inst_29976 = (state_30096[(13)]);
var inst_29975 = (state_30096[(14)]);
var inst_29974 = (state_30096[(16)]);
var inst_29973 = (state_30096[(17)]);
var inst_29991 = (state_30096[(2)]);
var inst_29992 = (inst_29976 + (1));
var tmp30108 = inst_29975;
var tmp30109 = inst_29974;
var tmp30110 = inst_29973;
var inst_29973__$1 = tmp30110;
var inst_29974__$1 = tmp30109;
var inst_29975__$1 = tmp30108;
var inst_29976__$1 = inst_29992;
var state_30096__$1 = (function (){var statearr_30115 = state_30096;
(statearr_30115[(18)] = inst_29991);

(statearr_30115[(13)] = inst_29976__$1);

(statearr_30115[(14)] = inst_29975__$1);

(statearr_30115[(16)] = inst_29974__$1);

(statearr_30115[(17)] = inst_29973__$1);

return statearr_30115;
})();
var statearr_30116_30192 = state_30096__$1;
(statearr_30116_30192[(2)] = null);

(statearr_30116_30192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (21))){
var inst_30018 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30120_30193 = state_30096__$1;
(statearr_30120_30193[(2)] = inst_30018);

(statearr_30120_30193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (31))){
var inst_30044 = (state_30096[(10)]);
var inst_30048 = done.call(null,null);
var inst_30049 = cljs.core.async.untap_STAR_.call(null,m,inst_30044);
var state_30096__$1 = (function (){var statearr_30121 = state_30096;
(statearr_30121[(19)] = inst_30048);

return statearr_30121;
})();
var statearr_30122_30194 = state_30096__$1;
(statearr_30122_30194[(2)] = inst_30049);

(statearr_30122_30194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (32))){
var inst_30036 = (state_30096[(20)]);
var inst_30038 = (state_30096[(21)]);
var inst_30039 = (state_30096[(11)]);
var inst_30037 = (state_30096[(12)]);
var inst_30051 = (state_30096[(2)]);
var inst_30052 = (inst_30039 + (1));
var tmp30117 = inst_30036;
var tmp30118 = inst_30038;
var tmp30119 = inst_30037;
var inst_30036__$1 = tmp30117;
var inst_30037__$1 = tmp30119;
var inst_30038__$1 = tmp30118;
var inst_30039__$1 = inst_30052;
var state_30096__$1 = (function (){var statearr_30123 = state_30096;
(statearr_30123[(20)] = inst_30036__$1);

(statearr_30123[(21)] = inst_30038__$1);

(statearr_30123[(11)] = inst_30039__$1);

(statearr_30123[(12)] = inst_30037__$1);

(statearr_30123[(22)] = inst_30051);

return statearr_30123;
})();
var statearr_30124_30195 = state_30096__$1;
(statearr_30124_30195[(2)] = null);

(statearr_30124_30195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (40))){
var inst_30064 = (state_30096[(23)]);
var inst_30068 = done.call(null,null);
var inst_30069 = cljs.core.async.untap_STAR_.call(null,m,inst_30064);
var state_30096__$1 = (function (){var statearr_30125 = state_30096;
(statearr_30125[(24)] = inst_30068);

return statearr_30125;
})();
var statearr_30126_30196 = state_30096__$1;
(statearr_30126_30196[(2)] = inst_30069);

(statearr_30126_30196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (33))){
var inst_30055 = (state_30096[(25)]);
var inst_30057 = cljs.core.chunked_seq_QMARK_.call(null,inst_30055);
var state_30096__$1 = state_30096;
if(inst_30057){
var statearr_30127_30197 = state_30096__$1;
(statearr_30127_30197[(1)] = (36));

} else {
var statearr_30128_30198 = state_30096__$1;
(statearr_30128_30198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (13))){
var inst_29985 = (state_30096[(26)]);
var inst_29988 = cljs.core.async.close_BANG_.call(null,inst_29985);
var state_30096__$1 = state_30096;
var statearr_30129_30199 = state_30096__$1;
(statearr_30129_30199[(2)] = inst_29988);

(statearr_30129_30199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (22))){
var inst_30008 = (state_30096[(8)]);
var inst_30011 = cljs.core.async.close_BANG_.call(null,inst_30008);
var state_30096__$1 = state_30096;
var statearr_30130_30200 = state_30096__$1;
(statearr_30130_30200[(2)] = inst_30011);

(statearr_30130_30200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (36))){
var inst_30055 = (state_30096[(25)]);
var inst_30059 = cljs.core.chunk_first.call(null,inst_30055);
var inst_30060 = cljs.core.chunk_rest.call(null,inst_30055);
var inst_30061 = cljs.core.count.call(null,inst_30059);
var inst_30036 = inst_30060;
var inst_30037 = inst_30059;
var inst_30038 = inst_30061;
var inst_30039 = (0);
var state_30096__$1 = (function (){var statearr_30131 = state_30096;
(statearr_30131[(20)] = inst_30036);

(statearr_30131[(21)] = inst_30038);

(statearr_30131[(11)] = inst_30039);

(statearr_30131[(12)] = inst_30037);

return statearr_30131;
})();
var statearr_30132_30201 = state_30096__$1;
(statearr_30132_30201[(2)] = null);

(statearr_30132_30201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (41))){
var inst_30055 = (state_30096[(25)]);
var inst_30071 = (state_30096[(2)]);
var inst_30072 = cljs.core.next.call(null,inst_30055);
var inst_30036 = inst_30072;
var inst_30037 = null;
var inst_30038 = (0);
var inst_30039 = (0);
var state_30096__$1 = (function (){var statearr_30133 = state_30096;
(statearr_30133[(20)] = inst_30036);

(statearr_30133[(27)] = inst_30071);

(statearr_30133[(21)] = inst_30038);

(statearr_30133[(11)] = inst_30039);

(statearr_30133[(12)] = inst_30037);

return statearr_30133;
})();
var statearr_30134_30202 = state_30096__$1;
(statearr_30134_30202[(2)] = null);

(statearr_30134_30202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (43))){
var state_30096__$1 = state_30096;
var statearr_30135_30203 = state_30096__$1;
(statearr_30135_30203[(2)] = null);

(statearr_30135_30203[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (29))){
var inst_30080 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30136_30204 = state_30096__$1;
(statearr_30136_30204[(2)] = inst_30080);

(statearr_30136_30204[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (44))){
var inst_30089 = (state_30096[(2)]);
var state_30096__$1 = (function (){var statearr_30137 = state_30096;
(statearr_30137[(28)] = inst_30089);

return statearr_30137;
})();
var statearr_30138_30205 = state_30096__$1;
(statearr_30138_30205[(2)] = null);

(statearr_30138_30205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (6))){
var inst_30028 = (state_30096[(29)]);
var inst_30027 = cljs.core.deref.call(null,cs);
var inst_30028__$1 = cljs.core.keys.call(null,inst_30027);
var inst_30029 = cljs.core.count.call(null,inst_30028__$1);
var inst_30030 = cljs.core.reset_BANG_.call(null,dctr,inst_30029);
var inst_30035 = cljs.core.seq.call(null,inst_30028__$1);
var inst_30036 = inst_30035;
var inst_30037 = null;
var inst_30038 = (0);
var inst_30039 = (0);
var state_30096__$1 = (function (){var statearr_30139 = state_30096;
(statearr_30139[(20)] = inst_30036);

(statearr_30139[(21)] = inst_30038);

(statearr_30139[(29)] = inst_30028__$1);

(statearr_30139[(30)] = inst_30030);

(statearr_30139[(11)] = inst_30039);

(statearr_30139[(12)] = inst_30037);

return statearr_30139;
})();
var statearr_30140_30206 = state_30096__$1;
(statearr_30140_30206[(2)] = null);

(statearr_30140_30206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (28))){
var inst_30036 = (state_30096[(20)]);
var inst_30055 = (state_30096[(25)]);
var inst_30055__$1 = cljs.core.seq.call(null,inst_30036);
var state_30096__$1 = (function (){var statearr_30141 = state_30096;
(statearr_30141[(25)] = inst_30055__$1);

return statearr_30141;
})();
if(inst_30055__$1){
var statearr_30142_30207 = state_30096__$1;
(statearr_30142_30207[(1)] = (33));

} else {
var statearr_30143_30208 = state_30096__$1;
(statearr_30143_30208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (25))){
var inst_30038 = (state_30096[(21)]);
var inst_30039 = (state_30096[(11)]);
var inst_30041 = (inst_30039 < inst_30038);
var inst_30042 = inst_30041;
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30042)){
var statearr_30144_30209 = state_30096__$1;
(statearr_30144_30209[(1)] = (27));

} else {
var statearr_30145_30210 = state_30096__$1;
(statearr_30145_30210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (34))){
var state_30096__$1 = state_30096;
var statearr_30146_30211 = state_30096__$1;
(statearr_30146_30211[(2)] = null);

(statearr_30146_30211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (17))){
var state_30096__$1 = state_30096;
var statearr_30147_30212 = state_30096__$1;
(statearr_30147_30212[(2)] = null);

(statearr_30147_30212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (3))){
var inst_30094 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30096__$1,inst_30094);
} else {
if((state_val_30097 === (12))){
var inst_30023 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30148_30213 = state_30096__$1;
(statearr_30148_30213[(2)] = inst_30023);

(statearr_30148_30213[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (2))){
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30096__$1,(4),ch);
} else {
if((state_val_30097 === (23))){
var state_30096__$1 = state_30096;
var statearr_30149_30214 = state_30096__$1;
(statearr_30149_30214[(2)] = null);

(statearr_30149_30214[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (35))){
var inst_30078 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30150_30215 = state_30096__$1;
(statearr_30150_30215[(2)] = inst_30078);

(statearr_30150_30215[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (19))){
var inst_29995 = (state_30096[(7)]);
var inst_29999 = cljs.core.chunk_first.call(null,inst_29995);
var inst_30000 = cljs.core.chunk_rest.call(null,inst_29995);
var inst_30001 = cljs.core.count.call(null,inst_29999);
var inst_29973 = inst_30000;
var inst_29974 = inst_29999;
var inst_29975 = inst_30001;
var inst_29976 = (0);
var state_30096__$1 = (function (){var statearr_30151 = state_30096;
(statearr_30151[(13)] = inst_29976);

(statearr_30151[(14)] = inst_29975);

(statearr_30151[(16)] = inst_29974);

(statearr_30151[(17)] = inst_29973);

return statearr_30151;
})();
var statearr_30152_30216 = state_30096__$1;
(statearr_30152_30216[(2)] = null);

(statearr_30152_30216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (11))){
var inst_29995 = (state_30096[(7)]);
var inst_29973 = (state_30096[(17)]);
var inst_29995__$1 = cljs.core.seq.call(null,inst_29973);
var state_30096__$1 = (function (){var statearr_30153 = state_30096;
(statearr_30153[(7)] = inst_29995__$1);

return statearr_30153;
})();
if(inst_29995__$1){
var statearr_30154_30217 = state_30096__$1;
(statearr_30154_30217[(1)] = (16));

} else {
var statearr_30155_30218 = state_30096__$1;
(statearr_30155_30218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (9))){
var inst_30025 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30156_30219 = state_30096__$1;
(statearr_30156_30219[(2)] = inst_30025);

(statearr_30156_30219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (5))){
var inst_29971 = cljs.core.deref.call(null,cs);
var inst_29972 = cljs.core.seq.call(null,inst_29971);
var inst_29973 = inst_29972;
var inst_29974 = null;
var inst_29975 = (0);
var inst_29976 = (0);
var state_30096__$1 = (function (){var statearr_30157 = state_30096;
(statearr_30157[(13)] = inst_29976);

(statearr_30157[(14)] = inst_29975);

(statearr_30157[(16)] = inst_29974);

(statearr_30157[(17)] = inst_29973);

return statearr_30157;
})();
var statearr_30158_30220 = state_30096__$1;
(statearr_30158_30220[(2)] = null);

(statearr_30158_30220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (14))){
var state_30096__$1 = state_30096;
var statearr_30159_30221 = state_30096__$1;
(statearr_30159_30221[(2)] = null);

(statearr_30159_30221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (45))){
var inst_30086 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30160_30222 = state_30096__$1;
(statearr_30160_30222[(2)] = inst_30086);

(statearr_30160_30222[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (26))){
var inst_30028 = (state_30096[(29)]);
var inst_30082 = (state_30096[(2)]);
var inst_30083 = cljs.core.seq.call(null,inst_30028);
var state_30096__$1 = (function (){var statearr_30161 = state_30096;
(statearr_30161[(31)] = inst_30082);

return statearr_30161;
})();
if(inst_30083){
var statearr_30162_30223 = state_30096__$1;
(statearr_30162_30223[(1)] = (42));

} else {
var statearr_30163_30224 = state_30096__$1;
(statearr_30163_30224[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (16))){
var inst_29995 = (state_30096[(7)]);
var inst_29997 = cljs.core.chunked_seq_QMARK_.call(null,inst_29995);
var state_30096__$1 = state_30096;
if(inst_29997){
var statearr_30164_30225 = state_30096__$1;
(statearr_30164_30225[(1)] = (19));

} else {
var statearr_30165_30226 = state_30096__$1;
(statearr_30165_30226[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (38))){
var inst_30075 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30166_30227 = state_30096__$1;
(statearr_30166_30227[(2)] = inst_30075);

(statearr_30166_30227[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (30))){
var state_30096__$1 = state_30096;
var statearr_30167_30228 = state_30096__$1;
(statearr_30167_30228[(2)] = null);

(statearr_30167_30228[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (10))){
var inst_29976 = (state_30096[(13)]);
var inst_29974 = (state_30096[(16)]);
var inst_29984 = cljs.core._nth.call(null,inst_29974,inst_29976);
var inst_29985 = cljs.core.nth.call(null,inst_29984,(0),null);
var inst_29986 = cljs.core.nth.call(null,inst_29984,(1),null);
var state_30096__$1 = (function (){var statearr_30168 = state_30096;
(statearr_30168[(26)] = inst_29985);

return statearr_30168;
})();
if(cljs.core.truth_(inst_29986)){
var statearr_30169_30229 = state_30096__$1;
(statearr_30169_30229[(1)] = (13));

} else {
var statearr_30170_30230 = state_30096__$1;
(statearr_30170_30230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (18))){
var inst_30021 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30171_30231 = state_30096__$1;
(statearr_30171_30231[(2)] = inst_30021);

(statearr_30171_30231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (42))){
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30096__$1,(45),dchan);
} else {
if((state_val_30097 === (37))){
var inst_29964 = (state_30096[(9)]);
var inst_30055 = (state_30096[(25)]);
var inst_30064 = (state_30096[(23)]);
var inst_30064__$1 = cljs.core.first.call(null,inst_30055);
var inst_30065 = cljs.core.async.put_BANG_.call(null,inst_30064__$1,inst_29964,done);
var state_30096__$1 = (function (){var statearr_30172 = state_30096;
(statearr_30172[(23)] = inst_30064__$1);

return statearr_30172;
})();
if(cljs.core.truth_(inst_30065)){
var statearr_30173_30232 = state_30096__$1;
(statearr_30173_30232[(1)] = (39));

} else {
var statearr_30174_30233 = state_30096__$1;
(statearr_30174_30233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (8))){
var inst_29976 = (state_30096[(13)]);
var inst_29975 = (state_30096[(14)]);
var inst_29978 = (inst_29976 < inst_29975);
var inst_29979 = inst_29978;
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_29979)){
var statearr_30175_30234 = state_30096__$1;
(statearr_30175_30234[(1)] = (10));

} else {
var statearr_30176_30235 = state_30096__$1;
(statearr_30176_30235[(1)] = (11));

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
});})(c__29362__auto___30181,cs,m,dchan,dctr,done))
;
return ((function (switch__29271__auto__,c__29362__auto___30181,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29272__auto__ = null;
var cljs$core$async$mult_$_state_machine__29272__auto____0 = (function (){
var statearr_30177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30177[(0)] = cljs$core$async$mult_$_state_machine__29272__auto__);

(statearr_30177[(1)] = (1));

return statearr_30177;
});
var cljs$core$async$mult_$_state_machine__29272__auto____1 = (function (state_30096){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_30096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e30178){if((e30178 instanceof Object)){
var ex__29275__auto__ = e30178;
var statearr_30179_30236 = state_30096;
(statearr_30179_30236[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30237 = state_30096;
state_30096 = G__30237;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29272__auto__ = function(state_30096){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29272__auto____1.call(this,state_30096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29272__auto____0;
cljs$core$async$mult_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29272__auto____1;
return cljs$core$async$mult_$_state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___30181,cs,m,dchan,dctr,done))
})();
var state__29364__auto__ = (function (){var statearr_30180 = f__29363__auto__.call(null);
(statearr_30180[(6)] = c__29362__auto___30181);

return statearr_30180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___30181,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30239 = arguments.length;
switch (G__30239) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___30251 = arguments.length;
var i__4532__auto___30252 = (0);
while(true){
if((i__4532__auto___30252 < len__4531__auto___30251)){
args__4534__auto__.push((arguments[i__4532__auto___30252]));

var G__30253 = (i__4532__auto___30252 + (1));
i__4532__auto___30252 = G__30253;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30245){
var map__30246 = p__30245;
var map__30246__$1 = ((((!((map__30246 == null)))?(((((map__30246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30246):map__30246);
var opts = map__30246__$1;
var statearr_30248_30254 = state;
(statearr_30248_30254[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__30246,map__30246__$1,opts){
return (function (val){
var statearr_30249_30255 = state;
(statearr_30249_30255[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30246,map__30246__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_30250_30256 = state;
(statearr_30250_30256[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30241){
var G__30242 = cljs.core.first.call(null,seq30241);
var seq30241__$1 = cljs.core.next.call(null,seq30241);
var G__30243 = cljs.core.first.call(null,seq30241__$1);
var seq30241__$2 = cljs.core.next.call(null,seq30241__$1);
var G__30244 = cljs.core.first.call(null,seq30241__$2);
var seq30241__$3 = cljs.core.next.call(null,seq30241__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30242,G__30243,G__30244,seq30241__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30257 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30257 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta30258){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta30258 = meta30258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30259,meta30258__$1){
var self__ = this;
var _30259__$1 = this;
return (new cljs.core.async.t_cljs$core$async30257(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta30258__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30259){
var self__ = this;
var _30259__$1 = this;
return self__.meta30258;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30257.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30257.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta30258","meta30258",-1899820720,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30257";

cljs.core.async.t_cljs$core$async30257.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30257");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30257.
 */
cljs.core.async.__GT_t_cljs$core$async30257 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30257(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30258){
return (new cljs.core.async.t_cljs$core$async30257(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30258));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30257(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29362__auto___30421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___30421,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___30421,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30361){
var state_val_30362 = (state_30361[(1)]);
if((state_val_30362 === (7))){
var inst_30276 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
var statearr_30363_30422 = state_30361__$1;
(statearr_30363_30422[(2)] = inst_30276);

(statearr_30363_30422[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (20))){
var inst_30288 = (state_30361[(7)]);
var state_30361__$1 = state_30361;
var statearr_30364_30423 = state_30361__$1;
(statearr_30364_30423[(2)] = inst_30288);

(statearr_30364_30423[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (27))){
var state_30361__$1 = state_30361;
var statearr_30365_30424 = state_30361__$1;
(statearr_30365_30424[(2)] = null);

(statearr_30365_30424[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (1))){
var inst_30263 = (state_30361[(8)]);
var inst_30263__$1 = calc_state.call(null);
var inst_30265 = (inst_30263__$1 == null);
var inst_30266 = cljs.core.not.call(null,inst_30265);
var state_30361__$1 = (function (){var statearr_30366 = state_30361;
(statearr_30366[(8)] = inst_30263__$1);

return statearr_30366;
})();
if(inst_30266){
var statearr_30367_30425 = state_30361__$1;
(statearr_30367_30425[(1)] = (2));

} else {
var statearr_30368_30426 = state_30361__$1;
(statearr_30368_30426[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (24))){
var inst_30335 = (state_30361[(9)]);
var inst_30321 = (state_30361[(10)]);
var inst_30312 = (state_30361[(11)]);
var inst_30335__$1 = inst_30312.call(null,inst_30321);
var state_30361__$1 = (function (){var statearr_30369 = state_30361;
(statearr_30369[(9)] = inst_30335__$1);

return statearr_30369;
})();
if(cljs.core.truth_(inst_30335__$1)){
var statearr_30370_30427 = state_30361__$1;
(statearr_30370_30427[(1)] = (29));

} else {
var statearr_30371_30428 = state_30361__$1;
(statearr_30371_30428[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (4))){
var inst_30279 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
if(cljs.core.truth_(inst_30279)){
var statearr_30372_30429 = state_30361__$1;
(statearr_30372_30429[(1)] = (8));

} else {
var statearr_30373_30430 = state_30361__$1;
(statearr_30373_30430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (15))){
var inst_30306 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
if(cljs.core.truth_(inst_30306)){
var statearr_30374_30431 = state_30361__$1;
(statearr_30374_30431[(1)] = (19));

} else {
var statearr_30375_30432 = state_30361__$1;
(statearr_30375_30432[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (21))){
var inst_30311 = (state_30361[(12)]);
var inst_30311__$1 = (state_30361[(2)]);
var inst_30312 = cljs.core.get.call(null,inst_30311__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30313 = cljs.core.get.call(null,inst_30311__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30314 = cljs.core.get.call(null,inst_30311__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30361__$1 = (function (){var statearr_30376 = state_30361;
(statearr_30376[(12)] = inst_30311__$1);

(statearr_30376[(13)] = inst_30313);

(statearr_30376[(11)] = inst_30312);

return statearr_30376;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30361__$1,(22),inst_30314);
} else {
if((state_val_30362 === (31))){
var inst_30343 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
if(cljs.core.truth_(inst_30343)){
var statearr_30377_30433 = state_30361__$1;
(statearr_30377_30433[(1)] = (32));

} else {
var statearr_30378_30434 = state_30361__$1;
(statearr_30378_30434[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (32))){
var inst_30320 = (state_30361[(14)]);
var state_30361__$1 = state_30361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30361__$1,(35),out,inst_30320);
} else {
if((state_val_30362 === (33))){
var inst_30311 = (state_30361[(12)]);
var inst_30288 = inst_30311;
var state_30361__$1 = (function (){var statearr_30379 = state_30361;
(statearr_30379[(7)] = inst_30288);

return statearr_30379;
})();
var statearr_30380_30435 = state_30361__$1;
(statearr_30380_30435[(2)] = null);

(statearr_30380_30435[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (13))){
var inst_30288 = (state_30361[(7)]);
var inst_30295 = inst_30288.cljs$lang$protocol_mask$partition0$;
var inst_30296 = (inst_30295 & (64));
var inst_30297 = inst_30288.cljs$core$ISeq$;
var inst_30298 = (cljs.core.PROTOCOL_SENTINEL === inst_30297);
var inst_30299 = ((inst_30296) || (inst_30298));
var state_30361__$1 = state_30361;
if(cljs.core.truth_(inst_30299)){
var statearr_30381_30436 = state_30361__$1;
(statearr_30381_30436[(1)] = (16));

} else {
var statearr_30382_30437 = state_30361__$1;
(statearr_30382_30437[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (22))){
var inst_30321 = (state_30361[(10)]);
var inst_30320 = (state_30361[(14)]);
var inst_30319 = (state_30361[(2)]);
var inst_30320__$1 = cljs.core.nth.call(null,inst_30319,(0),null);
var inst_30321__$1 = cljs.core.nth.call(null,inst_30319,(1),null);
var inst_30322 = (inst_30320__$1 == null);
var inst_30323 = cljs.core._EQ_.call(null,inst_30321__$1,change);
var inst_30324 = ((inst_30322) || (inst_30323));
var state_30361__$1 = (function (){var statearr_30383 = state_30361;
(statearr_30383[(10)] = inst_30321__$1);

(statearr_30383[(14)] = inst_30320__$1);

return statearr_30383;
})();
if(cljs.core.truth_(inst_30324)){
var statearr_30384_30438 = state_30361__$1;
(statearr_30384_30438[(1)] = (23));

} else {
var statearr_30385_30439 = state_30361__$1;
(statearr_30385_30439[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (36))){
var inst_30311 = (state_30361[(12)]);
var inst_30288 = inst_30311;
var state_30361__$1 = (function (){var statearr_30386 = state_30361;
(statearr_30386[(7)] = inst_30288);

return statearr_30386;
})();
var statearr_30387_30440 = state_30361__$1;
(statearr_30387_30440[(2)] = null);

(statearr_30387_30440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (29))){
var inst_30335 = (state_30361[(9)]);
var state_30361__$1 = state_30361;
var statearr_30388_30441 = state_30361__$1;
(statearr_30388_30441[(2)] = inst_30335);

(statearr_30388_30441[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (6))){
var state_30361__$1 = state_30361;
var statearr_30389_30442 = state_30361__$1;
(statearr_30389_30442[(2)] = false);

(statearr_30389_30442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (28))){
var inst_30331 = (state_30361[(2)]);
var inst_30332 = calc_state.call(null);
var inst_30288 = inst_30332;
var state_30361__$1 = (function (){var statearr_30390 = state_30361;
(statearr_30390[(7)] = inst_30288);

(statearr_30390[(15)] = inst_30331);

return statearr_30390;
})();
var statearr_30391_30443 = state_30361__$1;
(statearr_30391_30443[(2)] = null);

(statearr_30391_30443[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (25))){
var inst_30357 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
var statearr_30392_30444 = state_30361__$1;
(statearr_30392_30444[(2)] = inst_30357);

(statearr_30392_30444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (34))){
var inst_30355 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
var statearr_30393_30445 = state_30361__$1;
(statearr_30393_30445[(2)] = inst_30355);

(statearr_30393_30445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (17))){
var state_30361__$1 = state_30361;
var statearr_30394_30446 = state_30361__$1;
(statearr_30394_30446[(2)] = false);

(statearr_30394_30446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (3))){
var state_30361__$1 = state_30361;
var statearr_30395_30447 = state_30361__$1;
(statearr_30395_30447[(2)] = false);

(statearr_30395_30447[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (12))){
var inst_30359 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30361__$1,inst_30359);
} else {
if((state_val_30362 === (2))){
var inst_30263 = (state_30361[(8)]);
var inst_30268 = inst_30263.cljs$lang$protocol_mask$partition0$;
var inst_30269 = (inst_30268 & (64));
var inst_30270 = inst_30263.cljs$core$ISeq$;
var inst_30271 = (cljs.core.PROTOCOL_SENTINEL === inst_30270);
var inst_30272 = ((inst_30269) || (inst_30271));
var state_30361__$1 = state_30361;
if(cljs.core.truth_(inst_30272)){
var statearr_30396_30448 = state_30361__$1;
(statearr_30396_30448[(1)] = (5));

} else {
var statearr_30397_30449 = state_30361__$1;
(statearr_30397_30449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (23))){
var inst_30320 = (state_30361[(14)]);
var inst_30326 = (inst_30320 == null);
var state_30361__$1 = state_30361;
if(cljs.core.truth_(inst_30326)){
var statearr_30398_30450 = state_30361__$1;
(statearr_30398_30450[(1)] = (26));

} else {
var statearr_30399_30451 = state_30361__$1;
(statearr_30399_30451[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (35))){
var inst_30346 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
if(cljs.core.truth_(inst_30346)){
var statearr_30400_30452 = state_30361__$1;
(statearr_30400_30452[(1)] = (36));

} else {
var statearr_30401_30453 = state_30361__$1;
(statearr_30401_30453[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (19))){
var inst_30288 = (state_30361[(7)]);
var inst_30308 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30288);
var state_30361__$1 = state_30361;
var statearr_30402_30454 = state_30361__$1;
(statearr_30402_30454[(2)] = inst_30308);

(statearr_30402_30454[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (11))){
var inst_30288 = (state_30361[(7)]);
var inst_30292 = (inst_30288 == null);
var inst_30293 = cljs.core.not.call(null,inst_30292);
var state_30361__$1 = state_30361;
if(inst_30293){
var statearr_30403_30455 = state_30361__$1;
(statearr_30403_30455[(1)] = (13));

} else {
var statearr_30404_30456 = state_30361__$1;
(statearr_30404_30456[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (9))){
var inst_30263 = (state_30361[(8)]);
var state_30361__$1 = state_30361;
var statearr_30405_30457 = state_30361__$1;
(statearr_30405_30457[(2)] = inst_30263);

(statearr_30405_30457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (5))){
var state_30361__$1 = state_30361;
var statearr_30406_30458 = state_30361__$1;
(statearr_30406_30458[(2)] = true);

(statearr_30406_30458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (14))){
var state_30361__$1 = state_30361;
var statearr_30407_30459 = state_30361__$1;
(statearr_30407_30459[(2)] = false);

(statearr_30407_30459[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (26))){
var inst_30321 = (state_30361[(10)]);
var inst_30328 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30321);
var state_30361__$1 = state_30361;
var statearr_30408_30460 = state_30361__$1;
(statearr_30408_30460[(2)] = inst_30328);

(statearr_30408_30460[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (16))){
var state_30361__$1 = state_30361;
var statearr_30409_30461 = state_30361__$1;
(statearr_30409_30461[(2)] = true);

(statearr_30409_30461[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (38))){
var inst_30351 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
var statearr_30410_30462 = state_30361__$1;
(statearr_30410_30462[(2)] = inst_30351);

(statearr_30410_30462[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (30))){
var inst_30321 = (state_30361[(10)]);
var inst_30313 = (state_30361[(13)]);
var inst_30312 = (state_30361[(11)]);
var inst_30338 = cljs.core.empty_QMARK_.call(null,inst_30312);
var inst_30339 = inst_30313.call(null,inst_30321);
var inst_30340 = cljs.core.not.call(null,inst_30339);
var inst_30341 = ((inst_30338) && (inst_30340));
var state_30361__$1 = state_30361;
var statearr_30411_30463 = state_30361__$1;
(statearr_30411_30463[(2)] = inst_30341);

(statearr_30411_30463[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (10))){
var inst_30263 = (state_30361[(8)]);
var inst_30284 = (state_30361[(2)]);
var inst_30285 = cljs.core.get.call(null,inst_30284,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30286 = cljs.core.get.call(null,inst_30284,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30287 = cljs.core.get.call(null,inst_30284,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30288 = inst_30263;
var state_30361__$1 = (function (){var statearr_30412 = state_30361;
(statearr_30412[(16)] = inst_30287);

(statearr_30412[(17)] = inst_30285);

(statearr_30412[(7)] = inst_30288);

(statearr_30412[(18)] = inst_30286);

return statearr_30412;
})();
var statearr_30413_30464 = state_30361__$1;
(statearr_30413_30464[(2)] = null);

(statearr_30413_30464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (18))){
var inst_30303 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
var statearr_30414_30465 = state_30361__$1;
(statearr_30414_30465[(2)] = inst_30303);

(statearr_30414_30465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (37))){
var state_30361__$1 = state_30361;
var statearr_30415_30466 = state_30361__$1;
(statearr_30415_30466[(2)] = null);

(statearr_30415_30466[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (8))){
var inst_30263 = (state_30361[(8)]);
var inst_30281 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30263);
var state_30361__$1 = state_30361;
var statearr_30416_30467 = state_30361__$1;
(statearr_30416_30467[(2)] = inst_30281);

(statearr_30416_30467[(1)] = (10));


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
});})(c__29362__auto___30421,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29271__auto__,c__29362__auto___30421,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29272__auto__ = null;
var cljs$core$async$mix_$_state_machine__29272__auto____0 = (function (){
var statearr_30417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30417[(0)] = cljs$core$async$mix_$_state_machine__29272__auto__);

(statearr_30417[(1)] = (1));

return statearr_30417;
});
var cljs$core$async$mix_$_state_machine__29272__auto____1 = (function (state_30361){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_30361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e30418){if((e30418 instanceof Object)){
var ex__29275__auto__ = e30418;
var statearr_30419_30468 = state_30361;
(statearr_30419_30468[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30469 = state_30361;
state_30361 = G__30469;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29272__auto__ = function(state_30361){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29272__auto____1.call(this,state_30361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29272__auto____0;
cljs$core$async$mix_$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29272__auto____1;
return cljs$core$async$mix_$_state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___30421,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29364__auto__ = (function (){var statearr_30420 = f__29363__auto__.call(null);
(statearr_30420[(6)] = c__29362__auto___30421);

return statearr_30420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___30421,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30471 = arguments.length;
switch (G__30471) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30475 = arguments.length;
switch (G__30475) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__30473_SHARP_){
if(cljs.core.truth_(p1__30473_SHARP_.call(null,topic))){
return p1__30473_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30473_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30476 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30476 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30477){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30477 = meta30477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30478,meta30477__$1){
var self__ = this;
var _30478__$1 = this;
return (new cljs.core.async.t_cljs$core$async30476(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30477__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30478){
var self__ = this;
var _30478__$1 = this;
return self__.meta30477;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30476.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30476.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30477","meta30477",1106946629,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30476";

cljs.core.async.t_cljs$core$async30476.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30476");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30476.
 */
cljs.core.async.__GT_t_cljs$core$async30476 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30476(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30477){
return (new cljs.core.async.t_cljs$core$async30476(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30477));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30476(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29362__auto___30596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___30596,mults,ensure_mult,p){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___30596,mults,ensure_mult,p){
return (function (state_30550){
var state_val_30551 = (state_30550[(1)]);
if((state_val_30551 === (7))){
var inst_30546 = (state_30550[(2)]);
var state_30550__$1 = state_30550;
var statearr_30552_30597 = state_30550__$1;
(statearr_30552_30597[(2)] = inst_30546);

(statearr_30552_30597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (20))){
var state_30550__$1 = state_30550;
var statearr_30553_30598 = state_30550__$1;
(statearr_30553_30598[(2)] = null);

(statearr_30553_30598[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (1))){
var state_30550__$1 = state_30550;
var statearr_30554_30599 = state_30550__$1;
(statearr_30554_30599[(2)] = null);

(statearr_30554_30599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (24))){
var inst_30529 = (state_30550[(7)]);
var inst_30538 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30529);
var state_30550__$1 = state_30550;
var statearr_30555_30600 = state_30550__$1;
(statearr_30555_30600[(2)] = inst_30538);

(statearr_30555_30600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (4))){
var inst_30481 = (state_30550[(8)]);
var inst_30481__$1 = (state_30550[(2)]);
var inst_30482 = (inst_30481__$1 == null);
var state_30550__$1 = (function (){var statearr_30556 = state_30550;
(statearr_30556[(8)] = inst_30481__$1);

return statearr_30556;
})();
if(cljs.core.truth_(inst_30482)){
var statearr_30557_30601 = state_30550__$1;
(statearr_30557_30601[(1)] = (5));

} else {
var statearr_30558_30602 = state_30550__$1;
(statearr_30558_30602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (15))){
var inst_30523 = (state_30550[(2)]);
var state_30550__$1 = state_30550;
var statearr_30559_30603 = state_30550__$1;
(statearr_30559_30603[(2)] = inst_30523);

(statearr_30559_30603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (21))){
var inst_30543 = (state_30550[(2)]);
var state_30550__$1 = (function (){var statearr_30560 = state_30550;
(statearr_30560[(9)] = inst_30543);

return statearr_30560;
})();
var statearr_30561_30604 = state_30550__$1;
(statearr_30561_30604[(2)] = null);

(statearr_30561_30604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (13))){
var inst_30505 = (state_30550[(10)]);
var inst_30507 = cljs.core.chunked_seq_QMARK_.call(null,inst_30505);
var state_30550__$1 = state_30550;
if(inst_30507){
var statearr_30562_30605 = state_30550__$1;
(statearr_30562_30605[(1)] = (16));

} else {
var statearr_30563_30606 = state_30550__$1;
(statearr_30563_30606[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (22))){
var inst_30535 = (state_30550[(2)]);
var state_30550__$1 = state_30550;
if(cljs.core.truth_(inst_30535)){
var statearr_30564_30607 = state_30550__$1;
(statearr_30564_30607[(1)] = (23));

} else {
var statearr_30565_30608 = state_30550__$1;
(statearr_30565_30608[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (6))){
var inst_30481 = (state_30550[(8)]);
var inst_30529 = (state_30550[(7)]);
var inst_30531 = (state_30550[(11)]);
var inst_30529__$1 = topic_fn.call(null,inst_30481);
var inst_30530 = cljs.core.deref.call(null,mults);
var inst_30531__$1 = cljs.core.get.call(null,inst_30530,inst_30529__$1);
var state_30550__$1 = (function (){var statearr_30566 = state_30550;
(statearr_30566[(7)] = inst_30529__$1);

(statearr_30566[(11)] = inst_30531__$1);

return statearr_30566;
})();
if(cljs.core.truth_(inst_30531__$1)){
var statearr_30567_30609 = state_30550__$1;
(statearr_30567_30609[(1)] = (19));

} else {
var statearr_30568_30610 = state_30550__$1;
(statearr_30568_30610[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (25))){
var inst_30540 = (state_30550[(2)]);
var state_30550__$1 = state_30550;
var statearr_30569_30611 = state_30550__$1;
(statearr_30569_30611[(2)] = inst_30540);

(statearr_30569_30611[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (17))){
var inst_30505 = (state_30550[(10)]);
var inst_30514 = cljs.core.first.call(null,inst_30505);
var inst_30515 = cljs.core.async.muxch_STAR_.call(null,inst_30514);
var inst_30516 = cljs.core.async.close_BANG_.call(null,inst_30515);
var inst_30517 = cljs.core.next.call(null,inst_30505);
var inst_30491 = inst_30517;
var inst_30492 = null;
var inst_30493 = (0);
var inst_30494 = (0);
var state_30550__$1 = (function (){var statearr_30570 = state_30550;
(statearr_30570[(12)] = inst_30491);

(statearr_30570[(13)] = inst_30492);

(statearr_30570[(14)] = inst_30494);

(statearr_30570[(15)] = inst_30516);

(statearr_30570[(16)] = inst_30493);

return statearr_30570;
})();
var statearr_30571_30612 = state_30550__$1;
(statearr_30571_30612[(2)] = null);

(statearr_30571_30612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (3))){
var inst_30548 = (state_30550[(2)]);
var state_30550__$1 = state_30550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30550__$1,inst_30548);
} else {
if((state_val_30551 === (12))){
var inst_30525 = (state_30550[(2)]);
var state_30550__$1 = state_30550;
var statearr_30572_30613 = state_30550__$1;
(statearr_30572_30613[(2)] = inst_30525);

(statearr_30572_30613[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (2))){
var state_30550__$1 = state_30550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30550__$1,(4),ch);
} else {
if((state_val_30551 === (23))){
var state_30550__$1 = state_30550;
var statearr_30573_30614 = state_30550__$1;
(statearr_30573_30614[(2)] = null);

(statearr_30573_30614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (19))){
var inst_30481 = (state_30550[(8)]);
var inst_30531 = (state_30550[(11)]);
var inst_30533 = cljs.core.async.muxch_STAR_.call(null,inst_30531);
var state_30550__$1 = state_30550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30550__$1,(22),inst_30533,inst_30481);
} else {
if((state_val_30551 === (11))){
var inst_30491 = (state_30550[(12)]);
var inst_30505 = (state_30550[(10)]);
var inst_30505__$1 = cljs.core.seq.call(null,inst_30491);
var state_30550__$1 = (function (){var statearr_30574 = state_30550;
(statearr_30574[(10)] = inst_30505__$1);

return statearr_30574;
})();
if(inst_30505__$1){
var statearr_30575_30615 = state_30550__$1;
(statearr_30575_30615[(1)] = (13));

} else {
var statearr_30576_30616 = state_30550__$1;
(statearr_30576_30616[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (9))){
var inst_30527 = (state_30550[(2)]);
var state_30550__$1 = state_30550;
var statearr_30577_30617 = state_30550__$1;
(statearr_30577_30617[(2)] = inst_30527);

(statearr_30577_30617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (5))){
var inst_30488 = cljs.core.deref.call(null,mults);
var inst_30489 = cljs.core.vals.call(null,inst_30488);
var inst_30490 = cljs.core.seq.call(null,inst_30489);
var inst_30491 = inst_30490;
var inst_30492 = null;
var inst_30493 = (0);
var inst_30494 = (0);
var state_30550__$1 = (function (){var statearr_30578 = state_30550;
(statearr_30578[(12)] = inst_30491);

(statearr_30578[(13)] = inst_30492);

(statearr_30578[(14)] = inst_30494);

(statearr_30578[(16)] = inst_30493);

return statearr_30578;
})();
var statearr_30579_30618 = state_30550__$1;
(statearr_30579_30618[(2)] = null);

(statearr_30579_30618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (14))){
var state_30550__$1 = state_30550;
var statearr_30583_30619 = state_30550__$1;
(statearr_30583_30619[(2)] = null);

(statearr_30583_30619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (16))){
var inst_30505 = (state_30550[(10)]);
var inst_30509 = cljs.core.chunk_first.call(null,inst_30505);
var inst_30510 = cljs.core.chunk_rest.call(null,inst_30505);
var inst_30511 = cljs.core.count.call(null,inst_30509);
var inst_30491 = inst_30510;
var inst_30492 = inst_30509;
var inst_30493 = inst_30511;
var inst_30494 = (0);
var state_30550__$1 = (function (){var statearr_30584 = state_30550;
(statearr_30584[(12)] = inst_30491);

(statearr_30584[(13)] = inst_30492);

(statearr_30584[(14)] = inst_30494);

(statearr_30584[(16)] = inst_30493);

return statearr_30584;
})();
var statearr_30585_30620 = state_30550__$1;
(statearr_30585_30620[(2)] = null);

(statearr_30585_30620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (10))){
var inst_30491 = (state_30550[(12)]);
var inst_30492 = (state_30550[(13)]);
var inst_30494 = (state_30550[(14)]);
var inst_30493 = (state_30550[(16)]);
var inst_30499 = cljs.core._nth.call(null,inst_30492,inst_30494);
var inst_30500 = cljs.core.async.muxch_STAR_.call(null,inst_30499);
var inst_30501 = cljs.core.async.close_BANG_.call(null,inst_30500);
var inst_30502 = (inst_30494 + (1));
var tmp30580 = inst_30491;
var tmp30581 = inst_30492;
var tmp30582 = inst_30493;
var inst_30491__$1 = tmp30580;
var inst_30492__$1 = tmp30581;
var inst_30493__$1 = tmp30582;
var inst_30494__$1 = inst_30502;
var state_30550__$1 = (function (){var statearr_30586 = state_30550;
(statearr_30586[(12)] = inst_30491__$1);

(statearr_30586[(13)] = inst_30492__$1);

(statearr_30586[(14)] = inst_30494__$1);

(statearr_30586[(17)] = inst_30501);

(statearr_30586[(16)] = inst_30493__$1);

return statearr_30586;
})();
var statearr_30587_30621 = state_30550__$1;
(statearr_30587_30621[(2)] = null);

(statearr_30587_30621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (18))){
var inst_30520 = (state_30550[(2)]);
var state_30550__$1 = state_30550;
var statearr_30588_30622 = state_30550__$1;
(statearr_30588_30622[(2)] = inst_30520);

(statearr_30588_30622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30551 === (8))){
var inst_30494 = (state_30550[(14)]);
var inst_30493 = (state_30550[(16)]);
var inst_30496 = (inst_30494 < inst_30493);
var inst_30497 = inst_30496;
var state_30550__$1 = state_30550;
if(cljs.core.truth_(inst_30497)){
var statearr_30589_30623 = state_30550__$1;
(statearr_30589_30623[(1)] = (10));

} else {
var statearr_30590_30624 = state_30550__$1;
(statearr_30590_30624[(1)] = (11));

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
});})(c__29362__auto___30596,mults,ensure_mult,p))
;
return ((function (switch__29271__auto__,c__29362__auto___30596,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29272__auto__ = null;
var cljs$core$async$state_machine__29272__auto____0 = (function (){
var statearr_30591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30591[(0)] = cljs$core$async$state_machine__29272__auto__);

(statearr_30591[(1)] = (1));

return statearr_30591;
});
var cljs$core$async$state_machine__29272__auto____1 = (function (state_30550){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_30550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e30592){if((e30592 instanceof Object)){
var ex__29275__auto__ = e30592;
var statearr_30593_30625 = state_30550;
(statearr_30593_30625[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30626 = state_30550;
state_30550 = G__30626;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$state_machine__29272__auto__ = function(state_30550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29272__auto____1.call(this,state_30550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29272__auto____0;
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29272__auto____1;
return cljs$core$async$state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___30596,mults,ensure_mult,p))
})();
var state__29364__auto__ = (function (){var statearr_30594 = f__29363__auto__.call(null);
(statearr_30594[(6)] = c__29362__auto___30596);

return statearr_30594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___30596,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30628 = arguments.length;
switch (G__30628) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30631 = arguments.length;
switch (G__30631) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30634 = arguments.length;
switch (G__30634) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29362__auto___30701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___30701,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___30701,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30673){
var state_val_30674 = (state_30673[(1)]);
if((state_val_30674 === (7))){
var state_30673__$1 = state_30673;
var statearr_30675_30702 = state_30673__$1;
(statearr_30675_30702[(2)] = null);

(statearr_30675_30702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (1))){
var state_30673__$1 = state_30673;
var statearr_30676_30703 = state_30673__$1;
(statearr_30676_30703[(2)] = null);

(statearr_30676_30703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (4))){
var inst_30637 = (state_30673[(7)]);
var inst_30639 = (inst_30637 < cnt);
var state_30673__$1 = state_30673;
if(cljs.core.truth_(inst_30639)){
var statearr_30677_30704 = state_30673__$1;
(statearr_30677_30704[(1)] = (6));

} else {
var statearr_30678_30705 = state_30673__$1;
(statearr_30678_30705[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (15))){
var inst_30669 = (state_30673[(2)]);
var state_30673__$1 = state_30673;
var statearr_30679_30706 = state_30673__$1;
(statearr_30679_30706[(2)] = inst_30669);

(statearr_30679_30706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (13))){
var inst_30662 = cljs.core.async.close_BANG_.call(null,out);
var state_30673__$1 = state_30673;
var statearr_30680_30707 = state_30673__$1;
(statearr_30680_30707[(2)] = inst_30662);

(statearr_30680_30707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (6))){
var state_30673__$1 = state_30673;
var statearr_30681_30708 = state_30673__$1;
(statearr_30681_30708[(2)] = null);

(statearr_30681_30708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (3))){
var inst_30671 = (state_30673[(2)]);
var state_30673__$1 = state_30673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30673__$1,inst_30671);
} else {
if((state_val_30674 === (12))){
var inst_30659 = (state_30673[(8)]);
var inst_30659__$1 = (state_30673[(2)]);
var inst_30660 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30659__$1);
var state_30673__$1 = (function (){var statearr_30682 = state_30673;
(statearr_30682[(8)] = inst_30659__$1);

return statearr_30682;
})();
if(cljs.core.truth_(inst_30660)){
var statearr_30683_30709 = state_30673__$1;
(statearr_30683_30709[(1)] = (13));

} else {
var statearr_30684_30710 = state_30673__$1;
(statearr_30684_30710[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (2))){
var inst_30636 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30637 = (0);
var state_30673__$1 = (function (){var statearr_30685 = state_30673;
(statearr_30685[(7)] = inst_30637);

(statearr_30685[(9)] = inst_30636);

return statearr_30685;
})();
var statearr_30686_30711 = state_30673__$1;
(statearr_30686_30711[(2)] = null);

(statearr_30686_30711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (11))){
var inst_30637 = (state_30673[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30673,(10),Object,null,(9));
var inst_30646 = chs__$1.call(null,inst_30637);
var inst_30647 = done.call(null,inst_30637);
var inst_30648 = cljs.core.async.take_BANG_.call(null,inst_30646,inst_30647);
var state_30673__$1 = state_30673;
var statearr_30687_30712 = state_30673__$1;
(statearr_30687_30712[(2)] = inst_30648);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30673__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (9))){
var inst_30637 = (state_30673[(7)]);
var inst_30650 = (state_30673[(2)]);
var inst_30651 = (inst_30637 + (1));
var inst_30637__$1 = inst_30651;
var state_30673__$1 = (function (){var statearr_30688 = state_30673;
(statearr_30688[(7)] = inst_30637__$1);

(statearr_30688[(10)] = inst_30650);

return statearr_30688;
})();
var statearr_30689_30713 = state_30673__$1;
(statearr_30689_30713[(2)] = null);

(statearr_30689_30713[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (5))){
var inst_30657 = (state_30673[(2)]);
var state_30673__$1 = (function (){var statearr_30690 = state_30673;
(statearr_30690[(11)] = inst_30657);

return statearr_30690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30673__$1,(12),dchan);
} else {
if((state_val_30674 === (14))){
var inst_30659 = (state_30673[(8)]);
var inst_30664 = cljs.core.apply.call(null,f,inst_30659);
var state_30673__$1 = state_30673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30673__$1,(16),out,inst_30664);
} else {
if((state_val_30674 === (16))){
var inst_30666 = (state_30673[(2)]);
var state_30673__$1 = (function (){var statearr_30691 = state_30673;
(statearr_30691[(12)] = inst_30666);

return statearr_30691;
})();
var statearr_30692_30714 = state_30673__$1;
(statearr_30692_30714[(2)] = null);

(statearr_30692_30714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (10))){
var inst_30641 = (state_30673[(2)]);
var inst_30642 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30673__$1 = (function (){var statearr_30693 = state_30673;
(statearr_30693[(13)] = inst_30641);

return statearr_30693;
})();
var statearr_30694_30715 = state_30673__$1;
(statearr_30694_30715[(2)] = inst_30642);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30673__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (8))){
var inst_30655 = (state_30673[(2)]);
var state_30673__$1 = state_30673;
var statearr_30695_30716 = state_30673__$1;
(statearr_30695_30716[(2)] = inst_30655);

(statearr_30695_30716[(1)] = (5));


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
});})(c__29362__auto___30701,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29271__auto__,c__29362__auto___30701,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29272__auto__ = null;
var cljs$core$async$state_machine__29272__auto____0 = (function (){
var statearr_30696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30696[(0)] = cljs$core$async$state_machine__29272__auto__);

(statearr_30696[(1)] = (1));

return statearr_30696;
});
var cljs$core$async$state_machine__29272__auto____1 = (function (state_30673){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_30673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e30697){if((e30697 instanceof Object)){
var ex__29275__auto__ = e30697;
var statearr_30698_30717 = state_30673;
(statearr_30698_30717[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30718 = state_30673;
state_30673 = G__30718;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$state_machine__29272__auto__ = function(state_30673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29272__auto____1.call(this,state_30673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29272__auto____0;
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29272__auto____1;
return cljs$core$async$state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___30701,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29364__auto__ = (function (){var statearr_30699 = f__29363__auto__.call(null);
(statearr_30699[(6)] = c__29362__auto___30701);

return statearr_30699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___30701,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30721 = arguments.length;
switch (G__30721) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29362__auto___30775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___30775,out){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___30775,out){
return (function (state_30753){
var state_val_30754 = (state_30753[(1)]);
if((state_val_30754 === (7))){
var inst_30733 = (state_30753[(7)]);
var inst_30732 = (state_30753[(8)]);
var inst_30732__$1 = (state_30753[(2)]);
var inst_30733__$1 = cljs.core.nth.call(null,inst_30732__$1,(0),null);
var inst_30734 = cljs.core.nth.call(null,inst_30732__$1,(1),null);
var inst_30735 = (inst_30733__$1 == null);
var state_30753__$1 = (function (){var statearr_30755 = state_30753;
(statearr_30755[(9)] = inst_30734);

(statearr_30755[(7)] = inst_30733__$1);

(statearr_30755[(8)] = inst_30732__$1);

return statearr_30755;
})();
if(cljs.core.truth_(inst_30735)){
var statearr_30756_30776 = state_30753__$1;
(statearr_30756_30776[(1)] = (8));

} else {
var statearr_30757_30777 = state_30753__$1;
(statearr_30757_30777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (1))){
var inst_30722 = cljs.core.vec.call(null,chs);
var inst_30723 = inst_30722;
var state_30753__$1 = (function (){var statearr_30758 = state_30753;
(statearr_30758[(10)] = inst_30723);

return statearr_30758;
})();
var statearr_30759_30778 = state_30753__$1;
(statearr_30759_30778[(2)] = null);

(statearr_30759_30778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (4))){
var inst_30723 = (state_30753[(10)]);
var state_30753__$1 = state_30753;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30753__$1,(7),inst_30723);
} else {
if((state_val_30754 === (6))){
var inst_30749 = (state_30753[(2)]);
var state_30753__$1 = state_30753;
var statearr_30760_30779 = state_30753__$1;
(statearr_30760_30779[(2)] = inst_30749);

(statearr_30760_30779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (3))){
var inst_30751 = (state_30753[(2)]);
var state_30753__$1 = state_30753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30753__$1,inst_30751);
} else {
if((state_val_30754 === (2))){
var inst_30723 = (state_30753[(10)]);
var inst_30725 = cljs.core.count.call(null,inst_30723);
var inst_30726 = (inst_30725 > (0));
var state_30753__$1 = state_30753;
if(cljs.core.truth_(inst_30726)){
var statearr_30762_30780 = state_30753__$1;
(statearr_30762_30780[(1)] = (4));

} else {
var statearr_30763_30781 = state_30753__$1;
(statearr_30763_30781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (11))){
var inst_30723 = (state_30753[(10)]);
var inst_30742 = (state_30753[(2)]);
var tmp30761 = inst_30723;
var inst_30723__$1 = tmp30761;
var state_30753__$1 = (function (){var statearr_30764 = state_30753;
(statearr_30764[(11)] = inst_30742);

(statearr_30764[(10)] = inst_30723__$1);

return statearr_30764;
})();
var statearr_30765_30782 = state_30753__$1;
(statearr_30765_30782[(2)] = null);

(statearr_30765_30782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (9))){
var inst_30733 = (state_30753[(7)]);
var state_30753__$1 = state_30753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30753__$1,(11),out,inst_30733);
} else {
if((state_val_30754 === (5))){
var inst_30747 = cljs.core.async.close_BANG_.call(null,out);
var state_30753__$1 = state_30753;
var statearr_30766_30783 = state_30753__$1;
(statearr_30766_30783[(2)] = inst_30747);

(statearr_30766_30783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (10))){
var inst_30745 = (state_30753[(2)]);
var state_30753__$1 = state_30753;
var statearr_30767_30784 = state_30753__$1;
(statearr_30767_30784[(2)] = inst_30745);

(statearr_30767_30784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (8))){
var inst_30734 = (state_30753[(9)]);
var inst_30733 = (state_30753[(7)]);
var inst_30723 = (state_30753[(10)]);
var inst_30732 = (state_30753[(8)]);
var inst_30737 = (function (){var cs = inst_30723;
var vec__30728 = inst_30732;
var v = inst_30733;
var c = inst_30734;
return ((function (cs,vec__30728,v,c,inst_30734,inst_30733,inst_30723,inst_30732,state_val_30754,c__29362__auto___30775,out){
return (function (p1__30719_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30719_SHARP_);
});
;})(cs,vec__30728,v,c,inst_30734,inst_30733,inst_30723,inst_30732,state_val_30754,c__29362__auto___30775,out))
})();
var inst_30738 = cljs.core.filterv.call(null,inst_30737,inst_30723);
var inst_30723__$1 = inst_30738;
var state_30753__$1 = (function (){var statearr_30768 = state_30753;
(statearr_30768[(10)] = inst_30723__$1);

return statearr_30768;
})();
var statearr_30769_30785 = state_30753__$1;
(statearr_30769_30785[(2)] = null);

(statearr_30769_30785[(1)] = (2));


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
});})(c__29362__auto___30775,out))
;
return ((function (switch__29271__auto__,c__29362__auto___30775,out){
return (function() {
var cljs$core$async$state_machine__29272__auto__ = null;
var cljs$core$async$state_machine__29272__auto____0 = (function (){
var statearr_30770 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30770[(0)] = cljs$core$async$state_machine__29272__auto__);

(statearr_30770[(1)] = (1));

return statearr_30770;
});
var cljs$core$async$state_machine__29272__auto____1 = (function (state_30753){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_30753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e30771){if((e30771 instanceof Object)){
var ex__29275__auto__ = e30771;
var statearr_30772_30786 = state_30753;
(statearr_30772_30786[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30787 = state_30753;
state_30753 = G__30787;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$state_machine__29272__auto__ = function(state_30753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29272__auto____1.call(this,state_30753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29272__auto____0;
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29272__auto____1;
return cljs$core$async$state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___30775,out))
})();
var state__29364__auto__ = (function (){var statearr_30773 = f__29363__auto__.call(null);
(statearr_30773[(6)] = c__29362__auto___30775);

return statearr_30773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___30775,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30789 = arguments.length;
switch (G__30789) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29362__auto___30834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___30834,out){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___30834,out){
return (function (state_30813){
var state_val_30814 = (state_30813[(1)]);
if((state_val_30814 === (7))){
var inst_30795 = (state_30813[(7)]);
var inst_30795__$1 = (state_30813[(2)]);
var inst_30796 = (inst_30795__$1 == null);
var inst_30797 = cljs.core.not.call(null,inst_30796);
var state_30813__$1 = (function (){var statearr_30815 = state_30813;
(statearr_30815[(7)] = inst_30795__$1);

return statearr_30815;
})();
if(inst_30797){
var statearr_30816_30835 = state_30813__$1;
(statearr_30816_30835[(1)] = (8));

} else {
var statearr_30817_30836 = state_30813__$1;
(statearr_30817_30836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30814 === (1))){
var inst_30790 = (0);
var state_30813__$1 = (function (){var statearr_30818 = state_30813;
(statearr_30818[(8)] = inst_30790);

return statearr_30818;
})();
var statearr_30819_30837 = state_30813__$1;
(statearr_30819_30837[(2)] = null);

(statearr_30819_30837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30814 === (4))){
var state_30813__$1 = state_30813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30813__$1,(7),ch);
} else {
if((state_val_30814 === (6))){
var inst_30808 = (state_30813[(2)]);
var state_30813__$1 = state_30813;
var statearr_30820_30838 = state_30813__$1;
(statearr_30820_30838[(2)] = inst_30808);

(statearr_30820_30838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30814 === (3))){
var inst_30810 = (state_30813[(2)]);
var inst_30811 = cljs.core.async.close_BANG_.call(null,out);
var state_30813__$1 = (function (){var statearr_30821 = state_30813;
(statearr_30821[(9)] = inst_30810);

return statearr_30821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30813__$1,inst_30811);
} else {
if((state_val_30814 === (2))){
var inst_30790 = (state_30813[(8)]);
var inst_30792 = (inst_30790 < n);
var state_30813__$1 = state_30813;
if(cljs.core.truth_(inst_30792)){
var statearr_30822_30839 = state_30813__$1;
(statearr_30822_30839[(1)] = (4));

} else {
var statearr_30823_30840 = state_30813__$1;
(statearr_30823_30840[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30814 === (11))){
var inst_30790 = (state_30813[(8)]);
var inst_30800 = (state_30813[(2)]);
var inst_30801 = (inst_30790 + (1));
var inst_30790__$1 = inst_30801;
var state_30813__$1 = (function (){var statearr_30824 = state_30813;
(statearr_30824[(10)] = inst_30800);

(statearr_30824[(8)] = inst_30790__$1);

return statearr_30824;
})();
var statearr_30825_30841 = state_30813__$1;
(statearr_30825_30841[(2)] = null);

(statearr_30825_30841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30814 === (9))){
var state_30813__$1 = state_30813;
var statearr_30826_30842 = state_30813__$1;
(statearr_30826_30842[(2)] = null);

(statearr_30826_30842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30814 === (5))){
var state_30813__$1 = state_30813;
var statearr_30827_30843 = state_30813__$1;
(statearr_30827_30843[(2)] = null);

(statearr_30827_30843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30814 === (10))){
var inst_30805 = (state_30813[(2)]);
var state_30813__$1 = state_30813;
var statearr_30828_30844 = state_30813__$1;
(statearr_30828_30844[(2)] = inst_30805);

(statearr_30828_30844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30814 === (8))){
var inst_30795 = (state_30813[(7)]);
var state_30813__$1 = state_30813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30813__$1,(11),out,inst_30795);
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
});})(c__29362__auto___30834,out))
;
return ((function (switch__29271__auto__,c__29362__auto___30834,out){
return (function() {
var cljs$core$async$state_machine__29272__auto__ = null;
var cljs$core$async$state_machine__29272__auto____0 = (function (){
var statearr_30829 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30829[(0)] = cljs$core$async$state_machine__29272__auto__);

(statearr_30829[(1)] = (1));

return statearr_30829;
});
var cljs$core$async$state_machine__29272__auto____1 = (function (state_30813){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_30813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e30830){if((e30830 instanceof Object)){
var ex__29275__auto__ = e30830;
var statearr_30831_30845 = state_30813;
(statearr_30831_30845[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30846 = state_30813;
state_30813 = G__30846;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$state_machine__29272__auto__ = function(state_30813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29272__auto____1.call(this,state_30813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29272__auto____0;
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29272__auto____1;
return cljs$core$async$state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___30834,out))
})();
var state__29364__auto__ = (function (){var statearr_30832 = f__29363__auto__.call(null);
(statearr_30832[(6)] = c__29362__auto___30834);

return statearr_30832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___30834,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30848 = (function (f,ch,meta30849){
this.f = f;
this.ch = ch;
this.meta30849 = meta30849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30850,meta30849__$1){
var self__ = this;
var _30850__$1 = this;
return (new cljs.core.async.t_cljs$core$async30848(self__.f,self__.ch,meta30849__$1));
});

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30850){
var self__ = this;
var _30850__$1 = this;
return self__.meta30849;
});

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30851 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30851 = (function (f,ch,meta30849,_,fn1,meta30852){
this.f = f;
this.ch = ch;
this.meta30849 = meta30849;
this._ = _;
this.fn1 = fn1;
this.meta30852 = meta30852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30853,meta30852__$1){
var self__ = this;
var _30853__$1 = this;
return (new cljs.core.async.t_cljs$core$async30851(self__.f,self__.ch,self__.meta30849,self__._,self__.fn1,meta30852__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30853){
var self__ = this;
var _30853__$1 = this;
return self__.meta30852;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30851.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30851.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30851.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30851.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30847_SHARP_){
return f1.call(null,(((p1__30847_SHARP_ == null))?null:self__.f.call(null,p1__30847_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30851.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30849","meta30849",1637783519,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30848","cljs.core.async/t_cljs$core$async30848",1098104145,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30852","meta30852",-1269425162,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30851.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30851";

cljs.core.async.t_cljs$core$async30851.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30851");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30851.
 */
cljs.core.async.__GT_t_cljs$core$async30851 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30851(f__$1,ch__$1,meta30849__$1,___$2,fn1__$1,meta30852){
return (new cljs.core.async.t_cljs$core$async30851(f__$1,ch__$1,meta30849__$1,___$2,fn1__$1,meta30852));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30851(self__.f,self__.ch,self__.meta30849,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30849","meta30849",1637783519,null)], null);
});

cljs.core.async.t_cljs$core$async30848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30848";

cljs.core.async.t_cljs$core$async30848.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30848");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30848.
 */
cljs.core.async.__GT_t_cljs$core$async30848 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30848(f__$1,ch__$1,meta30849){
return (new cljs.core.async.t_cljs$core$async30848(f__$1,ch__$1,meta30849));
});

}

return (new cljs.core.async.t_cljs$core$async30848(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30854 = (function (f,ch,meta30855){
this.f = f;
this.ch = ch;
this.meta30855 = meta30855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30856,meta30855__$1){
var self__ = this;
var _30856__$1 = this;
return (new cljs.core.async.t_cljs$core$async30854(self__.f,self__.ch,meta30855__$1));
});

cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30856){
var self__ = this;
var _30856__$1 = this;
return self__.meta30855;
});

cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30855","meta30855",304935279,null)], null);
});

cljs.core.async.t_cljs$core$async30854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30854";

cljs.core.async.t_cljs$core$async30854.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30854");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30854.
 */
cljs.core.async.__GT_t_cljs$core$async30854 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30854(f__$1,ch__$1,meta30855){
return (new cljs.core.async.t_cljs$core$async30854(f__$1,ch__$1,meta30855));
});

}

return (new cljs.core.async.t_cljs$core$async30854(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30857 = (function (p,ch,meta30858){
this.p = p;
this.ch = ch;
this.meta30858 = meta30858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30859,meta30858__$1){
var self__ = this;
var _30859__$1 = this;
return (new cljs.core.async.t_cljs$core$async30857(self__.p,self__.ch,meta30858__$1));
});

cljs.core.async.t_cljs$core$async30857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30859){
var self__ = this;
var _30859__$1 = this;
return self__.meta30858;
});

cljs.core.async.t_cljs$core$async30857.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30857.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30857.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30857.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30857.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30857.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30857.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30858","meta30858",329299995,null)], null);
});

cljs.core.async.t_cljs$core$async30857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30857";

cljs.core.async.t_cljs$core$async30857.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30857");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30857.
 */
cljs.core.async.__GT_t_cljs$core$async30857 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30857(p__$1,ch__$1,meta30858){
return (new cljs.core.async.t_cljs$core$async30857(p__$1,ch__$1,meta30858));
});

}

return (new cljs.core.async.t_cljs$core$async30857(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30861 = arguments.length;
switch (G__30861) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29362__auto___30901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___30901,out){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___30901,out){
return (function (state_30882){
var state_val_30883 = (state_30882[(1)]);
if((state_val_30883 === (7))){
var inst_30878 = (state_30882[(2)]);
var state_30882__$1 = state_30882;
var statearr_30884_30902 = state_30882__$1;
(statearr_30884_30902[(2)] = inst_30878);

(statearr_30884_30902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30883 === (1))){
var state_30882__$1 = state_30882;
var statearr_30885_30903 = state_30882__$1;
(statearr_30885_30903[(2)] = null);

(statearr_30885_30903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30883 === (4))){
var inst_30864 = (state_30882[(7)]);
var inst_30864__$1 = (state_30882[(2)]);
var inst_30865 = (inst_30864__$1 == null);
var state_30882__$1 = (function (){var statearr_30886 = state_30882;
(statearr_30886[(7)] = inst_30864__$1);

return statearr_30886;
})();
if(cljs.core.truth_(inst_30865)){
var statearr_30887_30904 = state_30882__$1;
(statearr_30887_30904[(1)] = (5));

} else {
var statearr_30888_30905 = state_30882__$1;
(statearr_30888_30905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30883 === (6))){
var inst_30864 = (state_30882[(7)]);
var inst_30869 = p.call(null,inst_30864);
var state_30882__$1 = state_30882;
if(cljs.core.truth_(inst_30869)){
var statearr_30889_30906 = state_30882__$1;
(statearr_30889_30906[(1)] = (8));

} else {
var statearr_30890_30907 = state_30882__$1;
(statearr_30890_30907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30883 === (3))){
var inst_30880 = (state_30882[(2)]);
var state_30882__$1 = state_30882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30882__$1,inst_30880);
} else {
if((state_val_30883 === (2))){
var state_30882__$1 = state_30882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30882__$1,(4),ch);
} else {
if((state_val_30883 === (11))){
var inst_30872 = (state_30882[(2)]);
var state_30882__$1 = state_30882;
var statearr_30891_30908 = state_30882__$1;
(statearr_30891_30908[(2)] = inst_30872);

(statearr_30891_30908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30883 === (9))){
var state_30882__$1 = state_30882;
var statearr_30892_30909 = state_30882__$1;
(statearr_30892_30909[(2)] = null);

(statearr_30892_30909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30883 === (5))){
var inst_30867 = cljs.core.async.close_BANG_.call(null,out);
var state_30882__$1 = state_30882;
var statearr_30893_30910 = state_30882__$1;
(statearr_30893_30910[(2)] = inst_30867);

(statearr_30893_30910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30883 === (10))){
var inst_30875 = (state_30882[(2)]);
var state_30882__$1 = (function (){var statearr_30894 = state_30882;
(statearr_30894[(8)] = inst_30875);

return statearr_30894;
})();
var statearr_30895_30911 = state_30882__$1;
(statearr_30895_30911[(2)] = null);

(statearr_30895_30911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30883 === (8))){
var inst_30864 = (state_30882[(7)]);
var state_30882__$1 = state_30882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30882__$1,(11),out,inst_30864);
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
});})(c__29362__auto___30901,out))
;
return ((function (switch__29271__auto__,c__29362__auto___30901,out){
return (function() {
var cljs$core$async$state_machine__29272__auto__ = null;
var cljs$core$async$state_machine__29272__auto____0 = (function (){
var statearr_30896 = [null,null,null,null,null,null,null,null,null];
(statearr_30896[(0)] = cljs$core$async$state_machine__29272__auto__);

(statearr_30896[(1)] = (1));

return statearr_30896;
});
var cljs$core$async$state_machine__29272__auto____1 = (function (state_30882){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_30882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e30897){if((e30897 instanceof Object)){
var ex__29275__auto__ = e30897;
var statearr_30898_30912 = state_30882;
(statearr_30898_30912[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30913 = state_30882;
state_30882 = G__30913;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$state_machine__29272__auto__ = function(state_30882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29272__auto____1.call(this,state_30882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29272__auto____0;
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29272__auto____1;
return cljs$core$async$state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___30901,out))
})();
var state__29364__auto__ = (function (){var statearr_30899 = f__29363__auto__.call(null);
(statearr_30899[(6)] = c__29362__auto___30901);

return statearr_30899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___30901,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30915 = arguments.length;
switch (G__30915) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29362__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto__){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto__){
return (function (state_30978){
var state_val_30979 = (state_30978[(1)]);
if((state_val_30979 === (7))){
var inst_30974 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
var statearr_30980_31018 = state_30978__$1;
(statearr_30980_31018[(2)] = inst_30974);

(statearr_30980_31018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (20))){
var inst_30944 = (state_30978[(7)]);
var inst_30955 = (state_30978[(2)]);
var inst_30956 = cljs.core.next.call(null,inst_30944);
var inst_30930 = inst_30956;
var inst_30931 = null;
var inst_30932 = (0);
var inst_30933 = (0);
var state_30978__$1 = (function (){var statearr_30981 = state_30978;
(statearr_30981[(8)] = inst_30931);

(statearr_30981[(9)] = inst_30930);

(statearr_30981[(10)] = inst_30933);

(statearr_30981[(11)] = inst_30955);

(statearr_30981[(12)] = inst_30932);

return statearr_30981;
})();
var statearr_30982_31019 = state_30978__$1;
(statearr_30982_31019[(2)] = null);

(statearr_30982_31019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (1))){
var state_30978__$1 = state_30978;
var statearr_30983_31020 = state_30978__$1;
(statearr_30983_31020[(2)] = null);

(statearr_30983_31020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (4))){
var inst_30919 = (state_30978[(13)]);
var inst_30919__$1 = (state_30978[(2)]);
var inst_30920 = (inst_30919__$1 == null);
var state_30978__$1 = (function (){var statearr_30984 = state_30978;
(statearr_30984[(13)] = inst_30919__$1);

return statearr_30984;
})();
if(cljs.core.truth_(inst_30920)){
var statearr_30985_31021 = state_30978__$1;
(statearr_30985_31021[(1)] = (5));

} else {
var statearr_30986_31022 = state_30978__$1;
(statearr_30986_31022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (15))){
var state_30978__$1 = state_30978;
var statearr_30990_31023 = state_30978__$1;
(statearr_30990_31023[(2)] = null);

(statearr_30990_31023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (21))){
var state_30978__$1 = state_30978;
var statearr_30991_31024 = state_30978__$1;
(statearr_30991_31024[(2)] = null);

(statearr_30991_31024[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (13))){
var inst_30931 = (state_30978[(8)]);
var inst_30930 = (state_30978[(9)]);
var inst_30933 = (state_30978[(10)]);
var inst_30932 = (state_30978[(12)]);
var inst_30940 = (state_30978[(2)]);
var inst_30941 = (inst_30933 + (1));
var tmp30987 = inst_30931;
var tmp30988 = inst_30930;
var tmp30989 = inst_30932;
var inst_30930__$1 = tmp30988;
var inst_30931__$1 = tmp30987;
var inst_30932__$1 = tmp30989;
var inst_30933__$1 = inst_30941;
var state_30978__$1 = (function (){var statearr_30992 = state_30978;
(statearr_30992[(8)] = inst_30931__$1);

(statearr_30992[(9)] = inst_30930__$1);

(statearr_30992[(10)] = inst_30933__$1);

(statearr_30992[(14)] = inst_30940);

(statearr_30992[(12)] = inst_30932__$1);

return statearr_30992;
})();
var statearr_30993_31025 = state_30978__$1;
(statearr_30993_31025[(2)] = null);

(statearr_30993_31025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (22))){
var state_30978__$1 = state_30978;
var statearr_30994_31026 = state_30978__$1;
(statearr_30994_31026[(2)] = null);

(statearr_30994_31026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (6))){
var inst_30919 = (state_30978[(13)]);
var inst_30928 = f.call(null,inst_30919);
var inst_30929 = cljs.core.seq.call(null,inst_30928);
var inst_30930 = inst_30929;
var inst_30931 = null;
var inst_30932 = (0);
var inst_30933 = (0);
var state_30978__$1 = (function (){var statearr_30995 = state_30978;
(statearr_30995[(8)] = inst_30931);

(statearr_30995[(9)] = inst_30930);

(statearr_30995[(10)] = inst_30933);

(statearr_30995[(12)] = inst_30932);

return statearr_30995;
})();
var statearr_30996_31027 = state_30978__$1;
(statearr_30996_31027[(2)] = null);

(statearr_30996_31027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (17))){
var inst_30944 = (state_30978[(7)]);
var inst_30948 = cljs.core.chunk_first.call(null,inst_30944);
var inst_30949 = cljs.core.chunk_rest.call(null,inst_30944);
var inst_30950 = cljs.core.count.call(null,inst_30948);
var inst_30930 = inst_30949;
var inst_30931 = inst_30948;
var inst_30932 = inst_30950;
var inst_30933 = (0);
var state_30978__$1 = (function (){var statearr_30997 = state_30978;
(statearr_30997[(8)] = inst_30931);

(statearr_30997[(9)] = inst_30930);

(statearr_30997[(10)] = inst_30933);

(statearr_30997[(12)] = inst_30932);

return statearr_30997;
})();
var statearr_30998_31028 = state_30978__$1;
(statearr_30998_31028[(2)] = null);

(statearr_30998_31028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (3))){
var inst_30976 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30978__$1,inst_30976);
} else {
if((state_val_30979 === (12))){
var inst_30964 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
var statearr_30999_31029 = state_30978__$1;
(statearr_30999_31029[(2)] = inst_30964);

(statearr_30999_31029[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (2))){
var state_30978__$1 = state_30978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30978__$1,(4),in$);
} else {
if((state_val_30979 === (23))){
var inst_30972 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
var statearr_31000_31030 = state_30978__$1;
(statearr_31000_31030[(2)] = inst_30972);

(statearr_31000_31030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (19))){
var inst_30959 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
var statearr_31001_31031 = state_30978__$1;
(statearr_31001_31031[(2)] = inst_30959);

(statearr_31001_31031[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (11))){
var inst_30930 = (state_30978[(9)]);
var inst_30944 = (state_30978[(7)]);
var inst_30944__$1 = cljs.core.seq.call(null,inst_30930);
var state_30978__$1 = (function (){var statearr_31002 = state_30978;
(statearr_31002[(7)] = inst_30944__$1);

return statearr_31002;
})();
if(inst_30944__$1){
var statearr_31003_31032 = state_30978__$1;
(statearr_31003_31032[(1)] = (14));

} else {
var statearr_31004_31033 = state_30978__$1;
(statearr_31004_31033[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (9))){
var inst_30966 = (state_30978[(2)]);
var inst_30967 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30978__$1 = (function (){var statearr_31005 = state_30978;
(statearr_31005[(15)] = inst_30966);

return statearr_31005;
})();
if(cljs.core.truth_(inst_30967)){
var statearr_31006_31034 = state_30978__$1;
(statearr_31006_31034[(1)] = (21));

} else {
var statearr_31007_31035 = state_30978__$1;
(statearr_31007_31035[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (5))){
var inst_30922 = cljs.core.async.close_BANG_.call(null,out);
var state_30978__$1 = state_30978;
var statearr_31008_31036 = state_30978__$1;
(statearr_31008_31036[(2)] = inst_30922);

(statearr_31008_31036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (14))){
var inst_30944 = (state_30978[(7)]);
var inst_30946 = cljs.core.chunked_seq_QMARK_.call(null,inst_30944);
var state_30978__$1 = state_30978;
if(inst_30946){
var statearr_31009_31037 = state_30978__$1;
(statearr_31009_31037[(1)] = (17));

} else {
var statearr_31010_31038 = state_30978__$1;
(statearr_31010_31038[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (16))){
var inst_30962 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
var statearr_31011_31039 = state_30978__$1;
(statearr_31011_31039[(2)] = inst_30962);

(statearr_31011_31039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (10))){
var inst_30931 = (state_30978[(8)]);
var inst_30933 = (state_30978[(10)]);
var inst_30938 = cljs.core._nth.call(null,inst_30931,inst_30933);
var state_30978__$1 = state_30978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30978__$1,(13),out,inst_30938);
} else {
if((state_val_30979 === (18))){
var inst_30944 = (state_30978[(7)]);
var inst_30953 = cljs.core.first.call(null,inst_30944);
var state_30978__$1 = state_30978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30978__$1,(20),out,inst_30953);
} else {
if((state_val_30979 === (8))){
var inst_30933 = (state_30978[(10)]);
var inst_30932 = (state_30978[(12)]);
var inst_30935 = (inst_30933 < inst_30932);
var inst_30936 = inst_30935;
var state_30978__$1 = state_30978;
if(cljs.core.truth_(inst_30936)){
var statearr_31012_31040 = state_30978__$1;
(statearr_31012_31040[(1)] = (10));

} else {
var statearr_31013_31041 = state_30978__$1;
(statearr_31013_31041[(1)] = (11));

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
});})(c__29362__auto__))
;
return ((function (switch__29271__auto__,c__29362__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29272__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29272__auto____0 = (function (){
var statearr_31014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31014[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29272__auto__);

(statearr_31014[(1)] = (1));

return statearr_31014;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29272__auto____1 = (function (state_30978){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_30978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e31015){if((e31015 instanceof Object)){
var ex__29275__auto__ = e31015;
var statearr_31016_31042 = state_30978;
(statearr_31016_31042[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31043 = state_30978;
state_30978 = G__31043;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29272__auto__ = function(state_30978){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29272__auto____1.call(this,state_30978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29272__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29272__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto__))
})();
var state__29364__auto__ = (function (){var statearr_31017 = f__29363__auto__.call(null);
(statearr_31017[(6)] = c__29362__auto__);

return statearr_31017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto__))
);

return c__29362__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31045 = arguments.length;
switch (G__31045) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31048 = arguments.length;
switch (G__31048) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31051 = arguments.length;
switch (G__31051) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29362__auto___31098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___31098,out){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___31098,out){
return (function (state_31075){
var state_val_31076 = (state_31075[(1)]);
if((state_val_31076 === (7))){
var inst_31070 = (state_31075[(2)]);
var state_31075__$1 = state_31075;
var statearr_31077_31099 = state_31075__$1;
(statearr_31077_31099[(2)] = inst_31070);

(statearr_31077_31099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (1))){
var inst_31052 = null;
var state_31075__$1 = (function (){var statearr_31078 = state_31075;
(statearr_31078[(7)] = inst_31052);

return statearr_31078;
})();
var statearr_31079_31100 = state_31075__$1;
(statearr_31079_31100[(2)] = null);

(statearr_31079_31100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (4))){
var inst_31055 = (state_31075[(8)]);
var inst_31055__$1 = (state_31075[(2)]);
var inst_31056 = (inst_31055__$1 == null);
var inst_31057 = cljs.core.not.call(null,inst_31056);
var state_31075__$1 = (function (){var statearr_31080 = state_31075;
(statearr_31080[(8)] = inst_31055__$1);

return statearr_31080;
})();
if(inst_31057){
var statearr_31081_31101 = state_31075__$1;
(statearr_31081_31101[(1)] = (5));

} else {
var statearr_31082_31102 = state_31075__$1;
(statearr_31082_31102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (6))){
var state_31075__$1 = state_31075;
var statearr_31083_31103 = state_31075__$1;
(statearr_31083_31103[(2)] = null);

(statearr_31083_31103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (3))){
var inst_31072 = (state_31075[(2)]);
var inst_31073 = cljs.core.async.close_BANG_.call(null,out);
var state_31075__$1 = (function (){var statearr_31084 = state_31075;
(statearr_31084[(9)] = inst_31072);

return statearr_31084;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31075__$1,inst_31073);
} else {
if((state_val_31076 === (2))){
var state_31075__$1 = state_31075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31075__$1,(4),ch);
} else {
if((state_val_31076 === (11))){
var inst_31055 = (state_31075[(8)]);
var inst_31064 = (state_31075[(2)]);
var inst_31052 = inst_31055;
var state_31075__$1 = (function (){var statearr_31085 = state_31075;
(statearr_31085[(7)] = inst_31052);

(statearr_31085[(10)] = inst_31064);

return statearr_31085;
})();
var statearr_31086_31104 = state_31075__$1;
(statearr_31086_31104[(2)] = null);

(statearr_31086_31104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (9))){
var inst_31055 = (state_31075[(8)]);
var state_31075__$1 = state_31075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31075__$1,(11),out,inst_31055);
} else {
if((state_val_31076 === (5))){
var inst_31052 = (state_31075[(7)]);
var inst_31055 = (state_31075[(8)]);
var inst_31059 = cljs.core._EQ_.call(null,inst_31055,inst_31052);
var state_31075__$1 = state_31075;
if(inst_31059){
var statearr_31088_31105 = state_31075__$1;
(statearr_31088_31105[(1)] = (8));

} else {
var statearr_31089_31106 = state_31075__$1;
(statearr_31089_31106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (10))){
var inst_31067 = (state_31075[(2)]);
var state_31075__$1 = state_31075;
var statearr_31090_31107 = state_31075__$1;
(statearr_31090_31107[(2)] = inst_31067);

(statearr_31090_31107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31076 === (8))){
var inst_31052 = (state_31075[(7)]);
var tmp31087 = inst_31052;
var inst_31052__$1 = tmp31087;
var state_31075__$1 = (function (){var statearr_31091 = state_31075;
(statearr_31091[(7)] = inst_31052__$1);

return statearr_31091;
})();
var statearr_31092_31108 = state_31075__$1;
(statearr_31092_31108[(2)] = null);

(statearr_31092_31108[(1)] = (2));


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
});})(c__29362__auto___31098,out))
;
return ((function (switch__29271__auto__,c__29362__auto___31098,out){
return (function() {
var cljs$core$async$state_machine__29272__auto__ = null;
var cljs$core$async$state_machine__29272__auto____0 = (function (){
var statearr_31093 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31093[(0)] = cljs$core$async$state_machine__29272__auto__);

(statearr_31093[(1)] = (1));

return statearr_31093;
});
var cljs$core$async$state_machine__29272__auto____1 = (function (state_31075){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_31075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e31094){if((e31094 instanceof Object)){
var ex__29275__auto__ = e31094;
var statearr_31095_31109 = state_31075;
(statearr_31095_31109[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31110 = state_31075;
state_31075 = G__31110;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$state_machine__29272__auto__ = function(state_31075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29272__auto____1.call(this,state_31075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29272__auto____0;
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29272__auto____1;
return cljs$core$async$state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___31098,out))
})();
var state__29364__auto__ = (function (){var statearr_31096 = f__29363__auto__.call(null);
(statearr_31096[(6)] = c__29362__auto___31098);

return statearr_31096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___31098,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31112 = arguments.length;
switch (G__31112) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29362__auto___31178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___31178,out){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___31178,out){
return (function (state_31150){
var state_val_31151 = (state_31150[(1)]);
if((state_val_31151 === (7))){
var inst_31146 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31152_31179 = state_31150__$1;
(statearr_31152_31179[(2)] = inst_31146);

(statearr_31152_31179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (1))){
var inst_31113 = (new Array(n));
var inst_31114 = inst_31113;
var inst_31115 = (0);
var state_31150__$1 = (function (){var statearr_31153 = state_31150;
(statearr_31153[(7)] = inst_31115);

(statearr_31153[(8)] = inst_31114);

return statearr_31153;
})();
var statearr_31154_31180 = state_31150__$1;
(statearr_31154_31180[(2)] = null);

(statearr_31154_31180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (4))){
var inst_31118 = (state_31150[(9)]);
var inst_31118__$1 = (state_31150[(2)]);
var inst_31119 = (inst_31118__$1 == null);
var inst_31120 = cljs.core.not.call(null,inst_31119);
var state_31150__$1 = (function (){var statearr_31155 = state_31150;
(statearr_31155[(9)] = inst_31118__$1);

return statearr_31155;
})();
if(inst_31120){
var statearr_31156_31181 = state_31150__$1;
(statearr_31156_31181[(1)] = (5));

} else {
var statearr_31157_31182 = state_31150__$1;
(statearr_31157_31182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (15))){
var inst_31140 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31158_31183 = state_31150__$1;
(statearr_31158_31183[(2)] = inst_31140);

(statearr_31158_31183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (13))){
var state_31150__$1 = state_31150;
var statearr_31159_31184 = state_31150__$1;
(statearr_31159_31184[(2)] = null);

(statearr_31159_31184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (6))){
var inst_31115 = (state_31150[(7)]);
var inst_31136 = (inst_31115 > (0));
var state_31150__$1 = state_31150;
if(cljs.core.truth_(inst_31136)){
var statearr_31160_31185 = state_31150__$1;
(statearr_31160_31185[(1)] = (12));

} else {
var statearr_31161_31186 = state_31150__$1;
(statearr_31161_31186[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (3))){
var inst_31148 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31150__$1,inst_31148);
} else {
if((state_val_31151 === (12))){
var inst_31114 = (state_31150[(8)]);
var inst_31138 = cljs.core.vec.call(null,inst_31114);
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31150__$1,(15),out,inst_31138);
} else {
if((state_val_31151 === (2))){
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31150__$1,(4),ch);
} else {
if((state_val_31151 === (11))){
var inst_31130 = (state_31150[(2)]);
var inst_31131 = (new Array(n));
var inst_31114 = inst_31131;
var inst_31115 = (0);
var state_31150__$1 = (function (){var statearr_31162 = state_31150;
(statearr_31162[(7)] = inst_31115);

(statearr_31162[(10)] = inst_31130);

(statearr_31162[(8)] = inst_31114);

return statearr_31162;
})();
var statearr_31163_31187 = state_31150__$1;
(statearr_31163_31187[(2)] = null);

(statearr_31163_31187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (9))){
var inst_31114 = (state_31150[(8)]);
var inst_31128 = cljs.core.vec.call(null,inst_31114);
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31150__$1,(11),out,inst_31128);
} else {
if((state_val_31151 === (5))){
var inst_31115 = (state_31150[(7)]);
var inst_31118 = (state_31150[(9)]);
var inst_31123 = (state_31150[(11)]);
var inst_31114 = (state_31150[(8)]);
var inst_31122 = (inst_31114[inst_31115] = inst_31118);
var inst_31123__$1 = (inst_31115 + (1));
var inst_31124 = (inst_31123__$1 < n);
var state_31150__$1 = (function (){var statearr_31164 = state_31150;
(statearr_31164[(11)] = inst_31123__$1);

(statearr_31164[(12)] = inst_31122);

return statearr_31164;
})();
if(cljs.core.truth_(inst_31124)){
var statearr_31165_31188 = state_31150__$1;
(statearr_31165_31188[(1)] = (8));

} else {
var statearr_31166_31189 = state_31150__$1;
(statearr_31166_31189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (14))){
var inst_31143 = (state_31150[(2)]);
var inst_31144 = cljs.core.async.close_BANG_.call(null,out);
var state_31150__$1 = (function (){var statearr_31168 = state_31150;
(statearr_31168[(13)] = inst_31143);

return statearr_31168;
})();
var statearr_31169_31190 = state_31150__$1;
(statearr_31169_31190[(2)] = inst_31144);

(statearr_31169_31190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (10))){
var inst_31134 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31170_31191 = state_31150__$1;
(statearr_31170_31191[(2)] = inst_31134);

(statearr_31170_31191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (8))){
var inst_31123 = (state_31150[(11)]);
var inst_31114 = (state_31150[(8)]);
var tmp31167 = inst_31114;
var inst_31114__$1 = tmp31167;
var inst_31115 = inst_31123;
var state_31150__$1 = (function (){var statearr_31171 = state_31150;
(statearr_31171[(7)] = inst_31115);

(statearr_31171[(8)] = inst_31114__$1);

return statearr_31171;
})();
var statearr_31172_31192 = state_31150__$1;
(statearr_31172_31192[(2)] = null);

(statearr_31172_31192[(1)] = (2));


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
});})(c__29362__auto___31178,out))
;
return ((function (switch__29271__auto__,c__29362__auto___31178,out){
return (function() {
var cljs$core$async$state_machine__29272__auto__ = null;
var cljs$core$async$state_machine__29272__auto____0 = (function (){
var statearr_31173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31173[(0)] = cljs$core$async$state_machine__29272__auto__);

(statearr_31173[(1)] = (1));

return statearr_31173;
});
var cljs$core$async$state_machine__29272__auto____1 = (function (state_31150){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_31150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e31174){if((e31174 instanceof Object)){
var ex__29275__auto__ = e31174;
var statearr_31175_31193 = state_31150;
(statearr_31175_31193[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31194 = state_31150;
state_31150 = G__31194;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$state_machine__29272__auto__ = function(state_31150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29272__auto____1.call(this,state_31150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29272__auto____0;
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29272__auto____1;
return cljs$core$async$state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___31178,out))
})();
var state__29364__auto__ = (function (){var statearr_31176 = f__29363__auto__.call(null);
(statearr_31176[(6)] = c__29362__auto___31178);

return statearr_31176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___31178,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31196 = arguments.length;
switch (G__31196) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29362__auto___31266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29362__auto___31266,out){
return (function (){
var f__29363__auto__ = (function (){var switch__29271__auto__ = ((function (c__29362__auto___31266,out){
return (function (state_31238){
var state_val_31239 = (state_31238[(1)]);
if((state_val_31239 === (7))){
var inst_31234 = (state_31238[(2)]);
var state_31238__$1 = state_31238;
var statearr_31240_31267 = state_31238__$1;
(statearr_31240_31267[(2)] = inst_31234);

(statearr_31240_31267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (1))){
var inst_31197 = [];
var inst_31198 = inst_31197;
var inst_31199 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31238__$1 = (function (){var statearr_31241 = state_31238;
(statearr_31241[(7)] = inst_31198);

(statearr_31241[(8)] = inst_31199);

return statearr_31241;
})();
var statearr_31242_31268 = state_31238__$1;
(statearr_31242_31268[(2)] = null);

(statearr_31242_31268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (4))){
var inst_31202 = (state_31238[(9)]);
var inst_31202__$1 = (state_31238[(2)]);
var inst_31203 = (inst_31202__$1 == null);
var inst_31204 = cljs.core.not.call(null,inst_31203);
var state_31238__$1 = (function (){var statearr_31243 = state_31238;
(statearr_31243[(9)] = inst_31202__$1);

return statearr_31243;
})();
if(inst_31204){
var statearr_31244_31269 = state_31238__$1;
(statearr_31244_31269[(1)] = (5));

} else {
var statearr_31245_31270 = state_31238__$1;
(statearr_31245_31270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (15))){
var inst_31228 = (state_31238[(2)]);
var state_31238__$1 = state_31238;
var statearr_31246_31271 = state_31238__$1;
(statearr_31246_31271[(2)] = inst_31228);

(statearr_31246_31271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (13))){
var state_31238__$1 = state_31238;
var statearr_31247_31272 = state_31238__$1;
(statearr_31247_31272[(2)] = null);

(statearr_31247_31272[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (6))){
var inst_31198 = (state_31238[(7)]);
var inst_31223 = inst_31198.length;
var inst_31224 = (inst_31223 > (0));
var state_31238__$1 = state_31238;
if(cljs.core.truth_(inst_31224)){
var statearr_31248_31273 = state_31238__$1;
(statearr_31248_31273[(1)] = (12));

} else {
var statearr_31249_31274 = state_31238__$1;
(statearr_31249_31274[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (3))){
var inst_31236 = (state_31238[(2)]);
var state_31238__$1 = state_31238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31238__$1,inst_31236);
} else {
if((state_val_31239 === (12))){
var inst_31198 = (state_31238[(7)]);
var inst_31226 = cljs.core.vec.call(null,inst_31198);
var state_31238__$1 = state_31238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31238__$1,(15),out,inst_31226);
} else {
if((state_val_31239 === (2))){
var state_31238__$1 = state_31238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31238__$1,(4),ch);
} else {
if((state_val_31239 === (11))){
var inst_31206 = (state_31238[(10)]);
var inst_31202 = (state_31238[(9)]);
var inst_31216 = (state_31238[(2)]);
var inst_31217 = [];
var inst_31218 = inst_31217.push(inst_31202);
var inst_31198 = inst_31217;
var inst_31199 = inst_31206;
var state_31238__$1 = (function (){var statearr_31250 = state_31238;
(statearr_31250[(7)] = inst_31198);

(statearr_31250[(11)] = inst_31218);

(statearr_31250[(12)] = inst_31216);

(statearr_31250[(8)] = inst_31199);

return statearr_31250;
})();
var statearr_31251_31275 = state_31238__$1;
(statearr_31251_31275[(2)] = null);

(statearr_31251_31275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (9))){
var inst_31198 = (state_31238[(7)]);
var inst_31214 = cljs.core.vec.call(null,inst_31198);
var state_31238__$1 = state_31238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31238__$1,(11),out,inst_31214);
} else {
if((state_val_31239 === (5))){
var inst_31206 = (state_31238[(10)]);
var inst_31199 = (state_31238[(8)]);
var inst_31202 = (state_31238[(9)]);
var inst_31206__$1 = f.call(null,inst_31202);
var inst_31207 = cljs.core._EQ_.call(null,inst_31206__$1,inst_31199);
var inst_31208 = cljs.core.keyword_identical_QMARK_.call(null,inst_31199,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31209 = ((inst_31207) || (inst_31208));
var state_31238__$1 = (function (){var statearr_31252 = state_31238;
(statearr_31252[(10)] = inst_31206__$1);

return statearr_31252;
})();
if(cljs.core.truth_(inst_31209)){
var statearr_31253_31276 = state_31238__$1;
(statearr_31253_31276[(1)] = (8));

} else {
var statearr_31254_31277 = state_31238__$1;
(statearr_31254_31277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (14))){
var inst_31231 = (state_31238[(2)]);
var inst_31232 = cljs.core.async.close_BANG_.call(null,out);
var state_31238__$1 = (function (){var statearr_31256 = state_31238;
(statearr_31256[(13)] = inst_31231);

return statearr_31256;
})();
var statearr_31257_31278 = state_31238__$1;
(statearr_31257_31278[(2)] = inst_31232);

(statearr_31257_31278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (10))){
var inst_31221 = (state_31238[(2)]);
var state_31238__$1 = state_31238;
var statearr_31258_31279 = state_31238__$1;
(statearr_31258_31279[(2)] = inst_31221);

(statearr_31258_31279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (8))){
var inst_31198 = (state_31238[(7)]);
var inst_31206 = (state_31238[(10)]);
var inst_31202 = (state_31238[(9)]);
var inst_31211 = inst_31198.push(inst_31202);
var tmp31255 = inst_31198;
var inst_31198__$1 = tmp31255;
var inst_31199 = inst_31206;
var state_31238__$1 = (function (){var statearr_31259 = state_31238;
(statearr_31259[(7)] = inst_31198__$1);

(statearr_31259[(14)] = inst_31211);

(statearr_31259[(8)] = inst_31199);

return statearr_31259;
})();
var statearr_31260_31280 = state_31238__$1;
(statearr_31260_31280[(2)] = null);

(statearr_31260_31280[(1)] = (2));


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
});})(c__29362__auto___31266,out))
;
return ((function (switch__29271__auto__,c__29362__auto___31266,out){
return (function() {
var cljs$core$async$state_machine__29272__auto__ = null;
var cljs$core$async$state_machine__29272__auto____0 = (function (){
var statearr_31261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31261[(0)] = cljs$core$async$state_machine__29272__auto__);

(statearr_31261[(1)] = (1));

return statearr_31261;
});
var cljs$core$async$state_machine__29272__auto____1 = (function (state_31238){
while(true){
var ret_value__29273__auto__ = (function (){try{while(true){
var result__29274__auto__ = switch__29271__auto__.call(null,state_31238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29274__auto__;
}
break;
}
}catch (e31262){if((e31262 instanceof Object)){
var ex__29275__auto__ = e31262;
var statearr_31263_31281 = state_31238;
(statearr_31263_31281[(5)] = ex__29275__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31282 = state_31238;
state_31238 = G__31282;
continue;
} else {
return ret_value__29273__auto__;
}
break;
}
});
cljs$core$async$state_machine__29272__auto__ = function(state_31238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29272__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29272__auto____1.call(this,state_31238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29272__auto____0;
cljs$core$async$state_machine__29272__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29272__auto____1;
return cljs$core$async$state_machine__29272__auto__;
})()
;})(switch__29271__auto__,c__29362__auto___31266,out))
})();
var state__29364__auto__ = (function (){var statearr_31264 = f__29363__auto__.call(null);
(statearr_31264[(6)] = c__29362__auto___31266);

return statearr_31264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29364__auto__);
});})(c__29362__auto___31266,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1539627749717
