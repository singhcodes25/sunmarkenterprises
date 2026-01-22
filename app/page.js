'use client';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBuilding, faCarBattery, faSolarPanel, faUsers, faProjectDiagram, faRupeeSign, faTools, faFileInvoice } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const items = [
    { icon: <FontAwesomeIcon icon={faSolarPanel} />, text: "High-quality solar panels & equipment" },
    { icon: <FontAwesomeIcon icon={faUsers} />, text: "Experienced installation team" },
    { icon: <FontAwesomeIcon icon={faProjectDiagram} />, text: "End-to-end project support" },
    { icon: <FontAwesomeIcon icon={faRupeeSign} />, text: "Affordable pricing & transparent process" },
    { icon: <FontAwesomeIcon icon={faTools} />, text: "After-sales service & maintenance" },
    { icon: <FontAwesomeIcon icon={faFileInvoice} />, text: "Government Subsidy Assistance & Documentation Support" },
  ];
  return (
    <>
      <div className="sticky top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      {/*---------------------------------- Hero Section ----------------------------------*/}
      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center px-4"
        style={{ backgroundImage: "url('/bg photo.webp')" }}
      >
        <div className="flex justify-center mb-6">
          <Image src="/clean energy.png" alt="Clean Energy" width={160} height={90} />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center">
          Welcome to a better energy investment
        </h1>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
          {[
            { icon: faHouse, text: "Residential", link: "/" },
            { icon: faBuilding, text: "Commercial", link: "/" },
            { icon: faCarBattery, text: "Off-Grid", link: "/" },
            { icon: faSolarPanel, text: "On-Grid", link: "/" },
          ].map((item, i) => (
            <Link key={i} href={item.link}>
              <div className="h-32 flex flex-col w-64 items-center justify-center bg-amber-100 rounded-3xl hover:scale-105 transition">
                <FontAwesomeIcon icon={item.icon} className="text-green-600 text-2xl" />
                <h4 className="text-lg font-semibold mt-4">{item.text}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/*---------------------------------- About Us Section ----------------------------------*/}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-xl font-bold text-center mb-12">
          About Sunmark Enterprises
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-2xl md:text-3xl text-green-600 font-bold mb-6">
              Leading Solar Installation Experts Since 2015
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sunmark Enterprises is a trusted solar energy solutions provider
              committed to delivering sustainable, reliable, and cost-effective
              solar installations.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/engineer-think.png"
              alt="About Us"
              width={450}
              height={300}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>

      {/*---------------------------------- Why Choose Us Section ----------------------------------*/}
      <div className="bg-amber-50 py-16 px-6">
        <h3 className="text-center text-3xl font-bold mb-14">
          Why Choose Us
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {items.map((item, index) => (
            <div key={index}>
              <div className="text-green-600 text-4xl mb-4">
                {item.icon}
              </div>
              <p className="text-lg font-semibold text-gray-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}


