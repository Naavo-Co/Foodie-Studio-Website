import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/1.jpg";
import img2 from "../assets/Images/2.jpg";
import img3 from "../assets/Images/3.jpg";
import img4 from "../assets/Images/4.jpg";
import img5 from "../assets/Images/5.jpg";
import img6 from "../assets/Images/6.jpg";
import img7 from "../assets/Images/7.jpg";
import img8 from "../assets/Images/8.jpg";
import img9 from "../assets/Images/9.jpg";
import img10 from "../assets/Images/10.jpg";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
  color: white;
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 300;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #ff6b35);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const MenuGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const MenuCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 107, 53, 0.3);
  }
`;

const CardImage = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    }
  
  ${MenuCard}:hover & img {
    transform: scale(1.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 107, 53, 0.2), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${MenuCard}:hover &::after {
    opacity: 1;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  color: white;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const CardPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const Price = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ff6b35;
`;

const OrderButton = styled(motion.button)`
  background: linear-gradient(45deg, #ff6b35, #ff8c42);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
    cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
  }
`;

const CategoryFilter = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
    cursor: pointer;
  transition: all 0.3s ease;
  
  &.active {
    background: linear-gradient(45deg, #ff6b35, #ff8c42);
    border-color: #ff6b35;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const menuItems = [
  { img: img3, title: "Chocolate Fudge Layer Cake", description: "Rich chocolate layers with creamy fudge filling", price: "$18", category: "desserts" },
  { img: img4, title: "Classic Pancakes with Berries", description: "Fluffy pancakes topped with fresh berries", price: "$12", category: "breakfast" },
  { img: img1, title: "Indian-Style Fried Chicken", description: "Spiced and crispy chicken with authentic flavors", price: "$16", category: "main" },
  { img: img2, title: "Crispy Chicken Tenders", description: "Golden crispy tenders with dipping sauce", price: "$14", category: "appetizers" },
  { img: img5, title: "Creamy Garlic Penne Pasta", description: "Al dente pasta in rich garlic cream sauce", price: "$15", category: "main" },
  { img: img6, title: "Chicken Caesar Salad", description: "Fresh greens with grilled chicken and parmesan", price: "$13", category: "salads" },
  { img: img7, title: "Wood-Fired Pizza Trio", description: "Three signature pizzas with premium toppings", price: "$22", category: "main" },
  { img: img8, title: "Grilled Pork Tenderloin", description: "Herb-crusted pork with seasonal vegetables", price: "$20", category: "main" },
  { img: img9, title: "Mixed Grill Barbecue", description: "Assorted grilled meats with BBQ sauce", price: "$24", category: "main" },
  { img: img10, title: "Strawberry Shortcake", description: "Light cake with fresh strawberries and cream", price: "$11", category: "desserts" }
];

const categories = ["all", "main", "appetizers", "salads", "desserts", "breakfast"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [filteredItems, setFilteredItems] = React.useState(menuItems);

  React.useEffect(() => {
    if (activeCategory === "all") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <Section id="shop">
      <Container>
        <Header
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Title>New Menu Launch</Title>
          <Subtitle>
            Discover our latest culinary creations crafted with passion and the finest ingredients
          </Subtitle>
        </Header>

        <CategoryFilter
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <FilterButton
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </FilterButton>
          ))}
        </CategoryFilter>

        <MenuGrid
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {filteredItems.map((item, index) => (
            <MenuCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <CardImage>
                <img src={item.img} alt={item.title} />
              </CardImage>
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <CardPrice>
                  <Price>{item.price}</Price>
                  <OrderButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Order Now
                  </OrderButton>
                </CardPrice>
              </CardContent>
            </MenuCard>
          ))}
        </MenuGrid>
      </Container>
    </Section>
  );
};

export default Shop;
