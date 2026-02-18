import { getFeatures } from "./registry"
import type { TransformContext } from "./types"

/**
 * Main transform pipeline
 */
export function transformClassName(
  input: string,
  context: TransformContext = {}
): string {

  if (!input || typeof input !== "string") {
    return input
  }

  let result = input

  const features = getFeatures()

  for (const feature of features) {

    try {

      result = feature.transform(result, context)

    } catch (error) {

      console.warn(
        `[tailwind-variant-grouping] Feature "${feature.name}" failed:`,
        error
      )

    }

  }

  return result

}
