import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../store/contextAPI";
import "../style/main.scss";
import hat from "../assets/img/hat.png";

const menuLinks = [
  { name: "Szukaj repo", link: "/" },
  { name: "O zadaniu", link: "/description" },
  { name: "Silnia", link: "/math" },
];

function Layout({ children }) {
  const [light, setLight] = useContext(ThemeContext);

  const toggle = () => {
    setLight(!light);
  };
  return (
    <>
      <header>
        <nav className={!light ? `nav` : `nav nav-light`}>
          <div
            className={!light ? `layout-logo` : `layout-logo rotateLogo`}
            onClick={toggle}
          >
            <img src={hat} alt="kapelusz" />
          </div>
          <ul className="layout-ul">
            {menuLinks.map((item, index) => {
              return (
                <li key={`menuLink-${index}`}>
                  <Link
                    className={!light ? `layout-a` : `layout-a layout-a-light`}
                    to={item.link}
                  >
                    {item.name.toUpperCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main>
        <div className="layout-container">{children}</div>
      </main>
      <footer className={!light ? `` : `layout-footer-light`}>
        <span className="layout-footer-span">
          Autor aplikacji:{" "}
          <a
            className={
              !light
                ? `layout-footer-a`
                : `layout-footer-a layout-footer-a-light`
            }
            href="https://github.com/mhiho"
          >
            <strong>&nbsp;Michał Pełka&nbsp;</strong>
          </a>
          &#169;{new Date().getFullYear()}
        </span>
      </footer>
    </>
  );
}
export default Layout;
