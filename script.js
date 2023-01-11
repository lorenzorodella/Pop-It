function buttonPress() {alert('Sorpresa!')}

burgerState = true

function toggleBurger() {
    elms = document.getElementsByClassName('navbar__items')[0]
    icon = document.getElementsByClassName('fa')[0]
    if (burgerState) {
        elms.style.display = 'none';
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    } else {
        elms.style.display = 'flex';
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }
    burgerState = !burgerState
}