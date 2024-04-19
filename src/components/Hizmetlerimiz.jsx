import React from "react";
import Tilt from "react-tilty";
import { motion } from "framer-motion";
import styled from "styled-components";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";


const mobile = styled.div`
  

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    
  }
  
`;

const ServiceCard = ({ points, title, icon }) => (
  <Tilt className='xs:w-[350px] w-full sm:mx-auto'>
    <motion.div
      // variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card z-20'
    >
    
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-blue-100 rounded-[20px] py-5 px-12 min-h-[580px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[25px] font-bold text-center'>
          {title}
        </h3>
        <p className='text-white tracking-wider text-[17px]'>{points}</p>
      </div>
    </motion.div>
  </Tilt>
);

const Hizmetlerimiz = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
      <p className={styles.sectionSubText}>Müşterilerimize ne sunuyoruz?</p>
      <h2 className={styles.sectionHeadText}>Hizmetlerimiz</h2>
      {/* </motion.div> */}
      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Sevgili müşterilerimiz, işletmenizin dijital dünyadaki varlığını güçlendirmek ve büyütmek için sizlere özel çözümler sunuyoruz. Profesyonel ekibimizle birlikte, kobilere ve bireysel girişimcilere yönelik kapsamlı hizmetlerimizle işinizi bir adım öne taşıyoruz.
      </p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Hizmetlerimiz, "hizmetlerimiz");
