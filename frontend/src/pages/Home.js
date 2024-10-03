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
import { FaArrowRightLong } from "react-icons/fa6";

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
                    <div>

                        {/* Hero main paragraph to be center of page */}
                        <div className='autoLayoutRightAlignLeft' style={{minHeight: '80vh', paddingBottom: '2.5rem', marginBottom: '1.5rem'}}>

                            {/* Hero container main content to change styling back to block */}
                            <div className='autoLayoutDownAlignCenter gaph1b1'>
                                <div className='autoLayoutDownAlignCenter gaph1h1'>
                                    <h1>Hi, I’m Stacy!</h1>

                                    {/* Line with tags */}
                                    <div className='autoLayoutRightAlignLeft gapLargeTagInlineText'>
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

                        {/* Hero footnote */}
                        <p>Check out my recent work below! ↓</p>
                    </div>

                    {/* Projects list */}
                    <div className='autoLayoutDownAlignTop gapFullPage projectsList'>

                        {/* Project list item content autolayout */}
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
                            <div className='autoLayoutDownAlignCenter gaph3b1' style={{maxWidth: '36%', marginLeft: 'auto', marginRight: 'auto',}}>

                                {/* Header and inline tag */}
                                <div>
                                    <h3>Accelerating <span style={{...projectPrimaryColor['blue'],}} >value discovery</span> for a mapping platform</h3>
                                </div>
                                
                                {/* Rest of paragraph */}
                                <p className='b2'>
                                    SnapPea Design (Product design, Agency)
                                </p>
                                <p>
                                    Strategically improving a platform that had never previously incorporated design, to enhance usability and accessibility
                                </p>
                                <FaArrowRightLong />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}