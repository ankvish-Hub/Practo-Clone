import React from 'react';

export default function SearchBar({ location, setLocation, specialty, setSpecialty, onSearch }) {
  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center px-4">
      <div className="flex flex-1 items-center border rounded-md overflow-hidden bg-white">
        <span className="px-3 text-gray-400 text-lg">📍</span>
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="p-3 text-lg outline-none border-none bg-transparent flex-1 text-gray-900"
          placeholder="Enter location"
        />
      </div>
      <div className="flex flex-1 items-center border rounded-md overflow-hidden bg-white">
        <input
          type="text"
          value={specialty}
          onChange={e => setSpecialty(e.target.value)}
          className="p-3 text-lg outline-none border-none bg-transparent flex-1 text-gray-900"
          placeholder="Enter specialty"
        />
      </div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
}
