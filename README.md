# 微信小程序后端服务

这是一个为微信小程序提供后端API服务的Node.js应用，基于Express框架构建，可以部署到Vercel免费平台。

## 功能特性

- 提供广告配置信息接口
- 用户注册和认证接口
- 视频/图片解析接口
- CORS支持，允许跨域访问
- 完全免费的Vercel部署方案

## 本地开发

### 安装依赖

```bash
cd backend
npm install
```

### 启动开发服务器

```bash
npm run dev
```

服务将运行在 `http://localhost:3000`

## 部署到Vercel

### 准备工作

1. 确保已经有[GitHub](https://github.com/)账户
2. 确保已经有[Vercel](https://vercel.com/)账户

### 部署步骤

1. **将代码推送到GitHub**

```bash
# 初始化git仓库
cd backend
git init
git add .
git commit -m "Initial commit"

# 创建GitHub仓库并推送（可通过GitHub网页界面完成）
```

2. **在Vercel上部署**

- 登录Vercel账户
- 点击右上角"Add New Project"
- 选择"Import Git Repository"
- 选择你刚才创建的GitHub仓库
- 选择项目根目录（确保选择backend目录）
- 保留默认设置，Vercel会自动识别这是一个Node.js项目
- 点击"Deploy"

3. **获取部署URL**

部署完成后，Vercel会提供一个URL，类似 `https://your-project-name.vercel.app`

## 配置小程序

部署成功后，需要修改小程序中的API请求URL。在小程序的`app.js`或`main.js`中找到API基础URL设置：

```javascript
// 修改前
app.prototype.$reqUrl = "https://hh.yyymvp.com/";

// 修改后
app.prototype.$reqUrl = "https://your-project-name.vercel.app/";
```

## API端点

### GET /
- 根路径，返回服务状态信息

### GET /advert/getAdvertMsg
- 获取广告配置信息

### POST /video/registryUser
- 用户注册接口
- 参数：`code`, `programType`, `scene`, `openid`

### POST /lyz/miniAnalyse
- 视频/图片解析接口
- 参数：`code`, `programType`, `link`, `nickName`, `avatarUrl`

### GET /health
- 健康检查接口

## 注意事项

- Vercel免费计划有一定的使用限制，但对于个人项目足够使用
- 首次部署可能需要几分钟时间
- 如果需要持久化存储，考虑使用云数据库服务