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
    copyright: "2026 AI项目百科",
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

// 2026年6月10日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "career-ops",
    fullName: "santifer/career-ops",
    description: "基于 Claude Code 的 AI 求职系统，14种技能模式，Go 仪表盘，PDF 生成和批量处理",
    stars: 51496,
    language: "JavaScript",
    color: "#F8DB5C",
    author: "santifer",
    '通俗讲解': "你找工作的时候，是不是要改简历、海投、刷面试？这个工具就是帮你做所有这些事的 AI 助手！它就像一个超级能干的 HR 助理，帮你把求职流程自动化，今天又涨了 1,114 个星。",
    tutorial: `🎯 今天我们要了解 career-ops 这个AI求职神器！\n\n📦 第一步：克隆代码\ngit clone https://github.com/santifer/career-ops.git\ncd career-ops\n\n✨ 第二步：安装依赖\npip install -r requirements.txt\n\n🎮 第三步：运行\npython main.py，选择你的求职模式`,
    difficulty: "入门",
    estimatedTime: "20分钟"
  },
  {
    id: 2,
    name: "last30days-skill",
    fullName: "mvanhorn/last30days-skill",
    description: "AI Agent 技能，能从 Reddit、X、YouTube、HN、Polymarket 等平台研究任何话题并生成总结",
    stars: 37065,
    language: "Python",
    color: "#3572A5",
    author: "mvanhorn",
    '通俗讲解': '想象一下你有一个全能的研究助手，你问它"最近有什么热门话题"，它就去 Reddit、Twitter、YouTube 上逛一圈，然后把最重要的信息整理好给你。今天又涨了 3,177 个星，增长最快！',
    tutorial: `🎯 今天我们要做一个"AI 调研助手"！\n\n📦 第一步：安装\ngit clone https://github.com/mvanhorn/last30days-skill.git\ncd last30days-skill\n\n✨ 第二步：设置\npip install -r requirements.txt\n\n🎮 第三步：运行\n给它一个话题，它就去全网搜索并给你报告！`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
  },
  {
    id: 3,
    name: "AiToEarn",
    fullName: "yikart/AiToEarn",
    description: "一站式AI内容变现平台，通过AI Agent自动化帮助创作者在全球主流平台构建、分发并变现内容",
    stars: 19862,
    language: "TypeScript",
    color: "#4285F4",
    author: "yikart",
    '通俗讲解': '想靠写文章、拍视频赚钱？AiToEarn 就是帮你自动写内容、自动发抖音小红书TikTok的赚钱机器！支持13个主流平台，还能在 Claude/Cursor 里直接用，今天又涨了 423 个星。',
    tutorial: `🎯 今天我们要搭建"AI 内容赚钱系统"！\n\n📦 第一步：安装\nnpm install -g aitoearn\n\n✨ 第二步：配置\n注册 API Key，连接你的社交媒体账号\n\n🎮 第三步：创作内容\nai-to-earn create --platform xiaohongshu --topic "AI工具推荐"\n看着它帮你写好发布！`,
    difficulty: "入门",
    estimatedTime: "25分钟"
  },
  {
    id: 4,
    name: "tolaria",
    fullName: "refactoringhq/tolaria",
    description: "桌面应用，用于管理 Markdown 知识库，打造你的第二大脑",
    stars: 14247,
    language: "TypeScript",
    color: "#3178C6",
    author: "refactoringhq",
    '通俗讲解': '你平时看文章、记笔记，散落在各种地方对吧？tolaria 就是帮你把这些 Markdown 笔记组织成一个超级方便的知识库，就像你自己的 Wikipedia！今天涨了 821 个星。',
    tutorial: `🎯 今天我们要搭建"个人知识库"！\n\n📦 第一步：安装\ngit clone https://github.com/refactoringhq/tolaria.git\ncd tolaria\n\n✨ 第二步：构建\nnpm install && npm run build\n\n🎮 第三步：启动\nnpm start，导入你的笔记文件夹就开始用了！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 5,
    name: "turbovec",
    fullName: "RyanCodrai/turbovec",
    description: "基于 TurboQuant 的向量索引，用 Rust 编写并带有 Python 绑定，极速向量搜索",
    stars: 10065,
    language: "Python",
    color: "#DEA584",
    author: "RyanCodrai",
    '通俗讲解': 'AI 聊天机器人怎么做到一秒内找到最相关的答案？靠的就是向量搜索！turbovec 是用 Rust 写的极速向量搜索引擎，比一般的方案快很多倍。今天涨了 1,800 个星。',
    tutorial: `🎯 今天我们要做一个"超快搜索"引擎！\n\n📦 第一步：安装\ngit clone https://github.com/RyanCodrai/turbovec.git\ncd turbovec\n\n✨ 第二步：编译\ncargo build --release\npip install turbovec\n\n🎮 第三步：测试\npython 测试脚本，体验极速搜索！`,
    difficulty: "进阶",
    estimatedTime: "35分钟"
  },
  {
    id: 6,
    name: "pm-skills",
    fullName: "phuryn/pm-skills",
    description: "PM Skills Marketplace: 100+ agentic skills, commands, and plugins — 从产品发现到增长的全流程",
    stars: 8450,
    language: "Python",
    color: "#3572A5",
    author: "phuryn",
    '通俗讲解': '做产品管理太累了？pm-skills 就是帮你自动写 PRD、做竞品分析、规划发布策略的 AI 产品经理助手！68个技能、42个工作流，装了就像雇了一个资深产品经理。',
    tutorial: `🎯 今天我们要安装"AI 产品经理"！\n\n📦 第一步：安装\npip install pm-skills\n\n✨ 第二步：配置\n在 Claude Code 中安装插件：\n/plugin marketplace add phuryn/pm-skills\n\n🎮 第三步：使用\n/discover 发现新想法\n/write-prd 写产品需求文档`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 7,
    name: "goose",
    fullName: "aaif-goose/goose",
    description: "开源可扩展 AI Agent，不仅能给代码建议，还能安装、执行、编辑和测试代码",
    stars: 6800,
    language: "Python",
    color: "#3572A5",
    author: "aaif-goose",
    '通俗讲解': '普通的 AI 助手只能帮你写代码，但 goose 更进一步——它不仅能写代码，还能帮你运行代码、修复 bug、甚至帮你装软件。就像一个真正的程序员助手！今天又涨了 600 多个星。',
    tutorial: `🎯 今天我们要安装"AI 程序员助手"！\n\n📦 第一步：安装\npip install goose-agent\n\n✨ 第二步：配置\n设置你的 API Key\n\n🎮 第三步：使用\ngoose --task "帮我写一个排序算法"\n让它自己安装、运行、测试！`,
    difficulty: "入门",
    estimatedTime: "20分钟"
  },
  {
    id: 8,
    name: "whichllm",
    fullName: "Andyyyy64/whichllm",
    description: "找到最适合你本地硬件的 LLM，基于真实基准测试结果排名，不看参数看性能",
    stars: 4019,
    language: "Python",
    color: "#3572A5",
    author: "Andyyyy64",
    '通俗讲解': '你想在自己的电脑上跑 AI 大模型，但不知道该选哪个？whichllm 会先测试你的电脑配置，然后告诉你哪些模型在你的机器上跑得最快最稳。就像选手机一样，不看广告看实测！',
    tutorial: `🎯 今天我们要找到"最适合你的 AI 模型"！\n\n📦 第一步：安装\ngit clone https://github.com/Andyyyy64/whichllm.git\ncd whichllm\n\n✨ 第二步：运行基准测试\npython whichllm.py --bench\n\n🎮 第三步：看结果\n它会告诉你你的电脑适合跑哪个模型！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 9,
    name: "system-prompts-and-models-of-ai-tools",
    fullName: "x1xhlol/system-prompts-and-models-of-ai-tools",
    description: "汇集 30+ 主流 AI 工具的内部系统提示词和模型配置，包括 Cursor、Claude Code、Windsurf、Replit 等",
    stars: 15200,
    language: "TypeScript",
    color: "#3178C6",
    author: "x1xhlol",
    '通俗讲解': '每个 AI 工具都有"内心独白"（系统提示词），这个仓库帮你收集了 Cursor、Claude Code、Windsurf 等 30 多个工具的提示词！学会这些，你就掌握了让 AI 变强的秘诀。',
    tutorial: `🎯 今天我们要学习"AI 的工具秘密"！\n\n📦 第一步：克隆仓库\ngit clone https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools.git\ncd system-prompts-and-models-of-ai-tools\n\n✨ 第二步：浏览提示词\ncd prompts && ls\n看看各个工具的"内心独白"长什么样\n\n🎮 第三步：应用到你的 AI\n复制你最感兴趣的提示词到你的 AI 工具配置中`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 10,
    name: "openmed",
    fullName: "maziyarpanahi/openmed",
    description: "开源医疗 AI 工具，1000+ 医疗模型在本地运行，无需云端，保护患者隐私",
    stars: 1787,
    language: "Python",
    color: "#3572A5",
    author: "maziyarpanahi",
    '通俗讲解': '医疗数据太敏感不能上传到云端？openmed 帮你把 AI 完全跑在你的电脑或手机上！提取病历信息、去除个人隐私数据、做医学诊断分析——全部离线完成，患者数据一分都不离开你的设备。',
    tutorial: `🎯 今天我们要搭建"隐私医疗 AI"！\n\n📦 第一步：安装\npip install openmed\n\n✨ 第二步：使用\nfrom openmed import extract\nresult = extract("患者主诉：头痛、发热两天")\nprint(result)  # 自动提取医疗实体\n\n🎮 第三步：在 iPhone 上试试\n下载 OpenMedKit，本地运行医疗文本分析`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
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
