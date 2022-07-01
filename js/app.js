(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
        }
    };
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.querySelector(".video-cover div").onclick = () => {
        document.querySelector(".video-cover").style.display = "none";
    };
    const burger = document.querySelector(".burger"), menu = document.querySelector(".menu-wrapper"), mobileMenu = document.querySelector(".mobile-menu-wrapper"), openModal = document.querySelector(".consultation button"), modal = document.querySelector(".form-wrapper"), closeModalBtn = document.querySelector('input[type="reset"]'), script_form = modal.querySelector("form"), message = modal.querySelector("p");
    burger.onclick = () => {
        burger.classList.toggle("open-menu");
        if (isMobile.any()) {
            mobileMenu.classList.toggle("showMobile");
            mobileMenu.style.transition = "all 0.3s ease 0s";
            if (burger.classList.contains("open-menu")) document.body.style.overflow = "hidden"; else document.body.style.overflow = "";
        } else menu.classList.toggle("show");
    };
    document.addEventListener("click", (e => {
        const closeModal = () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        };
        if (e.composedPath().includes(openModal)) {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        } else if (!e.composedPath().includes(modal) || e.composedPath().includes(closeModalBtn)) closeModal();
        document.addEventListener("keydown", (e => {
            if ("Escape" == e.key) closeModal();
        }));
        modal.addEventListener("submit", (e => {
            e.preventDefault();
            script_form.style.display = "none";
            message.style.display = "block";
            setTimeout((() => closeModal()), 2e3);
            setTimeout((() => {
                script_form.style.display = "block";
                message.style.display = "none";
            }), 2100);
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();