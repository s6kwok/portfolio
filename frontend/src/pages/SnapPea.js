import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import '../styles/projects.css';
import snappeaHeader from '../assets/snappea/snappea-header.png';
import { projectPrimaryContainer, projectPrimaryColor } from '../styles/Projects';

export default function Blank() {

    const theme = 'blue'; 

    return(
        <>
            <Header defaultActiveTab={'Null'} />

            <div className='marginsPrimary'>
                <div className='headerContainer'>
                    <h3>Accelerating <span style={{...projectPrimaryColor[theme],}} >value discovery</span> for a mapping platform</h3>
                    <p className='b2'>SnapPea Design, Sept-Dec 2023</p>
                    <div
                        className='projectHeaderImage'
                        style={{
                            ...projectPrimaryContainer[theme],
                            marginTop: '1.25rem',
                        }}
                    >
                        <img
                        src={snappeaHeader}
                        alt="Display"
                        style={{
                            width: '100%',
                            maxHeight: '100%',
                            borderRadius: '1rem',
                        }}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}