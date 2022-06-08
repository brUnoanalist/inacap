$(document).ready(function(){

   

})
function Token(){
    Usuario=$("input[type=text][name=user]" ).val();
    Pass=$("input[type=password][name=pas]" ).val();
         
    $.ajax({
        type:'POST',
        url:" https://codigo-alfa.cl/Api/getUsuarioFrontEnd",
        data: { "Usuario":Usuario, " Pass":Pass},
        dataType:"json",
        success:function(data){
            
            console.log(data.token) 
            localStorage.setItem("token", data.token);

            let variable = localStorage.getItem("token");
            console.log(variable)
            

            
            
        }
    })
    }
Token()

