import React from 'react'
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBuilding, faCarBattery, faSolarPanel, faFileInvoice, faPlug } from '@fortawesome/free-solid-svg-icons';

const services = () => {
  return (
    <>
    <div className="sticky top-0 left-0 w-full z-50">
        <Navbar/>
        </div>
      <div>
        <div>
          <div>
            <div className="h-80 flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/bg photo.webp')" }}>
              <h1 className="text-4xl font-bold text-center text-white pt-24">
                Our Services
              </h1>
              <h2 className="mt-2 text-md font-semibold text-center text-white">
                Home / Services
              </h2>
            </div>

          </div>

        </div>
        <div className="mb-20 px-6 max-w-5xl mx-auto mt-14">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1 flex justify-center mt-7">
              <Image
                src="/customer-service.png"
                alt="About Us"
                width={180}
                height={100}
              />
            </div>
            <div className="flex-1 relative">
              <p className="text-md leading-loose pt-12 text-gray-700">
                We are committed to providing sustainable energy solutions to our clients while also assisting them in availing solar subsidies. Our team of experts ensures high-quality installations and excellent customer service, making us a trusted partner in the renewable energy sector.
              </p>
            </div>
          </div>
        </div>

        {/*---------------------------------- What We Offer Section ----------------------------------*/}
        <div className="px-12 py-16 bg-amber-50">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-14">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">

            {/* Residential */}
            <div className="group">
              <div className="flex justify-center mb-4 text-green-600 text-4xl group-hover:scale-110 transition">
                <FontAwesomeIcon icon={faHouse} />
              </div>
              <p className="text-lg font-semibold text-gray-700">
                Residential Solar Solutions
                <span className="block h-1 w-12 bg-green-500 mx-auto mt-4 rounded-full"></span>
              </p>
              <p className="mt-3 text-gray-600 text-sm">
                Rooftop solar systems designed to reduce electricity bills and increase energy independence.
              </p>
            </div>

            {/* Commercial */}
            <div className="group">
              <div className="flex justify-center mb-4 text-green-600 text-4xl group-hover:scale-110 transition">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <p className="text-lg font-semibold text-gray-700">
                Commercial Solar Solutions
                <span className="block h-1 w-12 bg-green-500 mx-auto mt-4 rounded-full"></span>
              </p>
              <p className="mt-3 text-gray-600 text-sm">
                High-capacity solar solutions for factories, offices, and commercial buildings.
              </p>
            </div>

            {/* On-Grid */}
            <div className="group">
              <div className="flex justify-center mb-4 text-green-600 text-4xl group-hover:scale-110 transition">
                <FontAwesomeIcon icon={faSolarPanel} />
              </div>
              <p className="text-lg font-semibold text-gray-700">
                On-Grid Solar Systems
                <span className="block h-1 w-12 bg-green-500 mx-auto mt-4 rounded-full"></span>
              </p>
              <p className="mt-3 text-gray-600 text-sm">
                Flexible system configurations tailored to your energy needs and location.
              </p>
            </div>
            {/* Off-Grid */}
            <div className="group">
              <div className="flex justify-center mb-4 text-green-600 text-4xl group-hover:scale-110 transition">
                <FontAwesomeIcon icon={faCarBattery} />
              </div>
              <p className="text-lg font-semibold text-gray-700">
                Off-Grid Solar Systems
                <span className="block h-1 w-12 bg-green-500 mx-auto mt-4 rounded-full"></span>
              </p>
              <p className="mt-3 text-gray-600 text-sm">
                Flexible system configurations tailored to your energy needs and location.
              </p>
            </div>
            {/* Hybrid */}
            <div className="group">
              <div className="flex justify-center mb-4 text-green-600 text-4xl group-hover:scale-110 transition">
                <FontAwesomeIcon icon={faPlug} />
              </div>
              <p className="text-lg font-semibold text-gray-700">
                Hybrid Solar Systems
                <span className="block h-1 w-12 bg-green-500 mx-auto mt-4 rounded-full"></span>
              </p>
              <p className="mt-3 text-gray-600 text-sm">
                Flexible system configurations tailored to your energy needs and location.
              </p>
            </div>
            {/* Maintenance */}
            <div className="group">
              <div className="flex justify-center mb-4 text-green-600 text-4xl group-hover:scale-110 transition">
                <FontAwesomeIcon icon={faFileInvoice} />
              </div>
              <p className="text-lg font-semibold text-gray-700">
                Maintenance & Support Assistance
                <span className="block h-1 w-12 bg-green-500 mx-auto mt-4 rounded-full"></span>
              </p>
              <p className="mt-3 text-gray-600 text-sm">
                Regular maintenance, performance checks, and long-term support for maximum efficiency.
              </p>
            </div>

          </div>
        </div>
      </div>
<Footer/>

    </>

  )
}

export default services
