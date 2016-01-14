var express = require("express");
var bodyparser = require("body-parser");
var app = express();
var klant =[];
var lat = [];
var lng = [];
var position =[];
var alles = [];
var huisnr =[];
var straatnamen = [];
var gemeentes = [];
var postcodes =[];
app.use(bodyparser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get("/latitude", function(req,res){

var request = require("request")

var url = "http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json"
request({

    url: url,
    json: true
    
}, function (error, response, wifi) {

	    if (!error && response.statusCode === 200) 
	    {
			for(var i =0; i<wifi.data.length; i++)
			{

				var wifiID = wifi.data[i];

				lat.push( wifiID.point_lat);
			}
	     } 
	     res.json(lat)

	})
});

app.get("/longitude", function(req,res){

var request = require("request")

var url = "http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json"
request({

    url: url,
    json: true
    
}, function (error, response, wifi) {

	    if (!error && response.statusCode === 200) 
	    {
			for(var i =0; i<wifi.data.length; i++)
			{
				var wifiID = wifi.data[i];

				lng.push(wifiID.point_lng);
			}
	     } 
	     res.json(lng)

	})
});

app.get("/", function(req,res){

var request = require("request")

var url = "http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json"
request({

    url: url,
    json: true
    
}, function (error, response, wifi) {

	    if (!error && response.statusCode === 200) 
	    {
			for(var i =0; i<wifi.data.length; i++)
			{
				var wifiID = wifi.data[i];
				//console.log(wifiID.id);

				alles.push(wifiID);
			}
	     } 
	     res.json(alles)

	})
});

app.get("/huisnr", function(req,res){

var request = require("request")

var url = "http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json"
request({

    url: url,
    json: true
    
}, function (error, response, wifi) {

	    if (!error && response.statusCode === 200) 
	    {
			for(var i =0; i<wifi.data.length; i++)
			{
				var wifiID = wifi.data[i];	

				huisnr.push(wifiID.huisnr);
			}
	     }
	     res.json(huisnr)

	})
});

app.get("/straatnaam", function(req,res){

var request = require("request")

var url = "http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json"
request({

    url: url,
    json: true
    
}, function (error, response, wifi) {

	    if (!error && response.statusCode === 200) 
	    {
			for(var i =0; i<wifi.data.length; i++)
			{
				var wifiID = wifi.data[i];	

				straatnamen.push(wifiID.straat);
			}
	     }
	     res.json(straatnamen + "<br>")

	})
});

app.get("/gemeentes", function(req,res){

var request = require("request")

var url = "http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json"
request({

    url: url,
    json: true
    
}, function (error, response, wifi) {

	    if (!error && response.statusCode === 200) 
	    {
			for(var i =0; i<wifi.data.length; i++)
			{
				var wifiID = wifi.data[i];	
				gemeentes.push(wifiID.gemeente);
			}
	     }
	     res.json(gemeentes)

	})
});

app.get("/postcodes", function(req,res){

var request = require("request")

var url = "http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json"
request({

    url: url,
    json: true
    
}, function (error, response, wifi) {

	    if (!error && response.statusCode === 200) 
	    {
			for(var i =0; i<wifi.data.length; i++)
			{
				var wifiID = wifi.data[i];	
				postcodes.push(wifiID.postcode);
			}
	     }
	     res.json(postcodes)

	})
});


app.listen(3000);
