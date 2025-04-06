// import React from "react";

// const Contact = () => {
//   return <div>Contact</div>;
// };

// export default Contact;
import React, { useState } from "react";

// Function to handle form submission
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission (e.g., send form data to API or email)
      alert("Form Submitted Successfully!");
      setFormData({
        name: "",
        email: "",
        role: "",
        message: "",
      });
    } else {
      setShowErrorPopup(true);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gradient-to-r from-teal-400 to-blue-500 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

        {/* Error Popup */}
        {showErrorPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-2xl font-semibold mb-4">Form Error</h3>
              <ul>
                {Object.values(errors).map((error, index) => (
                  <li key={index} className="text-sm mb-2">
                    {error}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowErrorPopup(false)}
                className="mt-4 py-2 px-4 bg-red-700 rounded-lg hover:bg-red-800 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-300"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-300"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Role Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="role" className="text-lg font-medium">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-2 p-3  rounded-lg border-2 border-gray-300 focus:border-blue-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-300"
            >
              <option value="" className="text-white">
                Select Role
              </option>
              <option value="student" className="text-black">
                Student
              </option>
              <option value="teacher" className="text-black">
                Teacher
              </option>
              <option value="hr" className="text-black">
                HR
              </option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-300"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
