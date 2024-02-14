'use client'

import Image from 'next/image'
import './mix_card.css'
import Link from 'next/link';
import { useRef, useState } from 'react';

interface props {
    'mixName': string;
    'artist': string;
    'imageSrc': string;
    'date': string;
}

function MixCard(props: props) {
    const testRef = useRef<null | HTMLDivElement>(null);

    function showInfoOnHover() {
        testRef.current.style.visibility = 'visible'
    }

    function testFunc() {
        testRef.current.style.visibility = 'hidden'
    }

    return (
        <>
            <Link href={'/selected_mix'}>
                <div onMouseOver={showInfoOnHover} onMouseLeave={testFunc} className="mixCard">
                    <div className="imageWrapper" style={{ position: 'relative' }}>
                        <Image id='image' fill={true} layout='fill' src={'/images/testImage.jpg'} alt={'Test Image'}>
                        </Image>
                        <div className="bottomInfo" ref={testRef}>
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