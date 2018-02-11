var mainSlider = (function(){
    function mainSlide(slides, next, previous, time){
        var currentSlide = 0;
        var slideInterval = setInterval(nextSlide, time);  

        function nextSlide(){
            goToSlide(currentSlide + 1);
        }
        function prevSlide(){
            goToSlide(currentSlide - 1);
        }

        function goToSlide(n){
            slides[currentSlide].className = 'slide';
            currentSlide = (n+slides.length)%slides.length;
            slides[currentSlide].className = 'slide active';       
        }


        next.onclick = function() {
            pauseSlideshow();
            nextSlide();
            slideInterval = setInterval(nextSlide,time);
        };
        previous.onclick = function() {
            pauseSlideshow();
            prevSlide();
            slideInterval = setInterval(nextSlide,time);
        };

        function pauseSlideshow(){
            clearInterval(slideInterval);
        }
    }
    return{
        mainSlide: mainSlide
    }
})();