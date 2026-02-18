import { transformClassName } from "../core/transform"

/**
 * Transform JSX className and class attributes
 */
export const visitor = {

  JSXAttribute(path: any) {

    const attrName = path.node?.name?.name

    if (attrName !== "className" && attrName !== "class") {
      return
    }

    const valueNode = path.node.value

    if (!valueNode) {
      return
    }

    // case: className="..."
    if (valueNode.type === "StringLiteral") {

      valueNode.value = transformClassName(
        valueNode.value,
        { filename: path?.hub?.file?.opts?.filename }
      )

      return
    }

    // case: className={"..."}
    if (
      valueNode.type === "JSXExpressionContainer" &&
      valueNode.expression?.type === "StringLiteral"
    ) {

      valueNode.expression.value = transformClassName(
        valueNode.expression.value,
        { filename: path?.hub?.file?.opts?.filename }
      )

      return

    }

    // case: className={`...`}
    if (
      valueNode.type === "JSXExpressionContainer" &&
      valueNode.expression?.type === "TemplateLiteral"
    ) {

      for (const quasi of valueNode.expression.quasis) {

        quasi.value.raw = transformClassName(
          quasi.value.raw,
          { filename: path?.hub?.file?.opts?.filename }
        )

        quasi.value.cooked = transformClassName(
          quasi.value.cooked,
          { filename: path?.hub?.file?.opts?.filename }
        )

      }

    }

  }

}
