import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Home from "../page/Home";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-[#FFF8F1]">
      <header>
        <Navbar></Navbar>
      </header>

      <main className="">
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
