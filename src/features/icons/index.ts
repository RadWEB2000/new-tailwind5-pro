import { registerFeature } from "../../core/registry"
import { transformIcons } from "./transform"

registerFeature({

  name: "icons",

  transform(input) {

    return transformIcons(input)

  }

})
