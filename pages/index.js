import Script from 'next/script'
import Head from 'next/head'
export const config = {  runtime: "experimental-edge",};
export default function Index() {
  return (
  <>
<Head>
  <link href="https://vjs.zencdn.net/7.20.3/video-js.css" rel="stylesheet" />
</Head>
<div>
<center>

  <video   id="my-video"
    className="video-js"
    controls
        poster="/flou.png"
    preload="auto"
 width="320"
  height="64"
    data-setup="{}">
    <source src="https://bothkinds7.web.app/wegot.mp3" type="video/mp4" >
    </source>
    </video>
<h1>we got both kinds</h1>

  <video   id="my-video2"
    className="video-js"
    controls
        poster="/naiv.png"
    preload="auto"
width="640"
    height="320"
    data-setup="{}">
    <source src="https://bothkinds7.web.app/SpecialEd-Story_Of_The_Naivete.mp3" type="video/mp4" >
    </source>
    </video>

  <video   id="my-video3"
    className="video-js"
    controls
        poster="/bird.png"
    preload="auto"
width="640"
    height="264"
    data-setup="{}">
    <source src="https://bothkinds7.web.app/SpecialEd-Birdsongs.mp3" type="video/mp4" >
    </source>
    </video>


    </center>
    
  <Script src="https://vjs.zencdn.net/7.20.3/video.min.js"></Script>
<center>
<h1>
<a href="https://dangling-ganglion.bandcamp.com/">Visit Dangling Ganglion on Bandcamp</a>
</h1>
</center>
</div>
</>
)
}
