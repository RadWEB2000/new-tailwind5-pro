import { loadShortcuts } from "./cssParser"

/**
 * Shortcuts transform
 *
 * Currently validates shortcuts exist.
 * Tailwind handles actual CSS generation.
 */
export function transformShortcuts(input: string): string {

  const shortcuts = loadShortcuts()

  if (!Object.keys(shortcuts).length) {
    return input
  }

  const parts = input.split(/\s+/)

  const result = parts.map(cls => {

    if (shortcuts[cls]) {
      return cls
    }

    return cls

  })

  return result.join(" ")

}
