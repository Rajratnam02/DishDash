import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6 sm:px-12 md:px-20">
      <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-20">
        
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-3xl font-bold mb-3 text-yellow-400">DishDash</h3>
          <p className="max-w-xs text-gray-300 text-sm sm:text-base leading-relaxed">
            DishDash — When hunger strikes, we deliver delight right to your
            doorstep. Fresh, fast, and flavorful!
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Recipe", "Contact Us", "Privacy Policy"].map((link) => (
              <li
                key={link}
                className="hover:text-yellow-300 transition duration-300 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-gray-700 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="bg-gray-700 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="bg-gray-700 p-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
            >
              <FaPinterestP size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-yellow-400 font-semibold">DishDash</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
