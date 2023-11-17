// In your JSX file

import React from 'react';
import './App.css'; // Import your CSS file
import Slider from 'react-slick';

const CustomerComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="main-container">
      <div className="first-div">
        <h1>Happy Customers</h1>
      </div>
      <Slider {...settings}>
        <div className="sub-div" style={{width:"300px",height:"450px"}}>
          <h2 className='heading'>Prateek Srivastava</h2>
          <p className='para'>For many, buying a car is a major investment, second only to investing in real estate. 
            Car purchase satisfaction surveys are a great way to receive feedback from valued customers.
          </p>
        </div>
        <div className="sub-div">
          <h2>Roshan Raval</h2>
          <p>  It can help you ensure that you build sustainable long-term relationships with customers, 
             helping them fall in love with the cars you sell and you as a company.
          </p>
        </div>
        <div className="sub-div">
          <h2>Sanjib Sarkar</h2>
          <p>The survey will help you to understand what makes your company stand-out for customers who 
            are ready to make an investment, and what you can do to make them happier.
          </p>
        </div>
        <div className="sub-div">
          <h2>Arijit Sarkar</h2>
          <p>For many, buying a car is a major investment, second only to investing in real estate. 
            Car purchase satisfaction surveys are a great way to receive feedback from valued customers.
          </p>
        </div>
        <div className="sub-div">
          <h2>Vijay S</h2>
          <p> It can help you ensure that you build sustainable long-term relationships with customers, 
             helping them fall in love with the cars you sell and you as a company.
          </p>
        </div>
        <div className="sub-div">
          <h2>Rohit Ray</h2>
          <p>The survey will help you to understand what makes your company stand-out for customers who 
            are ready to make an investment, and what you can do to make them happier.
          </p>
        </div>
        <div className="sub-div">
          <h2>Sanjeet Rawat</h2>
          <p>For many, buying a car is a major investment, second only to investing in real estate. 
            Car purchase satisfaction surveys are a great way to receive feedback from valued customers.
          </p>
        </div>
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

export default CustomerComponent;
