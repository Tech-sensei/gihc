import React from "react";
import "./CTA.scss";
import Button from "../../components/Button/Button";
import Marquee from "../../components/Marquee/Marquee";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="section cta">
      <Marquee />
      <article className="cta__container container flex">
        <div className="cta__container--contents flex">
          <h2 className="cta__container--contents__title">
            Join the community <span>today!</span>
          </h2>
          <p className="cta__container--contents__text">
            A networking community of great Ife students and alumni thats serves
            as a model and inspires other educational and related serves as a
            model and inspires other educational and related institutions
            globally.
          </p>

          <Link
            to="https://chat.whatsapp.com/LeHlWYiooMjDJeQ106vDup"
            target="_blank"
          >
            <Button
              className={"btn cta__container--contents__btn"}
              text={"Join Our Community"}
            />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default CTA;
