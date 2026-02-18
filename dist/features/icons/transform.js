"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformIcons = transformIcons;
const loader_1 = require("./loader");
const svgToDataUri_1 = require("./svgToDataUri");
function transformIcons(input) {
    if (!input.includes("i-")) {
        return input;
    }
    return input.replace(/\bi-([a-z0-9]+)-([a-z0-9-]+)\b/g, (_, collection, icon) => {
        const svg = (0, loader_1.loadIcon)(collection, icon);
        if (!svg) {
            return _;
        }
        const uri = (0, svgToDataUri_1.svgToDataUri)(svg);
        return `
inline-block
align-middle
bg-current
[mask-image:url("${uri}")]
[-webkit-mask-image:url("${uri}")]
[mask-repeat:no-repeat]
[-webkit-mask-repeat:no-repeat]
[mask-size:100%_100%]
[-webkit-mask-size:100%_100%]
w-[1em]
h-[1em]
`;
    });
}
