// Database of 31 realistic products with guaranteed-to-load placeholder images
const productsData = [
    { id: 1, name: "Apple iPhone 15 Pro (128 GB) - Blue Titanium", price: 129900, oldPrice: 134900, discount: "3% off", rating: "4.7", img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&q=80" },
    { id: 2, name: "SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray)", price: 129999, oldPrice: 144999, discount: "10% off", rating: "4.6", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80" },
    { id: 3, name: "Sony WH-1000XM5 Noise Canceling Headphones", price: 29990, oldPrice: 34990, discount: "14% off", rating: "4.5", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80" },
    { id: 4, name: "MacBook Air M2 (8GB RAM, 256GB SSD)", price: 94900, oldPrice: 114900, discount: "17% off", rating: "4.8", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80" },
    { id: 5, name: "Mi Smart TV X Series 138 cm (55 inch) Ultra HD 4K", price: 37999, oldPrice: 54999, discount: "30% off", rating: "4.3", img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&q=80" },
    { id: 6, name: "Nike Air Max Motif Men's Sneakers", price: 7995, oldPrice: 9995, discount: "20% off", rating: "4.2", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
    { id: 7, name: "Fastrack Limitless FS1 Smartwatch", price: 1999, oldPrice: 3995, discount: "49% off", rating: "4.1", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
    { id: 8, name: "Canon EOS R100 Mirrorless Camera Body", price: 44990, oldPrice: 49995, discount: "10% off", rating: "4.4", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80" },
    { id: 9, name: "HP Pavilion 15, AMD Ryzen 5, 16GB RAM", price: 49990, oldPrice: 63321, discount: "21% off", rating: "4.3", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80" },
    { id: 10, name: "OnePlus Nord CE 4 5G (Celadon Marble)", price: 24999, oldPrice: 26999, discount: "7% off", rating: "4.5", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
    { id: 11, name: "Dell MS116 Wired Optical Mouse", price: 299, oldPrice: 650, discount: "54% off", rating: "4.4", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&q=80" },
    { id: 12, name: "Philips HD9200 Air Fryer (4.1 Liters)", price: 6799, oldPrice: 9995, discount: "31% off", rating: "4.6", img: "https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?w=400&q=80" },
    { id: 13, name: "Puma Softride Enzo NXT Running Shoes", price: 3249, oldPrice: 6499, discount: "50% off", rating: "4.2", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80" },
    { id: 14, name: "American Tourister 68 cms Hard Suitcase", price: 3599, oldPrice: 8500, discount: "57% off", rating: "4.3", img: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&q=80" },
    { id: 15, name: "Logitech Multi-Device Bluetooth Keyboard", price: 2695, oldPrice: 3195, discount: "15% off", rating: "4.5", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80" },
    { id: 16, name: "Levi's Men's Regular Fit Denim Jeans", price: 1599, oldPrice: 3199, discount: "50% off", rating: "4.0", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80" },
    { id: 17, name: "Adidas Base Solid Men Round Neck T-Shirt", price: 899, oldPrice: 1799, discount: "50% off", rating: "4.1", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&q=80" },
    { id: 18, name: "Casio Enticer Men's Analog Dress Watch", price: 3995, oldPrice: 4995, discount: "20% off", rating: "4.4", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
    { id: 19, name: "SanDisk Ultra 128 GB MicroSDXC Card", price: 849, oldPrice: 1800, discount: "52% off", rating: "4.4", img: "https://images.unsplash.com/photo-1558486377-b08889270ea9?w=400&q=80" },
    { id: 20, name: "Seagate Expansion 2TB External HDD", price: 5999, oldPrice: 9999, discount: "40% off", rating: "4.3", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&q=80" },
    { id: 21, name: "Epson EcoTank All-in-One Ink Tank Printer", price: 13499, oldPrice: 15999, discount: "15% off", rating: "4.3", img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&q=80" },
    { id: 22, name: "Boat Stone 350 10W Bluetooth Speaker", price: 1499, oldPrice: 3490, discount: "57% off", rating: "4.2", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80" },
    { id: 23, name: "Prestige Iris 750W Mixer Grinder", price: 3299, oldPrice: 5295, discount: "37% off", rating: "4.1", img: "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=400&q=80" },
    { id: 24, name: "Ray-Ban Aviator Sunglasses (Green)", price: 8290, oldPrice: 9290, discount: "10% off", rating: "4.5", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80" },
    { id: 25, name: "Wildcraft 44 Ltrs Casual Backpack", price: 1199, oldPrice: 2399, discount: "50% off", rating: "4.3", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
    { id: 26, name: "Ambrane 20000mAh Power Bank (22.5W)", price: 1599, oldPrice: 2499, discount: "36% off", rating: "4.2", img: "https://images.unsplash.com/photo-1609592424089-98642bbfa45a?w=400&q=80" },
    { id: 27, name: "SYSKA 12W LED Bulbs (Pack of 4)", price: 349, oldPrice: 796, discount: "56% off", rating: "4.2", img: "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=400&q=80" },
    { id: 28, name: "Nivea Men Dark Spot Face Wash (100g)", price: 195, oldPrice: 275, discount: "29% off", rating: "4.4", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80" },
    { id: 29, name: "Bombay Dyeing 100% Cotton Double Bed Sheet", price: 899, oldPrice: 1999, discount: "55% off", rating: "3.9", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80" },
    { id: 30, name: "Prestige Omega Deluxe Granite Kadhai", price: 1349, oldPrice: 1720, discount: "21% off", rating: "4.4", img: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=400&q=80" },
    { id: 31, name: "Realme Buds T300 TWS Earbuds", price: 2299, oldPrice: 3999, discount: "42% off", rating: "4.3", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80" }
];

let cart = [];
let wishlist = [];

const productsContainer = document.getElementById('products-container');
const cartPanel = document.getElementById('cart-panel');
const wishlistPanel = document.getElementById('wishlist-panel');
const uiOverlay = document.getElementById('ui-overlay');
const loginModal = document.getElementById('login-modal');

const cartCountBadge = document.getElementById('cart-count');
const cartPanelCount = document.getElementById('cart-panel-count');
const wishlistCountBadge = document.getElementById('wishlist-count');
const wishlistPanelCount = document.getElementById('wishlist-panel-count');
const cartTotalAmount = document.getElementById('cart-total-amount');

function renderProducts(products) {
    productsContainer.innerHTML = '';
    if(products.length === 0) {
        productsContainer.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 40px; font-size:18px; color:#666;">No products match your search criteria.</p>`;
        return;
    }
    
    products.forEach(product => {
        const isInWishlist = wishlist.some(item => item.id === product.id);
        const cardNode = document.createElement('div');
        cardNode.classList.add('product-card');
        cardNode.innerHTML = `
            <button class="wishlist-heart-btn ${isInWishlist ? 'active' : ''}" onclick="handleWishlistToggle(${product.id}, this)">
                <i class="fa-solid fa-heart"></i>
            </button>
            <div class="product-image-wrapper">
                <img src="${product.img}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-name" title="${product.name}">${product.name}</div>
            <div class="product-rating">${product.rating} ★</div>
            <div class="price-row">
                <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                <span class="old-price">₹${product.oldPrice.toLocaleString('en-IN')}</span>
                <span class="discount-tag">${product.discount}</span>
            </div>
            <button class="add-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(cardNode);
    });
}

function updateCountersUI() {
    cartCountBadge.innerText = cart.length;
    cartPanelCount.innerText = cart.length;
    wishlistCountBadge.innerText = wishlist.length;
    wishlistPanelCount.innerText = wishlist.length;
    
    const calculatedTotal = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalAmount.innerText = calculatedTotal.toLocaleString('en-IN');
}

window.addToCart = function(productId) {
    const matchedProduct = productsData.find(p => p.id === productId);
    if(matchedProduct) {
        cart.push(matchedProduct);
        updateCountersUI();
        renderCartItems();
        openPanel(cartPanel);
    }
}

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCountersUI();
    renderCartItems();
}

function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    container.innerHTML = '';
    if(cart.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding-top:40px; color:#878787;">Your Cart is completely empty!</div>`;
        return;
    }
    
    cart.forEach((item, index) => {
        const itemRow = document.createElement('div');
        itemRow.classList.add('drawer-item');
        itemRow.innerHTML = `
            <img src="${item.img}" alt="Thumbnail">
            <div class="drawer-item-details">
                <div class="drawer-item-title">${item.name}</div>
                <div style="font-weight:500; margin-top:2px;">₹${item.price.toLocaleString('en-IN')}</div>
                <span class="remove-item-link" onclick="removeFromCart(${index})">Remove</span>
            </div>
        `;
        container.appendChild(itemRow);
    });
}

window.handleWishlistToggle = function(productId, btnElement) {
    const index = wishlist.findIndex(p => p.id === productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        btnElement.classList.remove('active');
    } else {
        const targetProduct = productsData.find(p => p.id === productId);
        wishlist.push(targetProduct);
        btnElement.classList.add('active');
    }
    updateCountersUI();
    renderWishlistItems();
}

function renderWishlistItems() {
    const container = document.getElementById('wishlist-items-container');
    container.innerHTML = '';
    if(wishlist.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding-top:40px; color:#878787;">Your Wishlist is empty!</div>`;
        return;
    }
    
    wishlist.forEach((item) => {
        const itemRow = document.createElement('div');
        itemRow.classList.add('drawer-item');
        itemRow.innerHTML = `
            <img src="${item.img}" alt="Thumbnail">
            <div class="drawer-item-details">
                <div class="drawer-item-title">${item.name}</div>
                <div style="font-weight:500; margin-top:2px; color:#388e3c;">₹${item.price.toLocaleString('en-IN')}</div>
                <span class="remove-item-link" onclick="removeWishlistItemDirectly(${item.id})">Remove from List</span>
            </div>
        `;
        container.appendChild(itemRow);
    });
}

window.removeWishlistItemDirectly = function(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    updateCountersUI();
    renderWishlistItems();
    renderProducts(productsData);
}

function openPanel(panelInstance) {
    panelInstance.classList.add('open');
    uiOverlay.classList.add('open');
}

function closeAllPanels() {
    cartPanel.classList.remove('open');
    wishlistPanel.classList.remove('open');
    loginModal.classList.remove('open');
    uiOverlay.classList.remove('open');
}

document.getElementById('cart-toggle').addEventListener('click', () => { renderCartItems(); openPanel(cartPanel); });
document.getElementById('wishlist-toggle').addEventListener('click', () => { renderWishlistItems(); openPanel(wishlistPanel); });
document.getElementById('close-cart').addEventListener('click', closeAllPanels);
document.getElementById('close-wishlist').addEventListener('click', closeAllPanels);
document.getElementById('ui-overlay').addEventListener('click', closeAllPanels);

document.getElementById('open-login-btn').addEventListener('click', () => {
    loginModal.classList.add('open');
    uiOverlay.classList.add('open');
});
document.getElementById('close-login').addEventListener('click', closeAllPanels);

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const userVal = document.getElementById('login-user').value;
    alert(`Success! Logged in as ${userVal}`);
    closeAllPanels();
    document.getElementById('open-login-btn').innerText = "Hi, User!";
});

function executeSearchQuery() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const filteredArray = productsData.filter(product => 
        product.name.toLowerCase().includes(query)
    );
    renderProducts(filteredArray);
}

document.getElementById('search-btn').addEventListener('click', executeSearchQuery);
document.getElementById('search-input').addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        executeSearchQuery();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    renderProducts(productsData);
});