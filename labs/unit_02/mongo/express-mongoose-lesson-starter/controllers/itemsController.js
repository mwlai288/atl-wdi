const express = require ('express');
var User = require("../models/user");

const router = express.Router({mergeParams: true});

router.get('/', (req, res) => {
    const userIdToFind = request.params.id;

    User.findById(userIdToFind {
        .then((user) =>) {
            res.send(user);
        }
    
});

module.exports = router;