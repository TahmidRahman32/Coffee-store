import React from 'react';
import {  RiCupLine, RiEyeLine } from "@react-icons/all-files/ri/RiCupLine";
import { FaBeer, FaPhabricator, FaPencilAlt, FaPrescriptionBottle,} from "react-icons/fa";
import coffee1 from '../../../../public/images/1.png'
import coffee2 from '../../../../public/images/2.png'
import coffee3 from '../../../../public/images/3.png'
import coffee4 from '../../../../public/images/4.png'
import coffee5 from '../../../../public/images/5.png'
import coffee6 from '../../../../public/images/6.png'
import bgCup1 from '../../../../public/images/more/4.png'
import bgCup2 from '../../../../public/images/more/5.png'
import ImgCard from '../../ImgCard/ImgCard';

const Home = () => {
   return (
      <div className={` bg-no-repeat items-end bg-right`} style={{ backgroundImage: `url(${bgCup2})` }}>
         <div className={` bg-no-repeat`} style={{ backgroundImage: `url(${bgCup1})` }}>
            <p className="text-center py-4">--- Sip & Savor ---</p>
            <h1 className="text-center py-4 text-4xl text-coffee font-rancho font-bold">Our Popular Products</h1>

            <div>
               <button className="flex items-center justify-center mx-auto rounded hover:text-white py-2 px-5 bg-btn_color font-rancho font-semibold my-8 gap-2">
                  Add Coffee <RiCupLine className="text-coffee "></RiCupLine>{" "}
               </button>
            </div>
            <div className="w-full max-w-7xl mx-auto grid grid-cols-2  gap-8">
               <div className="flex items-center gap-6 bg-[#F5F4F1] shadow rounded-2xl justify-between px-4 pt-4">
                  <div className="flex items-center">
                     <div>
                        <img src={coffee1} alt="" />
                     </div>
                     <div>
                        <p className=" font-bold">
                           Name:<small className="font-normal"> Americano Coffee</small>
                        </p>
                        <p className=" font-bold">
                           Chef:<small className="font-normal"> Mr. Matin Paul</small>
                        </p>
                        <p className=" font-bold">
                           Price:<small className="font-normal"> 890 Taka</small>
                        </p>
                     </div>
                  </div>
                  <div className="pr-16">
                     <FaPhabricator className="w-8 p-2 h-8 rounded bg-btn_color my-6 text-right"></FaPhabricator>
                     <FaPencilAlt className="w-8 p-2 h-8 rounded bg-[#3C393B] text-white my-6 text-right"></FaPencilAlt>
                     <FaPrescriptionBottle className="w-8 p-2 h-8 rounded bg-red-700 text-white my-6 text-right"></FaPrescriptionBottle>
                  </div>
               </div>
               <div className="flex items-center gap-6 bg-[#F5F4F1] shadow rounded-2xl justify-between px-4 pt-4">
                  <div className="flex items-center">
                     <div>
                        <img src={coffee2} alt="" />
                     </div>
                     <div>
                        <p className=" font-bold">
                           Name:<small className="font-normal"> Americano Coffee</small>
                        </p>
                        <p className=" font-bold">
                           Chef:<small className="font-normal"> Mr. Matin Paul</small>
                        </p>
                        <p className=" font-bold">
                           Price:<small className="font-normal"> 890 Taka</small>
                        </p>
                     </div>
                  </div>
                  <div className="pr-16">
                     <FaPhabricator className="w-8 p-2 h-8 rounded bg-btn_color my-6 text-right"></FaPhabricator>
                     <FaPencilAlt className="w-8 p-2 h-8 rounded bg-[#3C393B] text-white my-6 text-right"></FaPencilAlt>
                     <FaPrescriptionBottle className="w-8 p-2 h-8 rounded bg-red-700 text-white my-6 text-right"></FaPrescriptionBottle>
                  </div>
               </div>
               <div className="flex items-center gap-6 bg-[#F5F4F1] shadow rounded-2xl justify-between px-4 pt-4">
                  <div className="flex items-center">
                     <div>
                        <img src={coffee3} alt="" />
                     </div>
                     <div>
                        <p className=" font-bold">
                           Name:<small className="font-normal"> Americano Coffee</small>
                        </p>
                        <p className=" font-bold">
                           Chef:<small className="font-normal"> Mr. Matin Paul</small>
                        </p>
                        <p className=" font-bold">
                           Price:<small className="font-normal"> 890 Taka</small>
                        </p>
                     </div>
                  </div>
                  <div className="pr-16">
                     <FaPhabricator className="w-8 p-2 h-8 rounded bg-btn_color my-6 text-right"></FaPhabricator>
                     <FaPencilAlt className="w-8 p-2 h-8 rounded bg-[#3C393B] text-white my-6 text-right"></FaPencilAlt>
                     <FaPrescriptionBottle className="w-8 p-2 h-8 rounded bg-red-700 text-white my-6 text-right"></FaPrescriptionBottle>
                  </div>
               </div>
               <div className="flex items-center gap-6 bg-[#F5F4F1] shadow rounded-2xl justify-between px-4 pt-4">
                  <div className="flex items-center">
                     <div>
                        <img src={coffee4} alt="" />
                     </div>
                     <div>
                        <p className=" font-bold">
                           Name:<small className="font-normal"> Americano Coffee</small>
                        </p>
                        <p className=" font-bold">
                           Chef:<small className="font-normal"> Mr. Matin Paul</small>
                        </p>
                        <p className=" font-bold">
                           Price:<small className="font-normal"> 890 Taka</small>
                        </p>
                     </div>
                  </div>
                  <div className="pr-16">
                     <FaPhabricator className="w-8 p-2 h-8 rounded bg-btn_color my-6 text-right"></FaPhabricator>
                     <FaPencilAlt className="w-8 p-2 h-8 rounded bg-[#3C393B] text-white my-6 text-right"></FaPencilAlt>
                     <FaPrescriptionBottle className="w-8 p-2 h-8 rounded bg-red-700 text-white my-6 text-right"></FaPrescriptionBottle>
                  </div>
               </div>
               <div className="flex items-center gap-6 bg-[#F5F4F1] shadow rounded-2xl justify-between px-4 pt-4">
                  <div className="flex items-center">
                     <div>
                        <img src={coffee5} alt="" />
                     </div>
                     <div>
                        <p className=" font-bold">
                           Name:<small className="font-normal"> Americano Coffee</small>
                        </p>
                        <p className=" font-bold">
                           Chef:<small className="font-normal"> Mr. Matin Paul</small>
                        </p>
                        <p className=" font-bold">
                           Price:<small className="font-normal"> 890 Taka</small>
                        </p>
                     </div>
                  </div>
                  <div className="pr-16">
                     <FaPhabricator className="w-8 p-2 h-8 rounded bg-btn_color my-6 text-right"></FaPhabricator>
                     <FaPencilAlt className="w-8 p-2 h-8 rounded bg-[#3C393B] text-white my-6 text-right"></FaPencilAlt>
                     <FaPrescriptionBottle className="w-8 p-2 h-8 rounded bg-red-700 text-white my-6 text-right"></FaPrescriptionBottle>
                  </div>
               </div>
               <div className="flex items-center gap-6 bg-[#F5F4F1] shadow rounded-2xl justify-between px-4 pt-4">
                  <div className="flex items-center">
                     <div>
                        <img src={coffee6} alt="" />
                     </div>
                     <div>
                        <p className=" font-bold">
                           Name:<small className="font-normal"> Americano Coffee</small>
                        </p>
                        <p className=" font-bold">
                           Chef:<small className="font-normal"> Mr. Matin Paul</small>
                        </p>
                        <p className=" font-bold">
                           Price:<small className="font-normal"> 890 Taka</small>
                        </p>
                     </div>
                  </div>
                  <div className="pr-16">
                     <FaPhabricator className="w-8 p-2 h-8 rounded bg-btn_color my-6 text-right"></FaPhabricator>
                     <FaPencilAlt className="w-8 p-2 h-8 rounded bg-[#3C393B] text-white my-6 text-right"></FaPencilAlt>
                     <FaPrescriptionBottle className="w-8 p-2 h-8 rounded bg-red-700 text-white my-6 text-right"></FaPrescriptionBottle>
                  </div>
               </div>
              
            
            </div>
         </div>
         <ImgCard></ImgCard>
      </div>
   );
};

export default Home;