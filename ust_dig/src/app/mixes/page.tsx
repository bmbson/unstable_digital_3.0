import MixCard from "@/components/mix_card/mix_card"
import MixPanel from "@/components/mix_panel/mix_panel"
import SearchBar from "@/components/search_bar/search_bar"
import './page.css'
import React from "react"
import VisualCard from "@/components/visual_card/visual_card"



export default function Mixes() {
  return (
    <main>
      <div id="x">
        <div className="searchBarsWrapper">
          <SearchBar></SearchBar>
          <SearchBar></SearchBar>
        </div>
        <MixPanel></MixPanel>
      </div>
      <div className="visuals">
        <VisualCard></VisualCard>
        <VisualCard></VisualCard>
        <VisualCard></VisualCard>
      </div>

    </main>
  )
}