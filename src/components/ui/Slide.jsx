import Image from "next/image";
import { SwiperSlide } from "swiper/react";

const Slide = ({ book }) => {

    return (
        <SwiperSlide>
            <img src={book.image_url} alt={book.title} className="h-96 w-auto object-cover rounded-lg" />
        </SwiperSlide>
    );
};

export default Slide;