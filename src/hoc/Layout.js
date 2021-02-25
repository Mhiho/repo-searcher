import React from "react";
import { Link } from 'react-router-dom';
import '../style/layout.scss';

const menuLinks = [
  {name: 'Wyszukiwarka', link: '/'},
  {name: 'Opis aplikacji', link: '/description'},
  {name: 'Silnia', link: '/math'}
]

function Layout({ children }) {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className='layout-ul'>
            { menuLinks.map((item,index) => {
              return <li key={`menuLink-${index}`}><Link className='layout-a' to={item.link}>{item.name}</Link></li>
            })}
          </ul>
        </nav>
      </header>
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
}
export default Layout;
