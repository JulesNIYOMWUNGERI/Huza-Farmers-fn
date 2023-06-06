import MainBg from '../assets/images/horticulture-crop.jpg'

import Button from '../components/Button'

const Hero = () => (
    <section id="home" className='w-full h-[85vh] relative'>
        <img src={MainBg} alt="/" className='w-screen h-[85vh] object-cover '/>
        <div className='absolute top-0 h-[85vh] w-full flex md:flex-row flex-col justify-center -items-center items-center gap-5 blur_effect2'>
            <div className='h-[100vh] md:w-[40%] flex justify-center items-center mx-5'>
              <h1 className='md:text-[40px] text-[20px] font-bold text-white uppercase '>
                Welcome to <br/>
                <span className='text-orange-500 text-[50px]'>Huza</span> <span className='text-green-700 text-[50px]'>FARMERS</span><br/>
                the best place for both farmers and buyers who need hot culture yields
                </h1>
            </div>
            <div className='h-[100vh] md:w-[40%] flex justify-center md:items-center'>
              <h1 className='text-[20px] text-gray-300 uppercase '>click this button to get started<br/><Button/></h1>
            </div>
        </div>
    </section>
  )
export default Hero