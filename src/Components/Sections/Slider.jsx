import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import banner1 from '../../assets/banner-1.jpg';
import banner2 from '../../assets/banner-2.jpg';
import banner3 from '../../assets/banner-3.jpg';
import banner4 from '../../assets/banner-4.jpg';

const Slider = () => {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <img className='h-[300px] lg:h-[650px] w-full' src={banner3} alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-[300px] lg:h-[650px] w-full' src={banner4} alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-[300px] lg:h-[650px] w-full' src={banner2} alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-[300px] lg:h-[650px] w-full' src={banner1} alt="banner" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;