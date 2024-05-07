import { useState } from "react";
import video from "../assets/video.mp4";

const Media = () => {
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(false);

    const toggleAudio = () => {
        setAudioPlaying(!audioPlaying);
    };

    const toggleVideo = () => {
        setVideoPlaying(!videoPlaying);
    };

    return (
        <div>
            <h2>Media Player</h2>
            <div>
                <button onClick={toggleAudio}>{audioPlaying ? 'Pause Audio' : 'Play Audio'}</button>
                {audioPlaying && (
                    <audio controls>
                        <source src="https://www.computerhope.com/jargon/m/example.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                )}
            </div>
            <div>
                <button onClick={toggleVideo}>{videoPlaying ? 'Pause Video' : 'Play Video'}</button>
                {videoPlaying && (
                    <video controls>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video element.
                    </video>
                )}
            </div>
        </div>
    );
}

export default Media