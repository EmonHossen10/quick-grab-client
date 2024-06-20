import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import img1 from "../../../../public/asset/home/slide1.jpg";
import img2 from "../../../../public/asset/home/slide2.jpg";
import img3 from "../../../../public/asset/home/slide3.jpg";
import img4 from "../../../../public/asset/home/slide4.jpg";
import img5 from "../../../../public/asset/home/slide5.jpg";
import img6 from "../../../../public/asset/home/slide6.jpg";
import img7 from "../../../../public/asset/home/slide7.jpg";
import img8 from "../../../../public/asset/home/slide8.jpg";
import SectionTitle from "../../../Components/SectionTitle";

const Category = () => {
  return (
    <div className="max-w-6xl   mx-auto py-4">
      
      <SectionTitle 
      subHeading="From 10.00 AM to 11.00 PM"
      heading="Order Online"
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-[500px] w-full" src={img1} alt="" />
          <h3 className="text-4xl   text-white  opacity-90 uppercase  font-semibold text-center  -mt-20  ">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={img2} alt="" />{" "}
          <h3 className="text-4xl text-white opacity-90 uppercase  font-semibold text-center -mt-20">
            pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={img3} alt="" />{" "}
          <h3 className="text-4xl text-white opacity-90 uppercase  font-semibold text-center -mt-20">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={img4} alt="" />{" "}
          <h3 className="text-4xl text-white opacity-90 uppercase  font-semibold text-center -mt-20">
            cake
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={img5} alt="" />
          <h3 className="text-4xl text-white opacity-90 uppercase  font-semibold text-center -mt-20">
            burger
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={img6} alt="" />
          <h3 className="text-4xl text-white opacity-90 uppercase  font-semibold text-center -mt-20">
            Noodles
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={img7} alt="" />
          <h3 className="text-4xl text-white opacity-90 uppercase  font-semibold text-center -mt-20">
            sushi
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[500px] w-full" src={img8} alt="" />
          <h3 className="text-4xl text-white opacity-90 uppercase  font-semibold text-center -mt-20">
            ramen
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
