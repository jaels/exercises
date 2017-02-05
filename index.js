
$(document).ready(function() {
    var toggle=false;

// This is for when you press Compose to write and email

    $('.T-I').on('click', function() {
        console.log('clicked');
        setTimeout(function () {
            $('.OoRYyc').append('<input type="button" class="feinButton" value="Timed Email"></input>');
        }, 500);
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
        }, 800);
    });

// This is for when you press Reply or Forward to write and email

    $(".yX").on('click', function() {
        setTimeout(function () {
            $('.ams').on('click', function() {
                console.log('ams clicked')
                setTimeout(function () {
                    $('.OoRYyc').append('<input type="button" class="feinButton" value="Timed Email"></input>');
                }, 500);
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
                }, 800);
            });
        }, 800);
    });
});
