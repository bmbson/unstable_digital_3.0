import Link from 'next/link';
import './AudioInfo.css'

function AudioInfo() {
  return (
    <div id="AudioInfo">
      <img id="picture" />
      <div id="textInfo">
        <Link href={'/'}><p>MixName</p></Link>
        <Link href={'/'}><p>ArtistName</p></Link>
      </div>
    </div>
  );
}

export default AudioInfo;