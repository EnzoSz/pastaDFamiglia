
document.addEventListener('DOMContentLoaded', function() {
    // capturamos el header del html
const header = document.querySelector('header');
// creamos una clase para el header
header.classList.add('main-header');
// creamos el contenido interno del header
header.innerHTML = `
    <section class="main-header-top-bar">
        <a class="logo">
            <img src="/assets/img/logo.png" alt="logo">
        </a>
        <h1 class="name"> Pasta D´Famiglia</h1>
        <input type="checkbox" id="menu-button">
        <label for="menu-button" class= "menu-button">
            <i class="fa-solid fa-bars"></i>
        </label>
    </section>
    <nav class="main-header-bottom-bar">
        <ul class="navbar-left">
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Contacto</a></li>
        </ul>
        <ul class="navbar-right">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Registrarse</a></li>
    </nav> 
`;
// agregamos el header al body

    const menuButton = document.querySelector('#menu-button');
    const menu = document.querySelector('.main-header-bottom-bar');

    menuButton.addEventListener('change', function() {
        if (this.checked) {
            menu.style.opacity = 1;
        } else {
            menu.style.opacity = 0;
        }
    });
});

