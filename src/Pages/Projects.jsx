import React from "react";

const projects = [
  {
    title: "Quiz Compitition",
    description:
      "A web application for managing library books, members, and lending systems using React, MVC, and MSSQL.",
    technologies: ["React", "Tailwind Css", "JavaScript"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A web application for managing library books, members, and lending systems using React, MVC, and MSSQL.",
    technologies: ["React", "Tailwind Css", "JavaScript"],
    demoLink: "#",
    codeLink: "#",
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
      "An application to manage patient records, appointments, and medical history using React and MSSQL.",
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
    title: "AU Chat",
    description:
      "A real-time chat application built with React and WebSocket for instant messaging.",
    technologies: ["React", "JavaScript", "WebSocket"],
    demoLink: "#",
    codeLink: "#",
  },
];

const Project = () => {
  return (
    <section className="py-16 px-6 bg-gray-100" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">
        Here's a list of all the projects I've worked on so far
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-lg"></div>

            {/* Project Content */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-6">{project.description}</p>

            {/* Technologies */}
            <div className="flex space-x-4 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-semibold text-white bg-yellow-300 rounded-full border-2 border-transparent group-hover:border-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <a
                href={project.demoLink}
                className="inline-block py-2 px-4 bg-blue-500 text-white rounded-lg text-sm font-semibold transform transition-all duration-300 hover:bg-blue-600 hover:scale-105"
              >
                View Project
              </a>
              <a
                href={project.codeLink}
                className="inline-block py-2 px-4 bg-gray-800 text-white rounded-lg text-sm font-semibold transform transition-all duration-300 hover:bg-gray-900 hover:scale-105"
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
