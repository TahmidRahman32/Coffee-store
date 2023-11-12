import React from 'react';
import bgFooter from '../../../public/images/more/9.png'
import logo from '../../../public/images/more/logo1.png'
import footerBg from "../../../public/images/more/15.jpg";
import { FaBeer, FaFacebook, FaTwitter, FaInstagram, FaInfoCircle, FaPhoneAlt, FaMailBulk, FaLocationArrow } from "react-icons/fa";

const Footer = () => {
   return (
      <div className=" w-full h-2/3 mt-20" style={{ backgroundImage: `url(${bgFooter})` }}>
         <div className="w-full max-w-5xl mx-auto grid grid-cols-2">
            <div>
               <img className="w-16" src={logo} alt="" />
               <h2 className="text-3xl font-rancho font-bold mt-8 mb-3">Espresso Emporium</h2>
               <p>
                  Always ready to be your friend. Come & Contact with us to share your <br />
                  memorable moments, to share with your best companion.
               </p>
               <div className="flex my-5 ">
                  <FaFacebook className="h-8  w-8 mx-2 text-coffee"></FaFacebook>
                  <FaTwitter className="h-8  w-8 mx-2 text-coffee"></FaTwitter>
                  <FaInstagram className="h-8  w-8 mx-2 text-coffee"></FaInstagram>
                  <FaInfoCircle className="h-8  w-8 mx-2 text-coffee"></FaInfoCircle>
               </div>
               <h2 className="text-3xl font-rancho font-bold mt-8 mb-3">Get in Touch</h2>
               <div className="flex items-center gap-4 my-3">
                  <FaPhoneAlt></FaPhoneAlt>
                  <p>+88 01533 333 333</p>
               </div>
               <div className="flex items-center gap-4 my-3">
                  <FaMailBulk></FaMailBulk>
                  <p>info@gmail.com</p>
               </div>
               <div className="flex items-center gap-4 my-3">
                  <FaLocationArrow></FaLocationArrow>
                  <p>72, Wall street, King Road, Dhaka</p>
               </div>
            </div>

            <div className="ml-28">
               <h2 className="text-3xl font-rancho font-bold mt-8 mb-3">Connect with Us</h2>
               <input className="bg-white px-6 py-2 rounded my-4 shadow " type="text" value="" placeholder="Name" /> <br />
               <input className="bg-white px-6 py-2 rounded my-4 shadow" type="gmail" value="" placeholder="Gmail" /> <br />
               <textarea className=" px-2 shadow-lg" name="message" id="" cols="30" rows="3" placeholder="Massage"></textarea>
               <br />
               <button className="font-medium border py-2 px-4 my-3 rounded-2xl bg-coffee text-white hover:bg-white hover:text-black">Send Message</button>
            </div>
         </div>
         <div className=" h-10" style={{ backgroundImage: `url(${footerBg})` }}>
            <p className=" text-white h-10 flex justify-center items-center font-rancho">
               <small>Copyright Espresso Emporium ! All Rights Reserved</small>
            </p>
         </div>
      </div>
   );
};

export default Footer;