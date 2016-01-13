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
    </style>
<script src="https://maps.googleapis.com/maps/api/js"></script>
    <script>
var app = angular.module("myapp",[]);

app.controller("mijnCtrl", function($scope, $http){
  //console.log("in ctrl");

  $scope.FetchData = function()
  {
    $http.get("http://localhost:3000/").success(function(posts){
      //console.log(lat);
      $scope.posts = posts;
    })

    .error(function(err){
console.log(err);
    })
  }
  $scope.FetchData();
});

    </script>
</head>
    <body id="Home" ng-app="myapp" ng-controller="mijnCtrl">  

    <?php include "header.php" ?>
   
<div class="straat">
<li ng-repeat="post in posts">{{post.straat}}, {{post.huisnr}}, postcode: {{post.postcode}}, gemeente: {{post.gemeente}}</li>
</div>

    </body>
</html>