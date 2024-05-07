import React from 'react';
import deepMeditationAudio from '../assessts/music.mp3'; // Adjust the path to navigate from src to assets

function MediaPlayer() {
  return (
    <div>
      <h2>Audio</h2>
      <audio controls>
        <source src={deepMeditationAudio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <h2>Video</h2>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/QFaFIcGhPoM?si=BrSKHUFpzcDlT8H_"
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
       </iframe>
      </div>
    </div>
  );
}

export default MediaPlayer;
