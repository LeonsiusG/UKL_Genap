'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    /**
     * TODO: sambungkan ke backend register di sini
     */
    router.push('/login');
  };

  return (
    <div className="flex h-screen">
      {/* Left Section - Image */}
      <div className="flex-1 bg-gray-300 relative">
        <Image
          src="/images/arknights.png"
          alt="Arknights"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Section - Register Form */}
      <div className="flex-1 bg-white px-12 py-8 flex flex-col">
        {/* Header Navigation */}
        <div className="flex justify-end gap-8 mb-12 mr-20">
          <Link href="/login" className="text-black font-semibold underline">
            Login
          </Link>
          <Link href="/register" className="text-black font-semibold underline">
            Register
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto">
          {/* Title and Description */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Create Account</h1>
            <p className="text-gray-700 text-sm leading-relaxed">
              Daftarkan akunmu untuk mulai menggunakan layanan kami.
            </p>
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="abcd@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-125 px-4 py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:border-black"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="123456789"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-125 px-4 py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:border-black"
            />
          </div>

          {/* Password Input */}
          <div className="mb-8">
            <label className="block text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              placeholder="123456789"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-125 px-4 py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:border-black"
            />
          </div>

          {/* Register Button */}
          <button 
            onClick={handleRegister}
            className="w-125 bg-gray-300 text-black font-bold py-3 rounded-lg mb-8 hover:bg-gray-400 transition"
          >
            Register
          </button>

          {/* Or Divider */}
          <div className="flex items-center gap-4 mb-8 w-125">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-gray-700 font-semibold">Or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Social Register Buttons */}
          <div className="flex gap-4 justify-center w-125">
            <button className="flex-1 bg-gray-300 text-black font-bold py-3 rounded-lg hover:bg-gray-400 transition">
              Google
            </button>
            <button className="flex-1 bg-gray-300 text-black font-bold py-3 rounded-lg hover:bg-gray-400 transition">
              Facebook
            </button>
            <button className="flex-1 bg-gray-300 text-black font-bold py-3 rounded-lg hover:bg-gray-400 transition">
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
