// import img from "";
import "./style.css";
// import img from "./img/Union.svg";
import * as _ from "lodash";
import { HtmlTagObject } from "html-webpack-plugin";
// _. вызов loodash функций

// const el = document.createElement('div');
// const myIcon = new Image();
// myIcon.src = './img/cong.svg';

// el.appendChild(myIcon);

// document.body.appendChild(el);

const level = localStorage.getItem('level');
console.log(level);

const time = document.querySelector('.time');
const btnNewSt = document.querySelector('.button_new_start');
const gameCarts = document.querySelector('.game_carts');
const bag = document.querySelector('.bag');
const bagTablet = document.querySelector('.bag_tablet');
const tabletImg = document.querySelector('.tablet_img');
const buttonTabletRestart = document.querySelector('.tablet_restart');

let sec = 0;
let min = 0;
let t: any ;

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
    };
};

function add() {
    tick();
    (time as HTMLElement).textContent = (min > 9 ? min : "0" + min) + "." + (sec > 9 ? sec : "0" + sec);
    timer();
};

function timer() {
    t = setTimeout(add, 1000);
};

(btnNewSt as HTMLElement).onclick = () => {
    window.location.reload();
};

// // сброс времени
// time.textContent = "00.00";
// seconds = 0; 
// minutes = 0;

const arr = ['./img/carts_img/c1.jpg', './img/carts_img/c2.jpg', './img/carts_img/c3.jpg', './img/carts_img/c4.jpg', './img/carts_img/c5.jpg', './img/carts_img/c6.jpg', './img/carts_img/c7.jpg', './img/carts_img/c8.jpg', './img/carts_img/c9.jpg', './img/carts_img/c10.jpg', './img/carts_img/c11.jpg', './img/carts_img/c12.jpg', './img/carts_img/c13.jpg', './img/carts_img/c14.jpg', './img/carts_img/c15.jpg', './img/carts_img/c16.jpg', './img/carts_img/c17.jpg', './img/carts_img/c18.jpg', './img/carts_img/c19.jpg', './img/carts_img/c20.jpg', './img/carts_img/c21.jpg', './img/carts_img/c22.jpg', './img/carts_img/c23.jpg', './img/carts_img/c24.jpg', './img/carts_img/c25.jpg', './img/carts_img/c26.jpg', './img/carts_img/c27.jpg', './img/carts_img/c28.jpg', './img/carts_img/c29.jpg', './img/carts_img/c30.jpg', './img/carts_img/c31.jpg', './img/carts_img/c32.jpg', './img/carts_img/c33.jpg', './img/carts_img/c34.jpg', './img/carts_img/c35.jpg', './img/carts_img/c36.jpg'];

let arrCarts: string[] = [];
let arrWin: string[] = [];
        
if (level === '1') {
            
    for (let i = 0; i < 3; i++) {
        let rand = Math.floor(Math.random() * arr.length);
        arrCarts.push(arr[rand]);
    };
     
    for (let i = 0; i < 3; i++) {
        arrCarts.push(arrCarts[i]);
        
    };

    templateCarts();
    setTimeout(hiddenShirt, 5000);
    setTimeout(cartsClick_1, 5000); 
};

if (level === '2') {
    for (let i = 0; i < 6; i++) {
        let rand = Math.floor(Math.random() * arr.length);
        arrCarts.push(arr[rand]);
    };
     
    for (let i = 0; i < 6; i++) {
        arrCarts.push(arrCarts[i]);
    };

    templateCarts();
    setTimeout(hiddenShirt, 5000);
    setTimeout(cartsClick_2, 5000);
};

if (level === '3') {
    for (let i = 0; i < 9; i++) {
        let rand = Math.floor(Math.random() * arr.length);
        arrCarts.push(arr[rand]);
    };
     
    for (let i = 0; i < 9; i++) {
        arrCarts.push(arrCarts[i]);
    };

    templateCarts();
    setTimeout(hiddenShirt, 5000);
    setTimeout(cartsClick_3, 5000);  
};

function shuffle(array:string[]) {
    array.sort(() => Math.random() - 0.5);
};

function cartsClick_1() {
    const carts = document.querySelectorAll('.cart');
    const divShirt = document.querySelectorAll('.div_shirt');
    const imgCart = document.querySelectorAll('.cart_img');

    for (let i = 0; i < carts.length; i++) {
        (carts[i] as HTMLElement).onclick = () =>{
            divShirt[i].remove();
            imgCart[i].classList.remove('hidden');

            arrWin.push((imgCart[i] as HTMLImageElement).src);
            
            if (arrWin.length === 2 && arrWin[0] !== arrWin[1] || arrWin[2] !== arrWin[3] && arrWin[3] !== undefined || arrWin[4] !== arrWin[5] && arrWin[5] !== undefined) {
                template_loser();
                console.log(time?.textContent);
                return;
            };

            if (arrWin.length === carts.length) {
                template_winner();
            };
        };  
    };
};

