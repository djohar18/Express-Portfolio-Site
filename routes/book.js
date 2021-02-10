let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//connect to out Book model
let Book = require('../models/book');

/*Get route for Book List Page -- read operation */
router.get('/', (req,res,next)=>{
    Book.find((err, BookList) =>{
        if(err){
            console.log(err);
        }
        else{
            //console.log(BookList);
            res.render('book', { title: 'Book List' , BookList : BookList });
        }
    });
});
module.exports = router;
