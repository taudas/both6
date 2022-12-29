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
<h1>we got both kinds</h1>
  <video   id="my-video"
    class="video-js"
    controls
        poster="/naiv.png"
    preload="auto"
// width="640"
  //  height="264"
    data-setup="{}">
    <source src="https://bothkinds7.web.app/SpecialEd-Story_Of_The_Naivete.mp3" type="video/mp4" >

    </source>
    </video>

  <video   id="my-video"
    class="video-js"
    controls
        poster="/wcbn.png"
    preload="auto"
// width="640"
  //  height="264"
    data-setup="{}">
    <source src="https://bothkinds7.web.app/SpecialEd-Birdsongs.mp3" type="video/mp4" >
    </source>
    </video>

    </center>
  <Script src="https://vjs.zencdn.net/7.20.3/video.min.js"></Script>
</div>
</>
)
}
