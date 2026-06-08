import { useState } from 'react'
import { siteConfig, trendingProjects } from './config/site'
import './index.css'

// Project type
interface Project {
  id: number
  name: string
  fullName: string
  description: string
  stars: number
  language: string
  color: string
  author: string
  通俗讲解: string
  tutorial: string
  difficulty: string
  estimatedTime: string
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const formatStars = (stars: number) => {
    if (stars >= 1000) {
      return (stars / 1000).toFixed(1) + 'k'
    }
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

  // 点击遮罩关闭
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  // 格式化教程内容，保留代码块格式
  const renderTutorial = (tutorial: string) => {
    const parts = tutorial.split('```')
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        // 代码块
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
        // 普通文本
        return (
          <p key={index} style={{ marginBottom: '12px' }}>
            {part.split('\n').map((line, i) => {
              // 处理emoji标题行
              if (line.match(/^[📦✨🎮🎯]+/)) {
                return <span key={i} style={{ color: '#ff6b35', fontWeight: 600 }}>{line}</span>
              }
              // 处理数字步骤
              if (line.match(/^[1-3]️⃣/)) {
                return <span key={i} style={{ color: '#ff6b35', fontWeight: 600 }}>{line}</span>
              }
              return line
            })}
          </p>
        )
      }
      return null
    })
  }

  return (
    <div className="app">
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
        
        <div className="scroll-indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
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

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="section-header">
          <div className="section-badge">
            <span>📅</span>
            今日热门
          </div>
          <h2 className="section-title">🔥 今日推荐的AI项目</h2>
          <p className="section-subtitle">点击卡片查看通俗讲解和手把手教程</p>
        </div>

        <div className="projects-grid">
          {trendingProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-header">
                <div className="project-rank">{project.id}</div>
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
                  <span style={{ 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    backgroundColor: project.color,
                    display: 'inline-block'
                  }}></span>
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
      <div 
        className={`modal-overlay ${selectedProject ? 'active' : ''}`}
        onClick={handleOverlayClick}
      >
        <div className="modal">
          {selectedProject && (
            <>
              <div className="modal-header">
                <div>
                  <h2 className="modal-title">{selectedProject.name}</h2>
                  <div className="modal-meta">
                    <span className="difficulty-badge">{selectedProject.difficulty}</span>
                    <span className="time-badge">⏱️ {selectedProject.estimatedTime}</span>
                    <span className="meta-item">
                      <span>⭐</span>
                      <span className="stars">{formatStars(selectedProject.stars)}</span>
                    </span>
                  </div>
                </div>
                <button className="modal-close" onClick={closeModal}>✕</button>
              </div>
              
              <div className="modal-body">
                {/* 通俗讲解 */}
                <div className="section-block">
                  <h3 className="section-block-title">
                    <span>📚</span>
                    通俗讲解
                  </h3>
                  <div className="section-block-content">
                    {selectedProject.通俗讲解}
                  </div>
                </div>

                {/* 小学生教程 */}
                <div className="section-block">
                  <h3 className="section-block-title">
                    <span>🎓</span>
                    小学生都能懂的手把手教程
                  </h3>
                  <div className="section-block-content">
                    {renderTutorial(selectedProject.tutorial)}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <a 
                  href={`https://github.com/${selectedProject.fullName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta"
                  style={{ fontSize: '16px', padding: '12px 24px' }}
                >
                  <span>🔗</span>
                  查看原项目
                </a>
                <button 
                  className="hero-cta"
                  onClick={closeModal}
                  style={{ 
                    background: 'var(--bg-card)', 
                    border: '1px solid var(--border)',
                    fontSize: '16px', 
                    padding: '12px 24px' 
                  }}
                >
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