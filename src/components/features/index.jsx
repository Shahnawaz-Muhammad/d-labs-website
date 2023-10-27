import React from "react";
import {SiFreelancer} from "react-icons/si"
import {GiTechnoHeart} from "react-icons/gi"
import {RiSecurePaymentLine} from "react-icons/ri"
import {MdAddBusiness,MdOutlineRealEstateAgent} from "react-icons/md"

const Features = () => {
  return (
    <div className="grid grid-cols-6 lg:grid-cols-5  bg-[#5543ca]   ">
      <div className="col-span-3 lg:col-span-1 w-full flex flex-col justify-center gap-3 items-center text-center py-10 border-r border-b lg:border-b-0  lg:border-r border-gray-400 text-white uppercase">
        <SiFreelancer className="text-5xl"/>
        <h1 className="text-md">Freelance</h1>
      </div>
      <div className="col-span-3 lg:col-span-1 w-full flex flex-col justify-center gap-3 items-center text-center py-10 border-b lg:border-b-0 lg:border-r border-gray-400 text-white uppercase">
        <GiTechnoHeart className="text-5xl"/>
        <h1 className="text-md">Startup</h1>
      </div>
      <div className="col-span-3 lg:col-span-1 w-full flex flex-col justify-center gap-3 items-center text-center py-10 border-b border-r lg:border-b-0  lg:border-r border-gray-400 text-white uppercase">
        <RiSecurePaymentLine className="text-5xl"/>
        <h1 className="text-md">Investor</h1>
      </div>
      <div className="col-span-3 lg:col-span-1 w-full flex flex-col justify-center gap-3 items-center text-center py-10 border-b lg:border-b-0  lg:border-r border-gray-400 text-white uppercase">
        <MdAddBusiness className="text-5xl"/>
        <h1 className="text-md">Business</h1>
      </div>
      <div className="col-span-full lg:col-span-1 w-full flex flex-col justify-center gap-3 items-center text-center py-10  lg:border-r border-gray-400 text-white uppercase">
        <MdOutlineRealEstateAgent className="text-5xl"/>
        <h1 className="text-md">Agency</h1>
      </div>
    </div>
  );
};

export default Features;
