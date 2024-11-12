// Hoja principal

// Colores
var primary_color = "#2C3E50";    // Azul Marino
var secondary_color = "#E67E22";  // Naranja
var background_color = "#a4cffa";  // Gris Claro
var text_color = "#333333";        // Negro
var subtext_color = "#4D4D4D";     // Gris Oscuro
var border_color = "#BDC3C7";      // Gris Claro

// Fondo
document.body.style.backgroundColor = background_color;

// Barra de tareas con sombra
var optionsBar = document.createElement("div");
optionsBar.style.backgroundColor = primary_color;
optionsBar.style.color = "#FFFFFF";
optionsBar.style.padding = "10px";
optionsBar.style.position = "fixed";
optionsBar.style.top = "0";
optionsBar.style.left = "0";
optionsBar.style.width = "100%";
optionsBar.style.height = "40px";
optionsBar.style.zIndex = "1000";
optionsBar.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.3)"; // Sombra para la barra
optionsBar.style.display = "flex";
optionsBar.style.justifyContent = "center";
optionsBar.style.alignItems = "center";
optionsBar.innerHTML = "<h2 style='margin: 0; font-size: 18px;'>Barra de Opciones</h2>";
document.body.appendChild(optionsBar);

// Logotipo con animación de aumento
var imageContainer = document.createElement("div");
imageContainer.style.textAlign = "center";
imageContainer.style.marginTop = "90px"; 

let imagen = document.createElement("img");
imagen.src = "Logotipo locuras de productos.png";
imagen.width = 248;
imagen.height = 205;
imagen.style.transition = "transform 0.3s ease"; // Animación de aumento al pasar el ratón
imagen.onmouseover = () => imagen.style.transform = "scale(1.1)";
imagen.onmouseout = () => imagen.style.transform = "scale(1)";
imageContainer.appendChild(imagen);
document.body.appendChild(imageContainer);
imageContainer.style.marginTop = "60px";

// Título principal y subtítulo
let tituloContainer = document.createElement("div");
tituloContainer.style.textAlign = "center";

let titulo = document.createElement("h1");
titulo.textContent = "Locuras de productos";
titulo.style.marginTop = "0px";
titulo.style.fontFamily = "Arial, sans-serif";
titulo.style.color = text_color;
titulo.style.fontSize = "36px";
titulo.style.transition = "color 0.3s ease"; // Efecto de color al pasar el ratón
titulo.onmouseover = () => titulo.style.color = secondary_color;
titulo.onmouseout = () => titulo.style.color = text_color;
tituloContainer.appendChild(titulo);

let subtitulo = document.createElement("h2");
subtitulo.textContent = "¿Qué vas a comprar hoy?";
subtitulo.style.marginTop = "10px";
subtitulo.style.fontFamily = "Arial, sans-serif";
subtitulo.style.color = subtext_color;
subtitulo.style.fontSize = "24px";
subtitulo.style.fontWeight = "normal";
tituloContainer.appendChild(subtitulo);

document.body.appendChild(tituloContainer);

// Botón de acción con estilo moderno
let actionButton = document.createElement("button");
actionButton.textContent = "Descubre más";
actionButton.style.marginTop = "20px";
actionButton.style.padding = "10px 20px";
actionButton.style.fontSize = "18px";
actionButton.style.color = "#FFFFFF";
actionButton.style.backgroundColor = secondary_color;
actionButton.style.border = "none";
actionButton.style.borderRadius = "8px";
actionButton.style.cursor = "pointer";
actionButton.style.transition = "background-color 0.3s ease";
actionButton.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
actionButton.onmouseover = () => actionButton.style.backgroundColor = "#D35400";
actionButton.onmouseout = () => actionButton.style.backgroundColor = secondary_color;

// Añadir el botón debajo del título y subtítulo
tituloContainer.appendChild(actionButton);

// Animación de aparición para los elementos principales
document.addEventListener("DOMContentLoaded", () => {
    optionsBar.style.opacity = "0";
    imageContainer.style.opacity = "0";
    tituloContainer.style.opacity = "0";

    setTimeout(() => {
        optionsBar.style.transition = "opacity 1s";
        imageContainer.style.transition = "opacity 1.5s";
        tituloContainer.style.transition = "opacity 2s";

        optionsBar.style.opacity = "1";
        imageContainer.style.opacity = "1";
        tituloContainer.style.opacity = "1";
    }, 100);
});
