import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaCommentAlt } from "react-icons/fa";

const Testimonials = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div>
      <SectionTitle
        subHeading={"what our client say"}
        heading={"testimonials"}
      ></SectionTitle>

      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review?.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="  flex  flex-col lg:mx-24 lg:my-16 mx-8 items-center space-y-3 ">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={item.image} />
                  </div>
                </div>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={item.rating}
                  readOnly
                />
                <div className="  p-5">
                  {" "}
                  <FaCommentAlt className="text-6xl"></FaCommentAlt>
                </div>
                <p> {item.details}</p>
                <h3 className="text-2xl text-basic font-semibold">
                  {item.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
