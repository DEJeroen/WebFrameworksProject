<!DOCTYPE html>
<html>
<head>
    <title>Wifi - WifiDetails</title>
	<meta charset="utf-8" />
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>

<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

    <link rel="stylesheet" type="text/css" href="style.css">

    <style>
    .straat{
      overflow: auto;
      border:1px solid blue;
    }

.container {
   width: 100%;
}
.tabel1 {
    float:left;
    width:25%;

}
.tabel2 {
    float:left;
    width:25%;

}
.tabel3 {
    float:left;
    width:25%;

}
.tabel4 {
    width:25%;

}
    </style>
<script src="https://maps.googleapis.com/maps/api/js"></script>
    <script>
var app = angular.module("myapp",[]);

app.controller("mijnCtrl", function($scope, $http){
  

  $scope.Fetchhuisnr = function()
  {
    $http.get("http://localhost:3000/huisnr").success(function(huisnr){
      
      $scope.huisnr = huisnr
    })

    .error(function(err){
console.log(err);
    })
  }

    $scope.Fetchstraat = function()
  {
    $http.get("http://localhost:3000/straatnaam").success(function(straatnaam){
      
      $scope.straatnaam = straatnaam; 
         
    })

    .error(function(err){
console.log(err);
    })
  }

    $scope.Fetchgemeente = function()
  {
    $http.get("http://localhost:3000/gemeentes").success(function(gemeente){
   
      $scope.gemeente = gemeente
    })

    .error(function(err){
console.log(err);
    })
  }

    $scope.Fetchpostcode = function()
  {
    $http.get("http://localhost:3000/postcodes").success(function(postcode){
      
      $scope.postcode = postcode
    })

    .error(function(err){
console.log(err);
    })
  }

      /*$scope.FetchData = function()
  {
    $http.get("http://localhost:3000/").success(function(posts){
      $scope.posts = posts

    .error(function(err){
console.log(err);
    })
  }*/
  $scope.Fetchhuisnr();
  $scope.Fetchpostcode();
  $scope.Fetchgemeente();
  $scope.Fetchstraat();
  //$scope.FetchData();
});

    </script>
</head>
    <body id="Home" ng-app="myapp" ng-controller="mijnCtrl">  

    <?php include "header.php" ?>



<div class="container">
<div class="tabel1">{{straatnaam}}</div>

<div class="tabel2"> {{huisnr}}<br></div>

  <div class="tabel3" >{{postcode}}<br></div>

  <div class="tabel4">{{gemeente}} <br> </div> 
  </div>
    </body>
</html>