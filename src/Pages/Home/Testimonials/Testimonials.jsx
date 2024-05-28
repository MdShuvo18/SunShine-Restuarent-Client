import Sectiontitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            <section>
                <Sectiontitle
                    subHeading={"What Our Clients Say"}
                    heading={"TESTIMONIALS"}
                ></Sectiontitle>
            </section>



            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(item => <SwiperSlide key={item._id}>

                        <div className=" flex flex-col items-center space-y-2 text-center m-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={item.rating}
                                readOnly

                            />
                            <p>{item.details}</p>
                            <h2 className="text-2xl text-orange-400">{item.name}</h2>
                        </div>

                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Testimonials;