function cartsClick_2() {
    const carts = document.querySelectorAll('.cart');
    const divShirt = document.querySelectorAll('.div_shirt');
    const imgCart = document.querySelectorAll('.cart_img');

    for (let i = 0; i < carts.length; i++) {
        (carts[i] as HTMLElement).onclick = () =>{
            divShirt[i].remove();
            imgCart[i].classList.remove('hidden');
            
            arrWin.push((imgCart[i] as HTMLImageElement).src);
            
            if (arrWin.length === 2 && arrWin[0] !== arrWin[1] || arrWin[2] !== arrWin[3] && arrWin[3] !== undefined || arrWin[4] !== arrWin[5] && arrWin[5] !== undefined || arrWin[6] !== arrWin[7] && arrWin[7] !== undefined || arrWin[8] !== arrWin[9] && arrWin[9] !== undefined || arrWin[10] !== arrWin[11] && arrWin[11] !== undefined) {
                template_loser();
                return;
            };

            if (arrWin.length === carts.length) {
                template_winner();
            };
        };  
    };
};

function cartsClick_3() {
    const carts = document.querySelectorAll('.cart');
    const divShirt = document.querySelectorAll('.div_shirt');
    const imgCart = document.querySelectorAll('.cart_img');

    for (let i = 0; i < carts.length; i++) {
        (carts[i] as HTMLElement).onclick = () =>{
            divShirt[i].remove();
            imgCart[i].classList.remove('hidden');
            
            arrWin.push((imgCart[i] as HTMLImageElement).src);
            
            if (arrWin.length === 2 && arrWin[0] !== arrWin[1] || arrWin[2] !== arrWin[3] && arrWin[3] !== undefined || arrWin[4] !== arrWin[5] && arrWin[5] !== undefined || arrWin[6] !== arrWin[7] && arrWin[7] !== undefined || arrWin[8] !== arrWin[9] && arrWin[9] !== undefined || arrWin[10] !== arrWin[11] && arrWin[11] !== undefined || arrWin[12] !== arrWin[13] && arrWin[13] !== undefined || arrWin[14] !== arrWin[15] && arrWin[15] !== undefined || arrWin[16] !== arrWin[17] && arrWin[17] !== undefined) {
                template_loser();
                return;
            };

            if (arrWin.length === carts.length) {
                template_winner();
            };
        };  
    };
};

function template_loser() {
    clearTimeout(t);
    (bag as HTMLElement).classList.remove('hidden');
    (bagTablet as HTMLElement).classList.remove('hidden');
    (bagTablet as HTMLElement).style.display = 'flex';
    (tabletImg as HTMLImageElement).src = './img/lose.svg';
    const p: any = document.createElement("p");
    p.classList.add('p_t_r');
    p.textContent = 'Вы проиграли!';
    const tabRes = document.getElementById('tabRes');
    tabRes?.appendChild(p)

    const tabTimeRes = document.getElementById('tabTimeRes');
    const p2: any = document.createElement('p');
    p2.classList.add('p_t_t_r');

    p2.textContent = time?.textContent;
    tabTimeRes?.appendChild(p2);

    (buttonTabletRestart as HTMLElement).onclick = () => {
        window.location.reload();
    };
};

function template_winner() {
    clearTimeout(t);
    (bag as HTMLElement).classList.remove('hidden');
    (bagTablet as HTMLElement).classList.remove('hidden');
    (bagTablet as HTMLElement).style.display = 'flex';
    (tabletImg as HTMLImageElement).src = './img/cong.svg';
    const p: any = document.createElement("p");
    p.classList.add('p_t_r');
    p.textContent = 'Вы выиграли!';
    const tabRes = document.getElementById('tabRes');
    tabRes?.appendChild(p)

    const tabTimeRes = document.getElementById('tabTimeRes');
    const p2: any = document.createElement('p');
    p2.classList.add('p_t_t_r');

    p2.textContent = time?.textContent;
    tabTimeRes?.appendChild(p2);

    (buttonTabletRestart as HTMLElement).onclick = () => {
        window.location.reload();
    };
};

export function templateCarts() {

    shuffle(arrCarts);

    for (let i = 0; i < arrCarts.length; i++) {

        const cart = document.createElement('div');
        cart.classList.add('cart');

        const imgCart = document.createElement('img');
        imgCart.classList.add('cart_img');
        imgCart.src = arrCarts[i];
        
        cart.appendChild(imgCart);
        (gameCarts as HTMLElement).appendChild(cart);
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

setTimeout(timer, 5000);

        
        








