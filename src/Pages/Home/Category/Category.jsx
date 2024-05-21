import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Category = () => {
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/pwSvLFn/melissa-walker-horn-P5-Ih-Vm-H6-Fo-M-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/DKTk2XG/karolina-kolodziejczak-x7h-Mz-Wx-Za78-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/3YpSL7t/nadya-filatova-Aa-Aia-Wghzkk-unsplash.jpg" alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;