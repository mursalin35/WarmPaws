import React from "react";
import HeroSlider from "../components/homeLayout/HeroSlider";
import PopularServices from "../components/homeLayout/PopularServices";
import PetTips from "../components/homeLayout/PetTips";
import MeetOurVets from "../components/homeLayout/MeetOurVets";
import Accessories from "../components/homeLayout/Accessories";

const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>

      <div className="bg-[#f7f1ec] -mb-20">
        <div className="grid lg:grid-cols-12 justify-between  w-11/12 mx-auto  gap-10">
          <div className="lg:col-span-7 ">
            <PopularServices></PopularServices>
            <PetTips></PetTips>
          </div>
          <div className="lg:col-span-5 ">
            <MeetOurVets></MeetOurVets>
            <Accessories></Accessories>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
