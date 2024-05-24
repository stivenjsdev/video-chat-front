import React from "react";
import { connect } from "react-redux";
import ChatSection from "./ChatSection/ChatSection";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import RoomLabel from "./RoomLabel";
import "./RoomPage.css";
import VideoSection from "./VideoSection/VideoSection";

const RoomPage = ({ roomId }) => {
  return (
    <div className="room_container">
      <ParticipantsSection />
      <VideoSection />
      <ChatSection />
      <RoomLabel roomId={roomId} />
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(RoomPage);
