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
export declare function transformModernCSS(input: string): string;
