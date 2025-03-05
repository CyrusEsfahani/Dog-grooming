import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
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
    </div>
  );
};

export default Carousel;