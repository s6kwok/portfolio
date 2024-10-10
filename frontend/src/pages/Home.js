import { useNavigate } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Tag from "../components/Tag";

import React, { useEffect } from 'react';

import '../styles/Home.css';
import '../styles/Projects.css';
import { projectPrimaryContainer, projectPrimaryColor } from '../styles/Projects';

import { routes } from "../routes/Routes";

import SnapPeaThumbnail from '../assets/home/snappea-thumbnail.png';
import JamCityThumbnail from '../assets/home/jamcity-thumbnail.png';
import QuestradeThumbnail from '../assets/home/questrade-thumbnail.png';
import BlueprintThumbnail from '../assets/home/blueprint-thumbnail.png';
import ArrowRightBlue from '../assets/home/arrow-right-blue.svg';
import ArrowRightPink from '../assets/home/arrow-right-pink.svg';
import ArrowRightGreen from '../assets/home/arrow-right-green.svg';
import QuestradeThumbnailVideo from '../assets/home/questrade-video-cropped.mp4';
import BlueprintThumbnailVideo from '../assets/home/blueprint-video-cropped.mp4';
import JamcityThumbnailVideo from '../assets/home/jamcity-video-cropped.mp4';
import SnappeaThumbnailVideo from '../assets/home/snappea-video-cropped.mp4';

import { RiEmotionHappyLine } from "react-icons/ri";
import { BsBarChartLineFill } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import { IoBalloonSharp, } from "react-icons/io5";
import { FaBookOpen, FaHeart, FaLightbulb } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { MdQuestionMark } from "react-icons/md";

