import Script from 'next/script'
import Head from 'next/head'
import { Inter}  from '@next/font/google'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const inter = Inter({ subsets: ['latin'] })


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
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
 // {/*   icon={<WorkIcon />} */}
  >
    <h3 className="vertical-timeline-element-title">We Got Both Kinds</h3>
    <h4 className="vertical-timeline-element-subtitle">because we thought it would be fun</h4>
    <p>

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

    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
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
width="640"
    height="320"
    data-setup="{}">
    <source src="https://bothkinds7.web.app/SpecialEd-Story_Of_The_Naivete.mp3" type="video/mp4" >
    </source>
    </video>


    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
 //  # icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Birdsongs </h3>
    <h4 className="vertical-timeline-element-subtitle">TBD ?2008?</h4>
    <p>
      

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





    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  // # icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">TBD</h3>
    <h4 className="vertical-timeline-element-subtitle">foo</h4>
    <p>
      User 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  // # icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Content </h3>
    <h4 className="vertical-timeline-element-subtitle">Online</h4>
    <p>
      Strategy
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  // # icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">TBD</h3>
    <h4 className="vertical-timeline-element-subtitle">TBD</h4>
    <p>
       Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2023"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
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
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
  // # icon={<StarIcon />}
  />
</VerticalTimeline>





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
