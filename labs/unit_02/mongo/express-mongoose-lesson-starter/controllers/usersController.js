var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', (req, res) => {

    User.find({})
        .then((users) => {
            res.render('users/index', {
                users: users
            });
        })
        .catch((error) => {});

})

// USER SHOW ROUTE
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            res.rend('users/show', {
                user: user
            })
        })

})

// USER CREATE FORM
router.get('/new', (req, res) => {
    res.render('users/new');
})

// USER CREATE ROUTE

router.post('/', (req, res) => {
    response.send(request.body);

    const newUser = new User(request.body);

    newUser.save((error) => {
        if (error) {
            

            response.render('user/show', {
                user: newUser
            });
            .catch((error) => {
                if (error) {
                    console.log('Error saving new user to database!');
                }
            })

})

// USER UPDATE ROUTE

// USER DESTROY
router.delete('/:id/delete', (req, res)=> {
    const userIdToDelete = request.params.id;
    
    User.findByIdAndRemove(userIdToDelete)
    .then(() => {
        console.log(`Successfully delted user with ID ${userIdToDelete}`)

        response.redirect('/users')
    })
})
// ADD A NEW ITEM

// REMOVE AN ITEM

module.exports = router;