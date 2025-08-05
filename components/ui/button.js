import React from 'react';

export function Button({ children, variant = 'default', className = '', ...props }) {
  let base = 'px-4 py-2 rounded font-medium focus:outline-none transition';
  let variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 bg-white hover:bg-blue-50',
  };
  return (
    <button className={`${base} ${variants[variant] || ''} ${className}`} {...props}>
      {children}
    </button>
  );
}
