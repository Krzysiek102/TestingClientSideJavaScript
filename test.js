/* global SUT */
module('module 1');

test('my first test', function () {
    ok(true);
});

module('module 2');

test('my second test', function () {
    ok(true);
});

test('CreateToDoItem create 1 element', function () {
    SUT.CreateToDoItem();
    strictEqual($(".js-todoContainer").length, 1);
});

test('broken asynchronous timint test', function () {
    stop();
    setTimeout(function () {
        ok(true);
        start();
    }, 100);
})

test('broken asynchronous timint test 2', function () {
    stop(2);
    setTimeout(function () {
        ok(true);
        console.log('longer timeout finished');
        start();
    }, 100);

    setTimeout(function () {
        ok(true);
        start();
    }, 100);
})

asyncTest('better asynchronous test', function () {
    setTimeout(function () {
        ok(true);
        start();
    }, 100);
})

asyncTest('UI asynchronous test', function () {
    SUT.fadeOutDiv(500, function () {
        ok(!$("#div1").is(":visible"));
        start();
    });
})

test('introduce global variable', function(){
    globalvar = 3;
    strictEqual(globalvar, 3);
})

test('hidden exception', function(){
    //SUT.doSomething();
})

test('expect some asserts', function(){
    expect(3);
    ok(true);
    ok(true);
    ok(true);
})

