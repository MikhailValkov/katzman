function showMainMenu() {
  let menuBlock = document.getElementById("main-menu");
  let menuButton = document.getElementById("menu-button");
  menuBlock.style.left = "0px";
  menuButton.innerHTML = "Закрыть";
  menuButton.onclick = closeMainMenu;
}

function closeMainMenu() {
  let menuBlock = document.getElementById("main-menu");
  let menuButton = document.getElementById("menu-button");
  menuBlock.style.left = "-100vw";
  menuButton.innerHTML = "Меню";
  menuButton.onclick = showMainMenu;
}
