import React, { useState } from "react";
import SwitchImg from "../../resources/images/switchToScreenSharing.svg";

const SwitchToScreenSharingButton = () => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);

  const handleScreenShareToggle = () => {
    setIsScreenSharingActive(!isScreenSharingActive);
  };

  return (
    <div>
      <img
        src={SwitchImg}
        onClick={handleScreenShareToggle}
        className="video_button_image"
        alt="switch"
      />
    </div>
  );
};

export default SwitchToScreenSharingButton;
