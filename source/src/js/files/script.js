// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
// import { flsModules } from './modules.js';

document.querySelector('.video-cover div').onclick = () => {
    document.querySelector('.video-cover').style.display = 'none';
    // document.querySelector('.about__video iframe').src += '&autoplay=1';
};

const burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu-wrapper'),
    mobileMenu = document.querySelector('.mobile-menu-wrapper'),
    openModal = document.querySelector('.consultation button'),
    modal = document.querySelector('.form-wrapper'),
    closeModalBtn = document.querySelector('input[type="reset"]'),
    form = modal.querySelector('form'),
    message = modal.querySelector('p');

burger.onclick = () => {
    burger.classList.toggle('open-menu');

    if (isMobile.any()) {
        mobileMenu.classList.toggle('showMobile');
        mobileMenu.style.transition = 'all 0.3s ease 0s';

        if (burger.classList.contains('open-menu')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    } else {
        menu.classList.toggle('show');
    }
};

document.addEventListener('click', (e) => {
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    };

    if (e.composedPath().includes(openModal)) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else if (
        !e.composedPath().includes(modal) ||
        e.composedPath().includes(closeModalBtn)
    ) {
        closeModal();
    }

    document.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
            closeModal();
        }
    });

    modal.addEventListener('submit', (e) => {
        e.preventDefault();

        form.style.display = 'none';
        message.style.display = 'block';

        setTimeout(() => closeModal(), 2000);
        setTimeout(() => {
            form.style.display = 'block';
            message.style.display = 'none';
        }, 2100);
    });
});
