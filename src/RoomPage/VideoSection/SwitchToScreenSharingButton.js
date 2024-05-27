import React, { useState } from "react";
import SwitchImg from "../../resources/images/switchToScreenSharing.svg";
import * as webRTCHandler from '../../utils/webRTCHandler';
import LocalScreenSharingPreview from "./LocalScreenSharingPreview";

const constraints = {
  audio: false,
  video: true,
};

const SwitchToScreenSharingButton = () => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);
  const [screenSharingStream, setScreenSharingStream] = useState(null);

  const handleScreenShareToggle = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (err) {
        console.log(
          "error ocurred when trying to get an access to screen share stream"
        );
      }

      if (stream) {
        setScreenSharingStream(stream);

        webRTCHandler.toggleScreenShare(isScreenSharingActive, stream);
        setIsScreenSharingActive(true);
        // execute here function to switch the video track which we are sending to other user
      }
    } else {
      webRTCHandler.toggleScreenShare(isScreenSharingActive);
      setIsScreenSharingActive(false);

      // stop screen share stream
      screenSharingStream.getTracks().forEach((t) => t.stop());
      setScreenSharingStream(null);
    }

    // setIsScreenSharingActive(!isScreenSharingActive);
  };

  return (
    <>
    <div>
      <img
        src={SwitchImg}
        onClick={handleScreenShareToggle}
        className="video_button_image"
        alt="switch"
      />
    </div>
    {isScreenSharingActive && (
      <LocalScreenSharingPreview stream={screenSharingStream} />
    )}
    </>
  );
};

export default SwitchToScreenSharingButton;
