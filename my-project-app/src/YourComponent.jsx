import React from 'react';
import SearchForm from './SearchForm';
import ImageSlider from './ImageSlider';
import './YourComponent.css'; // Import your CSS file
import LoginSignup from './LoginSignup';

const YourComponent = () => {
  return (
    <div className="container">
      <div className="search-form">
        <SearchForm />
      </div>
      
      <div className="image-slider">
        <ImageSlider />
      </div>
    </div>
  );
};

export default YourComponent;
