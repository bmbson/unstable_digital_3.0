'use client'

import React, { useState } from "react";
import './BottomAudioControlBar.css';
import { MdPlayArrow, MdPause } from "react-icons/md";

function BottomAudioControlBar() {

    const [playPauseState, setPlayPauseState] = useState(false);

    function playPauseControl() {
        setPlayPauseState(!playPauseState)
    }

    function volumeBarControl() {
        alert();
    }

    function seekerBarControl() {
        alert();
    }

    return (
        <div id="BottomAudioControlBar">
            <audio controls>
                <source src="/nationHoe.wav" type="audio/wav" />
            </audio>
            <button onClick={() => playPauseControl()} id="playPauseButton">
                {playPauseState ? <MdPlayArrow></MdPlayArrow> : <MdPause></MdPause>}
            </button>
            <input id="VolumeControl" type="range" />
            <input id="SeekerBar " type="range" />
            <div id="AudioInfo">
                <img src="" alt="" />
                <p>MixName</p>
                <p>ArtistName</p>
            </div>
            <div id="Settings">Settings</div>
        </div>
    );
}

export default BottomAudioControlBar;