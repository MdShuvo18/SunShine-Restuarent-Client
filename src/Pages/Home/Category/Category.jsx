import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Sectiontitle from '../../../Components/SectionTitle';



const Category = () => {
    return (
        <div>
            <section>
                <Sectiontitle
                    subHeading={"From 11:00am to 10:00pm"}
                    heading={"ORDER ONLINE"}
                >

                </Sectiontitle>
               
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-24 mt-6"
                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/pwSvLFn/melissa-walker-horn-P5-Ih-Vm-H6-Fo-M-unsplash.jpg" alt="" />
                        <h2 className='text-4xl text-white font-semibold -mt-16 uppercase text-center'>Soups</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/DKTk2XG/karolina-kolodziejczak-x7h-Mz-Wx-Za78-unsplash.jpg" alt="" />
                        <h2 className='text-4xl text-white font-semibold -mt-16 uppercase text-center'>sauce</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/3YpSL7t/nadya-filatova-Aa-Aia-Wghzkk-unsplash.jpg" alt="" />
                        <h2 className='text-4xl text-white font-semibold -mt-16 uppercase text-center'>Soups</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/rt5r8NY/monika-grabkowska-EM8ljm8-UOD8-unsplash.jpg" alt="" />
                        <h2 className='text-4xl text-white font-semibold -mt-16 uppercase text-center'>vegitables</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/7p2HYKm/peter-bravo-de-los-rios-Oklp-Rh8-Sns-unsplash.jpg" alt="" />
                        <h2 className='text-4xl text-white font-semibold -mt-16 uppercase text-center'>pizza</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/6R4mvs7/monika-grabkowska-p-Cx-Jv-Se-SB5-A-unsplash.jpg" alt="" />
                        <h2 className='text-4xl text-white font-semibold -mt-16 uppercase text-center'>salad</h2>
                    </SwiperSlide>

                </Swiper>
            </section>
        </div>
    );
};

export default Category;