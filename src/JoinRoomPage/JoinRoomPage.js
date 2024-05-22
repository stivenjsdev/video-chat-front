import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './JoinRoomPage.css';

const JoinRoomPage = (props) => {
  const search = useLocation().search;

  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get('host');
    if (isRoomHost) {
      // seeting in our redux store that user is host
    }
  }, []);

  return (
    <div className='join_room_page_container'>
      <div className='join_room_page_panel'>

      </div>
    </div>
  );
};

export default JoinRoomPage;