const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function nextCertificate() {
   let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
   slider.style.marginLeft = "-200%";
   slider.style.transition = "all 0.5s";
   setTimeout(function(){
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend",sliderSectionFirst);
      slider.style.marginLeft = "-100%";
   },500);
}

function previusCertificate() {
   let sliderSection = document.querySelectorAll(".slider__section");
   sliderSectionLast = sliderSection[sliderSection.length - 1];
   slider.style.marginLeft = "-200%";
   slider.style.transition = "all 0.5s"; 
   setTimeout(() => {
      slider.style.transition = "none";
      slider.insertAdjacentElement("afterbegin",sliderSectionLast);
      slider.style.marginLeft = "-100%";
   },500);
}

btnRight.addEventListener("click" , nextCertificate);
btnLeft.addEventListener("click" , previusCertificate);

setInterval(nextCertificate,5000);