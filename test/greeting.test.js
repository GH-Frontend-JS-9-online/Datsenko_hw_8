const assert = require('chai').assert
const greeting = require('../src/js/objects/greeting.js')

describe('greeting', function () {

    it('return greeting', function () {
        assert.equal(greeting("Randy"), "Hi! I'm Randy, and I'm from Germany.")
    })

    it('return greeting', function () {
        assert.equal(greeting("Sam"), "Hi! I'm Sam, and I'm from Argentina.")
    })

    it('return greeting', function () {
        assert.equal(greeting("Trudy"), "Hi! I'm a guest.")
    })

    it('return greeting', function () {
        assert.equal(greeting("Wendy"), "Hi! I'm Wendy, and I'm from Japan.")
    })

})