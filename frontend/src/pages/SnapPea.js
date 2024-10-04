import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CircleNumber from '../components/CircleNumber';

import '../styles/Projects.css';
import { projectPrimaryContainer, projectPrimaryColor } from '../styles/Projects';

import snappeaHeader from '../assets/snappea/snappea-header.png';
import snappeaActionables from '../assets/snappea/snappea-actionables.png';
import snappeaApproach from '../assets/snappea/snappea-approach.png';
import snappeaChallenge from '../assets/snappea/snappea-challenge.png';
import snappeaDualFlows1 from '../assets/snappea/snappea-dual-flows-1.png';
import snappeaDualFlows2 from '../assets/snappea/snappea-dual-flows-2.png';
import snappeaDualFlows3 from '../assets/snappea/snappea-dual-flows-3.png';
import snappeaDualFlows4 from '../assets/snappea/snappea-dual-flows-4.png';
import snappeaFlow1 from '../assets/snappea/snappea-flow-1.png';
import snappeaFlow2 from '../assets/snappea/snappea-flow-2.png';
import snappeaFun from '../assets/snappea/snappea-fun.png';
import snappeaImpact from '../assets/snappea/snappea-impact.png';
import snappeaInterviews from '../assets/snappea/snappea-interviews.png';
import snappeaProblem from '../assets/snappea/snappea-problem.png';
import snappeaStory1 from '../assets/snappea/snappea-story-1.png';
import snappeaStory2 from '../assets/snappea/snappea-story-2.png';
import snappeaSuccess1 from '../assets/snappea/snappea-success-1.png';
import snappeaSuccess2 from '../assets/snappea/snappea-success-2.png';

