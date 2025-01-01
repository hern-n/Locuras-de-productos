document.addEventListener("DOMContentLoaded", () => {
    // Set the document title
    document.title = "Locuras de Productos";

    // Set the background
    document.body.style.cssText = `
        background-color: #a4cffa; /* Background color */
        margin: 0;
        font-family: Arial, sans-serif;
    `;

    // Create the options bar
    const optionsBar = document.createElement('div');
    optionsBar.className = 'options-bar';
    optionsBar.style.cssText = `
        background-color: #2C3E50;
        color: #FFFFFF;
        padding: 10px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 40px;
        z-index: 1000;
        display: flex;
        align-items: center;
    `;

    const helpButton = document.createElement('a');
    helpButton.href = "ayuda/index.html";
    helpButton.className = 'help-button';
    helpButton.textContent = "¿Necesitas ayuda?";
    helpButton.style.cssText = `
        margin-left: auto;
        margin-right: 20px;
        color: #fff;
        text-decoration: none;
        padding: 8px 15px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.3s ease;
    `;
    helpButton.addEventListener('mouseover', () => {
        helpButton.style.transform = 'scale(1.1)';
    });
    helpButton.addEventListener('mouseout', () => {
        helpButton.style.transform = 'scale(1)';
    });

    optionsBar.appendChild(helpButton);
    document.body.appendChild(optionsBar);

    // Create the image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    imageContainer.style.cssText = `
        margin-top: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const logoImage = document.createElement('img');
    logoImage.src = "Logotipo_locuras_de_productos.png";
    logoImage.alt = "Logotipo Locuras de Productos";
    logoImage.style.cssText = `
        width: 248px;
        height: 205px;
        transition: transform 0.3s ease;
    `;
    logoImage.addEventListener('mouseover', () => {
        logoImage.style.transform = 'scale(1.1)';
    });
    logoImage.addEventListener('mouseout', () => {
        logoImage.style.transform = 'scale(1)';
    });

    imageContainer.appendChild(logoImage);
    document.body.appendChild(imageContainer);

    // Create the title container
    const titleContainer = document.createElement('div');
    titleContainer.className = 'title-container';
    titleContainer.style.cssText = `
        text-align: center;
        margin-top: 20px;
    `;

    const mainTitle = document.createElement('h1');
    mainTitle.textContent = "Locuras de productos";
    mainTitle.style.cssText = `
        font-size: 36px;
        color: #333333;
        transition: color 0.3s ease;
    `;
    mainTitle.addEventListener('mouseover', () => {
        mainTitle.style.color = '#E67E22';
    });
    mainTitle.addEventListener('mouseout', () => {
        mainTitle.style.color = '#333333';
    });

    const subTitle = document.createElement('h2');
    subTitle.textContent = "¿Qué vas a comprar hoy?";
    subTitle.style.cssText = `
        margin-top: 10px;
        font-size: 24px;
        font-weight: normal;
    `;

    titleContainer.appendChild(mainTitle);
    titleContainer.appendChild(subTitle);
    document.body.appendChild(titleContainer);

    // Create the product grid
    const productGrid = document.createElement('div');
    productGrid.className = 'product-grid';
    productGrid.style.cssText = `
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 20px;
        margin: 40px 20px;
    `;

    // Fetch the JSON file (productos.json)
    fetch("products.json",)
        .then(response => response.json())  // Parse the JSON
        .then(products => {
            // Iterate over the products array
            products.forEach(product => {
                const productItem = document.createElement('a');
                productItem.href = product.href;
                productItem.className = 'product-item';
                productItem.style.cssText = `
                    text-decoration: none;
                    color: #333333;
                    text-align: center;
                    width: 18%;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 1px solid #BDC3C7;
                    border-radius: 10px;
                    overflow: hidden;
                    background-color: #fff;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                `;
                productItem.addEventListener('mouseover', () => {
                    productItem.style.transform = 'translateY(-5px)';
                    productItem.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.2)';
                });
                productItem.addEventListener('mouseout', () => {
                    productItem.style.transform = 'translateY(0)';
                    productItem.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
                });

                const productImage = document.createElement('img');
                productImage.src = product.imgSrc;
                productImage.alt = product.title;
                productImage.style.cssText = `
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                `;

                const productTitle = document.createElement('h3');
                productTitle.textContent = product.title;
                productTitle.style.cssText = `
                    font-size: 18px;
                    margin: 10px 0 5px;
                `;

                const productPrice = document.createElement('p');
                productPrice.textContent = product.price;
                productPrice.style.cssText = `
                    font-size: 16px;
                    color: #E67E22;
                    font-weight: bold;
                    margin-bottom: 10px;
                `;

                productItem.appendChild(productImage);
                productItem.appendChild(productTitle);
                productItem.appendChild(productPrice);
                productGrid.appendChild(productItem);
            });

            document.body.appendChild(productGrid);
        })
        .catch(error => console.log('Error loading JSON:', error));
});
