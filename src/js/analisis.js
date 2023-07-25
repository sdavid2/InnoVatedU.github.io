var titulo = document.querySelectorAll(".desplegar");

titulo.forEach(function(titulo) {
    titulo.addEventListener('click', function(){
        var contenido = this.nextElementSibling;
        if (contenido.style.display === "none"){
            contenido.style.display ="block";
        } else {
            contenido.style.display = "none";
        }
    })
})