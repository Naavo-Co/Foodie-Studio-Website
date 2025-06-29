import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 6;

  width: 100%;
  width: fit-content;

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;

    height: auto;
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
const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
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
      delay: 3, // 0
      ease: 'easeInOut',
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      delay: 5, // 2
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        {/* <img src={star} alt="Foodie Fashion" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="none"
        >
          <g>
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M20 10H4c0 2.21 1.79 4 4 4 0 2.21 1.79 4 4 4s4-1.79 4-4c2.21 0 4-1.79 4-4zm-4 0v-.5c0-.83-.67-1.5-1.5-1.5S13 8.67 13 9.5V10h3zm-5 0v-.5c0-.83-.67-1.5-1.5-1.5S8 8.67 8 9.5V10h3zm-4 0v-.5c0-.83-.67-1.5-1.5-1.5S5 8.67 5 9.5V10h2z"
            />
          </g>
        </svg>

        <Text variants={textVariants} initial="hidden" animate="visible">
          Foodie Studio
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
