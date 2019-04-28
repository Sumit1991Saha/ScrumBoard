(function() {
    'use strict';

    angular.module('scrumboard.demo').directive('scrumboardCard', CardDirective);

    function CardDirective() {
        return {
            templateUrl: 'static/html/card.html',
            restrict: 'E',
            controller: ['$scope', '$http', function($scope, $http) {
                var url='/scrumboard/cards/' + $scope.card.id + '/';
                $scope.update = function () {
                    $http.put(url, $scope.card);
                };
                 //This is used to wait for 500 milli seconds 
                 // before send the rest update call 
                 // else each key stroke would send an update request to the server
                $scope.modelOptions = { 
                    debounce: 500
                };
                $scope.delete = function() {
                    $http.delete(url).then(function() {
                        var cards = $scope.list.cards;
                        cards.splice(cards.indexOf($scope.card), 1);
                        alert($scope.card.title + " deleted succesfully");
                    })
                }
            }]
        };
    }
}());
 