var Calculator = function  (element){
    this.el = element;
};

Calculator.prototype.add = function  (a, b){
    $(this.el).html(a+b);
}

Calculator.prototype.divide = function  (a, b){
    $(this.el).html(a/b);
}

var CalculatorAsync = function  (displayElement){
    this.$el = $(displayElement);
};

CalculatorAsync.prototype.hideResult = function  (cb){
    this.$el.fadeOut(1000,cb);
}