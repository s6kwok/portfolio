import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CircleNumber from '../components/CircleNumber';

import '../styles/Projects.css';
import { projectPrimaryContainer, projectPrimaryColor } from '../styles/Projects';

import { FaHeart } from "react-icons/fa";

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
import sparkles2Pink from '../assets/sparkles-2-pink.png';

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
                    <div className='projectTextOnlyMargins autoLayoutRightAlignLeftTop gapImageText'>

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

                    {/* Impact */}
                    <div className='projectTextImageMargins autoLayoutDownAlignTop gapProjectGroupingImpact'>
                        <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
                            <div className='projectTextHeader20'>
                                <h5>Impact</h5>
                            </div>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                <div className='autoLayoutDownAlignTop gaph6b1'>
                                    <h6>This feature is <strong>launched</strong> and live for <strong>50M+</strong>players!</h6>
                                    <p className='b3-medium'>The fanbase has given this feature <span style={{...projectPrimaryColor[theme], fontWeight: '600'}}>so much love! <FaHeart style={{ fontSize: '16px' }} /></span></p>
                                    <p>From videos, game guides, blog posts, reddit discussions... <strong>the success metric of engagement was achieved effectively</strong>!</p>
                                </div>
                            </div>
                        </div>
                        <img src={jamcityImpact} alt="Impact" className='image'/>
                    </div>

                    <hr />

                    {/* Problem space */}
                    <div className='autoLayoutDownAlignTop projectTextImageMargins gapProjectGrouping'>
                        <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
                            <div className='projectTextHeader20'>
                                <h5>Problem space</h5>
                            </div>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>More! Game! Content!</p>
                                    <p>As more players finished the game, engagement began to drop, which was especially evident in online HPHM discussion communities. To reignite excitement and incentivize ongoing play, it was time to introduce a new narrative storyline!</p>
                                </div>
                            </div>
                        </div>
                        <img src={jamcityProblem} alt="Problem" className='image'/>
                        <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
                            <div className='projectTextHeader20'>
                                <h5></h5>
                            </div>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberItem projectTextText80'>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>Players want to choose their own career</p>
                                    <p>A large survey revealed that players want to pursue career paths, developing their career as students typically do.</p>
                                </div>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'><span style={{...projectPrimaryColor[theme], fontWeight: '600'}} >89% of players</span> want career flexibility</p>
                                    <p>From the same survey, players expressed importance of being able to choose their own career specialization, without being locked out of exploring all available career options.</p>
                                    <p>This data led to the <strong>need of a careers reward system</strong>!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Challenge */}
                    <div className='projectTextImageMargins'>
                        <img src={jamcityChallenge} alt="Design challenge" className='image'/>
                    </div>

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

                    {/* Success */}
                    <div className='autoLayoutDownAlignTop projectTextImageMargins gapProjectGrouping'>
                        <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
                            <div className='projectTextHeader20'>
                                <h5>Defining success</h5>
                            </div>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>User and product needs</p>
                                    <p>To ensure a clear design direction and evaluate effectiveness, I then put my product thinking hat on and conducted research and interviews to understand player needs for the rewards system.</p>
                                    <p>These user and product needs are what helped define the design principles and success metrics for this project!</p>
                                </div>
                            </div>
                        </div>
                        <img src={jamcitySuccess1} alt="Success" className='image'/>
                        <img src={jamcitySuccess2} alt="Success" className='image'/>
                        <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
                            <div className='projectTextHeader20'>
                                <h5></h5>
                            </div>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberItem projectTextText80'>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p>But to successfully design for stakeholder requirement 3 (incorporate existing standards and logic for reward systems), I <strong>needed strong background knowledge on reward systems</strong>. So I began researching patterns!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    {/* Research */}
                    <div className='autoLayoutDownAlignTop projectTextOnlyMargins gaph2b1'>
                        <p className='b1-medium'>Research</p>
                        <div className='autoLayoutRightAlignLeftCenter gapImageText'>
                            <div>
                                <h5>What are common reward system design patterns within <span style={{...projectPrimaryColor[theme], fontWeight: '600'}} >this</span> game, and across <span style={{...projectPrimaryColor[theme], fontWeight: '600'}} >other</span> games?</h5>
                            </div>
                            <div className='projectRightSparkles'>
                                <img src={sparkles2Pink} alt="Sparkles" className='image'/>
                            </div>
                        </div>
                    </div>

                    {/* In-game research */}
                    <div className='autoLayoutDownAlignTop projectTextImageMargins gapProjectGrouping'>
                        <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
                            <div className='projectTextHeader20'>
                                <h5>In-game research</h5>
                            </div>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>Investigating clubs: the sister feature to careers</p>
                                    <p>Since the careers reward system has a similar progression to clubs, I reviewed the clubs structure and functionality so I could think about designing with consistent and familiar in-game reward mechanics.</p>
                                </div>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>Audit and user feedback</p>
                                    <p>I then conducted a heuristic evaluation, and evaluated the clubs reward system against the 3 design principles I defined above. This led to the findings below!</p>
                                </div>
                            </div>
                        </div>
                        <img src={jamcityResearch1} alt="In-game research" className='image'/>
                    </div>

                    {/* Market research */}
                    <div className='projectTextImageMargins autoLayoutDownAlignTop gapProjectGroupingImpact'>
                        <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
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
                        <img src={jamcityResearch2} alt="Market research" className='image'/>
                    </div>

                    <hr />

                    {/* Solution space */}
                    <div className='projectTextImageMargins autoLayoutDownAlignTop gapImageImage'>
                        <div className='projectTextImageMarginsText autoLayoutDownAlignTop gaph2b1'>
                            <p className='b1-medium'>Solution space</p>
                            <div className='autoLayoutRightAlignLeftTop gapImageText'>
                                <div className='projectTextHeader20'>
                                    <h5>User flow</h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p>I then thought more about my design approach. To keep my process structured, I mapped the happy path user flow to break down the design problem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={jamcityFlow} alt="User flow" className='image'/>
                        <div className='projectTextImageMarginsText autoLayoutDownAlignTop gaph2b1'>
                            <div className='autoLayoutRightAlignLeftTop gapImageText'>
                                <div className='projectTextHeader20'>
                                    <h5></h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <p>With the design solution broken down, I then decided to start focusing on the core of career rewards system: the main UI.</p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* Lofis: Main feature UI */}
                    <div className='autoLayoutDownAlignTop projectTextImageMargins gapProjectGrouping'>
                        <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
                            <div className='projectTextHeader20'>
                                <h5>Lofis: Main feature UI</h5>
                            </div>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>Exploring and assessing concepts</p>
                                    <p>Using the in-game and market research as a starting point, I explored various UI concepts and assessed each <strong>based on design goals</strong>—ease of use, excitement, engagement—<strong>and cost</strong>, to determine the best path forward. A few explorations are below!</p>
                                </div>
                            </div>
                        </div>
                        <img src={jamcityLofiUi} alt="Main feature UI Lofis" className='image'/>
                        <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
                            <div className='projectTextHeader20'>
                                <h5></h5>
                            </div>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>Concept #1 selected!</p>
                                    <p>It was decided to move forward with the first concept since it had the lowest cost while meeting most of the design goals! However, there was still room for improvement, especially in enhancing engagement.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lofis: Feature surfacing */}
                    <div className='autoLayoutDownAlignTop projectTextImageMargins gapProjectGrouping'>
                        <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
                            <div className='projectTextHeader20'>
                                <h5>Lofis: Feature surfacing</h5>
                            </div>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>Considering the larger system</p>
                                    <p>It was crucial at this stage to consider how this feature would fit into the larger system. Below are a few of the concepts explored!</p>
                                </div>
                            </div>
                        </div>
                        <img src={jamcityLofiSurfacing} alt="Surfacing" className='image'/>
                        <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
                            <div className='projectTextHeader20'>
                                <h5></h5>
                            </div>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>Option #1 selected!</p>
                                    <p>After discussions with stakeholders, the first option was chosen because of how well it aligns with player expectations for collecting rewards, while keeping the HUD untouched!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hifis: But with a new constraint */}
                    <div className='autoLayoutDownAlignTop projectTextImageMargins gapProjectGrouping'>
                        <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
                            <div className='projectTextHeader20'>
                                <h5>Hi-fis: But with a new constraint!</h5>
                            </div>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>Paper background required</p>
                                    <p>The hi-fis played a key role in the feature’s success. With layout and implementation constraints in place, the visual design became the primary tool for driving excitement and engagement!</p>
                                    <p>At this point, I got a new <strong>visual design constraint: I was required to use a paper-like background</strong>. The light, paper background would be the visual theme for all post-graduation features!</p>
                                </div>
                            </div>
                        </div>
                        <img src={jamcityHifiConstraint} alt="New constraint" className='image'/>
                    </div>

                    {/* Hi-fis: Enhancing engagement */}
                    <div className='autoLayoutDownAlignTop projectTextImageMargins gapProjectGrouping'>
                        <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
                            <div className='projectTextHeader20'>
                                <h5>Hi-fis: Enhancing engagement</h5>
                            </div>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>Strengthening the emotional connection</p>
                                    <p>Although the early hi-fi was visually exciting with magical micro-animations and strong thematic alignment, engagement (specifically the emotional connection) needed improvement. To boost engagement, I strengthened the unique design personality of each career!</p>
                                </div>
                            </div>
                        </div>
                        <img src={jamcityHifiEngagement} alt="Strengthening engagement" className='image'/>
                        <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
                            <div className='projectTextHeader20'>
                                <h5></h5>
                            </div>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3-medium'>Option #2 was chosen!</p>
                                    <p>After negotiation, it was decided to go with the banner despite the higher cost, because of its high impact-to-effort ratio. It effectively showcases each career's unique personality in a fun way.</p>
                                    <p>The image below shows the final concept, created in collaboration with the art team on the banner!</p>
                                </div>
                            </div>
                        </div>
                        <img src={jamcityHifiFinal} alt="Final hifis!" className='image'/>
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

                    {/* Revisiting success */}
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