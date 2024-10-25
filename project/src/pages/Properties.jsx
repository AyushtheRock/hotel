import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const PropertyCard = ({ image, type, location, description}) => {
  return (
    <NavLink to={'/properties/propertiesForm'} className='rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:text-white bg-white'>
      <img
        className="h-48 w-full object-cover" 
        src={image}
        alt="property"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Property Name</h3>
          <span
            className={`px-3 py-1 text-sm font-medium rounded-full ${
              type === "Hotel" ? 'dark:text-purple-300 dark:bg-purple-800 text-purple-600 bg-purple-100'
                : 'dark:text-pink-300 dark:bg-pink-800 text-pink-600 bg-pink-100'
            }`}
          >
            {type}
          </span>
        </div>
        <p className="mt-2 text-sm dark:text-gray-300 text-gray-600">
          {description}
        </p>
        <div className=" mt-4 flex items-center text-sm">
          {/* Location Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1 dark:text-gray-400 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a1 1 0 01-.894-.553L4.382 8.764a6 6 0 1111.236 0l-4.724 8.683A1 1 0 0110 18zm0-8a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          {location}
        </div>
        <div className="mt-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <span>🛏 Bed</span>
            <span>💪 Gym</span>
            <span>⛓ Lift</span>
            <span>🍽 Food</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

const PropertyListing = () => {
 

  const properties = [
    {
      image: "/src/assets/property1.png",
      type: "Hotel",
      location: "Begumpet Airport Road, Motilal Nehru Nagar",
      description: "In a colonial-style building with a columned portico, this upscale hotel is 6 km from the Hussain Sagar Lake.",
    },
    {
      image: "/src/assets/property2.png",
      type: "Home Stay",
      location: "Begumpet Airport Road, Motilal Nehru Nagar",
      description: "In a colonial-style building with a columned portico, this upscale hotel is 6 km from the Hussain Sagar Lake.",
    },
    {
      image: "/src/assets/property3.png",
      type: "Hotel",
      location: "Begumpet Airport Road, Motilal Nehru Nagar",
      description: "In a colonial-style building with a columned portico, this upscale hotel is 6 km from the Hussain Sagar Lake.",
    },
  ];

  return (
    <div className='dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900 min-h-screen p-6'>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Property Listing</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              image={property.image}
              type={property.type}
              location={property.location}
              description={property.description}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
