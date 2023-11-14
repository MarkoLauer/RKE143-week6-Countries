const express = require('express');
const router = express.Router();
const data = require('../data/books.json');

router.get('/', (req, res) => { 
    res.status(200).json(data);
})

router.get('/:bookId', (req, res) => {
    const requestedBookId = parseInt(req.params.bookId, 10);
    const book = data.books.filter(bookInData => {
        if(bookInData.id === requestedBookId){
            return bookInData;
        };
    });
    res.status(200).json(book);
})

module.exports = router;