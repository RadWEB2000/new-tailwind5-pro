import { registerFeature } from "../../core/registry"
import { transformVariantGrouping } from "./transform"

/**
 * Variant grouping feature
 *
 * Enables syntax like:
 *
 * hover:(bg-red-500 text-white)
 * sm:(hover:(bg-black text-white))
 */
registerFeature({

  name: "variant-grouping",

  transform(input) {
    return transformVariantGrouping(input)
  }

})
