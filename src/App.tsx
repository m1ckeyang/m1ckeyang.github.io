import { useState } from 'react'
import { generateDailyProjects, type Project } from './config/site'
import './index.css'

function App() {
  const dailyData = generateDailyProjects()
  const [selectedDate, setSelectedDate] = useState(dailyData[0].date)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)
  
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
      {/* ============ NAVBAR ============ */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#" className="navbar-brand">🍎</a>
          
          <ul className="navbar-links"
              onMouseLeave={() => setHoveredNav(null)}
          >
            {[
              { id: 'store', label: '选购', dropdown: ['Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', '配件'] },
              { id: 'mac', label: 'Mac', dropdown: ['MacBook Air', 'MacBook Pro', 'iMac', 'Mac mini', 'Mac Studio'] },
              { id: 'ipad', label: 'iPad', dropdown: ['iPad Pro', 'iPad Air', 'iPad mini', 'iPad'] },
              { id: 'iphone', label: 'iPhone', dropdown: ['iPhone 15 Pro', 'iPhone 15', 'iPhone 14', '比较'] },
              { id: 'watch', label: 'Watch', dropdown: ['Apple Watch', 'Apple Watch Ultra', 'Apple Watch SE'] },
              { id: 'vision', label: 'Vision Pro', dropdown: ['Apple Vision Pro'] },
              { id: 'airpods', label: 'AirPods', dropdown: ['AirPods Pro', 'AirPods', 'AirPods Max'] },
              { id: 'tv', label: '电视', dropdown: ['Apple TV 4K', 'HomePod'] },
              { id: 'entertainment', label: '娱乐', dropdown: ['Apple One', 'Apple TV+', 'Music', 'Arcade'] },
              { id: 'accessories', label: '配件' },
              { id: 'support', label: '技术支持' },
            ].map(item => (
              <li key={item.id}
                  onMouseEnter={() => item.dropdown && setHoveredNav(item.id)}
              >
                <a href="#" className={hoveredNav === item.id ? 'active' : ''}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button className="navbar-action-btn">🔍</button>
            <button className="navbar-action-btn">🛒</button>
          </div>
        </div>
      </nav>

      {/* ============ SECONDARY NAVBAR ============ */}
      <div className="subnav">
        <div className="subnav-inner">
          {[
            { icon: '🦐', label: 'AI项目百科' },
            { icon: '🔥', label: '今日热门' },
            { icon: '📅', label: '往期归档' },
            { icon:'📚', label: '教程' },
            { icon: '💡', label: '新手入门' },
          ].map((item, i) => (
            <a key={i} href="#" className="subnav-item">
              <span className="subnav-icon">{item.icon}</span>
              <span className="subnav-label">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-badge">
          🦐 AI项目百科
        </div>
        <h1 className="hero-title">每天10个最火的AI项目</h1>
        <p className="hero-subtitle">用最通俗的语言讲解，手把手教你做出来</p>
        <div className="hero-cta-group">
          <a href="#projects" className="hero-cta">
            探索今日项目 <span className="hero-cta-arrow">→</span>
          </a>
          <a href="#archive" className="hero-cta">
            浏览往期 <span className="hero-cta-arrow">→</span>
          </a>
        </div>
      </section>

      {/* ============ PRODUCTS SECTION ============ */}
      <section className="products-section">
        <div className="section-header">
          <p className="section-eyebrow">为你推荐</p>
          <h2 className="section-title">热门AI项目</h2>
          <p className="section-subtitle">来自GitHub Trending，每日更新</p>
        </div>
        
        <div className="products-grid">
          <div className="product-card new">
            <div className="product-icon">🤖</div>
            <h3 className="product-name">ChatTutor</h3>
            <p className="product-tagline">用自然语言教你编程的AI导师</p>
            <p className="product-price">⭐12.8k</p>
            <span className="product-cta">了解更多 →</span>
          </div>
          
          <div className="product-card">
            <div className="product-icon">🎨</div>
            <h3 className="product-name">ImageGenius</h3>
            <p className="product-tagline">用文字生成图片的AI工具</p>
            <p className="product-price">⭐ 45.0k</p>
            <span className="product-cta">了解更多 →</span>
          </div>
          
          <div className="product-card">
            <div className="product-icon">🎵</div>
            <h3 className="product-name">VoiceBot</h3>
            <p className="product-tagline">让电脑开口说话的AI</p>
            <p className="product-price">⭐ 8.9k</p>
            <span className="product-cta">了解更多 →</span>
          </div>
          
          <div className="product-card 更新">
            <div className="product-icon">💻</div>
            <h3 className="product-name">CodePilot</h3>
            <p className="product-tagline">你的AI编程助手</p>
            <p className="product-price">⭐ 89.0k</p>
            <span className="product-cta">了解更多 →</span>
          </div>
        </div>
      </section>

      {/* ============ ARCHIVE SECTION ============ */}
      <section className="archive-section" id="archive">
        <div className="archive-header">
          <h2 className="archive-header-title">选择日期</h2>
        </div>
        
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

      {/* ============ PROJECTS SECTION ============ */}
      <section className="projects-section" id="projects">
        <div className="section-header">
          <p className="section-eyebrow">{currentDayData.dateLabel} · AI项目精选</p>
          <h2 className="section-title">🔥 今日推荐</h2>
          <p className="section-subtitle">点击卡片查看通俗讲解和手把手教程</p>
        </div>

        <div className="projects-grid">
          {currentDayData.projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-rank">{project.id <= 10 ? project.id : project.id % 10}</div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-author">by {project.author}</p>
              <p className="project-desc">{project.description}</p>
              <div className="project-meta">
                <div className="meta-item">
                  <span>⭐</span>
                  <span className="stars">{formatStars(project.stars)}</span>
                </div>
                <div className="meta-item">{project.language}</div>
                <span className="difficulty-badge">{project.difficulty}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-column-title">功能</h4>
              <ul className="footer-column-links">
                <li><a href="#">今日推荐</a></li>
                <li><a href="#">往期归档</a></li>
                <li><a href="#">新手入门</a></li>
                <li><a href="#">教程</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">资源</h4>
              <ul className="footer-column-links">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">文档</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">关于</h4>
              <ul className="footer-column-links">
                <li><a href="#">关于我们</a></li>
                <li><a href="#">联系我们</a></li>
             </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">用爱发电，让每个人都能玩转AI项目</p>
            <p className="footer-legal">© 2024 AI项目百科 ·隐私政策 · 使用条款</p>
          </div>
        </div>
      </footer>

      {/* ============ MODAL ============ */}
      <div className={`modal-overlay ${selectedProject ? 'active' : ''}`} onClick={handleOverlayClick}>
        <div className="modal">
          {selectedProject && (
            <>
              <div className="modal-header">
                <div>
                  <h2 className="modal-title">{selectedProject.name}</h2>
                  <div className="modal-meta">
                    <span className="difficulty-badge">{selectedProject.difficulty}</span>
                    <span className="meta-item">⏱️ {selectedProject.estimatedTime}</span>
                    <span className="meta-item"><span>⭐</span><span className="stars">{formatStars(selectedProject.stars)}</span></span>
                  </div>
                </div>
                <button className="modal-close" onClick={closeModal}>✕</button>
              </div>
              
              <div className="modal-body">
                <div className="section-block">
                  <h3 className="section-block-title">📚 通俗讲解</h3>
                  <div className="section-block-content">{selectedProject.通俗讲解}</div>
                </div>

                <div className="section-block">
                  <h3 className="section-block-title">🎓 手把手教程</h3>
                  <div className="section-block-content">{renderTutorial(selectedProject.tutorial)}</div>
                </div>
              </div>

              <div className="modal-footer">
                <a href={`https://github.com/${selectedProject.fullName}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  在GitHub查看
                </a>
                <button className="btn btn-secondary" onClick={closeModal}>
                  关闭
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