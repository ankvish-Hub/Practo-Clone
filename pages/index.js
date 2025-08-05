'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {ChevronDown } from 'lucide-react';
import HeroSection from '@/components/ui/HeroSection';
import Footer from '@/components/Footer';

export default function Header() {
  const [] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-gray-800">•Practo•</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/doctors" 
              className="text-gray-700 hover:text-blue-600 font-medium border-b-2 border-blue-600 pb-4"
            >
              Find Doctors
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Video Consult
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Surgeries
            </Link>
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* For Corporates Dropdown */}
            <div className="relative group flex items-center space-x-2">
              <Badge className="bg-blue-600 text-white">NEW</Badge>
              <span className="text-gray-700 cursor-pointer">For Corporates</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
              {/* Dropdown menu */}
              <div className="absolute left-0 top-full mt-2 w-56 bg-white text-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity z-20">
                <a href="#" className="block px-4 py-2 hover:bg-blue-50">Health & Wellness Plans</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50">Group Insurance</a>
              </div>
            </div>

            {/* For Providers Dropdown */}
            <div className="relative group flex items-center space-x-2">
              <span className="text-gray-700 cursor-pointer">For Providers</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
              {/* Dropdown menu */}
              <div className="absolute left-0 top-full mt-2 w-64 bg-white text-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity z-20">
                <a href="#" className="block px-4 py-2 hover:bg-blue-50">Practo Prime</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50">Software For Providers</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50">List Your Practice For Free</a>
              </div>
            </div>

            {/* Security & Help Dropdown */}
            <div className="relative group flex items-center space-x-2">
              <span className="text-gray-700 cursor-pointer">Security & help</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
              {/* Dropdown menu */}
              <div className="absolute left-0 top-full mt-2 w-56 bg-white text-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity z-20">
                <a href="#" className="block px-4 py-2 hover:bg-blue-50">Data Security</a>
                <a href="#" className="block px-4 py-2 hover:bg-blue-50">Help</a>
              </div>
            </div>

            <Link href="/login" passHref>
              <Button as="a" variant="outline">Login / Signup</Button>
            </Link>
          </div>
          
          

          
        </div>

        

        

         
      </div>
      
      <HeroSection />  
      <Footer />
    </header>
    
    
    

    
  );
   
  
}
