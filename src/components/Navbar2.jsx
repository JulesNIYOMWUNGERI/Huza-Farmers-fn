/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styles from "../style";

import { close, menu } from '../assets';

import { navLinks2,socialMedia } from '../constants';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex flex-col justify-between items-center text-white'>
    {/* <div className={`w-full flex flex-row justify-center items-center py-4 bg-[#8f8f8f] ${styles.paddingX}`}>
        <Link to='/'>
           <h1 className='text-orange-500 font-bold'>
              HUZA <span className='text-green-700 font-bold'>FARMERS</span>
           </h1>
        </Link>
    </div> */}
    <div className={`relative w-full flex flex-row justify-between items-center py-4 bg-green-700 ${styles.paddingX}`}>
        <div className="flex flex-row md:mt-0">
         {socialMedia.map((social, index) => (
         <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
            />
        ))}
        </div>
        <ul className='list-none sm:flex hidden justify-center items-center gap-6'>
            {navLinks2.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px]`}
                >
                  <Link to={nav.id}>
                    {nav.title}
                  </Link>
                </li>
            ))}
        </ul>
        <div className={`flex flex-row justify-center items-center py-4 bg-transparent`}>
          <Link to='/'>
             <h1 className='text-orange-500 font-bold'>
                HUZA <span className='text-green-100 font-bold'>FARMERS</span>
             </h1>
          </Link>
        </div> 

        <div className="sm:hidden flex justify-end items-center">
             <img
               src={toggle ? close : menu}
               alt="menu"
               className="w-[28px] h-[28px] object-contain"
               onClick={() => setToggle(!toggle)}
             />
             <div
                className={`${
                     !toggle ? "hidden" : "flex"
                 } p-6 bg-green-gradient1 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[1]`}
             >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
               {navLinks2.map((nav, index) => (
                 <li
                   key={nav.id}
                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
                   active === nav.title ? "text-white" : "text-dimWhite"
                   } ${index === navLinks2.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                 >
                   <Link to={nav.id}>
                    {nav.title}
                   </Link>
                 </li>
                ))}
              </ul>
             </div>
         </div>
    </div>
 </nav>
  )
}

export default Navbar2