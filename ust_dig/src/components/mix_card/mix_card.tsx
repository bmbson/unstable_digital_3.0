interface props {
    'mixName': string;
    'artist': string;
    'image'?: string;
    'temp2'?: string;
}

function MixCard(props: props) {
    return <>
        <p>{props.mixName}</p>
        <p>{props.artist}</p>
    </>
};

export default MixCard;