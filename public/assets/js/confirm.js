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
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPad") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    )
      window.open(
        "http://maps.apple.com/?q=Indianapolis's&sll=37.422,-122.084&z=10&t=s"
      );
 
    else
      window.open(
        "https://maps.google.com/maps/place/indianapolis/@37.422,-122.084,17z/"
      );
  }
  console.log(initMap)
  window.initMap = initMap;