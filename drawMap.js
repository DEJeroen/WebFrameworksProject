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
  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });

         var json = (function () { 
            var json = null; 
                $.ajax({ 
                    'async': false, 
                    'global': true, 
                    'url': "http://localhost:3000/", 
                    'dataType': "json", 
                    'success': function (data) {
                     json = data; } }); 
                return json;})(); 



for (var i = 0, length = json.length; i < length; i++) {
  var data = json[i];
      latLng = new google.maps.LatLng(data.point_lat, data.point_lng);
      titel = data.straat +" "+  data.huisnr;

  // Creating a marker and putting it on the map
  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: titel
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
      $scope.toggleBounce = function() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    console.log("hallo");
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}


      }
      google.maps.event.addDomListener(window, 'load', $scope.initialize);
  });

