mocha.setup({timeout:3000});
describe('my first suite', function(){
   
   beforeEach(function  (){
       console.log('beforeEach log entry');
       
       
   })
   
   afterEach(function  (){
       console.log('afterEach');
   })
   
   it('test 1', function  (){
       chai.expect(1).to.equal(1);
       console.log('test');
   }) 
   
   describe('inner suite', function  (){
       it('test 2', function  (){
           chai.expect(2).to.equal(2);
           console.log('test 2');
       })
   })
});


describe('Outer Describe', function() {
    it('should be asynchronous', function(done) {
        this.timeout(4000);
        setTimeout(function() {
            chai.expect(1).to.equal(1);
            done();
        }, 3500);
    });  
});
 