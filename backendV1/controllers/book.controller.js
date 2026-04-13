const Book = require('../models/book.model')

//Get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        })
    }
}

module.exports = getAllBooks;