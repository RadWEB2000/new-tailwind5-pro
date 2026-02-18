import "./features/variant-grouping";
import "./features/shortcuts";
import "./features/modern-css";
import "./features/icons";
export default function tailwindVariantGroupingPlugin(): {
    name: string;
    visitor: {
        JSXAttribute(path: any): void;
    };
};
