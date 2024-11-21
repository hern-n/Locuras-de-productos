// Hoja principal - Producto

// Colores
var primary_color = "#2C3E50";    // Azul Marino
var secondary_color = "#E67E22";  // Naranja
var background_color = "#a4cffa";  // Gris Claro
var text_color = "#333333";        // Negro
var subtext_color = "#4D4D4D";     // Gris Oscuro
var border_color = "#BDC3C7";      // Gris Claro

// Fondo
document.body.style.backgroundColor = background_color;

// Barra de tareas
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
optionsBar.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.3)";
optionsBar.style.display = "flex";
optionsBar.style.justifyContent = "center";
optionsBar.style.alignItems = "center";
optionsBar.innerHTML = "<h2 style='margin: 0; font-size: 18px;'>Detalles del Producto</h2>";
document.body.appendChild(optionsBar);


// Imagen del producto
var productImage = document.createElement("img");
productImage.src = "imagen-del-producto.jpg"; // Cambiar por el enlace real
productImage.style.width = "300px";
productImage.style.height = "300px";
productImage.style.objectFit = "cover";
productImage.style.borderRadius = "10px";
productImage.style.marginRight = "20px";
document.body.appendChild(productImage);

// Información del producto
var productInfo = document.createElement("div");
productInfo.style.flex = "1";

// Título del producto
var productTitle = document.createElement("h1");
productTitle.textContent = "Nombre del Producto"; // Cambiar dinámicamente
productTitle.style.fontFamily = "Arial, sans-serif";
productTitle.style.color = text_color;
productInfo.appendChild(productTitle);

// Descripción del producto
var productDescription = document.createElement("p");
productDescription.textContent = "Aquí va la descripción detallada del producto. Explica las características y beneficios.";
productDescription.style.fontFamily = "Arial, sans-serif";
productDescription.style.color = subtext_color;
productDescription.style.fontSize = "18px";
productDescription.style.lineHeight = "1.5";
productInfo.appendChild(productDescription);

// Precio
var productPrice = document.createElement("h2");
productPrice.textContent = "€ 99.99"; // Cambiar dinámicamente
productPrice.style.fontFamily = "Arial, sans-serif";
productPrice.style.color = secondary_color;
productPrice.style.fontSize = "24px";
productInfo.appendChild(productPrice);

// Botón de compra
var buyButton = document.createElement("button");
buyButton.textContent = "Comprar ahora";
buyButton.style.marginTop = "20px";
buyButton.style.padding = "10px 20px";
buyButton.style.fontSize = "18px";
buyButton.style.color = "#FFFFFF";
buyButton.style.backgroundColor = secondary_color;
buyButton.style.border = "none";
buyButton.style.borderRadius = "8px";
buyButton.style.cursor = "pointer";
buyButton.style.transition = "background-color 0.3s ease";
buyButton.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
buyButton.onmouseover = () => buyButton.style.backgroundColor = "#D35400";
buyButton.onmouseout = () => buyButton.style.backgroundColor = secondary_color;
productInfo.appendChild(buyButton);

// Añadir la información al contenedor principal
document.body.appendChild(productInfo);

// Animación de aparición
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1s";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});
