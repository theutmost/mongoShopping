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

            for (var i = 0; i < results.length; i++) {
                console.log("loop " + i)
                var arrOfIDs = results[i].articles;
                // console.log(arrOfIDs);

                Article.find({ _id: arrOfIDs }, function (err, articles) {
                    if (err) {
                        console.log(err)
                    } else {
                        arrOfAllOutfits.push(articles)
                        if (i = results.length) {
                            console.log("on right page render")
                            console.log(arrOfAllOutfits)
                            res.render("outfitspage", { data: arrOfAllOutfits })
                        }
                    }
                })

            };

            // res.render("outfitspage", 
            // {outfitOfArts: results,  // 1st variable, data of user collections
            // myPicksOutfits: ""}); // 2nd variable, data of my picked collections
        };
    });
})

module.exports = router;
