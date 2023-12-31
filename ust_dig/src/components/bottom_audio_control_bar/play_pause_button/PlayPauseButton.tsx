import { useState } from "react";
import { MdPause, MdPlayArrow } from "react-icons/md";

interface Props {
    audioTrack: MediaElementAudioSourceNode | null;
    audioContext: AudioContext;
}

function PlayPauseButton(props: Props) {
    const [playPauseState, setPlayPauseState] = useState(true);

    function changePlayPauseState(): Boolean {
        setPlayPauseState(!playPauseState);
        return (playPauseState);
    };

    function resumeAudioContext(audioContext: AudioContext) {
        if (audioContext.state === "suspended") {
            audioContext.resume();
        }
    };

    function playPauseSwitch(bool: Boolean) {
        bool ? props.audioTrack?.mediaElement.play() : props.audioTrack?.mediaElement.pause();
        console.log(props.audioTrack?.mediaElement.volume);
    };

    function playPauseLogic() {
        resumeAudioContext(props.audioContext);
        playPauseSwitch(changePlayPauseState());
    };

    return <>
        <button onClick={() => playPauseLogic()} id="playPauseButton">
            {playPauseState ? <MdPlayArrow></MdPlayArrow> : <MdPause></MdPause>}
        </button>
    </>
}

export default PlayPauseButton;