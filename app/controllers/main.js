app.controller('mainController',function($scope, $http, $window){


    $scope.formData = {};
    $scope.products = {};
    $scope.currentProduct = {};
    $scope.showedit = false;
    $scope.showAdd = false;
        

    $scope.loadData = function () {
        $http.get('/api/productos').then(function(data){
            $scope.products = data.data.message.results;
        }).catch(function(){
            console.log('err show', data);
        });
    };

    $scope.createProduct = function(producto){
       // console.log($scope.formData);
        $http.post('/api/productos', producto).then(function (data){
            $scope.showAdd = false;
            $scope.loadData();
        }).catch(function(err){
            console.log('err', err);
        })      

    }
    $scope.deleteProduct = function(id){
        $http.delete('/api/productos/'+id).then(function(data){
            $scope.loadData();
        }).catch(function(err){
            console.log('err', err);
        });
    }

    $scope.editProduct = function(id, producto){
         $http.put('/api/productos/'+id, producto).then(function(data){
           $scope.loadData();
           $scope.showedit = false;
           $scope.formData = {};
         }).catch(function(err){
           console.log('err', err);
         });
    }

    $scope.showEdit = function(product){
            $scope.currentProduct = product;
            $scope.formData.nombre = product.nombre;
            $scope.formData.material = product.material;
            $scope.formData.categoria = product.categoria;
            $scope.formData.imagen = product.imagen;
            $scope.showedit = true;
            // console.log('aqui recibo',product);
    }


    $scope.loadData();
});


