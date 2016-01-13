<!DOCTYPE html>
<html>
<head>
    <title>Wifi - Maps</title>
	<meta charset="utf-8" />
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>  

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

    <link rel="stylesheet" type="text/css" href="style.css"><section class="Container">
    
    <style>
      #map {
        width: 1200px;
        height: 600px;
        background-color: #CCC;
        margin-left: auto;
        margin-right: auto;
      }
    </style>

<script src="https://maps.googleapis.com/maps/api/js"></script>
      <script>
      var lati = [];
      var longi =[];
var app = angular.module("myapp",[]);

app.controller("mijnCtrl", function($scope, $http){
 
  console.log("in ctrl");



  $scope.FetchLatitudes = function()
  {
    $http.get("http://localhost:3000/latitude").success(function(lat){
      $scope.lat = lat;
      lati.push(lat);
    })

    .error(function(err){
console.log(err);
    })
  }

  $scope.FetchLongitudes = function()
  {
    $http.get("http://localhost:3000/")
    .success(function(lng){
        $scope.lng = lng;
        longi.push(lng);
      })

    .error(function(err){
console.log(err);
    });

  }
    $scope.FetchLatitudes();
    $scope.FetchLongitudes();
   
  });
      function initialize() {
 var myLatLng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
      }
      google.maps.event.addDomListener(window, 'load', initialize);

     $(document).ready('#Home');  
    </script>
    </head>
    <body id="Home" ng-app="myapp" ng-controller="mijnCtrl">

<div class="content row" ng-controller="mijnCtrl">

    <?php include "header.php" ?>
   
    <div id="map"></div>
   
    <ul>
<li>{{lat}}</li>
<li>{{lng}}</li>
</ul>
    </body>
 </html>




