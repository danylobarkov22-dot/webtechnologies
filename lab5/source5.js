function loadCatalog() {
    const content = document.getElementById('main-content');
    content.innerHTML = "<h2>Завантаження...</h2>";

    fetch('data/categories.json')
        .then(response => response.json())
        .then(categories => {
            let html = "<h2>Каталог категорій</h2><div class='grid'>";
            
            categories.forEach(cat => {
                html += `
                    <div class="card">
                        <h3 onclick="loadCategory('${cat.shortname}')">${cat.name}</h3>
                        <p class="notes">${cat.notes || ''}</p>
                    </div>`;
            });

            html += `
                <div class="card" style="border: 2px dashed #e94560;">
                    <h3 style="color: #e94560;" onclick="loadSpecials()">Specials</h3>
                    <p class="notes">Випадковий вибір для вас!</p>
                </div>`;
            
            html += "</div>";
            content.innerHTML = html;
        });
}

function loadCategory(shortname) {
    const content = document.getElementById('main-content');
    content.innerHTML = "<h2>Завантаження товарів...</h2>";

    fetch(`data/${shortname}.json`)
        .then(response => response.json())
        .then(data => {
            let html = `<h2>${data.name}</h2>`;
            html += `<button class="btn-back" onclick="loadCatalog()">← Назад до категорій</button>`;
            html += `<div class='grid'>`;
            
            data.items.forEach(item => {
                html += `
                    <div class="card">
                        <img src="https://place-hold.it/200x200?text=${item.name}" alt="${item.name}">
                        <h4>${item.name}</h4>
                        <p style="font-size: 0.85rem;">${item.description}</p>
                        <p class="price">${item.price}</p>
                    </div>`;
            });
            
            html += "</div>";
            content.innerHTML = html;
        });
}

function loadSpecials() {
    fetch('data/categories.json')
        .then(response => response.json())
        .then(categories => {
            const randomIndex = Math.floor(Math.random() * categories.length);
            loadCategory(categories[randomIndex].shortname);
        });
}