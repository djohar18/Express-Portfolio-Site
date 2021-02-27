/*
  File Name: users.js
  Student Name : Divyanshu Johar
  Student ID : 301149021
  Date : February 28, 2021
*/

//reuired modules for user model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let user = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: 'username is required'
    },
    password: {
        type: String,
        default: '',
        trim: true,
        required: 'password is required'
    }
},
{
    collection: "users"
}
);

let options = ({missingPasswordError: 'Wrong/missing password'});
user.plugin(passportLocalMongoose, options);

module.exports = mongoose.model('User', user);
