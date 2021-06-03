
//Loader

// window.addEventListener('load',() => {
//    let $loader = document.querySelector(".loader");     
//    $loader.classList.toggle("loader2");
// });


//Loader con construction website template

window.addEventListener('load',() => {
   const $loader = document.querySelector(".loader");
   const $imagen = document.querySelector(".loader__img");
   const $conteoIngreso = document.querySelector(".enter-count");
   let tiempoIngreso = 5;

   $imagen.setAttribute("src","img/website-construction.jpg")
   setTimeout(() => {
      $imagen.classList.replace("loader__img","loader2__img");
   }, 50);
   setInterval(() => {
      $conteoIngreso.textContent = `Ingreso al portafolio en: ${tiempoIngreso--} segundos.`;
   }, 1000);
   setTimeout(() => {
      $loader.classList.toggle("loader3");
   }, 6500);
});