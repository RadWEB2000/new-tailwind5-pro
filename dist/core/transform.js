"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformClassName = transformClassName;
const registry_1 = require("./registry");
/**
 * Main transform pipeline
 */
function transformClassName(input, context = {}) {
    if (!input || typeof input !== "string") {
        return input;
    }
    let result = input;
    const features = (0, registry_1.getFeatures)();
    for (const feature of features) {
        try {
            result = feature.transform(result, context);
        }
        catch (error) {
            console.warn(`[tailwind-variant-grouping] Feature "${feature.name}" failed:`, error);
        }
    }
    return result;
}
