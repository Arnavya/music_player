let songs = [
  {
    name: "Baarish",
    path: "Baarish - Yaariyan - Yaariyan 320 Kbps.mp3",
    src: "yaariya.jpg",
    singerName:"Mohammed Irfan"
  },
  {
    name: "Ae_dil_hai_mushkil",
    path: "Ae Dil Hai Mushkil Title Track_320(Ghantalele.com).mp3",
    src: "ae_dil_hai_mushkil.jpg",
    singerName:"Arijit Singh"
  },
  {
    name: "Dekha Hazaro Dafaa",
    path: "Rustom 2016 - Dekha Hazaro Dafaa.mp3",
    src: "rustom.jpg",
    singerName:"Arijit Singh"
  },
  {
    name: "Sanam-Teri-Kasam",
    path: "Sanam Teri Kasam_320(Ghantalele.com).mp3",
    src: "Sanam-Teri-Kasam-Ankit-Tiwari-500-500.jpg",
    singerName:"Ankit Tiwari"
  },
  {
    name: "Koi Tumsa Nahin",
    path: "Koi Tumsa Nahin Krrish 320 Kbps.mp3",
    src: "krrish.jpg",
    singerName:"Sonu Nigam"
  },
  {
    name: "Gulabi Aankhen",
    path: "Gulabi Aankhen Universally Sanam 320 Kbps.mp3",
    src: "Gulabi-Aankhen-Universally-SANAM-500-500.jpg",
    singerName:"Sanam"
  },
  
   
  ];
  
  const prevBtn = document.getElementById('prev-btn');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const nextBtn = document.getElementById('next-btn');
  const myaudio = document.getElementById('audio');
  const poster = document.getElementById('poster');
  const songName = document.getElementById('song-name')
  const singerName = document.getElementById('singer-name')
  const currentTime = document.getElementById('current-time');

  let currentSongIndex = 0;
  let isPlaying = false;
  
  function loadSong(index) {
    const song = songs[index];
    myaudio.src = song.path;
    poster.src = song.src;
    songName.innerHTML = song.name;
    singerName.innerHTML = song.singerName;
  
    if (isPlaying) {
      myaudio.play();
    }
  }
  
  function playPauseSong() {
    if (myaudio.paused) {
      myaudio.play();
      playPauseBtn.classList.replace('fa-play', 'fa-pause');
      isPlaying = true;
    } else {
      myaudio.pause();
      playPauseBtn.classList.replace('fa-pause', 'fa-play');
      isPlaying = false;
    }
  }
  
  prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
  });
  
  playPauseBtn.addEventListener('click', () => {
    playPauseSong();
  });
  
  nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
  });
  
  myaudio.addEventListener('ended', () => {
    // Automatically play the next song
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
  });
  // Load the initial song
  loadSong(currentSongIndex);
  