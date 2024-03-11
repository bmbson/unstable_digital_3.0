'use client'

import Image from 'next/image'
import './mix_card.css'
import Link from 'next/link';
import { useRef, useState } from 'react';
import { MdPlayCircleOutline, MdPauseCircleOutline, MdOutlinePlayCircleOutline, MdOutlinePauseCircleOutline } from "react-icons/md";

interface Props {
    'mixName': string;
    'artist': string;
    'imageSrc': string;
    'date': string;
    width?: string;
    height?: string;
}

MixCard.defaultProps = {
    width: '300px',
    height: '300px',
};

function MixCard(props: Props) {
    const bottomInfoRef = useRef<null | HTMLDivElement>(null);
    const mixCardRef = useRef<null | HTMLDivElement>(null);
    const [playPauseState, setPlayPauseState] = useState(true);

    function showInfoOnMouseOver() {
        bottomInfoRef.current.style.visibility = 'visible';
        mixCardRef.current.style.visibility = 'visible';
    }

    function hideInfoOnMouseLeave() {
        bottomInfoRef.current.style.visibility = 'hidden';
        mixCardRef.current.style.visibility = 'hidden';

    }

    return (
        <>
            {/* <Link href={'/selected_mix'}> */}
            <div className="mixCard" style={{ width: props.width, height: props.height }} onMouseOver={showInfoOnMouseOver} onMouseLeave={hideInfoOnMouseLeave} >
                <audio src="/nationHoe.wav" />
                <div className="imageWrapper" style={{ position: 'relative' }}>
                    <div className='mixCardPlayPauseButton' ref={mixCardRef} onClick={() => { setPlayPauseState(!playPauseState); alert() }}>
                        {playPauseState ? <MdOutlinePlayCircleOutline size={100}></MdOutlinePlayCircleOutline> : <MdOutlinePauseCircleOutline size={100}></MdOutlinePauseCircleOutline>}
                    </div>
                    <Image id='image' fill={true} layout='fill' src={'/images/testImage.jpg'} alt={'Test Image'}>
                    </Image>

                    <div className="bottomInfo" ref={bottomInfoRef}>
                        <div className="bottomInfoLeft">
                            <p>{props.mixName}</p>
                            <p>{props.artist}</p>
                        </div>
                        <div className="bottomInfoRight">
                            <p>{props.date}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* </Link > */}
        </>
    )
};

export default MixCard;