$(document).ready(function(){


    $.ajax({

            url:'http://138.68.64.12:3002/todo/',
            method:'GET',
            success:function(data){
                for(var i=0;i<data.length;i++){
                    $('ul').append('<li>'+data[i]['text']+'<span class=del>'+'X'+'</span></li>');
                }

            },
            error:function(){
                alert('errore');
            }
    });

    $(document).on('click', '#btn', function(){
        var userInput=prompt('inserisci una frase to do');
        $.ajax({
                url:'http://138.68.64.12:3002/todo/',
                method:'POST',
                data: {
                    text:userInput,

                },
                success:function(data){
                      $('ul').append('<li>'+data['text']+'</li>');
                      var thisId=data['id'];
                      var thisText=data['text'];
                      cancel(thisId,thisText);



                },
                error:function(data){
                    alert('errore');
                }


        });
    });
    //funzione che elimina un dato post
    function cancel(thisId,thisText){
      $('.del').click(function(){
          console.log('thisId', thisId)

          $.ajax({
            url:'http://138.68.64.12:3002/todo/',
            method:'DELETE',
            data:{
              id:thisId,
              text:thisText
            },
            success:function(data){


            },
            error:function(status){
              alert('status', status)
            }



          });


      });

  }







});
