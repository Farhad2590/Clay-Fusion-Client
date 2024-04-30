
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            cssMode={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/b3n9Vk8/banner1.jpg" />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
                    <h2 className="text-2xl lg:text-4xl text-white pb-5 font-bold">Clay-made Creations: Timeless Beauty Pottery</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/bFWy4QC/banner2.jpg" />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
                    <h2 className="text-2xl lg:text-4xl text-white pb-5 font-bold">Stoneware Sophistication:Elevate Dining Experience</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/19XY7Wm/banner5.jpg" />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
                    <h2 className="text-2xl lg:text-4xl text-white pb-5 font-bold">Porcelain Perfection:Delicate Charm</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/sJHCQt8/banner10.jpg" />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
                    <h2 className="text-2xl lg:text-4xl text-white pb-5 font-bold">Terra Cotta Treasures: Rustic Elegance Spaces</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/YLLSr9g/banner12.jpg" />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
                    <h2 className="text-2xl lg:text-4xl text-white pb-5 font-bold">Ceramic Wonders:Artistry & Functionality</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/N68hNyP/banner14.jpg" />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
                    <h2 className="text-2xl lg:text-4xl text-white pb-5 font-bold">Home Decor Pottery: Artisanal Touches</h2>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;