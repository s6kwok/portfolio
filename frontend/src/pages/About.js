import Header from '../components/Header';
import Footer from '../components/Footer';
import Tag from "../components/Tag";

// Analytics
import ReactGA from 'react-ga';
ReactGA.initialize('334214728');
ReactGA.pageview(window.location.pathname + window.location.search);

import '../styles/Home.css';

import React, { useEffect } from 'react';

import aboutHero from '../assets/about/hero.png';
import aboutHearts from '../assets/about/hearts.png';
import aboutEating from '../assets/about/eating.png';
import aboutCreating from '../assets/about/creating.png';
import aboutAdventures from '../assets/about/adventures.png';
import aboutExperimenting from '../assets/about/experimenting.png';
import aboutLaughing from '../assets/about/laughing.png';

import { FaHeart, FaUtensils, FaFlask } from "react-icons/fa";
import { RiEmotionHappyLine, RiMusic2Fill } from "react-icons/ri";
import { FaCar } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { IoSparklesSharp } from "react-icons/io5";

// Fade in
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function About() {
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
            <div className='fullPage'>
                <Header defaultActiveTab={'About'} />
                
                {/* Whole page auto layout down */}
                <div className='autoLayoutDownAlignTop gapFullPage'>

                    {/* Main section container auto layout center */}
                    <div className='autoLayoutRightAlignCenter aboutTop' data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="800" data-aos-once="true">

                        {/* Main section content autolayout left */}
                        <div className='autoLayoutRightAlignCenter gapImageText aboutTopContainer'>

                            {/* Left section with photo */}
                            {/* Center purple div within a transparent div */}
                            <div>
                                <div className='imageMount aboutHeroImage' style={{backgroundColor: 'var(--PRIMARY-BLUE-200)', border: '3px solid var(--PRIMARY-BLUE-300)',}}>
                                    <img src={aboutHero} alt="This is me!" className='image'/>
                                </div>
                            </div>

                            {/* Right section autolayout content down */}
                            <div className='autoLayoutDownAlignCenter gaph3b1 aboutTopRight'>

                                {/* Header and inline tag autolayout left */}
                                <div className='autoLayoutRightAlignLeftCenter gapSmallTagInlineText'>
                                    <h3>Hi internet! I'm </h3>
                                    <div className="hoverContainer">
                                        <div className="hoverContainerTag">
                                            <Tag theme="orange" size="small" icon={FaHeart} text="Stacy" />
                                        </div>
                                        <div className="popupImage name" style={{maxWidth: '25%',}}>
                                            <img src={aboutHearts} alt="Hearts" className='image'/>
                                        </div>
                                    </div>
                                </div>

                                {/* Paragraph autolayout down */}
                                <div className='autoLayoutDownAlignTop gapb1b1MultiParagraph'>
                                    <p>
                                        Nice to meet you! I’m a recent grad from the University of Waterloo, who’s interested in designing solutions that <strong>inspire curiosity</strong> and make technology feel <strong>approachable</strong>.
                                    </p>
                                    <p>
                                        I first stumbled into product design unexpectedly while giving back to the community, joining a team of students to build tech for non-profits. And I’ve been designing ever since!
                                    </p>
                                    <p>
                                        I thrive amongst <strong>ambition, humility, and community</strong>! And I’m passionate about <strong>creating simplicity amongst complexity and chaos</strong>, and empowering informed user decisions. 
                                    </p>
                                    <p>
                                        The simplicity I love, translates outside of design too! From indulging in child-like play, to giving smiles to strangers--it’s the little things that bring me joy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sparkles divider autolayout right */}
                    <div className='autoLayoutRightAlignCenter gapb1b1MultiParagraph responsiveAutoLayoutRightCenter'>
                        {/* <HiSparkles style={{ width: '1rem', height: '1rem' }} /> */}
                        <HiSparkles style={{ fontSize: '20px' }} />
                        <IoSparklesSharp style={{ fontSize: '20px' }} />
                        <HiSparkles style={{ fontSize: '20px' }} />
                    </div>
                    
                    {/* Large flowing text autolayout down */}
                    <div className='autoLayoutDownAlignTop gaph3h3' id='play' data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="800" data-aos-once="true">
                        <div className='autoLayoutRightAlignCenter gapSmallTagInlineText aboutParagraph'>
                            <h3 className='aboutParagraphLineHeight'>Beyond design, you’ll find me</h3>
                            <div className="hoverContainer">
                                <div className="hoverContainerTag">
                                    <Tag theme="pink" size="small" icon={FaUtensils} text="eating" />
                                </div>
                                <div className="popupImage eating">
                                    <img src={aboutEating} alt="Eating good food!" className='image' style={{border: '3px solid var(--PINK-300)',}}/>
                                </div>
                            </div>
                        </div>
                        <div className='autoLayoutRightAlignCenter gapSmallTagInlineText aboutParagraph'>
                            <h3 className='aboutParagraphLineHeight'>good food, playing volleyball, unlearning,</h3>
                        </div>
                        <div className='autoLayoutRightAlignCenter gapSmallTagInlineText aboutParagraph'>
                            <div className="hoverContainer">
                                <div className="hoverContainerTag">
                                    <Tag theme="blue" size="small" icon={RiMusic2Fill} text="creating" />
                                </div>
                                <div className="popupImage creating">
                                    <img src={aboutCreating} alt="Me creating!" className='image' style={{border: '3px solid var(--BLUE-300)',}}/>
                                </div>
                            </div>
                            <h3>vibe-y Spotify playlists,</h3>
                        </div>
                        <div className='autoLayoutRightAlignCenter gapSmallTagInlineText aboutParagraph'>
                            <h3 className='aboutParagraphLineHeight'>doom-scrolling, cooking Samyang fire noodles,</h3>
                        </div>
                        <div className='autoLayoutRightAlignCenter gapSmallTagInlineText aboutParagraph'>
                            <h3>gaming, going on</h3>
                            <div className="hoverContainer">
                                <div className="hoverContainerTag">
                                    <Tag theme="orange" size="small" icon={FaCar} text="adventures" />
                                </div>
                                <div className="popupImage adventures">
                                    <img src={aboutAdventures} alt="Group adventures!" className='image' style={{border: '3px solid var(--ORANGE-300)',}}/>
                                </div>
                            </div>
                            <h3>with friends,</h3>
                        </div>
                        <div className='autoLayoutRightAlignCenter gapSmallTagInlineText aboutParagraph'>
                            <h3 className='aboutParagraphLineHeight'>napping, sending my entire Tik Tok feed to</h3>
                        </div>
                        <div className='autoLayoutRightAlignCenter gapSmallTagInlineText aboutParagraph'>
                            <h3>people, building puzzles,</h3>
                            <div className="hoverContainer">
                                <div className="hoverContainerTag">
                                    <Tag theme="primary-blue" size="small" icon={FaFlask} text="experimenting" />
                                </div>
                                <div className="popupImage experimenting">
                                    <img src={aboutExperimenting} alt="Me experimenting!" className='image' style={{border: '3px solid var(--PRIMARY-BLUE-300)',}}/>
                                </div>
                            </div>
                        </div>
                        <div className='autoLayoutRightAlignCenter gapSmallTagInlineText aboutParagraph'>
                            <h3 className='aboutParagraphLineHeight'>with things I probably shouldn’t, building DIY</h3>
                        </div>
                        <div className='autoLayoutRightAlignCenter gapSmallTagInlineText aboutParagraph'>
                            <h3 className='aboutParagraphLineHeight'>models, playing piano, dancing in the kitchen,</h3>
                        </div>
                        <div className='autoLayoutRightAlignCenter gapSmallTagInlineText aboutParagraph'>
                            <div className="hoverContainer">
                                <div className="hoverContainerTag">
                                    <Tag theme="green" size="small" icon={RiEmotionHappyLine} text="laughing" />
                                </div>
                                <div className="popupImage laughing">
                                    <img src={aboutLaughing} alt="Me laughing!" className='image' style={{border: '3px solid var(--GREEN-300)',}}/>
                                </div>
                            </div>
                            <h3>and smiling (always!)</h3>
                        </div>
                    </div>

                    {/* Footnote */}
                    <div className='autoLayoutRightAlignCenter responsiveAutoLayoutRightCenter' style={{gap: '0.5rem',}} >
                        <p>P.S. Thanks for stopping by</p>
                        <FaHeart />
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    )
}