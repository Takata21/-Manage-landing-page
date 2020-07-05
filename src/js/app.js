const btn__menu = document.querySelector('#header__menu-icon')
const menu = document.querySelector('#header__menu-container')

btn__menu.addEventListener('click', () => {
    console.log('hola')
    if (menu.style.display === "block") {
        menu.style.display = "none"
        btn__menu.classList.remove('active')
    } else {
        menu.style.display = "block"
        btn__menu.classList.add('active')

    }

})