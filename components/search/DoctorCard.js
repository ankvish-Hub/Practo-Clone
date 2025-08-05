import React from 'react';
import Image from 'next/image';

export default function DoctorCard({ doc }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg shadow border border-blue-100 p-4 md:p-6 gap-6 hover:shadow-xl transition">
      <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-blue-200">
        <Image 
          src={doc.image.replace('/public','')}
          alt={doc.name}
          width={80}
          height={80}
          className="w-20 h-20 object-contain rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          {doc.ad && <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">AD</span>}
          <span className="text-lg font-semibold text-blue-900 hover:underline cursor-pointer">{doc.name}</span>
        </div>
        <div className="text-blue-700 text-sm mb-1">{doc.type}</div>
        <div className="text-gray-600 text-sm mb-1">{doc.experience} experience</div>
        <div className="text-gray-600 text-sm mb-1">{doc.location}{doc.city ? `, ${doc.city}` : ''}</div>
        <div className="text-gray-600 text-sm mb-1">₹{doc.fees} Consultation Fees</div>
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded">{doc.rating}%</span>
          <span className="text-blue-700 text-xs underline cursor-pointer">{doc.stories} Patient Stories</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-end w-full md:w-48 mt-4 md:mt-0">
        {doc.available && <span className="text-green-600 text-sm flex items-center gap-1">&#x1F4C5; Available Today</span>}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold w-full">Book Clinic Visit</button>
        <button className="border border-blue-500 text-blue-600 px-4 py-2 rounded font-semibold w-full">Contact Clinic</button>
      </div>
    </div>
  );
}
