(function(){
    'use strict'
    
    angular.module('scrumboard.demo',['ngRoute']).controller('ScrumboardController', ['$scope', '$http', '$location', 'Login', ScrumboardController]);
    function ScrumboardController($scope, $http, $location, Login) {
        $scope.add = function (list, title) {
            var card = {
                list: list.id,  //Same name as the table name in card table
                title: title
            };

            $http.post('/scrumboard/cards/', card).then(
                function(response) {
                    list.cards.push(response.data);
                },
                function(response) {
                    alert('could not create card');
                }
            );
        }

        Login.redirectIfNotLoggedIn();
        $scope.data = []
        $scope.logout = Login.logout;
        //Initial input for sorting data sets
        $scope.sortBy='story_points';
        $scope.reverse=true;
        $scope.showFilters=false;
        
        $http.get('/scrumboard/lists/').then(
            function(response) {
                $scope.data = response.data;
            },
            function(response) {
                if (response.status == 403) {
                    $location.url('/login');
                }
                alert("Login to fetch the data")
            }
        );

        
    }

}());
