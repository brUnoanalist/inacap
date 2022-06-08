$(document).ready(function(){
let bandas = localStorage.getItem("token");
console.log(bandas)
   

})
function Token(){
    
         
    $.ajax({
        type:'GET',
        url:"https://www.codigo-alfa.cl/Api/getBandas/"+bandas,
        data: {},
        dataType:"json",
        success:function(data){
            console.log(data.token)    
            
            

            
            
        }
    })
    }
Token()