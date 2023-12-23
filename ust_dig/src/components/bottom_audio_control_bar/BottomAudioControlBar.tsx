'use client'

import React, { useState } from "react";
import './BottomAudioControlBar.css';
import { MdPlayArrow, MdPause } from "react-icons/md";
import PlayPauseButton from "../play_pause_button/PlayPauseButton";

function BottomAudioControlBar() {

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

            <PlayPauseButton></PlayPauseButton>
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