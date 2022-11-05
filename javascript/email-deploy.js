let email = document.querySelector('.navbar-email');
let menu = document.querySelector('.desktop-menu');
email.addEventListener("click", toggleDesktoMenu);
function toggleDesktoMenu(event) {
    menu.classList.toggle('inactive');
}