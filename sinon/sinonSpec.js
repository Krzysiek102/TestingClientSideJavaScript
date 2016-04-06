describe('Spies', function() {
    it('should spy on a callback', function() {
        var spy = sinon.spy();
        mySUT.callCallback(spy);
        expect(spy.called).toBeTruthy();
    });
    
    it('should call a real implementation if given a real function to spy on', function() {
        var spy = sinon.spy(realCallback);
        var returnValue = mySUT.callCallbackWithReturnValue(spy);
        expect(spy.called).toBeTruthy();
        expect(returnValue).toBe(4);
    });
});

describe('Sinon assertions', function() {
    it('should use a built-in assert', function() {
        var spy = sinon.spy();
        expect(spy.called).toBeFalsy();
    }); 
});


describe('combat attack', function() {
    it('should damage the defender if the hit is successfull', function() {
        var combat = new Combat();
        var attacker = sinon.stub(new Character());
        var defender = sinon.stub(new Character());
        attacker.damage = 5;
        attacker.calculateHit.returns(true);
        
        combat.attack(attacker, defender);
        
        expect(defender.takeDamage.called).toBe(true);
        expect(defender.takeDamage.getCall(0).calledWith(5)).toBe(true);
    });
    
    it('should damage the defender if the hit is successfull - mock', function() {
        var combat = new Combat();
        var defender = new Character();
        var mockDefender = sinon.mock(defender);
        var expectation = mockDefender.expects("takeDamage").once().withArgs(5);
        
        var attacker = sinon.stub(new Character());
        attacker.damage = 5;
        attacker.calculateHit.returns(true);
        combat.attack(attacker, defender);
        
        expectation.verify();
    });
        
});

var myClass = {
    doTimeout: function  (cb){
        setTimeout(cb, 1000);
    },
    hide: function  (){
        $("#hideMe").fadeOut();
    }
}


describe('timers', function() {
    var spy;
    var cb = function  (){
        console.log('cb called');
    };
    beforeEach(function  (){
        $("#hideMe").show();
        spy = sinon.spy(cb);
    })
    
    it('should be able to handle timeouts', function() {
        var clock = sinon.useFakeTimers();
        
        myClass.doTimeout(spy);
        clock.tick(1010);
        expect(spy.called).toBe(true);
        clock.restore();
    });       
    
    it('should be able to handle ui animations', function() {
        var clock = sinon.useFakeTimers();
        myClass.hide();
        clock.tick(1010);
        expect($("#hideMe:visible").length).toBe(0);
        clock.restore();
    });
    
    it('should be able to fake dates', function() {
        var initialDate = 1357423755011;
        var clock = sinon.useFakeTimers(initialDate);
        var date1 = Date.now();
        console.log(date1);
        clock.tick(1000);
        var date2 = Date.now();
        console.log(date2);
        clock.restore();
    }); 
});

    