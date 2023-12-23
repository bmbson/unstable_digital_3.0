import React from "react";
import './BottomAudioControlBar.css';
import { MdPlayArrow, MdPause } from "react-icons/md";

function BottomAudioControlBar() {
    return (
        <div id="BottomAudioControlBar">
            <audio controls>
                <source src="/nationHoe.wav" type="audio/wav"/>
            </audio>
            <div id="playPause">Play/Pause</div>
            <input id="VolumeControl" type="range" />
            <input id="SeekerBar "type="range" />
            <div id="AudioInfo">
                <p>MixName</p>
                <p>ArtistName</p>
            </div>
            <div id="Settings">Settings</div>
        </div>
    );
}

export default BottomAudioControlBar;