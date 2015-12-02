var app = angular.module('ecommerce');
app.controller('mainCtrl', function($scope, mainService){

$scope.getProducts = function(){
  mainService.getProducts().then(function(res){
    $scope.products = res.data;
  }, function(err){
    console.log(err)
  })
}

$scope.getProducts();

$scope.addProduct = function(){
  mainService.postProduct($scope.newProduct).then(function(res){
    $scope.getProducts();
  })
};

$scope.update = function(product){
  mainService.updateProduct(product).then(function(res){
    $scope.getProducts();
  }, function(err){
    console.log(err)
  })
}

})
