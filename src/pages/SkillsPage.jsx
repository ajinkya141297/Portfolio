import { useState, useEffect } from 'react';
import { skillCategories } from '../assets/data';
import '../styles/Skills.css';

const SkillBar = ({ name, level, delay }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, delay);
    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-percent">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const SkillsPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="skills-page">
      {/* Hero */}
      <div className={`skills-hero ${visible ? 'skills-hero--visible' : ''}`}>
        <div className="skills-hero-badge">
          <i className="ri-code-s-slash-line"></i>
          <span>Technical Skills</span>
        </div>
        <h1 className="skills-hero-title">My Skill Set</h1>
        <p className="skills-hero-subtitle">
          A comprehensive overview of my technical expertise across frontend, backend, databases, and tools —
          built through hands-on projects and 3+ years of development experience.
        </p>

        <div className="skills-stats">
          <div className="skills-stat-card">
            <span className="skills-stat-number">3+</span>
            <span className="skills-stat-label">Years Exp.</span>
          </div>
          <div className="skills-stat-card">
            <span className="skills-stat-number">10+</span>
            <span className="skills-stat-label">Projects</span>
          </div>
          <div className="skills-stat-card">
            <span className="skills-stat-number">15+</span>
            <span className="skills-stat-label">Technologies</span>
          </div>
          <div className="skills-stat-card">
            <span className="skills-stat-number">4</span>
            <span className="skills-stat-label">Domains</span>
          </div>
        </div>
      </div>

      {/* Skill Categories Grid */}
      <div className="skills-grid-section">
        <div className="skills-grid">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={cat.title}
              className={`skills-card ${visible ? 'skills-card--visible' : ''}`}
              style={{ transitionDelay: `${catIdx * 150}ms` }}
            >
              <div className="skills-card-header">
                <div className={`skills-card-icon ${cat.color}`}>
                  <i className={cat.icon}></i>
                </div>
                <h2 className="skills-card-title">{cat.title}</h2>
              </div>
              <div className="skills-card-body">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={300 + catIdx * 150 + skillIdx * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Currently Learning Banner */}
      <div className="skills-learning-banner">
        <h2 className="skills-learning-title">Always Learning</h2>
        <p className="skills-learning-text">
          Technology evolves fast — and so do I. I'm constantly exploring new frameworks, tools, and best practices.
        </p>
        <div className="skills-learning-tags">
          <span className="skills-learning-tag">🎯 Data Science</span>
          <span className="skills-learning-tag">☁️ Cloud Computing (AWS)</span>
          <span className="skills-learning-tag">🤖 AI / ML</span>
          <span className="skills-learning-tag">🐳 Docker & Kubernetes</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
