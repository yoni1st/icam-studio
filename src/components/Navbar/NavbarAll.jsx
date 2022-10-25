import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [navbar, setNavbar] = useState(true);

  return (
    <div className="relative bg-white">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-between md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 items-center">
            <a href="#">
              <NavLink to="/">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="./cbe.png"
                  alt="logo"
                />
              </NavLink>
            </a>
            <span className="ml-2">Icam Atm</span>
          </div>

          <div
            className={`-my-2 -mr-2 md:hidden ${navbar ? "block" : "hidden"}`}
          >
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              onClick={() => setNavbar(!navbar)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div
            className={`-my-2 -mr-2 md:hidden ${navbar ? "hidden" : "block"}`}
          >
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setNavbar(!navbar)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state. */}
      <div className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"></div>
      </div>
    </div>
  );
}
