import React, { useState } from "react";

const FusionLogin: React.FC = () => {
  const [campus, setCampus] = useState("");
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Login Container */}
      <div className="relative z-10 flex bg-white rounded-lg shadow-2xl overflow-hidden max-w-5xl w-full mx-4">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-12">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-600 tracking-wide">
              FUSION
            </h1>
          </div>

          {/* Campus Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Campus
            </label>
            <select
              value={campus}
              onChange={(e) => setCampus(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 bg-white"
            >
              <option value="">Select a campus</option>
              <option value="campus1">Campus 1</option>
              <option value="campus2">Campus 2</option>
              <option value="campus3">Campus 3</option>
            </select>
          </div>

          {/* Google Login Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 mb-4">
            Login with Google
          </button>

          {/* Divider */}
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <button
                onClick={() => setShowMore(!showMore)}
                className="bg-white px-2 text-gray-500 hover:text-gray-700"
              >
                Or continue with more ▾
              </button>
            </div>
          </div>

          {/* Email & Password Button */}
          <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-md transition duration-200">
            Sign in with email & password
          </button>

          {/* Terms and Privacy */}
          <p className="mt-8 text-xs text-gray-600 text-center">
            By clicking continue, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Right Side - Image */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80')",
          }}
        />
      </div>
    </div>
  );
};

export default FusionLogin;
