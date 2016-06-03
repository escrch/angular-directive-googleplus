var mainApp = angular.module('MainApp', ['directive-googleplus']);

mainApp.controller('ApplicationController', function ($scope) {
    
    $scope.googlePlusCallBack = function(data) {
        console.log(data);
    }
    
});

