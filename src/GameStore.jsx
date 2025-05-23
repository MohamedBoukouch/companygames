import { FaDownload, FaStar, FaSearch, FaBars, FaMoon, FaSun, FaRobot } from 'react-icons/fa';
import { IoIosPhonePortrait, IoMdClose } from 'react-icons/io';
import { BsController } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const GameStore = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const navigate = useNavigate();

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

  const games = [
    {
      id: 1,
      title: "Fc Mobile 24",
      version: "7.20",
      latest: "4",
      size: "90.00 MO",
      rating: 4.8,
      downloads: "80M+",
      platforms: ["ANDROID", "IOS"],
      image: "/src/assets/FcMobile/FcMobile.png",
      category: "FootBall"
    },
    {
      id: 2,
      title: "GTA 5 Mobile",
      version: "4.49.45",
      latest: "2.41",
      size: "1.2GB",
      rating: 4.5,
      downloads: "10M+",
      platforms: ["ANDROID", "IOS"],
      image: "/src/assets/gta5/gta5.jpeg",
      category: "Action"
    },
    {
      id: 3,
      title: "Doom",
      version: "3.20.1",
      latest: "1.20.1",
      size: "50MB",
      rating: 4.7,
      downloads: "200M+",
      platforms: ["ANDROID", "IOS", "WINDOWS"],
      image: "/src/assets/Doom/doom.webp",
      category: "FPS"
    }
  ];

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [...new Set(games.map(game => game.category))];

  const navigateToGame = (gameId) => {
    navigate(`/game/${gameId}`);
  };

  const handleDownloadClick = (e, game) => {
    e.stopPropagation();
    setSelectedGame(game);
    setShowVerification(true);
  };

  const closeModal = () => {
    setShowVerification(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-indigo-900'} text-white p-4 shadow-lg sticky top-0 z-50`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <BsController className="text-2xl" />
            <h1 className="text-xl font-bold">GameHub</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full focus:outline-none hover:bg-opacity-20 hover:bg-white transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon />}
            </button>
            
            {isMobile ? (
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-2xl focus:outline-none p-1 hover:bg-opacity-20 hover:bg-white rounded transition"
              >
                {isMenuOpen ? <IoMdClose /> : <FaBars />}
              </button>
            ) : (
              <>
                <div className="relative w-64 mx-4">
                  <input
                    type="text"
                    placeholder="Search games..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full py-2 px-4 pr-10 rounded-full ${darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'text-gray-800'} focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-indigo-500' : 'focus:ring-indigo-300'}`}
                  />
                  <FaSearch className="absolute right-3 top-3 text-gray-500" />
                </div>
                <nav className="hidden md:block">
                  <ul className="flex space-x-6">
                    <li className="hover:text-indigo-200 cursor-pointer transition">Home</li>
                    <li className="hover:text-indigo-200 cursor-pointer transition">Categories</li>
                    <li className="hover:text-indigo-200 cursor-pointer transition">Top Games</li>
                  </ul>
                </nav>
              </>
            )}
          </div>
        </div>

        {isMobile && isMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-700' : 'bg-indigo-800'} mt-2 p-4 rounded-lg`}>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full py-2 px-4 pr-10 rounded-full ${darkMode ? 'bg-gray-600 text-white' : 'text-gray-800'} focus:outline-none`}
              />
              <FaSearch className="absolute right-3 top-3 text-gray-500" />
            </div>
            <nav>
              <ul className="space-y-3">
                <li className={`hover:text-indigo-200 cursor-pointer py-1 border-b ${darkMode ? 'border-gray-600' : 'border-indigo-700'} transition`}>Home</li>
                <li className={`hover:text-indigo-200 cursor-pointer py-1 border-b ${darkMode ? 'border-gray-600' : 'border-indigo-700'} transition`}>Categories</li>
                <li className="hover:text-indigo-200 cursor-pointer py-1 transition">Top Games</li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Categories Filter */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <button className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow transition whitespace-nowrap`}>
              All Games
            </button>
            {categories.map((category, index) => (
              <button 
                key={index}
                className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow transition whitespace-nowrap`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid - Full width images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <div 
              key={game.id} 
              className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer flex flex-col`}
              onClick={() => navigateToGame(game.id)}
            >
              {/* Image container - full width with no margins */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-xs">
                  {game.size}
                </div>
              </div>
              
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} truncate`}>{game.title}</h3>
                  <div className={`flex items-center ${darkMode ? 'bg-indigo-900' : 'bg-indigo-100'} text-indigo-800 px-2 py-1 rounded-md text-xs`}>
                    <FaStar className="mr-1 text-yellow-500" />
                    {game.rating}
                  </div>
                </div>
                
                <div className="flex justify-between text-sm mb-3">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>v{game.version}</span>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{game.downloads}</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-sm mb-1">
                    <span className={`mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Latest: {game.latest}</span>
                    <div className="flex flex-wrap gap-1">
                      {game.platforms.map((platform, index) => (
                        <span 
                          key={index} 
                          className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-auto">
                  <button 
                    className={`${darkMode ? 'bg-indigo-700 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-4 py-2 rounded-lg flex items-center transition`}
                    onClick={(e) => handleDownloadClick(e, game)}
                  >
                    <FaDownload className="mr-2" />
                    Download
                  </button>
                  <button 
                    className={`${darkMode ? 'text-indigo-300 hover:text-indigo-200' : 'text-indigo-600 hover:text-indigo-800'} flex items-center text-sm`}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Device selection logic here
                    }}
                  >
                    <IoIosPhonePortrait className="mr-1" />
                    Device
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white py-8 mt-12`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <BsController className="mr-2" />
                GameHub
              </h3>
              <p className="text-gray-400">The ultimate destination for mobile gaming enthusiasts.</p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Popular Games</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">New Releases</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Categories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-2">Subscribe to get updates on new releases.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className={`px-4 py-2 rounded-l-lg w-full focus:outline-none ${darkMode ? 'bg-gray-700 text-white' : 'text-gray-800'}`}
                />
                <button className={`${darkMode ? 'bg-indigo-700 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} px-4 py-2 rounded-r-lg transition`}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-800'} mt-8 pt-6 text-center text-gray-400`}>
            <p>© {new Date().getFullYear()} GameHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

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
          <p className="mb-4 text-center">Complete one offer below to download {selectedGame?.title}</p>
          
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

export default GameStore;