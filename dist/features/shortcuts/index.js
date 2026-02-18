"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registry_1 = require("../../core/registry");
const transform_1 = require("./transform");
(0, registry_1.registerFeature)({
    name: "shortcuts",
    transform(input) {
        return (0, transform_1.transformShortcuts)(input);
    }
});
