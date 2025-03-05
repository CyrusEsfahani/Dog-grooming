import React from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  alt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Importance of Regular Dog Grooming',
    content: "Regular grooming is essential for your dog's health and well-being. It helps prevent skin issues, detect early health problems, and strengthens the bond between you and your pet...",
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Dog being groomed'
  },
  {
    id: 2,
    title: 'Dental Care Tips for Your Dog',
    content: "Maintaining your dog's dental hygiene is crucial for preventing gum disease and other health issues. Learn about proper brushing techniques and recommended dental care products...",
    image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Dog dental care'
  },
  {
    id: 3,
    title: 'Bath Time Best Practices',
    content: 'Discover the right way to bathe your dog, including choosing the appropriate shampoo, water temperature, and drying techniques. Make bath time a positive experience for your furry friend...',
    image: 'https://images.unsplash.com/photo-1583512603866-910c8542ba1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Dog taking a bath'
  },
  {
    id: 4,
    title: 'Nail Care and Paw Maintenance',
    content: 'Learn why regular nail trimming is important and how to properly care for your dog\'s paws. Discover tips for making nail trimming a stress-free experience...',
    image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Dog paw care'
  },
  {
    id: 5,
    title: 'Brushing Techniques for Different Coat Types',
    content: 'Different dog breeds require different brushing techniques. Learn about the best tools and methods for maintaining your dog\'s specific coat type...',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Dog being brushed'
  },
  {
    id: 6,
    title: 'Signs of Skin Problems in Dogs',
    content: 'Learn to recognize common skin issues in dogs and when to seek veterinary care. Discover preventive measures to keep your dog\'s skin healthy...',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Healthy dog coat'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Dog Hygiene & Grooming Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={post.image}
              alt={post.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
              <motion.button
                className="text-[#f4b41a] font-semibold hover:text-[#f4b41a]/80 flex items-center"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;