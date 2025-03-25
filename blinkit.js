// JavaScript for quick commerce platform

// Initialize cart as an empty array
let cart = [];

// Function to add an item to the cart
function addToCart(item) {
    cart.push(item);
    alert(`${item.name} has been added to your cart.`);
    updateCartDisplay();
}

// Function to display the cart
function updateCartDisplay() {
    const cartElement = document.querySelector('.nav-cart');
    cartElement.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> My Cart (${cart.length})`;
}

// Function to search items
function searchItems() {
    const query = document.querySelector('.search-input').value.toLowerCase();
    const items = document.querySelectorAll('.box, .box2'); // Get all item boxes

    let found = false;
    items.forEach((item) => {
        const itemName = item.querySelector('p')?.textContent?.toLowerCase();
        if (itemName && itemName.includes(query)) {
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            item.style.border = '2px solid blue'; // Highlight item
            found = true;
            setTimeout(() => (item.style.border = 'none'), 2000); // Remove highlight after 2s
        }
    });

    if (!found) {
        alert('No items found matching your search.');
    }
}

// Function to place an order
function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add items before placing an order.');
        return;
    }
    alert(`Order placed successfully for ${cart.length} item(s).`);
    cart = []; // Clear cart after order
    updateCartDisplay();
}

// Event Listeners
document.querySelector('.search-icon').addEventListener('click', searchItems);
document.querySelector('.nav-cart').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert(`Your cart contains:\n${cart.map((item) => item.name).join(', ')}`);
    }
});

// Example: Adding items to cart on click (mock items)
document.querySelectorAll('.box2-content').forEach((box) => {
    box.addEventListener('click', () => {
        const itemName = box.querySelector('p')?.textContent || 'Unknown Item';
        const item = { name: itemName };
        addToCart(item);
    });
});

// Add a "Place Order" button dynamically in the footer
const footer = document.querySelector('footer');
const orderButton = document.createElement('button');
orderButton.textContent = 'Place Order';
orderButton.style.padding = '10px 20px';
orderButton.style.margin = '20px';
orderButton.style.backgroundColor = 'green';
orderButton.style.color = 'white';
orderButton.style.border = 'none';
orderButton.style.cursor = 'pointer';
orderButton.addEventListener('click', placeOrder);
footer.appendChild(orderButton);
