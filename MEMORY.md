# 个人网站 · 记忆

> 每次会话开始先读这个文件；每次会话结束前把「已定的决定 / 未完成的待办 / 关键文件」写回这里。
> 规则：固定区不轻易改；变更区只追加，新的在最上面，一行一条。

## 固定区

- 站主：Luther.
- 目录：`G:\a_PROGRAM\123456\blog_web`（这就是工作区根，网站文件直接放这里）
- 用途：放自己的东西（博客 / 作品 / 关于我），不用于求职
- 技术路线：先手写 HTML + CSS 做单页 → GitHub Pages 托管 → 要写文章再上 Astro/Hugo
- 明确不做：前端框架、后端、数据库（个人站用不上）
- 托管：GitHub Pages，先白嫖 `xxx.github.io`，域名以后再说

## 变更区

- 2026-11-15 按主人逐行指出的 8 处做了修订：`script.js` 系统偏好改查 dark、按钮补 `aria-pressed`（初始化+点击都同步，实测 true→false→true）、顶部注释改口头语气；`index.html` 内联脚本 `localStorage` 包 try/catch（已模拟隐私模式验证不崩）、补 `og:title` / `og:description`；`style.css` 浅色 `--accent-soft` 0.1→0.15、字体栈补 `Noto Serif CJK SC`。
- 2026-11-15 写出第一版单页：`index.html` + `style.css` + `script.js`（原生三件套，零依赖）。四板块：关于 / 现在 / 笔记 / 作品；双主题（深色为默认，浅色可切，选择存 localStorage，没选过则跟随系统）。已过语法校验 + 无头浏览器深/浅/窄屏三套渲染自检。
- 2026-11-15 建好 `AGENTS.md` 与 `MEMORY.md`，目录还是空的，第一行代码未写。
- 2026-11-15 已聊过的方案要点：三步走（HTML/CSS → Git+Pages → 生成器）；第一篇先做静态单页。

## 待定

- 站叫什么名字（域名/标题）—— 暂用 `Luther.`，可改
- 放哪些板块 —— 暂定 关于 / 现在 / 笔记 / 作品，可增删
- 配色和字体取向 —— 已做双主题，默认深色暖铜色（#d9a15b）+ 衬线标题；要换只改 `style.css` 顶部变量
- 是否要中文排版优化 —— 已做：行高 1.75、段间留空不缩进、`text-autospace` 混排空隙

## 关键文件

- `index.html` —— 整站结构与文案，改内容只动这里
- `style.css` —— 全部样式；第 1 节是设计变量（配色/字号/间距），换风格从这儿改
- `script.js` —— 只干三件事：主题切换、顶栏滚动分割线、页脚年份
- `AGENTS.md` —— 施工规矩
- `assets/` —— 还没建，放图片时再建

## 下一步

- **站主决定自己动手部署**（2026-11-15），路线参考知乎《一小时搭建完自己的个人网站》（zhuanlan.zhihu.com/p/78467553），但**只取 Git 与 Pages 部分，Hexo/Node/主题/Actions 全部跳过**，因为本站是手写成品 HTML，无需构建。
- Pages 的 Source 要选「Deploy from a branch」→ `main` → `/ (root)`，**不是**文章里写的 GitHub Actions。
- 仓库名必须是 `<用户名>.github.io`（全小写），站点才会落在根域名；Public 才能免费用 Pages。
- 已确认环境：git 2.55.0 已装，`~/.ssh` 不存在，`user.name`/`user.email` 未配 → 从配身份、生成密钥开始。
- 待办：`.gitignore` 需排除 `.workbuddy/`（内部工作日志，不宜公开）。
- MEMORY.md / AGENTS.md 是否公开未定，倾向保留（能体现项目组织方式）。
