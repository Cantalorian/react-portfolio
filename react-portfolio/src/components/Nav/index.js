import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    aboutSelected,
    setAboutSelected,
    contactSelected,
    setContactSelected,
    portfolioSelected,
    setPortfolioSelected,
  } = props;
  
  return (
    <header className="flex-row px-1">
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
            <a data-testid="about" href="#about" 
              onClick={() => {
                setAboutSelected(true);
                setContactSelected(false)
                setPortfolioSelected(false)
              }}>
              About Me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span 
              onClick={() => {
                setContactSelected(true)
                setAboutSelected(false)
                setPortfolioSelected(false)
              }}>
              Contact Me
            </span>
          </li>
          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <span
              onClick={() => {
                setAboutSelected(false);
                setContactSelected(false);
                setPortfolioSelected(true);
              }}>
              Portfolio
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;