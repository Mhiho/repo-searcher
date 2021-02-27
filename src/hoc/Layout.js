import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from "../store/contextAPI";
import '../style/main.scss';
import hat from '../assets/img/hat.png';

const menuLinks = [
  {name: 'Silnia', link: '/math'},
  {name: 'Opis zadania', link: '/description'},
  {name: 'Repozytoria', link: '/'},
]

function Layout({ children }) {

  const [light, setLight] = useContext(ThemeContext);
  
  const toggle = () => {
    setLight(!light);
  };
  return (
    <>
      <header>
        <nav className={!light ? `nav` : `nav nav-light`}>
            <div className={!light ? `layout-logo` : `layout-logo rotateLogo`} onClick={toggle}>
            <img src={hat} alt='kapelusz' />
            </div>
          <ul className='layout-ul'>
            { menuLinks.map((item,index) => {
              return <li key={`menuLink-${index}`}><Link className={!light ?`layout-a` : `layout-a layout-a-light`} to={item.link}>{item.name.toUpperCase()}</Link></li>
            })}
          </ul>
        </nav>
      </header>
      <main>
        <div className="layout-container">{children}</div>
      </main>
    </>
  );
}
export default Layout;
