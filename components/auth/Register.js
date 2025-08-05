import React, { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [offers, setOffers] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
    alert(`Register attempted for ${fullName}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-8 mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-700">Join Practo</h2>
          <span className="text-sm text-gray-500">Are you a doctor? <a href="#" className="text-orange-500 hover:underline">Register Here</a></span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className="w-full border border-blue-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">Mobile Number</label>
            <div className="flex gap-2">
              <select
                value={countryCode}
                onChange={e => setCountryCode(e.target.value)}
                className="border border-blue-200 rounded px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
              >
                <option value="+91">+91 (IND)</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={e => setMobile(e.target.value)}
                className="flex-1 border border-blue-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">Create Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-blue-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
              required
            />
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={offers}
              onChange={e => setOffers(e.target.checked)}
              className="accent-blue-500 mr-2"
            />
            <span className="text-gray-700 text-sm">Receive relevant offers and promotional communication from Practo</span>
          </div>
          <p className="text-xs text-gray-500 mb-6 ml-6">By signing up, I agree to <a href="#" className="text-blue-500 hover:underline">terms</a></p>
          <button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-white py-3 rounded font-semibold text-lg transition">Send OTP</button>
        </form>
      </div>
    </div>
  );
}
