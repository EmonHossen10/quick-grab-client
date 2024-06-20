// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import img1 from "../../../../public/asset/hero/hero1.jpg"
import img2 from "../../../../public/asset/hero/hero2.jpg"
import img3 from "../../../../public/asset/hero/hero3.jpg"
import img4 from "../../../../public/asset/hero/hero4.jpg"
import img5 from "../../../../public/asset/hero/hero5.jpg"
import img6 from "../../../../public/asset/hero/hero6.jpg"
import img7 from "../../../../public/asset/hero/hero7.jpg"
import img8 from "../../../../public/asset/hero/hero8.jpg"

const Banner = () => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img6} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img7} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img8} alt="" />
      </SwiperSlide>
       
    </Swiper>
  );
};

export default Banner;
