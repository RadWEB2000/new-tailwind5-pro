import { loadIcon } from "./loader"
import { svgToDataUri } from "./svgToDataUri"

export function transformIcons(input: string): string {

  if (!input.includes("i-")) {
    return input
  }

  return input.replace(
    /\bi-([a-z0-9]+)-([a-z0-9-]+)\b/g,
    (_, collection, icon) => {

      const svg = loadIcon(collection, icon)

      if (!svg) {
        return _
      }

      const uri = svgToDataUri(svg)

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
`

    }
  )

}
