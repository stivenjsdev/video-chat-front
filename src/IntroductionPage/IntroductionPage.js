import React from 'react';
import logo from '../resources/images/logo.png';

import './IntroductionPage.css';

const IntroductionPage = (props) => {

  return (
    <div className='introduction_page_container'>
      <div className='introduction_page_panel'>
        <img className='introduction_page_image' src={logo} alt='logo'></img>
        Buttons
      </div>
    </div>
  );
};

export default IntroductionPage;