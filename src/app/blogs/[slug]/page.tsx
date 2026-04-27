'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

import { Blog } from '@/types';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(null);
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  const relatedQuestions = [
    {
      id: 1,
      question: 'What topics are covered in this article?',
      answer: 'This article covers key insights and practical guidance related to the subject matter. You will find in-depth analysis, real-world examples, and actionable tips that you can apply immediately.',
    },
    {
      id: 2,
      question: 'How can I apply these insights in practice?',
      answer: 'Start by identifying the core concepts discussed in the article. Then, integrate them into your daily workflow or projects step by step. Experiment with small changes first and measure the results before scaling up.',
    },
    {
      id: 3,
      question: 'Where can I find more related content?',
      answer: 'You can explore more related content by visiting our Blogs page. We regularly publish articles on similar topics, and you can use the search feature to find specific subjects that interest you.',
    },
    {
      id: 4,
      question: 'Can I share this blog post with others?',
      answer: 'Yes, you are welcome to share this blog post with others. We encourage spreading knowledge and insights. Please feel free to share the link with your colleagues, friends, or on social media.',
    },
  ];

  useEffect(() => {
    // Redirect if not logged in
    if (!authLoading && !user) {
      router.push('/auth');
      return;
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!user || !slug) return;

    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${slug}`);
        const data = await response.json();

        if (response.ok) {
          setBlog(data.blog);
        } else {
          setError(data.error || 'Failed to fetch blog');
        }
      } catch (err) {
        setError('An error occurred while fetching the blog');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug, user]);

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading blog...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-red-600 text-lg mb-4">
              {error || 'Blog not found'}
            </p>
            <Link
              href="/blogs"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blogs"
          className="text-blue-600 hover:text-blue-700 font-medium mb-6 inline-block"
        >
          ← Back to Blogs
        </Link>

        <article className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>

          <div className="flex items-center gap-4 mb-6 text-gray-600 border-b pb-6">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>
              {new Date(blog.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700 whitespace-pre-wrap">
              {blog.content}
            </p>
          </div>
        </article>

        {/* Related Questions Accordion */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Questions</h2>
          <div className="space-y-3">
            {relatedQuestions.map((q) => {
              const isOpen = expandedQuestionId === q.id;
              return (
                <div key={q.id} className="rounded-lg overflow-hidden shadow-sm">
                  {/* Accordion Header */}
                  <button
                    onClick={() => setExpandedQuestionId(isOpen ? null : q.id)}
                    className={`w-full px-6 py-4 flex items-center justify-between transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#ff7a2f] text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <span className="font-semibold text-left pr-4 text-base">
                      {q.question}
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
                        {q.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
