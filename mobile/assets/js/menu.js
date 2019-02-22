var menuIsToggled = false;
var calcIsToggled = false;
var callIsToggled = false;
var aboutIsToggled = false;

function menuToggle() {

    var menuButton = document.getElementById("menuButton");

    if (!menuIsToggled) {
        menuButton.classList.add("top-panel-logo-rotated");
        menuContent.style.top = "50px";
    } else {
        menuButton.classList.remove("top-panel-logo-rotated");
        menuContent.style.top = "-500vh";
    }

    menuIsToggled = !menuIsToggled;
}

function calcToggle() {

    var menuButton = document.getElementById("menuButton");

    var calcContent = document.getElementById("calc");

    if (!calcIsToggled) {
        menuToggle();
        menuButton.onclick = calcToggle;
        menuButton.setAttribute("src", "/assets/img/icon-close.png");
        menuButton.classList.add("top-panel-logo-close");
        calcContent.style.top = "50px";
    } else {
        calcContent.style.top = "-500vh";
        menuButton.onclick = menuToggle;
        menuButton.classList.remove("top-panel-logo-close");
        menuButton.setAttribute("src", "/assets/img/icon-burger.png");
    }

    calcIsToggled = !calcIsToggled;
}

function callToggle() {

    var menuButton = document.getElementById("menuButton");

    var callContent = document.getElementById("call");

    if (!callIsToggled) {
        menuToggle();
        menuButton.onclick = callToggle;
        menuButton.setAttribute("src", "/assets/img/icon-close.png");
        menuButton.classList.add("top-panel-logo-close");
        callContent.style.top = "50px";
    } else {
        callContent.style.top = "-500vh";
        menuButton.onclick = menuToggle;
        menuButton.classList.remove("top-panel-logo-close");
        menuButton.setAttribute("src", "/assets/img/icon-burger.png");
    }

    callIsToggled = !callIsToggled;
}

function aboutToggle() {

    var menuButton = document.getElementById("menuButton");

    var aboutContent = document.getElementById("about");

    if (!aboutIsToggled) {
        menuToggle();
        menuButton.onclick = aboutToggle;
        menuButton.setAttribute("src", "/assets/img/icon-close.png");
        menuButton.classList.add("top-panel-logo-close");
        aboutContent.style.top = "50px";
    } else {
        aboutContent.style.top = "-500vh";
        menuButton.onclick = menuToggle;
        menuButton.classList.remove("top-panel-logo-close");
        menuButton.setAttribute("src", "/assets/img/icon-burger.png");
    }

    aboutIsToggled = !aboutIsToggled;
}


// // let menuBlock = document.getElementById("main-menu");
// // let menuButton = document.getElementById("menu-button");

// let calcBlock = document.getElementById("calc");
// // let calcButton = document.getElementById("calc-btn");

// let aboutBlock = document.getElementById("about");
// // let aboutButton = document.getElementById("about-btn");

// let callBlock = document.getElementById("call");
// // let callButton = document.getElementById("call-btn");

// // function showMainMenu() {
// //     closeCalc();
// //     closeAbout();
// //     closeCall();
// //     menuBlock.style.top = "0px";
// //     menuButton.innerHTML = '<img src="/assets/img/icon-close.png"><div class="top-panel-button-text"><p>Закрыть</p></div>';
// //     menuButton.onclick = closeMainMenu;
// //     menuButton.classList.add("top-panel-button-akcent");
// // }

// // function closeMainMenu() {
// //     menuBlock.style.top = "-500vh";
// //     menuButton.innerHTML = '<img src="/assets/img/icon-documents.png"><div class="top-panel-button-text"><p>Материалы</p></div>';
// //     menuButton.onclick = showMainMenu;
// //     menuButton.classList.remove("top-panel-button-akcent");
// // }

// function showCalc() {
//     // closeMainMenu();
//     closeAbout();
//     closeCall();
//     calcBlock.style.top = "0px";
//     calcButton.innerHTML = '<img src="/assets/img/icon-close.png"><div class="top-panel-button-text"><p>Закрыть</p></div>';
//     calcButton.onclick = closeCalc;
//     calcButton.classList.add("top-panel-button-akcent");
// }

// function closeCalc() {
//     calcBlock.style.top = "-500vh";
//     calcButton.innerHTML = '<img src="/assets/img/icon-calc.png"><div class="top-panel-button-text"><p>Калькулятор</p></div>';
//     calcButton.onclick = showCalc;
//     calcButton.classList.remove("top-panel-button-akcent");
// }

// function showAbout() {
//     // closeMainMenu();
//     closeCall();
//     closeCalc();
//     aboutBlock.style.top = "0px";
//     aboutButton.innerHTML = '<img src="/assets/img/icon-close.png"><div class="top-panel-button-text"><p>Закрыть</p></div>';
//     aboutButton.onclick = closeAbout;
//     aboutButton.classList.add("top-panel-button-akcent");
// }

// function closeAbout() {
//     aboutBlock.style.top = "-500vh";
//     aboutButton.innerHTML = '<img src="/assets/img/icon-call.png"><div class="top-panel-button-text"><p>Контакты</p></div>';
//     aboutButton.onclick = showAbout;
//     aboutButton.classList.remove("top-panel-button-akcent");
// }

// function showCall() {
//     // closeMainMenu();
//     closeCalc();
//     closeAbout();
//     callBlock.style.top = "0px";
//     callButton.innerHTML = '<img src="/assets/img/icon-close.png"><div class="top-panel-button-text"><p>Закрыть</p></div>';
//     callButton.onclick = closeCall;
//     callButton.classList.add("top-panel-button-akcent");
// }

// function closeCall() {
//     callBlock.style.top = "-500vh";
//     callButton.innerHTML = '<img src="/assets/img/icon-rulet.png"><div class="top-panel-button-text"><p>Заказать замер</p></div>';
//     callButton.onclick = showCall;
//     callButton.classList.remove("top-panel-button-akcent");
// }