import React from "react";
import './page.css';
import VisualCard from "@/components/visual_card/visual_card";
import MixPanel from "@/components/mix_panel/mix_panel";

export default function Selected_Mix() {
    return (
        <main>
            <div id="artistInfoWrapper">
                <VisualCard height="300px" width="300px" ></VisualCard>
                <div id="artistInfo">
                    <p>Artist Info:</p>
                    <div>Enigmatic and shrouded in shadows, Wraith, the masked producer, has emerged from the underground, crafting a soundscape as dark as his moniker. His beats pulsate with a menacing bassline, a low-end rumble that chills to the bone. Distorted synths wail like tortured souls, while his haunting melodies weave a web of sonic despair.
                        Wraith's music isn't for the faint of heart. It's a descent into the abyss, a symphony of the macabre. Yet, there's an undeniable allure to his darkness. His tracks are infused with a raw energy, a visceral punch that resonates with those who find solace in the shadows. His lyrics, delivered in a raspy growl, delve into themes of isolation, anxiety, and the darker side of the human psyche.
                        Whether he's collaborating with established rappers or crafting solo instrumentals, Wraith's unique vision has garnered him a loyal following. He's become a symbol of the genre's darker side, pushing the boundaries of sound and challenging listeners to confront their inner demons. With each release, Wraith redefines the limits of dark trap, leaving his mark on the scene and beckoning us deeper into the heart of his sonic shadows.</div>
                </div>
            </div>

            <div id="mixesWrapper">
                <div id="mixesTitle">Mixes</div>
                <MixPanel></MixPanel>
            </div>
        </main >
    )
}