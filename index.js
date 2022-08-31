console.log('1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\n3. Вёрстка соответствует макету +48\n4. Требования к css + 12\n5. Интерактивность, реализуемая через css +20\nИтого: 110 баллов');
console.log('Travel2:\n1. Вёрстка соответствует макету. Ширина экрана 390px +48\n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n3. На ширине экрана 390рх и меньше реализовано адаптивное меню +22\nИтого: 85 баллов.');
console.log('Travel3:\n1. Слайдер изображений в секции destinations +50\n2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50\n3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету. +25\nИтого: 125 баллов.');

const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.navigation');
const menuClose = document.querySelector('.navigation-close');
const menuLink = document.querySelectorAll('.nav-link');
const blackoutItem = document.querySelector('.blackout');

burgerItem.addEventListener('click', () => {
    menu.classList.add('navigation-active');
    blackoutItem.classList.add('blackout-active');
});
menuClose.addEventListener('click', () => {
    menu.classList.remove('navigation-active');
    blackoutItem.classList.remove('blackout-active');
});
    
for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', () => {
        menu.classList.remove('navigation-active');
        blackoutItem.classList.remove('blackout-active');                
    });
}

window.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.navigation') && (!target.closest('.burger'))) {
        menu.classList.remove('navigation-active');
        blackoutItem.classList.remove('blackout-active');
    } 
});

const BTN_LEFT = document.querySelector('.destination-card-left');
const BTN_RIGHT = document.querySelector('.destination-card-right');
const BTN_LEFT_ARROW = document.querySelector('.destination-arrow-left');
const BTN_RIGHT_ARROW = document.querySelector('.destination-arrow-right');
const CAUROSEL = document.querySelector('.destinations-cards-container');
const DEST_CARD_LEFT = document.querySelector('.destination-card-left');
const DEST_CARD_RIGHT = document.querySelector('.destination-card-right');
const DEST_CARD_ACTIVE = document.querySelector('.destination-card-active');
const DEST_CARD_LEFT_DES = document.querySelector('.destination-card-desktop-left');
const DEST_CARD_RIGHT_DES = document.querySelector('.destination-card-desktop-right');
const POINTS = document.querySelectorAll('.destination-point');

const moveLeft = () => {
    CAUROSEL.classList.add('transition-left');
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_LEFT_ARROW.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
    BTN_RIGHT_ARROW.removeEventListener('click', moveRight);
}
    
const moveRight = () => {
    CAUROSEL.classList.add('transition-right');
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_LEFT_ARROW.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
    BTN_RIGHT_ARROW.removeEventListener('click', moveRight);
}
    
BTN_LEFT.addEventListener('click', moveLeft);
BTN_LEFT_ARROW.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);
BTN_RIGHT_ARROW.addEventListener('click', moveRight);
    
CAUROSEL.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'move-left' || animationEvent.animationName === 'move-left-mobile') {
        CAUROSEL.classList.remove('transition-left');
    
        const leftDest = DEST_CARD_LEFT.innerHTML;
        const activeDest = DEST_CARD_ACTIVE.innerHTML;
        const rightDest = DEST_CARD_RIGHT.innerHTML;
        const leftDestDes = DEST_CARD_LEFT_DES.innerHTML;
    
        DEST_CARD_RIGHT_DES.innerHTML = rightDest;
        DEST_CARD_RIGHT.innerHTML = activeDest;
        DEST_CARD_ACTIVE.innerHTML = leftDest;
        DEST_CARD_LEFT.innerHTML = leftDestDes;
        DEST_CARD_LEFT_DES.innerHTML = activeDest;
    } else {
        CAUROSEL.classList.remove('transition-right');
        const leftDest = DEST_CARD_LEFT.innerHTML;
        const activeDest = DEST_CARD_ACTIVE.innerHTML;
        const rightDest = DEST_CARD_RIGHT.innerHTML;
        const rightDestDes = DEST_CARD_RIGHT_DES.innerHTML;

        DEST_CARD_LEFT_DES.innerHTML = leftDest;
        DEST_CARD_LEFT.innerHTML = activeDest;
        DEST_CARD_ACTIVE.innerHTML = rightDest;
        DEST_CARD_RIGHT.innerHTML = rightDestDes;
        DEST_CARD_RIGHT_DES.innerHTML = activeDest;
    }
        
    const activePoint = document.querySelector('.destination-point-active');
    activePoint.classList.remove('destination-point-active');
    
    for (let point of POINTS) {
        if (DEST_CARD_ACTIVE.innerHTML.includes(point.id)) {
            point.classList.add('destination-point-active');
            break;
        }
    }
    
    BTN_LEFT.addEventListener('click', moveLeft);
    BTN_LEFT_ARROW.addEventListener('click', moveLeft);
    BTN_RIGHT.addEventListener('click', moveRight);
    BTN_RIGHT_ARROW.addEventListener('click', moveRight);
})

const LOGIN_BUTTON = document.querySelector('.button-login');
const POP_UP = document.querySelector('.pop-up');
const POP_UP_CONT = document.querySelector('.pop-up-content');
const ACC_LINK = document.getElementById('account');
let flagVar = 'up';

function getPopUp() {
    POP_UP.classList.toggle('hidden');
    POP_UP_CONT.classList.toggle('pop-up-active');
}

LOGIN_BUTTON.addEventListener('click', getPopUp);
ACC_LINK.addEventListener('click', getPopUp);

POP_UP.addEventListener('click', (e) => {
    if (e.target.classList.contains('pop-up')) {
        POP_UP_CONT.classList.toggle('pop-up-active');
    }
})

POP_UP_CONT.addEventListener('transitionend', (e) => {
    if (!POP_UP_CONT.classList.contains('pop-up-active')) {
        POP_UP.classList.add('hidden');
    }
})

const EMAIL = document.getElementById('email');
const PASSWORD = document.getElementById('password');
const FORM_BUTTON = document.querySelector('.form-button');

FORM_BUTTON.addEventListener('click', () => {
    if (FORM_BUTTON.innerHTML === 'Sign In') {
        alert(`You have entered the e-mail: ${EMAIL.value}. \nPassword: ${PASSWORD.value}`);
    }
})

const BUTTON_SWITCH = document.querySelector('.register-button');
const ELEM_CREAT = document.querySelectorAll('[data-create]');
const ELEM_HIDDEN = document.querySelectorAll('.unhidden');
const objectCreat = {
    'in': {
        'title': 'Log in to your account',
        'sign': 'Sign In',
        'question': 'Don’t have an account',
        'button': 'Register',
    },
    'up': {
        'title': 'Create account',
        'sign': 'Sign Up',
        'question': 'Already have an account?',
        'button': 'Log in',
    }
}

function switchContent(flag) {
    ELEM_CREAT.forEach(e => e.innerHTML = objectCreat[flag][e.dataset.create]);
 }

function switchSign() {
    ELEM_HIDDEN.forEach(e => e.classList.toggle('hidden-element'));
    switchContent(flagVar);
    flagVar = flagVar === 'up' ? 'in' : 'up';
}

BUTTON_SWITCH.addEventListener('click', switchSign);