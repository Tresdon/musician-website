$(document).ready(function () {
    audio = $("#audio_for_video");
    angle1 = $("#angle1");
    angle2 = $("#angle2");
    angle3 = $("#angle3");

    audio.on('play', function () {
        angle1.get(0).play();
        angle2.get(0).play();
        angle3.get(0).play();
    });

    audio.on('pause', function () {
        angle1.get(0).pause();
        angle2.get(0).pause();
        angle3.get(0).pause();
    });
    
});

function switchToAngle1() {
    angle1.css('display', 'block');
    angle2.css('display', 'none');
    angle3.css('display', 'none');
}

function switchToAngle2() {
    angle2.css('display', 'block');
    angle1.css('display', 'none');
    angle3.css('display', 'none');
}

function switchToAngle3() {
    angle3.css('display', 'block');
    angle1.css('display', 'none');
    angle2.css('display', 'none');
}