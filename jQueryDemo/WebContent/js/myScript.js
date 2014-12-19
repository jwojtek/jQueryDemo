$('submit').click(function(){
	validateForm();   
});



function validateForm(){



    var nameReg = /^[A-Za-z]+$/;
    var numberReg =  /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    var name = $('#name').val();
    var lastname = $('#lastname').val();
    var email = $('#email').val();
    var pozycja = $('#pozycja').val();
    var numer = $('#numer').val();
   

    var inputVal = new Array(name, lastname, email, pozycja, numer);

    var inputMessage = new Array("name", "lastname", "email", "pozycja", "numer");

     $('.error').hide();
     // name
 
    // empty
        if(inputVal[0] == ""){
            $('#name').after('<span class="error"> Proszę wprowadzić ' + inputMessage[0] + '</span>');
        } 
     // rebexp         
        else if(!nameReg.test(name)){
            $('#name').after('<span class="error"> Proszę wprowadzić litery</span>');
        }
// min / max len
        
        
        
        
        
        if(inputVal[1] == ""){
            $('#lastname').after('<span class="error"> Proszę wprowadzić ' + inputMessage[1] + '</span>');
        }
        
        else if(!nameReg.test(lastname)){
            $('#lastname').after('<span class="error"> Proszę wprowadzić litery</span>');
        }

        if(inputVal[2] == ""){
            $('#email').after('<span class="error"> Proszę wprowadzić ' + inputMessage[2] + '</span>');
        } 
        else if(!emailReg.test(email)){
            $('#email').after('<span class="error"> Proszę wprowadzić prawidłowy adres e-mail</span>');
        }

        
        if(inputVal[3] == ""){
            $('#pozycja').after('<span class="error">Proszę wprowadzić ' + inputMessage[3] + '</span>');
        }  
        
        else if(!nameReg.test(pozycja)){
            $('#pozycja').after('<span class="error">Proszę wprowadzić pozycję</span>');
        }
        
        
        if(inputVal[4] == ""){
            $('#numer').after('<span class="error"> Proszę wprowadzić ' + inputMessage[4] + '</span>');
        } 
        else if(!numberReg.test(numer)){
            $('#numer').after('<span class="error">Proszę wprowadzić liczbę</span>');
        }

     
}(jQuery);
              
