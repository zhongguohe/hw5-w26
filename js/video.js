var video;

window.addEventListener("load", function () {
    console.log("Good job opening the window");

    video = document.querySelector("#player1");

    video.autoplay = false;
    video.loop = false;
    video.pause();

    video.volume = 0.5;
    document.querySelector("#slider").value = 50;
    document.querySelector("#volume").textContent = 50;

    console.log("Autoplay is " + video.autoplay);
    console.log("Loop is " + video.loop);
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function () {
    console.log("Play Video");
    video.play();
    document.querySelector("#volume").textContent = video.volume * 100;
});

document.querySelector("#pause").addEventListener("click", function () {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate = video.playbackRate * 0.9;
    console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate = video.playbackRate / 0.9;
    console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
    if (video.currentTime + 10 >= video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime = video.currentTime + 10;
    }
    console.log("Current video time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
    if (video.muted) {
        video.muted = false;
        document.querySelector("#mute").textContent = "Mute";
    } else {
        video.muted = true;
        document.querySelector("#mute").textContent = "Unmute";
    }
});

document.querySelector("#slider").addEventListener("input", function () {
    let volumeValue = document.querySelector("#slider").value;
    video.volume = volumeValue / 100;
    document.querySelector("#volume").textContent = volumeValue;
});

document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
});