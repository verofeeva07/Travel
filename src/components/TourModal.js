import React from 'react';
import { motion } from 'framer-motion';

const TourModal = ({ tour, onClose }) => {
  return (
    <motion.div
      className="tour-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal-content">
        <h2>{tour.name}</h2>
        <img src={tour.image} alt={tour.name} />
        <p>{tour.description}</p>
        <p>Отель: {tour.hotel}</p>
        <p>Цена: {tour.price} ₽</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </motion.div>
  );
};

export default TourModal;