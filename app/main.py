# -*- coding: utf-8 -*-
"""彭岗杰个人主页：纯静态站点，单进程 FastAPI 托管。"""
from __future__ import annotations

from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles

ROOT = Path(__file__).resolve().parents[1]
STATIC = ROOT / "static"

app = FastAPI(title="PengGangjie homepage", docs_url=None, redoc_url=None)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/")
def home() -> FileResponse:
    return FileResponse(STATIC / "index.html")


# SPA 无关：其余路径交给静态目录；缺文件时 404
app.mount("/", StaticFiles(directory=str(STATIC), html=True), name="static")
