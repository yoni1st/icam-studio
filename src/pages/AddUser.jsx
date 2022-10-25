import React, { useState } from "react";
import Navbar from "../components/Navbar/NavbarAdmin";

export default function AddUser() {
  const [satus, setSatus] = useState(0);

  return (
    <>
      <Navbar />
      <div className="mt-10 sm:mt-0">
        <div
          className={`bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md ${
            satus === 1 ? "block" : "hidden"
          }`}
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Add User</p>
              <p className="text-sm">User Successfully Added .</p>
            </div>
          </div>
        </div>

        <div
          className={`bg-red-100 border-t-4 border-red-600 rounded-b text-red-700 px-4 py-3 shadow-md ${
            satus === 2 ? "block" : "hidden"
          }`}
        >
          <div className="flex">
            <div className="py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="fill-current h-6 w-6 mr-4 "
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {" "}
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  id="mainIconPathAttribute"
                  fill="#ff0000"
                  filter="url(#shadow)"
                  stroke-width="0.5"
                  stroke="#ff0000"
                ></path>{" "}
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  id="mainIconPathAttribute"
                  fill="#ff0000"
                  stroke="#ff0000"
                ></path>{" "}
                <filter id="shadow">
                  <feDropShadow
                    id="shadowValue"
                    stdDeviation="0"
                    dx="0"
                    dy="0"
                    flood-color="black"
                  ></feDropShadow>
                </filter>
                <filter id="shadow">
                  <feDropShadow
                    id="shadowValue"
                    stdDeviation=".5"
                    dx="0"
                    dy="0"
                    flood-color="black"
                  ></feDropShadow>
                </filter>
                <filter id="shadow">
                  <feDropShadow
                    id="shadowValue"
                    stdDeviation=".5"
                    dx="0"
                    dy="0"
                    flood-color="black"
                  ></feDropShadow>
                </filter>
              </svg>
            </div>
            <div>
              <p className="font-bold">Error</p>
              <p className="text-sm">
                Please Correct the input before Adding User .
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="middle_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Middle name
                    </label>
                    <input
                      type="text"
                      name="middle_name"
                      id="middle_name"
                      autoComplete="middle-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="email_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email_address"
                      id="email_address"
                      autoComplete="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="vpassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      verify Password
                    </label>
                    <input
                      type="password"
                      name="vpassword"
                      id="vpassword"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      autoComplete="role"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option defaultValue>Add Role</option>
                      <option value="ad">Adminstrator</option>
                      <option value="mgr">Manager</option>
                      <option value="emp">Employee</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setSatus(1)}
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
