import React from 'react';

export default function Footer() {
  const footerItems = [
    { icon: '💬', label: 'Consult with a doctor' },
    { icon: '🛒', label: 'Order Medicines' },
    { icon: '📄', label: 'View medical records' },
    { icon: '🔬', label: 'Book test' },
    { icon: '📚', label: 'Read articles' },
    { icon: '💼', label: 'For healthcare providers' },
  ];

  return (
    <footer className="bg-[#232f7e] border-t py-6 mt-8">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap justify-center items-stretch gap-0 mb-4">
          {footerItems.map((item, idx) => (
            <React.Fragment key={item.label}>
              <a
                href="#"
                className="flex flex-col items-center justify-center px-4 text-white-600 hover:text-blue-600 font-medium pb-1 border-b-2 border-transparent hover:border-blue-600 transition-all duration-200"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm text-center">{item.label}</span>
              </a>
              {idx !== footerItems.length - 1 && (
                <span className="hidden md:inline-block w-px bg-gray-300 mx-2 my-2" style={{height: '40px', alignSelf: 'center'}}></span>
              )}
            </React.Fragment>
          ))}
        </nav>
        <div className="text-center text-white-500 text-sm">
          © {new Date().getFullYear()} Practo Clone. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


