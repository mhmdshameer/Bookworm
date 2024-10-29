"use client";

import React, { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e) => {
    e.preventdefault();
  };
  return (
    <div className="flex items-center justify-center flex-col w-full h-svh bg-orange-200">
      <div className="flex items-center justify-center flex-col bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mt-4">Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm mt-6 space-y-4"
        >
          <input
            type="text"
            placeholder="username"
            className="w-full p-2 border border-gray-300 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-r-gray-300 rounded "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-r-gray-300 rounded "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Sign In
          </button>
        </form>
        <p className="my-4">
          Already have an account?
          <a href="/auth/signIn" className="text-blue-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
