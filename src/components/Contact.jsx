import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FiPhoneCall, FiChevronRight } from "react-icons/fi";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    telefon: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_ip68x2z',
        'template_747z8bp',
        {
          from_name: form.name,
          to_name: "Alavanweb",
          from_email: form.email,
          to_email: "alavanweb@gmail.com",
          telefon: form.telefon,
          message: form.message,
        },
        'NDeVm5EgU5oAWaNL5'
      )
      .then(
        () => {
          setLoading(false);
          alert("Teşşekkür ederiz. En yakın zamanda size döneceğiz");

          setForm({
            name: "",
            email: "",
            telefon: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Bir şeyler ters gitti. Tekrar deneyin ya da direkt bizi arayın.");
        }
      );
  };

  const phoneNumber = "0542 772 40 02"; 

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-blue-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Bize Mesaj Atın</p>
        <h3 className={styles.sectionHeadText}>İletişim</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>İsminiz</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="İsminiz Nedir?"
              className='bg-blue-300 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Örnek@örnek.com"
              className='bg-blue-300 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Telefon</span>
            <input
              type='tel'
              name='telefon'
              value={form.telefon}
              onChange={handleChange}
              placeholder="x5xx xxx xx xx"
              className='bg-blue-300 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Almak İstediğiniz Hizmet</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Size nasıl yardımcı olabiliriz?'
              className='bg-blue-300 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          

          <button
            type='submit'
            className='bg-blue-300 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Gönderiliyor..." : "Gönder"}
          </button>

          {/* Phone Number Section */}
          <p className="text-white text-xl font-semibold">Bizi Arayın</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-300 rounded-full">
              <FiPhoneCall size={20} color="white" />
            </div>
            <span className="text-white font-medium">
              
              {phoneNumber}
            </span>
            
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "iletisim");