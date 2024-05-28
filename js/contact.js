function myMap() {
    var myCenter = new google.maps.LatLng(46.225659322085804, 14.362561794520724);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 15};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
      content: "<b>BIMO d.o.o.</b><br>Savska Loka 21B<br>4000 Kranj<br>Slovenia"
    });
    infowindow.open(map,marker);
  }