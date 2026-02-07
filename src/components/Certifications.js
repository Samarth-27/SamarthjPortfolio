import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Certifications.css';

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: 'Google Cloud Engineering',
      issuer: 'Google Cloud',
      date: 'October 2025',
      icon: '☁️',
      details: 'ACE-Endorsed (6 College Credits) - Cloud deployment, Compute Engine, GKE, VPC networking, DevOps, Vertex AI',
      color: '#4285F4',
      certificateImage: '/certificates/google-cloud.png', // Place your certificate in public/certificates/
      
      skills: ['Cloud Computing', 'Google Cloud Platform', 'Compute Engine', 'Kubernetes', 'DevOps', 'Vertex AI'],
      verifyLink: 'https://www.skills.google/public_profiles/af79832a-a1b3-4e49-bcfe-8ce50551fdf4/badges/14378874?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share' // Replace with actual verification link
    },
    {
      title: 'Prompt Engineering & OpenAI',
      issuer: 'Columbia University',
      date: 'August 2025',
      icon: '🤖',
      details: 'Built AI applications with OpenAI API, LangChain, LlamaIndex. Mastered prompt engineering techniques',
      color: '#00A67E',
      certificateImage: '/certificates/columbia-ai.png', // Place your certificate in public/certificates/
      
      skills: ['AI', 'OpenAI API', 'LangChain', 'LlamaIndex', 'Prompt Engineering'],
      verifyLink: 'https://badges.plus.columbia.edu/0a21fe32-f014-4a0b-9dff-9ccfd1aec25c#acc.Qo7D8hFA'
    },
    {
      title: 'JECRC HackQuest 8.0',
      issuer: 'JECRC University',
      date: 'September 2025',
      icon: '🏆',
      details: 'Prize Winner - 36-hour hackathon. Developed innovative technical solution',
      color: '#FF6B6B',
      certificateImage: '/certificates/hackquest.jpeg', // Place your certificate in public/certificates/
      
      skills: ['Problem Solving', 'Team Collaboration', 'Innovation', 'Full-Stack Development'],
      
    }
  ];

  return (
    <>
      <section id="certifications" className="certifications-section" ref={ref}>
        <div className="container">
          <motion.h2 className="section-title"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            Certifications
          </motion.h2>

          <p className="section-subtitle">
            Continuous learning and professional development
          </p>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="cert-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onClick={() => setSelectedCert(cert)}
                whileHover={{ scale: 1.03, y: -5 }}>
                
                <div className="cert-icon" style={{ background: `${cert.color}20` }}>
                  <span>{cert.icon}</span>
                </div>

                <div className="cert-content">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  <p className="cert-details">{cert.details}</p>
                  
                  <button className="view-cert-btn" style={{ borderColor: cert.color, color: cert.color }}>
                    View Certificate →
                  </button>
                </div>

                <div className="cert-badge" style={{ borderColor: cert.color }}>
                  <span style={{ color: cert.color }}>Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}>
            
            <motion.div
              className="cert-modal"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}>
              
              <button className="modal-close" onClick={() => setSelectedCert(null)}>
                ✕
              </button>

              <div className="cert-modal-content">
                {/* Certificate Preview */}
                <div className="cert-preview">
                  <motion.img
                    src={selectedCert.certificateImage}
                    alt={`${selectedCert.title} Certificate`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="cert-watermark">
                    <span>{selectedCert.icon}</span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="cert-info">
                  <div className="cert-header-modal">
                    <div className="cert-icon-large" style={{ background: `${selectedCert.color}20` }}>
                      <span>{selectedCert.icon}</span>
                    </div>
                    <div>
                      <h2>{selectedCert.title}</h2>
                      <p className="cert-issuer-modal">{selectedCert.issuer}</p>
                    </div>
                  </div>

                  <div className="cert-meta">
                    <div className="meta-item">
                      <span className="meta-label">Issued Date</span>
                      <span className="meta-value">{selectedCert.date}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Credential ID</span>
                      <span className="meta-value">{selectedCert.credentialID}</span>
                    </div>
                  </div>

                  <div className="cert-description">
                    <h3>About this Certificate</h3>
                    <p>{selectedCert.details}</p>
                  </div>

                  <div className="cert-skills-section">
                    <h3>Skills Acquired</h3>
                    <div className="cert-skills-list">
                      {selectedCert.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          className="cert-skill-badge"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          style={{ borderColor: selectedCert.color }}>
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="cert-actions">
                    <a 
                      href={selectedCert.verifyLink} 
                      className="btn btn-primary"
                      style={{ background: selectedCert.color }}
                      target="_blank" 
                      rel="noopener noreferrer">
                      <span>✓</span> Verify Certificate
                    </a>
                    <button 
                      className="btn btn-outline"
                      onClick={() => {
                        // Download certificate logic
                        const link = document.createElement('a');
                        link.href = selectedCert.certificateImage;
                        link.download = `${selectedCert.title.replace(/\s+/g, '_')}_Certificate.png`;
                        link.click();
                      }}>
                      <span>⬇</span> Download
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certifications;