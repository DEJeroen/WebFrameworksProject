var express = require("express");
var bodyparser = require("body-parser");
var app = express();
var klant = [];
var boyd =[];
app.use(bodyparser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get("/", function(req,res){

var request = require("request")

var url = "http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json"
request({

    url: url,
    json: true
    
}, function (error, response, wifi) {
    if (!error && response.statusCode === 200) {
        //console.log(wifi); // Print the json response
        
        for (var i =0; i < wifi.data.length; i++) {
            var wifiID= wifi.data[i];
            console.log(wifiID.straat);
            klant[i] = wifiID.straat;
//	        res.send(200,klant);
        }                                
    }
    for (var i =0; i < wifi.data.length; i++) {
//	res.send(200,klant[i]);
    }
                                    
	res.send(200,"hallo");
})


});
app.post("/users",function(req,res){
console.log("INPOST");

console.log(req.body.naam);
console.log(req.body.voornaam);
console.log(req.body.hobby);
});
app.get("/users", function(req,res){
	//res.send(200,"toon alle gebruikers");

	var personen = [
	{
		"naam":"Franken",
		"voornaam":"Boyd",
		"hobby":"gamen"
	},
	{
		"naam":"Lmao",
		"voornaam":"Rofl",
		"hobby":"Kletsen"
	}]

	res.json(personen);

});
app.listen(3000);
