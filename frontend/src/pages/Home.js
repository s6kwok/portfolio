// import Test from "../components/Test"
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tag from "../components/Tag";
import { RiEmotionHappyLine } from "react-icons/ri";
import { BsBarChartLineFill } from "react-icons/bs";

export default function Home() {
    return(
        <>
            {/* <Test /> */}
            <Header defaultActiveTab={'Design'} />
            
            <div
            style={{
                height: '83vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '6.25rem',
                marginRight: '6.25rem',
                marginBottom: '2rem',
            }}
            >
                <div style={{ textAlign: 'center', }}>
                    <div
                        style={{
                            marginLeft: '12rem',
                            marginRight: '14rem',
                        }}
                    >
                        <h1>Hi, I’m Stacy!</h1>
                        {/* <h1>I bring people and data together to design impactful and elegant solutions.</h1> */}
                        <div
                            style={{
                                textAlign: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                paddingTop: '0.75rem',
                            }}
                        >
                            <h1 style={{paddingRight: '1rem',}}>I bring </h1>
                            <Tag theme="primaryBlue" size="medium" icon={RiEmotionHappyLine} text="people" />
                            <h1 style={{paddingRight: '1rem', paddingLeft: '1rem',}}> and </h1>
                            <Tag theme="orange" size="medium" icon={BsBarChartLineFill} text="data" />
                            <h1 style={{lineHeight: '5.75rem', paddingTop: '0.75rem',}}> together to design impactful and elegant solutions.</h1>
                        </div>
                        <br />
                        <p>Prev @Questrade, @Jam City, @LCBO</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}