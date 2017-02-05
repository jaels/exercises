
$(document).ready(function() {
    var toggle=false;
    $('.T-I').on('click', function() {
        setTimeout(function () {
            $('.OoRYyc').append('<input type="button" class="feinButton" value="Timed Email"></input>');
        }, 1500);
        setTimeout(function () {
            $(".feinButton").on('click', function () {
                if(toggle===false) {
                    toggle=true;
                    $.get(chrome.extension.getURL('dialog.html'), function(data) {
                        $(data).appendTo('.OoRYyc');
                    });
                }
                else {
                    $(".feinPopup").remove();
                    toggle=false;
                }
            });

        }, 2000);
    });
});
