import React from "react";
import "./CTA.scss";
import Button from "../../components/Button/Button";
import Marquee from "../../components/Marquee/Marquee";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="section cta">
      <Marquee />
      <div className="cta__wrapper">
        <article className="cta__container container flex">
          <div className="cta__container--contents flex">
            <h2 className="cta__container--contents__title">
              Join the Lagos community <span>today!</span>
            </h2>
            <p className="cta__container--contents__text">
              Absolutely! Joining our vibrant community in Lagos and Abuja will
              connect you with like-minded individuals across regions. Embrace
              the diversity of cultures, ideas, and experiences as we come
              together for amazing hangouts, discussions, and events. Do send a
              DM on Whatsapp (08055978328) to become a part of our dynamic
              community where connections are made, friendships blossom, and a
              sense of belonging thrives. Join us to explore, learn, and grow
              together as we build strong bonds within our unique and diverse
              social fabric.
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

        <article className="cta__container container flex">
          <div className="cta__container--contents flex">
            <h2 className="cta__container--contents__title">
              Join the Abuja community <span>today!</span>
            </h2>
            <p className="cta__container--contents__text">
              🌟 Get ready for the most epic hangout of the year! The Great Ife
              Abuja Hangout 1.0 #GIAH is just around the corner, and we're
              pulling out all the stops to make it unforgettable! 🎉 📢 Stay
              tuned for an incredible experience that'll blow your mind! Contact
              us on WhatsApp for all the deets and get ready to dive into a
              world of excitement! 📲✨ #ExcitingTimes #GetReadyToHangout
              Contact us on Whatsapp for more details. (08055978328)
            </p>

            <Link
              to="https://chat.whatsapp.com/DM9zSDBl39l5ucFvZsWjK9"
              target="_blank"
            >
              <Button
                className={"btn cta__container--contents__btn"}
                text={"Join Our Community"}
              />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CTA;
