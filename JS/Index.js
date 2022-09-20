import { Header,Footer,CardAside,CardPeliculaComun } from "./components.js";

const header = document.getElementById("header");
const footer = document.getElementById("footer");

const peliculasContainer = document.getElementById("card-container");

var carritoPrecio = 0;

window.onload = () => {
    header.innerHTML=Header();
    footer.innerHTML=Footer();
}


$(document).ready(function(){
    $('.card-pelicula').click(function(){
        var img = $(this).find('img');
        if($(img).css('opacity')=='1'){
            $(this).css('background-color','rgba(100,100,163,1)');
            $(img).css('opacity','0.5');
            $(img).css('transform','scale(0.90)');
            carritoPrecio+=20;
            console.log(carritoPrecio);
        }
        else{
            $(this).css('background-color','rgba(37,37,55,1)');
            $(img).css('opacity','1');
            $(img).css('transform','scale(1)');
            carritoPrecio-=20;
            console.log(carritoPrecio);
        }
    });
});