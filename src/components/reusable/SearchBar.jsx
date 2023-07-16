import React from 'react';

const SearchBar = ({ value, handleChange }) => {
    return (
        <div className="relative max-w-2xl mt-20 ">
            <input
                type="text"
                placeholder="Search for resources, category or username..."
                className="w-full text-lg h-10 px-4 pr-10  font-bold font-poppins text-gray-800 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={value}
                onChange={(e) => handleChange(e)}
            />
            <button
                type="submit"
                className="absolute top-0 right-0 px-3 py-2 text-gray-600 focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 15l5 5-5 5"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 17a7 7 0 100-14 7 7 0 000 14z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;