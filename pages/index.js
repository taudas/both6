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
 width="640"
  //  height="264"
    data-setup="{}">
    <source src="https://drive.google.com/file/d/1ulUVW1VbyprENI9t8xIW_BFvsPWcdA_O/view?usp=share_link" type="video/mp4" >

    </source>
    </video>

  <video   id="my-video"
    class="video-js"
    controls
        poster="/wcbn.png"
    preload="auto"
 width="640"
  //  height="264"
    data-setup="{}">
    <source src="https://drive.google.com/file/d/1ulUVW1VbyprENI9t8xIW_BFvsPWcdA_O/" type="video/mp4" >
    </source>
    </video>

    </center>
  <Script src="https://vjs.zencdn.net/7.20.3/video.min.js"></Script>
</div>
</>
)
}
