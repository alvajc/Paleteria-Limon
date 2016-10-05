var PaleteriaLimonApp = angular.module('myApp', []);

PaleteriaLimonApp.controller('navController', ['$scope', function($scope) {
  $scope.menu = "Menu";
  $scope.contact = "Contact Us";
  $scope.follow = "Follow Us";
}]);
