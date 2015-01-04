"use strict"
     
$(function(){

  $("#translate").on("click", function(){
     translate();
  });

});

function translate()
{
  var query = $("#input").val();
  log("query:", query);
  $.ajax(
  {
    url: '/translate/',
    type: 'post',
    data: ({'from': 'en',
            'to': 'ru',
            'query': query
        }),
    dataType : 'json',
    success: function(json)
    {
        log('NodeLOG: ', json);
        show(json);
    },
    error: function (xhr, textStatus, errorThrown) {
        alert ("Server or network are not available now." + textStatus + ", " + errorThrown);
        log("translate() error: " + textStatus + ", " + errorThrown)
    }
  });
}

function show(json) {
  $("#output").text(json.out_text);
}

function log() {
  console.log.apply(console, arguments);
}

      
