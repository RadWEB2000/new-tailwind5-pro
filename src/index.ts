import "./features/variant-grouping"
import "./features/shortcuts"
import "./features/modern-css"
import "./features/icons"

import { visitor } from "./swc/visitor"

export default function tailwindVariantGroupingPlugin() {

  return {

    name: "tailwind-variant-grouping",

    visitor

  }

}
