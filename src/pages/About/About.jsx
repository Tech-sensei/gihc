import React from "react";
import "./About.scss";
import { HiChevronDoubleDown } from "react-icons/hi";
import { Link as Scroll } from "react-scroll";

const About = () => {
  return (
    <>
      <section className="header-bg section">
        <article className="header-bg__container">
          <div className="header-bg__container-contents">
            <h1 className="">ABOUT GILH </h1>
          </div>

          <Scroll
            to="next-section"
            smooth={true}
            duration={100}
            delay={0}
            offset={100}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="scroll-btn">
              <HiChevronDoubleDown />
              <span>Scroll Down</span>
            </div>
          </Scroll>
        </article>
      </section>

      <section className="section about" id="next-section">
        <article className="about__container container">
          <div className="about__container-contents">
            <div className="mission-vision">
              <div className="about-mission">
                <h3 className="about__container-contents-title">Our Mission</h3>
                <p className="about__container-contents-desc">
                  To establish the Great Ife Hangout Community as a model and
                  influential network that inspires other educational
                  institutions and related communities
                </p>
              </div>

              <div className="about-mission">
                <h3 className="about__container-contents-title">Our Vision</h3>
                <p className="about__container-contents-desc">
                  To come together as a community to network, and build a global
                  platform for all members of the community fostering unity.
                </p>
              </div>
            </div>

            <div className="about-evolve">
              <h3 className="about__container-contents-title">
                How we evolved
              </h3>
              <p className="about__container-contents-desc">
                <span>Our Transformative Journey </span> <br />
                In December 2020, a divine spark ignited the vision of the Great
                Ife Hangout Community, a concept brought to life with a fervor
                and the support of remarkable individuals. Initially labeled
                "GreatIfeLasgidiHangout1.0," we set forth on a path guided by a
                higher purpose. Amid financial challenges, the unwavering
                commitment of individuals like Fynestboi, Debola, and others
                provided the foundation for our dream in a way. Notable
                personalities like Abass Oyeyemi (of blessed memory),
                Blaqboo,Shaldre(Co MC ), Theophilus, Tom, Crownfit, Zeeco, Woli
                Arole, Ajayi Oluwafemi, and 2much Akanni stood by our side,
                playing pivotal roles in the success of the event. Brands like
                Nixmar and Swags, Babafaros and Unik Properties contributed
                generously. Darma PR and Aduragbemi Oladunjoye played pivotal
                roles in spreading the message alongside other PRs and persons
                within the Great Ife circle. Our inaugural event in Lagos
                brought together both OAU individuals and non including the
                likes of Sleeky, Segun Komolafe (Who played the voluntary role
                of our photographer that day), Olaogun Olamide (the cook of the
                day), Yusuf Busayo, Adebola Esther and many more who selflessly
                supported our cause. Our initial team members included Akanho
                Olanshile, Olagoke Toluwabori, Okiki, Fashoyin Adebiyi,
                Aduragbemi Oladunjoye, Komolafe Tolulope Joshua and others. The
                first edition aimed at supporting businesses of our own, with
                most participants and those we engaged with services to render
                being products (mostly undergraduates) of Great Ife. We express
                our gratitude to these individuals, as well as our sisters and
                our mum, who played indispensable roles. It's important to
                mention that reaching out to alumni and students with
                opportunities to share is one of the core aspects of our
                mission. We aim to connect and empower our extended Great Ife
                family within the scope of our mission and purpose. Femi Fatokun
                Olaifa, who was informed about this idea early on, played a key
                role in shaping our success. His advice and guidance were
                invaluable, contributing to the event's achievements. Bamigboye
                Damilola, Adeyemi Oluwapelumi, Olakunle Sanyaolu, Shaledralee,
                Opakume, Oyinkosola, Adebola Esther, Mujeeb Lawal, CEO Afkit,
                and friends were among the attendees at the first edition in
                Lagos. This time, our community is better structured, aiming to
                benefit undergraduates, postgraduates, graduates, the Ile-Ife
                community, and anyone connected to our hangouts. Beyond
                networking, we aspire to foster the growth of local businesses
                of our community members. One of our goals is to provide
                opportunities and support, transcending the boundaries of campus
                life, reaching out to alumni and students who have opportunities
                to share. We are excited to embark on this journey of impact and
                growth. Come on this journey with us!
              </p>
            </div>
          </div>
        </article>
      </section>

      <p></p>
    </>
  );
};

export default About;
