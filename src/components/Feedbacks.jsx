import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  name,
  image,
}) => (
  <div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-blue-100 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-100 h-100  object-cover mx-auto mb-7'
          
        />
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-blue-200 rounded-[20px]`}>
      <div
        className={`bg-blue-300 rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Beraber çalıştığımız kurumlar</p>
          <h2 className={styles.sectionHeadText}>Referanslar</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
