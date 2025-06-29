import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import MainVideo from "../assets/mac&foodsvideo.mp4";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const FallbackBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  z-index: 0;
`;

const PlayButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%) scale(1.1);
  }
  
  svg {
    width: 30px;
    height: 30px;
    fill: white;
    margin-left: 5px;
  }
`;

const VideoStatus = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: white;
  font-size: 0.9rem;
  opacity: 0.7;
  z-index: 10;
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};

    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      /* font-size: ${(props) => props.theme.fontxxxl}; */
      font-size: calc(5rem + 8vw);
    }
  }
  h2 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: "Sirin Stencil";
    font-weight: 500;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 0 auto;

    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      /* font-size: calc(5rem + 8vw); */
      margin-top: -1.5rem;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    console.log("Video loaded successfully");
  };

  const handleVideoError = (e) => {
    setVideoError(true);
    console.error("Video error:", e);
  };

  const handleVideoPlay = () => {
    setVideoPlaying(true);
    setShowPlayButton(false);
    console.log("Video started playing");
  };

  const handleVideoPause = () => {
    setVideoPlaying(false);
    setShowPlayButton(true);
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setVideoPlaying(true);
        setShowPlayButton(false);
      }).catch((error) => {
        console.error("Failed to play video:", error);
        setVideoError(true);
      });
    }
  };

  useEffect(() => {
    // Try to autoplay after a delay
    const timer = setTimeout(() => {
      if (videoRef.current && !videoPlaying) {
        videoRef.current.play().then(() => {
          setVideoPlaying(true);
          setShowPlayButton(false);
        }).catch(() => {
          // Autoplay failed, show play button
          setShowPlayButton(true);
        });
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [videoPlaying]);

  return (
    <VideoContainer data-scroll>
      <FallbackBackground />
      <DarkOverlay />

      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            F
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            o
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="4"
          >
            o
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
          >
            d
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
          >
            i
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
          >
            e
          </motion.h1>
        </div>
        <motion.h2
          style={{ alignSelf: "flex-end" }}
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
         .....From Our Heart to Your Plate.....
        </motion.h2>
      </Title>

      <video 
        ref={videoRef}
        src={MainVideo} 
        type="video/mp4" 
        muted 
        loop 
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        style={{ 
          opacity: videoLoaded ? 1 : 0, 
          transition: 'opacity 1s ease-in-out' 
        }}
      />

      {showPlayButton && !videoError && (
        <PlayButton
          onClick={handlePlayClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </PlayButton>
      )}

      <VideoStatus>
        {videoError ? "Video Error" : videoLoaded ? "Video Ready" : "Loading..."}
      </VideoStatus>
    </VideoContainer>
  );
};

export default CoverVideo;
