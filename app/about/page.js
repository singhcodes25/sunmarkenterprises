'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject, faCircleUser, faCalendar } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <>
      <div className="sticky top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div
        className="h-64 sm:h-80 flex flex-col bg-cover bg-center"
        style={{ backgroundImage: "url('/bg photo.jpeg')" }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white pt-20 sm:pt-24">
          About Us
        </h1>
        <h2 className="mt-2 text-sm sm:text-md font-semibold text-center text-white">
          Home / About
        </h2>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Text */}
          <div className="lg:w-1/2">
            <p className="text-2xl sm:text-3xl text-green-600 font-bold mb-4">
              Leading Solar Installation Experts Since 2015
            </p>
            <p className="text-gray-700 leading-relaxed text-md sm:text-lg">
              Sunmark Enterprises is a trusted solar energy solutions provider
              committed to delivering sustainable, reliable, and cost-effective
              solar installations. We specialize in design, supply, installation,
              and maintenance of solar power systems tailored to individual energy needs.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
            <Image
              src="/engineer-think.png"
              alt="About Us"
              width={500}
              height={300}
              className="w-full max-w-md h-auto rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us / Stats */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Years Experience */}
          <div className="bg-amber-100 h-32 rounded-lg flex items-center justify-center gap-4 p-4">
            <FontAwesomeIcon icon={faCalendar} className="text-4xl sm:text-5xl text-green-600" />
            <div>
              <p className="text-2xl sm:text-4xl font-bold text-center">15+</p>
              <p className="text-sm sm:text-base text-center">Years Experience</p>
            </div>
          </div>

          {/* Projects Completed */}
          <div className="bg-amber-100 h-32 rounded-lg flex items-center justify-center gap-4 p-4">
            <FontAwesomeIcon icon={faDiagramProject} className="text-4xl sm:text-5xl text-green-600" />
            <div>
              <p className="text-2xl sm:text-4xl font-bold text-center">200+</p>
              <p className="text-sm sm:text-base text-center">Projects Completed</p>
            </div>
          </div>

          {/* Satisfied Clients */}
          <div className="bg-amber-100 h-32 rounded-lg flex items-center justify-center gap-4 p-4">
            <FontAwesomeIcon icon={faCircleUser} className="text-4xl sm:text-5xl text-green-600" />
            <div>
              <p className="text-2xl sm:text-4xl font-bold text-center">99%</p>
              <p className="text-sm sm:text-base text-center">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
};

export default About;
