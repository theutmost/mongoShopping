mongoose = require("mongoose");

var articleSchema = mongoose.Schema({
	type: String,
	price: Number,
	brand: String,
	imageLink: String,
	// stars: stars,
	// alwaysThere: {
    //     type: Boolean,
    //     default: false, // <-- for new items, not alreadyThere djs.
    // },
})

var Article = mongoose.model("Article", articleSchema);
module.exports = Article;


/*
//create 1 article in collection
Article.create([
	{type: "top",	
	price: 44,
	brand: "Evan's",
	imageLink: "https://i.pinimg.com/736x/93/16/5e/93165e5ec8a967a95c19f56e8916322d--crop-shirt-pajama-shirt.jpg",
},
	{type: "bottom",	
	price: 88,
	brand: "RienWare",
	imageLink: "https://i.pinimg.com/736x/93/16/5e/93165e5ec8a967a95c19f56e8916322d--crop-shirt-pajama-shirt.jpg",
},
	{type: "accessory",	
	price: 22,
	brand: "Flo's Fashion",
	imageLink: "https://i.pinimg.com/736x/93/16/5e/93165e5ec8a967a95c19f56e8916322d--crop-shirt-pajama-shirt.jpg",
},
	{type: "shoes",	
	price: 55,
	brand: "Sanni Style",
	imageLink: "https://i.pinimg.com/736x/93/16/5e/93165e5ec8a967a95c19f56e8916322d--crop-shirt-pajama-shirt.jpg",
}],

function(error, newTop){
	if (error){
		console.log("something went wrong")
	} else {
		// console.log("added bottom 1");
		// console.log(newTop)
	}
});

*/