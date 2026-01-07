'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="bg-neutral-800 w-full">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">

        {/* Logo */}
        <Link href="/" onClick={scrollTop} className="flex items-center text-white text-lg font-semibold">
          <Image src="/logonew.png" alt="Logo" width={80} height={60} />
          <span className="ml-2">Sunmark Enterprises</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-white">
          <li><Link href="/" onClick={scrollTop} className="hover:text-[#2C7C25] hover:underline">Home</Link></li>
          <li><Link href="/about" onClick={scrollTop} className="hover:text-[#2C7C25] hover:underline">About</Link></li>
          <li><Link href="/services" onClick={scrollTop} className="hover:text-[#2C7C25] hover:underline">Services</Link></li>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/contactform">
            <button className="bg-[#2C7C25] text-white px-4 py-2 rounded active:bg-green-800 cursor-pointer">
              Get A Quote
            </button>
          </Link>

          <Link href="https://www.facebook.com/" className="text-white hover:text-[#2C7C25]">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </Link>
          <Link href="https://www.instagram.com/" className="text-white hover:text-[#2C7C25]">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col text-center bg-neutral-900 text-white px-6 py-4 space-y-4">
          <Link href="/" onClick={() => { scrollTop(); setOpen(false); }}>Home</Link>
          <Link href="/about" onClick={() => { scrollTop(); setOpen(false); }}>About</Link>
          <Link href="/services" onClick={() => { scrollTop(); setOpen(false); }}>Services</Link>

          <Link href="/contactform">
            <button className="w-54 bg-[#2C7C25] py-2 rounded mt-2">
              Get A Quote
            </button>
          </Link>

          <div className="flex gap-6 pt-3">
            <Link href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </Link>
            <Link href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
