class Book {
	constructor(title, author) {
		this.title = title
		this.author = author
	}

	getTitle() {
		return `Title: ${this.title}`
	}

	getAuthor() {
		return `Author: ${this.author}`
	}
}

module.exports = Book