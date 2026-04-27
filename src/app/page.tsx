export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Welcome to BlogSite
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover amazing articles, insights, and stories from our community
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/blogs"
              className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              Read Blogs
            </a>
            <a
              href="/faq"
              className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
            <p className="text-gray-600">
              Read carefully curated articles on topics that matter to you
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              Join a vibrant community of readers and content creators
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-600">
              Never miss an article with our latest content updates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
