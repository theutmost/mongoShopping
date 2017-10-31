//express
var express = require("express");
var router = express.Router();
//loading the models/schemas for the items in article
    var Outfits = require("./outfitCollection");

// routes stuff ---------------------------------------------------------                   

/* ------------------- READ ALL - Articles -------------------*/

router.get('/outfitspage', (req, res) => {
        Outfits.find(function(error, results){ //.find is Mongoose method
        if (error){
            console(error);
        } else {
            console.log(results)
            res.render("outfitspage", 
            {outfitOfArts: results,  // 1st variable, data of user collections
            myPicksOutfits: ""}); // 2nd variable, data of my picked collections
        };
    });
})

module.exports = router;
