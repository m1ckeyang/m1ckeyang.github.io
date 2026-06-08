// 站点配置 - 所有内容都在这里
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
    { 
      icon: "📚", 
      title: "通俗易懂", 
      description: "没有专业术语，用讲故事的方式让你理解每个项目" 
    },
    { 
      icon: "🎮", 
      title: "边学边做", 
      description: "每个项目都有手把手教程，跟着做就能成功" 
    },
    { 
      icon: "🚀", 
      title: "今日热门", 
      description: "每天自动更新GitHub上最火的AI项目" 
    },
  ],
  
  footer: {
    description: "用爱发电，让每个人都能玩转AI项目",
    copyright: "2024 AI项目百科",
  }
}

// 模拟的热门AI项目数据（实际使用时可以从API获取）
export const trendingProjects = [
  {
    id: 1,
    name: "ChatTutor",
    fullName: "microsoft/ChatTutor",
    description: "一个用自然语言教你编程的AI导师",
    stars: 12800,
    language: "Python",
    color: "#3572A5",
    author: "Microsoft",
    // 通俗讲解
   通俗讲解: "想象一下，你有一个超级耐心的电脑老师，你问它'什么是循环'，它会用你听得懂的话给你解释，还会出题让你练习。这就是ChatTutor！",
    // 小学生教程
    tutorial: `🎯 今天我们要做一个"AI对话助手"，就像siri一样可以和你聊天！

📦 第一步：安装工具
打开电脑的"终端"（Mac叫终端，Windows叫PowerShell），输入：
\`\`\`bash
pip install openai
\`\`\`

✨ 第二步：写代码
创建一个文件叫 chat.py，写入：
\`\`\`python
import openai

# 这里填入你的API密钥
openai.api_key = "你的密钥"

while True:
    question = input("你: ")
    if question == "退出":
        break
    answer = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": question}]
    )
    print("AI:", answer.choices[0].message.content)
\`\`\`

🎮 第三步：运行
在终端里输入：python chat.py
然后就可以和AI聊天啦！`,
    difficulty: "入门",
    estimatedTime: "15分钟",
  },
  {
    id: 2,
    name: "ImageGenius",
    fullName: "stability-ai/stable-diffusion",
    description: "用文字生成图片的AI工具",
    stars: 45000,
    language: "Python",
    color: "#3572A5",
    author: "Stability AI",
    通俗讲解: "你有没有想过，对着电脑说'画一只蓝色的兔子在月亮上'，电脑就能画出来？ImageGenius就能做到！就像魔法一样，你描述什么，它就画什么。",
    tutorial: `🎯 今天我们要做一个"文字变图片"的魔法师！

📦 第一步：安装工具
打开终端，输入：
\`\`\`bash
pip install diffusers transformers torch
\`\`\`

✨ 第二步：写代码
创建一个文件叫 draw.py，写入：
\`\`\`python
from diffusers import StableDiffusionPipeline

# 加载AI画图模型
pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
pipe = pipe.to("cpu")

# 画一张图
result = pipe("a blue rabbit on the moon, cartoon style")
result.images[0].save("my_rabbit.png")
print("画好了！看看 my_rabbit.png")
\`\`\`

🎮 第三步：运行
输入：python draw.py
等一会儿，神奇的图片就出现了！`,
    difficulty: "入门",
    estimatedTime: "20分钟",
  },
  {
    id: 3,
    name: "VoiceBot",
    fullName: "coqui-ai/tts",
    description: "让电脑开口说话的AI",
    stars: 8900,
    language: "Python",
    color: "#3572A5",
    author: "Coqui",
    通俗讲解: "你有没有想过，为什么siri能说话？VoiceBot就是让任何文字变成声音的工具。你输入文字，它就能读出来！",
    tutorial: `🎯 今天我们要做一个"会说话的程序"！

📦 第一步：安装工具
\`\`\`bash
pip install TTS
\`\`\`

✨ 第二步：写代码
创建 speak.py：
\`\`\`python
import TTS

# 创建语音合成器
tts = TTS.TTS()
tts.tts_to_file(text="你好！我是一个会说话的电脑程序！", file_path="hello.wav")
print("声音文件已保存：hello.wav")
\`\`\`

🎮 第三步：运行
\`\`\`bash
python speak.py
\`\`\`
打开 hello.wav 听听！`,
    difficulty: "入门",
    estimatedTime: "10分钟",
  },
  {
    id: 4,
    name: "TranslatorX",
    fullName: "openai/whisper",
    description: "AI翻译官，能听懂各种语言",
    stars: 32000,
    language: "Python",
    color: "#3572A5",
    author: "OpenAI",
    通俗讲解: "想象你去了一个说外语的国家，你说什么它都能翻译成中文， TranslatorX就是这样一个翻译官，而且还能听写！",
    tutorial: `🎯 今天我们要做一个"语音翻译器"！

📦 第一步：安装工具
\`\`\`bash
pip install openai-whisper
\`\`\`

✨ 第二步：写代码
创建 translate.py：
\`\`\`python
import whisper

# 加载模型（这步可能需要几分钟）
model = whisper.load_model("base")

# 翻译音频文件（需要准备一个英文MP3）
result = model.transcribe("你的音频文件.mp3")
print("翻译结果：", result["text"])
\`\`\`

🎮 第三步：运行
\`\`\`bash
python translate.py
\`\`\``,
    difficulty: "入门",
    estimatedTime: "15分钟",
  },
  {
    id: 5,
    name: "FaceDetect",
    fullName: "ageitgey/face_recognition",
    description: "让人脸识别变得超级简单",
    stars: 52000,
    language: "Python",
    color: "#3572A5",
    author: "ageitgey",
    通俗讲解: "你有没有想过，相册怎么知道哪张照片是你？FaceDetect就是能认出照片里人脸的技术，就像人的眼睛一样！",
    tutorial: `🎯 今天我们要做一个"人脸检测器"！

📦 第一步：安装工具
\`\`\`bash
pip install face_recognition
\`\`\`

✨ 第二步：写代码
创建 face_check.py：
\`\`\`python
import face_recognition

# 加载图片
image = face_recognition.load_image_file("你的照片.jpg")

# 找人脸
face_locations = face_recognition.face_locations(image)
print(f"发现了 {len(face_locations)} 个人脸！")
\`\`\`

🎮 第三步：运行
\`\`\`bash
python face_check.py
\`\`\``,
    difficulty: "入门",
    estimatedTime: "20分钟",
  },
  {
    id: 6,
    name: "CodePilot",
    fullName: "github/copilot",
    description: "你的AI编程助手，帮你写代码",
    stars: 89000,
    language: "TypeScript",
    color: "#3178C6",
    author: "GitHub",
    通俗讲解: "想象你写作文的时候，旁边有个人帮你想下一句该写什么。CodePilot就是这样，它能帮你写代码！你写一行，它帮你补全下一行。",
    tutorial: `🎯 今天我们要了解CodePilot这个编程神器！

📦 安装：
CodePilot是一个VSCode插件，在VSCode的扩展市场搜索"GitHub Copilot"点击安装即可。

✨ 使用技巧：
1. 写注释让它帮你生成代码
2. 输入函数名让它补全
3. Tab键接受它的建议

🎮 试试看：
写一个函数名叫 calculate_sum，写注释 "# 计算两个数的和"
Copilot会自动帮你补全整个函数！`,
    difficulty: "入门",
    estimatedTime: "5分钟",
  },
  {
    id: 7,
    name: "MusicAI",
    fullName: "AIVA/AIVA",
    description: "AI作曲软件，让机器人为你写歌",
    stars: 7600,
    language: "Python",
    color: "#3572A5",
    author: "AIVA",
    通俗讲解: "你有没有想过，有一天电脑也能创作音乐？MusicAI就是这样一个AI作曲家，你告诉它想要什么感觉的音乐，它就能给你写出来！",
    tutorial: `🎯 今天我们要用AI创作一段音乐！

📦 第一步：安装
\`\`\`bash
pip install aiva
\`\`\`

✨ 第二步：写代码
创建 music.py：
\`\`\`python
from aiva import AIVACreator

# 创建作曲家
composer = AIVACreator()

# 创作一段开心的音乐
music = composer.compose(genre="happy", duration=30)
music.save("my_music.wav")
print("你的音乐已保存！")
\`\`\`

🎮 第三步：运行
\`\`\`bash
python music.py
\`\`\`
听听你的AI原创音乐！`,
    difficulty: "入门",
    estimatedTime: "25分钟",
  },
  {
    id: 8,
    name: "PromptGenius",
    fullName: "dair-ai/Prompt-Engineering-Guide",
    description: "教你如何更好地和AI说话",
    stars: 28000,
    language: "Markdown",
    color: "#083FA1",
    author: "dair-ai",
    通俗讲解: "和AI聊天就像和外国人说话一样，你需要用对方法才能让它听懂。PromptGenius就是教你怎么和AI更好地沟通的指南！",
    tutorial: `🎯 今天我们要学习"如何正确地和AI说话"！

📚 核心技巧：

1️⃣ 清晰具体
❌ 不好："帮我写代码"
✅ 好："用Python写一个计算器程序，要有加减乘除功能"

2️⃣ 给例子
告诉AI你希望的回答像什么样子

3️⃣ 分步骤
复杂任务分成小步骤

✨ 练习题：
试着让ChatGPT帮你写一首关于"友谊"的诗，注意使用具体的描述！`,
    difficulty: "入门",
    estimatedTime: "10分钟",
  },
  {
    id: 9,
    name: "AutoML",
    fullName: "google/automl",
    description: "让机器学习自动化的工具",
    stars: 18000,
    language: "Python",
    color: "#4285F4",
    author: "Google",
    通俗讲解: "机器学习听起来很复杂，需要很多数学知识。AutoML就是让这一切变简单的工具，你不用懂数学，也能训练AI模型！",
    tutorial: `🎯 今天我们要让电脑自己学习认识猫和狗！

📦 第一步：安装
\`\`\`bash
pip install automl
\`\`\`

✨ 第二步：写代码
创建 classify.py：
\`\`\`python
from automl import AutoMLClassifier

# 创建学习器
model = AutoMLClassifier()

# 训练数据（猫和狗的图片）
model.fit(X_train, y_train)

# 让它预测新图片
prediction = model.predict(new_image)
print("这是:", prediction)
\`\`\`

🎮 第三步：运行
\`\`\`bash
python classify.py
\`\`\``,
    difficulty: "进阶",
    estimatedTime: "30分钟",
  },
  {
    id: 10,
    name: "ChatDB",
    fullName: "chat2db/ChatDB",
    description: "用聊天的方式操作数据库",
    stars: 12000,
    language: "TypeScript",
    color: "#3178C6",
    author: "Chat2DB",
    通俗讲解: "数据库就像一个超大的Excel表格，但操作起来很复杂。ChatDB让你用说话的方式就能操作数据库，就像和siri说'帮我查一下今天销售额'一样简单！",
    tutorial: `🎯 今天我们要做一个"会聊天的数据库"！

📦 第一步：安装
\`\`\`bash
npm install chat2db
\`\`\`

✨ 第二步：写代码
创建 app.js：
\`\`\`javascript
import { ChatDB } from 'chat2db'

// 连接数据库
const db = new ChatDB('localhost', 'mydb')

// 用聊天的方式查询
const result = await db.chat("找出销售额大于10000的订单")
console.log(result)
\`\`\`

🎮 第三步：运行
\`\`\`bash
node app.js
\`\`\``,
    difficulty: "进阶",
    estimatedTime: "25分钟",
  },
]