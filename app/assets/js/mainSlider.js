// Main slider
(function(){

    var bodyClass = document.getElementsByTagName("body")[0].className;
    if(bodyClass === 'front'){
        // mainSlider
        var slidesTop = document.querySelectorAll(".mainSlider .slides .slide");
        var nextTop = document.getElementById('next');
        var previousTop = document.getElementById('previous');
        mainSlider.mainSlide(slidesTop, nextTop, previousTop, 4000);


        // brigadeSlide
        var slidesB = document.querySelectorAll(".brigades-container .slides .slide");
        var nextB = document.getElementById('button-next');
        var previousB = document.getElementById('button-prev');
        mainSlider.mainSlide(slidesB, nextB, previousB, 20000);
    }




    // scroll magic
    var controller = new ScrollMagic.Controller();
    
    var scene = new ScrollMagic.Scene({
			triggerElement: "#nosotros",
            offset: -250
		})
		.setTween("#nosotros", .5, {opacity: "1", scale: 1})
		.addTo(controller);


    var scene2 = new ScrollMagic.Scene({
			triggerElement: "#servicios",
            offset: -250
		})
		.setTween("#servicios h2", .4, { left: '50%'})
		.addTo(controller);        

    var scene3 = new ScrollMagic.Scene({
			triggerElement: "#servicios",
            offset: -40
		})
		.setTween(".containerServices", .8, { opacity: 1})
		.addTo(controller);     
    
    var scene4 = new ScrollMagic.Scene({
			triggerElement: "#brigadas",
            offset: -150
		})
		.setTween("#brigadas", .8, { top: 0})
		.addTo(controller);  
 
    var scene5 = new ScrollMagic.Scene({
			triggerElement: "#contacto",
            offset: -200
		})
		.setTween(".contactForm", .4, { opacity: 1, scale:1})
		.addTo(controller);  

})();