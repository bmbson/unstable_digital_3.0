import Image from 'next/image'
import './mix_card.css'
import Link from 'next/link';

interface props {
    'mixName': string;
    'artist': string;
    'imageSrc': string;
    'date': string;
}

function MixCard(props: props) {
    return (
        <>
            <Link href={'/selected_mix'}>
                <div className="mixCard">
                    <div className="image" style={{ position: 'relative' }}>
                        <Image fill={true} layout='fill' src={'/images/testImage.jpg'} alt={'Test Image'}>
                        </Image>
                        <div className="bottomInfo">
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