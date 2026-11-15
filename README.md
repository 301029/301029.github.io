# Luther.

个人主页。手写 HTML + CSS，无框架、无构建。

- 站点：https://301029.github.io/
- 内容：关于 / 现在 / 笔记 / 作品

## 文件

| 文件 | 作用 |
|---|---|
| `index.html` | 站点结构与文案 |
| `style.css` | 全部样式，第 1 节是设计变量 |
| `script.js` | 主题切换、顶栏分割线、页脚年份 |
| `AGENTS.md` | 项目的施工约定 |
| `MEMORY.md` | 进度与决策记录 |

## 本地预览

直接用浏览器打开 `index.html`，或起一个静态服务：

```bash
python -m http.server 8000
```

## 部署

推送到 `main` 分支，GitHub Pages 自动发布（Source: Deploy from a branch → main → / root）。
