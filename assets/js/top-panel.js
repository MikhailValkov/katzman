function showMainMenu() {
    let menuBlock = document.getElementById("main-menu");
    let menuButton = document.getElementById("menu-button");
    menuBlock.style.left = "0px";
    menuButton.innerHTML = '<img src="/assets/img/icon-close.png"><div class="top-panel-button-text"><p>Закрыть</p></div>';;
    menuButton.onclick = closeMainMenu;
}

function closeMainMenu() {
    let menuBlock = document.getElementById("main-menu");
    let menuButton = document.getElementById("menu-button");
    menuBlock.style.left = "-100vw";
    menuButton.innerHTML = '<img src="/assets/img/icon-documents.png"><div class="top-panel-button-text"><p>Материалы</p></div>';
    menuButton.onclick = showMainMenu;
}

function showCalc() {
    let calcBlock = document.getElementById("calc");
    calcBlock.style.left = "0px";
}

function closeCalc() {
    let calcBlock = document.getElementById("calc");
    calcBlock.style.left = "-100vw";
}

function showAbout() {
    let aboutBlock = document.getElementById("about");
    aboutBlock.style.left = "0px";
}

function closeAbout() {
    let aboutBlock = document.getElementById("about");
    aboutBlock.style.left = "-100vw";
}
function showCall() {
    let callBlock = document.getElementById("call");
    callBlock.style.left = "0px";
}

function closeCall() {
    let callBlock = document.getElementById("call");
    callBlock.style.left = "-100vw";
}