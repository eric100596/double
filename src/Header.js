import React from 'react';
import './Header.css';

function Header(props) {
    const { title, subTitle } = props;
  return (
      <>
        <div className="top">
       
          <div className="top1">
          <img src='Dbl-7_Logo_vertical.png' alt='Dbl-7 Logo.png' height='175px' width='125px' />
            { title }
            <img src='Dbl-7_Logo_vertical.png' alt='Dbl-7 Logo.png' height='175px' width='125px' />
          </div>
          <div className="top2">
            { subTitle }
          </div>
        </div>
        
    </>
  );
}

export default Header;