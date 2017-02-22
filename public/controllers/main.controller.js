/**
 * Created by rajith on 2/18/17.
 */

var app = angular.module('myApp',[]);

app.controller('loginController',function ($scope,$http) {


    $scope.login = function () {

        $http.post('/signin',$scope.user);
    }
});

app.controller('signupController',function ($scope,$http) {

    $scope.signup = function () {

        console.log($scope.user);
        $http.post('/signin',$scope.user);
    }


});
