import React from 'react';
import DoctorCard from './DoctorCard';

export default function ResultsContainer({ results, querySpecialty, location, loading, filtered }) {
  return (
    <div className="max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg p-6 md:p-10 mt-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-900">
        {results.length} {querySpecialty ? `${querySpecialty}s` : 'Results'} available in {location}
      </h2>
      <p className="mb-6 text-gray-600 flex items-center gap-2">
        <span>Book appointments with minimum wait-time &amp; verified doctor details</span>
      </p>
      {loading ? (
        <div className="text-center py-10 text-lg text-blue-900 font-semibold">Loading...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-10 text-lg text-gray-500">No results found.</div>
      ) : (
        <div className="space-y-8">
          {filtered.map(doc => (
            <DoctorCard key={doc.id} doc={doc} />
          ))}
        </div>
      )}
    </div>
  );
}
