import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center sm:text-left">
        
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-3xl font-bold mb-4 text-yellow-400 lora-medium tracking-tight">
            Dish<span className="text-white">Dash</span>
          </h3>
          <p className="max-w-xs text-gray-400 text-sm sm:text-base leading-relaxed">
            DishDash — When hunger strikes, we deliver delight right to your
            doorstep. Fresh, fast, and flavorful recipes for every occasion.
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-xl font-semibold mb-5 text-gray-100">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            {["Home", "Recipe", "Contact Us", "Privacy Policy"].map((link) => (
              <li
                key={link}
                className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer w-fit"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start sm:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-semibold mb-5 text-gray-100">Follow Us</h3>
          <div className="flex gap-4">
            {[
              { Icon: FaFacebookF, color: "hover:bg-blue-600" },
              { Icon: FaInstagram, color: "hover:bg-pink-600" },
              { Icon: FaPinterestP, color: "hover:bg-red-600" }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className={`bg-gray-800 p-3 rounded-full text-gray-300 ${social.color} hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg`}
              >
                <social.Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-semibold">DishDash</span>. All
          rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="hover:text-gray-300 cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-gray-300 cursor-pointer transition-colors">Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;