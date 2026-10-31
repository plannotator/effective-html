<p align="center">
  <img src="./assets/effective-html-banner.png" width="1280" alt="Effective HTML by Plannotator：HTML 线框图、原型、图表和示意图">
</p>

# Effective HTML

[English](README.md)

一组用于创建实用、自包含 HTML 成果的专用智能体技能，覆盖从低保真线框图到可交互原型。

## 完整成果 + 充分上下文

现代模型能完成很多工作。给它们提供有用的参考资料，并用成果展示你的意图。HTML 几乎可以呈现任何内容，而且往往比大段文字更清楚。提示词只需指向包含上下文的成果、仓库和文件夹。

> [!NOTE]
> 不安装也能使用本仓库。先把它当作参考资料，需要时再安装为技能集。请参阅
> [Effective HTML 指南](https://www.effectivehtml.com/)。

https://github.com/user-attachments/assets/24306977-7f30-44c9-9bff-55f901d557b0

<p align="center">
  <a href="https://github.com/backnotprop/plannotator">
    <img src="./star-plannotator.svg" width="340" alt="在 GitHub 上为 Plannotator 点星">
  </a>
</p>
<p align="center">
使用 <a href="https://github.com/backnotprop/plannotator">Plannotator</a> 渲染并标注本地 HTML。
</p>

## 技能参考

本仓库包含八个可选技能，用于创建实用的视觉成果。

| 技能 | 适用场景 |
| --- | --- |
| [`html`](skills/html/SKILL.md) | 处理范围较广的 HTML 请求、混合型成果、报告、说明文档、演示文稿、落地页和工具，并在需要时转交给专用技能 |
| [`big-pics-little-words`](skills/big-pics-little-words/SKILL.md) | 用大幅视觉元素和精简文字在 HTML 中解释当前主题，同时保留关键细节；复制自 [bro](https://github.com/backnotprop/bro/blob/main/skills/big-pics-little-words/SKILL.md) |
| [`one-pager`](skills/one-pager/SKILL.md) | 制作单页：一个 HTML 页面，用大幅图片和精简文字，尽早与队友分享想法，或为他们回顾已完成的工作；同一技能也收录于 [bro](https://github.com/backnotprop/bro) |
| [`design-artifact`](skills/design-artifact/SKILL.md) | 为任何 HTML 成果提供贴合主题的创意方向，同时避免套用固定的视觉风格 |
| [`html-wireframe`](skills/html-wireframe/SKILL.md) | 用低保真布局方案测试内容、层级、导航、流程和响应式结构 |
| [`html-prototype`](skills/html-prototype/SKILL.md) | 创建包含真实状态、交互、键盘支持和响应式行为的可用原型 |
| [`html-plan`](skills/html-plan/SKILL.md) | 创建计划、路线图、发布安排和实施步骤，同时保留源材料中的既定要求 |
| [`html-diagram`](skills/html-diagram/SKILL.md) | 创建架构图、时序图、流程图、状态图、层级图、时间线图和系统图 |

实用指南：[面向编程智能体的 HTML 线框图和原型](https://docs.plannotator.ai/learn/code-context/html-wireframes-and-prototypes-for-coding-agents)。

## 安装

当你希望智能体把这些参考资料作为可复用的工作流使用时，安装整个技能集：

```bash
npx skills add plannotator/effective-html
```

列出或安装单个技能：

```bash
npx skills add plannotator/effective-html --list
npx skills add plannotator/effective-html --skill big-pics-little-words
npx skills add plannotator/effective-html --skill one-pager
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

## 技能如何协作

这些技能把创意自由和可靠性分开处理：

- 视觉方向来自对话、项目、受众和主题。
- `design-artifact` 提供可复用的设计流程，但不规定重复使用的视觉风格。
- 线框图刻意保持未完成感，让评审者专注于结构。
- 原型实现一条可信的流程及其相关状态。
- 计划保留源材料中的既定要求。
- 示意图会选择适合所表达关系的视觉模型和渲染方式。
- 每项成果都应具备响应式布局和无障碍支持，能够独立运行，并在浏览器中完成验证。

详细指导只放在需要它的地方。通用的 `html` 技能负责分配工作，`design-artifact` 提供可选的创意方向，专用技能负责各自的保真度和行为要求。每个技能也可以独立使用。

本项目的灵感来自 Thariq Shihipar 的 [The unreasonable effectiveness of HTML](https://thariqs.github.io/html-effectiveness)。

<p align="center">
  <a href="https://github.com/plannotator/tot">
    <img src="./use-tot.svg" width="300" alt="使用 tot 分享 HTML">
  </a>
</p>
<p align="center">
使用 <a href="https://github.com/plannotator/tot">tot</a> 为 HTML 文件创建可分享的链接。
</p>
