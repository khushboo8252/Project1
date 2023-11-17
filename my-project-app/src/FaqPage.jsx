// FaqPage.js
import React from 'react';

const FaqPage = () => {
 
  return (
    
    <div className="faq-page">
      <div className="sidebar">
        <h2>Categories</h2>
        <ul>
          <li><a href="#category1">Category 1</a></li>
          <li><a href="#category2">Category 2</a></li>
        </ul>
      </div>

      <div className="faq-content">
        <h1>FAQs related to Car Revv</h1>

        <div id="category1" className="faq-category">
          <h2>Category 1</h2>
          <ul>
            <li>Q: How do I rent a car with Revv?</li>
            <li>Q: What types of cars does Revv offer?</li>
          </ul>
        </div>

        <div id="category2" className="faq-category">
          <h2>Category 2</h2>
          <ul>
            <li>Q: How do I extend my car rental period?</li>
            <li>Q: Are there any age restrictions for renting a car?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
