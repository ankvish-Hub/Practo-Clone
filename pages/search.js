import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ResultsContainer from '../components/search/ResultsContainer';
import Link from 'next/link';
import FilterDropdown from '../components/search/FilterDropdown';
import SearchBar from '../components/search/SearchBar';
import PatientStoriesDropdown from '../components/search/PatientStoriesDropdown';

export default function SearchResults() {
  const router = useRouter();
  const { location: queryLocation = '', specialty: querySpecialty = '' } = router.query;
  const [location, setLocation] = useState(queryLocation);
  const [specialty, setSpecialty] = useState(querySpecialty);
  const [results, setResults] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gender, setGender] = useState('Any');
  const [experience, setExperience] = useState('Any');
  const [sortBy, setSortBy] = useState('Relevance');
  const [showGender, setShowGender] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showPatientStories, setShowPatientStories] = useState(false);
  const [patientStories, setPatientStories] = useState('Any');
  const [showAllFilters, setShowAllFilters] = useState(false);

  // Keep input fields in sync with query params
  useEffect(() => {
    setLocation(queryLocation);
    setSpecialty(querySpecialty);
  }, [queryLocation, querySpecialty]);

  useEffect(() => {
    if (!location && !specialty) return;
    setLoading(true);
    fetch(`/api/search?location=${encodeURIComponent(location)}&specialist=${encodeURIComponent(specialty)}`)
      .then(res => res.json())
      .then(data => {
        setResults(data);
        setLoading(false);
      });
  }, [location, specialty]);

  useEffect(() => {
    let data = [...results];
    // Gender filter
    if (gender !== 'Any') {
      data = data.filter(doc => doc.gender && doc.gender.toLowerCase() === gender.toLowerCase());
    }
    // Experience filter
    if (experience !== 'Any') {
      data = data.filter(doc => {
        const exp = parseInt(doc.experience);
        if (experience === '0-5 years') return exp >= 0 && exp <= 5;
        if (experience === '6-10 years') return exp >= 6 && exp <= 10;
        if (experience === '11-20 years') return exp >= 11 && exp <= 20;
        if (experience === '20+ years') return exp > 20;
        return true;
      });
    }
    // Sort
    if (sortBy === 'Experience') {
      data.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
    } else if (sortBy === 'Patient Stories') {
      data.sort((a, b) => b.stories - a.stories);
    } else if (sortBy === 'Fees: Low to High') {
      data.sort((a, b) => a.fees - b.fees);
    } else if (sortBy === 'Fees: High to Low') {
      data.sort((a, b) => b.fees - a.fees);
    }
    setFiltered(data);
  }, [results, gender, experience, sortBy]);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClick() {
      setShowGender(false);
      setShowExperience(false);
      setShowSort(false);
      setShowPatientStories(false);
      setShowAllFilters(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#232f7e] to-blue-100 pb-10">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-20">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-900">•Practo•</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/doctors" className="text-blue-700 font-semibold border-b-2 border-blue-700 pb-2">Find Doctors</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Video Consult</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Surgeries</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <span className="bg-blue-900 text-white text-xs px-2 py-1 rounded">NEW</span>
            <span className="text-gray-700">For Corporates</span>
            <span className="text-gray-700">For Providers</span>
            <span className="text-gray-700">Security & help</span>
            <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded">Login / Signup</button>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white py-6 shadow-sm">
        <SearchBar
          location={location}
          setLocation={setLocation}
          specialty={specialty}
          setSpecialty={setSpecialty}
          onSearch={() => {
            router.push({
              pathname: '/search',
              query: { location, specialty }
            });
          }}
        />
      </div>

      {/* Filters Bar */}
      <div className="bg-[#232f7e] text-white py-2 shadow-sm">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2 md:gap-4 items-center px-4">
          {/* Gender Dropdown */}
          <FilterDropdown
            label="Gender"
            options={['Any', 'Male', 'Female', 'Other']}
            value={gender}
            setValue={setGender}
            show={showGender}
            setShow={setShowGender}
            minWidth={120}
          />
          {/* Patient Stories Dropdown */}
          <PatientStoriesDropdown
            show={showPatientStories}
            setShow={setShowPatientStories}
            onSelect={setPatientStories}
          />
          {/* Experience Dropdown */}
          <FilterDropdown
            label="Experience"
            options={['Any', '0-5 years', '6-10 years', '11-20 years', '20+ years']}
            value={experience}
            setValue={setExperience}
            show={showExperience}
            setShow={setShowExperience}
            minWidth={120}
          />
          {/* All Filters Dropdown */}
          <div className="relative">
            <button onClick={() => setShowAllFilters(v => !v)} className="bg-[#232f7e] border border-white/30 rounded px-4 py-2 flex items-center gap-2">All Filters <span className="ml-1 text-xs">▾</span></button>
            {showAllFilters && (
              <div className="absolute left-0 mt-1 bg-white text-[#232f7e] rounded shadow z-10 min-w-[150px]">
                <button className="block w-full text-left px-4 py-2 hover:bg-blue-50">Available Today</button>
                <button className="block w-full text-left px-4 py-2 hover:bg-blue-50">Video Consult</button>
                <button className="block w-full text-left px-4 py-2 hover:bg-blue-50">Clinic +1 more</button>
              </div>
            )}
          </div>
          {/* Sort By Dropdown */}
          <span className="ml-auto flex items-center gap-2">Sort By 
            <span className="ml-2">
              <FilterDropdown
                label={sortBy}
                options={['Fees: Low to High', 'Fees: High to Low']}
                value={sortBy}
                setValue={setSortBy}
                show={showSort}
                setShow={setShowSort}
                minWidth={120}
              />
            </span>
          </span>
        </div>
      </div>

      {/* Results */}
      <ResultsContainer
        results={results}
        querySpecialty={querySpecialty}
        location={location}
        loading={loading}
        filtered={filtered}
      />
    </div>
  );
}
