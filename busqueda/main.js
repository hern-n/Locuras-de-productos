document.addEventListener("DOMContentLoaded", () => {
    document.title = "Locuras de Productos";

    // Create the options bar
    const optionsBar = document.createElement("div");
    optionsBar.className = "options-bar";
    
    const logoButton = document.createElement("a");
    logoButton.href = "https://www.locurasdeproductos.es/";
    
    const logoImage = document.createElement("img");
    logoImage.className = "logo-button"; // Aquí asegúrate que coincida con el nombre del estilo CSS
    logoImage.src = "Logotipo_locuras_de_productos_blanco.png";
    logoImage.alt = "Logo Locuras de Productos";
    
    logoButton.appendChild(logoImage);
    
    logoButton.addEventListener("mouseover", () => {
        logoImage.classList.add("hover");
    });
    
    logoButton.addEventListener("mouseout", () => {
        logoImage.classList.remove("hover");
    });
    
    optionsBar.appendChild(logoButton);
    document.body.appendChild(optionsBar); 


    updates = updateDataSearch()

    console.log(updates[0]);
    console.log(updates[1]);
});


async function updateDataSearch(){
    let name_product = window.exported_names;
    let possible_products = window.exported_result;

    return [name_product, possible_products]; // Devuelve un array
}
