import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
touch-action: none;
overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;

  width: 100%;

  @media (max-width: 48em) {
    svg{
       width: 40vw !important;
    height: auto !important;
    }
  }

  svg {
   width: 330px !important;
  height: 330px !important;}
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      // yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,

      ease: 'easeInOut',
    },
  },
};

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};

  }
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {/* <img src={star} alt="Foodie Fashion" /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="230px"
        viewBox="0 0 24 24"
        width="230px"
        fill="none"
      >
        <g>
        <motion.path
  variants={pathVariants}
  initial="hidden"
  animate="visible"
  d="M20 10H4c0 2.21 1.79 4 4 4 0 2.21 1.79 4 4 4s4-1.79 4-4c2.21 0 4-1.79 4-4zm-4 0v-.5c0-.83-.67-1.5-1.5-1.5S13 8.67 13 9.5V10h3zm-5 0v-.5c0-.83-.67-1.5-1.5-1.5S8 8.67 8 9.5V10h3zm-4 0v-.5c0-.83-.67-1.5-1.5-1.5S5 8.67 5 9.5V10h2z"
  fill="none"
/>
        </g>
      </svg>
      <Text variants={textVariants} initial="hidden" animate="visible">
        Foodie Studio
      </Text>
    </Container>
  );
};

export default Loader;
