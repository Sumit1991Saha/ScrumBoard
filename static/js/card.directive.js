(function() {
    'use strict';

    angular.module('scrumboard.demo').directive('scrumboardCard', CardDirective);

    function CardDirective() {
        return {
            templateUrl: 'static/html/card.html',
            restrict: 'E',
            controller: ['$scope', '$http', function($scope, $http) {
                var url='/scrumboard/cards/' + $scope.card.id + '/';
                $scope.destList = $scope.list;

                $scope.update = function () {
                    return $http.put(
                        url, 
                        $scope.card
                    );
                };
                
                //This is used to wait for 500 milli seconds 
                 // before send the rest update call 
                 // else each key stroke would send an update request to the server
                $scope.modelOptions = { 
                    debounce: 500
                };

                function removeCardFromList(card, list) {
                    var cards = list.cards;
                    cards.splice(
                        cards.indexOf(card), 
                        1
                    );
                }
                
                $scope.delete = function() {
                    $http.delete(url).then(function() {
                        removeCardFromList($scope.card, $scope.list);
                        alert($scope.card.title + " deleted succesfully");
                    })
                }

                $scope.move = function() {
                    if ($scope.destList == undefined) {
                        return;
                    }
                    $scope.card.list = $scope.destList.id;
                    $scope.update().then( function() {
                        removeCardFromList($scope.card, $scope.list);
                        $scope.destList.cards.push($scope,card);
                    });
                }

            }]
        };
    }
}());
 