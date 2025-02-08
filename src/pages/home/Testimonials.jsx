import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

    const testimonials = [
        {
            id: 1,
            logo: '/images/logos/logo1.png',
            quote: 'Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.',
            name: 'John Doe',
            position: 'CEO, TechCorp',
            initial: 'J'
        },
        {
            id: 2,
            logo: '/images/logos/logo2.png',
            quote: 'Suspendisse potenti. Nunc feugiat mauris eget dolor laoreet, eu aliquam metus sollicitudin. Nam fermentum turpis vel quam tincidunt, sed tincidunt dui dapibus.',
            name: 'Jane Smith',
            position: 'CTO, InnovateX',
            initial: 'S'
        },
        {
            id: 3,
            logo: '/images/logos/logo2.png',
            quote: 'Suspendisse potenti. Nunc feugiat mauris eget dolor laoreet, eu aliquam metus sollicitudin. Nam fermentum turpis vel quam tincidunt, sed tincidunt dui dapibus.',
            name: 'Jane Smith',
            position: 'CTO, InnovateX',
            initial: 'S'
        },
        {
            id: 4,
            logo: '/images/logos/logo2.png',
            quote: 'Suspendisse potenti. Nunc feugiat mauris eget dolor laoreet, eu aliquam metus sollicitudin. Nam fermentum turpis vel quam tincidunt, sed tincidunt dui dapibus.',
            name: 'Jane Smith',
            position: 'CTO, InnovateX',
            initial: 'S'
        }

    ];

const Testimonials = () => {
    return (
        <div className='bg-colorBg'>
            <div className='section-container'>
                <HeadingSection heading="What Our Clients Says" subheading="Testimonials" description="" />

                {/* testimonial carousel */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        testimonials.map(testimonial => (
                            <SwiperSlide key={testimonial.id}>
                                <div className='bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo1.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>"Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."</p>

                                <div className='flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>J</div>
                                    <h3 className='text-lg font-bold text-gray-800'>John Doe</h3>
                                    <p className='text-sm text-gray-500'>CEO, TechCorp</p>
                                </div>
                            </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials