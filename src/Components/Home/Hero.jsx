import React from 'react';
import HeroImage from "../../assets/HeroImage.png";
import Hero2Image from "../../assets/Hero2Image.png"
export default function Hero() {
  return (
    <div className='flex w-full h-full'>
      {/* Sol yarıdaki bileşen */}
      <div className='flex-1 relative'>
        <img className='w-full h-[375px] sm:h-full object-cover' src={HeroImage} alt="" />
      </div>

      {/* Sağ yarıdaki bileşen */}
      <div className=' flex-1'>
        {/* İçerik ekleyebilirsiniz */}
                <img className='h-full w-full object-cover' src={Hero2Image} alt="" />
        </div>
      </div>
  );
}
