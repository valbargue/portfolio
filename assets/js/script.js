 var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
 
      jQuery(function(){
        $(function () {
            $(window).scroll(function () { //Fonction appelée quand on descend la page
                if ($(this).scrollTop() > 900 ) {  // Quand on est à 200pixels du haut de page,
                    $('#scrollUp').css('right','10px'); // Replace à 10pixels de la droite l'image
                } else { 
                    $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
                }
            });
        });
    });

  const loader = document.querySelector('.loader');

  loader.addEventListener('click', () => {
    window.scrollTo({
      behavior:"smooth"
    })
  })
  window.addEventListener('load', () => {

    window.scrollTo({
      behavior: "smooth"
    })

    loader.classList.add('fondu-out');
  })
     