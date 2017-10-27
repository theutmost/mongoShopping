var mongoose = require("mongoose");
var keys = require("./keys");

module.exports = {
    database: `mongodb://127.0.0.1:27017/coolclothes`, //adding / and name created this db in mongo

    startDB: function(){
        //to get rid of annoying warning.
        mongoose.Promise = global.Promise;
        mongoose.connect(this.database, {useMongoClient: true});

        var db = mongoose.connection;


        db.once("open", function(){
        console.log("connected to mongo db");
    });

    db.on("error", function(error){
        console.log(error);
    });
    }
    };