import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4 justify-between px-[70px]">
        <div>
          <li>
            <Link
              to="/products"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Products
            </Link>
          </li>
        </div>
        <div className="flex items-center gap-[20px]">
          <li>
            <Link
              to="/profile"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Login
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;