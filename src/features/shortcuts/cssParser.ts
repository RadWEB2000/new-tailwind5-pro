import fs from "fs"
import path from "path"

let cache: Record<string, true> | null = null

/**
 * Find global.css automatically
 */
function findGlobalCSS(): string | null {

  const possiblePaths = [

    "src/app/globals.css",
    "src/styles/global.css",
    "src/global.css",
    "app/globals.css",
    "global.css"

  ]

  for (const p of possiblePaths) {

    const full = path.resolve(process.cwd(), p)

    if (fs.existsSync(full)) {
      return full
    }

  }

  return null

}

/**
 * Parse @shortcut from CSS
 */
export function loadShortcuts(): Record<string, true> {

  if (cache) {
    return cache
  }

  const cssFile = findGlobalCSS()

  if (!cssFile) {
    cache = {}
    return cache
  }

  const css = fs.readFileSync(cssFile, "utf-8")

  const shortcuts: Record<string, true> = {}

  const regex = /@shortcut\s+([a-zA-Z0-9_-]+)/g

  let match: RegExpExecArray | null

  while ((match = regex.exec(css))) {

    const name = match[1]

    shortcuts[name] = true

  }

  cache = shortcuts

  return shortcuts

}
