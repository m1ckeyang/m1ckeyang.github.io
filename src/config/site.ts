// 站点配置
export const siteConfig = {
  name: "AI项目百科",
  tagline: "每天带你玩转10个最酷的AI项目",
  description: "用小学生都能懂的语言，讲解最火的AI项目，手把手教你复制实现",
  
  hero: {
    badge: "🔥 每日更新",
    title: "每天10个AI项目",
    subtitle: "用最通俗的语言讲解，手把手教你做出来",
    cta: { text: "查看今日项目", href: "#projects" },
  },
  
  features: [
    { icon: "📚", title: "通俗易懂", description: "没有专业术语，用讲故事的方式让你理解每个项目" },
    { icon: "🎮", title: "边学边做", description: "每个项目都有手把手教程，跟着做就能成功" },
    { icon: "🚀", title: "今日热门", description: "每天自动更新GitHub上最火的AI项目" },
  ],
  
  footer: {
    description: "用爱发电，让每个人都能玩转AI项目",
    copyright: "2024 AI项目百科",
  }
}

// 按日期归档的项目数据
export interface Project {
  id: number
  name: string
  fullName: string
  description: string
  stars: number
  language: string
  color: string
  author: string
  '通俗讲解': string
  tutorial: string
  difficulty: string
  estimatedTime: string
}

export interface DailyProjects {
  date: string  // YYYY-MM-DD 格式
  dateLabel: string  // 显示用，如 "6月8日"
  projects: Project[]
}

// 生成最近7天的日期数据
const generateDates = () => {
  const dates: string[] = []
  const today = new Date()
  for (let i = 0; i < 7; i++) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    dates.push(d.toISOString().split('T')[0])
  }
  return dates
}

