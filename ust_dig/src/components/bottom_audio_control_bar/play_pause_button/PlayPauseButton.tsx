import { useState } from "react";
import { MdPause, MdPlayArrow } from "react-icons/md";
import { selectAudioElement } from "../../../app/ts/audioContext"
function PlayPauseButton() {
    const [playPauseState, setPlayPauseState] = useState(true);

    return <>
        <button onClick={() => {
            setPlayPauseState(!playPauseState)
        }} id="playPauseButton">
            {playPauseState ? <MdPlayArrow></MdPlayArrow> : <MdPause></MdPause>}
        </button>
    </>
}

export default PlayPauseButton;