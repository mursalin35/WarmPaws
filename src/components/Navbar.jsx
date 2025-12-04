import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdOutlinePets } from "react-icons/md";
import { AuthContext } from "../provider/AuthProvider";
import { useSpring, animated } from "@react-spring/web";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => alert("➜] You are now logged out ⚠️"))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleViewProfile = () => {
    navigate("/profile");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Dropdown animation
  const dropdownAnimation = useSpring({
    opacity: menuOpen || hovering ? 1 : 0,
    transform: menuOpen || hovering ? `translateY(0px)` : `translateY(-10px)`,
    pointerEvents: menuOpen || hovering ? "auto" : "none",
    config: { tension: 250, friction: 20 },
  });

  return (
    <div className="nav bg-[#FFF8F1] border-b border-[#EAD9C9] shadow-sm sticky top-0 z-50">
      <nav className=" max-w-7xl mx-auto   py-4 flex  ">
        <div className="flex justify-between items-center w-11/12 mx-auto relative">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold text-[#5B3A1A]">
            <Link className="flex gap-1 items-center" to="/">
              <MdOutlinePets className="text-3xl text-[#8B5E3B]" />
              WarmPaws
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className=" hidden md:flex gap-8 text-lg text-black">
            <NavLink to="/" className="navList">
              Home
            </NavLink>
            <NavLink to="/services" className="navList">
              Services
            </NavLink>
            <NavLink to="/about" className="navList">
              About us
            </NavLink>
            <NavLink to="/contact" className="navList">
              Contact
            </NavLink>
          </div>

          {/* Right Side (Avatar + Buttons) */}
          <div className="flex items-center gap-3 relative">
            {/* Avatar Dropdown */}
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <img
                onClick={toggleMenu}
                src={
                  user?.photoURL ||
                  "https://img.icons8.com/?size=100&id=0prbldgxVuTl&format=png&color=000000"
                }
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-[#EAD9C9] cursor-pointer"
              />

              <animated.div
                style={dropdownAnimation}
                className="absolute right-0 mt-2 bg-white border border-[#EAD9C9] shadow-lg rounded-xl p-3 min-w-48 text-sm z-50"
              >
                <div className="border-b-[1.5px] border-[#5B3A1A] mb-2">
                  <p className="font-medium text-[#5B3A1A]">
                    {user?.displayName || "username"}
                  </p>
                  <p className="text-gray-500 text-xs mb-1">
                    {user?.email || "user@gmail.com"}
                  </p>
                </div>
                <NavLink
                  to="/profile"
                  className="navList font-medium text-black"
                >
                  My Profile
                </NavLink>
                <button
                  onClick={handleViewProfile}
                  className="w-full cursor-pointer mt-4 bg-[#8B5E3B] hover:bg-[#6C4428] text-white py-2 rounded-lg transition text-sm"
                >
                  View Profile
                </button>
              </animated.div>
            </div>

            {/* logic Buttons */}
            <div className="hidden md:block">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="bg-[#8B5E3B] cursor-pointer hover:bg-[#6C4428] text-white px-5 py-2 rounded-lg transition"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/auth/login"
                  className="bg-[#8B5E3B] hover:bg-[#6C4428] text-white px-5 py-2 rounded-lg transition"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              {mobileMenuOpen ? (
                <HiX
                  onClick={toggleMobileMenu}
                  className="text-3xl text-[#5B3A1A] cursor-pointer"
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMobileMenu}
                  className="text-3xl text-[#5B3A1A] cursor-pointer"
                />
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute text-black top-full left-0 w-full bg-[#FFF8F1] border-t border-[#EAD9C9] shadow-md flex flex-col items-center py-4 gap-4 text-lg md:hidden z-40 animate-fadeIn">
              <NavLink
                to="/"
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-[#8B5E3B] transition font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-[#8B5E3B] transition font-medium"
              >
                Services
              </NavLink>

              <NavLink
                to="/profile"
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-[#8B5E3B] transition font-medium"
              >
                My Profile
              </NavLink>
              <NavLink
                to="/about"
                   onClick={toggleMobileMenu}
                className="navList hover:text-[#8B5E3B] transition font-medium"
              >
                About us
              </NavLink>
              <NavLink
                to="/contact"
                   onClick={toggleMobileMenu}
                className="navList hover:text-[#8B5E3B] transition font-medium"
              >
                Contact
              </NavLink>

              {user ? (
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMobileMenu();
                  }}
                  className="bg-[#8B5E3B]  hover:bg-[#6C4428] text-white px-6 py-2 rounded-lg transition"
                >
                  Logout
                </button>
              ) : (
                <Link to="/auth/login">
                  <button
                    onClick={toggleMobileMenu}
                    className="bg-[#8B5E3B] hover:bg-[#6C4428]  text-white px-6 py-2 rounded-lg transition"
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
