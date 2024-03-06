import React from "react";
import './page.css';
import VisualCard from "@/components/visual_card/visual_card";
import MixPanel from "@/components/mix_panel/mix_panel";

export default function Selected_Mix() {
    return (
        <main>
            <div id="artistInfoWrapper">
                <VisualCard></VisualCard>
                <div id="artistInfo">
                    <p>Artist Info:</p>

                </div>
            </div>

            <div id="mixesWrapper">
                <div><p>Mixes</p></div>
                <MixPanel></MixPanel>
            </div>
        </main >
    )
}