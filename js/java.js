const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');

let isPlaying = false;

playButton.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    } else {
        audio.pause();
        isPlaying = false;
    }
});
