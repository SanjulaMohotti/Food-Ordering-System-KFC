import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div
      className="flex items-center justify-center w-full min-h-screen bg-center bg-cover"
      style={{
        backgroundImage: "url('https://i.postimg.cc/RZW136Xc/e144c901de064e9a4d5115472e51c092cc58e348-2880x1622.jpg')",
        boxShadow: "inset 0 0 2000px rgba(0,0,0,0.4)",
      }}
    >
      <div className="flex items-center justify-center w-full p-8 bg-white rounded-lg shadow-lg bg-opacity-80 md:w-1/2">
        <div className="w-full max-w-md p-6 bg-white rounded-md shadow-[0px_-10px_30px_rgba(0,0,0,0.1)]">
          <h2 className="mb-8 text-2xl font-bold text-center">CREATE AN ACCOUNT</h2>
          <form className="m-4 space-y-6">
            <div className="relative">
              <label htmlFor="firstName" className="block mb-2 text-sm text-left">
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full p-3 border rounded-md bg-gray-50"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="lastName" className="block mb-2 text-sm text-left">
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full p-3 border rounded-md bg-gray-50"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="block mb-2 text-sm text-left">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-md bg-gray-50"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block mb-2 text-sm text-left">
                Password*
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full p-3 border rounded-md bg-gray-50"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="relative">
              <label htmlFor="confirmPassword" className="block mb-2 text-sm text-left">
                Confirm Password*
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full p-3 border rounded-md bg-gray-50"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" required />
                <span className="text-sm">
                  By selecting the box, you agree to our Privacy Policy and
                  Terms of Use
                </span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm">
                  Sign up for Email Updates and Promotions.
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white transition-colors bg-black rounded-md hover:bg-gray-800"
            >
              Create Account
            </button>
            <p className="text-sm text-center">
              Already a member?{" "}
              <a href="/login" className="text-[#DC0032] hover:underline">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
