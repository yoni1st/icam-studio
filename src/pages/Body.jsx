import React from "react";
import Navbar from "../components/Navbar/NavbarAdmin";
import Treeview from "../components/Customtree";
import SearchAtm from "../components/SearchAtm";

export default function Body() {
  return (
    <div>
      <Navbar />

      <div
        id="wrapper"
        className="flex h-screen bg-grey-lightest sm:flex-col md:flex-row font-light w-full"
      >
        <div
          id="sidebar"
          className="bg-orange-darker md:w-72 overflow-y-scroll sm:w-screen"
        >
          <div
            id="profile"
            className="flex items-center border-b border-orange-darkest px-1 py-5"
          >
            <Treeview />
          </div>
        </div>
        <div
          id="content"
          className="px-8 bg-transparent flex-grow flex-shrink flex-auto "
        >
          <div id="info" className="border-b border-grey-light">
            <SearchAtm />
          </div>
        </div>
      </div>
    </div>
  );
}
