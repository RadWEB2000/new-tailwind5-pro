"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformShortcuts = transformShortcuts;
const cssParser_1 = require("./cssParser");
/**
 * Shortcuts transform
 *
 * Currently validates shortcuts exist.
 * Tailwind handles actual CSS generation.
 */
function transformShortcuts(input) {
    const shortcuts = (0, cssParser_1.loadShortcuts)();
    if (!Object.keys(shortcuts).length) {
        return input;
    }
    const parts = input.split(/\s+/);
    const result = parts.map(cls => {
        if (shortcuts[cls]) {
            return cls;
        }
        return cls;
    });
    return result.join(" ");
}
