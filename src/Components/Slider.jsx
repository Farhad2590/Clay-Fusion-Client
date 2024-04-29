
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
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                    {/* <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Opulent Haven: Luxe Living Redefined</h2> */}
                    <div className="flex lg:w-[650px] text-center">
                        {/* <p className="sm:block hidden lg:text-xl text-white">Experience unparalleled extravagance and refinement in our exclusive estate hub, where every detail exudes sophistication and grandeur.</p> */}
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/bFWy4QC/banner2.jpg" />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                    {/* <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Opulent Haven: Luxe Living Redefined</h2> */}
                    <div className="flex lg:w-[650px] text-center">
                        {/* <p className="sm:block hidden lg:text-xl text-white">Experience unparalleled extravagance and refinement in our exclusive estate hub, where every detail exudes sophistication and grandeur.</p> */}
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/19XY7Wm/banner5.jpg" />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                    {/* <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Opulent Haven: Luxe Living Redefined</h2> */}
                    <div className="flex lg:w-[650px] text-center">
                        {/* <p className="sm:block hidden lg:text-xl text-white">Experience unparalleled extravagance and refinement in our exclusive estate hub, where every detail exudes sophistication and grandeur.</p> */}
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/sJHCQt8/banner10.jpg" />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                    {/* <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Opulent Haven: Luxe Living Redefined</h2> */}
                    <div className="flex lg:w-[650px] text-center">
                        {/* <p className="sm:block hidden lg:text-xl text-white">Experience unparalleled extravagance and refinement in our exclusive estate hub, where every detail exudes sophistication and grandeur.</p> */}
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/YLLSr9g/banner12.jpg" />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                    {/* <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Opulent Haven: Luxe Living Redefined</h2> */}
                    <div className="flex lg:w-[650px] text-center">
                        {/* <p className="sm:block hidden lg:text-xl text-white">Experience unparalleled extravagance and refinement in our exclusive estate hub, where every detail exudes sophistication and grandeur.</p> */}
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/N68hNyP/banner14.jpg" />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                    {/* <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Opulent Haven: Luxe Living Redefined</h2> */}
                    <div className="flex lg:w-[650px] text-center">
                        {/* <p className="sm:block hidden lg:text-xl text-white">Experience unparalleled extravagance and refinement in our exclusive estate hub, where every detail exudes sophistication and grandeur.</p> */}
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div>
                    <img className="w-full rounded-lg" src="https://i.ibb.co/mHD37Jp/banner15.jpg" />
                </div>
                <div className=" absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 rounded-lg">
                    {/* <h2 className="text-2xl lg:text-5xl text-white pb-5 font-bold">Opulent Haven: Luxe Living Redefined</h2> */}
                    <div className="flex lg:w-[650px] text-center">
                        {/* <p className="sm:block hidden lg:text-xl text-white">Experience unparalleled extravagance and refinement in our exclusive estate hub, where every detail exudes sophistication and grandeur.</p> */}
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;