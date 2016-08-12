/**
 * Created by OshurmamadovP on 12-08-2016.
 */

angular.module('initModule').factory('dialog_data_model',function () {
    function AlertDialogDataModel(data) {
        if(data){
            this.setData(data);
        }
    }
    AlertDialogDataModel.prototype = {
        title: '',
        message: '',
        setData: function (data) {
            angular.extend(this,data);
        }
    };

    return AlertDialogDataModel;
});