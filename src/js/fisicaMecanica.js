var navOculto = document.querySelector('.oculto-nav');
var navMostrar = document.querySelector(".navbar-oculto")
navOculto.addEventListener('mouseover', function() {

    if (navMostrar.style.display != 'none') {
        navMostrar.style.display = 'none';
      } else {
        navMostrar.style.display = 'block';
        navMostrar.style.positon = "absolute";
      }
    
})
navOculto.addEventListener('mouseout', function() {
    navMostrar.style.display = 'none';
  });

function barrasHorizontales() {
    var elemento = document.getElementsByClassName("aside");
    if (elemento[0].style.display != 'none') {
        elemento[0].style.display = 'none';
    } 
    else if (elemento[0].style.display == 'none') {
        elemento[0].style.display = 'grid';

    }
}


    // Selecciona el contenido del header
    var headerContent = document.querySelector('.navbar-header').innerHTML;

    // Selecciona el elemento aside
    var asideElement = document.querySelector('.aside-3');

    // Inserta el contenido del header en el aside
    asideElement.innerHTML = headerContent;

