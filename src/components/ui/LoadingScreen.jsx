import React from 'react';
import { motion } from 'framer-motion';

/**
 * Premium Loading Screen Component
 * Features smooth animations and wellness branding
 */
function LoadingScreen({ message = 'Loading your Fluxium experience...' }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          className="mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/fluxium-logo.svg" alt="Fluxium" className="w-20 h-20 mx-auto" />
        </motion.div>

        {/* App Name */}
        <motion.h1
          className="text-2xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          Fluxium
        </motion.h1>

        {/* Loading Message */}
        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {message}
        </motion.p>

        {/* Loading Spinner */}
        <motion.div
          className="flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-primary-300 rounded-full"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-64 h-1 bg-gray-200 rounded-full mx-auto mt-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary-300 to-primary-400 rounded-full"
            animate={{
              x: [-256, 256],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default LoadingScreen;