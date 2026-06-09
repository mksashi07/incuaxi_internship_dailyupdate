const songs = [
{
    title: "Song One",
    artist: "Artist One",
    src: "songs/song1.mp3",
    cover: "images/song1.jpg"
},
{
    title: "Song Two",
    artist: "Artist Two",
    src: "songs/song2.mp3",
    cover: "images/song2.jpg"
},
{
    title: "Song Three",
    artist: "Artist Three",
    src: "songs/song3.mp3",
    cover: "images/song3.jpg"
}
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

let songIndex = 0;

loadSong(songIndex);

function loadSong(index){
    title.textContent = songs[index].title;
    artist.textContent = songs[index].artist;
    audio.src = songs[index].src;
    cover.src = songs[index].cover;
}

function playSong(){
    audio.play();
    playBtn.innerHTML =
    '<i class="fas fa-pause"></i>';
}

function pauseSong(){
    audio.pause();
    playBtn.innerHTML =
    '<i class="fas fa-play"></i>';
}

playBtn.addEventListener("click", () => {
    if(audio.paused){
        playSong();
    } else {
        pauseSong();
    }
});

nextBtn.addEventListener("click", () => {
    songIndex++;

    if(songIndex > songs.length - 1){
        songIndex = 0;
    }

    loadSong(songIndex);
    playSong();
});

prevBtn.addEventListener("click", () => {
    songIndex--;

    if(songIndex < 0){
        songIndex = songs.length - 1;
    }

    loadSong(songIndex);
    playSong();
});

audio.addEventListener("timeupdate", () => {

    const {duration, currentTime} = audio;

    const progressPercent =
        (currentTime / duration) * 100;

    progress.style.width =
        `${progressPercent}%`;

    let currentMinutes =
        Math.floor(currentTime / 60);

    let currentSeconds =
        Math.floor(currentTime % 60);

    if(currentSeconds < 10){
        currentSeconds = "0" + currentSeconds;
    }

    currentTimeEl.textContent =
        `${currentMinutes}:${currentSeconds}`;

    let durationMinutes =
        Math.floor(duration / 60);

    let durationSeconds =
        Math.floor(duration % 60);

    if(durationSeconds < 10){
        durationSeconds = "0" + durationSeconds;
    }

    if(duration){
        durationEl.textContent =
        `${durationMinutes}:${durationSeconds}`;
    }
});

progressContainer.addEventListener("click", (e)=>{

    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;

    const duration = audio.duration;

    audio.currentTime =
    (clickX / width) * duration;
});

audio.addEventListener("ended", () => {
    nextBtn.click();
});