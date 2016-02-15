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
        expect(spy.called).toBeTruthy();
    });
    
    it('should use a sinon assert', function() {
        var spy = sinon.spy();
        sinon.assert.called(spy);
    });  
});
    
    