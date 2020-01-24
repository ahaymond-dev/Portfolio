$(document).ready(function(){
const queryURL = "https://api.nasa.gov/planetary/apod?api_key=DwHMo5XFQLI1nvan3AaeqRHeC0bRCelkGUVP9oH4";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
        $(document).ajaxSuccess(function() {
          console.log(response);
          if (response.media_type === "image") {
            $(".container").css("backgroundImage", "url(" + response.url + ")");
            $(".container").css({height: '100%' });
            $(".container").css({width: "100%"});
            $(".container").css("position", "absolute");
            $(".container").css("backgroundRepeat", "repeat");
            // $(".row").css("backgroundSize", "auto");
            $(".container").css({height: "auto"}); 
            $(".container").css("margin", "auto");
            // console.log(response); 
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


