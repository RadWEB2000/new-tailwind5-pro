"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadShortcuts = loadShortcuts;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let cache = null;
/**
 * Find global.css automatically
 */
function findGlobalCSS() {
    const possiblePaths = [
        "src/app/globals.css",
        "src/styles/global.css",
        "src/global.css",
        "app/globals.css",
        "global.css"
    ];
    for (const p of possiblePaths) {
        const full = path_1.default.resolve(process.cwd(), p);
        if (fs_1.default.existsSync(full)) {
            return full;
        }
    }
    return null;
}
/**
 * Parse @shortcut from CSS
 */
function loadShortcuts() {
    if (cache) {
        return cache;
    }
    const cssFile = findGlobalCSS();
    if (!cssFile) {
        cache = {};
        return cache;
    }
    const css = fs_1.default.readFileSync(cssFile, "utf-8");
    const shortcuts = {};
    const regex = /@shortcut\s+([a-zA-Z0-9_-]+)/g;
    let match;
    while ((match = regex.exec(css))) {
        const name = match[1];
        shortcuts[name] = true;
    }
    cache = shortcuts;
    return shortcuts;
}
