import { useState } from "react";
import { MdOutlineVolumeOff, MdOutlineVolumeUp } from "react-icons/md";

function VolumeButton() {
    const [muteState, setMuteState] = useState(false);

    function volumeButtonControl() {
        setMuteState(!muteState);
    }

    return <>
        <button onClick={() => volumeButtonControl()}>
            {muteState ? <MdOutlineVolumeOff></MdOutlineVolumeOff> : <MdOutlineVolumeUp></MdOutlineVolumeUp>}
        </button>
    </>
}

export default VolumeButton;