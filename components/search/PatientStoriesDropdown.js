import React from 'react';

export default function PatientStoriesDropdown({ show, setShow, onSelect }) {
  const options = ['Any', '1000+ Stories', '500+ Stories', '100+ Stories'];
  return (
    <div className="relative">
      <button onClick={() => setShow(v => !v)} className="bg-[#232f7e] border border-white/30 rounded px-4 py-2 flex items-center gap-2">
        Patient Stories <span className="ml-1 text-xs">▾</span>
      </button>
      {show && (
        <div className="absolute left-0 mt-1 bg-white text-[#232f7e] rounded shadow z-10 min-w-[150px]">
          {options.map(opt => (
            <button
              key={opt}
              className="block w-full text-left px-4 py-2 hover:bg-blue-50"
              onClick={() => { onSelect(opt); setShow(false); }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
