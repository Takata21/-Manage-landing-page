const btn__menu = document.querySelector('#header__menu-icon')
const menu = document.querySelector('#header__menu-container')
    // const slide = document.querySelector('.slider__slide-container')



// for (let i = 0; i < slide.childElementCount; i++) {
//     const iten = document.createElement('span')
//     if (i === 0) {
//         iten.classList.add('active')
//     }
//     document.querySelector('.slider__indicadores').appendChild(iten)


// }


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