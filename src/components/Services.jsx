/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { quotes } from "../assets";

const Services = ({ content, title, img }) => (
  <div className="flex justify-start items-center py-5 flex-col rounded-[20px]  w-[370px] h-[300px] md:mr-10 sm:mr-5 mr-0 my-5 services-card px-[30px] gap-[10px]">
    <h1 className="font-bold text-[25px] text-center text-black">{title}</h1>
    <p className="flex text-center text-[#b9bfc84d]">{content}</p>
  </div>
);


export default Services;
