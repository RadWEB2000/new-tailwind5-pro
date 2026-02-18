import { registerFeature } from "../../core/registry"
import { transformShortcuts } from "./transform"

registerFeature({

  name: "shortcuts",

  transform(input) {
    return transformShortcuts(input)
  }

})
