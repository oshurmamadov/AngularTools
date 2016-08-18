/**
 * Created by OshurmamadovP on 12-08-2016.
 */

function showDialog(id){
    $(document).bind("keyup.dialog");
    setTimeout(function () {
        var dialog = $(id);
        dialog.css({opacity: 1});
        dialog.css({visibility: 'visible'});
    }, 100);
}

$(document).on('click','#remove',function () {
    hideDialog("#dialog");
});


function hideDialog(id) {
    $(document).unbind("keyup.dialog");
    var dialog = $(id);
    dialog.css({opacity: 0});
    setTimeout(function () {
        dialog.css({visibility: 'collapse'});
    }, 400);
}