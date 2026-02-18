# New Tailwind5 Pro

[![npm version](https://img.shields.io/npm/v/tailwind5-pro.svg)](https://www.npmjs.com/package/tailwind5-pro)
[![npm downloads](https://img.shields.io/npm/dm/tailwind5-pro.svg)](https://www.npmjs.com/package/tailwind5-pro)
[![License](https://img.shields.io/npm/l/tailwind5-pro.svg)](LICENSE)

Next-generation Tailwind CSS engine for Turbopack and SWC.

Adds powerful features inspired by UnoCSS, modern CSS specs, and future Tailwind capabilities — fully compatible with Tailwind CSS v4+ and Next.js 15+.

---

# 📑 Table of Contents

* [✨ Features](#-features)

  * [Variant Grouping](#variant-grouping)
  * [Modern CSS Support](#modern-css-support)
  * [Tailwind Color Mixing](#tailwind-color-mixing)
  * [Gradient Mixing](#gradient-mixing)
  * [Iconify Icons Support](#iconify-icons-support)
  * [CSS Shortcuts](#css-shortcuts)
  * [Turbopack Native Support](#turbopack-native-support)

* [📦 Installation](#-installation)

* [⚙️ Setup](#️-setup-nextjs)

* [🧩 Optional Setup](#-optional-setup)

  * [Install Tailwind CSS](#install-tailwind-css)
  * [Install Icons](#install-icons)
  * [Install Typography Plugin](#install-typography-plugin-optional)

* [🧪 Examples](#-examples)

  * [Variant grouping](#variant-grouping-1)
  * [Nested grouping](#nested-grouping)
  * [Anchor positioning](#anchor-positioning)
  * [Color mixing](#color-mixing)
  * [Icons](#icons)
  * [Shortcuts](#shortcuts)

* [🧠 How it works](#-how-it-works)

* [🚀 Performance](#-performance)

* [📚 Compatibility](#-compatibility)

* [🧩 Supported Features Summary](#-supported-features-summary)

* [🛠 Example Project](#-example-project)

* [📄 License](#-license)

* [👨‍💻 Author](#-author)

* [⭐ Future Plans](#-future-plans)

* [💬 Contributing](#-contributing)

---

# ✨ Features

## Variant Grouping

Write cleaner, grouped variants:

```jsx
<div className="hover:(bg-black text-white)" />
```

Compiles to:

```jsx
<div className="hover:bg-black hover:text-white" />
```

Supports nested variants:

```jsx
<div className="sm:(hover:(bg-black text-white))" />
```

---

## Modern CSS Support

Supports latest CSS features including Anchor Positioning API, color-mix, animation timelines, and more.

Example:

```jsx
<div className="anchor:popover" />
```

Compiles to:

```jsx
<div className="[anchor-name:--popover]" />
```

Supported modern CSS:

* anchor-name
* position-anchor
* anchor-scope
* animation-timeline
* animation-range
* corner-shape
* image-rendering
* image-resolution
* color-mix()
* clamp()
* dynamic-range-limit-mix()

Example:

```jsx
<div className="hover:(pos-anchor:popover)" />
```

---

## Tailwind Color Mixing

Mix Tailwind colors directly:

```jsx
<div className="text-mix-(red-500 blue-500)" />
```

Compiles to:

```css
color: color-mix(in oklch, var(--tw-color-red-500), var(--tw-color-blue-500));
```

Supported:

```jsx
text-mix-(red-500 blue-500)
bg-mix-(red-500 blue-500)
border-mix-(red-500 blue-500)
```

---

## Gradient Mixing

```jsx
<div className="bg-gradient-to-r from-mix-(red-500 blue-500) to-blue-500" />
```

---

## Iconify Icons Support

Use any icon from:

https://icon-sets.iconify.design/

Example:

```jsx
<div className="i-lucide-home text-xl text-red-500" />
```

Install icon set:

```bash
npm install @iconify-json/lucide
```

Supported icon syntax:

```jsx
i-lucide-home
i-tabler-user
i-mdi-heart
i-ph-anchor
```

Icons inherit color automatically:

```jsx
<div className="i-lucide-home text-blue-500 text-2xl" />
```

---

## CSS Shortcuts

Define reusable utilities in CSS:

```css
@shortcut button {
  @apply bg-red-500 text-white px-4 py-2;
}
```

Use:

```jsx
<div className="button" />
```

Works with variants:

```jsx
<div className="hover:(button)" />
```

---

## Turbopack Native Support

Runs directly in SWC — no PostCSS required.

Fast builds.

Works with:

* Next.js 15+
* Turbopack
* SWC

---

# 📦 Installation

```bash
npm install tailwind5-pro
```

or

```bash
bun add tailwind5-pro
```

---

# ⚙️ Setup (Next.js)

next.config.js:

```js
module.exports = {
  experimental: {
    swcPlugins: [
      ["tailwind5-pro", {}]
    ]
  }
}
```

---

# 🧩 Install Tailwind CSS

```bash
npm install tailwindcss
```

---

# 🧩 Install Typography Plugin (optional)

```bash
npm install @tailwindcss/typography
```

---

# 🧩 Install Icons (optional)

Example:

```bash
npm install @iconify-json/lucide
```

Browse icons:

https://icon-sets.iconify.design/

---

# 🧪 Examples

## Variant grouping

```jsx
<div className="hover:(bg-black text-white)" />
```

---

## Nested grouping

```jsx
<div className="sm:(hover:(bg-red-500 text-white))" />
```

---

## Anchor positioning

```jsx
<div className="anchor:popover" />
```

---

## Color mixing

```jsx
<div className="text-mix-(red-500 blue-500)" />
```

---

## Icons

```jsx
<div className="i-lucide-home text-xl text-blue-500" />
```

---

## Shortcuts

CSS:

```css
@shortcut button {
  @apply bg-red-500 text-white px-4 py-2;
}
```

JSX:

```jsx
<div className="button" />
```

---

# 🧠 How it works

New Tailwind5 Pro uses SWC transforms to convert enhanced syntax into standard Tailwind-compatible classes.

No runtime overhead.

Works at compile time.

Pipeline:

```
JSX
↓
SWC transform
↓
Tailwind CSS engine
↓
Generated CSS
```

---

# 🚀 Performance

* Zero runtime cost
* Compile-time transforms
* Turbopack optimized
* Fast incremental rebuilds

---

# 📚 Compatibility

Compatible with:

* Tailwind CSS v4+
* Next.js 15+
* Turbopack
* SWC

---

# 🧩 Supported Features Summary

| Feature            | Supported |
| ------------------ | --------- |
| Variant grouping   | ✅         |
| Nested variants    | ✅         |
| Modern CSS         | ✅         |
| Anchor positioning | ✅         |
| Color mix          | ✅         |
| Gradient mix       | ✅         |
| Iconify icons      | ✅         |
| CSS shortcuts      | ✅         |
| Turbopack support  | ✅         |

---

# 🛠 Example Project

```jsx
export default function Page() {
  return (
    <div className="p-10">

      <button className="button hover:(bg-black)">
        Click
      </button>

      <div className="i-lucide-home text-blue-500 text-2xl" />

      <div className="text-mix-(red-500 blue-500)">
        Mixed color
      </div>

    </div>
  )
}
```

---

# 📄 License

MIT License

---

# 👨‍💻 Author

Radosław Adamczyk

---

# ⭐ Future Plans

* Dynamic utilities
* Preset system
* Full UnoCSS compatibility layer
* Container queries shortcuts
* Animation presets

---

# 💬 Contributing

Contributions welcome.
