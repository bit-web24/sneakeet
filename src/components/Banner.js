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
                    height: `50vh`,
                    marginTop: `80px`,
                }}
            >
                <SwiperSlide>
                    <div className="w-full grid h-full place-items-center bg-emerald-600">
                        <img
                            src={require('../assets/shop/1st_shoe.jpg')}
                            className="w-full h-fit"
                            alt="Banner 1"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full grid h-full place-items-center bg-emerald-600">
                        <img
                            src={require('../assets/shop/2nd_shoe.jpg')}
                            className="w-full h-fit"
                            alt="Banner 2"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full grid h-full place-items-center bg-emerald-600">
                        <img
                            src={require('../assets/shop/1st_shoe.jpg')}
                            className="w-full h-fit"
                            alt="Banner 3"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Banner;
