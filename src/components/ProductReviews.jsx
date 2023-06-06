/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const ProductReviews = () => {
  const [rating, setRating] = useState(4);
  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className='flex flex-col w-full border border-[#E0DEDE] p-[20px] gap-[20px]'>
        <div className='flex flex-col w-full border border-[#E0DEDE] p-[20px] gap-[20px]'>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='font-[500] text-[24px] text-[#000] leading-normal'>Customer Reviews</h1>

            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
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
                    <div className='pl-[10px] flex gap-[10px] text-[#ABABAB] text-[14px] font-[500]'>Based on 1 <span>review</span></div>
                </div>

                <button className='font-[500] text-[16px] text-[#99AA3F] leading-normal'>Write a review</button>
            </div>

            <div className='w-full h-[2px] bg-[#D7D7D7]'></div>

            <div className='flex flex-col gap-[5px]'>
                <div className='flex items-center'>
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
                </div>

                <h1 className='font-[500] text-[16px] text-[#444] leading-normal'>
                    Unglaublich gute Speisen sind damit möglich
                </h1>

                <span className='font-[500] text-[13px] text-[#ABABAB] leading-normal'>
                    df on May 13, 2018
                </span>

                <p className='font-[500] text-[13px] text-[#ABABAB] leading-normal mt-[10px]'>
                    Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet. »Wie ein Hund
                    !« sagte er, es war, als sollte die Scham ihn überleben.Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich 
                    in seinem Bett zu einem ungeheueren Ungeziefer verwandelt. Und es war ihnen wie eine Bestätigung ihrer neuen Träume und guten Absichten, 
                    als am Ziele ihrer Fahrt die Tochter als erste sich erhob und ihren jungen Körper dehnte. »Es ist ein eigentümlicher Apparat«, sagte der 
                    Offizier zu dem Forschungsreiseund überblickte mit einem gewissermaßen bewundernden Blick den ihm doch wohlbekannten Apparat. Sie hätten 
                    noch ins Boot springen können, aber der Reisende hob ein schweres, geknotetesTau vom Boden, drohte ihnen damit und hielt sie dadurch von 
                    dem Sprunge ab. In den letzten Jahrzehnten ist das Interesse an Hungerkünstlern sehr zurückgegangen. Aber sie überwanden sich,umdrängten 
                    den Käfig und wollten sich gar nicht fortrühren.Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde 
                    er eines Morgens verhaftet. »Wie ein Hund! « sagte er, es war, als sollte die Scham ihn überleben. Als Gregor Samsa eines Morgens aus 
                    unruhigen Träumen erwachte, fand er sich
                </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductReviews