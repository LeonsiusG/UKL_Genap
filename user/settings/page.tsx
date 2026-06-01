'use client';

import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Link href="/shop" className="text-xl font-bold">
          ◀
        </Link>
        <h1 className="text-xl font-bold">Settings</h1>
      </div>

      {/* Menu List */}
      <div className="flex flex-col">
        <Link
          href="/user/profile"
          className="flex justify-between items-center py-4 border-b hover:bg-gray-50"
        >
          <span className="text-gray-800">Personal Data</span>
          <span className="text-gray-500">▶</span>
        </Link>

        <Link
          href="/user/password"
          className="flex justify-between items-center py-4 border-b hover:bg-gray-50"
        >
          <span className="text-gray-800">Change Password</span>
          <span className="text-gray-500">▶</span>
        </Link>

        <Link
          href="/user/notification"
          className="flex justify-between items-center py-4 hover:bg-gray-50"
        >
          <span className="text-gray-800">Notification Settings</span>
          <span className="text-gray-500">▶</span>
        </Link>
      </div>
    </div>
  );
}
