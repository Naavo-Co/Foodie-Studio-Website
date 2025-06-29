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

const VideoError = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  opacity: 0.8;
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
  const [videoAttempted, setVideoAttempted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Try to play video after component mounts
    const timer = setTimeout(() => {
      if (videoRef.current && !videoAttempted) {
        setVideoAttempted(true);
        videoRef.current.play().catch(() => {
          setVideoError(true);
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [videoAttempted]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  };

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

      {videoError ? (
        <VideoError>
          <div>Video loading... Please wait</div>
        </VideoError>
      ) : (
        <video 
          ref={videoRef}
          src={MainVideo} 
          type="video/mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          onCanPlay={handleVideoPlay}
          style={{ 
            opacity: videoLoaded ? 1 : 0, 
            transition: 'opacity 1s ease-in-out' 
          }}
        />
      )}
    </VideoContainer>
  );
};

export default CoverVideo;
