import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(isSignUp ? "Signing up" : "Signing in", { email, password });
    setIsLoggedIn(true);
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    navigate('/');
  };

  return (
    <div className="min-h-screen px-4 py-10 md:px-16 lg:px-24 bg-[#f9f7e8] flex items-center justify-center">
      <div className="w-full max-w-md">
        {isLoggedIn ? (
          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Welcome Back!
            </h2>
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-500 transition-all duration-300 transform hover:scale-105"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                {isSignUp ? "Sign Up" : "Sign In"}
              </h2>
              <p className="text-gray-600 mt-2">
                {isSignUp ? "Create your account" : "Welcome back! Please enter your details."}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-800 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>
            <div className="text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-green-800 hover:underline transition-all duration-300"
              >
                {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth; 