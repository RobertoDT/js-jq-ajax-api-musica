$(document).ready(function() {

  var genereMusicale = $(".begin").next().val();

  $.ajax(
    {
      "url": "https://flynn.boolean.careers/exercises/api/array/music",
      "method": "GET",
      "success": function (data, stato) {
        var response = data.response;

        filterAlbum(genereMusicale, response);

      },
      "error": function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errori);
      }
    }
  );

//   $("#musical-genre").change(function(){
//
//     $.ajax(
//       {
//         "url": "https://flynn.boolean.careers/exercises/api/array/music",
//         "method": "GET",
//         "success": function (data, stato) {
//
//           var genereMusicale = $("#musical-genre").val();
//
//           var response = data.response;
//
//           for(var i = 0; i < response.length; i++){
//             var dischi = response[i].genre;
//             var myClass = "." + dischi;
//             $(myClass).hide();
//           }
//
//           $("." + genereMusicale).show();
//
//         },
//         "error": function (richiesta, stato, errori) {
//           alert("E' avvenuto un errore. " + errori);
//         }
//       }
//     );
//
// });

$("#musical-genre").change(function(){

  console.log(genereMusicale);
    $.ajax(
      {
        "url": "https://flynn.boolean.careers/exercises/api/array/music",
        "method": "GET",
        "success": function (data, stato) {
          var genereMusicale = $("#musical-genre").val();
          var response = data.response;

          filterAlbum(genereMusicale, response);
        },
        "error": function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errori);
        }
      }
    );

});

});


function filterAlbum(genere, risposta){
  $(".cd").remove();

  var source = $("#music-template").html();
  var template = Handlebars.compile(source);

  for(var i = 0; i < risposta.length; i++){

    var dischi = risposta[i].genre.toLowerCase();
    
    if(genere == dischi){
      var html = template(risposta[i]);
      $(".cds-container").append(html);
    } else if(genere == "tutti"){
      var html = template(risposta[i]);
      $(".cds-container").append(html);
    }
  }
}
