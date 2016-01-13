<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      html { height: 100% }
      body { height: 100%; margin: 0; padding: 0 }
      #map_canvas { height: 100% }
    </style>
    <script type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js&sensor=true">
    </script>
    <script type="text/javascript">
      var map;
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(58, 16),
          zoom: 7,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
      }
    </script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>    
  </head>
  <body onload="initialize()">
    <div id="map_canvas" style="width:100%; height:100%"></div>
    <script type="text/javascript">
      $(document).ready(function() {
        $.getJSON("wifi.txt", function(json1) {
          $.each(json1, function(key, data) {
            var latLng = new google.maps.LatLng(data.point_lat, data.point_lng); 
            // Creating a marker and putting it on the map
            var marker = new google.maps.Marker({
                position: latLng,
                title: data.title
            });
            marker.setMap(map);
          });
        });
      });
    </script>
  </body>
</html>