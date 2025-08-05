
import React, { useState } from 'react';

export default function AuthTabs() {
  const [activeTab, setActiveTab] = useState('login');
  // Login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [otpLogin, setOtpLogin] = useState(false);
  // Register state
  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [mobile, setMobile] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [offers, setOffers] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login attempted for ${email}`);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Register attempted for ${fullName}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      {/* Tabs */}
      <div className="w-full max-w-md flex border-b mb-8 mt-8 bg-white rounded-t-lg overflow-hidden">
        <button
          className={`flex-1 text-center py-3 font-semibold ${activeTab === 'login' ? 'text-blue-600 border-b-2 border-blue-500 bg-white' : 'text-gray-500 border-b-2 border-transparent bg-white hover:text-blue-600'} cursor-pointer transition-all`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button
          className={`flex-1 text-center py-3 font-semibold ${activeTab === 'register' ? 'text-blue-600 border-b-2 border-blue-500 bg-white' : 'text-gray-500 border-b-2 border-transparent bg-white hover:text-blue-600'} cursor-pointer transition-all`}
          onClick={() => setActiveTab('register')}
        >
          Register
        </button>
      </div>
      {activeTab === 'login' ? (
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-b shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full text-black mb-4 p-3 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full text-black mb-4 p-3 border rounded"
            required
          />
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-gray-700 text-sm">
              <input
                type="checkbox"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
                className="accent-blue-500 mr-2"
              />
              Remember me for 30 days
            </label>
            <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              checked={otpLogin}
              onChange={e => setOtpLogin(e.target.checked)}
              className="accent-blue-500 mr-2"
            />
            <span className="text-gray-700 text-sm">Login with OTP instead of password</span>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition">Login</button>
        </form>
      ) : (
        <form onSubmit={handleRegister} className="bg-white p-8 rounded-b shadow-md w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-700">Join Practo</h2>
            <span className="text-sm text-gray-500">Are you a doctor? <a href="#" className="text-orange-500 hover:underline">Register Here</a></span>
          </div>
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
              value={regPassword}
              onChange={e => setRegPassword(e.target.value)}
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
      )}
    </div>
  );
}
