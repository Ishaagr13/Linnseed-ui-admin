import React, { useState } from "react";
import { RiFullscreenFill, RiFullscreenExitFill } from "react-icons/ri";
import './Fullscreen.css';

const Fullscreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      if (isFullScreen) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
      setIsFullScreen(!isFullScreen);
    }
  };

  return (
    <div onClick={toggleFullScreen}>
      <span className="iconStyle">
        {isFullScreen ? <RiFullscreenExitFill /> : <RiFullscreenFill />}
      </span>
    </div>
  );
};

export default Fullscreen;
