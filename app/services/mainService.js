app.service('mainService', function($http){
    
    var serv = this;
    serv.products = {};


    // $http.get('/api/productos').then(function(data){
    //         serv.products = data.data.message;
            
    //     }).catch(function(){
    //         console.log('err show', data);
    //     });
    //console.log(serv.products);
    
    
    return serv;
}); 