$(document).ready(function(){
    
   alert(variable)

})
function bandas(variable){
    
         
    $.ajax({
        
        type:'GET',
        url:"https://www.codigo-alfa.cl/Api/getBandas/"+variable,
        data: {},
        dataType:"json",
        success:function(data){
            console.log('success'.data)    
            
            

            
            
        }
    })
    }
bandas()