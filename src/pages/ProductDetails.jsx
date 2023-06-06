/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { productDatas } from '../constants';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import ProductDesc from '../components/ProductDesc';
import ProductReviews from '../components/ProductReviews';
import Recomandations from '../components/Recomandations';

const ProductDetails = () => {
  const params = useParams();
  const [rating, setRating] = useState(4);
  const [weight, setWeight] = useState(100);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(1)
  const [wishList, setWishList] = useState(false)

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  const handleWishList = () => {
    setWishList(!wishList);
  };

  const handleWeight = (newWeight) => {
    setWeight(newWeight);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  const handleIncrement = () => {
    if (quantity < 50) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
    }
  };

  const handleSelected = (select) => {
    setSelected(select);
  }

  const product = productDatas.filter((item) => item?.id == params.id);
  console.log(product);

  return (
    <div className='flex flex-col justify-center items-center w-full h-full p-[50px] gap-[40px]'>
      <div className='flex flex-row justify-center items-center w-full h-full gap-[40px]'>
        <div className='flex flex-col w-[45%] border border-[#CACACA] py-[30px] px-[10px] justify-center items-center gap-[150px] rounded-[5px]'>
          <img 
            src={product[0]?.image}
            className='w-[345px] h-[300px]'
          />

          <div className='flex justify-center items-center w-[90%] h-auto flex-wrap gap-[30px]'>
            <div className='p-[10px] border border-[#CACACA] rounded-[5px]'>
              <img 
                src={product[0]?.image}
                className='w-[110px] h-[110px]'
              />
            </div>
            <div className='p-[10px] border border-[#CACACA] rounded-[5px]'>
              <img 
                src={product[0]?.image}
                className='w-[110px] h-[110px]'
              />
            </div>
            <div className='p-[10px] border border-[#CACACA] rounded-[5px]'>
              <img 
                src={product[0]?.image}
                className='w-[110px] h-[110px]'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col  items-center w-[45%] p-[10px] self-stretch'>
          <div className='flex w-full pb-[10px] px-[2px]'>
            <h1 className='font-[600] text-[#000] text-[36px] leading-normal'>{product[0]?.title}</h1>
          </div>

          <div className='w-full h-[1px] bg-[#DFDADA]'></div>

          <div className='py-[10px] px-[2px] flex w-full'>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRatingClick(star)}
                  style={{
                    cursor: 'pointer',
                    color: star <= rating ? 'black' : 'gray',
                  }}
                >
                  &#9733;
                </span>
              ))}
              <div className='pl-[10px] flex gap-[10px] text-black font-[500]'>1 <span>review</span></div>
          </div>

          <div className='w-full px-[2px] py-[10px]'>
            <h1 className='font-bold text-[#99AA3F] text-[20px] leading-normal'>$10.00</h1>
          </div>

          <div className='w-full h-[2px] bg-[#99AA3F]'></div>

          <div className='w-full self-stretch px-[2px] py-[20px]'>
            <h1 className='font-[500] text-[#000] text-[20px] leading-normal'>Brand: <span className='text-[#99AA3F]'>Organic-1</span></h1>
            <h1 className='font-[500] text-[#000] text-[20px] leading-normal'>Availability: <span className='text-[#000] font-[400]'>In Stock</span></h1>
          </div>

          <div className='w-full self-stretch px-[2px] py-[10px]'>
            <h1 className='font-[400] text-[#BCBCBC] text-[18px] leading-normal'>
              Redefine your workday with the Palm Treo Pro smartphone. 
              Perfectly balanced, you can respond to business and personal 
              email, stay on top of appointments and contacts, and use Wi-Fi or 
              GPS when you’re out and about. Then watch a video on YouTube, 
              catch up with news and on the...
            </h1>
          </div>

          <div className='w-full self-stretch px-[2px] py-[10px]'>
            <h1 className='font-[400] text-[#000] text-[21px] leading-normal'>Weight (g)</h1>
            <div className='flex gap-[10px] self-stretch w-auto h-auto py-[5px]'>
              <div onClick={() => handleWeight(100)} className={`flex justify-center items-center w-[69px] h-[47px] border-2 border-[#99AA3F] cursor-pointer ${weight === 100 ? 'bg-[#99AA3F]' : 'bg-[#fff]'}`}>
                <h1 className={`font-[400] text-[21px] leading-normal ${weight === 100 ? 'text-[#fff]' : 'text-[#000]'}`}>100</h1>
              </div>

              <div onClick={() => handleWeight(200)} className={`flex justify-center items-center w-[69px] h-[47px] border-2 border-[#99AA3F] cursor-pointer ${weight === 200 ? 'bg-[#99AA3F]' : 'bg-[#fff]'}`}>
                <h1 className={`font-[400] text-[21px] leading-normal ${weight === 200 ? 'text-[#fff]' : 'text-[#000]'}`}>200</h1>
              </div>

              <div onClick={() => handleWeight(300)} className={`flex justify-center items-center w-[69px] h-[47px] border-2 border-[#99AA3F] cursor-pointer ${weight === 300 ? 'bg-[#99AA3F]' : 'bg-[#fff]'}`}>
                <h1 className={`font-[400] text-[21px] leading-normal ${weight === 300 ? 'text-[#fff]' : 'text-[#000]'}`}>300</h1>
              </div>
            </div>
          </div>

          <div className='flex gap-[50px] w-full self-stretch px-[2px] py-[10px]'>
            <div className='flex justify-center items-center gap-[15px] w-[113px] h-[67px] rounded-[40px] border-2 border-[#E4E3E3]'>
              <button onClick={handleDecrement} className='font-[400] text-[#000] text-[32px] leading-normal'>-</button>
              <span className='font-[400] text-[#000] text-[28px] leading-normal'>
                {quantity}
              </span>
              <button onClick={handleIncrement} className='font-[400] text-[#000] text-[32px] leading-normal'>+</button>
            </div>

            <div className='flex gap-[20px]'>
              <div className='flex justify-center items-center gap-[15px] w-[213px] h-[67px] rounded-[40px] border-2 border-[#99AA3F] bg-[#99AA3F] cursor-pointer'>
                <h1 className='font-bold text-[#FFF] text-[20px] leading-normal'>ADD TO CART</h1>
              </div>

              <button onClick={handleWishList} className={`flex justify-center items-center gap-[15px] w-[67px] h-[67px] rounded-[40px] border-2 border-[#E4E3E3] ${wishList ? 'bg-[#99AA3F]' : 'bg-[#fff]'}`}>
                <AiOutlineHeart className={`w-[30px] h-[30px] ${wishList ? 'text-[#fff]' : 'text-[#99AA3F]'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full gap-[10px]'>
        <div className='flex flex-row justify-center items-center w-full p-[10px] gap-[50px]'>
          <h1 onClick={() => handleSelected(1)} className={`font-[700] cursor-pointer ${selected === 1 ? 'text-[#99AA3F]' :'text-[#000]'} text-[24px] leading-normal`}>Product Description</h1>
          <h1 onClick={() => handleSelected(2)} className={`font-[700] cursor-pointer ${selected === 2 ? 'text-[#99AA3F]' :'text-[#000]'} text-[24px] leading-normal`}>Reviews</h1>
        </div>

        {selected === 1 && <ProductDesc />}

        {selected === 2 && <ProductReviews />}

      </div>

      <div className='flex flex-col justify-center items-center'>
          <h1 className='font-[700] text-[34px] text-[#4C4C4C] leading-normal'>We Also Recommend</h1>

          <Recomandations />
      </div>
    </div>
  )
}

export default ProductDetails