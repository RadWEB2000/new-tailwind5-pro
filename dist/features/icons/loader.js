"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadIcon = loadIcon;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const cache = {};
function loadIcon(collection, icon) {
    try {
        if (!cache[collection]) {
            const file = path_1.default.resolve(process.cwd(), "node_modules", "@iconify-json", collection, "icons.json");
            if (!fs_1.default.existsSync(file)) {
                return null;
            }
            cache[collection] = JSON.parse(fs_1.default.readFileSync(file, "utf-8"));
        }
        const data = cache[collection];
        const iconData = data.icons[icon];
        if (!iconData) {
            return null;
        }
        const width = iconData.width || 24;
        const height = iconData.height || 24;
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="currentColor">${iconData.body}</svg>`;
    }
    catch {
        return null;
    }
}
