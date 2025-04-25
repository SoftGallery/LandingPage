function changeColor(color) {
    document.getElementById('addToCartBtn').style.backgroundColor = color;
    document.getElementById('backIcon').style.color = color;
    document.getElementById('priceTag').style.color = color;
    document.getElementById('increaseQuantity').style.backgroundColor = color;
    document.getElementById('decreaseQuantity').style.backgroundColor = color;


    document.getElementById('carouselLeft').style.color = color;
    document.getElementById('carouselRight').style.color = color;

    let productImage = document.getElementById('productImage');
    productImage.style.borderColor = color;
}


let currentImageIndex = 0;
const images = [
    'https://images6.kabum.com.br/produtos/fotos/sync_mirakl/601796/Controle-Com-Fio-Gamesir-G7-Se-Para-XBOX-One-X-S-PC-Branco_1731372757_g.jpg',
    'https://images6.kabum.com.br/produtos/fotos/sync_mirakl/601796/Controle-Com-Fio-Gamesir-G7-Se-Para-XBOX-One-X-S-PC-Branco_1731372771_g.jpg'
];

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    if (currentImageIndex >= images.length) currentImageIndex = 0;
    document.getElementById('productImage').src = images[currentImageIndex];
}

document.getElementById('prevImage').addEventListener('click', () => changeImage(-1));
document.getElementById('nextImage').addEventListener('click', () => changeImage(1));

// Funções de quantidade
function increaseQuantity() {
    let quantity = parseInt(document.getElementById('quantityInput').value);
    quantity++;
    document.getElementById('quantityInput').value = quantity;
}

function decreaseQuantity() {
    let quantity = parseInt(document.getElementById('quantityInput').value);
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantityInput').value = quantity;
    }
}