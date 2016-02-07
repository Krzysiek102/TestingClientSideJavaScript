var SUT = {};
SUT.CreateToDoItem = function(){
    $("#div1").append("<div class='js-todoContainer'> other html content</div>");
}

SUT.fadeOutDiv = function  (duration, callback){
    $("#div1").fadeOut(duration, callback);
}

SUT.doSomething = function  (){
    throw "my exception";
}