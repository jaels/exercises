
$(document).ready(function () {
    console.log("Im in!!!!")
console.log($('.AD'));
    var toggle=false;
    $('.AD').append('<input type="button" class="button" value="Timed email"></input>');
    $(".button").on('click', function () {
        if(toggle===false) {
            toggle=true;
            $.get(chrome.extension.getURL('dialog.html'), function(data) {
                $(data).appendTo('.AD');
            });
        }
        else {
            $(".feinPopup").remove();
            toggle=false;
        }
    });
});
