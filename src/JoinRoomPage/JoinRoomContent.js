import React, { useState } from "react";
import { connect } from "react-redux";
import { setConnectOnlyWithAudio } from "../store/actions";
import ErrorMessage from "./ErrorMessage";
import JoinRoomButtons from "./JoinRoomButtons";
import JoinRoomInputs from "./JoinRoomInputs";
import OnlyWithAudioCheckbox from "./OnlyWithAudioCheckbox";

const JoinRoomContent = (props) => {
  const { isRoomHost, setConnectOnlyWithAudioAction, connectOnlyWithAudio } =
    props;

  const [roomIdValue, setRoomIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleJoinRoom = () => {
    //joining the room
    console.log('joining');
  }

  return (
    <>
      <JoinRoomInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      />
      <OnlyWithAudioCheckbox
        setConnectOnlyWithAudio={setConnectOnlyWithAudioAction}
        connectOnlyWithAudio={connectOnlyWithAudio}
      />
      <ErrorMessage errorMessage={errorMessage} />
      <JoinRoomButtons
        handleJoinRoom={handleJoinRoom}
        isRoomHost={isRoomHost}
      />
    </>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setConnectOnlyWithAudioAction: (onlyWithAudio) =>
      dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
  };
};

export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(JoinRoomContent);
