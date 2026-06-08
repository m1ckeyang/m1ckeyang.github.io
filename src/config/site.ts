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
  通俗讲解: string
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

// 项目数据 -模拟数据，实际使用时从API或本地JSON文件获取
const sampleProjects: Project[] = [
  {
    id: 1, name: "ChatTutor", fullName: "microsoft/ChatTutor",
    description: "一个用自然语言教你编程的AI导师", stars: 12800, language: "Python", color: "#3572A5", author: "Microsoft",
    通俗讲解: "想象一下，你有一个超级耐心的电脑老师，你问它'什么是循环'，它会用你听得懂的话给你解释，还会出题让你练习。这就是ChatTutor！",
    tutorial: `🎯 今天我们要做一个"AI对话助手"，就像siri一样可以和你聊天！\n\n📦 第一步：安装工具\n打开终端，输入：pip install openai\n\n✨ 第二步：写代码\n创建 chat.py，写入AI对话代码\n\n🎮 第三步：运行\npython chat.py 然后就可以和AI聊天啦！`,
    difficulty: "入门", estimatedTime: "15分钟"
  },
  {
    id: 2, name: "ImageGenius", fullName: "stability-ai/stable-diffusion",
    description: "用文字生成图片的AI工具", stars: 45000, language: "Python", color: "#3572A5", author: "Stability AI",
    通俗讲解: "你有没有想过，对着电脑说'画一只蓝色的兔子在月亮上'，电脑就能画出来？ImageGenius就能做到！就像魔法一样，你描述什么，它就画什么。",
    tutorial: `🎯 今天我们要做一个"文字变图片"的魔法师！\n\n📦 第一步：安装工具\npip install diffusers transformers torch\n\n✨ 第二步：写代码\n创建 draw.py，输入描述词\n\n🎮 第三步：运行\npython draw.py 神奇的图片就出现了！`,
    difficulty: "入门", estimatedTime: "20分钟"
  },
  {
    id: 3, name: "VoiceBot", fullName: "coqui-ai/tts",
    description: "让电脑开口说话的AI", stars: 8900, language: "Python", color: "#3572A5", author: "Coqui",
    通俗讲解: "你有没有想过，为什么siri能说话？VoiceBot就是让任何文字变成声音的工具。你输入文字，它就能读出来！",
    tutorial: `🎯 今天我们要做一个"会说话的程序"！\n\n📦 第一步：安装 pip install TTS\n✨ 第二步：创建speak.py\n🎮 第三步：运行 python speak.py`,
    difficulty: "入门", estimatedTime: "10分钟"
  },
  {
    id: 4, name: "TranslatorX", fullName: "openai/whisper",
    description: "AI翻译官，能听懂各种语言", stars: 32000, language: "Python", color: "#3572A5", author: "OpenAI",
    通俗讲解: "想象你去了一个说外语的国家，你说什么它都能翻译成中文，TranslatorX就是这样一个翻译官！",
    tutorial: `🎯 今天我们要做一个"语音翻译器"！\n\n📦 pip install openai-whisper\n✨ 创建translate.py\n🎮 运行后自动翻译音频`,
    difficulty: "入门", estimatedTime: "15分钟"
  },
  {
    id: 5, name: "FaceDetect", fullName: "ageitgey/face_recognition",
    description: "让人脸识别变得超级简单", stars: 52000, language: "Python", color: "#3572A5", author: "ageitgey",
    通俗讲解: "你有没有想过，相册怎么知道哪张照片是你？FaceDetect就是能认出照片里人脸的技术，就像人的眼睛一样！",
    tutorial: `🎯 今天我们要做一个"人脸检测器"！\n\n📦 pip install face_recognition\n✨ 创建 face_check.py\n🎮 运行后告诉你照片里有几个人脸`,
    difficulty: "入门", estimatedTime: "20分钟"
  },
  {
    id: 6, name: "CodePilot", fullName: "github/copilot",
    description: "你的AI编程助手，帮你写代码", stars: 89000, language: "TypeScript", color: "#3178C6", author: "GitHub",
    通俗讲解: "想象你写作文的时候，旁边有个人帮你想下一句该写什么。CodePilot就是这样，你写一行，它帮你补全下一行。",
    tutorial: `🎯 今天我们要了解CodePilot这个编程神器！\n\n📦 VSCode安装Copilot插件\n✨ 写注释让它帮你生成代码\n🎮 Tab键接受建议`,
    difficulty: "入门", estimatedTime: "5分钟"
  },
  {
    id: 7, name: "MusicAI", fullName: "AIVA/AIVA",
    description: "AI作曲软件，让机器人为你写歌", stars: 7600, language: "Python", color: "#3572A5", author: "AIVA",
    通俗讲解: "你有没有想过，电脑也能创作音乐？MusicAI就是这样一个AI作曲家，你告诉它想要什么感觉的音乐，它就能给你写出来！",
    tutorial: `🎯 今天我们要用AI创作一段音乐！\n\n📦 pip install aiva\n✨ 创建 music.py，描述你想要什么风格的音乐\n🎮 运行后生成你的AI原创音乐！`,
    difficulty: "入门", estimatedTime: "25分钟"
  },
  {
    id: 8, name: "PromptGenius", fullName: "dair-ai/Prompt-Engineering-Guide",
    description: "教你如何更好地和AI说话", stars: 28000, language: "Markdown", color: "#083FA1", author: "dair-ai",
    通俗讲解: "和AI聊天就像和外国人说话一样，你需要用对方法才能让它听懂。PromptGenius就是教你怎么和AI更好地沟通！",
    tutorial: `🎯 今天我们要学习"如何正确地和AI说话"！\n\n📚 技巧：1.清晰具体 2.给例子 3.分步骤\n✨ 练习：让ChatGPT帮你写一首关于友谊的诗`,
    difficulty: "入门", estimatedTime: "10分钟"
  },
  {
    id: 9, name: "AutoML", fullName: "google/automl",
    description: "让机器学习自动化的工具", stars: 18000, language: "Python", color: "#4285F4", author: "Google",
    通俗讲解: "机器学习听起来很复杂，需要很多数学知识。AutoML就是让这一切变简单的工具，你不用懂数学，也能训练AI模型！",
    tutorial: `🎯 今天我们要让电脑自己学习认识猫和狗！\n\n📦 pip install automl\n✨ 创建 classify.py\n🎮 给它看图片，它就能告诉你是什么！`,
    difficulty: "进阶", estimatedTime: "30分钟"
  },
  {
    id: 10, name: "ChatDB", fullName: "chat2db/ChatDB",
    description: "用聊天的方式操作数据库", stars: 12000, language: "TypeScript", color: "#3178C6", author: "Chat2DB",
    通俗讲解: "数据库就像一个超大的Excel表格，但操作起来很复杂。ChatDB让你用说话的方式就能操作数据库！",
    tutorial: `🎯 今天我们要做一个"会聊天的数据库"！\n\n📦 npm install chat2db\n✨ 创建 app.js\n🎮 说"帮我查销售"，它就帮你查！`,
    difficulty: "进阶", estimatedTime: "25分钟"
  },
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
      projects: sampleProjects.map(p => ({ ...p, id: p.id + index * 10 }))
    }
  })
}

export const trendingProjects = sampleProjects