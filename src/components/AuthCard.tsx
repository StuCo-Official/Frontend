// src/components/AuthCard.tsx
import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import { MdEmail, MdVisibilityOff, MdVisibility } from 'react-icons/md';
import BackgroundLayout from './BackgroundLayout';

const AuthCard = () => {
  // State for email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for "Remember me" checkbox
  const [rememberMe, setRememberMe] = useState(false);

  // State for password visibility toggle
  const [showPassword, setShowPassword] = useState(false);

  // Placeholder function for the Continue button
  const handleContinueClick = () => {
    alert('Continue functionality not implemented yet.');
  };

  // Placeholder function for social login buttons
  const handleSocialLogin = (provider: string) => {
    alert(`Continue with ${provider} functionality not implemented yet.`);
  };

  return (
    <BackgroundLayout>
      {/* Auth Card Container */}
      <div className="bg-white rounded-[32px] shadow-lg w-[500px] h-[640px] p-10 mt-16">
        {/* Title */}
        <h1 className="text-[#3a3335] text-[32px] font-bold text-center mb-6 font-inter leading-[48px]">
          Welcome to StuCo
        </h1>
        {/* Input Fields */}
        <div className="space-y-4">
          {/* Email Field */}
          <div className="relative">
            <label className="text-[#8f8e8e] text-xs absolute top-2 left-3">
              Your email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[60px] pt-5 pl-3 pr-10 bg-white rounded-lg border border-[#eeeeee] text-black text-sm font-semibold"
              placeholder="Your email here"
            />
            {/* Email Icon */}
            <MdEmail className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#3a3335] text-xl" />
          </div>
          {/* Password Field */}
          <div className="relative">
            <label className="text-[#8f8e8e] text-xs absolute top-2 left-3">
              Your password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[60px] pt-5 pl-3 pr-10 bg-white rounded-lg border border-[#eeeeee] text-black text-sm font-semibold"
              placeholder="Your password here"
            />
            {/* Visibility Icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xl text-[#4a9b74]"
            >
              {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
            </button>
          </div>
        </div>
        {/* Remember Me and Recover Password */}
        <div className="flex justify-between items-center mt-4">
          <label className="flex items-center text-[#3a3335] text-sm font-bold">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-5 h-5 bg-[#c6d8d3] rounded mr-2"
            />
            Remember me
          </label>
          <a href="#" className="text-[#4a9b74] text-sm font-bold">
            Recover password
          </a>
        </div>
        {/* Continue Button */}
        <button
          className="w-full h-[45px] bg-[#4a9b74] rounded-[10px] text-white text-sm font-bold mt-5"
          onClick={handleContinueClick}
        >
          Continue
        </button>
        {/* Or Divider */}
        <div className="flex items-center mt-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-[#8f8e8e] text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        {/* Social Login Buttons */}
        <div className="space-y-4 mt-4">
          <button
            className="w-full h-[50px] bg-white rounded-[10px] border border-[#eeeeee] flex items-center justify-center text-[#8f8e8e] text-sm font-bold"
            onClick={() => handleSocialLogin('Google')}
          >
            <FaGoogle className="mr-2 text-lg" />
            Continue with Google
          </button>
          <button
            className="w-full h-[50px] bg-white rounded-[10px] border border-[#eeeeee] flex items-center justify-center text-[#8f8e8e] text-sm font-bold"
            onClick={() => handleSocialLogin('Facebook')}
          >
            <FaFacebookF className="mr-2 text-lg" />
            Continue with Facebook
          </button>
          <button
            className="w-full h-[50px] bg-white rounded-[10px] border border-[#eeeeee] flex items-center justify-center text-[#8f8e8e] text-sm font-bold"
            onClick={() => handleSocialLogin('Apple')}
          >
            <FaApple className="mr-2 text-lg" />
            Continue with Apple
          </button>
          {/* New to StuCo */}
          <div className="text-center">
            <span className="text-black text-sm font-semibold">
              New to StuCo?{' '}
            </span>
            <a href="#" className="text-[#4a9b74] text-sm font-bold">
              Join Now
            </a>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default AuthCard;
