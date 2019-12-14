const assert = require('chai').assert
const smallestTransform = require('../src/js/scope/smallestTransform.js')

describe('smallestTransform', function () {

    it('return smallestTransform', function () {
        assert.equal(smallestTransform(399), 6)
    })

    it('return smallestTransform', function () {
        assert.equal(smallestTransform(1234), 4)
    })

    it('return smallestTransform', function () {
        assert.equal(smallestTransform(153), 4)
    })

    it('return smallestTransform', function () {
        assert.equal(smallestTransform(33338), 5)
    })

    it('return smallestTransform', function () {
        assert.equal(smallestTransform(7777), 0)
    })

    it('return smallestTransform', function () {
        assert.equal(smallestTransform(977), 2)
    })

    it('return smallestTransform', function () {
        assert.equal(smallestTransform(589), 4)
    })

})