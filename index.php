<!DOCTYPE html>
<html>
<head>
    <title>Wifi - Home</title>
	<meta charset="utf-8" />
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>

<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.4/angular.min.js"></script>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

    <script src="app.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body id="Home" ng-app="myapp" ng-controller="mijnCtrl">

<section class="Container">

	<div class="content row" ng-controller="mijnCtrl">
		<?php include "header.php" ?>
		<div class="col-lg-5">
		<p>	Welkom op de website gratis wifi-hotspots in Antwerpen. Hier zult
			u een overzicht vinden over alle wifi hotspots die er te vinden zijn
			binnen t stad. </p>
			<style>
      #map1 {
        width: 600px;
        height: 400px;
        background-color: #CCC;
        margin-left: 2%;
      }
    </style>
<script src="https://maps.googleapis.com/maps/api/js"></script>
    <script>
      function initialize() {
        var mapCanvas = document.getElementById('map1');
        var mapOptions = {
          center: new google.maps.LatLng(51.2192159, 4.4028818),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    </script>
<div id="map1"></div>
    	</div>
		<div class="col-lg-3">
		<?php include "carousel.php" ?>		
	</div>
</section>

</body>
</html>