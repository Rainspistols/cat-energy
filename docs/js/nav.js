var navBtn = document.querySelector(".mobile-closed__button");
var navBlock = document.querySelector(".mobile-nav");

navBtn.addEventListener("click", function () {
  if (navBlock.classList.contains("js-none")) {
    navBlock.classList.remove("js-none");
    navBlock.classList.add("js-block");
  } else {
    navBlock.classList.add("js-none");
    navBlock.classList.remove("js-block");
  }
})





