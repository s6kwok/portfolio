import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CircleNumber from '../components/CircleNumber';

import '../styles/Projects.css';
import { projectPrimaryContainer, projectPrimaryColor } from '../styles/Projects';

import jamcityHeader from '../assets/jamcity/jamcity-header.png';
import jamcityChallenge from '../assets/jamcity/jamcity-challenge.png';
import jamcityFlow from '../assets/jamcity/jamcity-flow.png';
import jamcityFun from '../assets/jamcity/jamcity-fun.png';
import jamcityHifiConstraint from '../assets/jamcity/jamcity-hifi-constraint.png';
import jamcityHifiEngagement from '../assets/jamcity/jamcity-hifi-engagement.png';
import jamcityHifiFinal from '../assets/jamcity/jamcity-hifi-final.png';
import jamcityImpact from '../assets/jamcity/jamcity-impact.png';
import jamcityLofiSurfacing from '../assets/jamcity/jamcity-lofi-surfacing.png';
import jamcityLofiUi from '../assets/jamcity/jamcity-lofi-ui.png';
import jamcityProblem from '../assets/jamcity/jamcity-problem.png';
import jamcityResearch1 from '../assets/jamcity/jamcity-research-1.png';
import jamcityResearch2 from '../assets/jamcity/jamcity-research-2.png';
import jamcitySuccess1 from '../assets/jamcity/jamcity-success-1.png';
import jamcitySuccess2 from '../assets/jamcity/jamcity-success-2.png';
import jamcityFinal from '../assets/jamcity/jamcity-final.mp4';

