import React from 'react';
import CheckImg from '../resources/images/check.png';

const OnlyWithAudioCheckbox = (props) => {
  const hanldeConnectionTypeChange = () => {
    // change info in our store about connection type
  }

  return (
    <div className='checkbox_container'>
      <div className='checkbox_connection' onClick={hanldeConnectionTypeChange}>
        <img className='checkbox_image' src={CheckImg} alt='check'/>
      </div>
      <p className='checkbox_container_paragraph'>Only audio</p>
    </div>
  );
};

export default OnlyWithAudioCheckbox;