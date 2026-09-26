# -*- coding: utf-8 -*-
"""彭岗杰个人主页：纯静态站点，单进程 FastAPI 托管。"""
from __future__ import annotations

from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

ROOT = Path(__file__).resolve().parents[1]
STATIC = ROOT / "static"

app = FastAPI(title="PengGangjie homepage", docs_url=None, redoc_url=None)
app.add_middleware(GZipMiddleware, minimum_size=800)


@app.middleware("http")
async def cache_control(request: Request, call_next):
    """静态资源发一天浏览器缓存；HTML 每次回源验证（etag 304）。"""
    response = await call_next(request)
    path = request.url.path
    if path.startswith(("/fonts", "/works", "/icons")):
        response.headers.setdefault("Cache-Control", "public, max-age=86400")
    elif path == "/" or path.endswith(".html"):
        response.headers.setdefault("Cache-Control", "no-cache")
    return response


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/")
def home() -> FileResponse:
    return FileResponse(STATIC / "index.html")


# SPA 无关：其余路径交给静态目录；缺文件时 404
app.mount("/", StaticFiles(directory=str(STATIC), html=True), name="static")
