
$(document).ready(function() {

    var toggle=false;

    console.log('I hear ya');

    console.log((window.document.getElementsByClassName('T-I'))[0]);

    $('.T-I').on('click', function() {
        console.log('compose clicked!!!!');
        setTimeout(function () {
            console.log('lets seeee');
            $('.OoRYyc').append('<input type="button" class="feinButton" value="Timed Email"></input>');
        }, 1500);

        setTimeout(function () {
            $(".feinButton").on('click', function () {
                console.log('its clicked');
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
