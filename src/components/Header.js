import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <motion.div
        className="logo"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Открой Тайланд</h1>
      </motion.div>
      <nav>
        <a href="#about">О нас</a>
        <a href="#tours">Туры</a>
        <a href="#contact">Контакты</a>
      </nav>
      <motion.button className='Tel'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
        Заказать звонок
      </motion.button>
    </header>
  );
};

export default Header;