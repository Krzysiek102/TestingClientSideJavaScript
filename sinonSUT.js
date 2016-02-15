var mySUT = {
    callCallback: function(cb){
        cb();
    },
    callCallbackWithReturnValue: function  (cb){
        return cb();
    },

    calldependencyBetter: function  (dep){
        return dep.someMethod();
    }
}

var myDep = {
    someMethod: function  (){
        return 10;
    }
}

function realCallback (){
    return 4;
}