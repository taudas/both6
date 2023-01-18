import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Script from 'next/script'
import Head from 'next/head'
import { Share_Tech_Mono}  from '@next/font/google'
import { Nova_Mono}  from '@next/font/google'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const press  = Share_Tech_Mono({ subsets: ['latin']
, weight: '400'
 })
const inter  = Nova_Mono({ subsets: ['latin']
, weight: '400'
 })

export const config = {  runtime: "experimental-edge",};
export default function Index() {
  return (
  <>
<Head>
  <link href="https://vjs.zencdn.net/7.20.3/video-js.css" rel="stylesheet"/>
</Head>

<div className={inter.className}>
<center>
<VerticalTimeline>
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
    date="2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
<h3 className="vertical-timeline-element-title">We Got Both Kinds</h3>
<h4 className="vertical-timeline-element-subtitle">this is a collection of the work of Ed Special</h4>
<p>

<video   id="my-video"
className="video-js"
controls
poster="/flou.png"
preload="auto"
// width="320"
//  height="64"
data-setup="{}">
<source src="https://bothkinds7.web.app/wegot.mp3" type="video/mp4">
</source>
</video>
</p>
    
</VerticalTimelineElement>

<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
    date="2020-2022"
   iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
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
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
    date="2006"
   iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
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
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
    date="1993"
   iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
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
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}

    date="2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
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
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}

    date="2006"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
 //  # icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">ART FAIRE</h3>
    <h4 className="vertical-timeline-element-subtitle">2006</h4>
    <p>
      

  <video   id="my-video3"
    className="video-js"
    controls
        poster="/flou.png"
    preload="auto"
//width="640"
//    height="264"
    data-setup="{}">
    <source src="https://bothkinds7.web.app/SPED-ART_FAIRE_2006.mp3" type="video/mp4" >
    </source>
    </video>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}

    date="2006"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
 //  # icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">ASH WEDNESDAY</h3>
    <h4 className="vertical-timeline-element-subtitle">2006?</h4>
    <p>
      

  <video   id="my-video3"
    className="video-js"
    controls
        poster="/flou.png"
    preload="auto"
//width="640"
//    height="264"
    data-setup="{}">
    <source src="https://bothkinds7.web.app/EdSpecial-AshWednesday.mp3" type="video/mp4" >
    </source>
    </video>
    </p>
  </VerticalTimelineElement>

  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}

    date="1988 - 1997"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
 //  # icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">CLEAR LEADER</h3>
    <h4 className="vertical-timeline-element-subtitle">made for Ann Arbor Film Festival</h4>
<h5>In the lobby of The Michigan Theater during the week of the festival,                                                      
the audience is invited to contribute their own art by way of colored                                                      
markers onto a reel of clear leader film. </h5>

    <p>
      <Popup trigger={<button className="button">SOUNDTRACKS</button>} modal>
    <center>
    
    
     SPED-CLEAR_LEADER1988<br></br>
      <audio controls src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1988.mp3">
</audio><br></br>  
   SPED-CLEAR_LEADER1989<br></br>
      <audio controls src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1989.mp3">
</audio><br></br>
SPED-CLEAR_LEADER1990<br></br>
      <audio controls src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1990.mp3">
</audio><br></br>
     SPED-CLEAR_LEADER1991<br></br>
      <audio controls src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1991.mp3">
</audio><br></br>
SPED-CLEAR_LEADER1992<br></br>
      <audio controls src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1992.mp3">
</audio><br></br>
    
     SPED-CLEAR_LEADER1993<br></br>
      <audio controls src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1993.mp3">
</audio><br></br>
SPED-CLEAR_LEADER1994<br></br>
      <audio controls src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1994.mp3">
</audio><br></br>
     SPED-CLEAR_LEADER1995  <br></br>
      <audio controls src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1995.mp3">
</audio><br></br>
SPED-CLEAR_LEADER1996<br></br>
      <audio controls src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1996.mp3">
</audio><br></br>
     SPED-CLEAR_LEADER1997  <br></br>
      <audio controls src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1997.mp3">
</audio><br></br>
</center>
      </Popup>
    </p>
    
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}

    date="2007 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
 //  # icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">CLEAR LEADER AGAIN</h3>
    <h4 className="vertical-timeline-element-subtitle">made for Ann Arbor Film Festival</h4>
<h5>
this year 700 feet instead                                                    
of the usual 400 was donated and nearly all of it was                                                            
enthusiastically filled up by the time it was shown.
 The                                                    
projectionists cut the film in half and projected both halves                                                              
side-by-side on the wide screen.                                                                                           
I had been composing soundtracks for them for 20 years.                                                                    
Of course, never able to view the film before it's shown, I try to                                                         
compose something that is rich enough with material that it might                                                          
synchronize frequently with the stuff on the film (which is ALWAYS the                                                     
same delightful sort of scribbling, stripy, wonderfully splotchy messy                                                     
gibberish).                                                                                                                
Most of the spoken bits were extracted from vintage instructional films        
on proper maintenance of film projectors, thanks to Rick Prelinger's                                                       
Internet Archive, the rest from The Tingler; Vernon, Florida and                                                           
Donovan's Brain (Suspense Radio).                                                                                          
Much of the sound collage was taken from radio collage done live on                                                        
WCBN-FM 88.3 many years ago.  Some of it includes Barry Bouwsma's work                                                     
when we were partners in audio crime during the first six years of                                                         
Special Ed (that's the name of my radio show, not where the short bus                                                      
took me).                                                                 
<br></br>    

 </h5>
<p>
      <Popup trigger={<button className="button">SOUNDTRACKS</button>} modal>
    <center>
    
     2007_FFCL_Mix_18.35
     <br></br>
      <audio controls src="https://bothkinds7.web.app/2007_FFCL_Mix_18.35.mp3">
</audio><br></br>  
FFCL.2008.TIME<br></br>
      <audio controls src="https://bothkinds7.web.app/FFCL.2008_TIME.mp3">
</audio><br></br>

</center>
      </Popup>
   </p> 
  </VerticalTimelineElement>
 
 
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
    contentArrowStyle={{ borderRight: '17px solid  rgb(33, 150, 243)' }}
    date="2002 - 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
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
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
  // # icon={<StarIcon />}
  />
</VerticalTimeline>

    </center>
  <Script src="https://vjs.zencdn.net/7.20.3/video.min.js"></Script>
</div>
</>
)
}
