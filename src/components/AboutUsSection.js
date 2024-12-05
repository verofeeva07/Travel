import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  return (
    <section id="about">
      <h2>О нас</h2>
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="/img/team.jpg" alt="Наша команда" />
        <p>Мы предлагаем лучшие туры в Тайланд по выгодным ценам. </p>
        <p>Наша команда профессионалов всегда готова помочь вам с выбором тура.</p>
      </motion.div>
    </section>
  );
};

export default AboutUsSection;