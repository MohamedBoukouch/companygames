import React, { useState } from "react";
import amazonGiftCard from '../src/assets/gifts/amazon_gift_cart.png';
import sheinCard from '../src/assets/gifts/shein.jpg';
import walmartCard from '../src/assets/gifts/walmart.webp';
import appleCard from '../src/assets/gifts/appelle.jpg';
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [emailSkipped, setEmailSkipped] = useState(false);
  

  const questions = [
    {
      id: 1,
      text: "Have you shopped online in the past month?",
      options: ["Yes", "No"],
    },
    {
      id: 2,
      text: "Which of these stores do you shop at most often?",
      options: ["Amazon", "Walmart", "Shein", "Apple"],
    },
    {
      id: 3,
      text: "How much do you typically spend monthly on online shopping?",
      options: ["Less than $50", "$50-$100", "$100-$200", "More than $200"],
    },
  ];

  const giftCards = [
    {
      id: 1,
      name: "Amazon Gift Card",
      value: "$100",
      image: amazonGiftCard,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: 2,
      name: "Shein Shopping Spree",
      value: "$100",
      image: sheinCard,
      color: "from-red-400 to-red-600",
    },
    {
      id: 3,
      name: "Walmart Gift Card",
      value: "$50",
      image: walmartCard,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 4,
      name: "Apple Gift Card",
      value: "$100",
      image: appleCard,
      color: "from-gray-400 to-gray-600",
    },
  ];

  const handleCardSelect = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setShowCongratsModal(true);
    setEmailSkipped(false);
  };

  const handleSkipEmail = () => {
    setShowModal(false);
    setShowCongratsModal(true);
    setEmailSkipped(true);
    setEmail(""); // Clear any partially entered email
  };

  const redirectToOffer = () => {
    window.location.href = "https://smrturl.co/384fb91";
  };

  const handleAnswer = (answer) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">🎁 Claim Your Free Gift Card!</h1>
        <p className="text-gray-600 text-lg">
          Complete a quick survey to qualify for one of these amazing rewards!
        </p>

        {!quizCompleted ? (
          <div className="space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-left">
              <p className="text-yellow-700 font-medium">Question {currentQuestion + 1}/{questions.length}:</p>
              <p className="font-medium my-2">{questions[currentQuestion].text}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded-lg transition"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-purple-600 h-2.5 rounded-full" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">
              {currentQuestion + 1} of {questions.length} completed
            </p>
          </div>
        ) : (
          <>
          <div className="bg-gray-100 p-4 rounded-lg text-left">
              <h3 className="font-semibold text-gray-800">How it works:</h3>
              <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1 mt-2">
                <li>Select your preferred gift card</li>
                <li>Enter your PayPal email for delivery (optional)</li>
                <li>Complete one sponsored offer</li>
                <li>Receive your gift card within 24 hours</li>
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {giftCards.map((card) => (
                <div
                  key={card.id}
                  className={`bg-gradient-to-br ${card.color} p-4 rounded-lg text-white cursor-pointer transform hover:scale-105 transition duration-300`}
                  onClick={() => handleCardSelect(card)}
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-32 object-contain mx-auto"
                  />
                  <h3 className="font-bold text-lg">{card.name}</h3>
                  <p className="text-xl font-extrabold">{card.value}</p>
                </div>
              ))}
            </div>

            

            <p className="text-xs text-gray-400">
              *Limited time offer. Only 12 gift cards remaining. Terms and conditions apply.
            </p>
          </>
        )}

        {/* Email Collection Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Almost There! 🎉
              </h2>
              <p className="text-gray-600 mb-4">
                Enter your PayPal email to receive your {selectedCard?.name} worth {selectedCard?.value}
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="your@paypal.com"
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                  >
                    🔥 Claim My {selectedCard?.value} Now!
                  </button>
                  <button
                    type="button"
                    onClick={handleSkipEmail}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition duration-300"
                  >
                    Skip, I'll enter email later
                  </button>
                </div>
              </form>
              <p className="text-xs text-gray-400 mt-4">
                By continuing, you agree to complete one sponsored offer to receive your reward.
              </p>
            </div>
          </div>
        )}

        {/* Congratulations Modal */}
        {showCongratsModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full text-center">
              <div className="text-green-500 text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Congratulations!</h2>
              <p className="text-gray-600 mb-4">
                {emailSkipped ? (
                  <>You'll receive instructions to claim your {selectedCard?.name} after completing the offer!</>
                ) : (
                  <>Your {selectedCard?.name} worth {selectedCard?.value} will be sent to {email} within 24 hours!</>
                )}
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-left mb-4">
                <p className="text-yellow-700 font-medium">Important:</p>
                <p className="text-sm">You must complete the sponsored offer to receive your reward!</p>
              </div>
              <button
                onClick={redirectToOffer}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2"
              >
                <span>Complete Offer Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <p className="text-xs text-gray-400 mt-4">
                By clicking above, you agree to complete the sponsored offer to receive your reward.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;