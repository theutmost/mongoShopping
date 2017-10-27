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
            res.render("outfitspage", {resultsArts: results})
        };
    });
})

module.exports = router;
