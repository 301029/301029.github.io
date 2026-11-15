# 个人网站 · 记忆

> 每次会话开始先读这个文件；每次会话结束前把「已定的决定 / 未完成的待办 / 关键文件」写回这里。
> 规则：固定区不轻易改；变更区只追加，新的在最上面，一行一条。

## 固定区

- 站主：Luther.
- 站名：**luther**（全小写，2026-11-15 定）
- 线上地址：**https://301029.github.io/**（2026-11-15 上线）
- 仓库：`301029/301029.github.io`（GitHub，公开）
- 目录：`G:\a_PROGRAM\123456\blog_web`（这就是工作区根，网站文件直接放这里）
- 用途：放自己的东西（博客 / 作品 / 关于我），不用于求职
- 技术路线：先手写 HTML + CSS 做单页 → GitHub Pages 托管 → 要写文章再上 Astro/Hugo
- 明确不做：前端框架、后端、数据库（个人站用不上）
- 托管：GitHub Pages

## 部署备忘（已跑通，下次照做）

- SSH 走 **443 端口**：`C:\Users\lenovo\.ssh\config` 已配 `HostName ssh.github.com` / `Port 443`。22 端口在国内被拒，别改回去。
- 该 config 文件必须是 **LF 换行**，用记事本改会变 CRLF 导致 SSH 忽略整份配置。
- GitHub 用户名 `301029`；仓库名必须正好是 `301029.github.io`，否则 Pages 不给根域名。
- Pages 的 Source 选 **Deploy from a branch** → `main` → `/ (root)`，**不用** GitHub Actions（手写站无构建步骤）。
- 推送前若远端非空（建仓时勾了 README），先 `git pull origin main --allow-unrelated-histories --no-rebase --no-edit`（新版 git 必须显式指定 `--no-rebase`，否则报 divergent branches）。

## 变更区

- 2026-11-15 **站名定为 `luther`**（全小写）。改了 `<title>`、description、og:title/og:description、favicon 里的字母 `L`→`l`、顶栏品牌、h1 大标题、关于段首、页脚版权、README 标题。已在线上验证生效。
- 2026-11-15 **站点上线**：https://301029.github.io/ 。首次推送踩了两个坑：① 仓库实际建成了 `-301029-.github.io`（前后多短横线），改名后才对；② 建仓勾了 README，远端非空，push 被拒，需 `--allow-unrelated-histories --no-rebase` 合并。另修 `.gitignore` 文件名打错（`gitigore`）导致 `.workbuddy/` 差点被公开的险情。最后更新 README 去掉旧仓库名。
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

- 站已上线，可正常访问。剩这些没定：站名要不要换掉 `Luther.`、四个板块要不要增删、铜色配色是否满意。
- 内容还是占位文案，「笔记」「作品」两块是空状态，等真东西填。
- 改动流程已跑通：改文件 → `git add .` → `git commit -m "..."` → `git push`，Pages 一分钟左右自动更新。
