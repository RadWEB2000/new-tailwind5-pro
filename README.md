# **New Tailwind5 Pro**

Variant grouping plugin for Tailwind CSS v4 powered by SWC.
Works natively with Next.js and Turbopack. No PostCSS required.

This plugin brings UnoCSS-style variant grouping syntax to Tailwind CSS v4.

---

## Features

* ✅ Variant grouping
* ✅ Nested variant grouping
* ✅ Custom variants support
* ✅ Arbitrary variants support
* ✅ Template literal support
* ✅ Zero runtime
* ✅ No PostCSS required
* ✅ Fully compatible with Tailwind CSS v4
* ✅ Fully compatible with Turbopack
* ✅ Fully compatible with Next.js App Router and RSC

---

## Example

### Input

```jsx
<div className="
  flex
  hover:(bg-black text-white)
  sm:(hover:(bg-white text-black))
  data-[state=open]:(opacity-100 scale-100)
" />
```

### Output (automatically transformed)

```jsx
<div className="
  flex
  hover:bg-black hover:text-white
  sm:hover:bg-white sm:hover:text-black
  data-[state=open]:opacity-100 data-[state=open]:scale-100
" />
```

---

## Supported syntax

### Basic grouping

```html
hover:(bg-black text-white)
```

---

### Multiple variants

```html
sm:hover:(bg-black text-white)
```

---

### Nested grouping

```html
sm:(hover:(bg-black text-white))
```

---

### Custom variants

```html
data-[state=open]:(bg-black text-white)
group-hover:(opacity-100)
supports-(display:grid):(grid gap-4)
```

---

### Arbitrary variants

```html
[@media(min-width:500px)]:(bg-red-500)
```

---

### Template literals

```jsx
<div className={`hover:(bg-black text-white)`} />
```

---

## Installation

```bash
npm install tailwind-variant-grouping
```

or

```bash
pnpm add tailwind-variant-grouping
```

or

```bash
yarn add tailwind-variant-grouping
```

---

## Usage with Next.js (Turbopack)

Add the plugin to your `next.config.js`:

```js
module.exports = {
  experimental: {
    swcPlugins: [
      ["tailwind-variant-grouping", {}]
    ]
  }
}
```

That's it. No PostCSS configuration needed.

---

## Requirements

* Next.js 15+
* Tailwind CSS v4+
* Turbopack or SWC

---

## Why use this plugin?

Tailwind CSS v4 does not support variant grouping syntax out of the box.

This plugin enables UnoCSS-style grouping while preserving Tailwind’s native engine and performance.

Example comparison:

Without plugin:

```html
hover:bg-black hover:text-white
sm:hover:bg-white sm:hover:text-black
```

With plugin:

```html
hover:(bg-black text-white)
sm:(hover:(bg-white text-black))
```

Cleaner. More readable. Easier to maintain.

---

## Performance

This plugin runs at compile time using SWC.

* No runtime overhead
* No client-side cost
* No impact on bundle size

---

## Compatibility

Fully compatible with:

* Tailwind CSS v4
* Next.js App Router
* React Server Components
* Turbopack
* SWC

---

## Roadmap

Planned features:

* Shortcuts support
* clsx / cn support
* Variable extraction support
* Rust native SWC plugin version for maximum performance

---

## License

MIT

---

## Author

Radosław Adamczyk (AdamczykTOP)

---

## Contributing

Contributions are welcome.
Open an issue or submit a pull request.

---

## Inspiration

Inspired by UnoCSS variant grouping.
