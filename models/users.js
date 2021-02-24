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
    },
    created:
    {
        type: Date,
        default: Date.now
    },
    updated:
    {
        type: Date,
        default: Date.now
    }
},
{
    collection: "users"
}
);

let options = ({missingPasswordError: 'Wrong/missing password'});
user.plugin(passportLocalMongoose, options);

module.exports.user = mongoose.model('user', user);
