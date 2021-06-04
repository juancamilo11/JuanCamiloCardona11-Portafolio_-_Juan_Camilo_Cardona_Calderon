//IIFE (Inmediatly Invoked Function Expretions) for the color theme switch
((d) => {
   const $btnSwitch = d.querySelector('#switch');
   
   $btnSwitch.addEventListener('click',() => {
      d.body.classList.toggle('dark');
      $btnSwitch.classList.toggle('active');
   });
})(document);


//IIFE (Inmediatly Invoked Function Expretions) for the page's loader
((d,w) => {

   //Simple loader (Without 'Under construction')

   // window.addEventListener('load',() => {
   //    let $loader = d.querySelector('.loader');
   //    $loader.classList.toggle('loader2');
   // });


//Loader with construction website template

   w.addEventListener('load',() => {
      const $loader = d.querySelector('.loader'),
         $image = d.querySelector('.loader__img'),
         $enterCount = d.querySelector('.enter-count');
      let timeLeft = 5;   //-->5

      $image.setAttribute('src','img/website-construction.jpg');
      setTimeout(() => {
         $image.classList.replace('loader__img','loader2__img');
      }, 50);
      setInterval(() => {
         $enterCount.textContent = `${timeLeft--} seconds to go!`;
      }, 1000);
      setTimeout(() => {
         $loader.classList.toggle('loader2');
      }, 6500);
   });
})(document, window);

//IIFE (Inmediatly Invoked Function Expretions) for the authomatic slider
((d)=> {
 
   const $slider = d.querySelector("#slider");
   let $sliderSection = d.querySelectorAll(".slider__section"),
      $sliderSectionLast = $sliderSection[$sliderSection.length - 1];

   const $btnLeft = d.querySelector("#btn-left"),
      $btnRight = d.querySelector("#btn-right");

   $slider.insertAdjacentElement("afterbegin", $sliderSectionLast);

   function nextCertificate() {
      let $sliderSectionFirst = d.querySelectorAll(".slider__section")[0];
      $slider.style.marginLeft = "-200%";
      $slider.style.transition = "all 0.5s";
      setTimeout(function(){
         $slider.style.transition = "none";
         $slider.insertAdjacentElement("beforeend",$sliderSectionFirst);
         $slider.style.marginLeft = "-100%";
      },500);
   }

   function previusCertificate() {
      let $sliderSection = d.querySelectorAll(".slider__section");
      $sliderSectionLast = $sliderSection[$sliderSection.length - 1];
      $slider.style.marginLeft = "-200%";
      $slider.style.transition = "all 0.5s"; 
      setTimeout(() => {
         $slider.style.transition = "none";
         $slider.insertAdjacentElement("afterbegin",$sliderSectionLast);
         $slider.style.marginLeft = "-100%";
      },500);
   }

   $btnRight.addEventListener("click" , nextCertificate);
   $btnLeft.addEventListener("click" , previusCertificate);

   //Next certificate each six seconds -> The slider goes forward
   setInterval(nextCertificate,5000);

})(document);


//IIFE (Inmediatly Invoked Function Expretions) for the responsive menu

(()=> {

   const $button = document.querySelector('.navbar__menu');
   const $links = document.querySelector('.navbar__links');
   let $counter = 0;

   $button.addEventListener('click',function(){
      if($counter == 0){
         $counter=1;
         $links.classList.remove('one');
         $links.classList.add('two');
      }else{
         $counter = 0;
         $links.classList.add('one');
         $links.classList.remove('two');
      }
   })

   window.addEventListener('resize', function(){
      if(screen.width > 991){
         $counter=0;
         $links.classList.remove('two');
         $links.className = ('navbar__links one');
      }
   });

   $links.addEventListener('click', function(e){      
      setTimeout(() => {         
         $counter = 0;
         $links.classList.add('one');
         $links.classList.remove('two');
      }, 600);
   });

})();


