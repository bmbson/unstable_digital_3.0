import Image from 'next/image'
import './mix_card.css'

interface props {
    'mixName': string;
    'artist': string;
    'imageSrc': string;
    'date': string;
}

function MixCard(props: props) {
    return (
        <>
            <div className="mixCard">
                <div className="image">imageSrc</div>
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
        </>
    )
};

export default MixCard;