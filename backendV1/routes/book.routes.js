const express = require('express')
const router = express.Router();

const getAllBooks = require('../controllers/book.controller')

router.get('/', getAllBooks);
module.exports = router;