export default function JamCity() {
    const theme = 'pink'; 

    return(
        <>
            <Header defaultActiveTab={'Null'} />

            {/* Whole page auto layout down */}
            <div className='autoLayoutDownAlignTop gapFullPage'>
                
                {/* Can't apply class 'autoLayoutDownAlignTop marginsPrimary' to top div because marginsPrimary would also apply to footer */}
                <div className='marginsPrimary autoLayoutDownAlignTop gapFullPage'>

                    {/* Header container */}
                    <div className='autoLayoutDownAlignTop projectHeaderContainer'>

                        {/* Header and subtext */}
                        <div className='autoLayoutDownAlignTop gaph3b2'>
                            <h3>
                                Creating an <span style={{...projectPrimaryColor[theme],}} >engaging</span> player rewards system
                            </h3>
                            <p className='b2'>Jam City, Feb-Apr 2023</p>
                        </div>

                        {/* Image */}
                        <div className='autoLayoutDownAlignCenter imageMount projectHeaderImage' style={{...projectPrimaryContainer[theme],}}>
                            <img src={jamcityHeader} alt="Thumbnail" className='image'/>
                        </div>
                    </div>

                    {/* Context */}
                    <div className='projectTextOnlyMargins autoLayoutRightAlignLeftCenter gapImageText'>

                        {/* Left context */}
                        <div className='autoLayoutDownAlignTop projectContextLeft gaph2b1' >
                            <h5>It’s time for Hogwarts graduates to enter the adult wizarding world.</h5>
                            <p>Longtime players of the game Harry Potter Hogwarts Mystery (HPHM) were starting to finish playing the latest game chapter: graduation.</p>
                            <p><strong>Many players expressed interest in exploring and growing different careers in the next phase of the game.</strong> With that, came the need for an end-to-end careers rewards system design!</p>
                        </div>

                        {/* Right context */}
                        <div className='autoLayoutDownAlignCenter projectContextRight'>
                            <div className='autoLayoutDownAlignTop gapb3b1'>
                                <p className='b3-medium'>Collaborators</p>
                                <p>1 UX/UI designer (<strong>me</strong>!)</p>
                                <p>Game designers, product managers, art, narrative, engineering, production</p>
                            </div>
                            <div className='autoLayoutDownAlignTop gapb3b1'>
                                <p className='b3-medium'>Team</p>
                                <p>Harry Potter Hogwarts Mystery</p>
                            </div>
                        </div>
                    </div>

                    <hr />

                    {/* Requirements */}
                    <div className='projectTextOnlyMargins autoLayoutRightAlignLeftTop gapImageText'>
                        <div className='projectTextHeader20'>
                            <h5>Gathering requireme nts</h5>
                        </div>
                        <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                            <div className='autoLayoutDownAlignTop gapb1b1MultiParagraph'>
                                <p className='b3-medium'>Collaborating with stakeholders</p>
                                <p>My stakeholders (such as game designers and product managers) were amazing. Collaborating with them, I uncovered the <strong>knowledge of the game economy and the game logic</strong> I would need for the design!</p>
                                <p>Key design requirements included:</p>
                            </div>
                            <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={1} colorTheme={theme} />
                                </div>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>
                                        3 simultaneous career tracks
                                    </p>
                                    <p>
                                        From research, users vocalized career flexibility
                                    </p>
                                </div>
                            </div>
                            <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={2} colorTheme={theme} />
                                </div>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>
                                        Visual distinction from “student” features
                                    </p>
                                    <p>
                                        To make student and adult storylines feel different
                                    </p>
                                </div>
                            </div>
                            <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={3} colorTheme={theme} />
                                </div>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>
                                        Follow the given reward systems logic
                                    </p>
                                    <p>
                                        To follow game tuning and build a scalable solution
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    {/* Reason #1 */}
                    <div className='autoLayoutRightAlignLeftTop projectTextOnlyMargins gapImageText'>
                        <div className='projectTextHeader20'>
                            <h5>Market research</h5>
                        </div>
                        <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                            <p>Industry design patterns were also important to look into, because I didn’t want to re-invent the wheel with this feature! I looked into:</p>
                            <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={1} colorTheme={theme} />
                                </div>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>
                                        Narrative theme incorporation
                                    </p>
                                    <p>
                                        How other games incorporated their narrative themes within the design of the rewards system
                                    </p>
                                </div>
                            </div>
                            <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={2} colorTheme={theme} />
                                </div>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>
                                        Creating an enticing rewards layout
                                    </p>
                                    <p>
                                        How other games visually lay out large stacks of rewards in a compelling and enticing way
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    {/* Final design */}
                    <div className='projectTextImageMargins autoLayoutDownAlignTop gapImageHeader projectCenter'>
                        <h5>Final design</h5>
                        <div className='autoLayoutDownAlignCenter imageMount projectHeaderImage' style={{...projectPrimaryContainer[theme], minHeight: '64vh'}}>
                            <video autoPlay loop muted playsInline  className='video' style={{padding: '0rem 1rem', borderRadius: '4%'}}>
                                <source src={jamcityFinal} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <div className='projectTextOnlyMargins autoLayoutRightAlignLeftTop gapImageText'>
                        <div className='projectTextHeader20'>
                            <h5>Revisiting success metrics</h5>
                        </div>
                        <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                            <div className='autoLayoutDownAlignTop gapb3b1'>
                                <p className='b3-medium'>Usability testing</p>
                                <p>Even with my internship nearing its end, I managed to conduct a few <strong>moderated usability tests</strong>! I observed how players interacted with the feature and asked questions aligned with the success metrics:</p>
                                <ul className='styledList'>
                                    <li>How easy was it to find the level for a specific reward (easy to use)?</li>
                                    <li>How quickly could players complete a task (easy to use)?</li>
                                    <li>How satisfied were they with the feature (satisfaction)?</li>
                                    <li>How did the feature make them feel (user emotions)?</li>
                                </ul>
                                <p>The results showed that <strong>all 3 success metrics were met!</strong></p>
                            </div>
                        </div>
                    </div>

                    {/* Fun */}
                    <div className='projectTextImageMargins autoLayoutDownAlignTop gapImageHeader projectCenter'>
                        <h5>Highlights: Internship fun</h5>
                        <img src={jamcityFun} alt="Internship fun!" className='image'/>
                    </div>

                    {/* Learnings */}
                    <div className='autoLayoutRightAlignLeftTop projectTextOnlyMargins gapImageText'>
                        <div className='projectTextHeader20'>
                            <h5>Learnings</h5>
                        </div>
                        <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                            <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={1} colorTheme={theme} />
                                </div>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>
                                        Dabbling in UI art
                                    </p>
                                    <p>
                                        Coming from an engineering background and not graphic design, creating complex visual textures was a fun challenge!
                                    </p>
                                </div>
                            </div>
                            <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={2} colorTheme={theme} />
                                </div>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>
                                        Gotta think like my stakeholders
                                    </p>
                                    <p>
                                        Putting myself in the mindset and learning the goals of my (many) stakeholders when designing was key to success.
                                    </p>
                                </div>
                            </div>
                            <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={3} colorTheme={theme} />
                                </div>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>
                                        Designing for many states
                                    </p>
                                    <p>
                                        There were <strong>so many</strong> different reward cell states and edge cases to design for! It was important to stay exceptionally organized.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </>
    )
}