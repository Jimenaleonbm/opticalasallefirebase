(function(app) {

  app.directive('archivo', [function($parse) {
    return {
      restrict: "A",
      scope: {
        multiples :"=",
          modelo: "=ngModel"
      },
      link: function(scope, element, attrs) {
        var loadingimage = ""
        element.on('change', function(recibido) {
          var input = recibido.target;
          var size = (input.files[0].size / 1000);
          var type = input.files[0].type;

          if (type == 'image/git' || type == 'image/jpeg' || type == 'image/png' || type == 'application/pdf') {
            if (size < 7000) {
              var reader = new FileReader();
              reader.onprogress = function(algo) {
              };
              reader.onload = function() {
                //  / var dataurl = reader.result;
                if (scope.multiples) {
                  if ( scope.modelo === undefined) {
                    scope.modelo = [];
                    scope.$apply();
                  }
                  scope.modelo.push(reader.result)
                } else {
                  scope.modelo = reader.result;
                  scope.$apply();
                }

              };
              reader.readAsDataURL(input.files[0]);
            } else {
              console.log('Tamaño demasiado grande')
            }
          } else {
            console.log('Archivo invalido')
          }
        });
      }
    };
  }]);
}(angular.module('app')));