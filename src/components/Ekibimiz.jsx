import React from "react";
import Tilt from "react-tilty";
import { styles } from "../styles";
import { github } from "../assets";
import { linkedin } from "../assets";
import { mail } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  name,
  description,
  github_source_code_links,
  linkedin_source_code_links,
}) => {
  return (
    <div className="w-full sm:w-[267px]">
      
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-blue-100 p-5 rounded-2xl w-full h-full"
      >
        <div className="mt-5">
          <h3 className="text-white font-bold text-[19px] text-center">{name}</h3>
          <p className="mt-2 text-secondary text-[13px] text-center">{description}</p>
          <div className="underline mt-2 mx-auto w-16"></div> 
          <div className="flex justify-center items-center mx-auto mt-3">
            <div
              onClick={() => window.open(github_source_code_links, "_blank")}
              className="rounded-full flex justify-center items-center cursor-pointer mx-3"
            >
              <img
                src={github}
                alt="source code"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(linkedin_source_code_links, "_blank")}
              className="rounded-full flex_ justify-center items-center cursor-pointer mx-3"
            >
              <img
                src={linkedin}
                alt="source code"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>Çalışanlar</p>
        <h2 className={`${styles.sectionHeadText}`}>Ekibimiz</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Başarıya odaklı ekibimize hoş geldiniz! Farklı alanlarda deneyim sahibi, yetenekli ve özverili kişilerden oluşuyoruz. Uzmanlık alanlarımızda titizlikle çalışarak projelerinizi hayata geçirmek için en iyi yöntemleri arıyoruz. İşbirliği ve bilgi paylaşımı, başarılarımızın temel taşıdır. Dinamik bir çalışma ortamında yaratıcı fikirlerle dolu projelere imza atıyoruz. Teknoloji ve tasarım dünyasındaki güncel gelişmeleri takip ederek, etkileyici ve yenilikçi dijital çözümler üretiyoruz.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
