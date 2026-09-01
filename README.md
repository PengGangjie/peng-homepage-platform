# PengGangjie · 个人主页

公开页：https://penggangjie.ai-builders.space（主机名大小写不敏感，亦可写 PengGangjie.ai-builders.space）

本地真源在 workspace `output/peng-homepage/`。本仓是独立 Space 部署包（FastAPI 托管静态文件），勿并进实训科 / 人生量化 / 沉浮。

```powershell
# 从真源同步静态
.\venv\Scripts\python.exe scripts\sync_peng_homepage_static.py

# 推仓后部署
.\venv\Scripts\python.exe scripts\deploy_peng_homepage_space.py
```
