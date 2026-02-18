"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitor = void 0;
const transform_1 = require("../core/transform");
/**
 * Transform JSX className and class attributes
 */
exports.visitor = {
    JSXAttribute(path) {
        const attrName = path.node?.name?.name;
        if (attrName !== "className" && attrName !== "class") {
            return;
        }
        const valueNode = path.node.value;
        if (!valueNode) {
            return;
        }
        // case: className="..."
        if (valueNode.type === "StringLiteral") {
            valueNode.value = (0, transform_1.transformClassName)(valueNode.value, { filename: path?.hub?.file?.opts?.filename });
            return;
        }
        // case: className={"..."}
        if (valueNode.type === "JSXExpressionContainer" &&
            valueNode.expression?.type === "StringLiteral") {
            valueNode.expression.value = (0, transform_1.transformClassName)(valueNode.expression.value, { filename: path?.hub?.file?.opts?.filename });
            return;
        }
        // case: className={`...`}
        if (valueNode.type === "JSXExpressionContainer" &&
            valueNode.expression?.type === "TemplateLiteral") {
            for (const quasi of valueNode.expression.quasis) {
                quasi.value.raw = (0, transform_1.transformClassName)(quasi.value.raw, { filename: path?.hub?.file?.opts?.filename });
                quasi.value.cooked = (0, transform_1.transformClassName)(quasi.value.cooked, { filename: path?.hub?.file?.opts?.filename });
            }
        }
    }
};
