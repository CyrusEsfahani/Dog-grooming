import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    alt: 'Dog getting groomed'
  },
  {
    url: 'https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80',
    alt: 'Dog getting bath'
  },
  {
    url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80',
    alt: 'Professional dog grooming'
  },
  {
    url: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80',
    alt: 'Dog hair styling'
  },
  {
    url: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80',
    alt: 'Dog nail trimming'
  },
  {
    url: 'https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80',
    alt: 'Dog blow drying'
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only auto-advance when not hovering
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Images */}
      {images.map((image, index) => (
        <motion.div
          key={image.url}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 0.95
          }}
          transition={{ 
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 1, ease: "easeOut" }
          }}
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: index === currentIndex ? 1 : 0
          }}
          role="img"
          aria-label={image.alt}
        />
      ))}
      
      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
        <motion.button 
          className="bg-white/70 hover:bg-white text-gray-800 rounded-full p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToPrevious}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <motion.button 
          className="bg-white/70 hover:bg-white text-gray-800 rounded-full p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToNext}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`h-2 rounded-full ${index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
            whileHover={{ scale: 1.2 }}
            onClick={() => goToSlide(index)}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;