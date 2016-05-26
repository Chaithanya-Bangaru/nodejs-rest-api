/**
 * REST API using nodejs, expressjs and Mondodb shell
 * Created by xprk689 on 5/23/2016.
 *
 */

var express = require('express')
//DB config
    ,mongoose = require('mongoose')
    ,bodyparser = require('body-parser');
var db = mongoose.connect('mongodb://127.0.0.1/bookAPI');

//var jsonResp = {hello: 'This is json response'};

/*    .get(function(req,res){
 res.json(jsonResp);
 });*/
var Book = require('./models/bookModel');
//express config
var app = express();
// config port
var port = process.env.PORT || 3000;
//express app using plugins
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//Router config
var bookRouter = express.Router();
bookRouter.route('/books')
    .put(function (req,res) {
        Book.findById(req.params.bookId,function (err,book) {
            if(err){
                console.log('err block...');
                console.log(err);
                res.status(500).send(err);
            }
            else{
                console.log('replacing book using put...');
                book.title = req.body.title;
                book.author = req.body.author;
                book.genre = req.body.genre;
                book.read = req.body.read;
                book.save();
                res.json(book);
            }

        });
    })
    .post(function (req,res) {
        //use body parser plugin to read body , parse and convert to json object
        var book = new Book(req.body);
        book.save();
        console.log(book);
        res.status(201).send(book);
    })
    .get(function(req,res){
        //res.send('Hi, Welcome to my Node JS Rest Book API.\t Chaithanya........');
        //var query = req.query;
        var query = {};
        if(req.query.genre){
            query.genre = req.query.genre;
        }
        Book.find(query,function (err,books) {
            if(err){
                //console.log(err);
                res.status(500).send(err);
            }
            else{
                console.log('retrieving book/s...');
                res.json(books);
            }

        });
    });
// Routers http methods get, post, patch, put etc.
bookRouter.route('/books/:bookId')
    .delete(function(req,res){
        Book.findById(req.params.bookId,function (err,book) {
            if(err){
                res.status(500).send('An error occured deleting the book..');
            }else{
                if(book){
                    console.log('deleting book...');
                    book.remove();
                    res.status(204).send('Book deleted..');
                }else {
                    console.log('Cannot find book to delete ...');
                    res.status(404).send('An error occured deleting the book..');
                }

            }

            //res.json(book);
        });

    })
    .get(function(req,res){
        var query = {};
        if(req.query.genre){
            query.genre = req.query.genre;
        }
        Book.findById(req.params.bookId,function (err,book) {
            if(err){
                console.log('err block...');
                console.log(err);
                res.status(500).send(err);
            }
            else{
                console.log('retrieving book...');
                res.json(book);
            }

        });
    })
    .put(function (req,res) {
        Book.findById(req.params.bookId,function (err,book) {
            if(err){
                console.log('err block...');
                console.log(err);
                res.status(500).send(err);
            }
            else{
                console.log('updating book using put...');
                book.title = req.body.title;
                book.author = req.body.author;
                book.genre = req.body.genre;
                book.read = req.body.read;
                book.save();
                res.json(book);
            }

        });
    })
    .patch(function (req,res) {
        Book.findById(req.params.bookId,function (err,book) {
            if(err){
                console.log('err block...');
                console.log(err);
                res.status(500).send(err);
            }
            else{
                console.log('updaing book using patch...');
                if(req.body._id){
                    delete req.body._id;
                }
                for(var p in req.body){
                    book[p] = req.body[p];
                }
                book.save(function(err){
                    if(err){
                        console.log('err block...');
                        console.log(err);
                        res.status(500).send(err);
                    }else{
                        res.json(book);
                    }
                });

            }

        });
    });

app.use('/api',bookRouter);

app.get('/', function (req,res) {
    res.send('Root Book API path..');
});
app.listen(port,function(){
    console.log('Gulp is Listening on port '+port);
});