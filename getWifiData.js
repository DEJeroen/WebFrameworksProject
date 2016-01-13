testArray = [];
var express = require("express");
var app = express();



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
//            console.log(wifiID.straat);
            klant = wifiID.straat;
            testArray[i] = klant;
        }                                
    }
    for (var i =0; i < wifi.data.length; i++) {
console.log(testArray[i]);
    }
                                    

});
