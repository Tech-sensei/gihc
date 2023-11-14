import React from "react";
import "./Whyjoin.scss";
import { FaBuilding, FaGlobe } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoIosPeople, IoMdGlobe } from "react-icons/io";
import { GiStrong } from "react-icons/gi";
import { FiTrendingUp } from "react-icons/fi";
import { AiFillBook } from "react-icons/ai";
import { RiCommunityFill } from "react-icons/ri";

const reasonsToJoin = [
  {
    icon: <MdFavorite />,
    title: "Promotion and Support",
    description:
      "Foster a strong and interconnected community of Great Ife products, students, and affiliates, providing a platform for mutual promotion in areas such as business, careers, and personal development.",
  },
  {
    icon: <FaBuilding />,
    title: "Government Liaison",
    description:
      "Collaborate with local governments where our community members reside, respectfully advocating for the inclusion of our members due to their positive contributions to the community.",
  },
  {
    icon: <IoMdGlobe />,
    title: "Networking and Data",
    description:
      "Maintain a comprehensive database of Great Ife products and students residing in various locations where our events occur, enhancing connectivity and opportunities.",
  },
  {
    icon: <GiStrong />,
    title: "Empowerment",
    description:
      "Ensure that no Great Ife product or student remains idle, by creating opportunities for engagement within the community.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Leadership Development",
    description:
      "Cultivate capable leaders who can orchestrate events in their respective localities, utilizing our vision and mission as a guiding framework, under thorough community supervision.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    description:
      "Transform our hangout into a global event, spanning regions where Great Ife products and students reside.",
  },
  {
    icon: <AiFillBook />,
    title: "Educational Support",
    description:
      "Sponsor indigent students who are struggling to sustain themselves while excelling academically on campus.",
  },
  {
    icon: <RiCommunityFill />,
    title: "Community Outreach",
    description:
      "Give back to the Ile-Ife community through proceeds from the hangout or donations, supporting local students' education and contributing to the overall well-being of the community.",
  },
  {
    icon: <IoIosPeople />,
    title: "Talent Development",
    description:
      "Provide support to upcoming talents, whether graduates or undergraduates, within the Great Ife Hangout community.",
  },
];

const Whyjoin = () => {
  return (
    <section className="section whyJoin" id="community">
      <article className="whyJoin__container container">
        <div className="whyJoin__container--header">
          <h2>Why should you join the Great Ife Community?</h2>
        </div>
        <div className="whyJoin__container--contents">
          {reasonsToJoin.map((reason, index) => (
            <div className="content-card" key={index}>
              {reason.icon}
              <h2 className="content-card__title">{reason.title}</h2>
              <p className="content-card__description">{reason.description}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Whyjoin;
