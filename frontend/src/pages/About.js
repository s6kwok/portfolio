// import Test from "../components/Test"
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tag from "../components/Tag";
import { FaHeart, FaUtensils, FaFlask } from "react-icons/fa";
import hero from '../assets/about/hero.png';
import { RiEmotionHappyLine, RiMusic2Fill } from "react-icons/ri";
import { FaCar } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { VscSparkleFilled } from "react-icons/vsc";
import { IoSparklesSharp } from "react-icons/io5";

export default function About() {
    const wrapTags = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        margin: '1rem auto',
    };

    return(
        <>
            {/* <Test /> */}
            <Header defaultActiveTab={'About'} />
            
            {/* Main section container */}
            <div
            style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                margin: '1.15rem auto',
                // paddingLeft: '1.25rem',
                // paddingReft: '1.25rem',
                maxWidth: '70%',
            }}
            >
                {/* Autolayout of content */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '4.5rem',
                        // marginLeft: '10rem',
                        // marginRight: '10rem',
                    }}
                >
                    {/* Left Section with photo */}
                    <div>
                        <div
                            style={{
                            padding: '1.75rem 1.75rem',
                            borderRadius: '1.5rem',
                            backgroundColor: 'var(--PRIMARY-BLUE-200)',
                            border: '3px solid var(--PRIMARY-BLUE-300)',
                            }}
                        >
                            <img
                            src={hero}
                            alt="Stacy Kwok"
                            style={{
                                display: 'block',
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
                            <h3>Hi internet! I'm </h3>
                            <Tag theme="orange" size="small" icon={FaHeart} text="Stacy" />
                        </div>

                        {/* Paragraph */}
                        <div style={{ marginTop: '1.1rem', }}>
                            <p>
                                Nice to meet you! I’m a recent grad from the University of Waterloo, who’s interested in designing solutions that <strong>inspire curiosity</strong> and make technology feel <strong>approachable</strong>.
                            </p>
                            <br />
                            <p>
                                I first stumbled into product design unexpectedly while giving back to the community, joining a team of students to build tech for non-profits. And I’ve been designing ever since!
                            </p>
                            <br />
                            <p>
                                I thrive amongst <strong>ambition, humility, and community</strong> (if you’re curious of what that means, I would love to share!). I’m passionate about <strong>creating simplicity amongst complexity and chaos</strong>, and empowering informed user decisions. 
                            </p>
                            <br />
                            <p>
                                The simplicity I love, translates outside of design too! From indulging in child-like play (<a href='#'>scroll down</a> to see what my play looks like!), to giving smiles to strangers--it’s the little things that bring me joy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{...wrapTags, margin: '3.5rem auto 5.5rem auto',}} >
                {/* <HiSparkles style={{ width: '1rem', height: '1rem' }} /> */}
                <HiSparkles style={{ fontSize: '20px' }} />
                <VscSparkleFilled style={{ fontSize: '20px' }} />
                <IoSparklesSharp style={{ fontSize: '20px' }} />
            </div>
            
            <div>
                <div style={{...wrapTags,}} >
                    <h3>Beyond design, you’ll find me</h3>
                    <Tag theme="pink" size="small" icon={FaUtensils} text="eating" />
                </div>
                <div style={wrapTags} >
                    <h3>good food, playing volleyball, unlearning,</h3>
                </div>
                <div style={wrapTags} >
                    <Tag theme="blue" size="small" icon={RiMusic2Fill} text="creating" />
                    <h3>vibe-y Spotify playlists,</h3>
                </div>
                <div style={wrapTags} >
                    <h3>doom-scrolling, cooking Samyang fire noodles,</h3>
                </div>
                <div style={wrapTags} >
                    <h3>gaming, going on</h3>
                    <Tag theme="orange" size="small" icon={FaCar} text="adventures" />
                    <h3>with friends,</h3>
                </div>
                <div style={wrapTags} >
                    <h3>napping, sending my entire Tik Tok feed to</h3>
                </div>
                <div style={wrapTags} >
                    <h3>people, building puzzles,</h3>
                    <Tag theme="primary-blue" size="small" icon={FaFlask} text="experimenting" />
                </div>
                <div style={wrapTags} >
                    <h3>with things I probably shouldn’t, building DIY</h3>
                </div>
                <div style={wrapTags} >
                    <h3>models, playing piano, dancing in the kitchen,</h3>
                </div>
                <div style={wrapTags} >
                    <Tag theme="green" size="small" icon={RiEmotionHappyLine} text="laughing" />
                    <h3>and smiling (always!)</h3>
                </div>
            </div>

            <div style={{...wrapTags, gap: '6px', margin: '7rem auto 6rem auto',}} >
                <p>P.S. Thanks for stopping by</p>
                <FaHeart />
            </div>

            <Footer />
        </>
    )
}