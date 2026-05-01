"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        
        {/* Glow effect */}
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-purple-600/20 rounded-full"></div>

          {/* 404 Text */}
          <h1 className="relative text-8xl md:text-9xl font-bold bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Decorative line */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>

        {/* Message */}
        <h2 className="text-gray-300 text-xl font-medium">
          Page not found
        </h2>

        <p className="text-gray-500 text-sm">
          The page you’re looking for doesn’t exist or was moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <Link
            href="/"
            className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm transition"
          >
            Go Home
          </Link>

          <Link
            href="/all-books"
            className="px-5 py-2 rounded-xl border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white text-sm transition"
          >
            Browse Books
          </Link>
        </div>

        {/* Decorative dots */}
        <div className="flex justify-center gap-2 pt-2">
          <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}