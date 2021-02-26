import React from "react";
import { Link } from 'react-router-dom';
import '../style/main.scss';

const menuLinks = [
  {name: 'Repozytoria', link: '/'},
  {name: 'Opis zadania', link: '/description'},
  {name: 'Silnia', link: '/math'}
]

function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <ul className='layout-ul'>
            { menuLinks.map((item,index) => {
              return <li key={`menuLink-${index}`}><Link className='layout-a' to={item.link}>{item.name.toUpperCase()}</Link></li>
            })}
          </ul>
        </nav>
      </header>
      <main>
        <div>{children}</div>
      </main>
    </>
  );
}
export default Layout;
