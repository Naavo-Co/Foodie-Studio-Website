import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/1.jpg';
import img2 from '../assets/Images/2.jpg';
import img3 from '../assets/Images/3.jpg';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  overflow: hidden;
`;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  align-items: center;
  padding: 0 5vw;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

const ContentSide = styled(motion.div)`
  z-index: 2;
  color: white;
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 300;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  span {
    display: block;
    font-size: 0.6em;
    opacity: 0.8;
    margin-top: 0.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  line-height: 1.8;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 600px;
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

const Stat = styled.div`
  text-align: center;
  
  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ff6b35;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const VisualSide = styled(motion.div)`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainImage = styled(motion.div)`
  position: relative;
  width: 400px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255,107,53,0.2), rgba(255,107,53,0.1));
    z-index: 1;
  }
`;

const FloatingImage = styled(motion.div)`
    position: absolute;
  width: 200px;
  height: 250px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  
  img {
    width: 100%;
    height: 100%;
      object-fit: cover;
    }

  &.top-right {
    top: 10%;
    right: 10%;
  }
  
  &.bottom-left {
    bottom: 10%;
    left: 10%;
  }
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(255,107,53,0.1), rgba(255,107,53,0.05));
  
  &.circle-1 {
    width: 300px;
    height: 300px;
    top: 10%;
    right: 20%;
  }
  
  &.circle-2 {
    width: 200px;
    height: 200px;
    bottom: 20%;
    left: 10%;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <BackgroundElements>
        <Circle 
          className="circle-1"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <Circle 
          className="circle-2"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </BackgroundElements>
      
      <HeroContainer>
        <ContentSide
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        >
      <Title
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
      >
        About Us
            <span>Culinary Excellence</span>
      </Title>
          
          <Description
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We're a culinary studio based in California, crafting extraordinary flavors
        that will blow your mind. We also create signature desserts and artisan food experiences.
        Food is an ART — not everyone can truly savor its depth.
          </Description>
          
          <StatsContainer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Stat>
              <h3>500+</h3>
              <p>Happy Clients</p>
            </Stat>
            <Stat>
              <h3>50+</h3>
              <p>Unique Dishes</p>
            </Stat>
            <Stat>
              <h3>5+</h3>
              <p>Years Experience</p>
            </Stat>
          </StatsContainer>
        </ContentSide>
        
        <VisualSide
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        >
          <MainImage
            initial={{ scale: 0.8, rotateY: 45 }}
            whileInView={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={img1} alt="About Us" />
          </MainImage>
          
          <FloatingImage 
            className="top-right"
            initial={{ scale: 0, rotate: 45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={img2} alt="About Us" />
          </FloatingImage>
          
          <FloatingImage 
            className="bottom-left"
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={img3} alt="About Us" />
          </FloatingImage>
        </VisualSide>
      </HeroContainer>
    </Section>
  );
};

export default About;
