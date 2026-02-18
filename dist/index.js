"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tailwindVariantGroupingPlugin;
require("./features/variant-grouping");
require("./features/shortcuts");
require("./features/modern-css");
require("./features/icons");
const visitor_1 = require("./swc/visitor");
function tailwindVariantGroupingPlugin() {
    return {
        name: "tailwind-variant-grouping",
        visitor: visitor_1.visitor
    };
}
