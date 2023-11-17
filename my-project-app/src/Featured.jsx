import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const FeaturedSlider = () => {
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
    { id: 1, imageUrl: 'https://revvselfdrivecar.s3.us-west-2.amazonaws.com/new20.png' },
    { id: 2, imageUrl: 'https://revvselfdrivecar.s3.us-west-2.amazonaws.com/Feature_Flat+10%25+off_bgr+and+hyd.png' },
    { id: 3, imageUrl: 'https://revvselfdrivecar.s3.us-west-2.amazonaws.com/Featured+2+days.png' },
    { id: 4, imageUrl: 'https://revvselfdrivecar.s3.us-west-2.amazonaws.com/Featured+3+days.png' },
    { id: 5, imageUrl: 'https://revvselfdrivecar.s3.us-west-2.amazonaws.com/10+days.png' },
    { id: 6, imageUrl: 'https://revvselfdrivecar.s3.us-west-2.amazonaws.com/15+days.png' },
    { id: 7, imageUrl: 'https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_01-min.jpg' },
    { id: 8, imageUrl: 'https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_02-min.jpg' },
    { id: 9, imageUrl: 'https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_03-min.jpg' },
    { id: 10, imageUrl: 'https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_04-min.jpg' },
  ];

  return (
    <div className="featured-slider-container">
      <h2>Featured</h2>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="Featuredslick-slide">
            <img
              src={image.imageUrl}
              alt={`slide-${image.id}`}
              className="slick-image"
             
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

export default FeaturedSlider;
