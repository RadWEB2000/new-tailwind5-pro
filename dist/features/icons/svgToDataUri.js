"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.svgToDataUri = svgToDataUri;
function svgToDataUri(svg) {
    const encoded = encodeURIComponent(svg)
        .replace(/'/g, "%27")
        .replace(/"/g, "%22");
    return `data:image/svg+xml,${encoded}`;
}
