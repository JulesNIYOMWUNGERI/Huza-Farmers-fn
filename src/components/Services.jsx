/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { quotes } from "../assets";

const Services = ({ content, title, img }) => (
  <div className="flex justify-between items-center py-5 flex-col rounded-[20px]  w-[370px] h-[300px] md:mr-10 sm:mr-5 mr-0 my-5 services-card">
    {/* <img src={img} alt="/" className="w-[100%] h-[100%] rounded-[20px] object-cover mix-blend-overlay" /> */}
    <h1 className="font-bold text-[25px] text-center text-black">{title}</h1>
    
  </div>
);


export default Services;
