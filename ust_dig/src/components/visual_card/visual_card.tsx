import React from "react";
import './visual_card.css';


interface Props {
    height?: string;
    width?: string;
}

function VisualCard({ height = '225px', width = '225px' }: Props) {
    return (
        <div>
            <div className="visualCard" style={{ height, width }}>
                <div className="image">imageSrc</div>
            </div>
        </div>
    )
};



export default VisualCard;