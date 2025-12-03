import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const AuthLayout = () => {
  return (
    <div className="bg-[#FFF8F1] ">
        <ScrollToTop/>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
