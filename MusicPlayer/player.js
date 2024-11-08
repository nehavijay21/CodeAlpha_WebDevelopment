const songList = [
  {
      title: "Glimpse of Us",
      artist: "Joji",
      url: "songs/song1.mp3",
      cover: "images/joji_glimpse_of_us.png"
  },
  {
      title: "Skyfall",
      artist: "Adele",
      url: "songs/song2.mp3",
      cover: "images/adele_skyfall.jpeg"
  },
  {
      title: "Sweater Weather",
      artist: "The Neighbourhood",
      url: "songs/song3.mp3",
      cover: "images/the_neighbourhood_sweater_weather.jpeg"
  }
];

let currentSongIndex = 0;
const audio = new Audio();
audio.src = songList[currentSongIndex].url;

function updateNowPlaying(song) {
  document.getElementById("song-title").textContent = song.title;
  document.getElementById("artist-name").textContent = song.artist;
  document.getElementById("album-cover").src = song.cover;
}

document.getElementById("play").addEventListener("click", () => {
  audio.play();
  updateNowPlaying(songList[currentSongIndex]);
  document.getElementById("play").style.display = "none";
  document.getElementById("pause").style.display = "inline";
});

document.getElementById("pause").addEventListener("click", () => {
  audio.pause();
  document.getElementById("pause").style.display = "none";
  document.getElementById("play").style.display = "inline";
});

document.getElementById("next").addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songList.length;
  audio.src = songList[currentSongIndex].url;
  audio.play();
  updateNowPlaying(songList[currentSongIndex]);
});

document.getElementById("prev").addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
  audio.src = songList[currentSongIndex].url;
  audio.play();
  updateNowPlaying(songList[currentSongIndex]);
});

document.getElementById("volume").addEventListener("input", (e) => {
  audio.volume = e.target.value;
});

// Load playlist and display current song when clicked
//const songListElement = document.getElementById("song-list");
//songList.forEach((song, index) => {
 // const li = document.createElement("li");
 // li.textContent = song.title;
 // li.addEventListener("click", () => {
  //    currentSongIndex = index;
  //    audio.src = song.url;
  //    audio.play();
 //     updateNowPlaying(song);
 // });
  //songListElement.appendChild(li);
//});
function displayPlaylist(songs) {
  const songListElement = document.getElementById("song-list");
  songListElement.innerHTML = ""; // Clear previous playlist

  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.addEventListener("click", () => {
      currentSongIndex = index;
      audio.src = song.url;
      audio.play();
      updateNowPlaying(song);
    });
    songListElement.appendChild(li);
  });
}

// Initial display of the full playlist
displayPlaylist(songList);

// Search functionality
document.getElementById("search-bar").addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();

  // Filter songs based on search term in title or artist
  const filteredSongs = songList.filter(song => 
    song.title.toLowerCase().includes(searchTerm) ||
    song.artist.toLowerCase().includes(searchTerm)
  );

  // Display the filtered list
  displayPlaylist(filteredSongs);
});