"use client";
// src/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="text-dark bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="text-2xl font-bold">
              <Image
                src="https://utfs.io/f/1b07c5e6-ec67-4446-b98d-56d321fdd123-ywpmck.png"
                alt="WesHuber Logo"
                width={128}
                height={128}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium transition hover:bg-purple-600"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="rounded-md px-3 py-2 text-sm font-medium transition hover:bg-purple-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-md px-3 py-2 text-sm font-medium transition hover:bg-purple-600"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-purple-600 hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
