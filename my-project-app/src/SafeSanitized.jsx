// Your React component file, e.g., MyComponent.js

import React from 'react';
import './SafeSanitized.css'; // Import your CSS file if you have one

const SafeComponent = () => {
  return (
    <div className="SafeContainer">
      <h1 className='sanitizedCar'>Safe, Sanitized Car Subscription You Can Count On</h1>
      <p className='car-subscription'>Car subscription from Revv provides the flexibility of having a car anytime you want,
         as well as the assurance of a sanitized and virus free vehicle for your own self drive.
          The car sanitization process encompasses all the preventive hygiene best practices directed
           by the World Health Organization (WHO) and is diligently conducted for each vehicle delivered 
           to the car subscribers. The safety measures that are implemented consist of:</p>
      <ul className='safeLi'>
        <li>Industrial standards sanitization and disinfection before delivery for all surfaces of the vehicle</li>
        <li>Drivers wear Personal Protective Equipment (PPE) including masks and gloves while delivering the cars</li>
        <li>Paperless agreements for minimum contact</li>
        <li>Upon return, digital receipt sent to the customer’s e-mail.</li>
      </ul>
    </div>
  );
};

export default SafeComponent;
