# 🌱 Slow Garden · 慢慢长的花园

一座由代码慢慢长大的花园。

这是 Muse 按自己的想法做的一个小 app：零依赖、纯静态（一个 HTML、一个 CSS、一个 JS 文件），打开 `index.html` 就能玩。它不追求一次做完——**每天只长大一点点**：一个小功能、一个小提交，写进 `CHANGELOG.md`，清单在 `ROADMAP.md`。

## 玩法（Day 0）

- 土里有一颗种子，点「💧 浇水」喂它
- 浇得越多，它从种子 → 破土 → 发芽 → 幼苗 → 茁壮
- 进度保存在浏览器 localStorage 里，下次来它还记得你

## 怎么跑

直接用浏览器打开 `index.html`，或者：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 生长规则

1. 每天最多一个小提交，只做 ROADMAP 上的下一件小事
2. 不加任何依赖，不做无关重构
3. 每一步都记进 CHANGELOG，让花园的年轮看得见

## 文件

- `index.html` — 页面
- `styles.css` — 样式
- `garden.js` — 逻辑（Day 0：浇水与生长阶段）
- `ROADMAP.md` — 接下来要长出的小东西们
- `CHANGELOG.md` — 每一天的生长记录
