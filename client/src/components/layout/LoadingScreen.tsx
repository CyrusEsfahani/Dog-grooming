import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000; // Changed from 8000 to 5000 ms (5 seconds)
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    const progressTimer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      if (currentStep >= steps) {
        clearInterval(progressTimer);
      }
    }, interval);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-neutral-50 to-neutral-100 p-8"
        >
          {/* Image Container - 50% height */}
          <div className="relative w-full max-w-2xl h-[50vh] mb-12 overflow-hidden rounded-xl shadow-2xl">
            <motion.img
              src="https://images.unsplash.com/photo-1546975490-a79abdd54533?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Cute dog sitting patiently for treat"
              className="w-full h-full object-contain" // Changed back to object-contain to show the full dog face
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          {/* Progress Bar - Below the image */}
          <div className="w-full max-w-md">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden shadow-lg">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>
          </div>

          <motion.div
            className="mt-4 text-xl font-light tracking-wider text-gray-700"
            animate={{
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;