import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CircleNumber from '../components/CircleNumber';

import '../styles/projects.css';
import { projectPrimaryContainer, projectPrimaryColor } from '../styles/Projects';

import questradeHeader from '../assets/questrade/questrade-header.png';
import questradeDecisions from '../assets/questrade/questrade-decisions.png';
import questradeFun from '../assets/questrade/questrade-fun.png';

export default function Questrade() {
    const theme = 'green'; 

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
                                Enhancing the <span style={{...projectPrimaryColor[theme],}} >discoverability</span> of new web features
                            </h3>
                            <p className='b2'>Questrade, Jul-Aug 2022</p>
                        </div>

                        {/* Image */}
                        <div className='autoLayoutDownAlignCenter imageMount projectHeaderImage' style={{...projectPrimaryContainer[theme],}}>
                            <img src={questradeHeader} alt="Thumbnail" className='image'/>
                        </div>
                    </div>

                    {/* Context */}
                    <div className='projectTextMargins autoLayoutRightAlignLeftCenter gapImageText'>

                        {/* Left context */}
                        <div className='autoLayoutDownAlignTop projectContextLeft gaph5b1' >
                            <h5>It’s hard to keep up with the frequent changes to your investing platform.</h5>
                            <p>Keeping up with the latest feature updates on the Questrade web trading platform was proven (through research!) to be challenging.</p>
                            <p>Helpful features are continually released on Questrade’s web trading platform, but <strong>users don’t use many new features because they are unaware of them</strong>. After thoughtful cross-functional deliberation, it was decided that we needed web feature announcements!</p>
                        </div>

                        {/* Right context */}
                        <div className='autoLayoutDownAlignTop projectContextRight' >
                            <div className='autoLayoutDownAlignTop gapb3b1'>
                                <p className='b3-medium'>Collaborators</p>
                                <div>
                                    <p>1 UX designer (<strong>me</strong>!)</p>
                                    <p>Content designer</p>
                                    <p>Visual designer</p>
                                    <p>Product manager</p>
                                    <p>Engineering</p>
                                </div>
                            </div>
                            <div className='autoLayoutDownAlignTop gapb3b1'>
                                <p className='b3-medium'>Team</p>
                                <p>Questrade investing team</p>
                            </div>
                        </div>
                    </div>

                    {/* Impact */}
                    <div className='projectTextMargins autoLayoutRightAlignLeftTop gapImageText'>
                        <h5 className='projectTextHeader20'>Impact</h5>
                        <div className='autoLayoutDownAlignTop gapProjectListNumberGrouping'>
                            <div className='autoLayoutDownAlignTop gaph6b1'>
                                <h6>This project is currently <strong>launched</strong> and live!</h6>
                                <p>But what impact did the feature have?</p>
                            </div>
                            <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={1} colorTheme={theme} />
                                </div>
                                <div className='autoLayoutDownAlignTop gapb1b1'>
                                    <p className='b3-medium'>
                                        Positive user feedback
                                    </p>
                                    <p>
                                        From survey insights
                                    </p>
                                </div>
                            </div>
                            <div className='autoLayoutRightAlignLeftTop gapProjectListNumberItem'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={2} colorTheme={theme} />
                                </div>
                                <div className='autoLayoutDownAlignTop gapb1b1'>
                                    <p className='b3-medium'>
                                        Improved learnability & discoverability of new features
                                    </p>
                                    <p>
                                        Also from survey insights
                                    </p>
                                </div>
                            </div>
                            <div className='autoLayoutRightAlignLeftCenter gapProjectListNumberItem'>
                                <div className='projectListNumberCircle'>
                                    <CircleNumber number={3} colorTheme={theme} />
                                </div>
                                <div className='autoLayoutDownAlignTop gapb1b1'>
                                    <p className='b3-medium'>
                                        Adopted as a template!
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