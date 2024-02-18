
const openOrCloseMobileMenu = () => {
    const $menuOpen = document.getElementById('header-mobile__nav');
    $menuOpen.classList.toggle('header-mobile__nav-show');
}

window.addEventListener('click', ( e ) =>{
    if( e.target.matches('#header-mobile__logo') ){
        openOrCloseMobileMenu();
    }   

    if( e.target.matches('#close-icon') ){
        openOrCloseMobileMenu();
    }
});