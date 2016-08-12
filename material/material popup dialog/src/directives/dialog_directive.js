/**
 * Created by OshurmamadovP on 12-08-2016.
 */

angular.module('initModule')
    .directive('materialDialog',function () {
        return{
            restrict: 'E',
            scope: {
                dialogData: '=data'
            },
            templateUrl: 'pages/templates/dialog.html'
        }
    });
