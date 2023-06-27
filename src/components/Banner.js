import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                style={{
                    width: `100%`,
                    height: `75vh`,
                    zIndex:-1
                }}
            >
                <SwiperSlide>
                    <div className=" w-full h-full bg-emerald-600"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" w-full h-full bg-slate-400"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" w-full h-full bg-slate-100"></div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Banner;