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
import ArrowHero from '../assets/home/arrow-hero.svg';

import { RiEmotionHappyLine } from "react-icons/ri";
import { BsBarChartLineFill } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import { IoBalloonSharp, IoSparklesSharp } from "react-icons/io5";
import { FaBookOpen, FaHeart, FaLightbulb } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { MdQuestionMark } from "react-icons/md";

import Sparkle1 from '../assets/home/sparkle1.svg';
import Sparkle2 from '../assets/home/sparkle2.svg';
import Sparkle3 from '../assets/home/sparkle3.svg';
import Sparkle4 from '../assets/home/sparkle4.svg';
import SparkleCluster1 from '../assets/home/sparkle-cluster-1.svg';
import SparkleCluster2 from '../assets/home/sparkle-cluster-2.svg';
import Sparkle5 from '../assets/home/sparkle5.svg';
import Sparkle6 from '../assets/home/sparkle6.svg';
import Sparkle from '../assets/favicon.svg';

// Fade in
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {    
    const [h1Tags, setH1Tags] = useState([
        { theme: 'primaryBlue', size: 'large', icon: RiEmotionHappyLine, text: 'people', style: {} },
        { theme: 'orange', size: 'large', icon: BsBarChartLineFill, text: 'data', style: {} }
    ]);

    const [containerTags, setContainerTags] = useState([
        { theme: 'blue', size: 'large', icon: FaLightbulb, text: 'strategy', style: { bottom:"3px", left:"26px", transform: 'rotate(-16deg)', position: 'absolute', zIndex: 10000 }},
        { theme: 'pink', size: 'large', icon: IoBalloonSharp, text: 'fun', style: { bottom:"85px", left:"106px", transform: 'rotate(20deg)', position: 'absolute', zIndex: 10000 }},
        { theme: 'orange', size: 'large', icon: HiSparkles, text: 'innovation', style: { bottom:"0px", left:"96px", transform: 'rotate(0deg)', position: 'absolute', zIndex: 10000 }},
        { theme: 'green', size: 'large', icon: MdQuestionMark, text: 'curiosity', style: { bottom:"70px", left:"180px", transform: 'rotate(18deg)', position: 'absolute', zIndex: 10000 }},
        { theme: 'primary-blue', size: 'large', icon: FaLocationArrow, text: 'usability', style: { bottom:"66px", left:"246px", transform: 'rotate(6deg)', position: 'absolute', zIndex: 10000 }},
        { theme: 'pink', size: 'large', icon: FaHeart, text: 'empathy', style: { bottom:"0px", left:"305px", transform: 'rotate(0deg)', position: 'absolute', zIndex: 10000 }},
        { theme: 'green', size: 'large', icon: FaBookOpen, text: 'storytelling', style: { bottom:"117px", left:"354px", transform: 'rotate(20deg)', position: 'absolute', zIndex: 10000 }},
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

    // useEffect(() => {
    //     // Immediately switch a tag as soon as the component mounts with a short delay
    //     const initialTimeoutId = setTimeout(() => {
    //         const initialTagIndex = Math.floor(Math.random() * h1Tags.length);
    //         handleTitleTagClick(initialTagIndex); // Perform the first switch quickly
    //     }, 1500); // Short delay for the first switch
    
    //     // Set up the interval for subsequent switches after the initial switch
    //     const intervalId = setInterval(() => {
    //         const randomTagIndex = Math.floor(Math.random() * h1Tags.length);
    //         handleTitleTagClick(randomTagIndex); // Call the same function to switch tags randomly
    //     }, 4000); // Regular interval for subsequent switches
    
    //     // Cleanup on unmount
    //     return () => {
    //         clearTimeout(initialTimeoutId); // Clear the initial timeout
    //         clearInterval(intervalId); // Clear the interval
    //     };
    // }, []); // Empty dependency array ensures it runs only once on mount

    return(
        <>
            <div className='fullPage'>
                {/* <div className='fade-in-up'> */}
                <Header defaultActiveTab={'Design'} />
                {/* </div> */}

                {/* Whole page auto layout down */}
                <div className='autoLayoutDownAlignTop gapFullPage'>
                
                    {/* Can't apply class 'autoLayoutDownAlignTop marginsPrimary' to top div because marginsPrimary would also apply to footer */}
                    <div className='marginsPrimary autoLayoutDownAlignTop gapHomepage'>

                        {/* Hero container paragraph + footnote */}
                        <div className='autoLayoutDownAlignCenter hero'>

                            {/* Hero main paragraph to be center of page */}
                            <div className='autoLayoutRightAlignLeftCenter heroMainParagraph'>

                                {/* Hero container main content to change styling back to block */}
                                <div className='autoLayoutDownAlignCenter gaph1b1 heroMainParagraphContent'>
                                    <div className='autoLayoutDownAlignCenter gaph1h1'>
                                    {/* <div className='autoLayoutDownAlignCenter gaph1h1' data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true"> */}
                                        {/* <h1>Hi, I’m Stacy <img src={Sparkle5} alt="Sparkle" width="28" height="28" style={{marginLeft: '0.2rem'}} /> <img src={Sparkle6} alt="Sparkle" width="24" height="24" /></h1> */}
                                        <h1 className='homeh1AfterTags'>Stacy Kwok is a product <span style={{whiteSpace: 'nowrap'}}>designer who</span></h1>
                                        {/* <h1>Hi, I’m Stacy <RiEmotionHappyLine style={{fontSize: '2rem', marginRight: '0.15rem', marginLeft: '0.25rem', paddingBottom: '0rem'}} className="footerEmojis" /> <img src={Sparkle6} alt="Sparkle" width="26" height="26" className="footerEmojis" style={{marginLeft: '0rem', paddingBottom: '0.25rem'}} /></h1> */}

                                        {/* Line with tags */}
                                        <div className='autoLayoutRightAlignLeftCenter gapLargeTagInlineText heroMainParagraphContentHeader heroTagLine'>
                                            <h1 style={{ whiteSpace: 'nowrap'}} >brings</h1>
                                            <div className='autoLayoutRightAlignLeftCenter gapLargeTagInlineText'>
                                                {h1Tags.map((tag, index) => (
                                                    <>
                                                    <div className='hoverContainerTag'>
                                                        <div
                                                            key={index}
                                                            className={`tag`}
                                                            style={{
                                                            ...tag.style,
                                                            animation: 'fall 1.5s forwards',
                                                            animationDelay: `${index * 0.5}s`, // Stagger the animation by index
                                                            }}
                                                        >
                                                            <Tag
                                                                theme={tag.theme}
                                                                size={tag.size}
                                                                icon={tag.icon}
                                                                text={tag.text}
                                                                onClick={() => handleTitleTagClick(index)}
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* Add the "and" h1 tag after the first tag */}
                                                    {index === 0 && <h1>and</h1>}
                                                    </>
                                                ))}
                                            </div>
                                            <h1>together</h1>
                                        </div>

                                        {/* Remaining text */}
                                        <h1 className='homeh1AfterTags'>to craft joyful moments and connections.</h1>
                                    </div>
                                    <p className='b2' style={{color: 'var(--GREY-500)', paddingTop: '1rem'}}>Prev @Questrade, @LCBO, @JamCity <img src={Sparkle} alt="Sparkle" width="18" height="18" className="footerEmojis" style={{marginBottom: '0.01rem', marginLeft: '0.25rem', marginRight: '0.25rem'}}/> UWaterloo Engineering Grad</p>
                                </div>
                            </div>

                            <div className='tagsContainer'>
                                {containerTags.map((tag, index) => (
                                    <div className='hoverContainerTag'>
                                        <div
                                            key={index}
                                            className={`tag`}
                                            style={{
                                            ...tag.style,
                                            animation: 'fall 1.15s forwards',
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
                                {/* <div className='arrowHero' data-aos="fade-up" data-aos-anchor-placement="bottom" data-aos-duration="1000" data-aos-delay="1200" data-aos-once="true">
                                    <img src={ArrowHero} alt="Hero hint" width="140" height="140" />
                                </div> */}
                                {/* <div class="down-arrow" data-aos="fade-up" data-aos-anchor-placement="bottom" data-aos-duration="400" data-aos-once="true" onClick={() => {
                                const element = document.getElementById("recentWorkHeader");
                                const offset = -100; // Adjust this value to fine-tune the scroll position
                                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                                const offsetPosition = elementPosition + offset;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: "smooth"
                                });
                                }}></div> */}
                            </div>
                        </div>

                        <div className='recentWork autoLayoutRightAlignCenter responsiveAutoLayoutRightCenter' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="600" data-aos-once="true" style={{gap: '1.25rem'}} id='recentWorkHeader'>
                            {/* <h4><HiSparkles /><IoSparklesSharp />Recent work I'm proud of!</h4> */}
                            <img src={SparkleCluster1} alt="Sparkles" width="40" height="40" className="recentWorkEmojis1" style={{marginBottom: '0.75rem'}} />
                            <h4>Recent work I'm proud of!</h4>
                            <img src={SparkleCluster2} alt="Sparkles" width="42" height="42" className="recentWorkEmojis2" style={{marginBottom: '0.5rem'}} />
                        </div>

                        {/* Projects list */}
                        <div className='autoLayoutDownAlignTop gapFullPage projectsList'>

                            {/* SNAPPEA content autolayout */}
                            <div className='autoLayoutRightAlignCenter gapImageText projectsListItem cursorEyes'
                                onClick={() => {
                                    document.documentElement.style.scrollBehavior = 'auto';
                                    navigate(routes.snapPea);
                                    window.scrollTo({ top:0, left:0, behavior: "instant"})
                                }}
                                data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="600" data-aos-delay="200" data-aos-once="true"
                            >

                                {/* Left section with photo */}
                                <div className='cursorHand projectsListItemLeft'>
                                    {/* Image */}
                                    <div className='autoLayoutDownAlignCenter imageMount projectsListImage cursorEyes videoProjectsListMount' style={{...projectPrimaryContainer['blue'],}}>
                                        {/* <img src={SnapPeaThumbnail} alt="SnapPea Thumbnail" className='image cursorHand'/> */}
                                        <video autoPlay loop muted playsInline  className='videoProjectsList cursorEyes'>
                                            <source src={SnappeaThumbnailVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>

                                {/* Right section */}
                                <div className='autoLayoutDownAlignCenter gaph3b1 cursorEyes projectsListItemRight'>

                                    {/* Header and inline tag */}
                                    <div className='cursorEyes'>
                                        <h3 className='cursorEyes'>Enhancing <span style={{...projectPrimaryColor['blue'],}} className='cursorEyes' >conversion</span> of a geospatial mapping <span style={{whiteSpace: 'nowrap'}}>platform <img src={Sparkle1} alt="Sparkle" width="24" height="24" /></span></h3>
                                    </div>
                                    
                                    {/* Rest of paragraph */}
                                    <p className='b2 cursorEyes' style={{fontWeight: '500'}}>
                                        SnapPea Design (Product design, Agency)
                                    </p>
                                    <p className='cursorEyes' style={{color: 'var(--GREY-500)'}}>
                                        Making it quicker for users to understand and experience the mapping platform’s benefits
                                    </p>
                                    <img src={ArrowRightBlue} alt="Arrow right blue" width="48" height="48" className='cursorEyes' />
                                </div>
                            </div>

                            {/* JAMCITY content autolayout */}
                            <div className='autoLayoutRightAlignCenter gapImageText projectsListItem cursorEyes'
                                onClick={() => {
                                    document.documentElement.style.scrollBehavior = 'auto';
                                    navigate(routes.jamCity);
                                    window.scrollTo({ top:0, left:0, behavior: "instant"})
                                }}
                                data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="600" data-aos-once="true"
                            >

                                {/* Left section with photo */}
                                <div className='cursorEyes projectsListItemLeft'>
                                    {/* Image */}
                                    <div className='autoLayoutDownAlignCenter imageMount projectsListImage cursorEyes videoProjectsListMount' style={{...projectPrimaryContainer['pink'],}}>
                                        {/* <img src={JamCityThumbnail} alt="JamCity Thumbnail" className='image'/> */}
                                        <video autoPlay loop muted playsInline  className='videoProjectsList cursorEyes'>
                                            <source src={JamcityThumbnailVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>

                                {/* Right section */}
                                <div className='autoLayoutDownAlignCenter gaph3b1 cursorEyes projectsListItemRight' >

                                    {/* Header and inline tag */}
                                    <div className='cursorEyes'>
                                        <h3 className='cursorEyes'>Creating an <span style={{...projectPrimaryColor['pink'],}} className='cursorEyes' >engaging</span> player rewards <span style={{whiteSpace: 'nowrap'}}>system <img src={Sparkle2} alt="Sparkle" width="24" height="24" /></span></h3>
                                    </div>
                                    
                                    {/* Rest of paragraph */}
                                    <p className='b2 cursorEyes' style={{fontWeight: '500'}}>
                                        Jam City (Product design, Gaming)
                                    </p>
                                    <p className='cursorEyes' style={{color: 'var(--GREY-500)'}}>
                                        Designing a career specialization battlepass for engagement
                                    </p>
                                    <img src={ArrowRightPink} alt="Arrow right pink" width="48" height="48" className='cursorEyes' />
                                </div>
                            </div>

                            {/* QUESTRADE content autolayout */}
                            <div className='autoLayoutRightAlignCenter gapImageText projectsListItem cursorEyes'
                                onClick={() => {
                                    document.documentElement.style.scrollBehavior = 'auto';
                                    navigate(routes.questrade);
                                    window.scrollTo({ top:0, left:0, behavior: "instant"})
                                }}
                                data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="600" data-aos-once="true"
                            >

                                {/* Left section with photo */}
                                <div className='cursorEyes projectsListItemLeft'>
                                    {/* Image */}
                                    <div className='autoLayoutDownAlignCenter imageMount projectsListImage cursorEyes videoProjectsListMount' style={{...projectPrimaryContainer['green'],}}>
                                        {/* <img src={QuestradeThumbnail} alt="Questrade Thumbnail" className='image'/> */}
                                        <video autoPlay loop muted playsInline  className='videoProjectsList cursorEyes'>
                                            <source src={QuestradeThumbnailVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>

                                {/* Right section */}
                                <div className='autoLayoutDownAlignCenter gaph3b1 cursorEyes projectsListItemRight' >

                                    {/* Header and inline tag */}
                                    <div className='cursorEyes'>
                                        <h3 className='cursorEyes'>Improving the <span style={{...projectPrimaryColor['green'],}} className='cursorEyes' >discoverability</span> of new web <span style={{whiteSpace: 'nowrap'}}>features <img src={Sparkle3} alt="Sparkle" width="24" height="24" /></span></h3>
                                    </div>
                                    
                                    {/* Rest of paragraph */}
                                    <p className='b2 cursorEyes' style={{fontWeight: '500'}}>
                                        Questrade (Product design, Fintech)
                                    </p>
                                    <p className='cursorEyes' style={{color: 'var(--GREY-500)'}}>
                                        Designing a new web feature announcement system for effective change management
                                    </p>
                                    <img src={ArrowRightGreen} alt="Arrow right green" width="48" height="48" className='cursorEyes' />
                                </div>
                            </div>

                            {/* BLUEPRINT content autolayout */}
                            <div className='autoLayoutRightAlignCenter gapImageText projectsListItem cursorEyes'
                                onClick={() => {
                                    document.documentElement.style.scrollBehavior = 'auto';
                                    navigate(routes.blueprint);
                                    window.scrollTo({ top:0, left:0, behavior: "instant"})
                                }}
                                data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="600" data-aos-once="true"
                            >

                                {/* Left section with photo */}
                                <div className='cursorEyes projectsListItemLeft'>
                                    {/* Image */}
                                    <div className='autoLayoutDownAlignCenter imageMount projectsListImage cursorEyes videoProjectsListMount' style={{...projectPrimaryContainer['blue'],}}>
                                        {/* <img src={BlueprintThumbnail} alt="Blueprint Thumbnail" className='image'/> */}
                                        <video autoPlay loop muted playsInline  className='videoProjectsList cursorEyes'>
                                            <source src={BlueprintThumbnailVideo} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>

                                {/* Right section */}
                                <div className='autoLayoutDownAlignCenter gaph3b1 cursorEyes projectsListItemRight'>

                                    {/* Header and inline tag */}
                                    <div className='cursorEyes'>
                                        <h3 className='cursorEyes'><span style={{...projectPrimaryColor['blue'],}} className='cursorEyes' >Streamlining</span> program <span style={{whiteSpace: 'nowrap'}}>registration <img src={Sparkle4} alt="Sparkle" width="24" height="24" /></span></h3>
                                    </div>
                                    
                                    {/* Rest of paragraph */}
                                    <p className='b2 cursorEyes' style={{fontWeight: '500'}}>
                                        UW Blueprint (Product design, NPO)
                                    </p>
                                    <p className='cursorEyes' style={{color: 'var(--GREY-500)'}}>
                                        Designing to increase user satisfaction
                                    </p>
                                    <img src={ArrowRightBlue} alt="Arrow right blue" width="48" height="48" className='cursorEyes' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-once="true">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}