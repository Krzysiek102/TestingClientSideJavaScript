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
});
    