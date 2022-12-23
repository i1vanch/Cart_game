function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
    };
};

function add() {
    tick();
    time.textContent = (min > 9 ? min : "0" + min) + "." + (sec > 9 ? sec : "0" + sec);
    timer();
};

function timer() {
    t = setTimeout(add, 1000);
};

function templateCarts() {

    for (let i = 0; i < arrCarts.length; i++) {

        const cart = document.createElement('div');
        cart.classList.add('cart');

        const imgCart = document.createElement('img');
        imgCart.classList.add('cart_img');
        imgCart.src = arrCarts[i];
        
        cart.appendChild(imgCart);
        gameCarts.appendChild(cart);
    };
};


function hiddenShirt() {

    const carts = document.querySelectorAll('.cart');
    const imgCart = document.querySelectorAll('.cart_img');
    const divShirt = document.querySelectorAll('.div_shirt');
    
    for (let i = 0; i < arrCarts.length; i++) {
        imgCart[i].classList.add('hidden');

        const divShirt = document.createElement('div');
        divShirt.classList.add('div_shirt');

        const imgShirt = document.createElement('img');
        imgShirt.classList.add('img_shirt');
        imgShirt.src = './img/Union.svg';

        divShirt.appendChild(imgShirt);
            
        carts[i].appendChild(divShirt);
    };  
};