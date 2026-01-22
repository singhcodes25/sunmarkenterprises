'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import axios from 'axios';


const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    bill: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/contact', formData);

      alert(res.data.message);
      setFormData({
        name: "",
        email: "",
        location: "",
        bill: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="sticky top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div
        className="h-64 sm:h-80 flex flex-col bg-cover bg-center"
        style={{ backgroundImage: "url('/bg photo.webp')" }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white pt-20 sm:pt-24">
          Get a Quote
        </h1>
        <h2 className="mt-2 text-sm sm:text-md font-semibold text-center text-white">
          Home / Get A Quote
        </h2>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 bg-amber-100 sm:rounded-2xl my-10 sm:w-5/12">
        <h4 className="text-center text-2xl sm:text-3xl text-green-600 font-semibold mb-8">
          Get your Free Solar Quote!
        </h4>

        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Name */}
          <div>
            <label className="block mb-2 text-md sm:text-lg font-semibold">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className="border-gray-300 bg-white p-2 pl-4 w-full rounded-2xl text-md"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-md sm:text-lg font-semibold">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className="border-gray-300 bg-white p-2 pl-4 w-full rounded-2xl text-md"
            />
          </div>

          {/* Type of Location & Electricity Bill */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-md sm:text-lg font-semibold">
                Type of Location <span className="text-red-600">*</span>
              </label>
              <select
                name='location'
                value={formData.location}
                onChange={handleChange}
                required
                className="border-gray-300 bg-white p-2 pl-4 w-full rounded-2xl text-md"
              >
                <option value="" disabled>Select location type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Residential Trusts">Residential Trusts</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-md sm:text-lg font-semibold">
                Electricity Bill <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                placeholder="Average monthly bill"
                name='bill'
                value={formData.bill}
                onChange={handleChange}
                required
                className="border-gray-300 bg-white p-2 w-full rounded-2xl text-md"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-2 text-md sm:text-lg font-semibold">
              Subject <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border-gray-300 bg-white p-2 pl-4 w-full rounded-2xl text-md"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-md sm:text-lg font-semibold">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              name='message'
              placeholder="Enter your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="border-gray-300 bg-white p-2 w-full rounded-2xl text-md"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="bg-[#2C7C25] text-white px-6 sm:px-9 py-2 sm:py-3 rounded-3xl cursor-pointer active:bg-green-800 active:text-gray-100">
              Submit
            </button>
          </div>

          <p className="text-center text-xs text-gray-700">
            By submitting this form, you agree to share your details with us.
          </p>

        </form>
      </div>

      <Footer />
    </>
  );
};

export default GetQuote;
