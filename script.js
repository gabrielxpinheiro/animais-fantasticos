const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
    const menu = document.querySelector('.menu');
    console.log(menu)
    menu.classList.add('menu-mobile')
}
