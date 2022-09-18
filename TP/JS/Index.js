import { Header,Footer,CardAside,CardPeliculaComun } from "./components.js";

const header = document.getElementById("header");
const footer = document.getElementById("footer");

window.onload = () => {
    header.innerHTML=Header();
    footer.innerHTML=Footer();
}