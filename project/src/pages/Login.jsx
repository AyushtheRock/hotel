// src/pages/Login.js
import React from 'react';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., authentication)
  };

  return ( 
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-1/3"
      >
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border border-gray-300 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
