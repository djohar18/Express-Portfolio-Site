let express = require('express');
const passport = require('passport');
let router = express.Router();

router.get('/', (req, res, next) => {
    if(!req.user)
    {
        res.render('authentication/login', {title : 'Login Page'});
    }
    else{
        return response.redirect('/');
    }
});

router.post('/', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err)
        {
            console.log(err);
            res.end(err)
        }
        else if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            if(err)
            {
                console.log(err);                
            }
            return res.redirect('/contact-list');
        });
    });
});