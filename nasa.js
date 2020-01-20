$(document).ready(function(){
const queryURL = "https://api.nasa.gov/planetary/apod?api_key=DwHMo5XFQLI1nvan3AaeqRHeC0bRCelkGUVP9oH4";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
        $(document).ajaxSuccess(function() {
          if (response.media_type === "photo") {
            $(".row").css("backgroundImage", "url(" + response.url + ")");
            $(".row").css({height: '700px' });
            $(".row").css({width: "100%"});
            $(".row").css("position", "absolute");
            $(".row").css("backgroundRepeat", "repeat");
            // $(".container").css({height: "auto"}); 
            console.log(response); 
          }
          else {
            $(".container").css("backgroundImage", "url(milky_way.jpg)");
            $(".container").css({height: "1000px" });
            $(".container").css({width: "100%"});
            // $(".row").css("position", "absolute");
            $(".container").css("backgroundRepeat", "repeat");
          }; 
            
        });

  });
//   $('html, body').css({
//     overflow: 'hidden',
//     height: '100%'
// });
});


