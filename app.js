//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []); 
//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Home', {
        templateUrl: 'view/home.php',
        controller: 'mainController'
    }).
      when('/Map', {
        templateUrl: 'view/map.php',
        controller: 'mapController'
      }).
      when('/Table', {
        templateUrl: 'view/table.php',
        controller: 'tableController'
      }).
      otherwise({
        redirectTo: '/Home'
      });
}]);
 
 
sampleApp.controller('mainController', function($scope) {
     
    $scope.message = 'Dit de main Controller';
     
});

sampleApp.controller('tableController', function($scope) {
     
    $scope.message = 'Dit de Table Controller';
         
    var json = (function () { 
            var json = null; 
                $.ajax({ 
                    'async': false, 
                    'global': true, 
                    'url': "http://localhost:3000/", 
                    'dataType': "json", 
                    'success': function (data) {
                     json = data; } }); 
                return json;
         })();
 stringy = JSON.stringify(json);

 $scope.latLng = JSON.parse(stringy);
    /*
for (var i = 0, length = json.length; i < length; i++) {
    var data = [];
    $scope.latLng = [];
  data[i] = json[i];
      $scope.latLng[i] = data[i].postcode;
}
*/     
});

 
 
sampleApp.controller('mapController', function($scope) {


$scope.message = 'Dit is de map';


var app = angular.module("myapp",[]);


      var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:  51.2192159, lng: 4.4028818},
    zoom: 10
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

    var infoWindow  = new google.maps.Marker({
    position: pos,
    map: map,
    title: "You are here"

  });

      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

$scope.handleLocationError = function(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
         var json = (function () { 
            var json = null; 
                $.ajax({ 
                    'async': false, 
                    'global': true, 
                    'url': "http://localhost:3000/", 
                    'dataType': "json", 
                    'success': function (data) {
                     json = data; } }); 
                return json;
         console.log(json);
         })();


for (var i = 0, length = json.length; i < length; i++) {
  var data = json[i];
      latLng = new google.maps.LatLng(data.point_lat, data.point_lng);
      titel = data.straat +" "+  data.huisnr;

  // Creating a marker and putting it on the map
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: titel,
    icon: "images/wifi.png"
  });
  marker.addListener('click', $scope.toggleBounce);
}

var infoWindow = new google.maps.InfoWindow();

// Attaching a click event to the current marker
google.maps.event.addListener(marker, "click", function(e) {
  infoWindow.setContent(data.description);
  infoWindow.open(map, marker);
});

// Creating a closure to retain the correct data 
//Note how I pass the current data in the loop into the closure (marker, data)
(function(marker, data) {

  // Attaching a click event to the current marker
  google.maps.event.addListener(marker, "click", function(e) {
    infoWindow.setContent(data.description);
    infoWindow.open(map, marker);
  });

})(marker, data);
      google.maps.event.addDomListener(window, 'load', $scope.initialize);
  });


