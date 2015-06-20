var throttle = function(f, t, scope) {
    var last, deferTimer;
    var throttled = false;
    var toBeCalled = f;
    var fn = function() {
        var context = scope ? scope : this;
        var now = +new Date;
        var args = arguments;
        if(last && now < last + t) {
            throttled = true;
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function(){
                throttled = false;
                toBeCalled.apply(context, args);
            }, t);
        } else {
            last = now;
            toBeCalled.apply(context, args);  
        }
    }; 
    return fn;
};
module.exports = throttle;
