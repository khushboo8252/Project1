// Your React component file, e.g., MyComponent.js

import React from 'react';
import './RevvLi.css'; // Import your CSS file if you have one

const RevvLiComponent = () => {
  return (
    <div className="RevvLiContainer">
      <h1 className='why-heading'>Why Revv</h1>
      <p className='para-subscription'>When you choose a car subscription with Revv, you can enjoy:</p>
      <ul className='revvLi'>
        <li>Flexible Rentals – You decide whether you’d like to rent a car for an hour, a week,
             a month, or on a daily basis.</li>
        <li>Several Options – Pick from our wide range of classy hatchbacks, comfortable sedans and spacious SUVs.</li>
        <li>All-India Permits – Revv cars come with an All India Tourist Permit, so you can drive from
             Kashmir to Kanyakumari without any worries.</li>
        <li>Unending Opportunities – The cars you rent from Revv can be used for trips out of the city 
            or for daily travels through town. Revv also provides cars for pick up and drop off 
            services at airports and bus and train stations</li>
      </ul>
    </div>
  );
};

export default RevvLiComponent;
