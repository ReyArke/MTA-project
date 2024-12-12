import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="text-center mx-auto items-center m-52">
      <h1 className="text-9xl font-bold text-gray-700">404</h1>
      <p className="text-xl text-gray-500 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded shadow-lg transition-all ">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};
