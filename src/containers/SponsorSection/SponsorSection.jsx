import React from "react";
import "./SponsorSection.scss";
import Img1 from "../../assets/images/Rectangle-12.png";

const SponsorSection = () => {
  return (
    <>
      <section className="section sponsor">
        <article className="sponsor__container">
          <div className="sponsor__container--content">
            <div className="sponsor__container--content-left">
              <div className="left-wrapper">
                <span>Upcoming Event</span>
                <h3>Great Ife Lasgidi hangout 2.0</h3>
                <p>
                  A networking community of great Ife students and alumni thats
                  serves as a model and inspires other educational and related
                  serves as a model and inspires other educational and related A
                  networking community of great Ife students and alumni thats
                  serves as a model and inspires other educational and related
                  serves as
                </p>
                <button className="btn">
                  <span>Get your Ticket</span>
                </button>
              </div>
            </div>

            <figure className="sponsor__container--content-right">
              <img src={Img1} alt="img1" />
            </figure>
          </div>
        </article>
      </section>
      {/*  */}
      <section className="section sponsor" id="partner">
        <article className="sponsor__container">
          <div className="sponsor__container--content">
            <div className="sponsor__container--content-right">
              <img src={Img1} alt="img1" />
            </div>

            <div className="sponsor__container--content-left order">
              <div className="left-wrapper">
                <h3>Partner & sponsor</h3>
                <p>
                  A networking community of great Ife students and alumni thats
                  serves as a model and inspires other educational and related
                  serves as a model and inspires other educational and related A
                  networking community of great Ife students and alumni thats
                  serves as a model and inspires other educational and related
                  serves as
                </p>
                <div className="sponsor__container--content-left--btn">
                  <button className="btn">
                    <span>Sponsor GICH</span>
                  </button>

                  <button className="btn">
                    <span>Partner with GICH</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default SponsorSection;
