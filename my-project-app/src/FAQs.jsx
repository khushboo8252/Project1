import React from 'react';
import './App.css'; // Import the CSS file

const FaqsComponent = () => {
  return (
    <div className="faqs-container">
      <div>
        <h1>FAQs</h1>
      </div>
      <div className="faqs-section">
        <div className="faq-item">
          <h2>Is there a speed limit?</h2>
          <p>Revv allows up to 125 km/hr. However, it is 80 km/hr in a few cities where some cars might be equipped with speed governors as per government directives. Revv strictly advises to follow local speed limits</p>
        </div>
        <hr />
        <div className="faq-item">
          <h2>Can I extend/ cancel/ modify?</h2>
          <p>Yes, extensions are possible subject to availability & charges. Cancellations & modifications will attract nominal charges as per our policy.</p>
        </div>
        <hr />
        <div className="faq-item">
          <h2>Booking criteria & documents?</h2>
          <p>Min. 21 years old, have a valid original government ID (Aadhar, Passport, or PAN only) and a valid driving license for “Light Motor Vehicles,” which is min. 1 year old at the time of starting the trip.</p>
        </div>
        <hr />
        <div className="faq-item">
          <h2>Are there any restricted areas?</h2>
          <p>Leh/Ladhakh, Spiti Valley & Kaza/Nako regions are not permitted to take Revv cars. The customer will be fully liable for any damages incurred to the car in that region.</p>
        </div>
      </div>
    </div>
  );
};

export default FaqsComponent;
