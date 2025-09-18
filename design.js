var i = 0;
var textTyped = "Hello,\nmy name is Suhana Gupta.\nI am a college student\nprogrammer\nreader\nmusician\nswiftie";

var speed = 50;

function typeWriter() {
    if (i < textTyped.length) {
        document.getElementById("typewriter").innerHTML += textTyped.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


window.onload = typeWriter;
