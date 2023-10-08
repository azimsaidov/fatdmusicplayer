const audio = document.getElementById("audio");
const songList = document.getElementById("songList");

const songs = [
    { name: "Virginia Beach", source: "./songs/virginiabeach.mp3" },
    { name: "First Person Shooter (feat. J. Cole)", source: "./songs/firstpersonshooter.mp3" },
    { name: "Daylight", source: "./songs/daylight.mp3" },
    { name: "Calling For You (feat. 21 Savage)", source: "./songs/calling4u.mp3" },
    { name: "What Would Pluto Do?", source: "./songs/wwpd.mp3" },
    { name: "Another Late Night (feat. Lil Yachty)", source: "./songs/aln.mp3" },
    { name: "All The Parties (feat. Chief Keef)", source: "./songs/atp.mp3" },
    // Add more songs as needed
];

// Function to populate the playlist
function populatePlaylist() {
    songs.forEach((song, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = song.name;
        listItem.addEventListener("click", () => {
            playSong(index);
        });
        songList.appendChild(listItem);
    });
}

// Function to play a specific song
function playSong(index) {
    const song = songs[index];
    audio.src = song.source;
    audio.play();

    const listItems = document.querySelectorAll("#songList li");
    listItems.forEach((item) => {
      item.classList.remove("playing");
    });
  
    // Add the "playing" class to the currently playing song's list item
    const listItem = document.querySelectorAll("#songList li")[index];
    listItem.classList.add("playing");

     // Play the next song when the current song ends
  audio.addEventListener("ended", () => {
    const nextIndex = (index + 1) % songs.length;
    playSong(nextIndex);
  });
  }



// Initialize the playlist
populatePlaylist();
