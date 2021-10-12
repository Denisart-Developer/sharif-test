var rus = document.querySelector(".language-header__rus");
var us = document.querySelector(".language-header__us");
var kz = document.querySelector(".language-header__kz");
var turkish = document.querySelector(".language-header__turkish");
var tgk = document.querySelector(".language-header__tgk");
var uzbek = document.querySelector(".language-header__uzbek");
var strelka = document.querySelector(".language-header");
strelka.addEventListener("click", function(){
  us.classList.toggle("active");
  kz.classList.toggle("active");
  turkish.classList.toggle("active");
  tgk.classList.toggle("active");
  uzbek.classList.toggle("active");
  strelka.classList.toggle("active");
  rus.classList.toggle("active");
})

const menu = document.querySelector('.menu__burger');
const burger = document.querySelector('.burger');
menu.addEventListener("click", function (e) {
   burger.classList.toggle('_active');
   menu.classList.toggle('_active');
});
