export default class Binary {
  value: number
  filtered: number

  constructor(value?: number, filtered?: number) {
    this.value = value !== undefined ? value : this.roll()
    this.filtered = filtered !== undefined ? filtered : this.value
  }

  roll = () => Math.round(Math.random())

  reroll = () => new Binary(this.value, this.roll())

  invert = () => new Binary(this.value, this.filtered ? 0 : 1)
}
