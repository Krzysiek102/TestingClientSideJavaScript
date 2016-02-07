module('module 1');

test('my first test', function(){
   ok(true); 
});

module('module 2');

test('my second test', function(){
   ok(true); 
});

test('CreateToDoItem create 1 element', function  (){
    SUT.CreateToDoItem();
    strictEqual($(".js-todoContainer").length, 1);
});