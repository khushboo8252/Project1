import React from 'react';
import './Journey.css'; // Import your CSS file

const JourneyComponent = () => {
  return (
    <div className="parent">
      <h1 className='journey'>Our journey so far</h1>
      <div className="child">
        <div className="subChild">
          <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/revvers.png" alt="Image 1" />
          <h2>1 Mn +</h2>
          <p>Happy Revvers</p>
        </div>
        <div className="subChild">
          <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/cities.png" alt="Image 2" />
          <h2>22+ cities</h2>
          <p>Across India</p>
        </div>
        <div className="subChild">
          <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/travel.png" alt="Image 3" />
          <h2>50 Mn +</h2>
          <p>Kms travelled</p>
        </div>
        <div className="subChild">
          <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/review.png" alt="Image 4" />
          <h2>4.8/5</h2>
          <p>20K reviewers</p>
        </div>
      </div>
    </div>
  );
};

export default JourneyComponent;