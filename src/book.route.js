const express = require('express')
const { createBook, getBookByID, getAllBooks, updateBookById, deleteBookbyId } = require('./controller/book.controller');
const { bookvalidation } = require('./validator/validation');
const router = express.Router()


router.post('/book', bookvalidation, createBook)

router.get('/books', getAllBooks)

router.get('/books/:id', getBookByID)

router.put('/books/:id', updateBookById)

router.delete('/books/:id', deleteBookbyId)

module.exports = router; 