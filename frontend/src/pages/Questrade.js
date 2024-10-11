import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CircleNumber from '../components/CircleNumber';

import '../styles/Projects.css';
import { projectPrimaryContainer, projectPrimaryColor } from '../styles/Projects';

import questradeHeader from '../assets/questrade/questrade-header.png';
import questradeDecisions from '../assets/questrade/questrade-decisions.png';
import questradeFun from '../assets/questrade/questrade-fun.png';
import questradeFinal1 from '../assets/questrade/questrade-final-1.png';
import questradeFinal2 from '../assets/questrade/questrade-final-2.png';
import sparkles3GreenLeft from '../assets/sparkles-3-green-left.png';
import sparkles3GreenRight from '../assets/sparkles-3-green-right.png';
import QuestradeLogo from '../assets/questrade/questrade-logo.png';
import QuestradeThumbnailVideo from '../assets/home/questrade-video-cropped.mp4';

export default function Questrade() {
    const theme = 'green'; 

    return(
        <>
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
                                Enhancing the <span style={{...projectPrimaryColor[theme],}} >discoverability</span> of new web features
                            </h2>
                            <p className='b2'>Questrade, Jul-Aug 2022</p>
                        </div>

                        {/* Image */}
                        <div className='autoLayoutRightAlignCenter imageMount projectHeaderImage projectHeaderImage2Col' style={{...projectPrimaryContainer[theme],}}>
                            <div className='projectHeaderImage2ColLeft'>
                                <img src={QuestradeLogo} alt="Thumbnail" className='image'/>
                                {/* <img src={questradeHeader} alt="Thumbnail" className='image'/> */}
                            </div>
                            <div className='projectHeaderImage2ColRight'>
                                <video autoPlay loop muted playsInline className='video' style={{borderRadius: '1rem'}}>
                                    <source src={QuestradeThumbnailVideo} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>

                    {/* Context */}
                    <div className='projectTextOnlyMargins autoLayoutRightAlignLeftTop gapImageText'>

                        {/* Left context */}
                        <div className='autoLayoutDownAlignTop projectContextLeft gaph2b1' >
                            <h5>It’s hard to keep up with the frequent changes to your investing platform.</h5>
                            <p>Keeping up with the latest feature updates on the Questrade web trading platform was proven (through research!) to be challenging.</p>
                            <p>Helpful features are continually released on Questrade’s web trading platform, but <strong>users don’t use many new features because they are unaware of them</strong>. After thoughtful cross-functional deliberation, it was decided that we needed web feature announcements!</p>
                        </div>

                        {/* Right context */}
                        <div className='autoLayoutDownAlignCenter projectContextRight' >
                            <div className='autoLayoutDownAlignTop gapb3b1'>
                                <p className='b3Medium'>Collaborators</p>
                                <div className='autoLayoutDownAlignCenter gapb1b1SameParagraph'>
                                    <p>1 UX designer (<strong>me</strong>!)</p>
                                    <p>Content designer</p>
                                    <p>Visual designer</p>
                                    <p>Product manager</p>
                                    <p>Engineering</p>
                                </div>
                            </div>
                            <div className='autoLayoutDownAlignTop gapb3b1'>
                                <p className='b3Medium'>Team</p>
                                <p>Questrade investing team</p>
                            </div>
                        </div>
                    </div>

                    {/* Impact */}
                    <div className='projectTextOnlyMargins autoLayoutRightAlignLeftTop gapImageText'>
                        <div className='projectTextHeader20'>
                            <h5>Impact</h5>
                        </div>
                        <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping projectTextText80 responsiveAutoLayoutDownLeft'>
                            <div className='autoLayoutDownAlignTop gaph6b1'>
                                <h6>This project is currently <strong>launched</strong> and live!</h6>
                                <p>But what impact did the feature have?</p>
                            </div>
                            <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem responsiveAutoLayoutRightTop'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={1} colorTheme={theme} />
                                </div>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3Medium'>
                                        Positive user feedback
                                    </p>
                                    <p>
                                        From survey insights
                                    </p>
                                </div>
                            </div>
                            <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem responsiveAutoLayoutRightTop'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={2} colorTheme={theme} />
                                </div>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3Medium'>
                                        Improved learnability & discoverability of new features
                                    </p>
                                    <p>
                                        Also from survey insights
                                    </p>
                                </div>
                            </div>
                            <div className='autoLayoutRightAlignLeftCenter gapProjectListNumberItem responsiveAutoLayoutRightTop'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={3} colorTheme={theme} />
                                </div>
                                <p className='b3Medium'>
                                    Adopted as a template!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Notice */}
                    <div className='projectTextOnlyMargins autoLayoutDownAlignCenter gaph3b1 projectCenter'>
                        <div className='autoLayoutRightAlignLeftCenter gapImageText'>
                            <div className='projectCenterSparkles'>
                                <img src={sparkles3GreenLeft} alt="Sparkles" className='image'/>
                            </div>
                            <div>
                                <h3>This case study is being refreshed (yay!)</h3>
                            </div>
                            <div className='projectCenterSparkles'>
                                <img src={sparkles3GreenRight} alt="Sparkles" className='image'/>
                            </div>
                        </div>
                        <div className='autoLayoutDownAlignCenter gapb1b1SameParagraph'>
                            <p>The revamped case study will be launching soon!</p>
                            <p><strong>Wanna know more than the summary below?</strong> Please reach out!</p>
                        </div>
                    </div>

                    {/* Design decisions */}
                    <div className='projectTextImageMargins autoLayoutDownAlignTop gapImageHeader projectCenter'>
                        <h5>Highlights: Key design decisions</h5>
                        <img src={questradeDecisions} alt="Design decisions" className='image'/>
                    </div>

                    {/* Final design */}
                    <div className='projectTextImageMargins autoLayoutDownAlignTop gapImageImage projectCenter'>
                        <div className='autoLayoutDownAlignTop gapImageHeader'>
                            <h5>Final design</h5>
                            <img src={questradeFinal1} alt="Final design case 1" className='image'/>
                        </div>
                        <img src={questradeFinal2} alt="Final design case 2" className='image'/>
                    </div>
                    

                    {/* Fun */}
                    <div className='projectTextImageMargins autoLayoutDownAlignTop gapImageHeader projectCenter'>
                        <h5>Highlights: Internship fun</h5>
                        <img src={questradeFun} alt="Internship fun!" className='image'/>
                    </div>

                </div>

                <Footer />
            </div>
        </>
    )
}