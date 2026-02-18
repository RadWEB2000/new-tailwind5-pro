"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registry_1 = require("../../core/registry");
const transform_1 = require("./transform");
/**
 * Variant grouping feature
 *
 * Enables syntax like:
 *
 * hover:(bg-red-500 text-white)
 * sm:(hover:(bg-black text-white))
 */
(0, registry_1.registerFeature)({
    name: "variant-grouping",
    transform(input) {
        return (0, transform_1.transformVariantGrouping)(input);
    }
});
