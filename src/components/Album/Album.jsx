import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow, FreeMode } from 'swiper/modules';



import { Mirror, prideLogo, Ring, Ring2, Ring3, Ring4, Ring5 } from "../../utils";

import 'swiper/css'
import 'swiper/css/pagination'

export default function Album() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            {/* svg */}
            <div className="mt-24 mb-12">
                <img src={Mirror} className="w-full" />
            </div>
            {/* slide */}
            <Swiper
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: -35,
                    stretch: 10,
                    depth: 250,
                    modifier: 1,
                    slideShadows: false,
                }}
                slidesPerView={1.6}
                spaceBetween={10}
                centeredSlides={true}
                freeMode={false}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation, EffectCoverflow, FreeMode]}
                className="mySwiper mt-12 w-full">
                {/* Image 1 */}
                <SwiperSlide >
                    <img src={Ring} />
                </SwiperSlide>
                {/* Image 2 */}
                <SwiperSlide >
                    <img src={Ring2} />
                </SwiperSlide>
                {/* Image 3 */}
                <SwiperSlide >
                    <img src={Ring3} />
                </SwiperSlide>
                {/* Image 4 */}
                <SwiperSlide >
                    <img src={Ring4} />
                </SwiperSlide>
                {/* Image 5 */}
                <SwiperSlide >
                    <img src={Ring5} />
                </SwiperSlide>
            </Swiper>

            {/*  */}
            <div className="flex items-center justify-center my-20">
                <p>the wait is always warth it.</p>
            </div>
            <div className="flex justify-center items-center w-full">
                <img src={prideLogo} className="w-24 mb-12" />
            </div>

        </div>

    )
}