// Fade in
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
    const navigate = useNavigate();

    // Fade in
    useEffect(() => {
        AOS.init({
          duration: 1000,  // Animation duration in milliseconds
          once: false,     // Whether animation should happen only once or every time you scroll
          mirror: false,   // Whether elements animate out while scrolling past them
        });
    }, []);

    return(
        <>
            {/* <div className='fade-in-up'> */}
            <Header defaultActiveTab={'Design'} />
            {/* </div> */}

            {/* Whole page auto layout down */}
            <div className='autoLayoutDownAlignTop gapFullPage'>
            
                {/* Can't apply class 'autoLayoutDownAlignTop marginsPrimary' to top div because marginsPrimary would also apply to footer */}
                <div className='marginsPrimary autoLayoutDownAlignTop gapFullPage'>

                    {/* Hero container paragraph + footnote */}
                    <div className='autoLayoutDownAlignCenter hero' style={{gap: '4rem', paddingBottom: '2.5rem', position: 'relative',}}  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">

                        {/* Hero main paragraph to be center of page */}
                        <div className='autoLayoutRightAlignLeftCenter' style={{minHeight: '70vh', paddingBottom: '3.5rem',}}>

                            {/* Hero container main content to change styling back to block */}
                            <div className='autoLayoutDownAlignCenter gaph1b1' style={{paddingBottom: '4rem'}}>
                                <div className='autoLayoutDownAlignCenter gaph1h1'>
                                    <h1>Hi, I’m Stacy!</h1>

                                    {/* Line with tags */}
                                    <div className='autoLayoutRightAlignLeftCenter gapLargeTagInlineText'>
                                        <h1>I bring</h1>
                                        <Tag theme="primaryBlue" size="large" icon={RiEmotionHappyLine} text="people" />
                                        <h1>and</h1>
                                        <Tag theme="orange" size="large" icon={BsBarChartLineFill} text="data" />
                                        <h1>together</h1>
                                    </div>

                                    {/* Remaining text */}
                                    <h1>to design impactful and elegant solutions.</h1>
                                </div>
                                {/* <p>Prev @Questrade, @Jam City, @LCBO</p> */}
                            </div>
                        </div>

                        <div className='tags-container'>
                                <Tag theme="blue" size="medium" icon={FaLightbulb} text="strategy" style={{ bottom:"21px", right:"538px", transform: 'rotate(-16deg)', position: 'absolute',}}/>
                                <Tag theme="green" size="medium" icon={MdQuestionMark} text="curiosity" style={{ bottom:"131px", right:"416px", transform: 'rotate(-6deg)', position: 'absolute',}}/>
                                <Tag theme="orange" size="medium" icon={HiSparkles} text="innovation" style={{ bottom:"53px", right:"300px", transform: 'rotate(-35deg)', position: 'absolute',}}/>
                                <Tag theme="pink" size="medium" icon={FaHeart} text="empathy" style={{ bottom:"0px", right:"165px", transform: 'rotate(0deg)', position: 'absolute',}}/>
                                <Tag theme="green" size="medium" icon={FaBookOpen} text="storytelling" style={{ bottom:"50px", right:"-15px", transform: 'rotate(30deg)', position: 'absolute',}}/>
                                <Tag theme="pink" size="medium" icon={IoBalloonSharp} text="fun" style={{ bottom:"203px", right:"97px", transform: 'rotate(-38deg)', position: 'absolute',}}/>
                                <Tag theme="primary-blue" size="medium" icon={FaLocationArrow} text="usability" style={{ bottom:"197px", right:"-50px", transform: 'rotate(-70deg)', position: 'absolute',}}/>
                        </div>
                        {/* Hero footnote */}
                        <p> Check out my recent work below! ↓</p>
                    </div>

                    {/* Projects list */}
                    <div className='autoLayoutDownAlignTop gapFullPage projectsList'>

                        {/* SNAPPEA content autolayout */}
                        <div className='autoLayoutRightAlignCenter gapImageText projectsListItem cursor-eyes'
                            onClick={() => {
                                document.documentElement.style.scrollBehavior = 'auto';
                                navigate(routes.snapPea);
                                window.scrollTo({ top:0, left:0, behavior: "instant"})
                            }}
                            data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="600" data-aos-once="true"
                        >

                            {/* Left section with photo */}
                            <div className='cursor-eyes projectsListItemLeft'>
                                {/* Image */}
                                <div className='autoLayoutDownAlignCenter imageMount projectsListImage cursor-eyes video-projects-list-mount' style={{...projectPrimaryContainer['blue'],}}>
                                    {/* <img src={SnapPeaThumbnail} alt="SnapPea Thumbnail" className='image cursor-eyes'/> */}
                                    <video autoPlay loop muted playsInline  className='video-projects-list cursor-eyes'>
                                        <source src={SnappeaThumbnailVideo} type="video/mp4" />
                                    </video>
                                </div>
                            </div>

                            {/* Right section */}
                            <div className='autoLayoutDownAlignCenter gaph3b1 cursor-eyes projectsListItemRight'>

                                {/* Header and inline tag */}
                                <div className='cursor-eyes'>
                                    <h3 className='cursor-eyes'>Accelerating <span style={{...projectPrimaryColor['blue'],}} className='cursor-eyes' >value discovery</span> for a mapping platform</h3>
                                </div>
                                
                                {/* Rest of paragraph */}
                                <p className='b2 cursor-eyes'>
                                    SnapPea Design (Product design, Agency)
                                </p>
                                <p className='cursor-eyes'>
                                    Making it quicker for users to understand and experience the mapping platform’s benefits
                                </p>
                                <img src={ArrowRightBlue} alt="Arrow right blue" width="48" height="48" className='cursor-eyes' />
                            </div>
                        </div>

                        {/* JAMCITY content autolayout */}
                        <div className='autoLayoutRightAlignCenter gapImageText projectsListItem cursor-eyes'
                            onClick={() => {
                                document.documentElement.style.scrollBehavior = 'auto';
                                navigate(routes.jamCity);
                                window.scrollTo({ top:0, left:0, behavior: "instant"})
                            }}
                            data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="600" data-aos-once="true"
                        >

                            {/* Left section with photo */}
                            <div className='cursor-eyes projectsListItemLeft'>
                                {/* Image */}
                                <div className='autoLayoutDownAlignCenter imageMount projectsListImage cursor-eyes video-projects-list-mount' style={{...projectPrimaryContainer['pink'],}}>
                                    {/* <img src={JamCityThumbnail} alt="JamCity Thumbnail" className='image'/> */}
                                    <video autoPlay loop muted playsInline  className='video-projects-list cursor-eyes'>
                                        <source src={JamcityThumbnailVideo} type="video/mp4" />
                                    </video>
                                </div>
                            </div>

                            {/* Right section */}
                            <div className='autoLayoutDownAlignCenter gaph3b1 cursor-eyes projectsListItemRight' >

                                {/* Header and inline tag */}
                                <div className='cursor-eyes'>
                                    <h3 className='cursor-eyes'>Creating an <span style={{...projectPrimaryColor['pink'],}} className='cursor-eyes' >engaging</span> player rewards system</h3>
                                </div>
                                
                                {/* Rest of paragraph */}
                                <p className='b2 cursor-eyes'>
                                    Jam City (Product design, Gaming)
                                </p>
                                <p className='cursor-eyes'>
                                    Designing a career specialization battlepass for engagement
                                </p>
                                <img src={ArrowRightPink} alt="Arrow right pink" width="48" height="48" className='cursor-eyes' />
                            </div>
                        </div>

                        {/* QUESTRADE content autolayout */}
                        <div className='autoLayoutRightAlignCenter gapImageText projectsListItem cursor-eyes'
                            onClick={() => {
                                document.documentElement.style.scrollBehavior = 'auto';
                                navigate(routes.questrade);
                                window.scrollTo({ top:0, left:0, behavior: "instant"})
                            }}
                            data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="600" data-aos-once="true"
                        >

                            {/* Left section with photo */}
                            <div className='cursor-eyes projectsListItemLeft'>
                                {/* Image */}
                                <div className='autoLayoutDownAlignCenter imageMount projectsListImage cursor-eyes video-projects-list-mount' style={{...projectPrimaryContainer['green'],}}>
                                    {/* <img src={QuestradeThumbnail} alt="Questrade Thumbnail" className='image'/> */}
                                    <video autoPlay loop muted playsInline  className='video-projects-list cursor-eyes'>
                                        <source src={QuestradeThumbnailVideo} type="video/mp4" />
                                    </video>
                                </div>
                            </div>

                            {/* Right section */}
                            <div className='autoLayoutDownAlignCenter gaph3b1 cursor-eyes projectsListItemRight' >

                                {/* Header and inline tag */}
                                <div className='cursor-eyes'>
                                    <h3 className='cursor-eyes'>Enhancing the <span style={{...projectPrimaryColor['green'],}} className='cursor-eyes' >discoverability</span> of new web features</h3>
                                </div>
                                
                                {/* Rest of paragraph */}
                                <p className='b2 cursor-eyes'>
                                    Questrade (Product design, Fintech)
                                </p>
                                <p className='cursor-eyes'>
                                    Designing a new web feature announcement system for effective change management
                                </p>
                                <img src={ArrowRightGreen} alt="Arrow right green" width="48" height="48" className='cursor-eyes' />
                            </div>
                        </div>

                        {/* BLUEPRINT content autolayout */}
                        <div className='autoLayoutRightAlignCenter gapImageText projectsListItem cursor-eyes'
                            onClick={() => {
                                document.documentElement.style.scrollBehavior = 'auto';
                                navigate(routes.blueprint);
                                window.scrollTo({ top:0, left:0, behavior: "instant"})
                            }}
                            data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="600" data-aos-once="true"
                        >

                            {/* Left section with photo */}
                            <div className='cursor-eyes projectsListItemLeft'>
                                {/* Image */}
                                <div className='autoLayoutDownAlignCenter imageMount projectsListImage cursor-eyes video-projects-list-mount' style={{...projectPrimaryContainer['blue'],}}>
                                    {/* <img src={BlueprintThumbnail} alt="Blueprint Thumbnail" className='image'/> */}
                                    <video autoPlay loop muted playsInline  className='video-projects-list cursor-eyes'>
                                        <source src={BlueprintThumbnailVideo} type="video/mp4" />
                                    </video>
                                </div>
                            </div>

                            {/* Right section */}
                            <div className='autoLayoutDownAlignCenter gaph3b1 cursor-eyes projectsListItemRight'>

                                {/* Header and inline tag */}
                                <div className='cursor-eyes'>
                                    <h3 className='cursor-eyes'><span style={{...projectPrimaryColor['blue'],}} className='cursor-eyes' >Reducing barriers</span> to program registration</h3>
                                </div>
                                
                                {/* Rest of paragraph */}
                                <p className='b2 cursor-eyes'>
                                    UW Blueprint (Product design, NPO)
                                </p>
                                <p className='cursor-eyes'>
                                    Designing to increase user satisfaction
                                </p>
                                <img src={ArrowRightBlue} alt="Arrow right blue" width="48" height="48" className='cursor-eyes' />
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
                    <Footer />
                </div>
            </div>
        </>
    )
}