<<<<<<< HEAD
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
=======
$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
      format: 'mm/dd/yyyy',
      orientation: "top right",
      container: container,
      todayHighlight: true,
      autoclose: true,
    };
    date_input.datepicker(options);
  })

  // container bootstrap-iso may need updated
  // 'top right' is creating an opposite effect


  
>>>>>>> 0751a0ae783fde3f10f7c7da7002507a0e7e342c
