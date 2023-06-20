import React, { useState, useEffect } from "react";
import {BiArrowToRight} from "react-icons/bi"
import {BiArrowToLeft} from "react-icons/bi"

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/assets/Image/w-1.jpg",
    "/assets/Image/w-2.jpg",
    "/assets/Image/w-3.jpg",
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative flex justify-center items-center mt-28 mb-28 flex-col">
      <div className="indicator absolute -top-10 left-34 flex items-center justify-center mb-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={` h-2 w-10 rounded-full mx-2  ${index === activeIndex ? "bg-blue-800" : "bg-gray-400"}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
      <div className="py-2 px-2 rounded-lg shadow-lg shadow-black  bg-gray-200">
        <div className="flex items-center justify-center">
          <img src={images[activeIndex]} alt={`masjid ${activeIndex + 1}`} />
        </div>
      </div>
      <div className="justify-center mt-2 absolute -top-14 right-44 hidden lg:block ">
        <button
          className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-l"
          onClick={handlePrev}
        >
          <BiArrowToLeft></BiArrowToLeft>
        </button>
        <button
          className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-r"
          onClick={handleNext}
        >
          <BiArrowToRight></BiArrowToRight>
        </button>
      </div>
    </section>
  );
};

export default Banner;
