const assert = require('chai').assert
const boxSeq = require('../src/js/loops/boxSeq.js')

describe('boxSeq', function () {

    it('return boxSeq', function () {
        assert.equal(boxSeq(5), 7)
    })

    it('return boxSeq', function () {
        assert.equal(boxSeq(0), 0)
    })
    
    it('return boxSeq', function () {
        assert.equal(boxSeq(6), 6)
    })

    it('return boxSeq', function () {
        assert.equal(boxSeq(99), 101)
    })        

    it('return boxSeq', function () {
        assert.equal(boxSeq(2), 2)
    })

    it('return boxSeq', function () {
        assert.equal(boxSeq(1), 3)
    })    

})