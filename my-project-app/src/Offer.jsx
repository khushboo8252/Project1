import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OfferSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three images at a time
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  // Example data with 10 images and separate URLs
  const images = [
    { id: 1, imageUrl: 'https://revvselfdrivecar.s3.us-west-2.amazonaws.com/Flat+20%25+off_couponpage.png' },
    { id: 2, imageUrl: 'https://revvselfdrivecar.s3.us-west-2.amazonaws.com/offerpage_Flat+10%25+off_bgr+and+hyd.png' },
    { id: 3, imageUrl: 'https://revvselfdrivecar.s3.us-west-2.amazonaws.com/offer_5%25.png' },
    { id: 4, imageUrl: 'https://revvselfdrivecar.s3.us-west-2.amazonaws.com/Offer+10%25.png' },
    // Add more images as needed
  ];

  return (
    <div className="Offers-slider-container">
      <h2>Offers </h2>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="Offerslick-slide">
            <img
              src={image.imageUrl}
              alt={`slide-${image.id}`}
              className="Offerslick-image"
           
            />
         
         
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

export default OfferSlider;
