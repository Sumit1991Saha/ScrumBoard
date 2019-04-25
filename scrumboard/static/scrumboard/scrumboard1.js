(function(){
    'use strict'
    
    angular.module('scrumboard.demo',[]).controller('ScrumboardController', ['$scope', ScrumboardController]);
    function ScrumboardController($scope) {
        $scope.add = function (list, title) {
            var card = {
                title: title
            };
            list.cards.push(card);
        }

        $scope.data = [
            {
                name: 'Django demo',
                cards: [
                    {
                        title: 'Create Models'
                    },
                    {
                        title: 'Create View'
                    },
                    {
                        title: 'Migrate Database'
                    }
                ]
            },
            {
                name: 'Django demo1',
                cards: [
                    {
                        title: 'Create Models1'
                    },
                    {
                        title: 'Create View1'
                    },
                    {
                        title: 'Migrate Database1'
                    }
                ]
            },
            {
                name: 'Angular Demo',
                cards: [
                    {
                        title: 'Write HTML'
                    },
                    {
                        title: 'Write JavaScript'
                    }
                ]
            }
        ]
    }

}());