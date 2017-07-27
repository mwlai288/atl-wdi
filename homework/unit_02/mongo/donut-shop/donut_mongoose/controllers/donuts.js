//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
var express = require('express');
var router = express.Router();

var Donut = require("../models/donut");



//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (request, response) => {
    Donut.find({})
        .then((donuts) => {
            response.render(
                'donuts/index',
                { donuts }
            );
        })
        .catch((error) => {
            console.log('Error retrieving donuts from database!');
            console.log(error);
        });
})


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (request, response) => {
    response.render('donuts/new');
});


//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', (request, response) => {
    const donutIdToSearchDbFor = request.params.id;

    Donut.findById(donutIdToSearchDbFor)
        .then((donut) => {
            response.render(
                'donuts/show',
                { donut }
            );
        })
        .catch((error) => {
            console.log(`Error retrieving donut with ID of ${donutIdToSearchDbFor}`)
        });
});



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
router.post('/', (request, response) => {

    const newDonutInfoFromForm = request.body;


    Donut.create(newDonutInfoFromForm)
        .then((donut) => {
            response.render(
                'donuts/show',
                { donut }
            )
        })
        .catch((error) => {
            console.log('Error saving new donut to database!');
            console.log(error);
        });



//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/:id/edit', (request, response) => {

    const donutIdToFind = request.params.id;

    Donut.findById(donutIdToFind)
        .then((donut) => {
            response.render(
                'donuts/edit',
                { donut }
            );
        })
        .catch((error) => {
            console.log(`Error rendering edit form for donut with ID of ${donutIdToFind}`)
        })
});



//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.put('/:id', (request, response) => {

    const donutIdToUpdate = request.params.id;
    const updatedDonutInfo = request.body;

    Donut.findByIdAndUpdate(
        donutIdToUpdate,
        updatedDonutInfo,
        { new: true } // <-- DON'T FORGET THIS!!!
    )
        .then((donut) => {
            console.log(`Donut with ID of ${donut._id} updated!`);

            response.render(
                'donut/show',
                { donut }
            )
        })
        .catch((error) => {
            console.log(`Donut with ID of ${donut._id} failed to update!`)
            console.log(error);
        })

});



//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"
router.get('/:id/delete', (request, response) => {

    const donutIdToDelete = request.params.id;

    Donut.findByIdAndRemove(donutIdToDelete)
        .then(() => {
            console.log(`Successfully deleted donut with ID ${donutIdToDelete}!`)

            response.redirect('/donut');
        })
});


//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;
