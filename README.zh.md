<p align="center">
  <img src="./assets/effective-html-banner.png" width="1280" alt="Effective HTML by Plannotator — HTML 线框图、视觉稿、原型、图表和示意图">
</p>

# Effective HTML

专注的AI agent技能，用于创建有用的、不依靠外部资源的 HTML 项目，从草图到可交互原型。

## 详细的输出 + 丰富上下文

现代模型能力很强。如为它们提供充足的有效参考，并利用HTML示例来表达你的意图。HTML几乎可以可视化任何内容，且往往比一大段文字更清晰。你的提示词只需指向携带上下文的资源、仓库和文件夹即可。


> 你无需安装任何东西即可使用本项目 可参阅它来学习什么是好的HTML
> [Effective HTML 指南](https://www.effectivehtml.com/)。

https://github.com/user-attachments/assets/24306977-7f30-44c9-9bff-55f901d557b0

<p align="center">
  <a href="https://github.com/backnotprop/plannotator">
    <img src="./star-plannotator.svg" width="340" alt="在 GitHub 上为 Plannotator 点星">
  </a>
</p>
<p align="center">
使用 <a href="https://github.com/backnotprop/plannotator">Plannotator</a> 渲染并标注本地的 HTML。
</p>

## skills参考

本仓库包含六个可选的skill，用于创建实用的视觉项目。

| skill | 用途 |
| --- | --- |
| [`html`](skills/html/SKILL.md) | 广阔的 HTML 请求、报告、解说、演示、单页、工具，以及路由 专家技能 |
| [`design-artifact`](skills/design-artifact/SKILL.md) | 为任意 HTML 项目提供面向主题的创作方向，而不套用ai 或大众化的既有风格 |
| [`html-wireframe`](skills/html-wireframe/SKILL.md) | 简易布局方向，用于测试内容、层级、导航、流程和响应式结构 |
| [`html-prototype`](skills/html-prototype/SKILL.md) | 具有真实状态、交互、键盘支持与响应式行为的复杂原型 |
| [`html-plan`](skills/html-plan/SKILL.md) | 保留AI规划的方案 保证不会改变主意 |
| [`html-diagram`](skills/html-diagram/SKILL.md) | 提供架构图、时序图、流程图、状态图、层级图、时间线图和系统图的支持 |

实用指南：[面向coding Agent的 HTML 线框图和演示](https://docs.plannotator.ai/learn/code-context/html-wireframes-and-prototypes-for-coding-agents)

## 安装

当你希望这些参考以可重复的工作流形式提供给智能体时，安装本集合：

```bash
npx skills add plannotator/effective-html
```

列出或安装单个skill：

```bash
npx skills add plannotator/effective-html --list
npx skills add plannotator/effective-html --skill design-artifact
npx skills add plannotator/effective-html --skill html-wireframe
npx skills add plannotator/effective-html --skill html-prototype
```

### Claude Code 插件

```text
/plugin marketplace add plannotator/effective-html
/plugin install plannotator-effective-html@effective-html
```

### Codex 插件

```bash
codex plugin marketplace add plannotator/effective-html
codex plugin add plannotator-effective-html@effective-html
```

## skill的工作原理

这些skill将创作自由与可靠性分开：

- 视觉方向源自对话、项目、受众与主题。
- `design-artifact` 提供一套可复用的设计流程，而不指定重复的视觉效果。
- 线框图刻意保持简约，以便用户聚焦于结构。
- 原型实现一条可行的流程及其相关状态。
- 方案保留源自ai的承诺。
- 示意图契合说明关系的可视化模型与渲染方式。
- 每个项目均具有响应式 可行 自包含的特点，并经过浏览器验证。

详细指南只放在有需要的地方。广阔的 `html` skill负责路由工作，`design-artifact` 提供可选的创作方向，`plan`掌控保真。每个skill均可独立使用。

本项目深受 Thariq Shihipar 的 [HTML的通用性](https://thariqs.github.io/html-effectiveness) 启发。

<p align="center">
  <a href="https://github.com/plannotator/tot">
    <img src="./use-tot.svg" width="300" alt="使用 tot 分享 HTML">
  </a>
</p>
<p align="center">
使用 <a href="https://github.com/plannotator/tot">tot</a> 为 HTML 文件创建可分享的链接。
</p>
