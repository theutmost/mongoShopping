//express
var express = require("express");
var router = express.Router();
//loading the models/schemas for the items in article
var Outfits = require("./outfitCollection");
var Article = require("../articles/articlesCollection");


// routes stuff ---------------------------------------------------------                   

/* ------------------- READ ALL - Articles -------------------*/

router.get('/outfitspage', (req, res) => {
    Outfits.find(function (error, results) { //.find is Mongoose method
        console.log("get outfits")
        if (error) {
            console.log(error);
        } else {
            var arrOfAllOutfits = [];
            // console.log(results)

            let whatever = 0
            for (var i = 0; i < results.length; i++) {
                console.log("loop " + i)
                var arrOfIDs = results[i].articles;
                // console.log(arrOfIDs);
                res.locals.arty = []

                Article.find({ _id: arrOfIDs }, (err, articles) => {
                    if (err) {
                        console.log(err)
                    } else {
                        whatever++
                        //arrOfAllOutfits.push(articles)
                        console.log(results.length)
                        console.log(whatever)
                        arrOfAllOutfits.push(articles)
                        if (whatever == results.length) { // use == and not = bc that's assigning and not checking 
                            console.log("on right page render")
                            console.log(arrOfAllOutfits)
                            res.render("outfitspage", { data: arrOfAllOutfits })

                        }
                    }
                })

            };
            // console.log(res.locals.arty)
            // res.render("outfitspage", 
            // {outfitOfArts: results,  // 1st variable, data of user collections
            // myPicksOutfits: ""}); // 2nd variable, data of my picked collections
        };
    });
})

/* ------------------- DELETE - Outfits -------------------*/

router.post("/deleteOutfit/:id", (req, res) => {
    console.log("youre about to delete an OF");
    var id = req.params.id;
    console.log(id);

    Outfits.findByIdAndRemove({ _id: id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/outfitspage');
        };
    });
});


module.exports = router;
