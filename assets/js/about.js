function showAbout() {
  let aboutBlock = document.getElementById("about");
  // let aboutBtn = document.getElementById("about-btn");
  // if (aboutBtn.textContent === "О нас") {
  // console.log("show about");
  aboutBlock.style.left = "0px";
  // aboutBtn.style.backgroundColor = "rgba(255, 50, 50, 0.8)";
  // aboutBtn.textContent = "Закрыть";
  // } else {
  // console.log("close about");

  // aboutBtn.textContent = "О нас";
  // aboutBtn.style.backgroundColor = "rgba(255,255,255,0.8)";
  // }
}

function closeAbout() {
  let aboutBlock = document.getElementById("about");
  aboutBlock.style.left = "-100vw";
}
