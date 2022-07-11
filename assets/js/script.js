// *Google Map API
//src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCa0K7K6LvUmWowJv5xcYDggiKUTfo0m8U&callback=initMap&v=weekly"
//defer
//load function initMap
//function initMap() {
    //const options = {
        //zoom: 8,
        //center:{lat:39.7684,lng:-86.1581}
    //}
    //const map = new google.map.Map(document.getElementById("map"), {
        
    //});
    //marker postion
    //const marker = new google.maps.Marker({
       // position: uluru,
       // map: map,
   // });
}

//load map
function initMap() {
   var uluru = {lat: 39.7684, lng: -86.1581 },
   var map = new google.map.Map(doctument.getElementById(`map`), {
      zoom: 8,
      mapId: `4cde6798d5472110`,
   });
    
var marker = new google.maps.Marker({
    position: uluru,
    map: map,
});
}
window.initMap = initMap;