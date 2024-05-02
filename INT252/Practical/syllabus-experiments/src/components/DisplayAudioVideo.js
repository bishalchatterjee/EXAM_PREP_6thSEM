import React from 'react';
import audioSrc from '../assets/audio.mp3'
import videoSrc from '../assets/video.mp4'

function DisplayAudioVideo({type, controls}){
    
    const Element = type ==='audio' ? 'audio' : 'video';
    const src = type === 'audio' ? audioSrc : videoSrc;

    return(
        <div>
            <Element src={src} controls={controls} />
        </div>
    );
};


export default DisplayAudioVideo;