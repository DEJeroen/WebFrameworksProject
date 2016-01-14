<<<<<<< HEAD
var app = angular.module("myapp",[]);

app.controller("mijnCtrl", function($scope, $http){

  $scope.initialize = function() {
        var mapOptions = {
           center: new google.maps.LatLng(51.2192159,  4.4028818),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);


         var json = (function () { 
            var json = null; 
                $.ajax({ 
                    'async': false, 
                    'global': false, 
                    'url': "http://localhost:3000/", 
                    'dataType': "json", 
                    'success': function (data) {
                     json = data; } }); 
                return json;})(); 



for (var i = 0, length = json.length; i < length; i++) {
  var data = json[i],
      latLng = new google.maps.LatLng(data.point_lat, data.point_lng); 

  // Creating a marker and putting it on the map
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: data.title
  });
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



      }
      google.maps.event.addDomListener(window, 'load', $scope.initialize);
  });
=======
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
>>>>>>> 46ec582c3d55b292d928c3953a4cce251011a577
