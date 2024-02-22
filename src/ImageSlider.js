import { useState } from "react";
import "./ImageSliderStyle.css";

//Modified code from Monsterlessons Academy: https://youtu.be/SK9AlIbexOE?si=m4WICktHhxupVpV2

//primary goal: to be able to encorporate another component with the task list

const ImageSlider = ({ slides }) => {
  //initialize variables to know which slide
  const [currentIndex, setCurrentIndex] = useState(0);

  //Logic for the left arrow, if the slide is on the first slide, the program wraps
  //around to the last slide
  const goToPrevious = () => {
    //create a boolean that says True if the current index is the firstslide
    const isFirstSlide = currentIndex === 0;
    //calculate the new index
    //if the current index is the first slide, then go to length-1
    //else go to the previous slide
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //when the dot is clicked, to go to the indexed slide
  const goToSlide = (slideIndex) => {
    console.log("Going to slide index: ", slideIndex);
    setCurrentIndex(slideIndex);
  };

  //SlideComponent, it takes in slides and currentIndex as the props, 
  //then creates backgroundImageStyle with the url. SlideComponent 
  //returns a div with the className "slide-styles" and style as what's defined above
  const SlideComponent = ({ slides, currentIndex }) => {
    const backgroundImageStyle = {
      backgroundImage: `url(${slides[currentIndex].url})`,
    };

    return <div className="slide-styles" style={backgroundImageStyle}></div>;
  };

  //where the component is pieced together
  //Create the classNames so the css information can be applied
  //the map function goes through the array and ties a key, goToSlide(), and classname to
  //each dot
  return (
    <div className="sliderStyles">
      <div>
        <div onClick={goToPrevious} className="left-arrow-styles">
          ❰
        </div>
        <div onClick={goToNext} className="right-arrow-styles">
          ❱
        </div>
        <h2>Quality Tasks Are Tied To:</h2>
        <SlideComponent slides={slides} currentIndex={currentIndex} />
        <div className="dots-container-styles">
          {slides.map((slide, slideIndex) => (
            <div
              className={`dot-style ${currentIndex === slideIndex ? 'selected' : ''}`}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
