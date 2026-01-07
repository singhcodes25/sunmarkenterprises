'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Contact */}
          <div>
            <h5 className="text-md text-[#3a9f31] pb-4">Contact Us</h5>
            <Link href="mailto:sunmark@gmail.com">
              <p className="text-sm font-light text-gray-100 break-all">
                sunmark@gmail.com
              </p>
            </Link>
          </div>

          {/* Address */}
          <div>
            <h5 className="text-md text-[#3a9f31] pb-4">Address</h5>
            <Link
              href="https://google.com/maps/place/Mumbai/India"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-sm font-light text-gray-100 leading-relaxed">
                Mumbai, India
              </p>
            </Link>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-md text-[#3a9f31] pb-4">Services</h5>
            <div className="space-y-4">
              <Link href="/"><p className="text-sm text-gray-100">On-Grid Solar</p></Link>
              <Link href="/"><p className="text-sm text-gray-100">Off-Grid Solar</p></Link>
              <Link href="/"><p className="text-sm text-gray-100">Hybrid Solar</p></Link>
              <Link href="/"><p className="text-sm text-gray-100">Residential Solar</p></Link>
              <Link href="/"><p className="text-sm text-gray-100">Commercial Solar</p></Link>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <h5 className="text-md text-white pb-4">
              © Sunmark Enterprises – 2025
            </h5>
            <p className="text-sm font-light text-gray-100">
              Website Designed & Developed By: Prem Singh
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
