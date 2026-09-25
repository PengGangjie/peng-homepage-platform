# PengGangjie · 个人主页

公开页：https://penggangjie.ai-builders.space（主机名大小写不敏感）

高校讲师 / 个人开发者彭岗杰的个人主页：作品（实训科平台、乡土民居数字保存、沉浮 EP、砺行·日省、格物记 OS）、设计作品集、职业路径、教学与凭据、八点观察室节目入口（B 站 @彭八PUMBAA / 公众号 彭八八点ROOM），以及 Superlinear 社区 30 天体验见面礼。

## 页面

| 文件 | 说明 |
|---|---|
| `static/index.html` | 主页 V2（2026-09-25 叙述化重构 + V2.1 八点观察室/见面礼） |
| `static/v1.html` | V1.0 留档（noindex），主页页脚有入口 |
| `static/changelog.html` | 站点更新日志 |
| `static/resume.html` | 英文简历（YC v2 中英对照，PDF 在 `static/works/`） |
| `static/i18n.js` | 中英切换词典（中文为 HTML 真源，英文写入词典；v1/v2/changelog 共用） |

## 版本摘要

- **V2.1（2026-09-25）**：八点观察室区块、Superlinear 见面礼、砺行 LOGO 融入、更新日志页、V1.0 归档
- **V2.0（2026-09-25）**：叙述化重构——导航收敛、三条线作品结构、点击加载视频/3D、lucide 内联图标、系统字体、移动端优先
- **V1.1（2026-09-08）**：视频移出镜像走 [GitHub Releases](https://github.com/PengGangjie/peng-homepage-platform/releases/tag/media-v1) 外链，镜像约 110MB → 约 10MB
- **V1.0（2026-09-02）**：独立 Space 部署上线，中英双语

完整记录见 [CHANGELOG.md](CHANGELOG.md) 与线上 [changelog.html](https://penggangjie.ai-builders.space/changelog.html)。

## 工程说明

- 本仓是独立 AI Builders Space 部署包（FastAPI 托管静态文件），勿并进实训科 / 人生量化 / 沉浮
- 本地真源在 workspace `output/peng-homepage/`，视频等大文件不进镜像（`sync_peng_homepage_static.py` 排除）
- 图标为 lucide v0.544（ISC）内联 SVG sprite，无前端依赖、无构建链

```powershell
# 从真源同步静态
.\venv\Scripts\python.exe scripts\sync_peng_homepage_static.py

# 推仓后部署（含公网可达性验证）
.\venv\Scripts\python.exe scripts\deploy_peng_homepage_space.py
```
