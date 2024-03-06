'use client'

import Image from 'next/image'
import './mix_card.css'
import Link from 'next/link';
import { useRef, useState } from 'react';

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

    function showInfoOnMouseOver() {
        bottomInfoRef.current.style.visibility = 'visible'
    }

    function hideInfoOnMouseLeave() {
        bottomInfoRef.current.style.visibility = 'hidden'
    }

    return (
        <>
            <Link href={'/selected_mix'}>
                <div className="mixCard" style={{ width: props.width, height: props.height }} onMouseOver={showInfoOnMouseOver} onMouseLeave={hideInfoOnMouseLeave} >
                    <div className="imageWrapper" style={{ position: 'relative' }}>
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
            </Link>
        </>
    )
};

export default MixCard;