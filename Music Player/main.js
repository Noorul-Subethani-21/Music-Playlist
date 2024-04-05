// main.js
const songs = [
    {
        title: "Nee Kavithaigala  ❤️",
        artist: "Pradeep Kumar  𝄞",
        audioFile: "Media/Maragatha Naanayam Nee Kavithaigala Song with Lyrics Aadhi, Nikki Galrani Dhibu Ninan Thomas.mp3",
        image: "Media/img1.png"
    },

    {
        title: "Oru Devathai  ❤️",
        artist: "Yuvan  𝄞",
        audioFile: "Media/Oru-Devadhai.mp3",
        image: "Media/img2.png"
    },
    {
        title: "Idhayathai Oru Nodi  ❤️",
        artist: "Yuvan  𝄞",
        audioFile: "Media/Idhayathai-Oru-Nodi-MassTamilan.com.mp3",
        image: "Media/img3.png"
    },
    {
        title: "Adiye  ❤️",
        artist: "Gv Prakash  𝄞",
        audioFile: "Media/Adiye-MassTamilan.fm.mp3",
        image: "Media/img4.png"
    },
    {
        title: "Oru Nalaikul  ❤️",
        artist: "Yuvan  𝄞",
        audioFile: "Media/Oru-Naalaikkul.mp3",
        image: "Media/img5.png"
    },
    {
        title: "Kadhal Vaithu  ❤️",
        artist: "Yuvan  𝄞",
        audioFile: "Media/Kadhal-Vaithu.mp3",
        image: "Media/img6.png"
    },
    {
        title: "Hayyoda  ❤️",
        artist: "Aniruth 𝄞",
        audioFile: "Media/Hayyoda-MassTamilan.dev.mp3",
        image: "Media/img7.png"
    },
    {
        title: "Angnyaade ❤️",
        artist: "GV Prakash 𝄞",
        audioFile: "Media/Angnyaade.mp3",
        image: "Media/img8.png"
    },
    {
        title: "En Kadhal Solla ❤️",
        artist: "Yuvan  𝄞",
        audioFile: "Media/En-Kadhal-Solla.mp3",
        image: "Media/img9.png"
    },
    {
        title: "Suthuthe Suthuthe Bhoomi ❤️",
        artist: "Yuvan  𝄞",
        audioFile: "Media/Suthuthe-Suthuthe-Bhoomi.mp3",
        image: "Media/img10.png"
    },


    
];

let currentSongIndex = 0;
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");
const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");
const songImg = document.getElementById("songImg");

// Function to load a song
function loadSong(index) {
    const currentSong = songs[index];
    song.src = currentSong.audioFile;
    songImg.src = currentSong.image;
    songTitle.textContent = currentSong.title;
    artist.textContent = currentSong.artist;
}

// Load the initial song
loadSong(currentSongIndex);

// Play or pause the song
function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

// Go to the next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playPause(); // Auto-play next song
}

// Go to the previous song
function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playPause(); // Auto-play previous song
}

// Event listeners
song.onloadedmetadata = function() {
    progress.max = song.duration;
};

song.ontimeupdate = function() {
    progress.value = song.currentTime;
};

progress.onchange = function() {
    song.currentTime = progress.value;
};

document.getElementById("backwardBtn").addEventListener("click", previousSong);
document.getElementById("backwardControl").addEventListener("click", previousSong);
document.getElementById("forwardBtn").addEventListener("click", nextSong);
document.getElementById("forwardControl").addEventListener("click", nextSong);
document.getElementById("playPauseControl").addEventListener("click", playPause);
