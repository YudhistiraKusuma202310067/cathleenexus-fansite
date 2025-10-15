import React, { useEffect, useState, useRef } from "react";
import logoVideo from "../../../assets/Preloader/logo1.mp4";

import "./Preloader.scss";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      // When video finishes, fade out
      setFadeOut(true);
      setTimeout(() => {
        const preloader = document.querySelector(".preloader");
        if (preloader) preloader.style.display = "none";
      }, 1000); // Wait for fade animation
    };

    const vid = videoRef.current;
    if (vid) {
      vid.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (vid) vid.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <video
        ref={videoRef}
        className="preloader__logo"
        src={logoVideo}
        autoPlay
        muted
        playsInline
      />
      <div className="preloader__text">Cathleenexus ✨</div>
      <div className="preloader__spinner"></div>
    </div>
  );
};

export default Preloader;
