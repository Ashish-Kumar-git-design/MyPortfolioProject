// // pages/Home.js
// import React from "react";
import image from "../image/my3image.jpg";
// import "../index.css";

// const Home = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center text-3xl">
//       <h1 className="text-white dark:text-black">Hi! I'm Ashish Kumar</h1>
//       <div className="change-text">
//         <h3>And I'm</h3>
//       </div>
//     </div>
//   );
// };

//export default Home;

// src/Home.js
//import React from "react";
//import "./index.css"; // Make sure to import Tailwind CSS in your project

// const Home = () => {
//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
//       {/* Background Gradient */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-40"
//         style={{
//           backgroundImage: "url('https://your-image-url.com/image.jpg')",
//         }}
//       ></div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-6xl mx-auto p-6 text-center lg:text-left flex flex-col lg:flex-row items-center">
//         {/* Left Side: Description */}
//         <div className="lg:w-1/2 text-white space-y-6">
//           <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
//             Hi, I'm <span className="text-yellow-300">Ashish Kumar</span>
//           </h1>
//           <p className="text-lg sm:text-xl leading-relaxed">
//             I am a passionate web developer with experience in building scalable
//             and efficient applications. I specialize in front-end development
//             with a strong understanding of back-end integration. Let's build
//             amazing projects together.
//           </p>
//           <div className="flex space-x-4 justify-center lg:justify-start">
//             <a
//               href="/download-cv"
//               className="px-6 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
//             >
//               Download CV
//             </a>
//             <a
//               href="/contact"
//               className="px-6 py-2 rounded-full text-white bg-pink-600 hover:bg-pink-700 transition-all duration-300"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>

//         {/* Right Side: Image */}
//         <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
//           <img
//             src={image}
//             alt="Ashish Kumar"
//             className="w-48 h-48 sm:w-64 sm:h-64 rounded-full shadow-lg object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// src/Home.js
import React from "react";

const Home = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight  text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-green-500 to-yellow-500 bg-clip-text text-transparent">
            Hi, I'm <span className="text-yellow-300">Ashish Kumar</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            I am a passionate web developer with experience in building scalable
            and efficient applications. I specialize in front-end development
            with a strong understanding of back-end integration. Let's build
            amazing projects together.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start">
            <a
              href="/download-cv"
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
