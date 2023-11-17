// Your React component file, e.g., MyComponent.js

import React from 'react';
import './ServiceableComponent.css'; // Import your CSS file if you have one

const ServiceableComponent = () => {
  return (
    <div className="mainService">
      <h1>Serviceable cities</h1>
      <div className="subService">
        <div className="innerDiv">
          <ul>
            <li><a href="/car-rental/bangalore">Car Rental in Bangalore</a></li>
            <li><a href="/car-rental/hyderabad">Car Rental in Hyderabad</a></li>
            <li><a href="/car-rental/mumbai">Car Rental in Mumbai</a></li>
            <li><a href="/car-rental/delhi-ncr">Car Rental in Delhi-NCR</a></li>
            <li><a href="/car-rental/chennai">Car Rental in Chennai</a></li>
            <li><a href="/car-rental/pune">Car Rental in Pune</a></li>
            <li><a href="/car-rental/kolkata">Car Rental in Kolkata</a></li>
            <li><a href="/car-rental/ahmedabad">Car Rental in Ahmedabad</a></li>
          </ul>
        </div>
        <div className="innerDiv">
          <ul>
            <li><a href="/car-rental/Bhubaneswar">Car Rental in Bhubaneswar</a></li>
            <li><a href="/car-rental/Chandigarh">Car Rental in Chandigarh</a></li>
            <li><a href="/car-rental/Coimbatore">Car Rental in Coimbatore</a></li>
            <li><a href="/car-rental/Jaipur">Car Rental in Jaipur</a></li>
            <li><a href="/car-rental/Kochi">Car Rental in Kochi</a></li>
            <li><a href="/car-rental/Mangalore">Car Rental in Mangalore</a></li>
            <li><a href="/car-rental/Mysore">Car Rental in Mysore</a></li>
            <li><a href="/car-rental/Nagpur">Car Rental in Nagpur</a></li>

          </ul>
        </div>
        <div className="innerDiv">
          <ul>
            <li><a href="/car-rental/Surat">Car Rental in Surat</a></li>
            <li><a href="/car-rental/Tirupati">Car Rental in Tirupati</a></li>
            <li><a href="/car-rental/Trivandrum">Car Rental in Trivandrum</a></li>
            <li><a href="/car-rental/Vadodara">Car Rental in Vadodara</a></li>
            <li><a href="/car-rental/Vijayawada">Car Rental in Vijayawada</a></li>
            <li><a href="/car-rental/Vizag">Car Rental in Vizag</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceableComponent;
