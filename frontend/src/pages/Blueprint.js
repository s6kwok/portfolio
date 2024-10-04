import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/projects.css';
import { projectPrimaryContainer, projectPrimaryColor } from '../styles/Projects';

import blueprintHeader from '../assets/blueprint/blueprint-header.png';
import blueprintFun from '../assets/blueprint/blueprint-fun.png';
import blueprintProcess1 from '../assets/blueprint/blueprint-process-1.png';
import blueprintProcess2 from '../assets/blueprint/blueprint-process-2.png';
import blueprintProcess3 from '../assets/blueprint/blueprint-process-3.png';
import blueprintProcess4 from '../assets/blueprint/blueprint-process-4.png';

export default function Blueprint() {
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
                                <span style={{...projectPrimaryColor[theme],}} >Reducing barriers</span> to program registration
                            </h3>
                            <p className='b2'>UW Blueprint, May-Aug 2021</p>
                        </div>

                        {/* Image */}
                        <div className='autoLayoutDownAlignCenter imageMount projectHeaderImage' style={{...projectPrimaryContainer[theme],}}>
                            <img src={blueprintHeader} alt="Thumbnail" className='image'/>
                        </div>
                    </div>

                    {/* Context */}
                    <div className='projectTextMargins autoLayoutRightAlignLeftCenter gapImageText'>

                        {/* Left context */}
                        <div className='autoLayoutDownAlignTop projectContextLeft gaph5b1' >
                            <h5>Designing for the community has brought me so much joy.</h5>
                            <p>SDC Foundation is a non-profit organization (NPO) that runs programs to foster inclusive communities for children with disabilities.</p>
                            <p>They approached UW Blueprint (a student organization that builds tech for social good) to improve their digital registration process, as <strong>parents struggled to register their children, leading to frequent mixups and extensive admin support needed</strong>.</p>
                        </div>

                        {/* Right context */}
                        <div className='autoLayoutDownAlignTop projectContextRight' >
                            <div className='autoLayoutDownAlignTop gapb3b1'>
                                <p className='b3-medium'>Collaborators</p>
                                <div>
                                    <p>2 product designers</p>
                                    <p>1 product manager</p>
                                    <p>1 project lead</p>
                                    <p>6 developers</p>
                                    <p>NPO client</p>
                                </div>
                            </div>
                            <div className='autoLayoutDownAlignTop gapb3b1'>
                                <p className='b3-medium'>Team</p>
                                <p>Social Diversity for Children Foundation project team</p>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </>
    )
}