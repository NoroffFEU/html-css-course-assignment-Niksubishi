
function loadProducts() {
    fetch('https://v2.api.noroff.dev/rainy-days')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-listing');
            data.data.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('jacketbox2');
                productElement.innerHTML = `
                    <div class="jacketpicbox2">
                        <a href="jacket1.html"><img src="${product.image.url}" alt="${product.name}"></a>
                    </div>
                    <div class="jackettextbox2">
                        <h4>${product.title}</h4>
                        <p>${product.description}</p>
                        <p>$${product.price}</p>
                        <button class="add-to-basket" data-id="${product.id}" data-name="${product.title}" data-price="${product.price}">Add to Basket</button>
                    </div>
                `;
                productList.appendChild(productElement);
            });
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
}
