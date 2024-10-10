import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Tag from "../components/Tag";

import React, { useEffect, useState } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../styles/Home.css';
import '../styles/Projects.css';
import { projectPrimaryContainer, projectPrimaryColor } from '../styles/Projects';

import { routes } from "../routes/Routes";

// import SnapPeaThumbnail from '../assets/home/snappea-thumbnail.png';
// import JamCityThumbnail from '../assets/home/jamcity-thumbnail.png';
// import QuestradeThumbnail from '../assets/home/questrade-thumbnail.png';
// import BlueprintThumbnail from '../assets/home/blueprint-thumbnail.png';
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
    const [h1Tags, setH1Tags] = useState([
        { theme: 'primaryBlue', size: 'large', icon: RiEmotionHappyLine, text: 'people', style: {} },
        { theme: 'orange', size: 'large', icon: BsBarChartLineFill, text: 'data', style: {} }
    ]);

    const [containerTags, setContainerTags] = useState([
        { theme: 'blue', size: 'large', icon: FaLightbulb, text: 'strategy', style: { bottom:"200px", right:"8px", transform: 'rotate(-16deg)', position: 'absolute', zIndex: 10000 }},
        { theme: 'green', size: 'large', icon: MdQuestionMark, text: 'curiosity', style: { bottom:"131px", right:"416px", transform: 'rotate(-6deg)', position: 'absolute', zIndex: 10000 }},
        { theme: 'orange', size: 'large', icon: HiSparkles, text: 'innovation', style: { bottom:"200px", right:"300px", transform: 'rotate(-35deg)', position: 'absolute', zIndex: 10000 }},
        { theme: 'pink', size: 'large', icon: FaHeart, text: 'empathy', style: { bottom:"0px", right:"165px", transform: 'rotate(0deg)', position: 'absolute', zIndex: 10000 }},
        { theme: 'green', size: 'large', icon: FaBookOpen, text: 'storytelling', style: { bottom:"50px", right:"500px", transform: 'rotate(30deg)', position: 'absolute', zIndex: 10000 }},
        { theme: 'pink', size: 'large', icon: IoBalloonSharp, text: 'fun', style: { bottom:"203px", right:"97px", transform: 'rotate(-38deg)', position: 'absolute', zIndex: 10000 }},
        { theme: 'primary-blue', size: 'large', icon: FaLocationArrow, text: 'usability', style: { bottom:"197px", right:"100px", transform: 'rotate(-70deg)', position: 'absolute', zIndex: 10000 }}
    ]);

    // State to track if the tags should be visible (trigger animation)
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger the animation on page load
        setIsVisible(true);
    }, []);

    const navigate = useNavigate();

    // Fade in
    useEffect(() => {
        AOS.init({
          duration: 1000,  // Animation duration in milliseconds
          once: false,     // Whether animation should happen only once or every time you scroll
          mirror: false,   // Whether elements animate out while scrolling past them
        });
    }, []);

    const handleTagClick = (index) => {
        const randomH1Index = Math.floor(Math.random() * h1Tags.length);

        // Get the clicked container tag
        const clickedTag = containerTags[index];
      
        // Get the randomly chosen h1 tag
        const randomH1Tag = h1Tags[randomH1Index];
      
        // Swap text and styling
        const updatedH1Tags = [...h1Tags];
        const updatedContainerTags = [...containerTags];
      
        // Swap the text and style
        updatedH1Tags[randomH1Index] = { ...clickedTag , text: clickedTag.text, style: {} };
        updatedContainerTags[index] = { ...randomH1Tag, text: randomH1Tag.text, style: clickedTag.style }; // Reset style for tag container
      
        // Update the state with the swapped values
        setH1Tags(updatedH1Tags);
        setContainerTags(updatedContainerTags);
    };

    const handleTitleTagClick = (index) => {
        const randomContainerIndex = Math.floor(Math.random() * containerTags.length);

        // Get the clicked h1 tag
        const clickedTag = h1Tags[index];
      
        // Get the randomly chosen container tag
        const randomContainerTag = containerTags[randomContainerIndex];
      
        // Swap text and styling
        const updatedH1Tags = [...h1Tags];
        const updatedContainerTags = [...containerTags];
      
        // Swap the text and style
        updatedContainerTags[randomContainerIndex] = { ...clickedTag , text: clickedTag.text, style: randomContainerTag.style  };
        updatedH1Tags[index] = { ...randomContainerTag, text: randomContainerTag.text, style: {} }; // Reset style for tag container
      
        // Update the state with the swapped values
        setH1Tags(updatedH1Tags);
        setContainerTags(updatedContainerTags);
    };

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
                    <div className='autoLayoutDownAlignCenter hero' style={{gap: '4rem', paddingBottom: '0rem', position: 'relative',}}>

                        {/* Hero main paragraph to be center of page */}
                        <div className='autoLayoutRightAlignLeftCenter' style={{position: 'relative', minHeight: '70vh', paddingBottom: '3.5rem', zIndex: "0"}}>

                            {/* Hero container main content to change styling back to block */}
                            <div className='autoLayoutDownAlignCenter gaph1b1' style={{paddingBottom: '4rem'}}>
                                <div className='autoLayoutDownAlignCenter gaph1h1'>
                                    <h1>Hi, I’m Stacy!</h1>

                                    {/* Line with tags */}
                                    <div className='autoLayoutRightAlignLeftCenter gapLargeTagInlineText'>
                                        <h1>I bring</h1>
                                        <div className='autoLayoutRightAlignLeftCenter gapLargeTagInlineText'>
                                            {h1Tags.map((tag, index) => (
                                                <>
                                                <div className='hover-container-tag'>
                                                    <Tag
                                                        theme={tag.theme}
                                                        size={tag.size}
                                                        icon={tag.icon}
                                                        text={tag.text}
                                                        onClick={() => handleTitleTagClick(index)}
                                                    />
                                                </div>
                                                {/* Add the "and" h1 tag after the first tag */}
                                                {index === 0 && <h1>and</h1>}
                                                </>
                                            ))}
                                        </div>
                                        <h1>together</h1>
                                    </div>

                                    {/* Remaining text */}
                                    <h1>to design impactful and elegant solutions.</h1>
                                </div>
                                {/* <p>Prev @Questrade, @Jam City, @LCBO</p> */}
                            </div>
                        </div>

                        <div className='tags-container'>
                        {containerTags.map((tag, index) => (
                            <div className='hover-container-tag'>
                                <div
                                    key={index}
                                    className={`tag`}
                                    style={{
                                    ...tag.style,
                                    animation: 'fall 1.5s forwards',
                                    animationDelay: `${index * 0.2}s`, // Stagger the animation by index
                                    }}
                                >
                                    <Tag
                                        key={index}
                                        theme={tag.theme}
                                        size={tag.size}
                                        icon={tag.icon}
                                        text={tag.text}
                                        style={tag.style}
                                        onClick={() => handleTagClick(index)}
                                    />
                                </div>
                            </div>
                        ))}
                        </div>
                        {/* Hero footnote */}
                        <p style={{paddingBottom: '3rem'}}> Check out my recent work below! ↓</p>
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