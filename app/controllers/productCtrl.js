app.controller('productController',function($scope, $http, $timeout, $filter){
    
    $scope.products = {};
    $scope.filterParams;
    $scope.categoriaFiltros = "monturas";
    var appendNumber = 1;
    $scope.appendDisabled = false;
    var currentSlide;
    $scope.loader = true;

    var current = {
        page: 1,
        count : appendNumber,
        category: $scope.categoriaFiltros
    }

    // get data
    $scope.loadData = function(){
        var database = firebase.database();
        return firebase.database().ref('/productos/').once('value').then(function(snapshot) {
            $scope.products = snapshot.val();
          
            $scope.$apply();
            $scope.updateSlider();
            $scope.loader = false;
          });


    }
   $scope.loadData();
   
     $scope.changeTab = function(val){
        $scope.categoriaFiltros = val;
        $scope.products = {};
        current.category = val;
        current.count = 1;
        current.page = 1;
        appendNumber = 1;
        $scope.loadData(); 
       $scope.appendDisabled = false;
        swiper.slideTo(0);    
    }

    // //current swipper
    $timeout(function(){   
        document.getElementById("monturas").click();
    }, 210);   


    // //add slider dinamically
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        spaceBetween: 30,
        onSlideChangeEnd:function(swipe){
            currentSlide = swipe.snapIndex + 1;
            if(current.count === currentSlide){
               $scope.appendDisabled = false;
               angular.element(document.querySelector('.append-slide')).removeClass('hide');
            }else{
                angular.element(document.querySelector('.append-slide')).addClass('hide');
               $scope.appendDisabled = true;
            }
           return $scope.appendDisabled;
        }        
    });

    $scope.updateSlider = function(){
            $timeout(function(){ //give the data a moment to propagate
                swiper.updateSlidesSize(); //now run the sizing update - can also use just .update()
                    swiper.slideTo(current.count);    
            }, 10);
        }

    document.querySelector('.append-slide').addEventListener('click', function (e) {
        e.preventDefault();
        current.count = ++appendNumber;
        $scope.loadData();
    });

});