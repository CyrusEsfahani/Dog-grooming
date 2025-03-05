import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
    content: "Regular grooming is essential for your dog's health and well-being. It helps prevent skin issues, detect early health problems, and strengthens the bond between you and your pet. Regular grooming sessions allow you to check for any abnormalities such as skin infections, lumps, or parasites. Additionally, grooming helps distribute natural oils throughout your dog's coat, keeping it healthy and shiny. It's also an excellent opportunity to check your dog's ears, eyes, and paws for any signs of infection or injury. Establishing a regular grooming routine early in your dog's life will make the process more enjoyable for both you and your pet.",
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Dog being groomed'
  },
  {
    id: 2,
    title: 'Dental Care Tips for Your Dog',
    content: "Maintaining your dog's dental hygiene is crucial for preventing gum disease and other health issues. Learn about proper brushing techniques and recommended dental care products. Regular dental care can prevent bad breath, tooth decay, and more serious health problems that can arise from poor oral hygiene. Start by introducing your dog to tooth brushing gradually, using dog-specific toothpaste and a soft-bristled brush. Make the experience positive by offering praise and rewards. Consider dental chews and toys as supplements to brushing, but remember they're not replacements for regular brushing.",
    image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Dog dental care'
  },
  {
    id: 3,
    title: 'Bath Time Best Practices',
    content: 'Discover the right way to bathe your dog, including choosing the appropriate shampoo, water temperature, and drying techniques. Make bath time a positive experience for your furry friend. Use lukewarm water and dog-specific shampoo to avoid skin irritation. Start from the neck and work your way down, being careful to avoid getting water in their ears and eyes. Rinse thoroughly as any soap residue can cause skin irritation. After bathing, use a towel to remove excess water and consider using a blow dryer on a low, warm setting if your dog tolerates it. Remember to praise and reward your dog throughout the process.',
    image: '/images/dog-bath.jpg',
    alt: 'Dog taking a bath'
  },
  {
    id: 4,
    title: 'Nail Care and Paw Maintenance',
    content: 'Learn why regular nail trimming is important and how to properly care for your dog\'s paws. Discover tips for making nail trimming a stress-free experience. Long nails can cause discomfort and lead to posture problems or even injuries. Start nail trimming sessions when your dog is calm and relaxed. Use proper dog nail clippers and trim small amounts at a time to avoid cutting the quick. If your dog has clear nails, you can see the quick as a pink area. For dark nails, cut small amounts and look for a black dot in the center, which indicates you\'re approaching the quick.',
    image: '/images/dog-paw.jpg',
    alt: 'Dog paw care'
  },
  {
    id: 5,
    title: 'Brushing Techniques for Different Coat Types',
    content: 'Different dog breeds require different brushing techniques. Learn about the best tools and methods for maintaining your dog\'s specific coat type. For short-haired breeds, use a curry brush or grooming mitt to remove loose fur and distribute natural oils. Medium-length coats benefit from slicker brushes and metal combs to prevent matting. Long-haired breeds need daily brushing with pin brushes and metal combs to prevent tangles and mats. Double-coated breeds require special attention during shedding seasons, using undercoat rakes and de-shedding tools.',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Dog being brushed'
  },
  {
    id: 6,
    title: 'Signs of Skin Problems in Dogs',
    content: 'Learn to recognize common skin issues in dogs and when to seek veterinary care. Discover preventive measures to keep your dog\'s skin healthy. Watch for signs like excessive scratching, redness, hair loss, or changes in skin color. Common skin problems include allergies, hot spots, and parasites. Regular grooming helps you spot these issues early. Maintain a healthy diet and use appropriate flea and tick prevention to protect your dog\'s skin. If you notice persistent skin problems, consult your veterinarian for proper diagnosis and treatment.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Healthy dog coat'
  }
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Blog post not found</h1>
        <button
          onClick={() => navigate('/blog')}
          className="mt-4 text-blue-600 hover:text-blue-800"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-8 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => navigate('/blog')}
        className="mb-6 text-[#f4b41a] font-semibold hover:text-[#f4b41a]/80 flex items-center"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blog
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.alt}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">{post.title}</h1>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">{post.content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPost;