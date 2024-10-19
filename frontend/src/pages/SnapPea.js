import React from 'react';
import { useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CircleNumber from '../components/CircleNumber';

import '../styles/Projects.css';
import { projectPrimaryContainer, projectPrimaryColor } from '../styles/Projects';

import snappeaHeader from '../assets/snappea/snappea-header.png';
import snappeaHeader1 from '../assets/snappea/snappea-header-1.png';
import snappeaHeader2 from '../assets/snappea/snappea-header-2.png';
import snappeaHeader3 from '../assets/snappea/snappea-header-3.png';
import snappeaHeader4 from '../assets/snappea/snappea-header-4.png';
import snappeaActionables from '../assets/snappea/snappea-actionables.png';
import snappeaApproach from '../assets/snappea/snappea-approach.png';
import snappeaChallenge from '../assets/snappea/snappea-challenge.png';
import snappeaDualFlows1 from '../assets/snappea/snappea-dual-flows-1.png';
import snappeaDualFlows2 from '../assets/snappea/snappea-dual-flows-2.png';
import snappeaDualFlows3 from '../assets/snappea/snappea-dual-flows-3.png';
import snappeaDualFlows4 from '../assets/snappea/snappea-dual-flows-4.png';
import snappeaFlow1 from '../assets/snappea/snappea-flow-1.png';
import snappeaFlow2 from '../assets/snappea/snappea-flow-2.png';
// import snappeaFun from '../assets/snappea/snappea-fun.png';
import snappeaImpact from '../assets/snappea/snappea-impact.png';
import snappeaInterviews from '../assets/snappea/snappea-interviews.png';
import snappeaProblem from '../assets/snappea/snappea-problem.png';
import snappeaStory1 from '../assets/snappea/snappea-story-1.png';
import snappeaStory2 from '../assets/snappea/snappea-story-2.png';
import snappeaStory3 from '../assets/snappea/snappea-story-3.png';
import snappeaStory4 from '../assets/snappea/snappea-story-4.png';
import snappeaSuccess1 from '../assets/snappea/snappea-success-1.png';
import snappeaSuccess2 from '../assets/snappea/snappea-success-2.png';
import sparkles2Blue from '../assets/sparkles-2-blue.png';
import snappeaFinal1 from '../assets/snappea/snappea-final-1.mp4';
import snappeaFinal2 from '../assets/snappea/snappea-final-2.mp4';
import snappeaFun from '../assets/snappea/snappea-fun.mp4';

import { FaClock, FaLocationArrow } from "react-icons/fa6";

export default function SnapPea() {    
    const theme = 'blue'; 

    return(
        <>
            <div className='fullPage'>
                <Header defaultActiveTab={'Null'} />

                {/* Whole page auto layout down */}
                <div className='autoLayoutDownAlignTop gapFullPage fadeContentProjects'>
                    
                    {/* Can't apply class 'autoLayoutDownAlignTop marginsPrimary' to top div because marginsPrimary would also apply to footer */}
                    <div className='marginsPrimary autoLayoutDownAlignTop gapFullPage'>

                        {/* Header container */}
                        <div className='autoLayoutDownAlignTop projectHeaderContainer'>

                            {/* Header and subtext */}
                            <div className='autoLayoutDownAlignTop gaph3b2'>
                                <h2>
                                    Accelerating <span style={{...projectPrimaryColor[theme],}} >value discovery</span> for a mapping platform
                                </h2>
                                <p className='b2'>SnapPea Design, Sept-Dec 2023</p>
                            </div>

                            {/* Image */}
                            <div className='autoLayoutDownAlignCenter imageMount projectHeaderImage' style={{...projectPrimaryContainer[theme],}}>
                                {/* <img src={snappeaHeader} alt="Thumbnail" className='image'/> */}
                                <div id="container">
                                    <div className="photobanner photobannerSnappea">
                                        <img src={snappeaHeader1} alt="Thumbnail 1"/>
                                        <img src={snappeaHeader2} alt="Thumbnail 2"/>
                                        <img src={snappeaHeader3} alt="Thumbnail 3"/>
                                        <img src={snappeaHeader4} alt="Thumbnail 4"/>
                                        <img src={snappeaHeader1} alt="Thumbnail 1"/>
                                        <img src={snappeaHeader2} alt="Thumbnail 2"/>
                                        <img src={snappeaHeader3} alt="Thumbnail 3"/>
                                        <img src={snappeaHeader4} alt="Thumbnail 4"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Context */}
                        <div className='projectTextOnlyMargins autoLayoutRightAlignLeftTop gapImageText context'>

                            {/* Left context */}
                            <div className='autoLayoutDownAlignTop projectContextLeft gaph2b1' >
                                <h5>I love showing clients the transformative power of design.</h5>
                                <p>One of my favourite parts of working with clients is the collaboration and sharing of design knowledge, each step of the way.</p>
                                <p>At SnapPea Design, I led a client project where we strategically improved a <strong>geospatial mapping platform (mapping software that uses elevation data to produce geographic models)</strong> to establish strong and scalable design foundations for the future.</p>
                            </div>

                            {/* Right context */}
                            <div className='autoLayoutDownAlignCenter projectContextRight' >
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3Medium'>Collaborators</p>
                                    <div className='autoLayoutDownAlignCenter gapb1b1SameParagraph'>
                                        <p>2 UX/UI designers</p>
                                        <p>Client</p>
                                        <p>Client dev team</p>
                                    </div>
                                </div>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3Medium'>Team</p>
                                    <p>SnapPea Design team</p>
                                </div>
                            </div>
                        </div>

                        {/* Impact */}
                        <div className='autoLayoutDownAlignTop gapProjectGroupingImpact'>
                            <div className='projectTextOnlyMargins autoLayoutRightAlignLeftTop gapImageText'>
                                <div className='projectTextHeader20'>
                                    <h5>Impact</h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80 responsiveAutoLayoutDownLeft'>
                                    <div className='autoLayoutDownAlignTop gaph6b1'>
                                        <h6>The designs are currently <strong>launched</strong> and live!</h6>
                                        <p>But what impact did the feature have?</p>
                                    </div>
                                    <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem responsiveAutoLayoutRightTop'>
                                        <div className='projectListNumberCircle'>
                                            <CircleNumber number={1} colorTheme={theme} />
                                        </div>
                                        <div className='autoLayoutDownAlignTop gapb3b1'>
                                            <p className='b3Medium'>
                                                Positive client feedback
                                            </p>
                                            <p>
                                                The client loved the design improvements!
                                            </p>
                                        </div>
                                    </div>
                                    <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem responsiveAutoLayoutRightTop'>
                                        <div className='projectListNumberCircle'>
                                            <CircleNumber number={2} colorTheme={theme} />
                                        </div>
                                        <div className='autoLayoutDownAlignTop gapb3b1'>
                                            <p className='b3Medium'>
                                                Improved usability and accessibility
                                            </p>
                                            <p>
                                                <strong>All 3 defined metrics were met</strong>: learnability, NPS scores, and reduced user-reported issues.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem responsiveAutoLayoutRightTop'>
                                        <div className='projectListNumberCircle'>
                                            <CircleNumber number={3} colorTheme={theme} />
                                        </div>
                                        <div className='autoLayoutDownAlignTop gapb3b1'>
                                            <p className='b3Medium'>
                                                Future-proof design patterns established
                                            </p>
                                            <p>
                                                Scalable design patterns will make platform expansion easy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaImpact} alt="Impact" className='image'/>
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
                                        <p className='b3Medium'><span style={{...projectPrimaryColor[theme], fontWeight: '600'}} >66.9% of users</span> abandon the platform immediately</p>
                                        <p>The client observed an <strong>increasing number of user-reported issues</strong> (with themes of frustration and confusion), alongside a <strong>high number of support requests</strong> and <strong>elevated abandonment rates</strong>. This was not good!</p>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaProblem} alt="Problem" className='image'/>
                            <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText projectTextImageMarginsText'>
                                <div className='projectTextHeader20'>
                                    <h5></h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p className='b3Medium'>User frustrations were at an all time high</p>
                                        <p>The client came to us for help, as they knew their platform <strong>needed strategic design improvements</strong>. It was our job to dive deeper into these issues while improving usability and accessibility, through integrating design principles!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Challenge */}
                        <div className='projectTextImageMargins'>
                            <img src={snappeaChallenge} alt="Design challenge" className='image'/>
                        </div>

                        {/* Success */}
                        <div className='autoLayoutDownAlignTop projectTextImageMargins gapProjectGrouping'>
                            <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
                                <div className='projectTextHeader20'>
                                    <h5>Defining success</h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p className='b3Medium'>Understanding client and user needs</p>
                                        <p>In order to define success, I first aimed to understand user needs and what would satisfy them, while also aligning with the client's goals. Team discussions on vision and priorities shaped key design decisions. The image below highlights common themes: speed, value, and ease of use!</p>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaSuccess1} alt="Defining success" className='image'/>
                            <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText projectTextImageMarginsText'>
                                <div className='projectTextHeader20'>
                                    <h5></h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p className='b3Medium'>Developing design goals</p>
                                        <p>In addition to client goals and user needs, it was crucial to assess the current platform’s alignment with usability heuristics (especially since they’ve <strong>never had a designer before</strong>!). I conducted an <strong>audit and heuristic evaluation</strong>, which revealed key improvement areas and helped define success metrics.</p>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaSuccess2} alt="Defining success" className='image'/>
                        </div>

                        {/* Approach */}
                        <div className='autoLayoutDownAlignTop projectTextImageMargins gapProjectGrouping'>
                            <div className='projectTextImageMarginsText autoLayoutRightAlignLeftTop gapImageText'>
                                <div className='projectTextHeader20'>
                                    <h5>Approach</h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p className='b3Medium'>Navigating uncertainty</p>
                                        <p>At this point, <strong>there was still a lot of unknowns</strong>. To combat this, I devised a strategy for how I would take on this challenge (process is important, after all!).</p>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaApproach} alt="Approach" className='image'/>
                        </div>


                        <hr />

                        {/* Research */}
                        <div className='autoLayoutDownAlignTop projectTextOnlyMargins gaph2b1'>
                            <p className='b1Medium'>Research</p>
                            <div className='autoLayoutRightAlignLeftCenter gapImageText responsiveAutoLayoutDownLeft'>
                                <div>
                                    <h5><span style={{...projectPrimaryColor[theme], fontWeight: '600'}} >Why</span> were 66.9% of users abandoning the platform so quickly?</h5>
                                </div>
                                <div className='projectRightSparkles'>
                                    <img src={sparkles2Blue} alt="Sparkles" className='image'/>
                                </div>
                            </div>
                            <p>My research began with a deep dive into understanding users, the problem space, and current behaviours. However, one question that I wanted to dive deep into was the high abandonment rate. Why was this happening, and how can we address it?</p>
                        </div>

                        {/* Reason 1 */}
                        <div className='autoLayoutDownAlignTop projectTextOnlyMargins gapProjectGrouping'>
                            <div className='autoLayoutDownAlignTop gaph3h3'>
                                <h5><span style={{...projectPrimaryColor[theme], fontWeight: '600'}} >Reason #1:</span> Poor usability</h5>
                                <p>Users have trouble navigating and understanding how to use the platform.</p>
                            </div>
                            <div className='autoLayoutRightAlignLeftTop gapImageText'>
                                <div className='projectTextHeader20'>
                                    <h5>User reported issues</h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <p>The customer experience team was also super helpful to speak to! They provided user knowledge, insights into user support, support requests, and a <strong>sample of 46 user-reported issues</strong>. This led to the following insights:</p>
                                    <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem responsiveAutoLayoutRightTop'>
                                        <div className='projectListNumberCircle'>
                                            <CircleNumber number={1} colorTheme={theme} />
                                        </div>
                                        <div className='autoLayoutDownAlignTop gapb3b1'>
                                            <p className='b3Medium'>
                                                Platform comprehension issues
                                            </p>
                                            <p>
                                                Users face information overload and struggle to understand what key features are intended to do.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem responsiveAutoLayoutRightTop'>
                                        <div className='projectListNumberCircle'>
                                            <CircleNumber number={2} colorTheme={theme}/>
                                        </div>
                                        <div className='autoLayoutDownAlignTop gapb3b1'>
                                            <p className='b3Medium'>
                                                Navigation challenges
                                            </p>
                                            <p>
                                                Users are unclear on how to perform tasks and determine next steps.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem responsiveAutoLayoutRightTop'>
                                        <div className='projectListNumberCircle'>
                                            <CircleNumber number={3} colorTheme={theme} />
                                        </div>
                                        <div className='autoLayoutDownAlignTop gapb3b1'>
                                            <p className='b3Medium'>
                                                Difficulty with data products
                                            </p>
                                            <p>
                                                Users find it hard to understand data products and their details, like site coverage.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reason 2 */}
                        <div className='autoLayoutDownAlignTop projectTextImageMargins gapProjectGrouping'>
                            <div className='projectTextImageMarginsText autoLayoutDownAlignTop gapProjectGrouping'>
                                <div className='autoLayoutDownAlignTop gaph3h3'>
                                    <h5><span style={{...projectPrimaryColor[theme], fontWeight: '600'}} >Reason #2:</span> Delayed platform value discovery</h5>
                                    <p>Users have to go through most of the flow before experiencing the value, causing many to give up early.</p>
                                </div>
                                <div className='autoLayoutRightAlignLeftTop gapImageText'>
                                    <div className='projectTextHeader20'>
                                        <h5>User flow</h5>
                                    </div>
                                    <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                        <div className='autoLayoutDownAlignTop gapb3b1'>
                                            <p className='b3Medium'>Where does value currently show up in the user flow?</p>
                                            <p>Currently, the value is revealed late in the user flow, requiring users to complete most of the process before they fully understand and experience the platform’s benefits.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaFlow1} alt="User flow 1" className='image'/>
                            <div className='autoLayoutRightAlignLeftTop gapImageText projectTextImageMarginsText'>
                                <div className='projectTextHeader20'>
                                    <h5></h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p>But <strong>both versions of the user flow are equally important as they cater to different user needs</strong>! Long-term users prefer to create a site immediately, while new users need to quickly grasp the platform’s value by exploring data products.</p>
                                        <p>This led me to wonder about supporting both flows.</p>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaFlow2} alt="User flow 2" className='image'/>
                            <div className='autoLayoutRightAlignLeftTop gapImageText projectTextImageMarginsText'>
                                <div className='projectTextHeader20'>
                                    <h5></h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p>This gave me an additional goal for the final solution: to integrate both user journeys by allowing upfront access to data products, while providing options to either select a location or choose a data product.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reason 3 */}
                        <div className='autoLayoutDownAlignTop projectTextImageMargins gapProjectGrouping'>
                            <div className='projectTextImageMarginsText autoLayoutDownAlignTop gapProjectGrouping'>
                                <div className='autoLayoutDownAlignTop gaph3h3'>
                                    <h5><span style={{...projectPrimaryColor[theme], fontWeight: '600'}} >Reason #3:</span> Unclear onboarding</h5>
                                    <p>The initial experience is confusing and overwhelming for newer users.</p>
                                </div>
                                <div className='autoLayoutRightAlignLeftTop gapImageText'>
                                    <div className='projectTextHeader20'>
                                        <h5>User interviews</h5>
                                    </div>
                                    <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                        <div className='autoLayoutDownAlignTop gapb3b1'>
                                            <p>Currently, the platform provides “hints” through animations, prompting users to create a new site. However, they encounter an immediate error for not zooming in enough.</p>
                                            <p>In interviews with the customer experience team and various users, a recurring frustration was with the initial onboarding. Users are prompted to create a site but don’t understand the purpose behind it, and on top of that they get an error.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaInterviews} alt="User interviews" className='image'/>
                        </div>

                        <hr />

                        {/* Solution space */}
                        <div className='autoLayoutDownAlignTop projectTextOnlyMargins gaph2b1'>
                            <p className='b1Medium'>Solution space</p>
                            
                            <div className='autoLayoutRightAlignLeftTop gapImageText'>
                                <div className='projectTextHeader20'>
                                    <h5>Formulating actionables</h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p className='b3Medium'>Defining strategy</p>
                                        <p>Specific design actionables were needed to support our strategy. I <strong>synthesized the 3 research findings</strong> (poor usability, lack of perceived value, and complicated onboarding) with the <strong>design goals</strong> (clarity, cognitive load, affordance, and efficiency) to define phases of design work.</p>
                                        
                                    </div>
                                    <img src={snappeaActionables} alt="Actionables" className='image'/>
                                    <p>After discussing the strategy and specific recommendations with the client, the client was excited and design work was ready to begin!</p>
                                </div>
                            </div>
                        </div>

                        {/* Actionable 1 */}
                        <div className='autoLayoutDownAlignTop projectTextImageMargins gapProjectGrouping'>
                            <div className='projectTextImageMarginsText autoLayoutDownAlignTop gapProjectGrouping'>
                                <div className='autoLayoutDownAlignTop gaph3h3'>
                                    <h5><span style={{...projectPrimaryColor[theme], fontWeight: '600'}} >Actionable #1:</span> Decrease focus of secondary actions</h5>
                                    <p>Removing distractions will refocus user attention on the key actions, which will make onboarding clearer and enhance usability.</p>
                                </div>
                                <div className='autoLayoutRightAlignLeftTop gapImageText'>
                                    <div className='projectTextHeader20'>
                                        <h5>Finding the story</h5>
                                    </div>
                                    <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                        <div className='autoLayoutDownAlignTop gapb3b1'>
                                            <p>I first decided to evaluate the balance of screen space usage. How can items be better organized to reduce distraction and increase visual focus towards key components?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaStory1} alt="Finding the story 1" className='image'/>
                            <div className='autoLayoutRightAlignLeftTop gapImageText projectTextImageMarginsText'>
                                <div className='projectTextHeader20'>
                                    <h5></h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p>After confirming the removal of the tools panel, I re-allocated the additional screen space to enhance the main navigation panel.</p>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaStory2} alt="Finding the story 2" className='image'/>
                            <div className='autoLayoutRightAlignLeftTop gapImageText projectTextImageMarginsText'>
                                <div className='projectTextHeader20'>
                                    <h5></h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p>But what to do with the elements that were originally in the right panel? Breaking it apart, I experimented with different groupings to determine <strong>how they could be reorganized to tell a more coherent and compelling story</strong>.</p>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaStory3} alt="Finding the story 3" className='image'/>
                            <div className='autoLayoutRightAlignLeftTop gapImageText projectTextImageMarginsText'>
                                <div className='projectTextHeader20'>
                                    <h5></h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p>For many elements, it was logical to retain them on the map. However, the toolbar felt disconnected from the rest of the interface and cluttered the view.</p>
                                        <p>Since presenting tools contextually is more effective, I then explored ways to minimize the toolbar’s prominence!</p>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaStory4} alt="Finding the story 4" className='image'/>
                            <div className='autoLayoutRightAlignLeftTop gapImageText projectTextImageMarginsText'>
                                <div className='projectTextHeader20'>
                                    <h5></h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p className='b3Medium'>Option #2 was chosen!</p>
                                        <p>The second option was selected! This option provides users with immediate tool access when needed, without disrupting other map elements or being buried in the main navigation panel.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actionable 2 */}
                        <div className='autoLayoutDownAlignTop projectTextImageMargins gapProjectGrouping'>
                            <div className='projectTextImageMarginsText autoLayoutDownAlignTop gapProjectGrouping'>
                                <div className='autoLayoutDownAlignTop gaph3h3'>
                                    <h5><span style={{...projectPrimaryColor[theme], fontWeight: '600'}} >Actionable #2:</span> Emphasize the first step while simultaneously showing value</h5>
                                    <p>Ensuring users can easily search for a location and create a site, while also providing upfront access to browse data products if desired.</p>
                                </div>
                                <div className='autoLayoutRightAlignLeftTop gapImageText'>
                                    <div className='projectTextHeader20'>
                                        <h5>Supporting dual flows</h5>
                                    </div>
                                    <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                        <div className='autoLayoutDownAlignTop gapb3b1'>
                                            <p>I then focused on the second set of actionables: establishing a clear first step.</p>
                                            <p>This part was essential because it would determine how the dual user flows will work together, laying the foundation for the entire journey.</p>
                                            <p>The design goal is to allow users to <strong>seamlessly enter either flow upon opening the platform</strong>, encouraging exploration of data products while also guiding location searches. Ideally, users would have access to both options at any time, regardless of their immediate preference!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaDualFlows1} alt="Supporting Dual Flows 1" className='image'/>
                            <div className='autoLayoutRightAlignLeftTop gapImageText projectTextImageMarginsText'>
                                <div className='projectTextHeader20'>
                                    <h5></h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p>Location searches and data products share a complex relationship. How can we present both as the possible first step?</p>
                                        <p>I first focused on optimizing screen space, to have room to highlight the both elements upfront at the same time.</p>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaDualFlows2} alt="Supporting dual flows 2" className='image'/>
                            <div className='autoLayoutRightAlignLeftTop gapImageText projectTextImageMarginsText'>
                                <div className='projectTextHeader20'>
                                    <h5></h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p>After confirming that the location exploration feature could be removed, I gained significantly more space in the main navigation panel!</p>
                                        <p>This prompted me to explore layout concepts that would support both user goals: facilitating immediate site searches while prominently showcasing data products.</p>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaDualFlows3} alt="Supporting dual flows 3" className='image'/>
                            <div className='autoLayoutRightAlignLeftTop gapImageText projectTextImageMarginsText'>
                                <div className='projectTextHeader20'>
                                    <h5></h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p className='b3Medium'>Option #2 was chosen to iterate on!</p>
                                        <p>The second option was chosen, because of its clear storytelling! It placed <strong>all location elements on the map</strong>, and used the left panel as a <strong>"data menu”</strong>, which <strong>aligned super well with the client's vision</strong>.</p>
                                        <p>However, there was still an aspect that could be improved: the zoom status indicator!</p>
                                    </div>
                                </div>
                            </div>
                            <img src={snappeaDualFlows4} alt="Supporting dual flows 4" className='image'/>
                            <div className='autoLayoutRightAlignLeftTop gapImageText projectTextImageMarginsText'>
                                <div className='projectTextHeader20'>
                                    <h5></h5>
                                </div>
                                <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p className='b3Medium'>The second iteration shown was a success!</p>
                                        <p>It maintains visible system status, while highlighting site creation with a prominent blue button and a site box.</p>
                                        <p><strong>It was then time to polish and turn all the lo-fis into hi-fis!</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        {/* Final design */}
                        <div className='projectTextImageMargins autoLayoutDownAlignTop gapImageImage projectCenter'>
                            <div className='autoLayoutDownAlignTop gapImageHeader'>
                                <h5>Final design</h5>
                                <div className='autoLayoutDownAlignCenter imageMount' style={{...projectPrimaryContainer[theme],}}>
                                {/* <video width="100%" height="auto" autoPlay controls loop muted playsInline>
                                    <source src={blueprintFinal1} type="video/mp4" />
                                </video> */}
                                    <p style={{marginBottom: '1.5rem', marginTop: '0.25rem', color: 'var(--BLACK)'}}><strong>Flow #1: Browsing data products first</strong></p>
                                    <video autoPlay loop muted playsInline  className='video'>
                                        <source src={snappeaFinal1} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div className='autoLayoutDownAlignCenter imageMount' style={{...projectPrimaryContainer[theme],}}>
                                <p style={{marginBottom: '1.5rem', marginTop: '0.25rem', color: 'var(--BLACK)'}}><strong>Flow #2: Adding a site first</strong></p>
                                <video autoPlay loop muted playsInline  className='video'>
                                    <source src={snappeaFinal2} type="video/mp4" />
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
                                    <p className='b3Medium'>Usability testing</p>
                                    <p>To assess the final design's <strong>impact on the success metrics</strong> (time to first task completion, ease of use, NPS, and user-reported issues), several moderated usability tests were conducted.</p>
                                    <p>Results showed a 28% faster task completion for first-time users, higher ease-of-use and NPS scores! Furthermore, a drop in user-reported issues was reported after implementation.</p>
                                    <p><strong>All success metrics were achieved!</strong></p>
                                </div>
                            </div>
                        </div>

                        {/* Fun */}
                        <div className='projectTextImageMargins autoLayoutDownAlignTop gapImageHeader projectCenter'>
                            <h5>Highlights: Internship fun</h5>
                            {/* <img src={snappeaFun} alt="Internship fun!" className='image'/> */}
                            <div className='autoLayoutRightAlignCenter imageMount projectHeaderImage gapImageText' style={{...projectPrimaryContainer['primaryBlue'], paddingTop: '3rem', paddingBottom: '3rem'}}>
                                <p className='fun2ColText' style={{color: 'var(--BLACK)'}}><strong>Finally finishing our office puzzle together!</strong></p>
                                <div style={{maxHeight: '625px'}}>
                                    <video autoPlay loop muted playsInline style={{borderRadius: '1.25rem', maxHeight: '625px'}}>
                                        <source src={snappeaFun} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>

                        {/* Learnings */}
                        <div className='autoLayoutRightAlignLeftTop projectTextOnlyMargins gapImageText'>
                            <div className='projectTextHeader20'>
                                <h5>Learnings</h5>
                            </div>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80'>
                                <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem responsiveAutoLayoutRightTop'>
                                    <div className='projectListNumberCircle'>
                                        <CircleNumber number={1} colorTheme={theme} />
                                    </div>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p className='b3Medium'>
                                            Designing to support dual user goals
                                        </p>
                                        <p>
                                            Typically, there’s a primary user need to focus on, but in this rare case, two equally important needs to be balanced and prioritized. Instead of choosing one, I aimed to support both while ensuring clarity and a seamless experience for all!
                                        </p>
                                    </div>
                                </div>
                                <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem responsiveAutoLayoutRightTop'>
                                    <div className='projectListNumberCircle'>
                                        <CircleNumber number={2} colorTheme={theme}/>
                                    </div>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p className='b3Medium'>
                                            Research and understanding look different for everyone and every project
                                        </p>
                                        <p>
                                            Complex projects may require more time to fully grasp the problem space, and that's perfectly fine!
                                        </p>
                                    </div>
                                </div>
                                <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem responsiveAutoLayoutRightTop'>
                                    <div className='projectListNumberCircle'>
                                        <CircleNumber number={3} colorTheme={theme} />
                                    </div>
                                    <div className='autoLayoutDownAlignTop gapb3b1'>
                                        <p className='b3Medium'>
                                            Designing for a niche, complex industry
                                        </p>
                                        <p>
                                            It often means working with limited pre-existing industry user patterns! Success relies on creative problem-solving and innovative thinking, to synthesize existing patterns based on a solid understanding of design principles.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <Footer />
                </div>
            </div>
        </>
    )
}