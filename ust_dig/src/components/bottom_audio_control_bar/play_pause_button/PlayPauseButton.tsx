import { useState } from "react";
import { MdPause, MdPlayArrow} from "react-icons/md";

function PlayPauseButton() {
    const [playPauseState, setPlayPauseState] = useState(false);

    function playPauseIconSwitch() {
        setPlayPauseState(!playPauseState);
    };

    function playPauseSwitch() {
        playPauseIconSwitch();
    };

    return <>
        <button onClick={() => playPauseSwitch()} id="playPauseButton">
            {playPauseState ? <MdPlayArrow></MdPlayArrow> : <MdPause></MdPause>}
        </button>
    </>
}

export default PlayPauseButton;