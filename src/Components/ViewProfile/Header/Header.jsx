// Header.js
import React, { useState } from 'react';
import jobLogo from '../../assets/JobsownLogo.png';
import ltLogo from '../Home/Images/LT-LOGO.png';
import ProfileDropdown from './ProfileDropdown'; // Import your ProfileDropdown component

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-white py-4 px-6 shadow-md w-1440 relative">
      <div className="flex items-center">
        <img src={jobLogo} alt="Logo 1" className="h-12 w-auto mr-4" style={{ marginLeft: '50px' }} />
      </div>

      <div className="flex items-center">
        <button className="text-gray-800 font-semibold mr-4" style={{ marginRight: '30px' }}>
          Help
        </button>
        <div className="relative">
          <button onClick={toggleProfile}>
            <img src={ltLogo} alt="Logo 2" className="h-12 w-auto" style={{ marginRight: '50px' }} />
          </button>
          {isProfileOpen && <ProfileDropdown />}
        </div>
      </div>
    </nav>
  );
};

export default Header;
