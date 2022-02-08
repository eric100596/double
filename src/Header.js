import React from 'react';
import './Header.css';

function Header(props) {
    const { title, subTitle } = props;
  return (
      <>

        <div class="top">
            { title }
            <br/>
            { subTitle }
        </div>
    </>
  );
}

export default Header;
