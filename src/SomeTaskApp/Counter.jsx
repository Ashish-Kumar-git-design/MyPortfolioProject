import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center"
      >
        <motion.h1
          className="text-5xl font-bold text-white mb-6"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Counter: {count}
        </motion.h1>

        <div className="flex gap-6 justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleIncrease}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-2xl text-lg font-medium"
          >
            Increase
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleDecrease}
            className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-2xl text-lg font-medium"
          >
            Decrease
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
