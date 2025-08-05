import React from 'react';

export default function FilterDropdown({ label, options, value, setValue, show, setShow, minWidth = 120 }) {
  return (
    <div className="relative">
      <button
        onClick={() => setShow(v => !v)}
        className="bg-[#232f7e] border border-white/30 rounded px-4 py-2 flex items-center gap-2"
      >
        {label} <span className="ml-1 text-xs">▾</span>
      </button>
      {show && (
        <div className={`absolute left-0 mt-1 bg-white text-[#232f7e] rounded shadow z-10 min-w-[${minWidth}px]`}>
          {options.map(opt => (
            <button
              key={opt}
              onClick={() => { setValue(opt); setShow(false); }}
              className={`block w-full text-left px-4 py-2 hover:bg-blue-50 ${value === opt ? 'bg-blue-100 font-bold' : ''}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
