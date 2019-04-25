(function(){
    'use strict'
    
    angular.module('scrumboard.demo',[]).controller('ScrumboardController', ['$scope', '$http', ScrumboardController]);
    function ScrumboardController($scope, $http) {
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

        $scope.data = []
        $http.get('/scrumboard/lists/').then(function(response) {
            $scope.data = response.data;
        });
    }

}());
