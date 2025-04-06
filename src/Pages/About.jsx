// import React from "react";

// const About = () => {
//   return <div>About</div>;
// };

// export default About;

import React, { useState } from "react";

const About = () => {
  const [activeSection, setActiveSection] = useState("education");

  // Education Data
  const education = [
    {
      degree: "Bachelor of Computer Science",
      year: "2022 - 2025",
      university: "Aisect University Hazaribag, Jharkhand",
      percentage: "8.5 CGPA",
    },
    {
      degree: "Inter Of Science",
      year: "2020 - 2022",
      university: "Inter Science College, Hazaribag",
      percentage: "91.80%",
    },
    {
      degree: "High School",
      year: "2019 - 2020",
      university: "Digwar High School, Digwar",
      percentage: "79.80%",
    },
  ];

  // Skills Data with predefined percentage
  const skills = [
    { name: "React", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "CSS", percentage: 80 },
    { name: "Node.js", percentage: 75 },
    { name: "MSSQL", percentage: 70 },
    { name: "Java", percentage: 95 },
    { name: "C#", percentage: 85 },
    { name: "Python", percentage: 60 },
    { name: "MVC .NET", percentage: 80 },
    { name: "Team Management", percentage: 70 },
    { name: "Communication Skill", percentage: 85 },
  ];

  return (
    <section
      id="about"
      className="py-16 px-6 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
        <p className="text-2xl font-semibold text-center mb-10">
          Hi! I'm a passionate BCA student with a strong ambition to become a
          Full Stack Web Developer. I thrive on turning ideas into real,
          functional web experiences using my skills in both front-end and
          back-end technologies. Alongside my technical knowledge, I bring
          strong communication, problem-solving, and team management abilities
          that help me work effectively in collaborative environments. I'm
          constantly learning, building, and pushing myself to grow in this
          ever-evolving tech world—and I'm excited to bring value to innovative
          teams and projects!
        </p>
        <p className="text-2xl font-semibold text-center mb-10">
          When I first stepped into the world of technology, I didn’t have all
          the answers—but I had the curiosity and determination to keep
          learning. What started as simple lines of code quickly turned into a
          deep passion for building functional, user-friendly web applications.
          With consistent practice, late-night debugging sessions, and a hunger
          to explore new frameworks and languages, I’ve grown into a confident
          Full Stack Web Developer capable of creating complete, dynamic web
          solutions from the ground up.
        </p>
        <p className="text-2xl font-semibold text-center mb-10">
          Alongside my technical growth, I’ve also honed essential soft skills
          that make me a well-rounded team player. My strengths in
          communication, team management, and problem-solving allow me to work
          effectively in collaborative environments, contribute meaningful
          ideas, and tackle challenges head-on. I believe technology is more
          than just code—it's about creating impactful experiences, and I'm
          excited to bring that mindset to every project I take on.
        </p>

        {/* Navigation to Switch Between Education and Skills */}
        <div className="flex justify-center space-x-6 mb-10">
          <button
            onClick={() => setActiveSection("education")}
            className={`text-lg font-semibold transition-all duration-300 ${
              activeSection === "education" ? "text-yellow-400" : "text-white"
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveSection("skills")}
            className={`text-lg font-semibold transition-all duration-300 ${
              activeSection === "skills" ? "text-yellow-400" : "text-white"
            }`}
          >
            Skills
          </button>
        </div>

        {/* Education Section */}
        {activeSection === "education" && (
          <div className="space-y-8">
            {education.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>
                <p className="text-lg">{item.year}</p>
                <p className="text-gray-400">{item.university}</p>
                <p className="text-gray-400">{item.percentage}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <div className="space-y-6 mt-10">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-lg font-semibold">{skill.name}</p>
                  <p className="text-lg">{skill.percentage}%</p>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <div
                    className={`h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full transition-all duration-500`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
