let email = document.querySelector('.navbar-email');
let menu = document.querySelector('.desktop-menu');
let MenuDeploy = document.querySelector('.MenuDeploy');
let MenuMobile = document.querySelector('.mobile-menu');
let carrito = document.querySelector('.navbar-shopping-cart');
let carritoDeploy = document.querySelector('.my-order');

email.addEventListener("click", toggleDesktoMenu);
function toggleDesktoMenu(event) {
    menu.classList.toggle('inactive');
    carritoDeploy.classList.add('inactive');
}

MenuDeploy.addEventListener("click", toggleMobileMenu);
function toggleMobileMenu(event){
    MenuMobile.classList.toggle('inactive');
    carritoDeploy.classList.add('inactive');
}

carrito.addEventListener("click", DeployShoppingCart);
function DeployShoppingCart(event){
    carritoDeploy.classList.toggle('inactive');
    menu.classList.add('inactive');
    MenuMobile.classList.add('inactive');
}