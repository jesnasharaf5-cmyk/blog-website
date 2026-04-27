'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';

import { FAQ } from '@/types';

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/auth');
      return;
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!user) return;

    const fetchFaqs = async () => {
      try {
        const response = await fetch('/api/faq');
        const data = await response.json();

        if (response.ok) {
          setFaqs(data.faqs || []);
        } else {
          setError(data.error || 'Failed to fetch FAQs');
        }
      } catch (err) {
        setError('An error occurred while fetching FAQs');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [user]);

  const handleSubmitSupport = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess(false);
    setFormLoading(true);

    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, subject, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        setFormError(data.error || 'Failed to send message');
        return;
      }

      setFormSuccess(true);
      setEmail('');
      setSubject('');
      setMessage('');

      setTimeout(() => setFormSuccess(false), 3000);
    } catch (err) {
      setFormError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setFormLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f5f5f5]">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans">
      {/* ============================================ */}
      {/* SECTION 1: Top Header (Blue Navbar)          */}
      {/* ============================================ */}
      <header className="bg-[#1f5f8b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-[#1f5f8b] font-bold text-lg">C</span>
              </div>
              <span className="text-white text-xl font-bold tracking-wide">
                CLICON
              </span>
            </Link>

            {/* Center: Search Bar */}
            <div className="flex-1 max-w-xl mx-8">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full h-12 pl-5 pr-14 rounded-full border-0 outline-none text-gray-900 bg-white shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#ff7a2f] hover:bg-[#e66a1f] text-white p-2.5 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Right: Icons */}
            <div className="flex items-center" style={{ gap: '20px' }}>
              <button className="text-white hover:text-[#ff7a2f] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </button>
              <button className="text-white hover:text-[#ff7a2f] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button className="text-white hover:text-[#ff7a2f] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================ */}
      {/* SECTION 2: Secondary Navigation              */}
      {/* ============================================ */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Left: Category Dropdown & Links */}
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-700 hover:text-[#1f5f8b] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span className="font-medium text-sm">All Category</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <Link
                href="/blogs"
                className="text-gray-600 hover:text-[#1f5f8b] transition-colors text-sm"
              >
                Track Order
              </Link>
              <Link
                href="/blogs"
                className="text-gray-600 hover:text-[#1f5f8b] transition-colors text-sm"
              >
                Compare
              </Link>
              <Link
                href="/faq"
                className="text-gray-600 hover:text-[#1f5f8b] transition-colors text-sm"
              >
                Customer Support
              </Link>
              <Link
                href="/faq"
                className="text-gray-600 hover:text-[#1f5f8b] transition-colors text-sm"
              >
                Need Help
              </Link>
            </div>

            {/* Right: Phone */}
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#1f5f8b]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-medium text-sm">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* Breadcrumb                                   */}
      {/* ============================================ */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-[#1f5f8b] transition-colors"
            >
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href="/blogs"
              className="hover:text-[#1f5f8b] transition-colors"
            >
              Pages
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-[#1f5f8b] font-medium">FAQs</span>
          </nav>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 3: Main Content                      */}
      {/* ============================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">
          Frequently Asked Questions
        </h1>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT: FAQ Accordion (65%) */}
          <div className="w-full lg:w-[65%]">
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <p className="text-gray-600">Loading FAQs...</p>
              </div>
            ) : faqs.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">No FAQs available yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {faqs.map((faq) => {
                  const isOpen = expandedId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="rounded-lg overflow-hidden shadow-sm"
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() =>
                          setExpandedId(isOpen ? null : faq.id)
                        }
                        className={`w-full px-6 py-4 flex items-center justify-between transition-all duration-200 ${
                          isOpen
                            ? 'bg-[#ff7a2f] text-white'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        <span className="font-semibold text-left pr-4 text-base">
                          {faq.question}
                        </span>
                        <span className="flex-shrink-0 ml-2">
                          {isOpen ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 12H4"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          )}
                        </span>
                      </button>

                      {/* Accordion Content */}
                      {isOpen && (
                        <div className="bg-white p-6 shadow-sm border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* RIGHT: Support Form (35%) */}
          <div className="w-full lg:w-[35%]">
            <div className="bg-[#f5e6b3] rounded-lg p-6 lg:p-8 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 leading-snug">
                Don&apos;t find your answer, Ask for support.
              </h2>

              {formSuccess && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {formError && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                  {formError}
                </div>
              )}

              <form
                onSubmit={handleSubmitSupport}
                className="mt-6 space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f5f8b] focus:border-transparent bg-white text-sm"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f5f8b] focus:border-transparent bg-white text-sm"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message <span className="text-gray-500">(Optional)</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f5f8b] focus:border-transparent bg-white resize-y min-h-[120px] text-sm"
                    placeholder="Tell us more..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={formLoading}
                  className="w-full bg-[#ff7a2f] hover:bg-[#e66a1f] text-white py-2.5 rounded-lg transition-colors"
                >
                  {formLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SECTION 4: Footer                            */}
      {/* ============================================ */}
      <footer className="bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Column 1: Logo & Contact */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-[#1f5f8b] font-bold text-lg">C</span>
                </div>
                <span className="text-xl font-bold">CLICON</span>
              </div>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                Customer Icon — Your trusted online shopping destination.
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            {/* Column 2: Top Categories */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                Top Categories
              </h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li>
                  <Link
                    href="/blogs"
                    className="hover:text-white transition-colors"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="hover:text-white transition-colors"
                  >
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="hover:text-white transition-colors"
                  >
                    Home & Garden
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="hover:text-white transition-colors"
                  >
                    Sports
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="hover:text-white transition-colors"
                  >
                    Books
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="hover:text-white transition-colors"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth"
                    className="hover:text-white transition-colors"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: App Download */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                Download App
              </h4>
              <div className="space-y-2.5">
                <button className="w-full bg-gray-800 hover:bg-gray-700 px-4 py-2.5 rounded text-sm transition-colors flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.72-3.06 1.64-.68.82-1.27 2.15-1.11 3.24 1.18.09 2.38-.59 3.1-1.77z" />
                  </svg>
                  App Store
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-700 px-4 py-2.5 rounded text-sm transition-colors flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z" />
                  </svg>
                  Google Play
                </button>
              </div>
            </div>

            {/* Column 5: Tags */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Electronics', 'Fashion', 'Sale', 'New', 'Best', 'Hot'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 border border-gray-600 rounded text-xs text-gray-400 hover:border-[#ff7a2f] hover:text-[#ff7a2f] cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 CLICON. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

