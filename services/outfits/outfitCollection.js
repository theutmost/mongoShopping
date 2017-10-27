mongoose = require("mongoose");

var outfitSchema = mongoose.Schema({
	// articles: [ Articles.find().id ], // array of article ids,
	articles: [String],
	name: String,
	creator: String,
	itemsInArr: Number,
	// price: // actually don't save this, 
		// it exists implicitly elsewhere in your data object
})


var Outfits = mongoose.model("Outfit", outfitSchema);

var arrOfProds = [
	"https://i.pinimg.com/736x/93/16/5e/93165e5ec8a967a95c19f56e8916322d--crop-shirt-pajama-shirt.jpg",
"https://i.pinimg.com/736x/93/16/5e/93165e5ec8a967a95c19f56e8916322d--crop-shirt-pajama-shirt.jpg",
"https://i.pinimg.com/736x/93/16/5e/93165e5ec8a967a95c19f56e8916322d--crop-shirt-pajama-shirt.jpg",
"https://i.pinimg.com/736x/93/16/5e/93165e5ec8a967a95c19f56e8916322d--crop-shirt-pajama-shirt.jpg",
"https://i.pinimg.com/736x/93/16/5e/93165e5ec8a967a95c19f56e8916322d--crop-shirt-pajama-shirt.jpg",
]

Outfits.create({

articles: arrOfProds,
name: "Steppas Style",
creator: "Steppas Ireland",
itemsInArr: 5,

})

module.exports = Outfits;
