import './SeekerBar.css';

function SeekerBar() {
    return <div id="seekerBar">
        <p id="currentAudioTime">0:00</p>
        <input id="seekerBarSlider" type="range" />
        <p id="totalAudioDuration">3:33</p>
    </div>

}

export default SeekerBar;