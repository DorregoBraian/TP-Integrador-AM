
import { Header, Footer, CardAside, CardPeliculaComun } from "./components.js";

const header = document.getElementById("header");
const footer = document.getElementById("footer");

/*const terror = document.getElementById("categoria-terror");
const superHeroes = document.getElementById("categoria-super-heroes");
const comedia = document.getElementById("categoria-comedia");
const romance = document.getElementById("categoria-romance");
const accion = document.getElementById("categoria-accion");
const cienciaFiccion = document.getElementById("categoria-ciencia-ficcion");

const peliculasContainer = document.getElementById("card-container");*/

window.onload = () => {
    header.innerHTML = Header();
    footer.innerHTML = Footer();
    LoadPeliculasComun();
}

const LoadPeliculasComun = () => {
    $.ajax({
        url: "../JS/JSONPeliculas.json",
        type: "GET",
        dataType: "json",
        success: function (datos) {
            console.log(datos);  //lista de pelicula
            $.each(datos, function (index, objPeli) {
                console.log(objPeli);  //una pelicula
                $.each(objPeli.Genero, function (index, genero) {
                    switch (genero) {
                        case 'Terror':
                            $("#categoria-terror").append(CardPeliculaComun(objPeli.Titulo, 22, objPeli.Portada, objPeli.imdbRating));
                            break;

                        case 'Super Heroes':
                            $("#categoria-super-heroes").append(CardPeliculaComun(objPeli.Titulo, 22, objPeli.Portada, objPeli.imdbRating));
                            break;
                        case 'Comedia':
                            $("#categoria-comedia").append(CardPeliculaComun(objPeli.Titulo, 22, objPeli.Portada, objPeli.imdbRating));
                            break;

                        case 'Romance':
                            $("#categoria-romance").append(CardPeliculaComun(objPeli.Titulo, 22, objPeli.Portada, objPeli.imdbRating));
                            break;

                        case 'Accion':
                            $("#categoria-accion").append(CardPeliculaComun(objPeli.Titulo, 22, objPeli.Portada, objPeli.imdbRating));
                            break;

                        case 'Ciencia Ficcion':
                            $("#categoria-ciencia-ficcion").append(CardPeliculaComun(objPeli.Titulo, 22, objPeli.Portada, objPeli.imdbRating));
                            break;

                        default:
                            break;
                    }
                });
            });
        },
        error: function (xhr, status, error) {
            console.log(xhr);
            console.log(status);
            console.log(error);
        }
    })
}