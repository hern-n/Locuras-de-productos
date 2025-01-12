document.addEventListener("DOMContentLoaded", () => {
    // Set the document title
    document.title = "Locuras de Productos";

    // Create the options bar
    const optionsBar = document.createElement('div');
    optionsBar.className = 'options-bar';

    const helpButton = document.createElement('a');
    helpButton.href = "ayuda/index.html";
    helpButton.className = 'help-button';
    helpButton.textContent = "¿Necesitas ayuda?";

    helpButton.addEventListener('mouseover', () => {
        helpButton.classList.add('hover');
    });
    helpButton.addEventListener('mouseout', () => {
        helpButton.classList.remove('hover');
    });

    const logoButton = document.createElement('img');
    logoButton.src = "Logotipo_locuras_de_productos_blanco.png";
    logoButton.alt = "Logotipo Locuras de Productos";
    logoButton.className = 'logo-button';

    logoButton.addEventListener('mouseover', () => {
        logoButton.classList.add('hover');
    });
    logoButton.addEventListener('mouseout', () => {
        logoButton.classList.remove('hover');
    });

    optionsBar.appendChild(helpButton);
    optionsBar.appendChild(logoButton);
    document.body.appendChild(optionsBar);



    // Create the image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    const logoImage = document.createElement('img');
    logoImage.src = "Logotipo_locuras_de_productos.png";
    logoImage.alt = "Logotipo Locuras de Productos";
    logoImage.className = 'logo-image';

    logoImage.addEventListener('mouseover', () => {
        logoImage.classList.add('hover');
    });
    logoImage.addEventListener('mouseout', () => {
        logoImage.classList.remove('hover');
    });

    imageContainer.appendChild(logoImage);
    document.body.appendChild(imageContainer);


    
    // Create the title container
    const titleContainer = document.createElement('div');
    titleContainer.className = 'title-container';

    const mainTitle = document.createElement('h1');
    mainTitle.textContent = "Locuras de productos";
    mainTitle.className = 'main-title';

    mainTitle.addEventListener('mouseover', () => {
        mainTitle.classList.add('hover');
    });
    mainTitle.addEventListener('mouseout', () => {
        mainTitle.classList.remove('hover');
    });

    const subTitle = document.createElement('h2');
    subTitle.textContent = "¿Qué vas a comprar hoy?";
    subTitle.className = 'sub-title';

    titleContainer.appendChild(mainTitle);
    titleContainer.appendChild(subTitle);
    document.body.appendChild(titleContainer);

    // Call the function to load products
    loadProducts();
});

// Separate function to load products from JSON
function loadProducts() {
    const productGrid = document.createElement('div');
    productGrid.className = 'product-grid';

    // Fetch the CSV file (products.csv)
    fetch("products.csv")
        .then(response => response.text()) // Leer el CSV como texto
        .then(csvText => {
            const rows = csvText.trim().split("\n"); // Dividir en líneas
            const headers = rows[0].split(";"); // Extraer los encabezados (opcional)

            // Iterar sobre las filas, ignorando la primera (encabezados)
            rows.slice(1).forEach(row => {
                const [title, href, imgSrc, price] = row.split(";"); // Dividir columnas

                // Crear elementos HTML para cada producto
                const productItem = document.createElement('a');
                productItem.href = href;
                productItem.className = 'product-item';

                const productImage = document.createElement('img');
                productImage.src = imgSrc;
                productImage.alt = title;
                productImage.className = 'product-image';

                const productTitle = document.createElement('h3');
                productTitle.textContent = title;
                productTitle.className = 'product-title';

                const productPrice = document.createElement('p');
                productPrice.textContent = price;
                productPrice.className = 'product-price';

                productItem.appendChild(productImage);
                productItem.appendChild(productTitle);
                productItem.appendChild(productPrice);
                productGrid.appendChild(productItem);
            });

            // Agregar un elemento "Pronto habrá más"
            const finalItem = document.createElement('a');
            finalItem.className = 'product-item';

            const finalTitle = document.createElement('h3');
            finalTitle.textContent = "¡Pronto habrá más!";
            finalTitle.className = 'product-title';

            finalItem.appendChild(finalTitle);
            productGrid.appendChild(finalItem);

            document.body.appendChild(productGrid);
        })
        .catch(error => console.log('Error loading CSV:', error));
}

