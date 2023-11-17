// Your React component file, e.g., MyComponent.js

import React from 'react';
import './RentalCar.css'; // Import your CSS file if you have one

const RentalCarComponent = () => {
  return (
    <div className="RentalContainer">
      <h1 className='rent-heading'>Rent a Car</h1>
      <p className='para-rent'>To rent one of our sanitized cars, you can follow these simple steps:</p>
      <ul className='rentLi'>
        <li>Download the Revv app from the Apple App Store or Google Play Store.</li>
        <li>Pick your favourite car and let us know when and where you need it.</li>
        <li>The car will be delivered to your doorstep at the date and time promised.</li>
        <li>Start the engine and enjoy your road trip without worrying about the kilometres.</li>
        <li>Let us know where we need to pick up the car from once you’re done.</li>
        <li>You’ll receive an invoice in your email 48 hours after your trip is completed.</li>
        <li>Use the app to reschedule or cancel bookings as required.</li>
      </ul>
      <p className='para-rent'>With Revv, exploring and travelling has become easy, convenient and completely hassle-free unlike in cabs & taxis!</p>
    </div>
  );
};

export default RentalCarComponent;
