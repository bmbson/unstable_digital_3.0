import React from "react";
import './BottomAudioControlBar.css';

function BottomAudioControlBar() {
    return (
        <div id="BottomAudioControlBar">
            <div id="playPause">Play/Pause</div>
            <div id="VolumeControls"><input type="range" /></div>
            <div id="SeekerBar"><input type="range" /></div>
            <div id="AudioInfo">
                <p>MixName</p>
                <p>ArtistName</p>
            </div>
            <div id="Settings">Settings</div>
        </div>
    );
}

export default BottomAudioControlBar;