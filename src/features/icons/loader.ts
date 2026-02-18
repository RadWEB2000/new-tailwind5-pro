import fs from "fs"
import path from "path"

type IconifyCollection = {
  icons: Record<string, {
    body: string
    width?: number
    height?: number
  }>
}

const cache: Record<string, IconifyCollection> = {}

export function loadIcon(
  collection: string,
  icon: string
): string | null {

  try {

    if (!cache[collection]) {

      const file = path.resolve(
        process.cwd(),
        "node_modules",
        "@iconify-json",
        collection,
        "icons.json"
      )

      if (!fs.existsSync(file)) {
        return null
      }

      cache[collection] = JSON.parse(
        fs.readFileSync(file, "utf-8")
      )

    }

    const data = cache[collection]

    const iconData = data.icons[icon]

    if (!iconData) {
      return null
    }

    const width = iconData.width || 24
    const height = iconData.height || 24

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="currentColor">${iconData.body}</svg>`

  } catch {

    return null

  }

}
