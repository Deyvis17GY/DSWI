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

