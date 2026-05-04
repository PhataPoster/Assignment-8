"use client";
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Slide from './Slide';
import { fetchBooks } from '@/lib/data';
import Image from 'next/image';


const SwiperBookShow =  () => {
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        const loadBooks = async () => {
            const data = await fetchBooks();
            setBooksData(data);
        };

        loadBooks();
    }, []);
    // console.log(booksData);
    return (
        <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
            booksData.map(book =>  <SwiperSlide key={book.id}>
        
            <Image src={book.image_url} alt={book.title} className="h-96 w-auto object-cover rounded-lg mb-2" width={300} height={300} />
        </SwiperSlide>)
        }
      </Swiper>
    </>
    );
};

export default SwiperBookShow;