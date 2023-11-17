import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_2_FG.webp',
    'https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_3_FG.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 2000ms = 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className=' container'>
    <div className="slider-container">
      
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{
              transform: `translateX(${100 * index}%)`,
              transition: 'transform 1s ease-in-out',
            }}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageSlider;
