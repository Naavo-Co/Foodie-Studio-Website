import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/11.jpg';
import img2 from '../assets/Images/12.jpg';
import img3 from '../assets/Images/13.jpg';
import img4 from '../assets/Images/14.jpg';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;
`;

const HeroBanner = styled(motion.div)`
  height: 60vh;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${img1}) center/cover;
    opacity: 0.3;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  z-index: 2;
  position: relative;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 300;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #ff6b35);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const CarouselWrapper = styled.div`
  max-width: 600px;
  margin: 3rem auto 2rem auto;
  position: relative;
`;

const CarouselCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.17);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
`;

const CardImage = styled.div`
  position: relative;
  width: 320px;
  height: 220px;
  margin-bottom: 1.5rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(.23,1.02,.64,1.01);
  }
  
  &:hover img {
    transform: scale(1.08);
  }
`;

const Tag = styled(motion.div)`
  position: absolute;
  top: 18px;
  left: 18px;
  background: linear-gradient(45deg, #ff6b35, #ffb347);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.4rem 1.1rem;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(255,107,53,0.15);
  letter-spacing: 1px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.7rem;
  color: #fff;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const CardButton = styled(motion.button)`
  background: linear-gradient(45deg, #ff6b35, #ff8c42);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
  }
`;

const CarouselNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 1.2rem;
`;

const NavDot = styled.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  background: #ffb347;
  opacity: 0.4;
  transition: opacity 0.2s;
  cursor: pointer;
  
  &.active {
    opacity: 1;
    background: #ff6b35;
  }
`;

const InfoSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 3rem;
  margin-top: 4rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  text-align: center;
`;

const InfoTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ff6b35;
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  margin: 2.5rem auto 0 auto;
  background: linear-gradient(45deg, #ff6b35, #ff8c42);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(255, 107, 53, 0.18);
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.07);
    box-shadow: 0 12px 32px rgba(255, 107, 53, 0.28);
  }
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(255, 107, 53, 0.1), rgba(255, 107, 53, 0.05));
  
  &.element-1 {
    width: 200px;
    height: 200px;
    top: 20%;
    right: 10%;
  }
  
  &.element-2 {
    width: 150px;
    height: 150px;
    bottom: 30%;
    left: 5%;
  }
  
  &.element-3 {
    width: 100px;
    height: 100px;
    top: 60%;
    right: 20%;
  }
`;

const featuredItems = [
  {
    img: img1,
    title: "Assorted Donuts Stack",
    description: "A colorful collection of handcrafted donuts with unique flavors and toppings that will satisfy your sweet cravings.",
    tag: "New"
  },
  {
    img: img2,
    title: "Gourmet Burger with Wedges",
    description: "Premium beef patty with artisanal toppings, served with crispy seasoned potato wedges and house-made sauce.",
    tag: "Chef's Pick"
  },
  {
    img: img3,
    title: "Chocolate Brownie with Fruit",
    description: "Rich chocolate brownie topped with fresh seasonal fruits and a drizzle of chocolate ganache.",
    tag: "Trending"
  },
  {
    img: img4,
    title: "Japanese Chicken Katsu Bowl",
    description: "Crispy breaded chicken cutlet served over steamed rice with authentic Japanese curry sauce.",
    tag: "Popular"
  }
];

const NewArrival = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % featuredItems.length);
  React.useEffect(() => {
    const timer = setTimeout(next, 4000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <Section className="new-arrival">
      <BackgroundElements>
        <FloatingElement 
          className="element-1"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <FloatingElement 
          className="element-2"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <FloatingElement 
          className="element-3"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </BackgroundElements>

      <HeroBanner
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            New Arrivals
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover our latest collection of flavorful creations, crafted to satisfy every craving
          </HeroSubtitle>
        </HeroContent>
      </HeroBanner>

      <CarouselWrapper>
        <AnimatePresence mode="wait">
          <CarouselCard
            key={current}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
          >
            <CardImage>
              <img src={featuredItems[current].img} alt={featuredItems[current].title} />
              <Tag
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {featuredItems[current].tag}
              </Tag>
            </CardImage>
            <CardTitle>{featuredItems[current].title}</CardTitle>
            <CardDescription>{featuredItems[current].description}</CardDescription>
            <CardButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </CardButton>
          </CarouselCard>
        </AnimatePresence>
        <CarouselNav>
          {featuredItems.map((_, idx) => (
            <NavDot
              key={idx}
              className={current === idx ? 'active' : ''}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </CarouselNav>
      </CarouselWrapper>

      <InfoSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <InfoTitle>Why Choose Our New Arrivals?</InfoTitle>
        <InfoText>
          We're kicking things off with a mouthwatering selection for our meat lovers.
          Plus, we've added three delicious new dishes specially crafted for those with a taste for something different.
          From everyday favorites to signature chef specials, our new arrivals bring delicious variety to your plate.
          It's the perfect time to treat your taste buds to something exciting and unforgettable.
          Come give it a try — your next favorite bite is waiting!
        </InfoText>
        <CTAButton
          href="#shop"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
        >
          See Full Menu
        </CTAButton>
      </InfoSection>
    </Section>
  );
};

export default NewArrival;
