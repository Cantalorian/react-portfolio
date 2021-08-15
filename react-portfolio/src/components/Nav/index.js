import React from 'react';


function Nav(props) {
  const {
    aboutSelected,
    setAboutSelected,
    contactSelected,
    setContactSelected,
    portfolioSelected,
    setPortfolioSelected,
    resumeSelected,
    setResumeSelected
  } = props;
  
  return (
    <header className="flex-row px-1">
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
            <span 
              onClick={() => {
                setAboutSelected(true);
                setContactSelected(false);
                setPortfolioSelected(false);
                setResumeSelected(false);
              }}>
              About Me
            </span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span 
              onClick={() => {
                setContactSelected(true);
                setAboutSelected(false);
                setPortfolioSelected(false);
                setResumeSelected(false);
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
                setResumeSelected(false);
              }}>
              Portfolio
            </span>
          </li>
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
            <span
              onClick={() => {
                setAboutSelected(false);
                setContactSelected(false);
                setPortfolioSelected(false);
                setResumeSelected(true);
              }}>
              Resume
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;