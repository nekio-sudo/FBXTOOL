import React, { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

function SignInPage() {
  const [userInput, setUserInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(20);

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login delay (3 seconds)
    setTimeout(() => {
      setShowModal(true);
      setLoading(false);
      startCountdown();
    }, 3000);
  };

  const startCountdown = () => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(timer);
          window.location.href = 'https://en.wikipedia.org/wiki/Phishing';
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-sm">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Facebook</h1>
        <form onSubmit={handleSignIn} className="w-full">
          <input
            type="text"
            placeholder="Email address, Phone number or Username"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-bold"
            disabled={loading}
          >
            {loading ? 'Logging In...' : 'Log In'}
          </button>
          <p className="text-gray-500 text-sm mt-4">
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          </p>
          <hr className="my-4" />
          <button
            type="button"
            className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 font-bold"
          >
            Create New Account
          </button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-90">
          <div className="bg-red-700 p-6 rounded-lg shadow-lg text-center max-w-sm w-full text-white">
            <div className="flex items-center justify-center mb-4">
              <FaExclamationTriangle className="text-yellow-500 text-5xl mr-2" />
              <h2 className="text-4xl font-bold">⚠️ Security Alert ⚠️</h2>
              <FaExclamationTriangle className="text-yellow-500 text-5xl ml-2" />
            </div>
            <p className="mb-6">
              🚨 Your account has been compromised due to a phishing attempt! 🚨
            </p>
            <p className="mb-6">
              We are raising awareness about online security threats. Do not enter your credentials on suspicious websites.
            </p>
            <div className="text-left mb-6">
              <strong className="block">Details:</strong>
              <p className="pl-4">
                User: {userInput}<br />
                Password: {password}
              </p>
            </div>
            <p className="mb-6">
              <strong>Why was your account compromised?</strong><br />
              Because you trusted this fake tool! 😂<br />
              Always be careful and double-check the URL before entering your credentials.
            </p>
            <p>
              You will be redirected to more information about phishing in {countdown} seconds.
            </p>
            <button
              onClick={closeModal}
              className="w-full mt-4 p-3 bg-black text-red-600 rounded-lg hover:bg-red-800 transition-all duration-300 font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignInPage;
