// Your React component file, e.g., MyComponent.js

import React from 'react';
import './ThreeDivsComponent.css'; // Import your CSS file if you have one

const ThreeDivsComponent = () => {
  return (
    <div className="component">
      <div className="firstDiv">
        <img className="revImage"src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/logo/revv-logo.png" alt="Image" />
        <p>© 2023 Primemover Mobility Technologies Pvt Ltd.
             All rights reserved</p>
      </div>
      <div className="middleDiv">
        <ul>
          <li>Home</li>
          <li>FAQs</li>
          <li>Policy</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="lastDiv">
        <h2>Social</h2>
        <ul>
          <li><img className="liImage"src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/facebook_hover.png" alt="facbook" /></li>
          <li><img className="liImage"src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/twitter_hover.png" alt="twitter" /></li>
          <li><img className="liImage"src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/instagram_hover.png" alt="instagram" /></li>
          <li><img className="liImage"src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/youtube_hover.png" alt="youtube" /></li>
          <li><img className="liImage"src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/linkedIn_hover.png" alt="linkdin" /></li>
        </ul>
        <h3>Download the Revv App!</h3>
        <a href="https://www.apple.com/in/app-store/"> Download App Store</a>
        <a href="https://play.google.com/store/games?device=windows&utm_source=apac_med&hl=en-IN&utm_medium=hasem&utm_content=Jun1223&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Jun1223-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700076783011853_creativeid_662052581162_device_c&gclid=Cj0KCQiAr8eqBhD3ARIsAIe-buNoP2fdA3knPdNOVpJaZ_lis6pGQFQnpVRZOtIaOsEL5zrl3C3CdgoaAsjuEALw_wcB&gclsrc=aw.ds"> Download Google Play</a>
      </div>
    </div>
  );
};

export default ThreeDivsComponent;
