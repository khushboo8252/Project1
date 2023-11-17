import React from 'react';
import Slider from 'react-slick';


const WhyRevSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const slides = [
    { id: 1, imageUrl: 'https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/home.png', heading: 'Home delivery & return', paragraph: 'One-time doorstep service, at your preferred location and time' },
    { id: 2, imageUrl: 'https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/price.png', heading: 'Flexible pricing plans', paragraph: 'Choose Unlimited kms or with fuel plans' },
    { id: 3, imageUrl: 'https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/maintained.png', heading: 'Well maintained cars', paragraph: 'Regular service & maintenance; Inspected before each trip' },
    { id: 4, imageUrl: 'https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/contact.png', heading: 'Flexible pricing plans', paragraph: 'Choose Unlimited kms or with fuel plan' },
  ];

  return (
    <div className="WhyRev-slider-container">
      <h2>Why Revv?</h2>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="WhyRevslick-slide">
            <div className="slide-content">
              <img
                src={slide.imageUrl}
                alt={`slide-${slide.id}`}
                className="slide-icon"
                style={{ width: '50px', height: '50px' }}
              />
              <div className="text-content">
                <h4>{slide.heading}</h4>
                <p>{slide.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
     
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
  
    </div>
  );
};

export default WhyRevSlider;
