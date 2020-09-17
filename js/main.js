$(document).ready(function() {

  $.ajax(
    {
      "url": "https://flynn.boolean.careers/exercises/api/array/music",
      "method": "GET",
      "success": function (data, stato) {
        var response = data.response;

        //ciclo ogni disco presente nell'array
        for(var i = 0; i < response.length; i++){
          var dischi = response[i];

          //preparo e compilo il mio template
          var source = $("#music-template").html();
          var template = Handlebars.compile(source);

          var html = template(dischi);
          //scrivo nel cds-container il contenuto del mio template
          $(".cds-container").append(html);
        }

      },
      "error": function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errori);
      }
    }
  );

  $("#musical-genre").change(function(){

    // alert('Selected value: ' + $(this).val());

    $.ajax(
      {
        "url": "https://flynn.boolean.careers/exercises/api/array/music",
        "method": "GET",
        "success": function (data, stato) {

          var genereMusicale = $("#musical-genre").val();

          var response = data.response;

          for(var i = 0; i < response.length; i++){
            var dischi = response[i].genre;
            var myClass = "." + dischi;
            $(myClass).hide();
          }

          $("." + genereMusicale).show();

        },
        "error": function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errori);
        }
      }
    );

});

});
