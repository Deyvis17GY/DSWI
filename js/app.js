$(document).ready(function(){
    
    $('#ingresar').click(function (e) {
        var usuario=$('#usuario').val();
        var contraseña=$('#password').val();
        
        if(usuario=="admin" && contraseña =="1234"){
            console.log("ir");
            window.location.href = "filtroProducto.html";
           
        }else{
            alert("usuario Incorrecto")
        }
            
        e.preventDefault();
        
    });
   
   
        
    
    
   
});



    // NAVBAR ANTES DE HACER SCROLL
window.addEventListener("scroll",function() {

    var header = document.querySelector("nav");
     
    var a=document.getElementById("titulo");
    var itemsA=document.getElementById("carrito");
    var itemsB=document.getElementById("cuenta");
    //var itemsC=document.getElementById("itemsC");
    var flecha =document.getElementById("flecha");
    header.classList.toggle("sticky",window.scrollY > 0);
    a.classList.toggle("text-light",window.scrollY>0);
    itemsA.classList.toggle("text-light",window.scrollY>0);
    itemsB.classList.toggle("text-light",window.scrollY>0);
    flecha.classList.toggle("text-light",window.scrollY>0);
    
  
  })
  
  
