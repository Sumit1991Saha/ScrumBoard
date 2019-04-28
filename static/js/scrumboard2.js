(function(){
    'use strict'
    
    angular.module('scrumboard.demo',['ngRoute']).controller('ScrumboardController', ['$scope', '$http', 'Login', ScrumboardController]);
    function ScrumboardController($scope, $http, Login) {
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
                alert("Login to fetch the data")
            }
        );

        
    }

}());
