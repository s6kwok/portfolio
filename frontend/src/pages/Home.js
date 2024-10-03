import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Tag from "../components/Tag";

import '../styles/home.css';
import '../styles/projects.css';
import { projectPrimaryContainer, projectPrimaryColor } from '../styles/Projects';

import { routes } from "../routes/Routes";

import SnapPeaThumbnail from '../assets/home/snappea-thumbnail.png';

import { RiEmotionHappyLine } from "react-icons/ri";
import { BsBarChartLineFill } from "react-icons/bs";

export default function Home() {
    const navigate = useNavigate();

    return(
        <>
            {/* <Test /> */}
            <Header defaultActiveTab={'Design'} />
            
            {/* Hero div */}
            <div>
                {/* Hero container main content to vertically align */}
                <div className='marginsPrimary'
                style={{
                    height: '68vh',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '6.5rem',
                }}
                >
                    {/* Hero container main content to change styling back to block */}
                    <div>
                        <h1>Hi, I’m Stacy!</h1>
                        <div
                        style={{
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            paddingTop: '0.75rem',
                        }}
                        >
                            {/* First line */}
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
                                <h1 style={{ paddingRight: '1rem' }}>I bring </h1>
                                <Tag theme="primaryBlue" size="large" icon={RiEmotionHappyLine} text="people" />
                                <h1 style={{ paddingRight: '1rem', paddingLeft: '1rem' }}> and </h1>
                                <Tag theme="orange" size="large" icon={BsBarChartLineFill} text="data" />
                                <h1 style={{ paddingLeft: '1rem' }}> together</h1>
                            </div>
                            {/* Second line */}
                            <div style={{ paddingTop: '0.65rem', paddingBottom: '2.25rem' }}>
                                <h1 style={{ margin: 0 }}>to design impactful and elegant solutions.</h1>
                            </div>
                        </div>
                        <p>Prev @Questrade, @Jam City, @LCBO</p>
                    </div>
                </div>

                {/* Hero footnote */}
                <div className='marginsPrimary'
                    style={{
                        alignItems: 'center',
                        marginBottom: '1.75rem',
                    }}
                >
                    <p>Check out my recent work below! ↓</p>
                </div>
            </div>

            {/* Projects div */}
            <div className='marginsPrimary'>
                {/* Autolayout of content */}
                <div className='projectsList'
                    onClick={() => {
                        document.documentElement.style.scrollBehavior = 'auto';
                        navigate(routes.snapPea);
                        window.scrollTo({ top:0, left:0, behavior: "instant"})
                    }}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '4.5rem',
                        marginTop: '5rem',
                        marginBottom: '5rem',
                        // marginLeft: '10rem',
                        // marginRight: '10rem',
                    }}
                >
                    {/* Left Section with photo */}
                    <div>
                        <div
                            style={{
                            padding: '3rem 3rem',
                            borderRadius: '1.5rem',
                            ...projectPrimaryContainer['blue'],
                            }}
                        >
                            <img
                            src={SnapPeaThumbnail}
                            alt="This is me!"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '1rem',
                            }}
                            />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div
                        style={{
                            maxWidth: '54%',
                            marginTop: '0.15rem',
                        }}
                    >
                        {/* Header and inline tag */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                            }}
                        >
                            <h3>Accelerating <span style={{...projectPrimaryColor['blue'],}} >value discovery</span> for a mapping platform</h3>
                        </div>

                        {/* Paragraph */}
                        <div style={{ marginTop: '1.1rem', }}>
                            <p className='b2'>
                                SnapPea Design (Product design, Agency)
                            </p>
                            <p>
                                Strategically improving a platform that had never previously incorporated design, to enhance usability and accessibility
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}