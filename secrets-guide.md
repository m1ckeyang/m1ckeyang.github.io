# GitHub Secrets 配置指南

## 需要在 GitHub 仓库中设置的 Secrets

1. 打开 https://github.com/m1ckeyang/ai-projects/settings/secrets/actions

2. 添加以下 Secrets：

### Netlify 配置
- **NETLIFY_AUTH_TOKEN**: `nfp_Hb9AoT9g2W2gYhHY9EhG87Ds428xDeVdb8c2`
- **NETLIFY_SITE_ID**: `09e60931-f85c-4661-bf8c-c9fe1c14f18d`

## GitHub Actions 自动部署流程

每当代码推送到 main 分支时：
1. 自动构建项目
2. 部署到 GitHub Pages
3. 部署到 Netlify

## 每日自动更新

每天北京时间凌晨5点（UTC 21:00）自动执行：
1. 抓取GitHub Trending AI项目
2. 更新项目数据
3. 提交并推送到GitHub
4. 自动部署到所有平台

## 当前网站状态

| 平台 | URL | 状态 |
|------|-----|------|
| GitHub Pages | https://m1ckeyang.github.io/ai-projects/ | ✅正常 |
| Netlify | https://quiet-llama-b75313.netlify.app | ✅ 正常 |