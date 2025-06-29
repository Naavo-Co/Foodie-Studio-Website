import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  min-height: 60vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(120deg, #1a1a1a 0%, #232526 100%);
  overflow: hidden;
`;

const Glass = styled(motion.div)`
  background: rgba(255,255,255,0.07);
  border-radius: 32px;
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.18);
  padding: 4rem 3rem;
  max-width: 900px;
  width: 90vw;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const HeroText = styled(motion.h1)`
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #ff6b35, #ffb347, #fff, #ff6b35);
  background-size: 200% auto;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 4s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

const SubText = styled(motion.p)`
  font-size: 1.5rem;
  color: #fff;
  opacity: 0.85;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 1;
  pointer-events: none;
  background: radial-gradient(circle at 70% 30%, rgba(255,107,53,0.12) 0%, transparent 60%),
              radial-gradient(circle at 20% 80%, rgba(255,179,71,0.10) 0%, transparent 70%);
  animation: moveBg 12s linear infinite alternate;
  @keyframes moveBg {
    0% { background-position: 70% 30%, 20% 80%; }
    100% { background-position: 60% 40%, 30% 70%; }
  }
`;

const Marquee = () => {
  return (
    <Section>
      <Overlay />
      <Glass
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <HeroText
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Food is a Language
        </HeroText>
        <SubText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          To savor everyday life. One is never overfed or underfed with a little black espresso.
        </SubText>
      </Glass>
    </Section>
  );
};

export default Marquee;
