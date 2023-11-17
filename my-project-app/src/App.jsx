import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar'
import LoginForm from './LoginForm'
import ImageSlider from './ImageSlider'
import OfferSlider from './Offer'
import FeaturedSlider from './Featured'
import WhyRevSlider from './WhyRev'
import FaqsComponent from './FAQs'
import CustomerComponent from './Customer'
import AnchorComponent from './AnchorComponent'
import JourneyComponent from './JourneyComponent'
import ServiceableComponent from './ServiceableComponent'
import ThreeDivsComponent from './ThreeDivsComponent'
import SafeComponent from './SafeSanitized'
import SelfDriveComponent from './Self-Drive'
import AffordableComponent from './Affordable'
import RevvLiComponent from './RevvLi'
import FavouriteComponent from './FavouriteCar'
import NetworkComponent from './ExtensiveNetwork'
import RentalCarComponent from './RentalCar'


function App() {
  const [searchParams, setSearchParams] = useState({ city: '', startDate: '', endDate: '' });
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  const handleSearch = ({ city, startDate, endDate }) => {
    setSearchParams({ city, startDate, endDate });
  };

 
  const handleLoginSuccess = () => {
    // Perform any actions you need upon successful login
    // For now, we'll just hide the login form
    setLoginFormVisible(false);
  };

  const handleCloseLoginForm = () => {
    // Set the state to hide the login form
    setLoginFormVisible(false);
  };

  

  return (
    <>
    <Router> 
      <div>
        <Navbar />
         <Routes>
         <Route path="/" element={<Navbar />} />
         </Routes> 
      </div>
    </Router>
    
    <div className="nav-links">
          <li>
          {isLoginFormVisible && <LoginForm onClose={handleCloseLoginForm} onLoginSuccess={handleLoginSuccess} />}
          </li>
        </div>
        <ImageSlider/>
       
        <div>
      <FeaturedSlider/>
    </div>
    <div>
      <OfferSlider/>
    </div>
    <div>
      <WhyRevSlider/>
    </div>
    <div>
      <FaqsComponent/>
    </div>
    <div>
      <CustomerComponent/>
    </div>
    <div>
      <AnchorComponent/>
    </div>
    <div>
      <JourneyComponent/>
    </div>
    <div>
      <ServiceableComponent/>
    </div>
    <div>
      <ThreeDivsComponent/>
    </div>
    <div>
      <SafeComponent/>
    </div>
    <div>
      <SelfDriveComponent/>
    </div>
    <div>
      <AffordableComponent/>
    </div>
    <div>
      <RevvLiComponent/>
    </div>
    <div>
      <FavouriteComponent/>
    </div>
    <div>
      <NetworkComponent/>
    </div>
    <div>
      <RentalCarComponent/>
    </div>
    </>
  )
}

export default App
