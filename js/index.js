const mobileBtn = document.getElementById("mobileCta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

//Bg Navbar

window.addEventListener("load", updateHeaderNavHeight);
window.addEventListener("resize", updateHeaderNavHeight);

var headerNavElement = document.querySelector("body > header > .navbar");
var headerNavStyleElement = document.createElement("style");
document.head.appendChild(headerNavStyleElement);

function updateHeaderNavHeight() {
  var h = headerNavElement.offsetHeight;

  headerNavStyleElement.innerText =
    "header::before { height:" +
    h +
    "px }" +
    "header { margin-bottom:" +
    -h +
    "px }" +
    "#main-content { padding-top:" +
    h +
    "px }";
}
