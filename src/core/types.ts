export type TransformContext = {
  filename?: string
}

export type Feature = {

  /**
   * Unique feature name
   */
  name: string

  /**
   * Transform class string
   */
  transform: (
    input: string,
    context: TransformContext
  ) => string

}
