import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Swiper1 = () => {
    return (
        <>
            <div class="swiper-container">
                <Swiper
                    spaceBetween={30}
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
                    className="mySwiper"
                >
                    <SwiperSlide> <img class="fir" src="/images/slider1.png" alt=""></img></SwiperSlide>
                    <SwiperSlide> <img class="fir" src="/images/slider2.png" alt=""></img></SwiperSlide>
                    <SwiperSlide> <img class="fir" src="/images/slider3.png" alt=""></img></SwiperSlide>
                    <SwiperSlide> <img class="fir" src="/images/slider4.png" alt=""></img></SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}

export default Swiper1