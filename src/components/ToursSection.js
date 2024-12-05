import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TourModal from './TourModal';

const ToursSection = () => {
  const [tours, setTours] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    const mockTours = [
      { id: 1, name: 'Пхукет 9 ночей', hotel: 'Отель 5 звезд', price: 120000, image: '/img/tour1.jpg', description: 'Описание тура в Пхукет на 9 ночей ' },
      { id: 2, name: 'Бангкок 7 ночей', hotel: 'Отель 4 звезды', price: 90000, image: '/img/tour2.jpg', description: 'Описание тура в Бангкок на 7 ночей  ', popular: true },
      { id: 3, name: 'Паттайя 12 ночей', hotel: 'Отель 5 звезд', price: 150000, image: '/img/tour3.jpg', description: 'Описание тура в Пхукет на 12 ночей  ' },
      { id: 4, name: 'Пхукет + Бангкок 10 ночей', hotel: 'Отель 5 звезд', price: 180000, image: '/img/tour4.jpg', description: 'Описание совмещенного тура в Пхукет и Бангкок на 10 ночей  ', popular: true },
      { id: 5, name: 'Пхукет + Паттайя 14 ночей', hotel: 'Отель 5 звезд', price: 200000, image: '/img/tour5.jpg', description: 'Описание совмещенного тура в Пхукет на 14 ночей  ' },
      { id: 6, name: 'Бангкок + Паттайя 12 ночей', hotel: 'Отель 5 звезд', price: 190000, image: '/img/tour6.jpg', description: 'Описание совмещенного тура в Бангкок и Пхукет на 12 ночей  ' },
    ];
    setTours(mockTours);
  }, []);

  const handleTourClick = (tour) => {
    setSelectedTour(tour);
  };

  const handleCloseModal = () => {
    setSelectedTour(null);
  };

  return (
    <section id="tours">
      <h2>Горящие Туры</h2>
      <div className="tours-grid">
        {tours.map(tour => (
          <motion.div
            className={`tour-card ${tour.popular ? 'popular' : ''}`}
            key={tour.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={tour.image} alt={tour.name} />
            <h3>{tour.name}</h3>
            <p>{tour.hotel}</p>
            <p>{tour.price} ₽</p>
            {tour.popular && <span className="popular-badge">Популярный</span>}
            <button onClick={() => handleTourClick(tour)}>Подробнее</button>
          </motion.div>
        ))}
      </div>
      {selectedTour && <TourModal tour={selectedTour} onClose={handleCloseModal} />}
    </section>
  );
};

export default ToursSection;