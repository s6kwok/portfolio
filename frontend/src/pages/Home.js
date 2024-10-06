import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Tag from "../components/Tag";

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

import { RiEmotionHappyLine } from "react-icons/ri";
import { BsBarChartLineFill } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import { IoBalloonSharp, } from "react-icons/io5";
import { FaBookOpen, FaHeart, FaLightbulb } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { MdQuestionMark } from "react-icons/md";

export default function Home() {
    const navigate = useNavigate();

    return(
        <>
            <Header defaultActiveTab={'Design'} />

            {/* Whole page auto layout down */}
            <div className='autoLayoutDownAlignTop gapFullPage'>
            
                {/* Can't apply class 'autoLayoutDownAlignTop marginsPrimary' to top div because marginsPrimary would also apply to footer */}
                <div className='marginsPrimary autoLayoutDownAlignTop gapFullPage'>

                    {/* Hero container paragraph + footnote */}
                    <div className='autoLayoutDownAlignCenter hero' style={{gap: '4rem', paddingBottom: '2.5rem', position: 'relative',}}>

                        {/* Hero main paragraph to be center of page */}
                        <div className='autoLayoutRightAlignLeftCenter' style={{minHeight: '72vh',}}>

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
                                <p>Prev @Questrade, @Jam City, @LCBO</p>
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
                        <p>Check out my recent work below! ↓</p>
                    </div>

                    {/* Projects list */}
                    <div className='autoLayoutDownAlignTop gapFullPage projectsList'>

                        {/* SNAPPEA content autolayout */}
                        <div className='autoLayoutRightAlignCenter gapImageText projectsListItem'
                            onClick={() => {
                                document.documentElement.style.scrollBehavior = 'auto';
                                navigate(routes.snapPea);
                                window.scrollTo({ top:0, left:0, behavior: "instant"})
                            }}
                        >

                            {/* Left section with photo */}
                            <div>
                                {/* Image */}
                                <div className='autoLayoutDownAlignCenter imageMount projectsListImage' style={{...projectPrimaryContainer['blue'],}}>
                                    <img src={SnapPeaThumbnail} alt="SnapPea Thumbnail" className='image'/>
                                </div>
                            </div>

                            {/* Right section */}
                            <div className='autoLayoutDownAlignCenter gaph3b1' style={{width: '70%', marginLeft: 'auto', marginRight: 'auto',}}>

                                {/* Header and inline tag */}
                                <div>
                                    <h3>Accelerating <span style={{...projectPrimaryColor['blue'],}} >value discovery</span> for a mapping platform</h3>
                                </div>
                                
                                {/* Rest of paragraph */}
                                <p className='b2'>
                                    SnapPea Design (Product design, Agency)
                                </p>
                                <p>
                                    Making it quicker for users to fully understand and experience the mapping platform’s benefits.
                                </p>
                                <img src={ArrowRightBlue} alt="Arrow right blue" width="48" height="48" />
                            </div>
                        </div>

                        {/* JAMCITY content autolayout */}
                        <div className='autoLayoutRightAlignCenter gapImageText projectsListItem'
                            onClick={() => {
                                document.documentElement.style.scrollBehavior = 'auto';
                                navigate(routes.jamCity);
                                window.scrollTo({ top:0, left:0, behavior: "instant"})
                            }}
                        >

                            {/* Left section with photo */}
                            <div>
                                {/* Image */}
                                <div className='autoLayoutDownAlignCenter imageMount projectsListImage' style={{...projectPrimaryContainer['pink'],}}>
                                    {/* <img src={JamCityThumbnail} alt="JamCity Thumbnail" className='image'/> */}
                                    <video autoPlay loop muted playsInline  className='video-projects-list'>
                                        <source src={JamcityThumbnailVideo} type="video/mp4" />
                                    </video>
                                </div>
                            </div>

                            {/* Right section */}
                            <div className='autoLayoutDownAlignCenter gaph3b1' style={{width: '70%', marginLeft: 'auto', marginRight: 'auto',}}>

                                {/* Header and inline tag */}
                                <div>
                                    <h3>Creating an <span style={{...projectPrimaryColor['pink'],}} >engaging</span> player rewards system</h3>
                                </div>
                                
                                {/* Rest of paragraph */}
                                <p className='b2'>
                                    Jam City (Product design, Gaming)
                                </p>
                                <p>
                                    Designing a career specialization battlepass for engagement
                                </p>
                                <img src={ArrowRightPink} alt="Arrow right pink" width="48" height="48" />
                            </div>
                        </div>

                        {/* QUESTRADE content autolayout */}
                        <div className='autoLayoutRightAlignCenter gapImageText projectsListItem'
                            onClick={() => {
                                document.documentElement.style.scrollBehavior = 'auto';
                                navigate(routes.questrade);
                                window.scrollTo({ top:0, left:0, behavior: "instant"})
                            }}
                        >

                            {/* Left section with photo */}
                            <div>
                                {/* Image */}
                                <div className='autoLayoutDownAlignCenter imageMount projectsListImage' style={{...projectPrimaryContainer['green'],}}>
                                    {/* <img src={QuestradeThumbnail} alt="Questrade Thumbnail" className='image'/> */}
                                    <video autoPlay loop muted playsInline  className='video-projects-list'>
                                        <source src={QuestradeThumbnailVideo} type="video/mp4" />
                                    </video>
                                </div>
                            </div>

                            {/* Right section */}
                            <div className='autoLayoutDownAlignCenter gaph3b1' style={{width: '70%', marginLeft: 'auto', marginRight: 'auto',}}>

                                {/* Header and inline tag */}
                                <div>
                                    <h3>Enhancing the <span style={{...projectPrimaryColor['green'],}} >discoverability</span> of new web features</h3>
                                </div>
                                
                                {/* Rest of paragraph */}
                                <p className='b2'>
                                    Questrade (Product design, Fintech)
                                </p>
                                <p>
                                    Designing a new web feature announcement system for effective change management
                                </p>
                                <img src={ArrowRightGreen} alt="Arrow right green" width="48" height="48" />
                            </div>
                        </div>

                        {/* BLUEPRINT content autolayout */}
                        <div className='autoLayoutRightAlignCenter gapImageText projectsListItem'
                            onClick={() => {
                                document.documentElement.style.scrollBehavior = 'auto';
                                navigate(routes.blueprint);
                                window.scrollTo({ top:0, left:0, behavior: "instant"})
                            }}
                        >

                            {/* Left section with photo */}
                            <div>
                                {/* Image */}
                                <div className='autoLayoutDownAlignCenter imageMount projectsListImage' style={{...projectPrimaryContainer['blue'],}}>
                                    {/* <img src={BlueprintThumbnail} alt="Blueprint Thumbnail" className='image'/> */}
                                    <video autoPlay loop muted playsInline  className='video-projects-list'>
                                        <source src={BlueprintThumbnailVideo} type="video/mp4" />
                                    </video>
                                </div>
                            </div>

                            {/* Right section */}
                            <div className='autoLayoutDownAlignCenter gaph3b1' style={{width: '70%', marginLeft: 'auto', marginRight: 'auto',}}>

                                {/* Header and inline tag */}
                                <div>
                                    <h3><span style={{...projectPrimaryColor['blue'],}} >Reducing barriers</span> to program registration</h3>
                                </div>
                                
                                {/* Rest of paragraph */}
                                <p className='b2'>
                                    UW Blueprint (Product design, NPO)
                                </p>
                                <p>
                                    Designing to increase user satisfaction
                                </p>
                                <img src={ArrowRightBlue} alt="Arrow right blue" width="48" height="48" />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}