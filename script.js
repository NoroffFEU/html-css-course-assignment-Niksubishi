document.addEventListener('DOMContentLoaded', function () {

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
                  <button class="add-to-basket" data-id="${product.id}" data-name="${product.title}" data-price="${product.price}">Add to Cart</button>
              </div>
          `;
          productList.appendChild(productElement);
      });
  })
  .catch(error => {
      console.error('Error fetching product data:', error);
  });

  document.addEventListener('click', function (event) {
      if (event.target.classList.contains('add-to-basket')) {
          const productId = event.target.getAttribute('data-id');
          const productName = event.target.getAttribute('data-name');
          const productPrice = event.target.getAttribute('data-price');

          let basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];

          basketItems.push({ id: productId, name: productName, price: productPrice });

          localStorage.setItem('basketItems', JSON.stringify(basketItems));
      }
  });
});
