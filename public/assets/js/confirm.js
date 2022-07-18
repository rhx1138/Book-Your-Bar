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
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.422, lng: -122.084},
      zoom: 5
    });
    var marker = new google.maps.Marker({
      position: {lat: 37.421903, lng: -122.084674},
      map: map,
      title: 'Resturant Location'
    });
}

function mapsSelector() {
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPad") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    )
      window.open(
        "http://maps.apple.com/?q=Broccoli+Bill's&sll=40.00537,-86.08867&z=10&t=s"
      );
    /* else use Google */
    // window.open("https://maps.google.com/maps?daddr=40.00537,-86.08867&amp;ll=");
    else
      window.open(
        "https://maps.google.com/maps/place/Broccoli+Bill's/@40.005404,-86.0910243,17z/data=!3m1!4b1!4m5!3m4!1s0x8814b1fcb424599f:0xba2e242f8178eb65!8m2!3d40.0053999!4d-86.0888356"
      );
  }
  console.log(initMap)
  window.initMap = initMap;