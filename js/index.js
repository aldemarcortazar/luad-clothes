
const openOrCloseMobileMenu = () => {
    const $menuOpen = document.getElementById('header-mobile__nav');
    $menuOpen.classList.toggle('header-mobile__nav-show');
}

const requestByFetch = async ( url = '' ) => {
    const response = await fetch(url);
    const dataParsed = await response.json();
    return dataParsed;
}

window.addEventListener('click', ( e ) =>{
    if( e.target.matches('#header-mobile__logo') ){
        openOrCloseMobileMenu();
    }   

    if( e.target.matches('#close-icon') ){
        openOrCloseMobileMenu();
    }
});

window.addEventListener('DOMContentLoaded', () => {

    const getAllProducts = async(  url ) => {
        const products = await requestByFetch(url);
        return products;
    }

    const printAllProducts = async () => {
        const $productsContainer = document.getElementById('products');
        const $template = document.getElementById('template-card').content;
        const fragment = document.createDocumentFragment();
        const products = await getAllProducts( 'https://clothes-luad-default-rtdb.firebaseio.com/products.json' );
        const productsToArray = Object.values(products);
        
        productsToArray.forEach((product) => {
            if( !product.tag ){
                const  tagText = $template.querySelector('.product__card-tag').style = "padding:0;";
                
            }

            if( product.tag ){
                $template.querySelector('.product__card-tag__text').textContent = product.tag;
            };

            $template.querySelector('.products__card-img').setAttribute('src', product.image_url);
            $template.querySelector('.products__card-img').setAttribute('alt', product.name );
            $template.querySelector('.products__card-name').textContent = product.name;
            $template.querySelector('.products__card-price').textContent = `$ ${product.price}`;

            let $clone = document.importNode($template, true);
            fragment.appendChild($clone);

        });

        $productsContainer.appendChild(fragment);
    }

    printAllProducts();

});