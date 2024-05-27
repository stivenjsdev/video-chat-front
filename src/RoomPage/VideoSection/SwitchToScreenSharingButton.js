import React, { useState } from "react";
import SwitchImg from "../../resources/images/switchToScreenSharing.svg";
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
        stream = await navigator.mediaDevices.getDisplayMedia();
      } catch (err) {
        console.log(
          "error ocurred when trying to get an access to screen share stream"
        );
      }

      if (stream) {
        setScreenSharingStream(stream);
        setIsScreenSharingActive(true);
        // execute here function to switch the video track which we are sending to other user
      } else {
        // switch for video track from camera
        setIsScreenSharingActive(false);

        // stop screen share stream
        setScreenSharingStream.getTracks().forEach((t) => t.stop());
        setScreenSharingStream(null);
      }
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
