import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { buttonLinks } from "../constants";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (min-width: 1200px) {
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-left:90px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1119px) {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin-left: 50px;
  }

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    gap: 10px;
    margin-top:50px
    
  }
`;

const Title = styled.h1`
  font-size: 54px;

  @media only screen and (max-width: 1368px) {
    font-size: 34px;
  }

  @media only screen and (max-width: 999px) {
    text-align: center;
    font-size: 34px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #538fc9;
`;

const Desc = styled.p`
  font-size: 20px;
  color: lightgray;

  @media only screen and (max-width: 1368px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 999px) {
    padding: 20px;
    text-align: center;
    font-size: 16px;
  }
`;



const Button = styled.button`
  background-color: #3b6996;
  color: white;
  font-weight: 500;
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(4px); 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 2); 
    background-color: #5b91ca; 
  }

  &:focus {
    outline: none; 
  }
`;

const App = () => {
  return <Button>Hover Me</Button>;
};

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 1200px) {
    flex: 3;
    
  }

  @media only screen and (min-width: 1000px) and (max-width: 1119px) {
    flex: 2;
   
  }

  @media only screen and (max-width: 999px) {
    display:none
    
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  const [active, setActive] = useState("");

  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Web Sitesiyle İşletmenizi Büyütün, Yeni İş Fırsatlarıyla Tanışın</Title>
          <WhatWeDo>
            <Subtitle>Neler yapıyoruz</Subtitle>
          </WhatWeDo>
          <Desc>
          Web siteleri ve dijital pazarlama alanında profesyonel hizmetler sunuyoruz. SEO, grafik tasarım, sosyal medya yönetimi gibi çeşitli dijital pazarlama hizmetleriyle işletmenizin çevrimiçi başarısını destekliyor ve güçlendiriyoruz.
          </Desc>
          <ul className=''>
          {buttonLinks.map((button) => (
            <li
              key={button.id}
              className={`${
                active === button.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(button.title)}
            >
            <Button>
              <a href={`#${button.id}`}>{button.title}</a>
              </Button>
            </li>
          ))}
        </ul>
        </Left>
        <Right>        
          <ComputersCanvas/>    
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;