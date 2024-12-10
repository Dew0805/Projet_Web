
document.addEventListener('DOMContentLoaded', function() {

    const carouselItems = document.querySelectorAll('.carousel-item');

    let currentIndex = 0;


    function showNextImage() {

        carouselItems[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + 1) % carouselItems.length;

        carouselItems[currentIndex].classList.add('active');

    }


    // Afficher la première image au chargement

    carouselItems[currentIndex].classList.add('active');


    // Défiler les images toutes les 2 secondes

    setInterval(showNextImage, 2000);

});
