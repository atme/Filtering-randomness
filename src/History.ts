export default class History<T> {
  size: number
  values: T[]

  constructor(size: number, array: T[] = []) {
    this.size = size
    this.values = array.slice(-1 * this.size)
  }

  copy = (values: T[]) => new History(this.size, values)

  add = (value: T) => this.copy([...this.values, value])

  replaceLast = (fn: (v: T) => T) =>
    this.copy([...this.values.slice(0, -1), fn(this.last())])

  last = () => this.values[this.values.length - 1]
}
