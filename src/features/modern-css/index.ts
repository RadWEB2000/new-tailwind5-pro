import { registerFeature } from "../../core/registry"
import { transformModernCSS } from "./transform"

/**
 * Modern CSS Feature
 *
 * Adds support for modern CSS features:
 *
 * Anchor Positioning:
 *  anchor:popover
 *  position-anchor:popover
 *  pos-anchor:popover
 *
 * Animation Timeline:
 *  timeline:scroll()
 *  animation-range:entry
 *
 * Color mix:
 *  color-mix-(...)
 *  text-mix-(red-500 blue-500)
 *  bg-mix-(red-500 blue-500)
 *  border-mix-(red-500 blue-500)
 *
 * Gradient mix:
 *  from-mix-(red-500 blue-500)
 *  via-mix-(red-500 blue-500)
 *  to-mix-(red-500 blue-500)
 *  bg-gradient-mix-(red-500 blue-500)
 *
 * Image properties:
 *  image-rendering:pixelated
 *  image-resolution:300dpi
 *
 * Corner shape:
 *  corner:round
 */
registerFeature({

  name: "modern-css",

  transform(input, context) {

    return transformModernCSS(input)

  }

})
