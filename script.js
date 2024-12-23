
let search = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
    media.classList.remove('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active')
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    media.classList.remove('active');
    search.classList.remove('active');
    login.classList.remove('active')
}

let login = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
    media.classList.remove('active');
    search.classList.remove('active');
    shoppingCart.classList.remove('active');
}

let media = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    media.classList.toggle('active');
    search.classList.remove('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active')
}

window.onscroll = () =>{
    media.classList.remove('active');
    search.classList.remove('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');

}


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
