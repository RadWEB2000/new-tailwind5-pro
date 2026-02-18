/**
 * Expand variant grouping syntax
 *
 * Example:
 *
 * hover:(bg-red-500 text-white)
 * →
 * hover:bg-red-500 hover:text-white
 *
 * Nested example:
 *
 * sm:(hover:(bg-red-500 text-white))
 * →
 * sm:hover:bg-red-500 sm:hover:text-white
 */
export declare function transformVariantGrouping(input: string): string;
