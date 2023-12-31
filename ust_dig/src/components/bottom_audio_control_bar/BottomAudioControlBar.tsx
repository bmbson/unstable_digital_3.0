'use client'

import React, { useEffect, useState } from "react";
import { useRef } from 'react';
import './BottomAudioControlBar.css';
import PlayPauseButton from "./play_pause_button/PlayPauseButton";
import SettingsButton from "../settings_button/settings_button";
import VolumeControls from "../volume_controls/VolumeControls";
import SeekerBar from "./seeker_bar/SeekerBar";
import AudioInfo from "./audio_info/AudioInfo";


function BottomAudioControlBar() {
    const audioRef = useRef(null);
    const audioContext = new AudioContext();

    useEffect(() => {
        if (audioRef.current) {
          const track = audioContext.createMediaElementSource(audioRef.current);
        }
        // if audioRef/audioContext changes, rerun this effect.
      }, [audioRef]);

    return (
        <div id="BottomAudioControlBar">
            <div id="temp-id">
                <audio ref={audioRef} src="/nationHoe.wav"/>
                <PlayPauseButton></PlayPauseButton>
                <VolumeControls></VolumeControls>
                <SeekerBar totalAudioDuration={"3:33"}></SeekerBar>
                <AudioInfo></AudioInfo>
                <SettingsButton></SettingsButton>
            </div>
        </div>
    );
}

export default BottomAudioControlBar;