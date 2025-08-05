import { useState } from 'react'
import { useRouter } from 'next/router'

export default function HeroSection() {
  const router = useRouter()
  const [location, setLocation] = useState('Bangalore')
  const [specialty, setSpecialty] = useState('')

  const handleSearch = () => {
    router.push(`/search?location=${location}&specialty=${specialty}`)
  }

  return (
    <div className="bg-[#232f7e] text-white flex flex-col items-center justify-center px-2 py-16 relative overflow-hidden">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Your home for health</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Find and Book</h2>

      <div className="flex flex-col md:flex-row w-full max-w-3xl bg-white rounded-md shadow overflow-hidden mb-4">
        <div className="flex items-center flex-1 border-r border-gray-200">
          <span className="px-3 text-gray-400 text-lg">📍</span>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-4 text-lg outline-none border-none bg-transparent flex-1 text-gray-900 placeholder-gray-400"
          >
            <option value="Bangalore">Bangalore</option>
            
          </select>
        </div>
        <input
          type="text"
          placeholder="Search Doctors, Clinics, Hospitals, etc."
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="p-4 text-lg outline-none flex-1 bg-transparent text-gray-900 placeholder-gray-400"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-none md:rounded-r-md transition"
        >
          Search
        </button>
      </div>

      <div className="mt-2 text-center w-full max-w-3xl">
        <div className="flex flex-wrap gap-2 md:gap-6 justify-center items-center text-base text-gray-200">
          <span className="text-gray-300">Popular Searches:</span>
          {['Dermatologist', 'Pediatrician', 'Gynecologist/Obstetrician', 'Others'].map((item, idx, arr) => (
            <button
              key={item}
              onClick={() => {
                setSpecialty(item)
                handleSearch()
              }}
              className="bg-transparent text-gray-100 hover:text-yellow-300 px-2 py-1 rounded transition underline-offset-4 hover:underline flex items-center"
            >
              {item}
              {item === 'Others' && (
                <span className="ml-1 text-base">V</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
