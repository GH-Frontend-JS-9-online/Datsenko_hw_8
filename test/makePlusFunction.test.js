const assert = require('chai').assert
const makePlusFunction = require('../src/js/functional/makePlusFunction.js')

describe('makePlusFunction', function () {

    const plusTwo = makePlusFunction(2)
    const plusFive = makePlusFunction(5)
    const plusSeven = makePlusFunction(plusTwo(plusFive(0)))
    const plusTen = makePlusFunction(10)

    it('return makePlusFunction', function () {
        assert.equal(plusTwo(0), 2)
    })

    it('return makePlusFunction', function () {
        assert.equal(plusTwo(18), 20)
    })

    it('return makePlusFunction', function () {
        assert.equal(plusTwo(-1), 1)
    })

    it('return makePlusFunction', function () {
        assert.equal(plusFive(0), 5)
    })

    it('return makePlusFunction', function () {
        assert.equal(plusFive(12), 17)
    })

    it('return makePlusFunction', function () {
        assert.equal(plusFive(-5), 0)
    })

    it('return makePlusFunction', function () {
        assert.equal(plusSeven(0), 7)
    })

    it('return makePlusFunction', function () {
        assert.equal(plusSeven(41), 48)
    })

    it('return makePlusFunction', function () {
        assert.equal(plusSeven(-117), -110)
    })

    it('return makePlusFunction', function () {
        assert.equal(plusTen(0), 10)
    })

    it('return makePlusFunction', function () {
        assert.equal(plusTen(1), 11)
    })

    it('return makePlusFunction', function () {
        assert.equal(plusTen(-1), 9)
    })

    it('return makePlusFunction', function () {
        assert.equal(plusTwo(plusFive(plusSeven(plusTen(1)))), 25)
    })

    it('return makePlusFunction', function () {
        assert.equal(makePlusFunction(8)(8), 16)
    })

    it('return makePlusFunction', function () {
        assert.equal(makePlusFunction(1)(100), 101)
    })

    it('return makePlusFunction', function () {
        assert.equal(makePlusFunction(-100)(0), -100)
    })

    it('return makePlusFunction', function () {
        assert.equal(makePlusFunction(0)(0), 0)
    })
})