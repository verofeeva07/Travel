import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Валидация номера телефона
      const phoneRegex = /^\+7\d{0,10}$/;
      if (value.startsWith('+7')) {
        if (phoneRegex.test(value)) {
          setFormData({ ...formData, [name]: value });
        }
      } else {
        if (phoneRegex.test(`+7${value}`)) {
          setFormData({ ...formData, [name]: `+7${value}` });
        }
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Пожалуйста, заполните все обязательные поля');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Администратор свяжется с вами как можно скорее!');

    }
  };

  return (
    <section id="contact">
      <h2>Контакты</h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <input type="text" name="name" placeholder="Ваше имя" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Ваш email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Ваш телефон (+7XXXXXXXXXX)" value={formData.phone} onChange={handleChange} required />
        <textarea name="message" placeholder="Ваше сообщение" value={formData.message} onChange={handleChange}></textarea>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit">Отправить</button>
      </motion.form>
    </section>
  );
};

export default ContactSection;