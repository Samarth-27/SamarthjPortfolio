import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'samarthjain.cse@gmail.com',
      link: 'mailto:samarthjain.cse@gmail.com',
      color: '#EA4335'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91-787-890-8050',
      link: 'tel:+917878908050',
      color: '#34A853'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/samarth-jain-a8643928a/',
      color: '#0A66C2'
    },
    {
      icon: '🏆',
      title: 'Unstop',
      value: 'View Profile',
      link: 'https://unstop.com/u/samarjai8685',
      color: '#FF6B6B'
    }
  ];

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="container">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          Get In Touch
        </motion.h2>

        <motion.p className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}>
          Let's discuss new projects, creative ideas, or opportunities to collaborate
        </motion.p>

        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}>
              
              <div className="contact-icon" style={{ background: `${method.color}20` }}>
                <span>{method.icon}</span>
              </div>
              
              <h3>{method.title}</h3>
              <p>{method.value}</p>

              <div className="contact-arrow" style={{ color: method.color }}>→</div>
            </motion.a>
          ))}
        </div>

        <motion.div className="contact-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}>
          <h3>Ready to start a project?</h3>
          <p>I'm always open to discussing internship opportunities and innovative projects</p>
          <a href="mailto:samarthjain.cse@gmail.com" className="btn btn-primary">
            Send a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;