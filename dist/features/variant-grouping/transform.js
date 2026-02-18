"use strict";
/**
 * Expand variant grouping syntax
 *
 * Example:
 *
 * hover:(bg-red-500 text-white)
 * →
 * hover:bg-red-500 hover:text-white
 *
 * Nested example:
 *
 * sm:(hover:(bg-red-500 text-white))
 * →
 * sm:hover:bg-red-500 sm:hover:text-white
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformVariantGrouping = transformVariantGrouping;
function transformVariantGrouping(input) {
    if (!input.includes(":(")) {
        return input;
    }
    let result = input;
    const regex = /([^\s:()]+):\(([^()]+)\)/g;
    let match;
    while ((match = regex.exec(result))) {
        const fullMatch = match[0];
        const variant = match[1];
        const inner = match[2];
        const expanded = inner
            .split(/\s+/)
            .filter(Boolean)
            .map(cls => {
            // support nested grouping
            if (cls.includes(":(")) {
                return transformVariantGrouping(`${variant}:${cls}`);
            }
            return `${variant}:${cls}`;
        })
            .join(" ");
        result = result.replace(fullMatch, expanded);
        regex.lastIndex = 0;
    }
    return result;
}
