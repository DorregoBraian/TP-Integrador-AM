
export const Header = () =>{
    return `
    <div class="logo">
        <img src="../IMG/Logotipo/Icono 1.png" alt="Icono">
        <h1>Movie Mobile</h1>
    </div>

    <nav class="navBar">
        <div class="navBar-element">
            <span class="material-symbols-outlined">house</span>
            <h2><a href="Index.html">Home</a></h2>
        </div>

        <div class="navBar-element">
            <span class="material-symbols-outlined">category</span>
            <h2><a href="Categorias.html">Categorias</a></h2>
        </div>

        <div class="navBar-element">
            <span class="material-symbols-outlined">local_activity</span>
            <h2>Estrenos</h2>
        </div>

        <div class="navBar-element">
            <input type="text" placeholder="Buscar Pelicula...">
            <span class="material-symbols-outlined">search</span>
        </div>

        <div class="navBar-element">
            <span class="material-symbols-outlined">edit_document</span>
            <h2><a href="Formulario.html">Encuesta</a></h2>
        </div>

        <div class="navBar-element">
            <span class="material-symbols-outlined">account_circle</span>
            <span class="material-symbols-outlined">arrow_drop_down</span>
        </div>
    </nav>`
}

export const Footer = () =>{
    return `
        <div id="footer-logo">
            <img src="../img/Logotipo/Icono 1.png" alt="">
            <h2>Movie Mobile</h2>
        </div>
        <div id="footer-redes">
            <div class="footer-icons">
                <i class="fa-brands fa-facebook"></i>
                <h3>Facebook</h3>
            </div>
            <div class="footer-icons">
                <i class="fa-brands fa-twitter"></i>
                <h3>Twitter</h3>
            </div>
            <div class="footer-icons">
                <i class="fa-brands fa-instagram"></i>
                <h3>Instagram</h3>
            </div>
        </div>
    `
}

export const CardPeliculaComun = (titulo,precio,imgUrl,rate) =>{
    return `
    <article class="card-pelicula">
        <img src="${imgUrl}" alt="">
        <div class="card-pelicula-info">
            <h2>${titulo}</h2>
            <div class="card-pelicula-info-detalle">
                <div class="card-pelicula-info-detalle-rate">
                    <span class="material-symbols-outlined">star_rate</span>
                    <h2>${rate}/10</h2>
                </div>
                <h2>${precio} USD</h2>
            </div>
        </div>
    </article>`
}

export const CardAside = () =>{
    return `
    <div class="card-topVentas">
        <img src="../IMG/Peliculas/Accion/accion 2.jpg" alt="pelicula">
        <div class="card-topVentas-info">
            <h4>Titulo Pelicula</h4>
            <br>
            <h4>2014</h4>
        </div>
    </div>
    `
}