$(document).ready(function(){
const queryURL = "https://api.nasa.gov/planetary/apod?api_key=DwHMo5XFQLI1nvan3AaeqRHeC0bRCelkGUVP9oH4";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
        $(document).ajaxSuccess(function() {
            $(".container").css("backgroundImage", "url(" + response.url + ")");
            $(".container").css({height: '700px' });
            $(".container").css({width: "100%"});
            // $(".container").css({height: "auto"});   
            
        });

  });
  $('html, body').css({
    overflow: 'hidden',
    height: '100%'
});
});


