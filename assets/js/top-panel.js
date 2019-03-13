let menuBlock = document.getElementById("main-menu");
let menuButton = document.getElementById("menu-button");

let calcBlock = document.getElementById("calc");
let calcButton = document.getElementById("calc-btn");

let aboutBlock = document.getElementById("about");
let aboutButton = document.getElementById("about-btn");

let callBlock = document.getElementById("call");
let callButton = document.getElementById("call-btn");

function showMainMenu() {
    closeCalc();
    closeAbout();
    closeCall();
    menuBlock.style.left = "0px";
    menuButton.innerHTML = '<img src="/assets/img/icon-close.png"><div class="top-panel-button-text"><p>Закрыть</p></div>';
    menuButton.onclick = closeMainMenu;
    menuButton.classList.add("top-panel-button-akcent");
}

function closeMainMenu() {
    menuBlock.style.left = "-100vw";
    menuButton.innerHTML = '<img src="/assets/img/icon-documents.png"><div class="top-panel-button-text"><p>Материалы</p></div>';
    menuButton.onclick = showMainMenu;
    menuButton.classList.remove("top-panel-button-akcent");
}

function showCalc() {
    closeMainMenu();
    closeAbout();
    closeCall();
    calcBlock.style.left = "0px";
    calcButton.innerHTML = '<img src="/assets/img/icon-close.png"><div class="top-panel-button-text"><p>Закрыть</p></div>';
    calcButton.onclick = closeCalc;
    calcButton.classList.add("top-panel-button-akcent");
}

function closeCalc() {
    calcBlock.style.left = "-100vw";
    calcButton.innerHTML = '<img src="/assets/img/icon-calc.png"><div class="top-panel-button-text"><p>Калькулятор</p></div>';
    calcButton.onclick = showCalc;
    calcButton.classList.remove("top-panel-button-akcent");
}

function showAbout() {
    closeMainMenu();
    closeCall();
    closeCalc();
    aboutBlock.style.left = "0px";
    aboutButton.innerHTML = '<img src="/assets/img/icon-close.png"><div class="top-panel-button-text"><p>Закрыть</p></div>';
    aboutButton.onclick = closeAbout;
    aboutButton.classList.add("top-panel-button-akcent");
}

function closeAbout() {
    aboutBlock.style.left = "-100vw";
    aboutButton.innerHTML = '<img src="/assets/img/icon-call.png"><div class="top-panel-button-text"><p>Контакты</p></div>';
    aboutButton.onclick = showAbout;
    aboutButton.classList.remove("top-panel-button-akcent");
}

function showCall() {
    closeMainMenu();
    closeCalc();
    closeAbout();
    callBlock.style.left = "0px";
    callButton.innerHTML = '<img src="/assets/img/icon-close.png"><div class="top-panel-button-text"><p>Закрыть</p></div>';
    callButton.onclick = closeCall;
    callButton.classList.add("top-panel-button-akcent");
}

function closeCall() {
    callBlock.style.left = "-100vw";
    callButton.innerHTML = '<img src="/assets/img/icon-rulet.png"><div class="top-panel-button-text"><p>Хочу замер!</p></div>';
    callButton.onclick = showCall;
    callButton.classList.remove("top-panel-button-akcent");
}