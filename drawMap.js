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

    $scope.initialise = function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                animation: google.maps.Animation.DROP,
                title: "My Location"
            });
        });
        $scope.map = map;
    };
    google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());

    $scope.FetchLatitudes();
    $scope.FetchLongitudes();
   
  });
