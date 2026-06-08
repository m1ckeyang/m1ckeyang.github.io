import { useState } from 'react'
import { siteConfig, generateDailyProjects, type Project } from './config/site'
import './index.css'

function App() {
  const dailyData = generateDailyProjects()
  const [selectedDate, setSelectedDate] = useState(dailyData[0].date)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
  const currentDayData = dailyData.find(d => d.date === selectedDate) || dailyData[0]

  const formatStars = (stars: number) => {
    if (stars >= 1000) return (stars / 1000).toFixed(1) + 'k'
    return stars.toString()
  }

  const openModal = (project: Project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = ''
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeModal()
  }

  const renderTutorial = (tutorial: string) => {
    const parts = tutorial.split('```')
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        const lines = part.split('\n')
        const firstLine = lines[0]
        const codeLines = lines.slice(1).join('\n')
        return (
          <div key={index} className="code-block">
            {firstLine && <div style={{ color: '#7ee787', marginBottom: '8px', fontSize: '12px' }}>{firstLine}</div>}
            <pre><code>{codeLines}</code></pre>
          </div>
        )
      } else if (part.trim()) {
        return <p key={index} style={{ marginBottom: '12px' }}>{part}</p>
      }
      return null
    })
  }

  return (
    <div className="app">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-logo">🦐</span>
          <span className="navbar-title">AI项目百科</span>
        </div>
        <div className="navbar-links">
          <a href="#projects" className="navbar-link active">今日推荐</a>
          <a href="#archive" className="navbar-link">往期归档</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="badge">
          <span>🔥</span>
          {siteConfig.hero.badge}
        </div>
        <h1 className="hero-title">
          {siteConfig.hero.title.split('10个')[0]}
          <span className="highlight">10个</span>
          {siteConfig.hero.title.split('10个')[1]}
        </h1>
        <p className="hero-subtitle">{siteConfig.hero.subtitle}</p>
        <a href="#projects" className="hero-cta">
          {siteConfig.hero.cta.text}
          <span>↓</span>
        </a>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-grid">
          {siteConfig.features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 归档导航 */}
      <section className="archive-nav" id="archive">
        <div className="archive-nav-title">📅 往期归档</div>
        <div className="date-tabs">
          {dailyData.map((day) => (
            <button
              key={day.date}
              className={`date-tab ${selectedDate === day.date ? 'active' : ''}`}
              onClick={() => setSelectedDate(day.date)}
            >
              <span className="date-label">{day.dateLabel}</span>
              <span className="date-count">{day.projects.length}个项目</span>
            </button>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="section-header">
          <div className="section-badge">
            <span>📅</span>
            {currentDayData.dateLabel} · AI项目精选
          </div>
          <h2 className="section-title">🔥今日推荐的AI项目</h2>
          <p className="section-subtitle">点击卡片查看通俗讲解和手把手教程</p>
        </div>

        <div className="projects-grid">
          {currentDayData.projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-header">
                <div className="project-rank">{project.id <= 10 ? project.id : project.id % 10}</div>
                <div className="project-info">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-author">by {project.author}</p>
                </div>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-meta">
                <div className="meta-item">
                  <span>⭐</span>
                  <span className="stars">{formatStars(project.stars)}</span>
                </div>
                <div className="meta-item">
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: project.color, display: 'inline-block' }}></span>
                  {project.language}
                </div>
                <span className="difficulty-badge">{project.difficulty}</span>
                <span className="time-badge">
                  <span>⏱️</span>
                  {project.estimatedTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-desc">{siteConfig.footer.description}</p>
        <p className="footer-copyright">© {siteConfig.footer.copyright}</p>
      </footer>

      {/* Detail Modal */}
      <div className={`modal-overlay ${selectedProject ? 'active' : ''}`} onClick={handleOverlayClick}>
        <div className="modal">
          {selectedProject && (
            <>
              <div className="modal-header">
                <div>
                  <h2 className="modal-title">{selectedProject.name}</h2>
                  <div className="modal-meta">
                    <span className="difficulty-badge">{selectedProject.difficulty}</span>
                    <span className="time-badge">⏱️ {selectedProject.estimatedTime}</span>
                    <span className="meta-item"><span>⭐</span><span className="stars">{formatStars(selectedProject.stars)}</span></span>
                  </div>
                </div>
                <button className="modal-close" onClick={closeModal}>✕</button>
              </div>
              
              <div className="modal-body">
                <div className="section-block">
                  <h3 className="section-block-title"><span>📚</span>通俗讲解</h3>
                  <div className="section-block-content">{selectedProject.通俗讲解}</div>
                </div>

                <div className="section-block">
                  <h3 className="section-block-title"><span>🎓</span>小学生都能懂的手把手教程</h3>
                  <div className="section-block-content">{renderTutorial(selectedProject.tutorial)}</div>
                </div>
              </div>

              <div className="modal-footer">
                <a href={`https://github.com/${selectedProject.fullName}`} target="_blank" rel="noopener noreferrer" className="hero-cta" style={{ fontSize: '16px', padding: '12px 24px' }}>
                 <span>🔗</span>查看原项目
                </a>
                <button className="hero-cta" onClick={closeModal} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', fontSize: '16px', padding: '12px 24px' }}>
                  返回列表
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App