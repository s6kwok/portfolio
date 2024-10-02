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
                height: '68vh',
                display: 'flex',
                alignItems: 'center',
                marginLeft: '6.25rem',
                marginRight: '6.25rem',
                paddingLeft: '1.25rem',
                paddingReft: '1.25rem',
                marginBottom: '6.5rem',
            }}
            >
                <div>
                    <h1>Hi, I’m Stacy!</h1>
                    <div
                    style={{
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        paddingTop: '0.75rem',
                    }}
                    >
                        {/* First line */}
                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
                            <h1 style={{ paddingRight: '1rem' }}>I bring </h1>
                            <Tag theme="primaryBlue" size="large" icon={RiEmotionHappyLine} text="people" />
                            <h1 style={{ paddingRight: '1rem', paddingLeft: '1rem' }}> and </h1>
                            <Tag theme="orange" size="large" icon={BsBarChartLineFill} text="data" />
                            <h1 style={{ paddingLeft: '1rem' }}> together</h1>
                        </div>
                        {/* Second line */}
                        <div style={{ paddingTop: '0.65rem', paddingBottom: '2.25rem' }}>
                            <h1 style={{ margin: 0 }}>to design impactful and elegant solutions.</h1>
                        </div>
                    </div>
                    <p>Prev @Questrade, @Jam City, @LCBO</p>
                </div>
            </div>
            <div
                style={{
                    alignItems: 'center',
                    marginLeft: '6.25rem',
                    marginRight: '6.25rem',
                    paddingLeft: '1.25rem',
                    paddingReft: '1.25rem',
                    marginBottom: '1.75rem',
                }}
            >
                <p>Check out my recent work below! ↓</p>
            </div>

            <Footer />
        </>
    )
}