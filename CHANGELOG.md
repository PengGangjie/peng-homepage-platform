# 更新日志

> 站点：https://penggangjie.ai-builders.space · 线上版：[changelog.html](static/changelog.html)

## V2.6 · 2026-09-25

- 公众号卡改「文章精选」：《把 AI 用成产线，再把这件事讲给二十位OPC创业者听》文章截图 + 直达链接（mp.weixin.qq.com/s/_uVeeaCHJn4RP_n_P6LWng），二维码行保留为扫码关注
- 教学区移除科研课题数据条（保留：国赛 5+4 / 学生获奖 40+），两列排布

## V2.5 · 2026-09-25

- 砺行标识换橙色 App 图标（与 iOS TestFlight 内测版同款，取自发布截图 256px；作品卡角标改圆角直出、公众号卡 logo 同步）
- 页脚「更新日志」链接带更新日期（Supastack 时效信号模式）
- Supastack 复查收官：可移植模式全部落地（宣言句标题 / 信任条 / ✓ 清单 / FAQ / 结论先行 / 状态徽章 / 收口 CTA / 时效信号）

## V2.4 · 2026-09-25

- 教学区移除年课时数据（数据条改三项：国赛 5+4 / 学生获奖 40+ / 省厅课题 1）；路径区同步删去课时数字
- 节目区改「最新一期」视频卡：AI 不是没用，是你没用对｜四组对照（BV1bChC6DEQq），封面取自 B站、播放徽章 + 时长 7:30 + 直达链接；B站主页链接降为次级
- 公众号侧卡不再拉伸补空；话题截图与链接位已预留（待话题链接）
- 公众号换用最新版官方二维码（works/gzh-qr.png，新旧码指向已核验一致）；见面礼卡重排——品牌礼物图标入卡，公众号卡加框对齐
- 修复：视频卡内嵌套链接导致浏览器解析断链、布局散架——次级链接移出主卡

## V2.3 · 2026-09-25

- 品牌图标上线：oil-icon 管线（mxai seedream-5.0-pro 出 3×3 底片 → 切片去背 → 品红 QA → 96px 归一化）生成九枚「墨线菱形」定制图标
- 风格 spec 冻结于 `真源 brand-icons/style-spec.json`：#141414 墨线（直角平头）+ #f15a24 小菱形母题（与 brand-mark/favicon 同源），与 lucide 功能图标（2 单位线）同族
- 集成：方法区三枚（method/delivery/horizon）、作品三线章节（school/field/hand）、成片（film）换白瓷片品牌图标；节目区加电视机角标（show）；gift 备用（15px 内联位保持 lucide，栅格图小尺寸会糊）
- 体积：9 枚共约 38KB（96px PNG，懒加载）

## V2.2 · 2026-09-25

- Hero 新增「已经在跑」状态条：实训科平台 / 砺行·日省 / 沉浮 EP / 格物记 OS 四套在线系统前置证明（Supastack "Built with familiar tools" 模式）
- 见面礼改 ✓ 清单（不绑卡 / 自助开通 / 权益内容）；联系区新增「常见三问」手风琴（内训 / 改造 / 合作，Supastack 页脚 FAQ 模式）
- 作品卡文案改「结论先行」：乡土民居 / 沉浮 / 砺行 / 格物记 四卡先给判断再给功能（中英同步）
- 节目区改白底（#fff + 顶部细线），与教学区纸色分层；「更新中」徽章在浅底上改深绿可读

## V2.1 · 2026-09-25

- 新增「八点观察室」区块：B 站 @彭八PUMBAA（space.bilibili.com/107109569）视频入口 + 公众号「彭八八点ROOM」二维码关注卡；口号「工作交给机器，人生握在手里」
- 联系区新增见面礼：Superlinear 社区 30 天体验卡（stay.superlinear.academy/invite/pumbaa，自助领取、不绑卡）
- 砺行 LOGO 融入：砺行·日省 作品卡角标 + 公众号卡标识（全平台统一 LOGO 口径）
- 品牌字体：标题与金句位（h1/h2/quote/标语/菜单大字）启用国文正楷——WOFF2 子集 `fonts/kai-brand.woff2`（304 字符 / 342KB），生成脚本 `scripts/build_kai_subset.py`；原始 TTF（36MB）不进公开仓，防整字库被下载
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
