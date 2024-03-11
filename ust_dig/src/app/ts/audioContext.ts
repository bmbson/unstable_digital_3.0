// audio context is created when a component access it for the first time.

// audioContext.js
function createAudioContext() {
    return new AudioContext();
}

export function selectAudioElement(htmlAudioElement: string) {
    const selectedAudioElement = document.querySelector(htmlAudioElement);
    return selectedAudioElement;
}

function createPlayableTrackFromSelectedAudioElement(selectedAudioElement: Element) {
    const track = audioContext.createMediaElementSource(selectedAudioElement);
}