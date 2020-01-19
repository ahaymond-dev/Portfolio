$(document).ready(function(){
const queryURL = "https://api.nasa.gov/planetary/apod?api_key=DwHMo5XFQLI1nvan3AaeqRHeC0bRCelkGUVP9oH4";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
        $(document).ajaxSuccess(function() {
            $(".row").css("backgroundImage", "url(" + response.url + ")");
            $(".row").css({height: '700px' });
            $(".row").css({width: "100%"});
            $(".row").css(position, "absolute");
            // $(".container").css({height: "auto"});   
            
        });

  });
  $('html, body').css({
    overflow: 'hidden',
    height: '100%'
});
});


