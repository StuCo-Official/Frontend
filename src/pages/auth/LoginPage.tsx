// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { useLogin } from "../../hooks/AuthHooks/useLogin";
import usernameIcon from "../../assets/usernameIcon.png";
import logoImage from '../../assets/StuCoAppBarLogo.png';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { loginUser, isPending } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginUser(username, password);
  };

  const handleSocialLogin = (provider: string) => {
    // Implement social login logic here
    console.log(`Continue with ${provider} clicked`);
  };

  return (
    <div className="bg-[#e3f2eb] min-h-screen w-screen">
      {/* Logo */}
      <header className="flex items-center absolute top-0 left-0 p-5">
        <div className="flex items-center">
          <img
            src={logoImage} // Using the imported logo image
            alt="StuCo Logo"
            className="w-14 h-14 object-cover"
          />
          <div className="ml-2 text-[#4A9B74] font-bold italic text-2xl">
            StuCo
          </div>
        </div>
      </header>
      {/* Auth Card Container */}
      <div className="flex justify-center items-center h-full">
        <div className="bg-white rounded-[32px] shadow-lg w-[500px] h-[640px] p-10 mt-16">
          {/* Title */}
          <h1 className="text-[#3a3335] text-[32px] font-bold text-center mb-6 leading-[48px]">
            Welcome to StuCo
          </h1>
          {/* Input Fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div className="relative">
              <label className="text-[#8f8e8e] text-xs absolute top-2 left-3">
                Your username
              </label>
              <input
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-[60px] pt-5 pl-3 pr-10 bg-white rounded-lg border border-[#eeeeee] text-black text-sm font-semibold"
                placeholder="Your username here"
              />
              {/* Username Icon */}
              <img
                src={usernameIcon}
                alt="Username Icon"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5"
              />
            </div>
            {/* Password Field */}
            <div className="relative">
              <label className="text-[#8f8e8e] text-xs absolute top-2 left-3">
                Your password
              </label>
              <input
                type={showPassword ? "text" : "password"}
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
              <Link
                to="/recover-password"
                className="text-[#4a9b74] text-sm font-bold"
              >
                Recover password
              </Link>
            </div>
            {/* Continue Button */}
            <button
              type="submit"
              className="w-full h-[45px] bg-[#4a9b74] rounded-[10px] text-white text-sm font-bold mt-5 transition duration-300 ease-in-out hover:bg-[#3a7b5c] hover:shadow-lg"
              disabled={isPending}
            >
              {isPending ? "Loading..." : "Continue"}
            </button>
          </form>
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
              onClick={() => handleSocialLogin("Google")}
            >
              <FaGoogle className="mr-2 text-lg" />
              Continue with Google
            </button>
            <button
              className="w-full h-[50px] bg-white rounded-[10px] border border-[#eeeeee] flex items-center justify-center text-[#8f8e8e] text-sm font-bold"
              onClick={() => handleSocialLogin("Facebook")}
            >
              <FaFacebookF className="mr-2 text-lg" />
              Continue with Facebook
            </button>
            <button
              className="w-full h-[50px] bg-white rounded-[10px] border border-[#eeeeee] flex items-center justify-center text-[#8f8e8e] text-sm font-bold"
              onClick={() => handleSocialLogin("Apple")}
            >
              <FaApple className="mr-2 text-lg" />
              Continue with Apple
            </button>
            {/* New to StuCo */}
            <div className="text-center">
              <span className="text-black text-sm font-semibold">
                New to StuCo?{" "}
              </span>
              <Link to="/signup" className="text-[#4a9b74] text-sm font-bold">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
