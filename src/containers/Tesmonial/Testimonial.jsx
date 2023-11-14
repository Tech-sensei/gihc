import React from "react";
import "./Testimonial.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="section testimonial">
      <article className="testimonial__container container">
        <div className="testimonial__container--header">
          <h2>REVIEWS ABOUT THE EVENT</h2>
        </div>
        <Swiper
          className="mySwiper"
          watchSlidesProgress={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 250000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <div className="testimonial-wrapper">
              <FaQuoteLeft className="quote-left" />
              <p className="testimonial__content">
                I had the pleasure of attending an event called "GREAT IFE
                HANGOUT." It was a truly eventful experience where I had the
                opportunity to meet some incredible people who later became
                close friends.  The event was a blast, with a variety of
                enjoyable activities such as games and beach fun. I absolutely
                loved every moment of it.
              </p>
              <p className="testimonial__name">Funsho Awodiran, CEO Afkit</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-wrapper">
              <FaQuoteLeft className="quote-left" />
              <p className="testimonial__content">
                I was fortunate to be one of the many who had that unique
                experience of the Great Ife lasgidi hangout maiden edition. It
                was a terrific package of experience one that would linger in
                memory as long as blood flows through the veins. The hangout was
                born out of a burning desire to have a gathering of Great Ife
                students and friends from far and wide.
              </p>
              <p className="testimonial__name">Akanho Olanshile Kazeem</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-wrapper">
              <FaQuoteLeft className="quote-left" />
              <p className="testimonial__content">
                The Great Ife Lasgidi Hangout was a great experience for me. I
                had the opportunity to meet with other Great Ife students and
                alumni. I also had the opportunity to network with other
                entrepreneurs and business owners. The event was well organized
                and I look forward to attending the next edition.
              </p>
              <p className="testimonial__name">Oluwaseun Oyebade</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-wrapper">
              <FaQuoteLeft className="quote-left" />
              <p className="testimonial__content">
                The Great Ife Lasgidi Hangout was a great experience for me. I
                had the opportunity to meet with other Great Ife students and
                alumni. I also had the opportunity to network with other
                entrepreneurs and business owners. The event was well organized
                and I look forward to attending the next edition.
              </p>
              <p className="testimonial__name">Bamigboye Damilola</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </article>
    </section>
  );
};

export default Testimonial;
