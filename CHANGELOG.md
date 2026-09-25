# 更新日志

> 站点：https://penggangjie.ai-builders.space · 线上版：[changelog.html](static/changelog.html)

## V2.1 · 2026-09-25

- 新增「八点观察室」区块：B 站 @彭八PUMBAA（space.bilibili.com/107109569）视频入口 + 公众号「彭八八点ROOM」二维码关注卡；口号「工作交给机器，人生握在手里」
- 联系区新增见面礼：Superlinear 社区 30 天体验卡（stay.superlinear.academy/invite/pumbaa，自助领取、不绑卡）
- 砺行 LOGO 融入：砺行·日省 作品卡角标 + 公众号卡标识（全平台统一 LOGO 口径）
- 新增 `changelog.html` 站点更新日志页（noindex）；sitemap 收录
- V1.0 完整留档为 `v1.html`（noindex + canonical 指向自身），主页页脚提供入口
- 补 favicon（内联 SVG 橙菱形），消除 404
- i18n.js：标题改为按页读取（`data-title-en`），子页面可独立切换标题；V2.1 词条

## V2.0 · 2026-09-25

- 整页叙述化重构（参考 supastack.dev）：短句宣言标题（「先看在跑的。」「能查证的，才写上来。」）、作品按三条线（在学校里 / 在田野里 / 在自己手里）、路径改时间线、教学加数据条、证书折叠收纳
- 导航收敛：桌面 3 锚点 + 简历主按钮 + EN；移动端品牌 + 简历 + 汉堡全屏菜单（触控目标 ≥44px）
- 性能（针对 1.x 踩坑）：
  - 视频改 poster + 点击加载 facade，点击前零视频字节；Sketchfab 3D 同样点击加载
  - 去掉 Google Fonts（Montserrat）改系统字体栈（大陆移动端可达性）
  - 全部折叠区图片 `loading="lazy"`；动画仅 IntersectionObserver 一次性进场，`prefers-reduced-motion` 关闭
- 图标切换 lucide v0.544 内联 SVG sprite（零 JS 零外链；不用 lucide-react，保持无构建链）

## V1.2 · 2026-09-14

- 新增 buildingSMART International Foundation 国际认证证书卡（Certificate ID BgB5XZlAbY，2026-09-14）

## V1.1 · 2026-09-08

- 三个视频（三月三 47MB / 建筑更新 27MB / 办公展厅 26MB）移出 Docker 镜像，改走 GitHub Releases `media-v1` 外链（ghfast 代理 + 直连双源）；镜像约 110MB → 约 10MB，冷启动显著缩短

## V1.0 · 2026-09-02

- 独立部署上线 penggangjie.ai-builders.space（Space service `penggangjie`）
- 中英双语切换（i18n.js + data-i18n，偏好存 localStorage）
- 英文简历页 resume.html（YC v2 中英对照 + PDF）

## 立项 · 2026-09-01

- 本地首版：暗色 + 焦橙版式（Plenoi 摄影站参考），作品 / 路径 / 教学信息架构
