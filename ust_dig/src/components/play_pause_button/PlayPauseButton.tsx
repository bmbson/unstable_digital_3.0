import { useState } from "react";
import { MdPause, MdPlayArrow } from "react-icons/md";

function PlayPauseButton() {
    const [playPauseState, setPlayPauseState] = useState(false);

    function playPauseControl() {
        setPlayPauseState(!playPauseState)
    };

    return <>
        <button onClick={() => playPauseControl()} id="playPauseButton">
            {playPauseState ? <MdPlayArrow></MdPlayArrow> : <MdPause></MdPause>}
        </button>
    </>
}

export default PlayPauseButton;