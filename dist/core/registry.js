"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerFeature = registerFeature;
exports.getFeatures = getFeatures;
const features = [];
/**
 * Register new feature
 */
function registerFeature(feature) {
    if (features.find(f => f.name === feature.name)) {
        throw new Error(`[tailwind-variant-grouping] Feature "${feature.name}" already registered`);
    }
    features.push(feature);
}
/**
 * Get all registered features
 */
function getFeatures() {
    return features;
}
