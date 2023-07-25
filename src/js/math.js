// Obtener el encabezado
var header = document.getElementById("ls-FM-1");

// Obtener la posición de desplazamiento del encabezado
var sticky = header.offsetTop;

// Agregar la clase "sticky" al encabezado cuando se alcance su posición de desplazamiento. Quitar "sticky" cuando se deja su posición
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Cuando el usuario se desplace en la página, ejecutar myFunction
window.onscroll = function() {myFunction()};   
    
    
    
    
    
    
    
    
    
    // Obtener todos los encabezados h2
    var titulos = document.querySelectorAll('h2');

    // Agregar un evento click a cada encabezado
    titulos.forEach(function(titulo) {
        titulo.addEventListener('click', function() {
            // Obtener el contenido asociado al encabezado
            var contenido = this.nextElementSibling;

            // Contraer o expandir el contenido
            if (contenido.style.display === 'none') {
                contenido.style.display = 'block';
            } else {
                contenido.style.display = 'none';
            }
        });
    });


// Obtener todos los encabezados h2
    var titulos = document.querySelectorAll('h2');

    // Agregar un evento click a cada encabezado
    titulos.forEach(function(titulo) {
        titulo.addEventListener('click', function() {
            // Obtener el contenido asociado al encabezado
            var contenido = this.nextElementSibling;

            // Contraer o expandir el contenido
            if (contenido.style.display === 'none') {
                contenido.style.display = 'block';
            } else {
                contenido.style.display = 'none';
            }
        });
    });


 // Obtener todos los encabezados h2
 var titulos = document.querySelectorAll('h2');

 // Agregar un evento click a cada encabezado
 titulos.forEach(function(titulo) {
     titulo.addEventListener('click', function() {
         // Obtener el contenido asociado al encabezado
         var contenido = this.nextElementSibling;

         // Contraer o expandir el contenido
         if (contenido.style.display === 'none') {
             contenido.style.display = 'block';
             this.querySelector('.etiqueta').textContent = ' Ver menos';
         } else {
             contenido.style.display = 'none';
             this.querySelector('.etiqueta').textContent = ' Ver más';
         }
     });
 });

    // Obtener todos los encabezados h2
    var titulos = document.querySelectorAll('h2');

    // Agregar un evento click a cada encabezado
    titulos.forEach(function(titulo) {
        titulo.addEventListener('click', function() {
            // Obtener el contenido asociado al encabezado
            var contenido = this.nextElementSibling;

            // Contraer o expandir el contenido
            if (contenido.classList.contains('expandido')) {
                contenido.classList.remove('expandido');
            } else {
                contenido.classList.add('expandido');
            }
        });
    }); 