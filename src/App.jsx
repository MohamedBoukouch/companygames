import React, { useState, useEffect } from 'react';
import { 
  FaDownload, FaMoon, FaSun, FaLanguage, FaGamepad, 
  FaCoins, FaGem, FaUsers, FaMobileAlt, FaBars, 
  FaTimes, FaStar, FaGooglePlay, FaAndroid, FaApple,
  FaShieldAlt, FaCheckCircle
} from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineSecurity } from 'react-icons/md';

// Import your images (assuming they are in your src/assets folder)
import screen1 from './assets/screen1.webp';
import screen2 from './assets/screen2.webp';
import screen3 from './assets/screen3.webp';
import screen5 from './assets/screen5.webp';
import screen6 from './assets/screen6.webp';
import screen7 from './assets/screen7.webp';
import gameBackground from './assets/game-background.jpg';
import gameLogo from './assets/game-logo.jpg';

const App = () => {
  // State
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDeviceModal, setShowDeviceModal] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  // Responsive effect
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Translations
  const translations = {
    en: {
      title: "DOOM",
      features: "Features",
      screenshots: "Screenshots",
      download: "Download",
      description: "DOOM for Android & iOS",
      subtext: "Unlock unlimited coins, gems, and all players instantly. No root required!",
      unlimitedCoins: "Unlimited Coins",
      coinsDesc: "Get infinite in-game currency to upgrade everything instantly",
      infiniteGems: "Premium Gems",
      gemsDesc: "Unlock all special items without any payments",
      allPlayers: "All Players Unlocked",
      playersDesc: "Access every player immediately. Build your ultimate team",
      ready: "Ready to Dominate the Game?",
      cta: "Download now and experience DOOM like never before",
      downloadBtn: isMobile ? "DOWNLOAD" : "DOWNLOAD MOD APK",
      featuresTitle: "Why Choose Our MOD?",
      security: "100% Safe",
      updates: "Regular Updates",
      support: "24/7 Support",
      rating: "4.8",
      downloads: "10M+",
      size: "85MB",
      age: "Rated for 12+",
      selectDevice: "Select your device",
      android: "Android",
      ios: "iOS",
      verifyHuman: "Human Verification Required",
      verifyText: "Complete verification to download DOOM",
      verifyInstructions: "Please verify you're human by complete an offer to continue",
      notRobot: "I'm not a robot",
      checkNow: "VERIFY NOW"
    },
    fr: {
      title: "DOOM",
      features: "Fonctionnalités",
      screenshots: "Captures",
      download: "Télécharger",
      description: "DOOM Premium pour Android & iOS",
      subtext: "Débloquez des pièces, gemmes et joueurs illimités instantanément. Pas besoin de root!",
      unlimitedCoins: "Pièces Illimitées",
      coinsDesc: "Obtenez une monnaie de jeu infinie pour tout améliorer instantanément",
      infiniteGems: "Gemmes Premium",
      gemsDesc: "Débloquez tous les objets spéciaux sans paiement",
      allPlayers: "Tous les Joueurs Débloqués",
      playersDesc: "Accédez à tous les joueurs immédiatement. Créez votre équipe ultime",
      ready: "Prêt à Dominer le Jeu?",
      cta: "Téléchargez maintenant et vivez Baseball 9 comme jamais auparavant",
      downloadBtn: isMobile ? "TÉLÉCHARGER" : "TÉLÉCHARGER MOD APK",
      featuresTitle: "Pourquoi Choisir Notre MOD?",
      security: "100% Sécurisé",
      updates: "Mises à Jour Régulières",
      support: "Support 24/7",
      rating: "4.8",
      downloads: "10M+",
      size: "85MB",
      age: "12+ ans",
      selectDevice: "Sélectionnez votre appareil",
      android: "Android",
      ios: "iOS",
      verifyHuman: "Vérification humaine requise",
      verifyText: "Complétez la vérification pour télécharger DOOM",
      verifyInstructions: "Veuillez vérifier que vous êtes humain par completé un offer pour continuer",
      notRobot: "Je ne suis pas un robot",
      checkNow: "VÉRIFIER"
    }
  };

  const t = translations[language];
  
  // Constants
  const gameScreenshots = [
    screen1,
    screen2,
    screen3,
    screen5,
    screen6,
    screen7,
  ];

  const features = [
    { icon: <MdOutlineSecurity className="text-xl" />, title: t.security },
    { icon: <IoMdNotificationsOutline className="text-xl" />, title: t.updates },
    { icon: <FaMobileAlt className="text-xl" />, title: t.support }
  ];

  // Event handlers
  const handleDownloadClick = () => {
    setShowDeviceModal(true);
  };

  const handleDeviceSelect = () => {
    setShowDeviceModal(false);
    setShowVerification(true);
  };

  const handleVerification = () => {
    window.location.href = "https://smrturl.co/384fb91";
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaGamepad className={`text-2xl ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h1 className="text-xl font-bold">{t.title}</h1>
          </div>
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
          
          {/* Navigation */}
          <nav className={`${isMobile ? (menuOpen ? 'block w-full mt-4' : 'hidden') : 'block'}`}>
            <ul className={`${isMobile ? 'flex flex-col space-y-4' : 'flex space-x-6'}`}>
              <li><a href="#features" onClick={() => isMobile && setMenuOpen(false)} className="hover:text-blue-500 transition-colors">{t.features}</a></li>
              <li><a href="#screenshots" onClick={() => isMobile && setMenuOpen(false)} className="hover:text-blue-500 transition-colors">{t.screenshots}</a></li>
              <li><a href="#download" onClick={() => isMobile && setMenuOpen(false)} className="hover:text-blue-500 transition-colors">{t.download}</a></li>
            </ul>
          </nav>
          
          <div className={`${isMobile ? (menuOpen ? 'flex w-full mt-4 justify-between' : 'hidden') : 'flex'} items-center space-x-4`}>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon />}
            </button>
            
            <div className="flex items-center">
              {!isMobile && <FaLanguage className="mr-2" />}
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className={`bg-transparent border rounded px-2 py-1 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section 
          className={`relative py-20 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
          style={{
            backgroundImage: darkMode 
              ? "linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9))" 
              : "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))"
          }}
        >
          {/* Background image with overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: `url(${gameBackground})`,
              filter: darkMode ? "brightness(0.5)" : "brightness(1)"
            }}
          />
          
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
            {/* Text content */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                {t.description}
              </h2>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                {t.subtext}
              </p>
              
              {/* Ratings section */}
              <div className={`flex flex-wrap gap-6 mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex items-center bg-white/10 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                  <FaStar className="text-yellow-400 mr-2 text-lg" />
                  <span className="font-medium">{t.rating}</span>
                </div>
                <div className="flex items-center bg-white/10 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                  <FaGooglePlay className="text-green-500 mr-2 text-lg" />
                  <span className="font-medium">{t.downloads}</span>
                </div>
                <div className="flex items-center bg-white/10 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                  <span className="font-medium">📱 {t.size}</span>
                </div>
              </div>
              
              {/* Download button */}
              <button 
                onClick={handleDownloadClick}
                className={`flex items-center px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-900/50' 
                    : 'bg-blue-500 hover:bg-blue-600 shadow-blue-500/30'
                } text-white transform hover:-translate-y-1`}
              >
                <FaDownload className="mr-3 text-xl" /> 
                {t.downloadBtn}
              </button>
            </div>
            
            {/* Image container */}
            <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
              <div className="relative group">
                <div className={`absolute -inset-2 rounded-2xl ${
                  darkMode ? 'bg-blue-600/30' : 'bg-blue-400/30'
                } blur-lg group-hover:opacity-75 transition-opacity duration-300`} />
                <img 
                  src={gameLogo} 
                  alt="Game Preview"
                  className="relative rounded-xl shadow-2xl border-4 border-white/10 transform group-hover:scale-[1.02] transition-transform duration-300 w-full max-w-lg"
                  style={{
                    boxShadow: darkMode 
                      ? "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                      : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">{t.featuresTitle}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="text-4xl text-yellow-500 mb-4 flex justify-center">
                  <FaCoins />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center">{t.unlimitedCoins}</h4>
                <p className="text-center">{t.coinsDesc}</p>
              </div>
              
              <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="text-4xl text-purple-500 mb-4 flex justify-center">
                  <FaGem />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center">{t.infiniteGems}</h4>
                <p className="text-center">{t.gemsDesc}</p>
              </div>
              
              <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="text-4xl text-green-500 mb-4 flex justify-center">
                  <FaUsers />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center">{t.allPlayers}</h4>
                <p className="text-center">{t.playersDesc}</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{feature.icon}</span>
                  <span>{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section id="screenshots" className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">{t.screenshots}</h3>
            <div className={`${isMobile ? 'flex overflow-x-auto space-x-4 pb-4 snap-x snap-mandatory' : 'grid grid-cols-1 sm:grid-cols-3 gap-6'}`}>
              {gameScreenshots.map((img, index) => (
                <div key={index} className={`${isMobile ? 'flex-shrink-0 w-4/5 snap-center' : ''} overflow-hidden rounded-lg shadow-lg`}>
                  <img 
                    src={img} 
                    alt={`Game Screenshot ${index + 1}`} 
                    className={`w-full h-auto transition-transform hover:scale-105 ${isMobile ? 'h-64 object-cover' : ''}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-4">{t.ready}</h3>
            <p className="text-xl mb-8">{t.cta}</p>
            <button 
              onClick={handleDownloadClick}
              className={`flex items-center px-8 py-4 rounded-lg font-bold mx-auto ${darkMode ? 'bg-blue-700 hover:bg-blue-800' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-colors`}
            >
              <FaDownload className="mr-2" /> {t.downloadBtn}
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>
          <div className="text-center">
            © {new Date().getFullYear()} {t.title}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Device Selection Modal */}
      {showDeviceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-lg p-6 max-w-md w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-2xl font-bold mb-4 text-center">{t.selectDevice}</h3>
            <div className="flex flex-col space-y-4">
              <button 
                onClick={handleDeviceSelect}
                className={`flex items-center justify-center p-4 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              >
                <FaAndroid className="text-green-500 text-2xl mr-3" />
                <span className="text-lg font-medium">{t.android}</span>
              </button>
              <button 
                onClick={handleDeviceSelect}
                className={`flex items-center justify-center p-4 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              >
                <FaApple className="text-gray-500 text-2xl mr-3" />
                <span className="text-lg font-medium">{t.ios}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Verification Modal */}
      {showVerification && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className={`rounded-xl p-6 max-w-md w-full ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-2xl`}>
            <div className="text-center">
              <div className="mb-6">
                <div className={`p-4 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} inline-block`}>
                  <FaShieldAlt className="text-4xl text-blue-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.verifyHuman}</h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">{t.verifyText}</p>
              
              <div className={`p-4 mb-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{t.verifyInstructions}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center mb-6">
                <div className={`flex items-center p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <input 
                    type="checkbox" 
                    id="notRobot" 
                    className="mr-3 w-5 h-5 cursor-pointer"
                  />
                  <label htmlFor="notRobot" className="cursor-pointer">{t.notRobot}</label>
                </div>
              </div>
              
              <button 
                onClick={handleVerification}
                className={`w-full py-3 px-6 rounded-lg font-bold ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors flex items-center justify-center`}
              >
                <FaShieldAlt className="mr-2" />
                {t.checkNow}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;