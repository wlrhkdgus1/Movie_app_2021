const body = document.querySelector("body");

const VIDEO_NUMBER = 5;

function paintImage(vNumber){
    const video = new video();
    video.src = `videos/${vNumber + 1}.mp4`
    videos.classList.add("bgI");
    body.prepend(video);
}

function genRandom(){
    const number = Math.floor(Math.random() * VIDEO_NUMBER); // floor = 3.1 3.2 3.3 다 3으로 ceil = 3.1~3.9 다 4로
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();