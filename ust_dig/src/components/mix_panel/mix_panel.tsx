import React from "react";
import MixCard from "../mix_card/mix_card";
import './mix_panel.css'


function MixPanel() {
    return (
        <div id="mixPanel">
            <MixCard mixName={"MIXNAME"} artist={"ARTIST"} imageSrc={"IMAGE"}></MixCard>
            <MixCard mixName={"MIXNAME"} artist={"ARTIST"} imageSrc={"IMAGE"}></MixCard>
            <MixCard mixName={"MIXNAME"} artist={"ARTIST"} imageSrc={"IMAGE"}></MixCard>
            <MixCard mixName={"MIXNAME"} artist={"ARTIST"} imageSrc={"IMAGE"}></MixCard>
        </div>
    )
};

export default MixPanel;