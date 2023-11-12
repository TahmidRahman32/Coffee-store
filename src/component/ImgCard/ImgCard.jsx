import React from 'react';
import img1 from "../../../public/images/cups/Rectangle 9.png";
import img2 from "../../../public/images/cups/Rectangle 10.png";
import img3 from "../../../public/images/cups/Rectangle 11.png";
import img4 from "../../../public/images/cups/Rectangle 12.png";
import img5 from "../../../public/images/cups/Rectangle 13.png";
import img6 from "../../../public/images/cups/Rectangle 14.png";
import img7 from "../../../public/images/cups/Rectangle 15.png";
import img8 from "../../../public/images/cups/Rectangle 16.png";
import img9 from "../../../public/images/cups/Rectangle 9.png";
import Footer from '../Footer/Footer';

const ImgCard = () => {
   return (
      <div className="w-full max-w-7xl mx-auto">
         <p className="text-center mt-16">Follow Us Now</p>
         <h1 className="text-center font-rancho font-bold text-3xl pb-4">Follow on Instagram</h1>
         <div className='grid grid-cols-4 gap-8'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img7} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img4} alt="" />
            <img src={img8} alt="" />
         </div>
         <Footer></Footer>
      </div>
   );
};

export default ImgCard;