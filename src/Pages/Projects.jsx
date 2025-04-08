import React from "react";

const projects = [
  {
    title: "Quiz Compitition",
    description:
      "It is Quiz Compition app for general knowledge you can Answer the question it will decide your general knowledge and apptitude as well as Resonin  using React, MVC, and MSSQL.",
    technologies: ["React", "Tailwind Css", "JavaScript"],
    demoLink:
      "https://quiz-compitition-59jr2wum1-ashish-kumars-projects-92c0bbf1.vercel.app/",
    codeLink: "https://github.com/Ashish-Kumar-git-design/QuizCompitition",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "It is Tic Tac Toe Game only for enjoyment purpose React, MVC, and MSSQL.",
    technologies: ["React", "Tailwind Css", "JavaScript"],
    demoLink:
      "https://tic-tac-toe-game-pjt8zrn7p-ashish-kumars-projects-92c0bbf1.vercel.app/",
    codeLink: "https://github.com/Ashish-Kumar-git-design/TicTacToeGame",
  },
  {
    title: "Weather App",
    description:
      "A web application for checking the weather condition according to the location it will also show wind speed, humidity and Temprature using React, MVC, and MSSQL.",
    technologies: ["React", "MVC", "JavaScript", "MSSQL"],
    demoLink:
      "https://weather-app-git-main-ashish-kumars-projects-92c0bbf1.vercel.app/",
    codeLink: "https://github.com/Ashish-Kumar-git-design/WeatherApp",
  },
  {
    title: "Counter App",
    description:
      "A web application for managing library books, members, and lending systems using React, MVC, and MSSQL.",
    technologies: ["React", "MVC", "JavaScript", "MSSQL"],
    demoLink: "../SomeTaskApp/Counter",
    codeLink: "#",
  },
  {
    title: "First Portfolio",
    description:
      "It is my first portfolio for my hands on experience using React and MSSQL.",
    technologies: ["React", "MVC", "JavaScript", "MSSQL"],
    demoLink: "https://stellular-shortbread-b6338a.netlify.app/",
    codeLink: "#",
  },
  {
    title: "AU Chat",
    description:
      "A real-time chat application built with React and WebSocket for instant messaging.",
    technologies: ["React", "JavaScript", "WebSocket"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Library Management",
    description:
      "A web application for managing library books, members, and lending systems using React, MVC, and MSSQL.",
    technologies: ["React", "MVC", "JavaScript", "MSSQL"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Hospital Management",
    description:
      "An application to manage patient records, appointments, and medical history using React and MSSQL.",
    technologies: ["React", "MVC", "JavaScript", "MSSQL"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Hackathon 2025",
    description:
      "A real-time Hackathon application built with React and WebSocket for instant participate.",
    technologies: ["React", "JavaScript", "WebSocket"],
    demoLink: "#",
    codeLink: "#",
  },
];

const Project = () => {
  return (
    <section
      className="py-16 px-6 dark:bg-gray-100 bg-gradient-to-r from-gray-700 to-indigo-900"
      id="projects"
    >
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white-900 text-gray-100">
        Here's a list of all the projects I've worked on so far
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative dark:bg-white bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            {/* Gradient Background (Light Mode Only) */}
            <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 dark:opacity-0 dark:group-hover:opacity-30 bg-gradient-to-r from-gray-600 via-gray-700 to-indigo-900 opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-lg"></div>

            {/* Project Content */}
            <h3 className="text-2xl font-semibold dark:text-gray-800 text-gray-100 mb-4">
              {project.title}
            </h3>
            <p className="dark:text-gray-600 text-gray-300 mb-6">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-semibold text-white bg-yellow-300 rounded-full border-2 border-transparent dark:group-hover:border-white group-hover:border-gray-300 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <a
                href={project.demoLink}
                className="inline-block py-2 px-4 dark:bg-blue-500 dark:text-white bg-blue-400 text-white rounded-lg text-sm font-semibold transform transition-all duration-300 dark:hover:bg-blue-600 hover:bg-blue-300 hover:scale-105"
              >
                View Project
              </a>
              <a
                href={project.codeLink}
                className="inline-block py-2 px-4 dark:bg-gray-800 dark:text-white bg-gray-600 text-white rounded-lg text-sm font-semibold transform transition-all duration-300 dark:hover:bg-gray-900 hover:bg-gray-700 hover:scale-105"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
