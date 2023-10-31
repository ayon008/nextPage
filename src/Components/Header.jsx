import React, { useState } from "react";
import {
  AdjustmentsHorizontalIcon,
  BoltIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-gray-100 w-full">
      <div className="px-4 relative sm:max-w-xl md:max-w-full mx-auto">
        <div className="navbar">
          <div className="flex-1">
            <Link
              to={"/"}
              className="btn btn-ghost normal-case text-xl flex items-center"
            >
              <BoltIcon className="h-6 w-6 text-blue-500" />
              <span className="font-bold">nextPage</span>
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 md:flex hidden">
              <li>
                <ActiveLink to={"/"}>Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to={"/books"}>Books</ActiveLink>
              </li>
              <li>
                <ActiveLink to={"/about"}>About Us</ActiveLink>
              </li>
            </ul>
            <button onClick={() => setOpen(!isOpen)}>
              <AdjustmentsHorizontalIcon className="h-6 w-6 text-blue-500 md:hidden block"></AdjustmentsHorizontalIcon>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="flex-none absolute z-10 top-0 left-0 w-full mt-5 md:hidden">
            <div className="p-5 rounded border shadow-sm bg-white flex justify-between">
              <div>
                <Link
                  to={"/"}
                  className="btn btn-ghost normal-case text-xl flex items-center w-fit"
                >
                  <BoltIcon className="h-6 w-6 text-blue-500" />
                  <span className="font-bold">NextPage</span>
                </Link>
                <ul className="menu menu-horizontal px-1 block">
                  <li>
                    <ActiveLink to={"/"}>Home</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink to={"/books"}>Books</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink to={"/about"}>About Us</ActiveLink>
                  </li>
                </ul>
              </div>
              <div>
                <button onClick={() => setOpen(!isOpen)}>
                  <XMarkIcon className="h-6 w-6 text-blue-500" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
