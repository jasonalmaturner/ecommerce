var app = angular.module('ecommerce');
app.service('mainService', function($http){

this.getProducts = function(){
  return $http({
    method: 'GET',
    url: '/api/products'
  })
}

this.postProduct = function(product){
  console.log('service')
  return $http({
    method: 'POST',
    url: '/api/products',
    data: product
  });
};

this.updateProduct = function(product){
  return $http({
    method: 'PUT',
    url: '/api/products',
    data: product
  })
}

})
