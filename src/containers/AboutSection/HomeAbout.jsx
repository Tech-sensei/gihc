import React, { useState } from "react";
import "./HomeAbout.scss";
import { Link } from "react-router-dom";
import { tabData } from "../../data/data";
import Img1 from "../../assets/images/Rectangle-47.png";
import Img2 from "../../assets/images/Rectangle-51.png";

const HomeAbout = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabClick(index) {
    setSelectedTab(index);
  }

  const maxContentLength = 300;

  return (
    <section className="homeAbout">
      <article className="homeAbout__container container flex">
        <div className="homeAbout__container--content">
          <div className="homeAbout__container--content-first">
            <figure className="homeAbout__container--content-first-img">
              <img src={Img1} alt="img1" />
            </figure>
          </div>

          <div className="homeAbout__container--content-second">
            <div className="homeAbout__header">
              <h2>About Us</h2>
            </div>

            <div className="homeAbout__nav">
              {tabData.map((tab, index) => (
                <div
                  className={`homeAbout__nav-item ${
                    selectedTab === index ? "current" : ""
                  }`}
                  key={index}
                  onClick={() => handleTabClick(index)}
                >
                  <h3>{tab.title} </h3>
                </div>
              ))}
            </div>

            <div className="homeAbout__contents">
              <p>
                {tabData[selectedTab].content.length > maxContentLength ? (
                  <>
                    {tabData[selectedTab].content.substring(
                      0,
                      maxContentLength
                    )}
                    ...
                    <Link className="link" to="/about">
                      Read More
                    </Link>
                  </>
                ) : (
                  tabData[selectedTab].content
                )}
              </p>
            </div>

            <div className="homeAbout__btn">
              <Link to="https://tix.africa/discover/greatifelh" target="_blank">
                <button className="btn">
                  <span>Get your Ticket</span>
                </button>
              </Link>

              <Link
                to="https://chat.whatsapp.com/LeHlWYiooMjDJeQ106vDup"
                target="_blank"
              >
                <button className="btn">
                  <span>Join Our Community</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="homeAbout__container--content-third">
            <div className="homeAbout__container--content-third-img">
              <img src={Img2} alt="img2" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HomeAbout;
