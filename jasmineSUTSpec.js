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
    