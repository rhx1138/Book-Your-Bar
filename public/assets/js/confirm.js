$(document).ready(function() {
    let barName = localStorage.getItem('barName')
    $('.bar-name').text(barName);

    function toggleHiddenClass() {
        $('#book-a-table').toggleClass('hidden')
        $('#confirmation-info').toggleClass('hidden')  
    }

    function showConfirmation(userData) {
        console.log('userdata', userData);
        $('#confirmation-details').append(`<h1>Thanks for booking ${userData.name}!</h1>
        <p>Your table for ${userData.num} is booked!
        We'll see on ${userData.date} at ${userData.time}.</p>`)
        
    }
    $('#confirmation-back').on('click', toggleHiddenClass)


    $('#book-table-form').on('submit', function(event){
        event.preventDefault()

        let name = $('#name').val();
        let num = $('#people').val();
        let date = $('#date').val();
        let time = $('#time').val();

        if(!name || !num || !date || !time) {
            return;
        }

        showConfirmation({name:name, num:num, date:date, time:time})
        toggleHiddenClass()        
    })

});

//map
//map referance
// let map = null;
// function initMap() {
//     let location = new Object();
//     navigator.geolocation.getCurrentPosition(function (pos) {
//         location.lat = pos.coords.latitude;
//         location.long = pos.coords.longitude;
//         //var location = { lat: 39.7684, 86.1581};
//         map = new google.maps.Map(document.getElementById("map"), {
//             zoom: 8,
//             center: { lat: 39.7684, lng: -86.1581 }
//         });

//         var marker = new google.maps.Marker({
//             position: { lat: 39.7684, lng: -86.1581 },
//             map: map
//         });
//     }
// }
function initMap(){
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.422, lng: -122.084},
      zoom: 16
    });
    const marker = new google.maps.Marker({
      position: {lat: 37.421903, lng: -122.084674},
      map: map,
      title: 'Resturant Location'
    });
}
  console.log(initMap)
  window.initMap = initMap;