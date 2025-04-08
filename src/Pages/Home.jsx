import image from "../image/my3image.jpg";
import { useState, useEffect } from "react";
import React from "react";

const Home = () => {
  const texts = ["Ashish Kumar", "Web Developer", "Coder", "Data Analyst"];
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    const interval = setInterval(() => {
      setDisplayText(currentText.substring(0, charIndex));

      if (isForward) {
        if (charIndex < currentText.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsForward(false), 1000);
          clearInterval(interval);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsForward(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, isForward, textIndex]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-blue-900">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://your-image-url.com/image.jpg')",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto p-6 text-center lg:text-left flex flex-col sm:flex-row items-center">
        {/* Left Side: Description */}
        <div className="sm:w-1/2 text-white space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-yellow-300 via-green-500 to-yellow-500 bg-clip-text text-transparent">
            Hi, I'm <span className="text-yellow-300">{displayText}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            I am a passionate web developer with experience in building scalable
            and efficient applications. I specialize in front-end development
            with a strong understanding of back-end integration. Let's build
            amazing projects together.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start">
            <a
              href="https://red-millisent-26.tiiny.site"
              className="px-6 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
            >
              Download CV
            </a>
            <a
              href="/contact"
              className="px-6 py-2 rounded-full text-white bg-pink-600 hover:bg-pink-700 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="sm:w-1/2 mt-8 sm:mt-0 flex justify-center sm:justify-end">
          <img
            src={image}
            alt="Ashish Kumar"
            className="w-80 h-80 rounded-full shadow-2xl shadow-green-500 drop-shadow-lg transition-all duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1 hover:shadow-yellow-200 hover:drop-shadow-[0_0_25px_rgba(255,105,180,2)] hover:rotate-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
