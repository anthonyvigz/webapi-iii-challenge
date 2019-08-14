const express = require('express');

const router = express.Router();

// importing users from database

const Users = require('./userDb.js')


// post a user to the server

router.post('/', (req, res) => {

    const user = req.body;

    Users.insert(user)
        .then(users => {
            if(!user.name) {
                res.status(400).json({ message: 'Please provide a user.'})
            } else {
                res.status(201).json(users)
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'There was an error saving a user.'})
        })
});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    const { id } = req.params;

    Users.getById(id)
        .then(user => {
            if(user) {
                req.user = user;
                next();
            } else {
                res.status(404).json({ message: 'Invalid ID: User ID does not exist.'})
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to process ID request' })
        })
};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
