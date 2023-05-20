export type AllValuesPartial<T> = {
  [P in keyof T]: Partial<T[P]>
}
