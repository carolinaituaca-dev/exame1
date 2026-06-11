/**
 * Alterna dinámicamente las pestañas de navegación del Navbar.
 * Cambia los estados activos del enlace seleccionado y despliega el carrusel o los cuadritos.
 */
function showPage(event, pageId) {
    // Previene el salto de página por defecto de los enlaces <a>
    event.preventDefault();

    var bienvenidaSection = document.getElementById('page-bienvenida');
    var perfilSection = document.getElementById('page-perfil');

    // Desactivar la clase 'active' de todos los enlaces nav-link
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    // Añadir clase active al enlace que recibió el clic
    event.currentTarget.classList.add('active');

    // Alternar la visibilidad de los contenedores centralizados
    if (pageId === 'bienvenida') {
        bienvenidaSection.classList.remove('d-none');
        perfilSection.classList.add('d-none');
    } else if (pageId === 'perfil') {
        bienvenidaSection.classList.add('d-none');
        perfilSection.classList.remove('d-none');
    }
}