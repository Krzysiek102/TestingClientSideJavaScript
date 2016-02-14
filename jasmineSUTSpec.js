/* global Calculator */
/* global CalculatorAsync */
/* global AsyncSpec */
describe('Calculator', function () {
    var calc;
    var OutputId = "#calc-fixture";

    beforeEach(function () {
        $("body").append($("#template-wrapper").html().replace("-template", ''));
        calc = new Calculator($(OutputId));
    });
    
    afterEach(function  (){
        $(OutputId).remove();
    });
    
    it('should be able to add two numbers', function () {
        calc.add(1, 1);
        expect($(OutputId).text()).toBe("2");
    });
    it('should be able to divice 6 and 2', function () {
        calc.divide(6, 2);
        expect($(OutputId).text()).toBe("3");
    });
});

describe('CalculatorAsync', function () {
    var calc;
    var el;

    beforeEach(function () {
        el = $("<div>some content</div>");
        $("#container").append(el);
        calc = new CalculatorAsync(el);
    });
    
    afterEach(function  (){
        el.remove();
    });
    
    it('should work with a visual efect', function (done) {
        var callback = function(){
          expect(el.css('display')).toBe('none');
          done();
        };
        calc.hideResult(callback);
    });
});

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

describe('Spies2', function() {
    
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
    
    