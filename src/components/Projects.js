import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'EVOLVE-X',
      subtitle: 'AI Internship Allocations',
     demoLink: 'https://evolve-drpzzz958-sams-projects-1b56e3de.vercel.app/', // Add your demo link here
      description: 'AI-powered platform matching students with internships under PM Internship Scheme using NLP and ML algorithms.',
      techStack: ['React', 'JavaScript', 'NLP', 'ML', 'Chart.js'],
      features: ['94.7% match accuracy', '100% quota compliance', 'Explainable AI', '6 AI modules'],
      gradient: 'var(--gradient-1)',
      
      githubLink: '#', // Add your GitHub link here
      images: [
        'D:/samarth-portfolio-react/public/Screenshot 2026-02-03 214245.png',
        'D:/samarth-portfolio-react/public/Screenshot 2026-02-07 133652.png',
        'https://via.placeholder.com/800x500/f093fb/ffffff?text=Analytics+View'
      ],
      fullDescription: 'EVOLVE-X is a comprehensive AI-powered internship allocation system that uses advanced NLP and genetic algorithms to match students with the perfect internships. The platform analyzes resumes, skills, and preferences to ensure optimal placement while maintaining 100% quota compliance.',
      highlights: [
        'Natural Language Processing for resume analysis',
        'Genetic algorithms for optimal matching',
        'Real-time dashboard with analytics',
        'Multi-criteria decision making',
        'Automated notification system',
        'Explainable AI recommendations'
      ]
    },
    {
      title: 'POWER-PULSE',
      subtitle: 'Procurement Platform',
      icon: '⚡',
      description: 'Intelligent procurement management system with AI-driven demand forecasting for power transmission industry.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'ML'],
      features: ['94.2% forecast accuracy', '6 role dashboards', 'Real-time inventory', 'Analytics'],
      gradient: 'var(--gradient-2)',
      demoLink: 'https://power-pulse-mu.vercel.app/',
      githubLink: '#',
      images: [
        'https://via.placeholder.com/800x500/4facfe/ffffff?text=Power-Pulse+Dashboard',
        'https://via.placeholder.com/800x500/00f2fe/ffffff?text=Forecasting+Module',
        'https://via.placeholder.com/800x500/43e97b/ffffff?text=Inventory+System'
      ],
      fullDescription: 'POWER-PULSE revolutionizes procurement management for the power transmission industry with AI-driven demand forecasting and real-time inventory tracking. The system provides role-based dashboards for different stakeholders.',
      highlights: [
        'AI-powered demand forecasting',
        'Multi-role access control',
        'Real-time inventory management',
        'Automated purchase orders',
        'Vendor management system',
        'Advanced analytics and reporting'
      ]
    },
    {
      title: 'TASKMASTER PRO',
      subtitle: 'Advanced Todo App',
      icon: '✅',
      description: 'Productivity app with drag-drop Kanban, XP system, and time tracking.',
      techStack: ['React 18', 'Context API', 'Framer Motion', 'LocalStorage'],
      features: ['4 views', 'Gamification', 'Pomodoro timer', '6 themes'],
      gradient: 'var(--gradient-3)',
      demoLink: 'https://advanced-motivational-todo.vercel.app/',
      githubLink: '#',
      images: [
        'https://via.placeholder.com/800x500/667eea/ffffff?text=Kanban+Board',
        'https://via.placeholder.com/800x500/f5576c/ffffff?text=Calendar+View',
        'https://via.placeholder.com/800x500/4ecdc4/ffffff?text=Timeline+View'
      ],
      fullDescription: 'TASKMASTER PRO is a feature-rich productivity application that combines task management with gamification. Built with React 18 and Framer Motion, it offers smooth animations and multiple view modes.',
      highlights: [
        'Drag-and-drop Kanban board',
        'XP and leveling system',
        'Pomodoro timer integration',
        'Multiple view modes',
        '6 beautiful themes',
        'LocalStorage persistence'
      ]
    }
  ];

  return (
    <>
      <section id="projects" className="projects-section" ref={ref}>
        <div className="container">
          <motion.h2 className="section-title"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            Featured Projects
          </motion.h2>

          <p className="section-subtitle">
            Building innovative solutions with AI and modern web technologies
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -10 }}>
                
                <div className="project-icon-wrapper">
                  <span className="project-icon">{project.icon}</span>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    <span className="tech-label">Tech Stack</span>
                    <div className="tech-stack">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-features">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="feature">
                        <span className="feature-check">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="view-project-btn">
                    View Details →
                  </button>
                </div>

                <div className="project-glow" style={{ background: project.gradient }}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}>
            
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}>
              
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                ✕
              </button>
                 <div className="modal-actions">
                    <a href={selectedProject.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      <span>🚀</span> Live Demo
                    </a>
                  </div>
              <div className="modal-content">
                <div className="modal-header">
                  <span className="modal-icon">{selectedProject.icon}</span>
                  <div>
                    <h2>{selectedProject.title}</h2>
                    <p className="modal-subtitle">{selectedProject.subtitle}</p>
                  </div>
                </div>

                {/* Image Gallery */}
                <div className="project-gallery">
                  {selectedProject.images.map((image, idx) => (
                    <motion.img
                      key={idx}
                      src={image}
                      alt={`${selectedProject.title} screenshot ${idx + 1}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    />
                  ))}
                </div>

                <div className="modal-body">
                  <div className="modal-section">
                    <h3>About This Project</h3>
                    <p>{selectedProject.fullDescription}</p>
                  </div>

                  <div className="modal-section">
                    <h3>Key Highlights</h3>
                    <ul className="highlights-list">
                      {selectedProject.highlights.map((highlight, idx) => (
                        <li key={idx}>
                          <span className="highlight-bullet">▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3>Technologies Used</h3>
                    <div className="modal-tech-stack">
                      {selectedProject.techStack.map((tech, idx) => (
                        <span key={idx} className="modal-tech-badge">{tech}</span>
                      ))}
                    </div>
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

export default Projects;