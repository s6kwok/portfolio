import Tag from "../components/Tag";

import { RiEmotionUnhappyLine } from "react-icons/ri";

import { routes } from "../routes/Routes";

// 404 error page not found

export default function NoPage() {
    return(
        <>
            {/* Whole page autolayout vertical center */}
            <div className="autoLayoutRightAlignCenter" style={{ minHeight: '100vh', }}>

                {/* Autolayout content down */}
                <div className='autoLayoutDownAlignCenter gaph2b1' style={{ textAlign: 'center', }}>

                    {/* Autolayout header and tag right */}
                    <div className="autoLayoutRightAlignCenter gapLargeTagInlineText">
                        <Tag theme="primaryBlue" size="large" icon={RiEmotionUnhappyLine} text="Error 404" />
                        <h2>Page not found</h2>
                    </div>

                    {/* Autolayout text down */}
                    <div className='autoLayoutDownAlignTop gapb1b1MultiParagraph'>
                        <p>Oops! You've hit a dead end ahhh :( </p>
                        <p>Back to <a href={routes.index}>home</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}