'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      {/* Top Header - Blue Navbar */}
      <header className="bg-[#1f5f8b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-[#1f5f8b] font-bold text-lg">C</span>
                </div>
                <span className="text-white text-xl font-bold">CLICON</span>
              </Link>
            </div>

            {/* Center: Search Bar */}
            <div className="flex-1 max-w-xl mx-8">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full h-12 pl-4 pr-12 rounded-full border-0 outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#ff7a2f] hover:bg-[#e66a1f] text-white p-2 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Right: Icons */}
            <div className="flex items-center gap-5">
              <button className="text-white hover:text-[#ff7a2f] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
              <button className="text-white hover:text-[#ff7a2f] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="text-white hover:text-[#ff7a2f] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Secondary Navigation */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Left: Category Dropdown & Links */}
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-700 hover:text-[#1f5f8b] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="font-medium">All Category</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <Link href="/blogs" className="text-gray-600 hover:text-[#1f5f8b] transition-colors text-sm">
                Track Order
              </Link>
              <Link href="/blogs" className="text-gray-600 hover:text-[#1f5f8b] transition-colors text-sm">
                Compare
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-[#1f5f8b] transition-colors text-sm">
                Customer Support
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-[#1f5f8b] transition-colors text-sm">
                Need Help
              </Link>
            </div>

            {/* Right: Phone */}
            <div className="flex items-center gap-2 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1f5f8b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium text-sm">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#1f5f8b] font-medium">
                Home
              </Link>
              <Link href="/blogs" className="text-gray-700 hover:text-[#1f5f8b] font-medium">
                Blogs
              </Link>
              <Link href="/faq" className="text-[#1f5f8b] font-medium">
                FAQ
              </Link>
              {user ? (
                <span className="text-sm text-gray-500">Hi, {user.email}</span>
              ) : null}
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <Button onClick={logout} variant="outline" size="sm">
                  Logout
                </Button>
              ) : (
                <Link href="/auth">
                  <Button>Login</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

