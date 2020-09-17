$(document).ready(function() {

  $.ajax(
    {
      "url": "https://flynn.boolean.careers/exercises/api/array/music",
      "method": "GET",
      "success": function (data, stato) {
        var response = data.response;

        for(var i = 0; i < response.length; i++){
          var dischi = response[i];

          var source = $("#music-template").html();
          var template = Handlebars.compile(source);

          var html = template(dischi);

          $(".cds-container").append(html);
        }

      },
      "error": function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errori);
      }
    }
  );


});
