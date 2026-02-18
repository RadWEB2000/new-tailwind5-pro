import type { Feature } from "./types"

const features: Feature[] = []

/**
 * Register new feature
 */
export function registerFeature(feature: Feature): void {

  if (features.find(f => f.name === feature.name)) {
    throw new Error(
      `[tailwind-variant-grouping] Feature "${feature.name}" already registered`
    )
  }

  features.push(feature)

}

/**
 * Get all registered features
 */
export function getFeatures(): Feature[] {
  return features
}
