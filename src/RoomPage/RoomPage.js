import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as webRTCHandler from "../utils/webRTCHandler";
import ChatSection from "./ChatSection/ChatSection";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import RoomLabel from "./RoomLabel";
import "./RoomPage.css";
import VideoSection from "./VideoSection/VideoSection";

const RoomPage = ({ roomId, identity, isRoomHost }) => {
  useEffect(() => {
    webRTCHandler.getLocalPreviewAndInitRoomConnection(
      isRoomHost,
      identity,
      roomId
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