export default function SnapPea() {
    const theme = 'blue'; 

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
                                Accelerating <span style={{...projectPrimaryColor[theme],}} >value discovery</span> for a mapping platform
                            </h3>
                            <p className='b2'>SnapPea Design, Sept-Dec 2023</p>
                        </div>

                        {/* Image */}
                        <div className='autoLayoutDownAlignCenter imageMount projectHeaderImage' style={{...projectPrimaryContainer[theme],}}>
                            <img src={snappeaHeader} alt="Thumbnail" className='image'/>
                        </div>
                    </div>

                    {/* Context */}
                    <div className='projectTextMargins autoLayoutRightAlignLeftCenter gapImageText'>

                        {/* Left context */}
                        <div className='autoLayoutDownAlignTop projectContextLeft gaph5b1' >
                            <h5>I love showing clients the transformative power of design.</h5>
                            <p>One of my favourite parts of working with clients is the collaboration and sharing of design knowledge, each step of the way.</p>
                            <p>At SnapPea Design, I led a client project where we strategically improved a <strong>geospatial mapping platform (mapping software that uses elevation data to produce geographic models)</strong> to establish strong and scalable design foundations for the future.</p>
                        </div>

                        {/* Right context */}
                        <div className='autoLayoutDownAlignTop projectContextRight' >
                            <div className='autoLayoutDownAlignTop gapb3b1'>
                                <p className='b3-medium'>Collaborators</p>
                                <div>
                                    <p>2 UX/UI designers</p>
                                    <p>Client</p>
                                    <p>Client dev team</p>
                                </div>
                            </div>
                            <div className='autoLayoutDownAlignTop gapb3b1'>
                                <p className='b3-medium'>Team</p>
                                <p>SnapPea Design team</p>
                            </div>
                        </div>
                    </div>

                    {/* Impact */}
                    <div className='autoLayoutDownAlignTop gapProjectGrouping'>
                        <div className='projectTextMargins autoLayoutRightAlignLeftTop gapImageText'>
                            <h5 className='projectTextHeader20'>Impact</h5>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping'>
                                <div className='autoLayoutDownAlignTop gaph6b1'>
                                    <h6>The designs are currently <strong>launched</strong> and live!</h6>
                                    <p>But what impact did the feature have?</p>
                                </div>
                                <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                    <div className='projectListNumberCircle'>
                                        <CircleNumber number={1} colorTheme={theme} />
                                    </div>
                                    <div className='autoLayoutDownAlignTop gapb1b1'>
                                        <p className='b3-medium'>
                                            Positive client feedback
                                        </p>
                                        <p>
                                            The client loved the design improvements!
                                        </p>
                                    </div>
                                </div>
                                <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                    <div className='projectListNumberCircle'>
                                        <CircleNumber number={2} colorTheme={theme} />
                                    </div>
                                    <div className='autoLayoutDownAlignTop gapb1b1'>
                                        <p className='b3-medium'>
                                            Improved usability and accessibility
                                        </p>
                                        <p>
                                            <strong>All 3 defined metrics were met</strong>: learnability, NPS scores, and reduced user-reported issues.
                                        </p>
                                    </div>
                                </div>
                                <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                    <div className='projectListNumberCircle'>
                                        <CircleNumber number={3} colorTheme={theme} />
                                    </div>
                                    <div className='autoLayoutDownAlignTop gapb1b1'>
                                        <p className='b3-medium'>
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

                    <hr />

                    {/* Reason #1 */}
                    <div className='autoLayoutDownAlignTop projectTextMargins gapProjectGrouping'>
                        <div className='autoLayoutDownAlignTop gaph5b1'>
                            <h5><span style={{...projectPrimaryColor[theme],}} >Reason #1:</span> Poor usability</h5>
                            <p>Users have trouble navigating and understanding how to use the platform.</p>
                        </div>
                        <div className='autoLayoutRightAlignLeftTop gapImageText'>
                            <h5 className='projectTextHeader20'>User reported issues</h5>
                            <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping'>
                                <p>The customer experience team was also super helpful to speak to! They provided user knowledge, insights into user support, support requests, and a <strong>sample of 46 user-reported issues</strong>. This led to the following insights:</p>
                                <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                    <div className='projectListNumberCircle'>
                                        <CircleNumber number={1} colorTheme={theme} />
                                    </div>
                                    <div className='autoLayoutDownAlignTop gapb1b1'>
                                        <p className='b3-medium'>
                                            Platform comprehension issues
                                        </p>
                                        <p>
                                            Users face information overload and struggle to understand what key features are intended to do.
                                        </p>
                                    </div>
                                </div>
                                <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                    <div className='projectListNumberCircle'>
                                        <CircleNumber number={2} colorTheme={theme}/>
                                    </div>
                                    <div className='autoLayoutDownAlignTop gapb1b1'>
                                        <p className='b3-medium'>
                                            Navigation challenges
                                        </p>
                                        <p>
                                            Users are unclear on how to perform tasks and determine next steps.
                                        </p>
                                    </div>
                                </div>
                                <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                    <div className='projectListNumberCircle'>
                                        <CircleNumber number={3} colorTheme={theme} />
                                    </div>
                                    <div className='autoLayoutDownAlignTop gapb1b1'>
                                        <p className='b3-medium'>
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

                    <hr />

                    {/* Learnings */}
                    <div className='autoLayoutRightAlignLeftTop projectTextMargins gapImageText'>
                        <h5 className='projectTextHeader20'>Learnings</h5>
                        <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping'>
                            <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={1} colorTheme={theme} />
                                </div>
                                <div className='autoLayoutDownAlignTop gapb1b1'>
                                    <p className='b3-medium'>
                                        Designing to support dual user goals
                                    </p>
                                    <p>
                                        Typically, there’s a primary user need to focus on, but in this rare case, two equally important needs to be balanced and prioritized. Instead of choosing one, I aimed to support both while ensuring clarity and a seamless experience for all!
                                    </p>
                                </div>
                            </div>
                            <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={2} colorTheme={theme}/>
                                </div>
                                <div className='autoLayoutDownAlignTop gapb1b1'>
                                    <p className='b3-medium'>
                                        Research and understanding look different for everyone and every project
                                    </p>
                                    <p>
                                        Complex projects may require more time to fully grasp the problem space, and that's perfectly fine!
                                    </p>
                                </div>
                            </div>
                            <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={3} colorTheme={theme} />
                                </div>
                                <div className='autoLayoutDownAlignTop gapb1b1'>
                                    <p className='b3-medium'>
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
        </>
    )
}