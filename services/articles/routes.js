//express
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

//loading the models/schemas for the items in article
var Article = require("./articlesCollection");


// routes stuff ---------------------------------------------------------                   

/* ------------------- INDEX - HP -------------------*/
router.get('/', (req, res) => {
    res.render("index.ejs")
})

/* ------------------- READ ALL - Articles -------------------*/
router.get('/articlespage', (req, res) => {
    Article.find(function (error, results) { //.find is Mongoose method
        if (error) {
            console(error);
        } else {
            res.render("articlespage", { resultsArts: results })
        };
    });
})


/* ------------------- READ ONE ------------------*/

router.get('/article/read/:id', (req, res) => {
    var id = req.params.id;
    Article.findOne(id, function (error, results) { //.find is Mongoose method
        if (error) {
            console(error);
        } else {
            res.render("article", { resultsArts: results })
        };
    });
})

/* ------------------- CREATE ONE ------------------*/

router.get('/article/create', (req, res) => {
    res.render('create'); // make a form in theis ejs
})


router.post('/article/create', (req, res) => {
    var newArt = req.body;
    newArt.price = Number(newArt.price)
    Article.create(newArt, function (error, results) { //.find is Mongoose method
        if (error) {
            console.log(error);
        } else {
            res.redirect("/articlespage")
        };
    });
})


/* ------------------- UPDATE - Item -------------------*/

router.get('/itemProfile/:id/edit', (req, res) => {
    Article.findById(req.params.id, function (error, results) { // need to just find the ID not everything in db
        if (error) {
            console(error);
        } else {
            res.render("itemProfile", { resultsArts: results })
        };
    });
});

router.post('/itemProfile/:id/edit', (req, res) => {
    var newObj = req.body;
    newObj.price = Number(newObj.price)
    Article.findByIdAndUpdate(req.params.id, newObj, (err, oneDj) => { // need to just find the ID not everything in db
        if (err) {
            console(err);
        } else {
            res.redirect("/articlespage");
        };
    });

})



// findbyid, findbyidandupdate , see stackoverflow

/* ------------------- DELETE - Item -------------------*/

router.post('/itemProfile/:id/delete', function (req, res) {
    console.log("youre about to delete page");
    var id = req.params.id;
    console.log(id);

    Article.findByIdAndRemove({ _id: id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/articlespage');
        };
    });
});

/* ------------------- SAVING OUTFIT to OUTFITS-------------------*/


router.post('/createdincart', (req, res) => {
    console.log("going goin thru router");
    console.log(req.body);

                // ---- below is the conversion from string to just array----------------------

             var objOfArticles = req.body;
                var allIDs = Object.values(objOfArticles); //youre only getting IDs cause thats what i'm sending from FE
                // console.log(allIDs);

                for (var i = 0; i < allIDs.length; i++) {
                    allIDs[i] = mongoose.Types.ObjectId(allIDs[i]) // here it changes from string to mongoose ID
                }
                // console.log(allIDs);

                // ---- below is the mongoose request----------------------

                Article.find({ _id: allIDs }, function (err, results) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.render("outfitspage", {outfitOfArts: results})
                    }
                }) 
})


//---------------
module.exports = router;  // EXPORTS this router gets and posts for other js pages in app to uses
