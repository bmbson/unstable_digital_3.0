import './SeekerBar.css';

function SeekerBar() {
    function minutesSecondsNotationToSeconds(minutesSecondsTime: String): undefined {
        return undefined;
    }

    function secondsNotationToMinutesSeconds(secondsTime: String): undefined {
        return undefined;
    }

    function calculateCurrentTime(): undefined {
        return undefined;
    }

    return <div id="seekerBar">
        <p id="currentAudioTime">0:00</p>
        <input id="seekerBarSlider" type="range" />
        <p id="totalAudioDuration">3:33</p>
    </div>

}

export default SeekerBar;