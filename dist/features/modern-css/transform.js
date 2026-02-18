"use strict";
/**
 * Modern CSS Feature Transformer
 *
 * Supports modern CSS properties and functions including:
 *
 * Anchor Positioning:
 *  anchor:popover
 *  position-anchor:popover
 *  pos-anchor:popover
 *  anchor-scope:all
 *  position-area:center
 *
 * Animation Timeline:
 *  timeline:scroll()
 *  animation-range:entry
 *
 * Modern Functions:
 *  color-mix-(in srgb, red 50%, blue)
 *  clamp-(1rem, 2vw, 3rem)
 *  dynamic-range-limit-mix-(...)
 *
 * Image:
 *  image-rendering:pixelated
 *  image-resolution:300dpi
 *
 * Corner shape:
 *  corner:round
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformModernCSS = transformModernCSS;
function resolveTailwindColor(color) {
    // already CSS var
    if (color.startsWith("var(")) {
        return color;
    }
    // already CSS function
    if (color.includes("(")) {
        return color;
    }
    // Tailwind color
    if (/^[a-z]+-\d{2,3}$/.test(color)) {
        return `var(--tw-color-${color})`;
    }
    return color;
}
function transformModernCSS(input) {
    if (!input || typeof input !== "string") {
        return input;
    }
    let result = input;
    /*
     |--------------------------------------------------------------------------
     | Anchor Positioning API
     |--------------------------------------------------------------------------
     */
    /**
     * anchor:popover
     * → [anchor-name:--popover]
     */
    result = result.replace(/\banchor:([^\s]+)/g, (_, value) => `[anchor-name:--${value}]`);
    /**
     * position-anchor:popover
     * → [position-anchor:--popover]
     */
    result = result.replace(/\bposition-anchor:([^\s]+)/g, (_, value) => `[position-anchor:--${value}]`);
    /**
     * alias: pos-anchor:popover
     */
    result = result.replace(/\bpos-anchor:([^\s]+)/g, (_, value) => `[position-anchor:--${value}]`);
    /**
     * anchor-scope
     */
    result = result.replace(/\banchor-scope:([^\s]+)/g, (_, value) => `[anchor-scope:${value}]`);
    /**
     * position-area
     */
    result = result.replace(/\bposition-area:([^\s]+)/g, (_, value) => `[position-area:${value}]`);
    /**
     * position-try
     */
    result = result.replace(/\bposition-try:([^\s]+)/g, (_, value) => `[position-try:${value}]`);
    /**
     * position-try-fallbacks
     */
    result = result.replace(/\bposition-try-fallbacks:([^\s]+)/g, (_, value) => `[position-try-fallbacks:${value}]`);
    /*
     |--------------------------------------------------------------------------
     | Animation Timeline API
     |--------------------------------------------------------------------------
     */
    /**
     * timeline:scroll()
     */
    result = result.replace(/\btimeline:([^\s]+)/g, (_, value) => `[animation-timeline:${value}]`);
    /**
     * animation-range
     */
    result = result.replace(/\banimation-range:([^\s]+)/g, (_, value) => `[animation-range:${value}]`);
    /**
     * animation-range-start
     */
    result = result.replace(/\banimation-range-start:([^\s]+)/g, (_, value) => `[animation-range-start:${value}]`);
    /**
     * animation-range-end
     */
    result = result.replace(/\banimation-range-end:([^\s]+)/g, (_, value) => `[animation-range-end:${value}]`);
    /*
     |--------------------------------------------------------------------------
     | Corner Shape
     |--------------------------------------------------------------------------
     */
    /**
     * corner:round
     */
    result = result.replace(/\bcorner:([^\s]+)/g, (_, value) => `[corner-shape:${value}]`);
    /*
     |--------------------------------------------------------------------------
     | Image properties
     |--------------------------------------------------------------------------
     */
    result = result.replace(/\bimage-rendering:([^\s]+)/g, (_, value) => `[image-rendering:${value}]`);
    result = result.replace(/\bimage-resolution:([^\s]+)/g, (_, value) => `[image-resolution:${value}]`);
    result = result.replace(/\bimage-orientation:([^\s]+)/g, (_, value) => `[image-orientation:${value}]`);
    /*
     |--------------------------------------------------------------------------
     | Modern CSS Functions
     |--------------------------------------------------------------------------
     */
    /**
     * color-mix-(...)
     */
    result = result.replace(/\bcolor-mix-\(([^)]+)\)/g, (_, value) => {
        const parts = value.split(",");
        if (parts.length < 3) {
            return `[color:color-mix(${value})]`;
        }
        const space = parts[0].trim();
        const color1 = resolveTailwindColor(parts[1].trim());
        const color2 = resolveTailwindColor(parts[2].trim());
        return `[color:color-mix(${space}, ${color1}, ${color2})]`;
    });
    result = result.replace(/\bbg-mix-\(([^)\s]+)\s+([^)]+)\)/g, (_, c1, c2) => `[background-color:color-mix(in oklch, ${resolveTailwindColor(c1)}, ${resolveTailwindColor(c2)})]`);
    /**
     * text-mix-(red-500 blue-500)
     */
    result = result.replace(/\btext-mix-\(([^)\s]+)\s+([^)]+)\)/g, (_, c1, c2) => `[color:color-mix(in oklch, ${resolveTailwindColor(c1)}, ${resolveTailwindColor(c2)})]`);
    /**
     * border-mix-(red-500 blue-500)
     */
    result = result.replace(/\bborder-mix-\(([^)\s]+)\s+([^)]+)\)/g, (_, c1, c2) => `[border-color:color-mix(in oklch, ${resolveTailwindColor(c1)}, ${resolveTailwindColor(c2)})]`);
    /**
     * clamp-(...)
     *
     * Note:
     * user should specify property explicitly in Tailwind arbitrary property.
     */
    result = result.replace(/\btext-clamp-\(([^)]+)\)/g, (_, value) => `[value:clamp(${value})]`);
    /**
     * dynamic-range-limit-mix-(...)
     */
    result = result.replace(/\bdynamic-range-limit-mix-\(([^)]+)\)/g, (_, value) => `[dynamic-range-limit-mix(${value})]`);
    /*
    |--------------------------------------------------------------------------
    | Gradient Mix (Tailwind compatible)
    |--------------------------------------------------------------------------
    */
    /**
     * from-mix-(red-500 blue-500)
     */
    result = result.replace(/\bfrom-mix-\(([^)\s]+)\s+([^)]+)\)/g, (_, c1, c2) => `[--tw-gradient-from:color-mix(in oklch, ${resolveTailwindColor(c1)}, ${resolveTailwindColor(c2)})]`);
    /**
     * via-mix-(red-500 blue-500)
     */
    result = result.replace(/\bvia-mix-\(([^)\s]+)\s+([^)]+)\)/g, (_, c1, c2) => `[--tw-gradient-via:color-mix(in oklch, ${resolveTailwindColor(c1)}, ${resolveTailwindColor(c2)})]`);
    /**
     * to-mix-(red-500 blue-500)
     */
    result = result.replace(/\bto-mix-\(([^)\s]+)\s+([^)]+)\)/g, (_, c1, c2) => `[--tw-gradient-to:color-mix(in oklch, ${resolveTailwindColor(c1)}, ${resolveTailwindColor(c2)})]`);
    /**
     * bg-gradient-mix-(red-500 blue-500)
     *
     * full background gradient
     */
    result = result.replace(/\bbg-gradient-mix-\(([^)\s]+)\s+([^)]+)\)/g, (_, c1, c2) => `
bg-gradient-to-r
[--tw-gradient-from:color-mix(in oklch, ${resolveTailwindColor(c1)}, ${resolveTailwindColor(c2)})]
[--tw-gradient-to:${resolveTailwindColor(c2)}]
`);
    return result;
}
