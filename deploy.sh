#!/bin/bash
# AI项目百科 - 一键部署脚本
# 部署到 GitHub Pages 和 Netlify

set -e

# 颜色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}🚀 AI项目百科部署开始...${NC}"

# 1. 构建项目
echo -e "${YELLOW}📦步骤1: 构建项目...${NC}"
npm run build

# 2. GitHub Pages 部署
echo -e "${YELLOW}🔗 步骤2: 部署到 GitHub Pages...${NC}"
git add -f dist/
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main2>/dev/null || git push origin master2>/dev/null
echo -e "${GREEN}✅ GitHub Pages部署完成${NC}"

# 3. Netlify 部署
echo -e "${YELLOW}☁️ 步骤3: 部署到 Netlify...${NC}"
export NETLIFY_AUTH_TOKEN="${NETLIFY_TOKEN:-nfp_Hb9AoT9g2W2gYhHY9EhG87Ds428xDeVdb8c2}"
npx netlify-cli deploy --prod --dir=dist --auth="$NETLIFY_AUTH_TOKEN"
echo -e "${GREEN}✅ Netlify 部署完成${NC}"

echo -e "${GREEN}🎉 所有平台部署完成！${NC}"
echo ""
echo "📱 网站地址:"
echo "   GitHub Pages: https://m1ckeyang.github.io/ai-projects/"
echo "   Netlify: https://quiet-llama-b75313.netlify.app"