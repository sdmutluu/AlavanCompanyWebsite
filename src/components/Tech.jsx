import React from "react";
import styled from "styled-components";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";


const Left = styled.div`
  @media only screen and (max-width: 768px) {
    display:none
    
  }
`;

const Tech = () => {
  return (
    <>
      <Left>
        <div>
          <p className={`${styles.sectionSubText} text-center`}>
            Web sitesi yapımında kullandığımız teknolojiler
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Kullandığımız Teknolojiler
          </h2>
          <br></br>
          <br></br>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </Left>
    </>
  );
};

export default SectionWrapper(Tech, "");
