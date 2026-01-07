'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const NavAdmin = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="bg-gray-800 text-white">
      <div className="h-16 flex items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <Link href="/admin/" onClick={scrollTop}>
          <h1 className="text-xl md:text-2xl font-bold">
            Admin Dashboard
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">

          <li className="hover:text-[#338f2b] hover:underline">
            <Link href="/admin/consumersquote" onClick={scrollTop}>
              Consumers for Quote
            </Link>
          </li>
        </ul>


        {/* Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 px-6 py-4 space-y-4 text-center">

          <Link href="/admin/consumersquote" onClick={scrollTop} className="block">
            Consumers for Quote
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavAdmin;
