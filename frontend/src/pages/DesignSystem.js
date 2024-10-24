import React, { useState } from 'react';

import Test from "../components/Test";
import Tag from "../components/Tag";
import NavTabs from "../components/NavTabs";
import Footer from '../components/Footer';
import Header from '../components/Header';
import CircleNumber from '../components/CircleNumber';

import { HiSparkles } from "react-icons/hi2";
import { IoBalloonSharp, IoHappySharp, IoSad, IoSparklesSharp, IoCloseSharp } from "react-icons/io5";
import { BsBarChartLineFill } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { RiEmotionHappyLine, RiMusic2Fill, RiEmotionUnhappyLine } from "react-icons/ri";
import { FaBookOpen, FaHeart, FaUtensils, FaFlask, FaLightbulb } from "react-icons/fa";
import { VscSparkleFilled } from "react-icons/vsc";
import { FaArrowRightLong, FaArrowLeftLong, FaClock, FaLocationArrow, FaCar } from "react-icons/fa6";
import { MdQuestionMark } from "react-icons/md";

import { routes } from "../routes/Routes";

// Page for testing components and design system

export default function DesignSystem() {
    const [activeTab, setActiveTab] = useState('Null'); // Default state is null (no tabs active)

    return(
        <>
            <Test />
            <h2>Design system page</h2>
            <br />
            <hr />

            <div style={{display: 'flex'}}>
                {/* Text styles */}
                <div>
                    <a href={routes.designSystem} className="logo">logo</a>
                    <p className="navInactive">navInactive</p>
                    <p className="navActive">navActive</p>
                    <h1>h1</h1>
                    <h2>h2</h2>
                    <h3>h3</h3>
                    <h4>h4</h4>
                    <h5>h5</h5>
                    <h6>h6</h6>
                    <p>b1</p>
                    <p className="b1Medium">b1Medium</p>
                    <a href='#'>b1-link</a>
                    <p className="b2">b2</p>
                    <p className="b3">b3</p>
                    <p className="b3Medium">b3Medium</p>
                </div>

                {/* Colors */}
                <div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--BLACK)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--GREY-400)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--GREY-100)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--WHITE)' }}></div>

                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--PRIMARY-BLUE-500)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--PRIMARY-BLUE-300)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--PRIMARY-BLUE-200)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--PRIMARY-BLUE-100)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--PRIMARY-BLUE-50)' }}></div>

                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--ORANGE-500)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--ORANGE-300)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--ORANGE-200)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--ORANGE-100)' }}></div>

                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--BLUE-500)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--BLUE-300)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--BLUE-200)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--BLUE-100)' }}></div>

                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--PINK-500)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--PINK-300)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--PINK-200)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--PINK-100)' }}></div>

                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--GREEN-500)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--GREEN-300)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--GREEN-200)' }}></div>
                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--GREEN-100)' }}></div>

                    <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--RED-500)' }}></div>
                </div>

                {/* Icons */}
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {/* Functional icons */}
                    <FaArrowRightLong />
                    <FaArrowLeftLong />
                    <IoCloseSharp />

                    <br />
                    {/* Other icons */}
                    <FaClock />
                    <FaLocationArrow />
                    <IoHappySharp />
                    <IoSad />

                    <br />
                    <IoIosStar />
                    <FaHeart style={{ fontSize: '20px' }} />
                    <FaUtensils />
                    <RiMusic2Fill />
                    <FaCar />
                    <FaFlask />
                    <RiEmotionHappyLine />
                    <RiEmotionUnhappyLine />

                    <br />
                    <FaLightbulb />
                    <FaBookOpen />
                    <MdQuestionMark />
                    <IoBalloonSharp />
                    <HiSparkles />
                    <IoSparklesSharp />
                    <VscSparkleFilled />
                    <BsBarChartLineFill />
                </div>
                
                {/* Tag components */}
                <div>
                    <Tag theme="primaryBlue" size="mini" icon={IoIosStar} text="collab" />
                    <Tag theme="orange" size="small" icon={FaHeart} text="Stacy" />
                    <Tag theme="blue" size="medium" icon={FaLightbulb} text="strategy" />
                    <Tag theme="primaryBlue" size="large" icon={RiEmotionHappyLine} text="people" />
                </div>

                {/* Navtabs component */}
                <div>
                    <NavTabs activeTab={activeTab} onTabChange={setActiveTab} />
                </div>
            </div>
            <br />

            {/* Footer and header components */}
            <Footer />
            <Header defaultActiveTab={'Design'} />

            {/* Project page components */}
            <CircleNumber />
            <CircleNumber number={5} colorTheme="green" />
        </>
    )
}