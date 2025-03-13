"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Have any questions? Reach out to us and we’ll get back to you as soon
          as possible.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:bg-primary-dark transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
          <p className="text-gray-600 mt-2">123 Main Street, Your City, Country</p>
          <p className="text-gray-600">Email: contact@yourcompany.com</p>
          <p className="text-gray-600">Phone: +123 456 7890</p>
        </div>

        {/* Google Map */}
        <div className="mt-6">
          <iframe
            className="w-full h-64 rounded-md shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093974!2d144.95373521531606!3d-37.817209879751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772a9a6d6f24c6!2sYour%20Business!5e0!3m2!1sen!2sus!4v1632915278933!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
