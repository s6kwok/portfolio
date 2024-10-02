import Tag from "../components/Tag";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { routes } from "../routes/Routes";

export default function NoPage() {
    return(
        <>
            <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                <div style={{ textAlign: 'center', }}>
                    <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                    }}
                    >
                        <Tag theme="primaryBlue" size="large" icon={RiEmotionUnhappyLine} text="Error 404" />
                        <h2>Page not found</h2>
                    </div>
                    <br />
                    <p>But thank you for visiting!</p>
                    <br />
                    <p>Back to <a href={routes.index}>home</a></p>
                </div>
            </div>
        </>
    )
}