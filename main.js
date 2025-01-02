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

    optionsBar.appendChild(helpButton);
    document.body.appendChild(optionsBar);

    // Create the image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    const logoImage = document.createElement('img');
    logoImage.src = "Fondo_y_logotipo.png";
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

    // Create the product grid
    const productGrid = document.createElement('div');
    productGrid.className = 'product-grid';

    // Fetch the JSON file (productos.json)
    fetch("products.json")
        .then(response => response.json()) // Parse the JSON
        .then(products => {
            // Iterate over the products array
            products.forEach(product => {
                const productItem = document.createElement('a');
                productItem.href = product.href;
                productItem.className = 'product-item';

                const productImage = document.createElement('img');
                productImage.src = product.imgSrc;
                productImage.alt = product.title;
                productImage.className = 'product-image';

                const productTitle = document.createElement('h3');
                productTitle.textContent = product.title;
                productTitle.className = 'product-title';

                const productPrice = document.createElement('p');
                productPrice.textContent = product.price;
                productPrice.className = 'product-price';

                productItem.appendChild(productImage);
                productItem.appendChild(productTitle);
                productItem.appendChild(productPrice);
                productGrid.appendChild(productItem);
            });

            // Add a "Coming Soon" item
            const finalItem = document.createElement('a');
            finalItem.className = 'product-item';

            const finalTitle = document.createElement('h3');
            finalTitle.textContent = "¡Pronto habrá más!";
            finalTitle.className = 'product-title';

            finalItem.appendChild(finalTitle);
            productGrid.appendChild(finalItem);

            document.body.appendChild(productGrid);
        })
        .catch(error => console.log('Error loading JSON:', error));
});
