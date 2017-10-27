var express = require("express"); // require express
var app = express(); //execute/use express
//--------------
var database = require("./config/database");
database.startDB(); //connect ot db
//--------------
var ejs = require("ejs")
app.set("view engine", "ejs") // establishing the view engine to be EJS 
app.set("views", ["./services/articles/views", "./services/outfits/views"]) // setting path to find both the articles and outfits Views folder

//--------------
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })); // b-p middleware 1
app.use(bodyParser.json()); // b-p middleware 2

//setting the public folder to be avail to see the images
app.use(express.static("./public"));

//--------------
var routesArts = require("./services/articles/routes"); // require routes, imported from routes.js page
app.use(routesArts); // executing the use of the routes: gets/posts

var routesOutfits = require("./services/outfits/routes"); // require routes, imported from routes.js page
app.use(routesOutfits); // executing the use of the routes: gets/posts


app.get("/", (req, res) => {
    res.redirect("/index");
});
app.post("/", function(req, res){
    var pushbutton = req.body.pushbutton
    if (pushbutton == "alloutfits"){
        res.render("outfitspage.ejs")
    } else if (pushbutton == "allarticles"){
        res.render("articlespage.ejs")
    } 
});
//--------------





//------------------------------------------------

// listen on a PORT
app.listen(7777, () => {
    var model = require('./config/database'); // requir the model db + passwords 
    model.startDB(); // execute/use the model db + passwords 
    console.log("server is listening from port 7777");
})

