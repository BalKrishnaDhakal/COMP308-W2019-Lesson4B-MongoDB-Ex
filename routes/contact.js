let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Create a reference to the db schema
let contact = require('../models/contact');

/* Get Conatct List page -READ Operation */

router.get('/', (req, res, next) => {
    contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        } else {
            console.log(contactList); // just to check the data base

            /**
             res.render('contacts/index',{
              title: 'Conact List'
              contactList: contactList
              });
             */
        }

    });

});
module.exports = router;