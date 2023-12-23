'use client'

import React, { useState } from "react";
import './BottomAudioControlBar.css';
import { MdOutlineSettings } from "react-icons/md";
import PlayPauseButton from "../play_pause_button/PlayPauseButton";
import VolumeButton from "../volume_button/volume_button";

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
            <VolumeButton></VolumeButton>
            <input id="VolumeControl" type="range" />
            <input id="SeekerBar " type="range" />
            <div id="AudioInfo">
                <img src="" alt="" />
                <p>MixName</p>
                <p>ArtistName</p>
            </div>
            <MdOutlineSettings></MdOutlineSettings>
        </div>
    );
}

export default BottomAudioControlBar;