import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/Projects.css';
import { projectPrimaryContainer, projectPrimaryColor, } from '../styles/Projects';

import blueprintHeader from '../assets/blueprint/blueprint-header.png';
import blueprintHeader1 from '../assets/blueprint/blueprint-header-1.png';
import blueprintHeader2 from '../assets/blueprint/blueprint-header-2.png';
import blueprintHeader3 from '../assets/blueprint/blueprint-header-3.png';
import blueprintHeader4 from '../assets/blueprint/blueprint-header-4.png';
// import blueprintFun from '../assets/blueprint/blueprint-fun.png';
import blueprintProcess1 from '../assets/blueprint/blueprint-process-1.png';
import blueprintProcess2 from '../assets/blueprint/blueprint-process-2.png';
import blueprintProcess3 from '../assets/blueprint/blueprint-process-3.png';
import blueprintProcess4 from '../assets/blueprint/blueprint-process-4.png';
import blueprintFinal1 from '../assets/blueprint/blueprint-final-1.mp4';
import blueprintFinal2 from '../assets/blueprint/blueprint-final-2.mp4';
import sparkles3BlueLeft from '../assets/sparkles-3-blue-left.png';
import sparkles3BlueRight from '../assets/sparkles-3-blue-right.png';

export default function Blueprint() {
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
                                    <span style={{...projectPrimaryColor[theme],}} >Reducing barriers</span> to program registration
                                </h2>
                                <p className='b2'>UW Blueprint, May-Aug 2021</p>
                            </div>

                            {/* Image */}
                            <div className='autoLayoutDownAlignCenter imageMount projectHeaderImage' style={{...projectPrimaryContainer[theme],}}>
                                {/* <img src={blueprintHeader} alt="Thumbnail" className='image'/> */}
                                <div id="container">
                                    <div className="photobanner photobannerBlueprint">
                                        <img src={blueprintHeader1} alt="Thumbnail 1"/>
                                        <img src={blueprintHeader2} alt="Thumbnail 2"/>
                                        <img src={blueprintHeader3} alt="Thumbnail 3"/>
                                        <img src={blueprintHeader4} alt="Thumbnail 4"/>
                                        <img src={blueprintHeader1} alt="Thumbnail 1"/>
                                        <img src={blueprintHeader2} alt="Thumbnail 2"/>
                                        <img src={blueprintHeader3} alt="Thumbnail 3"/>
                                        <img src={blueprintHeader4} alt="Thumbnail 4"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Context */}
                        <div className='projectTextOnlyMargins autoLayoutRightAlignLeftTop gapImageText'>

                            {/* Left context */}
                            <div className='autoLayoutDownAlignTop projectContextLeft gaph2b1' >
                                <h5>Designing for the community has brought me so much joy.</h5>
                                <p>SDC Foundation is a non-profit organization (NPO) that runs programs to foster inclusive communities for children with disabilities.</p>
                                <p>They approached UW Blueprint (a student organization that builds tech for social good) to improve their digital registration process, as <strong>parents struggled to register their children, leading to frequent mixups and extensive admin support needed</strong>.</p>
                            </div>

                            {/* Right context */}
                            <div className='autoLayoutDownAlignCenter projectContextRight' >
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3Medium'>Collaborators</p>
                                    <div className='autoLayoutDownAlignCenter gapb1b1SameParagraph'>
                                        <p>2 product designers</p>
                                        <p>1 product manager</p>
                                        <p>1 project lead</p>
                                        <p>6 developers</p>
                                        <p>NPO client</p>
                                    </div>
                                </div>
                                <div className='autoLayoutDownAlignTop gapb3b1'>
                                    <p className='b3Medium'>Team</p>
                                    <p>Social Diversity for Children Foundation project team</p>
                                </div>
                            </div>
                        </div>

                        {/* Notice */}
                        <div className='projectTextOnlyMargins autoLayoutDownAlignCenter gaph3b1 projectCenter'>
                            <div className='autoLayoutRightAlignLeftCenter gapImageText'>
                                <div className='projectCenterSparkles'>
                                    <img src={sparkles3BlueLeft} alt="Sparkles" className='image'/>
                                </div>
                                <div>
                                    <h3>This case study has been tucked away in the archives</h3>
                                </div>
                                <div className='projectCenterSparkles'>
                                    <img src={sparkles3BlueRight} alt="Sparkles" className='image'/>
                                </div>
                            </div>
                            <p><strong>Wanna know more than the summary below?</strong> Please reach out!</p>
                        </div>

                        {/* Design process */}
                        <div className='projectTextImageMargins autoLayoutDownAlignTop gapImageImage projectCenter'>
                            <div className='autoLayoutDownAlignTop gapImageHeader'>
                                <h5>Highlights: Design process</h5>
                                <img src={blueprintProcess1} alt="Design process 1" className='image'/>
                            </div>
                            <img src={blueprintProcess2} alt="Design process 2" className='image'/>
                            <img src={blueprintProcess3} alt="Design process 3" className='image'/>
                            <img src={blueprintProcess4} alt="Design process 4" className='image'/>
                        </div>

                        {/* Final design */}
                        <div className='projectTextImageMargins autoLayoutDownAlignTop gapImageImage projectCenter'>
                            <div className='autoLayoutDownAlignTop gapImageHeader'>
                                <h5>Final design</h5>
                                <div className='autoLayoutDownAlignCenter imageMount projectHeaderImage' style={{...projectPrimaryContainer[theme],}}>
                                {/* <video width="100%" height="auto" autoPlay controls loop muted playsInline>
                                    <source src={blueprintFinal1} type="video/mp4" />
                                </video> */}
                                    <video autoPlay loop muted playsInline  className='video'>
                                        <source src={blueprintFinal1} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div className='autoLayoutDownAlignCenter imageMount projectHeaderImage' style={{...projectPrimaryContainer[theme],}}>
                                <video autoPlay loop muted playsInline  className='video'>
                                    <source src={blueprintFinal2} type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        {/* Fun */}
                        {/* <div className='projectTextImageMargins autoLayoutDownAlignTop gapImageHeader projectCenter'>
                            <h5>Highlights: My fantastic project team</h5>
                            <img src={blueprintFun} alt="Project team fun!" className='image'/>
                        </div> */}

                    </div>

                    <Footer />
                </div>
            </div>
        </>
    )
}