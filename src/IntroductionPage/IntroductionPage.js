import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setIsRoomHost } from "../store/actions";
import ConnectingButtons from "./ConnectingButtons";
import "./IntroductionPage.css";

const IntroductionPage = ({ setIsRoomHostAction }) => {
  useEffect(() => {
    setIsRoomHostAction(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        {/* <img className="introduction_page_image" src={logo} alt="logo"></img> */}
        <p className="logo_string">Video Chat</p>
        <ConnectingButtons />
      </div>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(null, mapActionsToProps)(IntroductionPage);
