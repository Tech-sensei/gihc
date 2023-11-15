import React from "react";
import "./Hero.scss";
import img from "../../assets/images/Rectangle 55.png";
import img1 from "../../assets/images/hero-1.jpg";
import img2 from "../../assets/images/hero-2.jpg";
import img3 from "../../assets/images/rec1.jpg";
import img4 from "../../assets/images/rec2.jpg";
import img5 from "../../assets/images/rec3.jpg";
import img6 from "../../assets/images/rec4.jpg";
import img7 from "../../assets/images/rec5.jpg";
import img8 from "../../assets/images/rec6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <section className="hero">
      <article className="hero__container container">
        <div className="hero__container--header">
          <h1 className="hero__container-title">Great Ife Hangout Community</h1>
          <p>
            A networking community of great Ife students and alumni thats serves
            as a model and inspires other educational and related institutions
            globally.
          </p>
        </div>

        <div className="hero__container--content">
          <div className="content-carousel">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay]}
              className="swiper"
            >
              <SwiperSlide className="swiper-slide">
                <img src={img} alt="carousel" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={img1} alt="hero" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={img2} alt="hero" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={img3} alt="hero" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={img4} alt="hero" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={img5} alt="hero" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={img6} alt="hero" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={img7} alt="hero" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={img8} alt="hero" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
