# PengGangjie · 个人主页

公开页：https://penggangjie.ai-builders.space（主机名大小写不敏感）

高校讲师 / 个人开发者彭岗杰的个人主页：作品（实训科平台、乡土民居数字保存、沉浮 EP、砺行·日省、格物记 OS）、设计作品集、职业路径、教学与凭据、八点观察室节目入口（B 站 @彭八PUMBAA / 公众号 彭八八点ROOM），以及 Superlinear 社区 30 天体验见面礼。

## 页面

| 文件 | 说明 |
|---|---|
| `static/index.html` | 主页 V2（叙述化重构 + 八点观察室/见面礼/品牌图标） |
| `static/v1.html` | V1.0 留档（noindex），主页页脚有入口 |
| `static/resume.html` | 英文简历（YC v2 中英对照，PDF 在 `static/works/`） |
| `static/i18n.js` | 中英切换词典（中文为 HTML 真源，英文写入词典；v1/v2 共用） |

更新日志（`changelog.html`）**仅本地可看**：真源在 `output/peng-homepage/changelog.html`，同步脚本已排除、不部署上线（2026-09-25 用户要求）；仓库内版本记录见 [CHANGELOG.md](CHANGELOG.md)。

## 版本摘要

- **V2.6（2026-09-25）**：公众号卡文章精选（截图+链接）、教学区删课题数据条
- **V2.5（2026-09-25）**：砺行橙色 App 图标、页脚更新日期时效信号；Supastack 可移植模式全部落地
- **V2.4（2026-09-25）**：教学区删年课时、节目区改最新一期视频卡（BV1bChC6DEQq）、公众号卡位修正
- **V2.3（2026-09-25）**：品牌图标（oil-icon 管线九枚「墨线菱形」，区块节点换装；功能图标保持 lucide）
- **V2.2（2026-09-25）**：Hero「已经在跑」状态条、见面礼 ✓ 清单、联系区 FAQ、作品卡结论先行、节目区白底分层
- **V2.1（2026-09-25）**：八点观察室区块、Superlinear 见面礼、砺行 LOGO 融入、更新日志页、V1.0 归档
- **V2.0（2026-09-25）**：叙述化重构——导航收敛、三条线作品结构、点击加载视频/3D、lucide 内联图标、系统字体、移动端优先
- **V1.1（2026-09-08）**：视频移出镜像走 [GitHub Releases](https://github.com/PengGangjie/peng-homepage-platform/releases/tag/media-v1) 外链，镜像约 110MB → 约 10MB
- **V1.0（2026-09-02）**：独立 Space 部署上线，中英双语

完整记录见 [CHANGELOG.md](CHANGELOG.md) 与线上 [changelog.html](https://penggangjie.ai-builders.space/changelog.html)。

## 工程说明

- 本仓是独立 AI Builders Space 部署包（FastAPI 托管静态文件），勿并进实训科 / 人生量化 / 沉浮
- 本地真源在 workspace `output/peng-homepage/`，视频等大文件不进镜像（`sync_peng_homepage_static.py` 排除）
- 图标为 lucide v0.544（ISC）内联 SVG sprite，无前端依赖、无构建链
- 品牌字体国文正楷以 WOFF2 子集提供（`static/fonts/kai-brand.woff2`，仅展示位字符）；**原始 TTF 有商用授权但勿提交进本仓或任何公开目录**；改品牌位文案后重跑 `scripts/build_kai_subset.py`（真源在 E 盘八点观察室/封面/）

```powershell
# 从真源同步静态
.\venv\Scripts\python.exe scripts\sync_peng_homepage_static.py

# 推仓后部署（含公网可达性验证）
.\venv\Scripts\python.exe scripts\deploy_peng_homepage_space.py
```
