import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <span className="block">Find Your Perfect Friend</span>
          <span className="block text-purple-200">Meet Your New Furry Companion</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-purple-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Find a loyal friend who’s waiting just for you. Adopt. Save a life. Make a new beginning ❤️
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link
              to="/pets"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 md:py-4 md:text-lg md:px-10"
            >
              Find Your Friend
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link
              to="/shelters"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 md:py-4 md:text-lg md:px-10"
            >
              Shelter Directory
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
