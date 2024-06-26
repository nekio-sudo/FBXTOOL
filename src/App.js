import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import ErrorPage from './ErrorPage';
import SignInPage from './SignInPage';

function MainApp() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [username, setUsername] = useState('');
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const hackingSteps = [
    'Initializing sophisticated hack sequence...',
    'Establishing secure connection to Facebook servers...',
    'Bypassing multi-layered security protocols...',
    'Extracting encrypted user data...',
    'Cracking password hashes...',
    'Analyzing social engineering vulnerabilities...',
    'Decrypting sensitive information...',
    'Finalizing infiltration process...',
  ];

  const handleHack = () => {
    setLoading(true);
    setProgress(0);
    setLogs([]);
    setShowModal(false);

    hackingSteps.forEach((step, index) => {
      setTimeout(() => {
        setLogs((prevLogs) => [...prevLogs, step]);
        setProgress(((index + 1) / hackingSteps.length) * 100);

        if (index === hackingSteps.length - 1) {
          if (Math.random() > 0.5) {
            setShowModal(true);
            setLoading(false);
            setSuccess(true);
          } else {
            navigate('/error');
          }
        }
      }, (index + 1) * 1500); // Adjust timing for more realistic simulation
    });
  };

  const reset = () => {
    setLoading(false);
    setSuccess(false);
    setUsername('');
    setProgress(0);
    setLogs([]);
    setShowModal(false);
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 flex flex-col items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 opacity-75"></div>
      <div className="relative bg-gray-900 p-8 rounded-lg shadow-lg text-center max-w-md w-full z-10 border border-gray-700">
        <h1 className="text-4xl font-extrabold mb-6 text-green-400">FBXTool</h1>
        <p className="text-gray-400 mb-6">
          Enter your friend's name and click the button to hack their account! 🔓
        </p>
        <input
          type="text"
          placeholder="Friend's Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-6 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          disabled={loading || success}
        />
        <button
          onClick={handleHack}
          className={`w-full p-3 rounded-lg font-bold text-white transition-all duration-300 ${
            loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
          } ${success ? 'bg-blue-500 cursor-not-allowed' : ''}`}
          disabled={loading || success || !username}
        >
          {loading ? 'Hacking...' : success ? 'Success!' : 'Hack Account'}
        </button>
        <div className="mt-6 text-left text-gray-400 font-mono bg-gray-800 p-4 rounded-lg border border-gray-700 max-h-60 overflow-y-auto">
          {logs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>
        {loading && (
          <div className="w-full bg-gray-700 rounded-full h-4 mt-6">
            <div
              className="bg-green-600 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
        {success && (
          <button
            onClick={reset}
            className="mt-6 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Reset
          </button>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
              <h2 className="text-2xl font-bold text-red-500 mb-4"><FaLock /> Security Notice</h2>
              <p className="text-gray-400 mb-6">
                To proceed with accessing secure data, authentication is required. Please sign in to verify your identity and comply with our security policies.
              </p>
              <p className="text-gray-500 text-sm mb-6">
                By proceeding, you acknowledge the necessity of secure access protocols and agree to abide by our terms and conditions.
              </p>
              <button
                onClick={handleSignIn}
                className="w-full p-3 mb-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                Sign In to Continue
              </button>
              <button
                onClick={reset}
                className="w-full p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-8 text-center flex justify-center space-x-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 w-1/3">
          <h3 className="text-xl font-bold mb-2">TikTok admin</h3>
          <p className="text-gray-500 mb-2">Unlock private TikTok accounts!</p>
          <p className="text-gray-500">Coming Soon</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 w-1/3">
          <h3 className="text-xl font-bold mb-2">Instagram Opener</h3>
          <p className="text-gray-500 mb-2">Gain access to Instagram accounts!</p>
          <p className="text-gray-500">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;
