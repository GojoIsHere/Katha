import { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./adSlider.css"
const AdSlider = () => {
    // let n = 0;
    const [currentIndex,setCurrentIndex]=useState(0)
    const slides = [
        { image: "images/ad-photo1.jpg" },
        { image: "images/ad-photo2.png" },
        
        { image: "images/ad-photo4.png" },
        { image: "images/ad-photo5.jpg" }
    ]
    const handleprev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
       setCurrentIndex(newIndex)
    }
    const handleNext = () => {
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    setTimeout(() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
       setCurrentIndex(newIndex)
        
    },3000)

        
    
    return (
        <>
            {/* <div>
                {slides.map((item) => {
                    return (
                        <>
                            <img src={item.image} alt="" />
                        </>
                    )
                })}
            </div> */}
            <div className="ad-photo">
                <button onClick={handleprev} className="buttonPrev"><GrFormPrevious size={70}/></button>
                
                <img src={slides[currentIndex].image} alt="" width="900px" height="350px"/>
                <button onClick={handleNext} className="buttonNext">
                  <GrFormNext size={70}/>
                </button>
                
            </div>
        
        
        </>
    )
}
export default AdSlider;