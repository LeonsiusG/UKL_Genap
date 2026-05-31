'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Logout logic here
    router.push('/login');
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 border-b bg-white shadow-md z-50">
      {/* Logo */}
      <Link href="/shop" className="text-2xl font-bold flex items-center gap-2">
        <Image
          src="/images/atributo.png"
          alt="Atributo Logo"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <span>Atributo.</span>
      </Link>

      {/* Search Bar */}
      <div className="flex-1 mx-8">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-300">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none text-gray-700"
          />
          <button className="ml-2 text-gray-500">
            🔍
          </button>
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {/* Cart Icon */}
        <Link href="/user/cart" className="cursor-pointer text-xl hover:scale-110 transition-transform">
          🛒
        </Link>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 cursor-pointer hover:scale-110 transition-transform"
          >
            <span className="text-xl">👤</span>
            <span className="text-xl">▼</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Profile
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Orders
              </button>
              <button 
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 border-t">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
