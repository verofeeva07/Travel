import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
    const testimonials = [
        { id: 1, name: 'Иван Иванов', text: 'Пхукет — это рай для любителей пляжного отдыха! Мы провели неделю на острове и каждый день наслаждались кристально чистым морем, белым песком и захватывающими дух закатами.Спасибо!', stars: 5 },
        { id: 2, name: 'Мария Петрова', text: 'Очень довольна поездкой, все понравилось!', stars: 5 },
        { id: 3, name: 'Петр Сидоров', text: 'Хочу выразить огромную благодарность ТурФирме "Открой Тайланд" за организацию нашего незабываемого тура по Бангкоку! ', stars: 5 },
    ];

    return (
        <section id="testimonials">
            <h2>Отзывы</h2>
            <div className="testimonials-grid">
                {testimonials.map(testimonial => (
                    <motion.div
                        className="testimonial-card"
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>

                        <h3>{testimonial.name}</h3>
                        <div className="stars">
                            {'★'.repeat(testimonial.stars)}
                           
                        </div>
                        <p>{testimonial.text}</p>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;