/* eslint-disable react/prop-types */
import CardShare from "../../Shared/CardShare";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"; // import required modules
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {items.map((item) => (
              <CardShare key={item._id} item={item}></CardShare>
            ))}
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OrderTab;
