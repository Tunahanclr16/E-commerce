import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function Hero() {
  return (
    <Swiper
      rewind={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation,EffectFade]}
      effect={"fade"}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="object-cover md:h-[900px]  w-full"
          src="https://umino-demo.myshopify.com/cdn/shop/files/h1-slide-show-1_1_1.jpg?v=1690341642&width=3840"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-cover md:h-[900px] w-full"
          src="https://umino-demo.myshopify.com/cdn/shop/files/h1-slide-show-2.jpg?v=1679891172&width=3840"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-cover md:h-[900px] w-full"
          src="https://umino-demo.myshopify.com/cdn/shop/files/h1-slide-show-3.jpg?v=1679891172&width=3840"
          alt=""
        />
      </SwiperSlide>

      {/* Navigation düğmeleri */}
    </Swiper>
  );
}
