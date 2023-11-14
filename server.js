const express = require('express');
const port = 3000;
const booksRouter = require('./routes/books');
const countriesRouter = require('./routes/countries');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
    //res.download('server.js');
    //res.status(500).json({message: "Internal error. Try again later."});
    //res.sendStatus(500);
    //res.send('<h1>Hello from app get /</h1>');
});
app.use('/books', booksRouter);
app.use('/countries', countriesRouter);

app.listen(port, () => {
    console.log(`server is running on port ${port}.`);
})

//console.log('hello from app get /')
