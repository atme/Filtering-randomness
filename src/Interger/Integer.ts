export default class Integer {
  value: number
  filtered: number

  constructor(value?: number, filtered?: number) {
    this.value = value !== undefined ? value : this.roll()
    this.filtered = filtered !== undefined ? filtered : this.value
  }

  roll = () => Math.min(Math.floor(Math.random() * 10), 9)

  reroll = () => new Integer(this.value, this.roll())
}
