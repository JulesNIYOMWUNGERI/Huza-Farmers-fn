/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { RiArrowUpSFill } from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux'
import EngLog from '../assets/flags/eng.svg'
import FrLog from '../assets/flags/fr.svg'
import RwLog from '../assets/flags/rw.svg'
import { setLanguage } from '../redux/slices/languageSlice'

import i18n from '../i18n/i18n'

const LocalizationSwitcher = () => {
    const languages = [
        { name: 'En', code: 'en', flag: EngLog },
        { name: 'Fr', code: 'fr', flag: FrLog },
        { name: 'Rw', code: 'rw', flag: RwLog },
    ];

    const defaultFlag = {
      name: 'En',
      code: 'en',
      flag: EngLog,
    }

    const dispatch = useDispatch()

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const currentLanguage = JSON.parse(localStorage.getItem('currentLng'))

    const currentLng = useSelector((state) => state.language.lang);

    const handleLanguageSelect = (ln) => {
      setIsDropdownOpen(false);
      dispatch(setLanguage(ln));
      i18n.changeLanguage(ln.code);
    };

  return (
    <div className='relative flex flex-col justify-center items-center'>
       <button onClick={() => {setIsDropdownOpen(!isDropdownOpen)}} className='px-5 py-1 border border-gray-200 rounded-[20px] flex flex-row justify-center items-center gap-2'>
          <img src={currentLanguage ? currentLanguage.flag : currentLng.flag} alt='/' className='w-[20px]'/>
          <span>{currentLanguage ? currentLanguage.name : currentLng.name}</span>
          <RiArrowUpSFill className={`transition-transform duration-200 transform ${ isDropdownOpen ? 'rotate-180' : ''}`}/>
       </button>
       {isDropdownOpen && (
        <ul className='absolute top-9 flex flex-col w-[90px] px-3 bg-green-gradient1 sidebar z-[1]'>
            {languages.map((ln) => (
                <button onClick={() => handleLanguageSelect(ln)} key={ln.code} className='flex flex-row justify-start items-center gap-2'>
                  <img src={ln.flag} alt='' className='w-[20px]' />
                  <span>{ln.name}</span>
                </button>
            ))}
        </ul>
       )}
    </div>
  )
}

export default LocalizationSwitcher