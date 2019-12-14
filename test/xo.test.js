const assert = require('chai').assert
const XO = require('../src/js/conditions/xo.js')

describe('XO', function () {

    it('return XO', function () {
        assert.equal(XO("ooxx"), true)
    })

    it('return XO', function () {
        assert.equal(XO("xooxx"), false)
    })
    
    it('return XO', function () {
        assert.equal(XO("ooxXm"), true)
    })

    it('return XO', function () {
        assert.equal(XO("zpzpzpp"), true)
    })        

    it('return XO', function () {
        assert.equal(XO("zzoo"), false)
    })

    it('return XO', function () {
        assert.equal(XO("Xo"), true)
    })

    it('return XO', function () {
        assert.equal(XO("x"), false)
    })

    it('return XO', function () {
        assert.equal(XO("o"), false)
    })

    it('return XO', function () {
        assert.equal(XO("xxxoo"), false)
    })

    it('return XO', function () {
        assert.equal(XO("ooxx"), true)
    })

    it('return XO', function () {
        assert.equal(XO(""), true)
    })

})