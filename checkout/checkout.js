document.addEventListener('DOMContentLoaded', function () {
    const basketItemsContainer = document.getElementById('basket-items');

   
    let basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];

   
    basketItems.forEach(item => {
        const basketItem = document.createElement('div');
        basketItem.classList.add('basket-item');
        basketItem.innerHTML = `
            <span>${item.name} - $${item.price}</span>
            <button class="remove-from-basket" data-id="${item.id}">Remove</button>
        `;
        basketItemsContainer.appendChild(basketItem);
    });


    basketItemsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-from-basket')) {
            const productId = event.target.getAttribute('data-id');
            
            basketItems = basketItems.filter(item => item.id !== productId);
       
            localStorage.setItem('basketItems', JSON.stringify(basketItems));
            
            event.target.parentElement.remove();
        }
    });
});



