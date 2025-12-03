import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPaw,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#FFF8F1] border-t border-[#EAD9C9] mt-20 ">
      <footer className=" max-w-7xl mx-auto text-[#5A3A2E] ">
        <div className="w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaPaw className="text-[#B87333] text-2xl" />
              <h2 className="text-2xl font-bold">WarmPaws</h2>
            </div>
            <p className="text-sm text-[#7A5D4A] leading-relaxed">
              A cozy winter companion platform designed to keep your pets warm,
              comfortable, and cared for during chilly days.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.facebook.com/mursalin07"
                target="_blank"
                className="bg-[#B87333]/20 p-2 rounded-full hover:bg-[#B87333] hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/mursalin07/"
                target="_blank"
                className="bg-[#B87333]/20 p-2 rounded-full hover:bg-[#B87333] hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/msmursalin07/?hl=en"
                target="_blank"
                className="bg-[#B87333]/20 p-2 rounded-full hover:bg-[#B87333] hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-[#B87333]/20 p-2 rounded-full hover:bg-[#B87333] hover:text-white transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-[#B87333] transition hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-[#B87333] transition hover:underline"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/profile"
                  className="hover:text-[#B87333] transition hover:underline"
                >
                  My Profile
                </a>
              </li>
           
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
                 <li>
                <a
                  href="/about"
                  className="hover:text-[#B87333] transition hover:underline"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#B87333] transition hover:underline"
                >
                  Contact
                </a>
              </li>
              
        
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm text-[#7A5D4A] mb-3">
             Get the latest winter care updates, tips, and pet health advice — reach out through our contact page to stay connected.
            </p>
            
          </div>
        </div>
      </footer>
      {/* Bottom Bar */}
      <div className="bg-[#FBEDE2] text-center py-4 border-t border-[#EAD9C9] text-sm text-[#7A5D4A]">
        © {new Date().getFullYear()} WarmPaws — All Rights Reserved | Designed
        by <span className="font-semibold">M.S Mursalin</span>
      </div>
    </div>
  );
};

export default Footer;
