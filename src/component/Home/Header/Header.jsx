import React from 'react';
import headerImg from "../../../../public/images/more/15.jpg";
import logoImg from "../../../../public/images/more/logo1.png";
import bannerImg from "../../../../public/images/more/3.png";
import icon1 from "../../../../public/images/icons/1.png";
import icon2 from "../../../../public/images/icons/2.png";
import icon3 from "../../../../public/images/icons/3.png";
import icon4 from "../../../../public/images/icons/4.png";

const Header = () => {
   return (
      <div>
         <div className={`w-full max-w-7xl mx-auto flex items-center justify-center bg-no-repeat bg-cover bg-center  h-20`} style={{ backgroundImage: `url(${headerImg})` }}>
            <div className="flex items-center">
               <img className="w-12" src={logoImg} alt="" />
               <h1 className=" text-white text-4xl font-bold font-rancho text-center">Espresso Emporium</h1>
            </div>
         </div>
         <section className="{`w-full max-w-7xl mx-auto justify-center bg-no-repeat bg-cover bg-center h-screen  `}" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="w-full max-w-xl mx-auto flex h-full items-center justify-items-end">
               <div>
                  <h1 className="text-4xl font-rancho font-bold text-white py-2">Would you like a Cup of Delicious Coffee?</h1>
                  <p className="text-white ">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                  <button className="text-coffee font-bold my-8 bg-btn_color border py-2 rounded-[5px] px-5 transition-all border-yellow-600 hover:bg-yellow-600 hover:text-black">Learn More</button>
               </div>
            </div>
         </section>
         <div className="w-full max-w-7xl mx-auto bg-neutral-200 py-16 grid grid-cols-4 gap-8 px-8 font-rancho">
            <div className="">
               <img src={icon1} alt="" />
               <h3 className="text-3xl py-3">Awesome Aroma</h3>
               <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="w-full max-w-5xl mx-auto ">
               <img src={icon2} alt="" />
               <h3 className="text-3xl py-3">Awesome Aroma</h3>
               <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="w-full max-w-5xl mx-auto ">
               <img src={icon3} alt="" />
               <h3 className="text-3xl py-3">Awesome Aroma</h3>
               <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="w-full max-w-5xl mx-auto ">
               <img src={icon4} alt="" />
               <h3 className="text-3xl py-3">Awesome Aroma</h3>
               <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
         </div>
      </div>
   );
};

export default Header;