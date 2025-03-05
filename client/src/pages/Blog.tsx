import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog post placeholders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">Sample Blog Post 1</h2>
          <p className="text-gray-600 mb-4">This is a placeholder for your first blog post content...</p>
          <button className="text-blue-600 hover:text-blue-800">Read More</button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">Sample Blog Post 2</h2>
          <p className="text-gray-600 mb-4">This is a placeholder for your second blog post content...</p>
          <button className="text-blue-600 hover:text-blue-800">Read More</button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">Sample Blog Post 3</h2>
          <p className="text-gray-600 mb-4">This is a placeholder for your third blog post content...</p>
          <button className="text-blue-600 hover:text-blue-800">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;