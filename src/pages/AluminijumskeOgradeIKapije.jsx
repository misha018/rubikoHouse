import { Fragment } from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer";
import { useState } from "react";



const AluOgrade = ( { imageUrl }) => {

    const [isShown, setIsShown] = useState(false);

    const mouseOver = () => {
        setIsShown(true);
    };
    const mouseOut = () => {
        setIsShown(false);
    }

    const [isFullScreen, setIsFullScreen] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);

    const FullScreen = () => {
        setFullScreen(true);
    }

    const CloseFullScreen = () => {
        setFullScreen(false);
    }

    const openFullScreen = () => {
        setIsFullScreen(true);
    }
    const closeFullScreen = () => {
        setIsFullScreen(false);
    }
    return (
        <Fragment>
            <Navigation />
            <div className="div-alu">
                <h2>Aluminijumske kapije i ograde - nasi radovi</h2>
                <img src="/images/aluminijum1.png" alt="" className="slika-galerija" onMouseOver={openFullScreen}/>
                {isFullScreen && (
                    <div className="fullscreen-overlay" onMouseOut={closeFullScreen}>
                        <div className="fullscreen-modal">
                            <img src="/images/aluminijum1.png" alt="Full screen" className="fullscreen-img"/>
                                <button onClick={closeFullScreen}>Close</button>
                        </div>
                    </div>
      )}
                
                <img src="/images/aluminijum4.jpg" alt="" className="slika-galerija" onMouseOver={FullScreen}/>
                {fullScreen && (
                    <div className="fullscreen-overlay" >
                        <div className="fullscreen-modal">
                            <img src="/images/aluminijum4.jpg" alt="Full screen" className="fullscreen-img"/>
                                <button onClick={CloseFullScreen}>Close</button>
                        </div>
                    </div>
                )}
                <div>
                
                <img src="/images/aluminijum4.jpg" alt="" className="slika-galerija"/>
                <img src="/images/aluminijum1.png" alt="" className="slika-galerija" onClick={openFullScreen}/>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default AluOgrade;