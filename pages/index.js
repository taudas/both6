import React, { Component } from "react";
import ReactDOM from "react-dom";
import Script from "next/script";
import Head from "next/head";
import { Share_Tech_Mono } from "next/font/google";
import { Nova_Mono } from "next/font/google";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import ReactAudioPlayer, { RHAP_UI } from 'react-h5-audio-player'

import 'react-h5-audio-player/lib/styles.css';

import _JSXStyle from 'styled-jsx/style'


const press = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });
const inter = Nova_Mono({ subsets: ["latin"], weight: "400" });

export const config = { runtime: "experimental-edge" };
export default function Index() {
  return (
    <>
      <Head>
        <link
          href="https://vjs.zencdn.net/7.20.3/video-js.css"
          rel="stylesheet"
        />


      </Head>

      <div className={inter.className}>

        <center>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "17px solid  rgb(33, 150, 243)",
              }}
              date="2023"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h1 className="vertical-timeline-element-title">
                We Got Both Kinds
              </h1>
              <h3 className="vertical-timeline-element-subtitle">
                this is a collection of the work of Ed Special
              </h3>
              <p>
                <video
                  id="my-video"
                  className="video-js"
                  controls
                  poster="/flou.png"
                  preload="auto"
                  // width="320"
                  //  height="64"
                  data-setup="{}"
                >
                  <source
                    src="https://bothkinds7.web.app/wegot.mp3"
                    type="video/mp4"
                  ></source>
                </video>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "17px solid  rgb(33, 150, 243)",
              }}
              date="2020-2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              //  #  icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                The Covid Years
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                The assembly of the Warts & All sampler was accomplished
                during lockdown
              </h4>
              <p>
                <h1><font color="red">
                  <a href="https://danglingganglion.com/">
                    Visit Dangling Ganglion Sampler Gallery
                  </a></font>
                </h1>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "17px solid  rgb(33, 150, 243)",
              }}
              date="1988 - 1997"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              //  # icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Santa Vs Martians 2018 edited</h3>
              <h4 className="vertical-timeline-element-subtitle">
                made for Xmas 2023
              </h4>
              <h5>
              I have reduced one of my Xmas radio marathons to 7 hours, with WCBN station I Ds and playlist back announcing.
              This seven hour program only makes sense when all seven hours are played in succession, not aired separately.
              </h5>
              <p>
              <center>
              <h4>
              <ReactAudioPlayer   header="Santa_vs_Martians_2018_radio_edited_1" customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                      controls
                      src="https://bothkinds7.web.app/Santa_vs_Martians_2018_radio_edited_1.mp3"
              />
              <br></br>
              <ReactAudioPlayer   header="Santa_vs_Martians_2018_radio_edited_2" customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                        controls
                        src="https://bothkinds7.web.app/Santa_vs_Martians_2018_radio_edited_2.mp3"
              />
              <br></br>
              <ReactAudioPlayer   header="Santa_vs_Martians_2018_radio_edited_3" customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                      controls
                      src="https://bothkinds7.web.app/Santa_vs_Martians_2018_radio_edited_3.mp3"
              />
              <br></br>
              <ReactAudioPlayer   header="Santa_vs_Martians_2018_radio_edited_4" customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                        controls
                        src="https://bothkinds7.web.app/Santa_vs_Martians_2018_radio_edited_4.mp3"
              />
              <br></br>
              <ReactAudioPlayer   header="Santa_vs_Martians_2018_radio_edited_5" customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                      controls
                      src="https://bothkinds7.web.app/Santa_vs_Martians_2018_radio_edited_5.mp3"
              />
              <br></br>
              <ReactAudioPlayer   header="Santa_vs_Martians_2018_radio_edited_6" customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                        controls
                        src="https://bothkinds7.web.app/Santa_vs_Martians_2018_radio_edited_6.mp3"
              />
              <br></br>
              <ReactAudioPlayer   header="Santa_vs_Martians_2018_radio_edited_7" customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                      controls
                      src="https://bothkinds7.web.app/Santa_vs_Martians_2018_radio_edited_7.mp3"
              />
              <br></br>
              <a href="https://bothkinds7.web.app/Santa_vs_Martians_2018__radio_PLAYLIST.html">PLAYLIST</a>
              </h4>
              </center>
              </p>
            </VerticalTimelineElement>







            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "17px solid  rgb(33, 150, 243)",
              }}
              date="1988 - 1997"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              //  # icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">CLEAR LEADER</h3>
              <h4 className="vertical-timeline-element-subtitle">
                made for Ann Arbor Film Festival
              </h4>
              <h5>
                In the lobby of The Michigan Theater during the week of the
                festival, the audience is invited to contribute their own art by
                way of colored markers onto a reel of clear leader film.{" "}
              </h5>

              <p>

                    <center>
                    <h4>
                    <ReactAudioPlayer   header="SPED-CLEAR_LEADER1988"    customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                      controls
                      src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1988.mp3"
                    />
                    <br></br>
                    <ReactAudioPlayer  header="SPED-CLEAR_LEADER1989"     customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                      controls
                      src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1989.mp3"
                    />
                    <br></br>
                    <ReactAudioPlayer   header="SPED-CLEAR_LEADER1990"    customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                      controls
                      src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1990.mp3"
                    />
                    <br></br>
                    <ReactAudioPlayer    header="SPED-CLEAR_LEADER1991"   customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                      controls
                      src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1991.mp3"
                    />
                    <br></br>
                    <ReactAudioPlayer  header="SPED-CLEAR_LEADER1992"     customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                      controls
                      src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1992.mp3"
                    />
                    <br></br>
                    <ReactAudioPlayer   header="SPED-CLEAR_LEADER1993"    customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                      controls
                      src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1993.mp3"
                    />
                    <br></br>
                    <ReactAudioPlayer   header="SPED-CLEAR_LEADER1994"    customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                      controls
                      src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1994.mp3"
                    />
                    <br></br>
                    <ReactAudioPlayer   header="SPED-CLEAR_LEADER1995"    customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                      controls
                      src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1995.mp3"
                    />
                    <br></br>
                    <ReactAudioPlayer   header="SPED-CLEAR_LEADER1996"    customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                      controls
                      src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1996.mp3"
                    />
                  <br></br>
                    <ReactAudioPlayer   header="SPED-CLEAR_LEADER1997" customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                      controls
                      src="https://bothkinds7.web.app/SPED-CLEAR_LEADER1997.mp3"
                      />
                      </h4>
                  </center>


              </p>
            </VerticalTimelineElement>



            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "17px solid  rgb(33, 150, 243)",
              }}
              date="2007 - 2008"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              //  # icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                CLEAR LEADER AGAIN
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                made for Ann Arbor Film Festival
              </h4>
              <h5>
                this year 700 feet instead of the usual 400 was donated and
                nearly all of it was enthusiastically filled up by the time it
                was shown. The projectionists cut the film in half and projected
                both halves side-by-side on the wide screen. I had been
                composing soundtracks for them for 20 years. Of course, never
                able to view the film before it&aposs shown, I try to compose
                something that is rich enough with material that it might
                synchronize frequently with the stuff on the film (which is
                ALWAYS the same delightful sort of scribbling, stripy,
                wonderfully splotchy messy gibberish). Most of the spoken bits
                were extracted from vintage instructional films on proper
                maintenance of film projectors, thanks to Rick Prelinger&aposs
                Internet Archive, the rest from The Tingler; Vernon, Florida and
                Donovan&aposs Brain (Suspense Radio). Much of the sound collage was
                taken from radio collage done live on WCBN-FM 88.3 many years
                ago. Some of it includes Barry Bouwsma&aposs work when we were
                partners in audio crime during the first six years of Special Ed
                (that&aposs the name of my radio show, not where the short bus took
                me).
                <br></br>
              </h5>
              <p>
                  <center>
                  <ReactAudioPlayer    header="2007_FFCL_Mix_18.35"   customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                    src="https://bothkinds7.web.app/2007_FFCL_Mix_18.35.mp3"
                    controls
                  />
                  <br></br>
                  <ReactAudioPlayer header="FFCL.2008.TIME" customVolumeControls={[]} customAdditionalControls={[]} showJumpControls={false}
                    src="https://bothkinds7.web.app/FFCL.2008_TIME.mp3"
                    controls
                  />
                  </center>
              </p>
            </VerticalTimelineElement>









            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "17px solid  rgb(33, 150, 243)",
              }}
              date="2006"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              //  #  icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Spacial Ed</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Space Theme Shows
              </h4>
              <p>
                SpacialEd20060615
                <video
                  id="my-video2"
                  className="video-js"
                  controls
                  poster="/flou.png"
                  preload="auto"
                  data-setup="{}"
                >
                  <source
                    src="https://bothkinds7.web.app/SpacialEd20060615.mp3"
                    type="video/mp4"
                  ></source>
                </video>
                SpacialEd20060622
                <video
                  id="my-video2"
                  className="video-js"
                  controls
                  poster="/flou.png"
                  preload="auto"
                  //width="640"
                  //    height="320"
                  data-setup="{}"
                >
                  <source
                    src="https://bothkinds7.web.app/SpacialEd20060622.mp3"
                    type="video/mp4"
                  ></source>
                </video>
                SpacialEd20060629
                <video
                  id="my-video2"
                  className="video-js"
                  controls
                  poster="/flou.png"
                  preload="auto"
                  //width="640"
                  //    height="320"
                  data-setup="{}"
                >
                  <source
                    src="https://bothkinds7.web.app/SpacialEd20060629.mp3"
                    type="video/mp4"
                  ></source>
                </video>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "17px solid  rgb(33, 150, 243)",
              }}
              date="1993"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              //  #  icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                The Story Of The Naivete
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                People might like to know that the way we did bits of this show
                involved Ed and I trading random phrases back and forth from
                various LPs in two different studios, hard to do when you
                haven&apost heard what you&aposre going to be playing and you&aposre
                laughing the entire time - Yax Haxley
              </h4>
              <p>
                <video
                  id="my-video2"
                  className="video-js"
                  controls
                  poster="/naiv.png"
                  preload="auto"
                  //width="640"
                  //    height="320"
                  data-setup="{}"
                >
                  <source
                    src="https://bothkinds7.web.app/SpecialEd-Story_Of_The_Naivete.mp3"
                    type="video/mp4"
                  ></source>
                </video>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "17px solid  rgb(33, 150, 243)",
              }}
              date="2008"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              //  # icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Birdsongs </h3>
              <h4 className="vertical-timeline-element-subtitle">TBD 2008?</h4>
              <p>
                <video
                  id="my-video3"
                  className="video-js"
                  controls
                  poster="/bird.png"
                  preload="auto"
                  //width="640"
                  //    height="264"
                  data-setup="{}"
                >
                  <source
                    src="https://bothkinds7.web.app/SpecialEd-Birdsongs.mp3"
                    type="video/mp4"
                  ></source>
                </video>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "17px solid  rgb(33, 150, 243)",
              }}
              date="2006"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              //  # icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">ART FAIRE</h3>
              <h4 className="vertical-timeline-element-subtitle">2006</h4>
              <p>
                <video
                  id="my-video3"
                  className="video-js"
                  controls
                  poster="/flou.png"
                  preload="auto"
                  //width="640"
                  //    height="264"
                  data-setup="{}"
                >
                  <source
                    src="https://bothkinds7.web.app/SPED-ART_FAIRE_2006.mp3"
                    type="video/mp4"
                  ></source>
                </video>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "17px solid  rgb(33, 150, 243)",
              }}
              date="2006"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              //  # icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">ASH WEDNESDAY</h3>
              <h4 className="vertical-timeline-element-subtitle">2006?</h4>
              <p>
                <video
                  id="my-video3"
                  className="video-js"
                  controls
                  poster="/flou.png"
                  preload="auto"
                  //width="640"
                  //    height="264"
                  data-setup="{}"
                >
                  <source
                    src="https://bothkinds7.web.app/EdSpecial-AshWednesday.mp3"
                    type="video/mp4"
                  ></source>
                </video>
              </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
    contentArrowStyle={{ borderRight: "17px solid  rgb(33, 150, 243)", }}
    date="1985" iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
    //  # icon={<WorkIcon />}
     >
    <h3 className="vertical-timeline-element-title">
    Penis and Testicles Dance Party </h3>
    <h4 className="vertical-timeline-element-subtitle"> made live at WCBN circa mid
    1980s<br></br> Edited together from up to 7 records skipping on 7
    turntables. Beanball (Barry Bouwsma) in Prod A, Duncan Campbell in Prod B,
    Ed Special in FM Studio and sex ed records<br></br> Edited by Ed Special
    </h4>
    <h1> <font color="red">NSFW</font>

                <br></br> </h1> <p> <center>

                  <ReactAudioPlayer    header="PandTDanceParty"
                  customVolumeControls={[]} customAdditionalControls={[]}
                  showJumpControls={false}
                  src="https://bothkinds7.web.app/SpecialEd-PandTDanceParty.mp3"
                  controls

                  />

                  </center> </p> </VerticalTimelineElement>




            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "17px solid  rgb(33, 150, 243)",
              }}
              date="2007"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              //  # icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">JINGLE BELLS</h3>
              <h4 className="vertical-timeline-element-subtitle">2007</h4>
              <p>
                <video
                  id="my-video3"
                  className="video-js"
                  controls
                  poster="/flou.png"
                  preload="auto"
                  //width="640"
                  //    height="264"
                  data-setup="{}"
                >
                  <source
                    src="https://bothkinds7.web.app/Jingle_Bells_2007_-_Special_Ed_Xmas.mp3"
                    type="video/mp4"
                  ></source>
                </video>
              </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "17px solid  rgb(33, 150, 243)",
              }}
              date="2006"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              //  # icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Cry Of Silence as told by Ed Special</h3>
              <h4 className="vertical-timeline-element-subtitle">2006</h4>
              <p>
                <video
                  id="my-video3"
                  className="video-js"
                  controls
                  poster="/flou.png"
                  preload="auto"
                  //width="640"
                  //    height="264"
                  data-setup="{}"
                >
                  <source
                    src="https://bothkinds7.web.app/CryOfSilence_AsToldBy_SpecialEd.mp3"
                    type="video/mp4"
                  ></source>
                </video>
              </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              contentArrowStyle={{
                borderRight: "17px solid  rgb(33, 150, 243)",
              }}
              date="2002 - 2023"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              // # icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">More</h3>
              <h4 className="vertical-timeline-element-subtitle">
                on Bandcamp
              </h4>
              <p>
                <h1>
                  <a href="https://dangling-ganglion.bandcamp.com/">
                    Visit Dangling Ganglion on Bandcamp
                  </a>
                </h1>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              // # icon={<StarIcon />}
            />
          </VerticalTimeline>
        </center>
        <Script src="https://vjs.zencdn.net/7.20.3/video.min.js"></Script>
      </div>
    </>
  );
}
