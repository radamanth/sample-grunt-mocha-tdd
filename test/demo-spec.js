var assert = require("assert");
var Demo = require("../src/demo").Demo;
describe('Demo', function() {
    describe('#test()', function(){
        it('should return 42', function(){
            var demo = new Demo();
            assert.equal(42, demo.test());
        })
    })
});