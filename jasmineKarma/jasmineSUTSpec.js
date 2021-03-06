/* global Calculator */
/* global CalculatorAsync */
/* global AsyncSpec */

function callMyCallback(cb){
    cb();
}

describe('Spies', function() {
    it('should spy a callback', function() {
       var spyCb = jasmine.createSpy('mySpy');
       callMyCallback(spyCb);
       expect(spyCb).toHaveBeenCalled(); 
    });
});

var myObj ={
    save: function(){
        
    },
    getQuantity: function(){
        return 5;
    }
}

describe('Spies over function', function() {
    it('should spy on save', function() {
        var spy = spyOn(myObj, 'save');
        myObj.save();
        expect(spy).toHaveBeenCalled();
    });
    
    it('should spy on getQuantity', function() {
        spyOn(myObj, 'getQuantity').and.returnValue(10);
        expect(myObj.getQuantity()).toEqual(10);
    });
    
    it('should spy on getQuantity with logging', function(){
        spyOn(myObj, 'getQuantity').and.callFake(function  (){
            console.log('returning 20');
            return 20;
        });
        expect(myObj.getQuantity()).toEqual(20);
    })
    
    it('should spy on getQuantity CallThrough', function() {
        var spy = spyOn(myObj, 'getQuantity').and.callThrough();
        expect(myObj.getQuantity()).toEqual(5);
        expect(spy).toHaveBeenCalled();
    });
    
    it('should spy on getQuantit throw', function() {
        spyOn(myObj, 'getQuantity').and.throwError('problem');
        var qty;
        try {
            qty = myObj.getQuantity()
        } catch (ex) {
            qty = 100;
        };
        expect(qty).toEqual(100);
    });        
});
    

describe('Spies over objects', function() {
    it('should create a spy object', function() {
        var spy = jasmine.createSpyObj('mySpy', ['getName', 'save']);
        spy.getName.and.returnValue('bob');
        spy.save.and.callFake(function  (){
            console.log('save called');
        });
        expect(spy.getName()).toEqual('bob');
        spy.save();
        expect(spy.save).toHaveBeenCalled();
    });
});


describe('Spy machers', function() {
    it('should verify arguments', function() {
        var spy = jasmine.createSpy('mySpy');
        spy(1);
        spy(2);
        spy(1,1);
        expect(spy).toHaveBeenCalledWith(1);
    });
        
    it('should verify arguments that were not called', function() {
        var spy = jasmine.createSpy('mySpy');
        spy(1);
        expect(spy).not.toHaveBeenCalledWith(4);
    });
    
    it('should work with metadata', function() {
        var myObj = {method: function  (){}};
        var spy = spyOn(myObj, "method");
        myObj.method(1);
        myObj.method(2);
        myObj.method(3);
        expect(spy.calls.count()).toEqual(3);
        expect(spy.calls.argsFor(0)[0]).toEqual(1);
    });
    
    it('should work with utility methods', function() {
        var spy = jasmine.createSpy('a spy');
        expect(jasmine.isSpy(spy)).toBeTruthy();
        spy();
    });            
});    