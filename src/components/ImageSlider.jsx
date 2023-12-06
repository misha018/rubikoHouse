import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const [isHover, setIsHover] = useState(false);

    const timerRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHover(true);
     };
     
     const handleMouseLeave = () => {
        setIsHover(false);
     };

    const sliderStyles = {
        height: "100%",
        position: "relative",
    }

    const slideStyles = {
        width: "200%",
        height: "130%",
        marginLeft: "150px",
        marginRight: "auto",
        maxWidth: "1920px",
        paddingTop: "100px",
        marginTop: "2px",
        position: "relative",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "all 0.6s ease-out",
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "55px",
        color: "#fff",
        zIndex: 1, 
        cursor: "pointer",
    };

    const rightArrowStyles = {
        top: "90%",
        float: "right",
        right: "10px",
        fontSize: "95px",
        color: "#fff",
        zIndex: 1, 
        cursor: "pointer",
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex);
    }

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex);
    }, [currentIndex, slides]);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    useEffect(() => {
        if(timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            goToNext();
        }, 4000);

        return() => clearTimeout(timerRef.current);
    }, [goToNext])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <div style={sliderStyles}>
            <div>
                
            </div>
            <div style={slideStyles} className="sliderimg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link to = "/galerija/aluminijumske-kapije-i-ograde"><button className="dugme-slider" onClick={scrollToTop}>Galerija ›</button></Link>
                <p onClick={goToPrevious} className="leftarrow">‹</p>
                <p onClick={goToNext} className="rightarrow">›</p>
            </div>

            <div className="div-tackice">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} className="div-tackice-2" onClick={() => goToSlide(slideIndex)}>•</div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider;