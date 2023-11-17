// Your React component file, e.g., MyComponent.js

import React from 'react';
import './AnchorComponent.css'; // Import your CSS file if you have one

const AnchorComponent = () => {
  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <h2>Download the Revv app</h2>
        <div className="leftSubContainer">
          <div>
            <a href="https://www.apple.com/in/app-store/">App Store</a>
            <br />
            <br/>
            <a href="https://play.google.com/store/games?device=windows&utm_source=apac_med&hl=en-IN&utm_medium=hasem&utm_content=Jun1223&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Jun1223-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700076783011853_creativeid_662052581162_device_c&gclid=Cj0KCQiAr8eqBhD3ARIsAIe-buNoP2fdA3knPdNOVpJaZ_lis6pGQFQnpVRZOtIaOsEL5zrl3C3CdgoaAsjuEALw_wcB&gclsrc=aw.ds">Google Play</a>
          </div>
        </div>
      </div>
      <div className="rightContainer">
        <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/27/e0/6b/27e06b8e-7faf-1bfc-b384-e1b21c16b094/50219770-3218-4add-919d-562903a2a3f1_3.png/750x750bb.jpeg" alt="Image" />
      </div>
    </div>
  );
};

export default AnchorComponent;