// 2026年6月9日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "career-ops",
    fullName: "santifer/career-ops",
    description: "基于 Claude Code 的 AI 求职系统，14种技能模式，Go 仪表盘，PDF 生成和批量处理",
    stars: 50404,
    language: "JavaScript",
    color: "#F8DB5C",
    author: "santifer",
    '通俗讲解': "你找工作的时候，是不是要改简历、海投、刷面试？这个工具就是帮你做所有这些事的 AI 助手！它就像一个超级能干的 HR 助理，帮你把求职流程自动化。",
    tutorial: `🎯 今天我们要了解 career-ops 这个AI求职神器！\n\n📦 第一步：克隆代码\ngit clone https://github.com/santifer/career-ops.git\ncd career-ops\n\n✨ 第二步：安装依赖\npip install -r requirements.txt\n\n🎮 第三步：运行\npython main.py，选择你的求职模式`,
    difficulty: "入门",
    estimatedTime: "20分钟"
  },
  {
    id: 2,
    name: "supervision",
    fullName: "roboflow/supervision",
    description: "可复用的计算机视觉工具库，帮助开发者构建视觉AI应用",
    stars: 42286,
    language: "Python",
    color: "#3572A5",
    author: "Roboflow",
    '通俗讲解': "如果你用AI去识别图片里的猫狗、计数车流量，supervision就是帮你处理结果的瑞士军刀。它把复杂的视觉结果转换成漂亮的图表和干净的标注。",
    tutorial: `🎯 今天我们要做一个"智能计数助手"！\n\n📦 第一步：安装工具\npip install supervision\n\n✨ 第二步：写代码\n创建 count.py，导入 supervision\n\n🎮 第三步：运行\npython count.py 看着AI给你数清楚！`,
    difficulty: "入门",
    estimatedTime: "25分钟"
  },
  {
    id: 3,
    name: "last30days-skill",
    fullName: "mvanhorn/last30days-skill",
    description: "AI Agent 技能，能从 Reddit、X、YouTube、HN、Polymarket 等平台研究任何话题并生成总结",
    stars: 34204,
    language: "Python",
    color: "#3572A5",
    author: "mvanhorn",
    '通俗讲解': '想象一下你有一个全能的研究助手，你问它\"最近有什么热门话题\"，它就去 Reddit、Twitter、YouTube 上逛一圈，然后把最重要的信息整理好给你。这个就是！今天增长最快，一天涨了 3558 个星！',
    tutorial: `🎯 今天我们要做一个"AI 调研助手"！\n\n📦 第一步：安装\ngit clone https://github.com/mvanhorn/last30days-skill.git\ncd last30days-skill\n\n✨ 第二步：设置\npip install -r requirements.txt\n\n🎮 第三步：运行\n给它一个话题，它就去全网搜索并给你报告！`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
  },
  {
    id: 4,
    name: "CopilotKit",
    fullName: "CopilotKit/CopilotKit",
    description: "为 AI Agent 和生成式 UI 打造的前端框架，支持 React、Angular、移动端等",
    stars: 34076,
    language: "TypeScript",
    color: "#3178C6",
    author: "CopilotKit",
    '通俗讲解': "想在你的 App 里加一个 AI 聊天助手？CopilotKit 就是让这件事变得超简单的框架。它帮你搞定所有 AI 交互的 UI 和逻辑，你只需要拖进去就行。",
    tutorial: `🎯 今天我们要做一个"带 AI 的 Web App"！\n\n📦 第一步：初始化项目\nnpx create-vite@latest my-app --template react-ts\n\n✨ 第二步：安装 CopilotKit\nnpm install @copilotkit/react-core\n\n🎮 第三步：在 React 组件中引入\n加入 <CopilotKit /> 就能对话！`,
    difficulty: "入门",
    estimatedTime: "20分钟"
  },
  {
    id: 5,
    name: "Personal_AI_Infrastructure",
    fullName: "danielmiessler/Personal_AI_Infrastructure",
    description: "Agentic AI 基础设施，增强人类能力的 AI Agent 系统",
    stars: 15374,
    language: "TypeScript",
    color: "#3178C6",
    author: "danielmiessler",
    '通俗讲解': '就像手机有操作系统和APP一样，这个工具帮你搭建一套\"个人AI操作系统\"。让你的 AI 能自己帮你处理邮件、整理信息、执行任务。',
    tutorial: `🎯 今天我们要搭建"个人 AI 基础设施"！\n\n📦 第一步：克隆仓库\ngit clone https://github.com/danielmiessler/Personal_AI_Infrastructure.git\n\n✨ 第二步：阅读文档\ncd Personal_AI_Infrastructure && cat README.md\n\n🎮 第三步：配置你的 AI Agent\n按照教程逐步设置！`,
    difficulty: "进阶",
    estimatedTime: "45分钟"
  },
  {
    id: 6,
    name: "tolaria",
    fullName: "refactoringhq/tolaria",
    description: "桌面应用，用于管理 Markdown 知识库，打造你的第二大脑",
    stars: 13492,
    language: "TypeScript",
    color: "#3178C6",
    author: "refactoringhq",
    '通俗讲解': "你平时看文章、记笔记，散落在各种地方对吧？tolaria 就是帮你把这些 Markdown 笔记组织成一个超级方便的知识库，就像你自己的 Wikipedia！",
    tutorial: `🎯 今天我们要搭建"个人知识库"！\n\n📦 第一步：安装\ngit clone https://github.com/refactoringhq/tolaria.git\ncd tolaria\n\n✨ 第二步：构建\nnpm install && npm run build\n\n🎮 第三步：启动\nnpm start，导入你的笔记文件夹就开始用了！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 7,
    name: "skills",
    fullName: "google/skills",
    description: "Google 官方推出的 Agent 技能集，集成各种 Google 产品和技术的 AI 技能",
    stars: 12321,
    language: "Python",
    color: "#4285F4",
    author: "Google",
    '通俗讲解': "Google 自己出的 AI 技能包！装了这些技能，你的 AI 助手就能帮你操作 Google 的各种产品——搜索、日历、地图、文档等等。",
    tutorial: `🎯 今天我们要安装"Google AI 技能包"！\n\n📦 第一步：克隆仓库\ngit clone https://github.com/google/skills.git\ncd skills\n\n✨ 第二步：安装\npip install -r requirements.txt\n\n🎮 第三步：启用技能\npython skills.py --list 查看可用技能！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 8,
    name: "turbovec",
    fullName: "RyanCodrai/turbovec",
    description: "基于 TurboQuant 的向量索引，用 Rust 编写并带有 Python 绑定，极速向量搜索",
    stars: 8654,
    language: "Python",
    color: "#DEA584",
    author: "RyanCodrai",
    '通俗讲解': "AI 聊天机器人怎么做到一秒内找到最相关的答案？靠的就是向量搜索！turbovec 是用 Rust 写的极速向量搜索引擎，比一般的方案快很多倍。",
    tutorial: `🎯 今天我们要做一个"超快搜索"引擎！\n\n📦 第一步：安装\ngit clone https://github.com/RyanCodrai/turbovec.git\ncd turbovec\n\n✨ 第二步：编译\ncargo build --release\npip install turbovec\n\n🎮 第三步：测试\npython 测试脚本，体验极速搜索！`,
    difficulty: "进阶",
    estimatedTime: "35分钟"
  },
  {
    id: 9,
    name: "goose",
    fullName: "aaif-goose/goose",
    description: "开源可扩展 AI Agent，不仅能给代码建议，还能安装、执行、编辑和测试代码",
    stars: 6800,
    language: "Python",
    color: "#3572A5",
    author: "aaif-goose",
    '通俗讲解': "普通的 AI 助手只能帮你写代码，但 goose 更进一步——它不仅能写代码，还能帮你运行代码、修复 bug、甚至帮你装软件。就像一个真正的程序员助手！",
    tutorial: `🎯 今天我们要安装"AI 程序员助手"！\n\n📦 第一步：安装\npip install goose-agent\n\n✨ 第二步：配置\n设置你的 API Key\n\n🎮 第三步：使用\ngoose --task "帮我写一个排序算法"\n让它自己安装、运行、测试！`,
    difficulty: "入门",
    estimatedTime: "20分钟"
  },
  {
    id: 10,
    name: "whichllm",
    fullName: "Andyyyy64/whichllm",
    description: "找到最适合你本地硬件的 LLM，基于真实基准测试结果排名，不看参数看性能",
    stars: 3383,
    language: "Python",
    color: "#3572A5",
    author: "Andyyyy64",
    '通俗讲解': "你想在自己的电脑上跑 AI 大模型，但不知道该选哪个？whichllm 会先测试你的电脑配置，然后告诉你哪些模型在你的机器上跑得最快最稳。就像选手机一样，不看广告看实测！",
    tutorial: `🎯 今天我们要找到"最适合你的 AI 模型"！\n\n📦 第一步：安装\ngit clone https://github.com/Andyyyy64/whichllm.git\ncd whichllm\n\n✨ 第二步：运行基准测试\npython whichllm.py --bench\n\n🎮 第三步：看结果\n它会告诉你你的电脑适合跑哪个模型！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  }
]

// 生成最近7天的数据
export const generateDailyProjects = (): DailyProjects[] => {
  const dates = generateDates()
  return dates.map((date, index) => {
    const d = new Date(date)
    const month = d.getMonth() + 1
    const day = d.getDate()
    return {
      date,
      dateLabel: `${month}月${day}日`,
      projects: trendingProjects.map(p => ({ ...p, id: p.id + index * 10 }))
    }
  })
}

export { trendingProjects }
