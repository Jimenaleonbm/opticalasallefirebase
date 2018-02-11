app.controller('contactController',function($scope, $http){
    
    $scope.contact = {};
    $scope.message = " ";
    $scope.loading = false;

    $scope.contact.email = '';

    $scope.verificarCaptcha = function(){
      if(!$scope.contact.myRecaptchaResponse){
        $scope.message = "Por favor seleccione la casilla de verificación  ";
      }else {
        $scope.sendMail();
      }
    }



    $scope.sendMail = function(contact){
      $scope.loading = true;
      var database = firebase.database();
      return firebase.database().ref('/emailContact/').once('value').then(function(snapshot) {
          $scope.contact.email = snapshot.val();
          $scope.contact.subject = "Contacto de la pagina web"
          $scope.contact.message = "Nombre: " + $scope.contact.name + "<br/>" + "Email: " + $scope.contact.emailFrom + "<br/>" + "Mensaje: "+ $scope.contact.body;
          $scope.postMail($scope.contact);
        });
      }

    $scope.postMail = function (contact) {
      $http.post('https://etbco.azurewebsites.net/api/ce', $scope.contact)
      .then(function(data) {
          // Show success message
          $scope.loading = false;
          $scope.message = "Mensaje Enviado";
          $scope.contact = {};
          console.log('mensaje enviado');
        })
        .catch(function(data) {
          // Show error message
          console.log('error al enviar mensaje');
          $scope.message = "Error al enviar mensaje";
        });
     };
});