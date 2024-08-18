import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilepic1 from "./assets/profile1.jpg";
import profilepic2 from "./assets/profile2.jpg";
import profilepic3 from "./assets/profile3.jpg";
import profilepic4 from "./assets/profile4.jpg";

// Import Swiper modules
// import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonial() {
  const clients = [
    {
      img: profilepic1,
      review:
        "There are two ways to live your life,One is as though nothing is miracle,The other is as though everything is a miracle",
    },
    {
      img: profilepic3,
      review:
        "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.",
    },
    {
      img: profilepic4,
      review:
        "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.",
    },
  ];

  return (
    <div className="t-wrapper" data-aos="zoom-in-down" id="Testimonials">
      <div className="t-heading">
        <span>I follow their quotes </span>
        <span>To reach my goal </span>
        <span>In my life...</span>
        <div className="blur t-blur2" style={{ background: "orange" }}></div>
      </div>

      <Swiper
        // modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt="Client profile" />
              <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
