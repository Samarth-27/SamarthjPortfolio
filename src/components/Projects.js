import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewMode, setPreviewMode] = useState('live'); // 'live' or 'screenshot'

  const projects = [
    {
      title: 'EVOLVE-X',
      subtitle: 'AI Internship Allocations',
      icon: '🤖',
      description: 'AI-powered platform matching students with internships under PM Internship Scheme using NLP and ML algorithms.',
      techStack: ['React', 'JavaScript', 'NLP', 'ML', 'Chart.js'],
      features: ['94.7% match accuracy', '100% quota compliance', 'Explainable AI', '6 AI modules'],
      gradient: 'var(--gradient-1)',
      demoLink: 'https://evolve-x-sams-projects-1b56e3de.vercel.app/', // Replace with your actual live demo URL
      screenshot: '/projects/evolve-x.png', // Screenshot from public/projects folder
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
      githubLink: 'https://github.com/yourusername/power-pulse',
      screenshot: '/projects/power-pulse.png',
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
      
      screenshot: '/projects/taskmaster-pro.png',
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
                    View Live Preview →
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
            onClick={() => {
              setSelectedProject(null);
              setPreviewMode('live');
            }}>
            
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}>
              
              <button className="modal-close" onClick={() => {
                setSelectedProject(null);
                setPreviewMode('live');
              }}>
                ✕
              </button>

              <div className="modal-content-wrapper">
                {/* Preview Toggle Buttons */}
                <div className="preview-toggle">
                  <button 
                    className={`toggle-btn ${previewMode === 'live' ? 'active' : ''}`}
                    onClick={() => setPreviewMode('live')}>
                    <span>🌐</span> Live Preview
                  </button>
                  <button 
                    className={`toggle-btn ${previewMode === 'screenshot' ? 'active' : ''}`}
                    onClick={() => setPreviewMode('screenshot')}>
                    <span>📸</span> Screenshot
                  </button>
                </div>

                <div className="modal-content">
                  <div className="modal-header">
                    <span className="modal-icon">{selectedProject.icon}</span>
                    <div>
                      <h2>{selectedProject.title}</h2>
                      <p className="modal-subtitle">{selectedProject.subtitle}</p>
                    </div>
                  </div>

                  {/* Live Preview or Screenshot */}
                  <div className="project-preview-container">
                    {previewMode === 'live' ? (
                      <div className="live-preview-wrapper">
                        <div className="browser-bar">
                          <div className="browser-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                          </div>
                          <div className="browser-url">
                            <span>🔒</span>
                            <input type="text" value={selectedProject.demoLink} readOnly />
                          </div>
                          <div className="browser-actions">
                            <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="open-new-tab">
                              ↗
                            </a>
                          </div>
                        </div>
                        <iframe
                          src={selectedProject.demoLink}
                          title={`${selectedProject.title} Live Preview`}
                          className="project-iframe"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                          loading="lazy"
                        />
                        <div className="iframe-overlay">
                          <p>⚠️ If preview doesn't load, the site may not allow embedding.</p>
                          <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Open in New Tab →
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="screenshot-preview">
                        <img
                          src={selectedProject.screenshot}
                          alt={`${selectedProject.title} Screenshot`}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/1200x800/667eea/ffffff?text=Screenshot+Not+Found';
                          }}
                        />
                      </div>
                    )}
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

                    <div className="modal-actions">
                      <a href={selectedProject.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        <span>🚀</span> Open Live Site
                      </a>
                      <a href={selectedProject.githubLink} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                        <span>💻</span> View Code
                      </a>
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