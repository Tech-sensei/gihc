import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/svg/Logo.svg";
import Button from "../../components/Button/Button";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import "./Header.scss";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [shadow, setShadow] = useState("none");
  const navMenu = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("var(--background");
        setShadow("var(--dark-shadow)");
      } else {
        setBgColor("transparent");
        setShadow("none");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    showLinks
      ? navMenu.current.classList.add("show-menu")
      : navMenu.current.classList.remove("show-menu");
  }, [showLinks]);

  const toggleNav = () => {
    setShowLinks(!showLinks);
    setToggle(!toggle);
  };

  const navLinkClose = () => {
    setShowLinks(false);
    setToggle(!toggle);
  };

  return (
    <header
      className="nav"
      style={{ backgroundColor: bgColor, boxShadow: shadow }}
    >
      <nav className="nav__container container">
        <Link to="/" className="nav__logo">
          <img src={Logo} alt="Nav logo" />
        </Link>

        <div className="nav__menu" ref={navMenu}>
          <ul className="nav__list">
            {/* TODO: Because of the react-scroll that is why it like this  */}
            {[
              { text: "About Us", id: "about-us", url: "/about" },
              { text: "Partner with Us", id: "partner" },
              { text: "Community", id: "community" },
              { text: "Meet the Team", id: "team", url: "/team" },
              { text: "FAQ", id: "faq" },
            ].map((link) => {
              return (
                <li className="nav__item" key={`link-${link.id}`}>
                  <Scroll
                    to={link.id}
                    smooth={true}
                    duration={300}
                    offset={-70}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      scrollBehavior: "smooth",
                    }}
                  >
                    <Link
                      to={link.url}
                      className="nav__link"
                      onClick={navLinkClose}
                    >
                      {link.text}
                    </Link>
                  </Scroll>
                </li>
              );
            })}

            <Button className={"btn btn-mobile"} text={"Get your Ticket"} />
          </ul>
        </div>

        <Button className={"btn btn-desktop"} text={"Get your Ticket"} />

        <div className="nav__toggle">
          <button className="nav__btn" onClick={toggleNav}>
            {!toggle ? <AiOutlineMenuFold /> : <AiOutlineClose />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
