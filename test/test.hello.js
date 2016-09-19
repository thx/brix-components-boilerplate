/* global chai, describe, it */
describe('Hello', function() {
    this.timeout(5000)
    var expect = chai.expect

    it('div [bx-name]', function(done) {
        expect('foo').to.equal('foo')
        done()
    })
})