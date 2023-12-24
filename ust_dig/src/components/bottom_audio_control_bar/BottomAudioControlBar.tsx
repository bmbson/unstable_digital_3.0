'use client'

import React, { useState } from "react";
import './BottomAudioControlBar.css';
import PlayPauseButton from "./play_pause_button/PlayPauseButton";
import SettingsButton from "../settings_button/settings_button";
import VolumeControls from "../volume_controls/VolumeControls";
import SeekerBar from "./seeker_bar/SeekerBar";


function BottomAudioControlBar() {

    function volumeBarControl() {
        alert();
    }

    function seekerBarControl() {
        alert();
    }

    return (
        <div id="BottomAudioControlBar">
            <div id="temp-id">
                {/* <audio controls>
                <source src="/nationHoe.wav" type="audio/wav" />
            </audio> */}

                <PlayPauseButton></PlayPauseButton>
                <VolumeControls></VolumeControls>
                <SeekerBar></SeekerBar>
                <div id="AudioInfo">
                    <img src="" alt="" />
                    <p>MixName</p>
                    <p>ArtistName</p>
                </div>
                <SettingsButton></SettingsButton>
            </div>
        </div>
    );
}

export default BottomAudioControlBar;