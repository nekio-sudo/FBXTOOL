import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 flex flex-col items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 opacity-75"></div>
      <div className="relative bg-gray-900 p-8 rounded-lg shadow-lg text-center max-w-md w-full z-10 border border-gray-700">
        <h1 className="text-4xl font-extrabold mb-6 text-red-500 flex items-center justify-center"><FaExclamationTriangle className="mr-2"/>Error</h1>
        <p className="text-gray-400 mb-6">
          Unfortunately, the hack attempt was unsuccessful. Here are some possible reasons why:
        </p>
        <ul className="text-left text-gray-400 mb-6">
          <li className="mb-2">1. <strong>Advanced Security Measures:</strong> The target's account has enhanced security protocols that prevented the hack.</li>
          <li className="mb-2">2. <strong>IP Trace Detected:</strong> Our system detected an IP trace attempt and aborted the hack to prevent detection.</li>
          <li className="mb-2">3. <strong>Encryption Algorithms:</strong> The encryption algorithms used by Facebook are highly sophisticated and resistant to cracking.</li>
          <li className="mb-2">4. <strong>Real-Time Monitoring:</strong> Facebook's security team may have identified suspicious activity and blocked the hack.</li>
          <li>5. <strong>Network Anomalies:</strong> Unusual network behavior or anomalies interrupted the connection during the hacking process.</li>
        </ul>
        <p className="text-gray-500 mb-6">
          Please try again later or check our other tools for accessing different platforms.
        </p>
        <a
          href="/"
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
