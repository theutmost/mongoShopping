mongoose = require("mongoose");

var outfitSchema = mongoose.Schema({
	// articles: [ Articles.find().id ], // array of article ids,
	articles: [mongoose.Schema.ObjectId],
	name: String,
	brand: String,
	itemsInArr: Number,
})


var Outfits = mongoose.model("Outfit", outfitSchema);

/* var arrOfCartItems = [  // an array of the items in my cart on the articlespage
] */

/* Outfits.create({  //<---------this is pushing data into my OUTFITS collection

articles: arrOfProds,
name: "Steppas Style",
creator: "Steppas Ireland",
itemsInArr: arrOfCartItems.length,
}) */

module.exports = Outfits;
