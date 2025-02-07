window.addEventListener('load', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderSummary = document.querySelector('#order-summary');
    const totalPriceElement = document.querySelector('#total-price');

    let totalPrice = 0;

    cart.forEach(item => {
        // Add each item to the order summary
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₱${item.price}`;
        orderSummary.appendChild(listItem);

        totalPrice += item.price;
    });

    // Display the total price
    totalPriceElement.textContent = `Total: ₱${totalPrice}`;
});
