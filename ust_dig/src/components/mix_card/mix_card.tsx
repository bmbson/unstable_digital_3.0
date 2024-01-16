import Image from 'next/image'

interface props {
    'mixName': string;
    'artist': string;
    'imageSrc': string;
    'date'?: string;
}

function MixCard(props: props) {
    return <div>
        <div>imageSrc</div>
        <p>{props.mixName}</p>
        <p>{props.artist}</p>
        <p>{props.date}</p>
    </div>
};

export default MixCard;