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

          <nav className="hidden space-x-10 md:flex items-center">
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <NavLink activeclassname="active" to="/add-user">
                Add User
              </NavLink>
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <NavLink activeclassname="active" to="/Body">
                ICAM ATM
              </NavLink>
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <NavLink activeclassname="active" to="/login-in">
                Manage Account
              </NavLink>
            </a>
          </nav>

          <div className="hidden items-center md:flex -space-x-1 overflow-hidden">
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="cbe.png"
              alt="userDropdown"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state. */}
      <div className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className={`space-y-6 py-6 px-5 ${navbar ? "hidden" : "block"}`}>
            <div className="grid grid-cols-1 gap-y-4 gap-x-8">
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                <NavLink activeclassname="active" to="/add-user">
                  Add User
                </NavLink>
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                <NavLink activeclassname="active" to="/Body">
                  ICAM ATM
                </NavLink>
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                <NavLink activeclassname="active" to="/login-in">
                  Manage Account
                </NavLink>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
