import "./VolumeControls.css";
import VolumeButton from "./volume_button/volume_button";
import VolumeRangeSlider from "./volume_range_slider/VolumeRangeSlider";

function VolumeControls() {
    return <div id="volume-controls">
        <VolumeButton></VolumeButton>
        <VolumeRangeSlider></VolumeRangeSlider>
    </div>
}

export default VolumeControls;