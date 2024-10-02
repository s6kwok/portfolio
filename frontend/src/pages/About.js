// import Test from "../components/Test"
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
    return(
        <>
            {/* <Test /> */}
            <Header defaultActiveTab={'About'} />
            <h2>About page</h2>
            <Footer />
        </>
    )
}