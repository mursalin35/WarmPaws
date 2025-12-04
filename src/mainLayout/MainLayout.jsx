import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Home from "../page/Home";
import { Outlet } from "react-router";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="bg-[#FFF8F1] ">
      <ScrollToTop/>
    
        <Navbar></Navbar>
     

      <main className="max-w-7xl mx-auto">
        <div className="mx-4">
          <Outlet></Outlet>
        </div>
      </main>

    
        <Footer></Footer>
 
    </div>
  );
};

export default MainLayout;
