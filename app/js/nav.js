var navBtn = document.querySelector(".mobile-closed__button");
var navBlock = document.querySelector(".page-header__nav");

navBtn.addEventListener("click", function () {
  if (navBlock.classList.contains("js-none")) {
    navBlock.classList.remove("js-none");
    navBlock.classList.add("js-block");
  } else {
    navBlock.classList.add("js-none");
    navBlock.classList.remove("js-block");
  }
})






// var navMain=document.querySelector(".main-nav");
// var navToggle=document.querySelector(".main-nav__toggle");

// navMain.classList.remove("main-nav--nojs");

// navToggle.addEventListener("click", function() {
//   if (navMain.classList.contains ("main-nav--closed")) {
//     navMain.classList.remove("main-nav--closed");
//     navMain.classList.add("main-nav--open");
//   } else {
//     navMain.classList.add ("main-nav--closed");
//     navMain.classList.remove("main-nav--open");
//   }
// })
