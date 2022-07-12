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
    
    function renderCards (data) {
     
      $('.row').empty()
      for(let i = 0; i < 3; i++) {
        let bar = data[i];
  
        $('.row').append(` <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3 bg-indigo-200">
                <h4 id="bar-name" class="text-2xl my-0 fw-normal"><strong>${bar.name}</strong></h4>
            </div>
            <div class="card-body bg-green-200">
            <img class="bar-card-image" src= ${bar.image_url} alt = "${bar.name}">
            <h1 class="card-title bar-card-content pricing-card-title">Rating: ${bar.rating}</h1>
            <button id="${bar.name}" type="button"
                class="book-button bar-card-content w-100 btn btn-lg btn-outline-dark rounded-0">Book</button>
        </div>
        </div>
    </div>`)
      }
    }

    function addBookListeners () {
      $('.book-button').each(function (){
        
        $(this).on('click', function(){
          console.log($(this).attr('id'))
          localStorage.setItem('barName', $(this).attr('id'))
          location.href="/public/confirm.html"
        })
      })
    }

    function fetchYelpData (userCity) {
        fetch(`http://localhost:3000`,  {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }, 
        body:JSON.stringify({
          userCity: userCity
        })
       
      }).then(response => response.json()).then(data => {
        console.log('yelp data', data);
        let bars = data.businesses 
        renderCards(bars)
        addBookListeners()

      }).catch(error => {
        console.log('yelp error', error);
      })
      console.log('THIS IS AFTER FETCH'); 
    
    }

   $('#submit').on('click', function() {

    let userSelectedCity = $('input[type="search"]').val();
    if(!userSelectedCity) {
      return;
    }
    fetchYelpData(userSelectedCity);
   })
  })


  