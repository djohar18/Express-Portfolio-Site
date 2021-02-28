/*
  File Name: contactlist.js
  Student Name : Divyanshu Johar
  Student ID : 301149021
  Date : February 28, 2021
*/

let express = require('express');
let router = express.Router();
let { checkAuthentication } = require("../config/authentication");

//connect to out contactlist model
let Contact = require('../models/contactlist');

//Get route for Book List page -- read option
router.get('/', checkAuthentication, (req, res, next) => {
    Contact.find({})
    .sort("name")
    .exec(function (err, ContactList) {
    if(err)
    {
        return console.error(err);
    }
    else
    {
        //console.log(ContactList);
        res.render('index', {title: 'Business Contact List', ContactList: ContactList});
    }
    });
});


// GET Route for displaying the Add page - Create Operation
router.get('/add', checkAuthentication, (req, res, next) => {
    res.render('index', {title: 'Add New Contact'});
});

// POST Route for processing the Add page - Create Operation
router.post('/add', checkAuthentication, (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "contact_number": req.body.contact,
        "email": req.body.email
    });
    Contact.create(newContact, (err, Contact) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    })
});

// GET Route for displaying the Edit page - Update Operation
router.get('/update/:id', checkAuthentication, (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToUpdate) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('index', {title: 'Update Contact', Contact: contactToUpdate});
        }
    });
});

// POST Route for processing the Add page - Create Operation
router.post('/update/:id', checkAuthentication, (req, res, next) => {
    let id = req.params.id;

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "contact_number": req.body.contact,
        "email": req.body.email
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list');
        }
    })
});

//GET request for deletion - Delete Operation
router.get('/delete/:id', checkAuthentication, (req, res, next) => {
    let id = req.params.id;
    Contact.remove({_id:id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list');
        }
    });
});

module.exports =  router;