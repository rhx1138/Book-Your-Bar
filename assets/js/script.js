function myMap() {
    var mapProp = {
      center: new google.maps.LatLng(39.7684, -86.1581),
      zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
  }