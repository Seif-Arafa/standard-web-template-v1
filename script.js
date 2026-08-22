// ===== MOBILE MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

// ===== MENU DATA (WITH IMAGES) =====
const menuData = [
    // ===== APPETIZERS =====
    { 
        name: "Ajvar Dip", 
        description: "Roasted red pepper and eggplant spread, served with warm, freshly baked bread.", 
        price: 450, 
        category: "appetizers",
        image: "images/ajvar-dip.jpg" 
    },
    { 
        name: "Pršuta i Sir", 
        description: "Selection of finest cured ham and aged Serbian cheeses, served with seasonal fruit.", 
        price: 650, 
        category: "appetizers",
        image: "images/prsuta-i-sir.jpg" 
    },
    { 
        name: "Kajmak", 
        description: "Traditional creamy dairy spread, served with warm proja (cornbread) and sea salt.", 
        price: 380, 
        category: "appetizers",
        image: "images/kajmak.jpg" 
    },

    // ===== MAIN COURSES =====
    { 
        name: "Sarma", 
        description: "Traditional Serbian cabbage rolls with minced meat and rice, slow-cooked and served with sour cream.", 
        price: 850, 
        category: "main",
        image: "images/sarme.png" 
    },
    { 
        name: "Ćevapi", 
        description: "Grilled minced meat sausages, served with onions, kajmak, and warm somun bread.", 
        price: 750, 
        category: "main",
        image: "images/cevapi.jpg" 
    },
    { 
        name: "Karadjordjeva Šnicla", 
        description: "Breaded veal steak rolled with kajmak and ham, fried to golden perfection.", 
        price: 950, 
        category: "main",
        image: "images/k-snicla.jpg" 
    },
    { 
        name: "Prebranac", 
        description: "Baked beans with onions and smoked paprika, a Serbian classic from the countryside.", 
        price: 550, 
        category: "main",
        image: "images/prebranac.jpg" 
    },

    // ===== DESSERTS =====
    { 
        name: "Palačinke", 
        description: "Thin pancakes filled with jam, Nutella, or walnuts, served with whipped cream and fresh berries.", 
        price: 380, 
        category: "desserts",
        image: "images/palacinke.jpg" 
    },
    { 
        name: "Tufahije", 
        description: "Poached apples stuffed with walnuts and topped with whipped cream—a Bosnian-Serbian classic.", 
        price: 420, 
        category: "desserts",
        image: "images/tufahija.jpg" 
    },
    { 
        name: "Krempita", 
        description: "Traditional custard slice dessert with crispy phyllo layers and a dusting of powdered sugar.", 
        price: 350, 
        category: "desserts",
        image: "images/krempita.jpg" 
    },

    // ===== DRINKS =====
    { 
        name: "Rakija (Šljivovica)", 
        description: "Traditional Serbian plum brandy, aged in oak barrels for 3 years. Served chilled.", 
        price: 250, 
        category: "drinks",
        image: "images/rakija.png" 
    },
    { 
        name: "Turska Kafa", 
        description: "Authentic Turkish-style coffee, brewed in a džezva and served with a side of Turkish delight.", 
        price: 180, 
        category: "drinks",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400" 
    },
    { 
        name: "Šumadijski Čaj", 
        description: "Warm tea with honey, lemon, and a hint of rakija—perfect for cold evenings.", 
        price: 220, 
        category: "drinks",
        image: "images/sumadijski-caj.jpg" 
    }
];

// ===== DISPLAY MENU (WITH IMAGES) =====
function displayMenu(category = 'all') {
    const grid = document.getElementById('menuGrid');
    if (!grid) return;

    const filtered = category === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === category);

    if (filtered.length === 0) {
        grid.innerHTML = `<p class="no-items">Nema jela u ovoj kategoriji.</p>`;
        return;
    }

    grid.innerHTML = filtered.map(item => `
        <div class="menu-item">
            ${item.image ? `<img src="${item.image}" alt="${item.name}" class="menu-image" loading="lazy">` : ''}
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p class="description">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="price">${item.price} RSD</span>
                    <span class="category-tag">${item.category}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== MENU FILTER BUTTONS =====
const menuFilterBtns = document.querySelectorAll('.menu-filters .filter-btn');
if (menuFilterBtns.length > 0) {
    menuFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            menuFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayMenu(btn.dataset.category);
        });
    });
    // Initial display
    displayMenu('all');
}

// ===== GALLERY DATA =====
const galleryData = [
    { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400', category: 'interior' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400', category: 'interior' },
    { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', category: 'food' },
    { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', category: 'food' },
    { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400', category: 'interior' },
    { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400', category: 'events' },
    { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400', category: 'food' },
    { src: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=400', category: 'events' },
    { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400', category: 'interior' },
    { src: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=400', category: 'food' },
    { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400', category: 'events' },
    { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400', category: 'interior' }
];

// ===== DISPLAY GALLERY =====
function displayGallery(category = 'all') {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    const filtered = category === 'all' 
        ? galleryData 
        : galleryData.filter(img => img.category === category);

    grid.innerHTML = filtered.map(img => `
        <img src="${img.src}" alt="Restaurant photo" loading="lazy">
    `).join('');
}

// ===== GALLERY FILTER BUTTONS =====
const galleryFilterBtns = document.querySelectorAll('.gallery-filters .filter-btn');
if (galleryFilterBtns.length > 0) {
    galleryFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            galleryFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayGallery(btn.dataset.category);
        });
    });
    // Initial display
    displayGallery('all');
}