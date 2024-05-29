window.onload = function() {
    if (window.innerWidth > 768) { // Cambia este valor al ancho mínimo de la pantalla de escritorio
        var imageWidth = document.querySelector('.profile-pic-main').offsetWidth;
        document.querySelector('#about-me').style.marginRight = imageWidth + 'px';
    }
}