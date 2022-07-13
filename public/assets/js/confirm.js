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

