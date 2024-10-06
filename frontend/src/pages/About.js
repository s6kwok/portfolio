import Header from '../components/Header';
import Footer from '../components/Footer';
import Tag from "../components/Tag";

import '../styles/Home.css';

import aboutHero from '../assets/about/hero.png';

import { FaHeart, FaUtensils, FaFlask } from "react-icons/fa";
import { RiEmotionHappyLine, RiMusic2Fill } from "react-icons/ri";
import { FaCar } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { VscSparkleFilled } from "react-icons/vsc";
import { IoSparklesSharp } from "react-icons/io5";

export default function About() {
    return(
        <>
            <Header defaultActiveTab={'About'} />
            
            {/* Whole page auto layout down */}
            <div className='autoLayoutDownAlignTop gapFullPage'>

                {/* Main section container auto layout center */}
                <div className='autoLayoutRightAlignCenter' style={{maxWidth: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '4.5rem',}}>

                    {/* Main section content autolayout left */}
                    <div className='autoLayoutRightAlignCenter gapImageText'>

                        {/* Left section with photo */}
                        {/* Center purple div within a transparent div */}
                        <div>
                            <div className='imageMount' style={{backgroundColor: 'var(--PRIMARY-BLUE-200)', border: '3px solid var(--PRIMARY-BLUE-300)',}}>
                                <img src={aboutHero} alt="This is me!" className='image'/>
                            </div>
                        </div>

                        {/* Right section autolayout content down */}
                        <div className='autoLayoutDownAlignCenter gaph3b1' style={{maxWidth: '52%', marginLeft: 'auto', marginRight: 'auto',}}>

                            {/* Header and inline tag autolayout left */}
                            <div className='autoLayoutRightAlignLeftCenter gapSmallTagInlineText'>
                                <h3>Hi internet! I'm </h3>
                                <Tag theme="orange" size="small" icon={FaHeart} text="Stacy" />
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
                                    I thrive amongst <strong>ambition, humility, and community</strong>! I’m passionate about <strong>creating simplicity amongst complexity and chaos</strong>, and empowering informed user decisions. 
                                </p>
                                <p>
                                    The simplicity I love, translates outside of design too! From indulging in child-like play (<a href='#play'>scroll down</a> to see what my play looks like!), to giving smiles to strangers--it’s the little things that bring me joy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sparkles divider autolayout right */}
                <div className='autoLayoutRightAlignCenter gapb1b1MultiParagraph'>
                    {/* <HiSparkles style={{ width: '1rem', height: '1rem' }} /> */}
                    <HiSparkles style={{ fontSize: '20px' }} />
                    <VscSparkleFilled style={{ fontSize: '20px' }} />
                    <IoSparklesSharp style={{ fontSize: '20px' }} />
                </div>
                
                {/* Large flowing text autolayout down */}
                <div className='autoLayoutDownAlignTop gaph3h3' id='play'>
                    <div className='autoLayoutRightAlignCenter gapSmallTagInlineText'>
                        <h3>Beyond design, you’ll find me</h3>
                        <div class="hover-container">
                            <div class="hover-container-tag">
                                <Tag theme="pink" size="small" icon={FaUtensils} text="eating" />
                            </div>
                            <div class="popup-image eating">
                                <img src={aboutHero} alt="This is me!" className='image' style={{border: '3px solid var(--PINK-300)',}}/>
                            </div>
                        </div>
                    </div>
                    <div className='autoLayoutRightAlignCenter gapSmallTagInlineText'>
                        <h3>good food, playing volleyball, unlearning,</h3>
                    </div>
                    <div className='autoLayoutRightAlignCenter gapSmallTagInlineText'>
                        <div class="hover-container">
                            <div class="hover-container-tag">
                                <Tag theme="blue" size="small" icon={RiMusic2Fill} text="creating" />
                            </div>
                            <div class="popup-image creating">
                                <img src={aboutHero} alt="This is me!" className='image' style={{border: '3px solid var(--BLUE-300)',}}/>
                            </div>
                        </div>
                        <h3>vibe-y Spotify playlists,</h3>
                    </div>
                    <div className='autoLayoutRightAlignCenter gapSmallTagInlineText'>
                        <h3>doom-scrolling, cooking Samyang fire noodles,</h3>
                    </div>
                    <div className='autoLayoutRightAlignCenter gapSmallTagInlineText'>
                        <h3>gaming, going on</h3>
                        <div class="hover-container">
                            <div class="hover-container-tag">
                                <Tag theme="orange" size="small" icon={FaCar} text="adventures" />
                            </div>
                            <div class="popup-image adventures">
                                <img src={aboutHero} alt="This is me!" className='image' style={{border: '3px solid var(--ORANGE-300)',}}/>
                            </div>
                        </div>
                        <h3>with friends,</h3>
                    </div>
                    <div className='autoLayoutRightAlignCenter gapSmallTagInlineText'>
                        <h3>napping, sending my entire Tik Tok feed to</h3>
                    </div>
                    <div className='autoLayoutRightAlignCenter gapSmallTagInlineText'>
                        <h3>people, building puzzles,</h3>
                        <div class="hover-container">
                            <div class="hover-container-tag">
                                <Tag theme="primary-blue" size="small" icon={FaFlask} text="experimenting" />
                            </div>
                            <div class="popup-image experimenting">
                                <img src={aboutHero} alt="This is me!" className='image' style={{border: '3px solid var(--PRIMARY-BLUE-300)',}}/>
                            </div>
                        </div>
                    </div>
                    <div className='autoLayoutRightAlignCenter gapSmallTagInlineText'>
                        <h3>with things I probably shouldn’t, building DIY</h3>
                    </div>
                    <div className='autoLayoutRightAlignCenter gapSmallTagInlineText'>
                        <h3>models, playing piano, dancing in the kitchen,</h3>
                    </div>
                    <div className='autoLayoutRightAlignCenter gapSmallTagInlineText'>
                        <div class="hover-container">
                            <div class="hover-container-tag">
                                <Tag theme="green" size="small" icon={RiEmotionHappyLine} text="laughing" />
                            </div>
                            <div class="popup-image laughing">
                                <img src={aboutHero} alt="This is me!" className='image' style={{border: '3px solid var(--GREEN-300)',}}/>
                            </div>
                        </div>
                        <h3>and smiling (always!)</h3>
                    </div>
                </div>

                {/* Footnote */}
                <div className='autoLayoutRightAlignCenter' style={{gap: '0.5rem',}} >
                    <p>P.S. Thanks for stopping by</p>
                    <FaHeart />
                </div>

                <Footer />
            </div>
        </>
    )
}