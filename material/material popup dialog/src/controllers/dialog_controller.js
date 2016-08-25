/**
 * Created by OshurmamadovP on 12-08-2016.
 */


angular.module('dialogModule',[]).controller("dialog_controller",function($scope,dialog_data_model){

    $scope.dialog = new dialog_data_model();
    $scope.dialog.title   = "Dialog Title";
    $scope.dialog.message = "Feel MDL(Material Design Lite) and AngularJS power";

    $scope.showDialog = function () {
        showDialog('#dialog');
    };
});