import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/projects.css';
import { projectPrimaryContainer, projectPrimaryColor } from '../styles/Projects';

import snappeaHeader from '../assets/snappea/snappea-header.png';

export default function SnapPea() {
    const theme = 'blue'; 

    return(
        <>
            <Header defaultActiveTab={'Null'} />

            {/* Whole page auto layout down */}
            <div className='autoLayoutDownAlignTop gapFullPage'>
                
                {/* Can't apply class 'autoLayoutDownAlignTop marginsPrimary' to top div because marginsPrimary would also apply to footer */}
                <div className='marginsPrimary'>

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
                </div>

                <Footer />
            </div>
        </>
    )
}