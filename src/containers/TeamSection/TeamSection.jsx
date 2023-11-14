import React from "react";
import "./TeamSection.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { teamMembers } from "../../data/data";
import { Link } from "react-router-dom";

const TeamSection = () => {
  return (
    <section className="section teamSection">
      <article className="teamSection__container container">
        
        <div className="teamSection__container--header">
          <h2>Meet the Organizing Team Leads</h2>
        </div>

        <div className="teamSection__container--content">
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={1}
            spaceBetween={10}
            className="mySwiper"
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay]}
          >
            {teamMembers.map((team, index) => (
              <SwiperSlide key={index}>
                <div className="past__speaker--body">
                  <div className="past__speaker--body-menu"></div>
                  <div>
                    <span className="past__speaker--list">
                      <span className="past__speaker--item">
                        <img src={team.image} alt="past-speaker" />
                      </span>
                    </span>
                  </div>
                  <div className="past__speaker--bio">
                    <h3>{team.name}</h3>
                    <p>{team.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Link to="/team" rel="noreferrer" className="teamSection__btn btn">
          <span>
            See all Team Leads <span>&rarr;</span>
          </span>
        </Link>
      </article>
    </section>
  );
};

export default TeamSection;
