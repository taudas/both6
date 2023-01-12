import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Script from 'next/script'
import Head from 'next/head'
import { Press_Start_2P}  from '@next/font/google'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const inter  = Press_Start_2P({ subsets: ['latin']
, weight: '400'
 })


export const config = {  runtime: "experimental-edge",};
export default function Index() {
  return (
  <>
<Head>
  <link href="https://vjs.zencdn.net/7.20.3/video-js.css" rel="stylesheet" />
</Head>


<div className={inter.className} >
<center>





<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
    date="2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
 // {/*   icon={<WorkIcon />} */}
  >
    <h3 className="vertical-timeline-element-title">We Got Both Kinds</h3>
    <h4 className="vertical-timeline-element-subtitle">this is a collection of the work of Ed Special</h4>
    <p>

  <video   id="my-video"
    className="video-js"
    controls
        poster="/flou.png"
    preload="auto"
audioonlymode="true"
// width="320"
//  height="64"
    data-setup="{}">
    <source src="https://bothkinds7.web.app/wegot.mp3" type="video/mp4" >
    </source>
    </video>

    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
    date="2020-2022"
   iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//  #  icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">The Covid Years</h3>
    <h4 className="vertical-timeline-element-subtitle">
The assembly of the "Warts & All" sampler was accomplished during lockdown
</h4>
    <p><h3>
<a href="https://danglingganglion.com/">Visit Dangling Ganglion Sampler Gallery</a>
</h3>
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
    date="2006"
   iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//  #  icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Spacial Ed</h3>
    <h4 className="vertical-timeline-element-subtitle">
    Space Theme Shows
</h4>
    <p>
SpacialEd20060615
  <video   id="my-video2"
    className="video-js"
    controls
        poster="/flou.png"
    preload="auto"
//width="640"
//    height="320"
    data-setup="{}">
    <source src="https://bothkinds7.web.app/SpacialEd20060615.mp3" type="video/mp4" 
//       src="https://bothkinds7.web.app/SpacialEd20060622.mp3" type="video/mp4" 
 //      src="https://bothkinds7.web.app/SpacialEd20060629.mp3" type="video/mp4" 
 >
    </source>
    </video>
    SpacialEd20060622
  <video   id="my-video2"
    className="video-js"
    controls
        poster="/flou.png"
    preload="auto"
//width="640"
//    height="320"
    data-setup="{}">
    <source 
       src="https://bothkinds7.web.app/SpacialEd20060622.mp3" type="video/mp4" 
 //      src="https://bothkinds7.web.app/SpacialEd20060629.mp3" type="video/mp4" 
 >
    </source>

    </video>
SpacialEd20060629
  <video   id="my-video2"
    className="video-js"
    controls
        poster="/flou.png"
    preload="auto"
//width="640"
//    height="320"
    data-setup="{}">
    <source 
      src="https://bothkinds7.web.app/SpacialEd20060629.mp3" type="video/mp4" 
 >
    </source>

    </video>
    </p>
  </VerticalTimelineElement>




  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
    date="1993"
   iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//  #  icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">The Story Of The Naivete</h3>
    <h4 className="vertical-timeline-element-subtitle">
"People might like to know that the way we did bits of this show involved Ed and I trading random phrases
 back and forth from various LPs in two different studios, hard to do when you haven't heard what you're
 going to be playing and you're laughing the entire time" - Yax Haxley
</h4>
    <p>

  <video   id="my-video2"
    className="video-js"
    controls
        poster="/naiv.png"
    preload="auto"
//width="640"
//    height="320"
    data-setup="{}">
    <source src="https://bothkinds7.web.app/SpecialEd-Story_Of_The_Naivete.mp3" type="video/mp4" >
    </source>
    </video>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}

    date="2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
 //  # icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Birdsongs </h3>
    <h4 className="vertical-timeline-element-subtitle">TBD 2008?</h4>
    <p>
      

  <video   id="my-video3"
    className="video-js"
    controls
        poster="/bird.png"
    preload="auto"
//width="640"
//    height="264"
    data-setup="{}">
    <source src="https://bothkinds7.web.app/SpecialEd-Birdsongs.mp3" type="video/mp4" >
    </source>
    </video>
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}

    date="1989"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
 //  # icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">CLEAR LEADER</h3>
    <h4 className="vertical-timeline-element-subtitle">made for Ann Arbor Film Festival</h4>
    <p>
      <Popup trigger={<button className="button">1989 and 1990</button>} modal>
    <center> SPED-CLEAR_LEADER1989
      <audio controls src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1989.mp3">
</audio><br></br>
SPED-CLEAR_LEADER1990
      <audio controls src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1990.mp3">
      
</audio></center>
      </Popup>

    </p>
    
  </VerticalTimelineElement>
  
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
    date="2002 - 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  // # icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">More</h3>
    <h4 className="vertical-timeline-element-subtitle">on Bandcamp</h4>
    <p>
     
<h1>
<a href="https://dangling-ganglion.bandcamp.com/">Visit Dangling Ganglion on Bandcamp</a>
</h1>

  
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  // # icon={<StarIcon />}
  />
</VerticalTimeline>





    </center>
    
  <Script src="https://vjs.zencdn.net/7.20.3/video.min.js"></Script>
</div>
</>
)
}
