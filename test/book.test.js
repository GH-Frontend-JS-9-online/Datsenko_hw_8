const assert = require('chai').assert
const Book = require('../src/js/classes/book.js')

describe('Book', function () {

    const PP = new Book("Pride and Prejudice", "Jane Austen")
    const H = new Book("Hamlet", 'William Shakespeare')
    const WP = new Book("War and Peace", "Leo Tolstoy")

    it('Book title', function () {
        assert.equal(WP.title, "War and Peace")
    })

    it('Book author', function () {       
        assert.equal(PP.author, "Jane Austen")
    })

    it('return Book getTitle()', function () {        
        assert.equal(PP.getTitle(), 'Title: Pride and Prejudice')
    })

    it('return Book getAuthor()', function () {        
        assert.equal(PP.getAuthor(), 'Author: Jane Austen')
    })

    it('Book title', function () {
        assert.equal(H.title, "Hamlet")
    })

    it('Book author', function () {       
        assert.equal(H.author, "William Shakespeare")
    })

    it('return Book getTitle()', function () {        
        assert.equal(H.getTitle(), 'Title: Hamlet')
    })

    it('return Book getAuthor()', function () {        
        assert.equal(H.getAuthor(), 'Author: William Shakespeare')
    })

    it('Book title', function () {
        assert.equal(WP.title, "War and Peace")
    })

    it('Book author', function () {       
        assert.equal(WP.author, "Leo Tolstoy")
    })

    it('return Book getTitle()', function () {        
        assert.equal(WP.getTitle(), 'Title: War and Peace')
    })

    it('return Book getAuthor()', function () {        
        assert.equal(WP.getAuthor(), 'Author: Leo Tolstoy')
    })

})