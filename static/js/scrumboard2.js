(function(){
    'use strict'
    
    angular.module('scrumboard.demo',['ngRoute']).controller('ScrumboardController', ['$scope', '$http', '$location', ScrumboardController]);
    function ScrumboardController($scope, $http, $location) {
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

        $scope.logout = function() {
            $http.get('/auth_api/logout/')
                .then(function() {
                    $location.url('/login');
                }); 
        }

        $scope.data = []
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
